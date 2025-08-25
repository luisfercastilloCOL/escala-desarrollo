import React, { useState, useEffect } from 'react'
import { EvaluacionDesarrollo } from '../types/evaluacion'

const Evaluacion: React.FC = () => {
  const [formData, setFormData] = useState<EvaluacionDesarrollo>({
    id: '',
    fecha: new Date().toISOString().split('T')[0],
    paciente: {
      nombre: '',
      apellidos: '',
      fechaNacimiento: '',
      semanasGestacion: '',
      genero: ''
    },
    areas: {
      motricidadGruesa: {
        nombre: 'Motricidad Gruesa',
        codigo: 'MG',
        items: [],
        puntuacionDirecta: 0,
        puntuacionTipica: 0,
        percentil: 0
      },
      motricidadFinaAdaptativa: {
        nombre: 'Motricidad Fina Adaptativa',
        codigo: 'MFA',
        items: [],
        puntuacionDirecta: 0,
        puntuacionTipica: 0,
        percentil: 0
      },
      audicionLenguaje: {
        nombre: 'Audición y Lenguaje',
        codigo: 'AL',
        items: [],
        puntuacionDirecta: 0,
        puntuacionTipica: 0,
        percentil: 0
      },
      personalSocial: {
        nombre: 'Personal Social',
        codigo: 'PS',
        items: [],
        puntuacionDirecta: 0,
        puntuacionTipica: 0,
        percentil: 0
      }
    },
    puntuacionTotal: 0,
    nivelDesarrollo: ''
  })

  const [edadCronologica, setEdadCronologica] = useState({ años: 0, meses: 0, dias: 0 })
  const [edadCorregida, setEdadCorregida] = useState({ años: 0, meses: 0, dias: 0 })
  const [evaluacionIniciada, setEvaluacionIniciada] = useState(false)
  const [evaluacionAreas, setEvaluacionAreas] = useState(false)
  const [mensaje, setMensaje] = useState('')
  
  // Estado para controlar la evaluación de cada área
  const [areaActual, setAreaActual] = useState<string>('')
  const [rangoActual, setRangoActual] = useState<string>('')
  const [itemActual, setItemActual] = useState<number>(0)
  const [areasCompletadas, setAreasCompletadas] = useState<string[]>([])
  const [evaluacionCompletada, setEvaluacionCompletada] = useState(false)

  const calcularEdadCronologica = (fechaNacimiento: string) => {
    if (!fechaNacimiento) return { años: 0, meses: 0, dias: 0 }
    
    const nacimiento = new Date(fechaNacimiento)
    const hoy = new Date()
    
    let años = hoy.getFullYear() - nacimiento.getFullYear()
    let meses = hoy.getMonth() - nacimiento.getMonth()
    let dias = hoy.getDate() - nacimiento.getDate()
    
    if (dias < 0) {
      meses--
      const ultimoMes = new Date(hoy.getFullYear(), hoy.getMonth(), 0)
      dias += ultimoMes.getDate()
    }
    
    if (meses < 0) {
      años--
      meses += 12
    }
    
    return { años, meses, dias }
  }

  const calcularEdadCorregida = (fechaNacimiento: string, semanasGestacion: string) => {
    if (!fechaNacimiento || !semanasGestacion) return { años: 0, meses: 0, dias: 0 }
    
    const edadCronologica = calcularEdadCronologica(fechaNacimiento)
    const semanasPrematura = 40 - parseInt(semanasGestacion)
    
    if (semanasPrematura <= 0) return edadCronologica
    
    const diasPrematura = semanasPrematura * 7
    const mesesPrematura = Math.floor(diasPrematura / 30.44)
    const añosPrematura = Math.floor(mesesPrematura / 12)
    
    return {
      años: Math.max(0, edadCronologica.años - añosPrematura),
      meses: Math.max(0, edadCronologica.meses - (mesesPrematura % 12)),
      dias: Math.max(0, edadCronologica.dias - (diasPrematura % 30.44))
    }
  }

  const handleFechaNacimientoChange = (fecha: string) => {
    const nuevaEdadCronologica = calcularEdadCronologica(fecha)
    const nuevaEdadCorregida = calcularEdadCorregida(fecha, formData.paciente.semanasGestacion)
    
    setEdadCronologica(nuevaEdadCronologica)
    setEdadCorregida(nuevaEdadCorregida)
    
    setFormData({
      ...formData,
      paciente: { ...formData.paciente, fechaNacimiento: fecha }
    })
  }

  const handleSemanasGestacionChange = (semanas: string) => {
    const nuevaEdadCorregida = calcularEdadCorregida(formData.paciente.fechaNacimiento, semanas)
    setEdadCorregida(nuevaEdadCorregida)
    
    setFormData({
      ...formData,
      paciente: { ...formData.paciente, semanasGestacion: semanas }
    })
  }

  const validarFormulario = () => {
    if (!formData.paciente.nombre.trim()) {
      setMensaje('Por favor ingrese el nombre del paciente')
      return false
    }
    if (!formData.paciente.apellidos.trim()) {
      setMensaje('Por favor ingrese los apellidos del paciente')
      return false
    }
    if (!formData.paciente.fechaNacimiento) {
      setMensaje('Por favor ingrese la fecha de nacimiento')
      return false
    }
    if (!formData.paciente.semanasGestacion) {
      setMensaje('Por favor ingrese las semanas de gestación')
      return false
    }
    if (!formData.paciente.genero) {
      setMensaje('Por favor seleccione el género')
      return false
    }
    return true
  }

  const iniciarEvaluacion = () => {
    if (!validarFormulario()) return

    const id = Date.now().toString()
    
    setFormData({
      ...formData,
      id: id,
      fecha: new Date().toISOString().split('T')[0]
    })
    
    setEvaluacionIniciada(true)
    setMensaje('¡Evaluación iniciada exitosamente!')
  }

  const determinarRangoEdad = (edad: { años: number, meses: number, dias: number }) => {
    const totalDias = edad.años * 365 + edad.meses * 30.44 + edad.dias
    
    if (totalDias <= 30) return '0-1 mes'
    if (totalDias <= 90) return '1-3 meses'
    if (totalDias <= 180) return '3-6 meses'
    if (totalDias <= 270) return '6-9 meses'
    if (totalDias <= 365) return '9-12 meses'
    if (totalDias <= 547) return '1-1.5 años'
    if (totalDias <= 730) return '1.5-2 años'
    if (totalDias <= 1095) return '2-3 años'
    if (totalDias <= 1460) return '3-4 años'
    if (totalDias <= 1825) return '4-5 años'
    if (totalDias <= 2190) return '5-6 años'
    if (totalDias <= 2555) return '6-7 años'
    return '6-7 años'
  }

  const obtenerItemsArea = (area: string, rango: string) => {
    // Items completos para todas las áreas y rangos
    const itemsBase: Record<string, Record<string, Array<{id: string, descripcion: string, edadAparicion: string}>>> = {
      motricidadGruesa: {
        '0-1 mes': [
          { id: 'MG1', descripcion: 'Levanta la cabeza cuando está boca abajo', edadAparicion: '1 mes' },
          { id: 'MG2', descripcion: 'Mantiene la cabeza erguida brevemente', edadAparicion: '1 mes' },
          { id: 'MG3', descripcion: 'Hace movimientos de brazos y piernas', edadAparicion: '1 mes' }
        ],
        '1-3 meses': [
          { id: 'MG4', descripcion: 'Levanta la cabeza 45 grados', edadAparicion: '2 meses' },
          { id: 'MG5', descripcion: 'Se mantiene sentado con apoyo', edadAparicion: '3 meses' },
          { id: 'MG6', descripcion: 'Rueda de boca arriba a boca abajo', edadAparicion: '3 meses' }
        ],
        '3-6 meses': [
          { id: 'MG7', descripcion: 'Se mantiene sentado sin apoyo', edadAparicion: '4 meses' },
          { id: 'MG8', descripcion: 'Se para con apoyo', edadAparicion: '5 meses' },
          { id: 'MG9', descripcion: 'Gatea', edadAparicion: '6 meses' }
        ],
        '6-9 meses': [
          { id: 'MG10', descripcion: 'Se para solo', edadAparicion: '7 meses' },
          { id: 'MG11', descripcion: 'Camina con apoyo', edadAparicion: '8 meses' },
          { id: 'MG12', descripcion: 'Se agacha y se levanta', edadAparicion: '9 meses' }
        ],
        '9-12 meses': [
          { id: 'MG13', descripcion: 'Camina solo', edadAparicion: '10 meses' },
          { id: 'MG14', descripcion: 'Sube escaleras gateando', edadAparicion: '11 meses' },
          { id: 'MG15', descripcion: 'Corre', edadAparicion: '12 meses' }
        ]
      },
      motricidadFinaAdaptativa: {
        '0-1 mes': [
          { id: 'MFA1', descripcion: 'Sigue objetos con la mirada', edadAparicion: '1 mes' },
          { id: 'MFA2', descripcion: 'Abre y cierra las manos', edadAparicion: '1 mes' },
          { id: 'MFA3', descripcion: 'Lleva objetos a la boca', edadAparicion: '1 mes' }
        ],
        '1-3 meses': [
          { id: 'MFA4', descripcion: 'Agarra objetos pequeños', edadAparicion: '2 meses' },
          { id: 'MFA5', descripcion: 'Transfiere objetos entre manos', edadAparicion: '3 meses' },
          { id: 'MFA6', descripcion: 'Busca objetos que desaparecen', edadAparicion: '3 meses' }
        ],
        '3-6 meses': [
          { id: 'MFA7', descripcion: 'Agarra objetos con pinza', edadAparicion: '4 meses' },
          { id: 'MFA8', descripcion: 'Golpea objetos', edadAparicion: '5 meses' },
          { id: 'MFA9', descripcion: 'Apila bloques', edadAparicion: '6 meses' }
        ],
        '6-9 meses': [
          { id: 'MFA10', descripcion: 'Saca objetos de contenedores', edadAparicion: '7 meses' },
          { id: 'MFA11', descripcion: 'Garabatea', edadAparicion: '8 meses' },
          { id: 'MFA12', descripcion: 'Imita trazos', edadAparicion: '9 meses' }
        ],
        '9-12 meses': [
          { id: 'MFA13', descripcion: 'Construye torre de 2 bloques', edadAparicion: '10 meses' },
          { id: 'MFA14', descripcion: 'Dibuja círculo', edadAparicion: '11 meses' },
          { id: 'MFA15', descripcion: 'Usa cuchara', edadAparicion: '12 meses' }
        ]
      },
      audicionLenguaje: {
        '0-1 mes': [
          { id: 'AL1', descripcion: 'Responde a sonidos', edadAparicion: '1 mes' },
          { id: 'AL2', descripcion: 'Hace sonidos guturales', edadAparicion: '1 mes' },
          { id: 'AL3', descripcion: 'Gira la cabeza hacia sonidos', edadAparicion: '1 mes' }
        ],
        '1-3 meses': [
          { id: 'AL4', descripcion: 'Balbucea sílabas', edadAparicion: '2 meses' },
          { id: 'AL5', descripcion: 'Responde a su nombre', edadAparicion: '3 meses' },
          { id: 'AL6', descripcion: 'Imita sonidos simples', edadAparicion: '3 meses' }
        ],
        '3-6 meses': [
          { id: 'AL7', descripcion: 'Dice "mama" y "papa"', edadAparicion: '4 meses' },
          { id: 'AL8', descripcion: 'Entiende "no"', edadAparicion: '5 meses' },
          { id: 'AL9', descripcion: 'Dice 2-3 palabras', edadAparicion: '6 meses' }
        ],
        '6-9 meses': [
          { id: 'AL10', descripcion: 'Dice 4-6 palabras', edadAparicion: '7 meses' },
          { id: 'AL11', descripcion: 'Combina 2 palabras', edadAparicion: '8 meses' },
          { id: 'AL12', descripcion: 'Dice 10-15 palabras', edadAparicion: '9 meses' }
        ],
        '9-12 meses': [
          { id: 'AL13', descripcion: 'Dice 20-50 palabras', edadAparicion: '10 meses' },
          { id: 'AL14', descripcion: 'Hace preguntas', edadAparicion: '11 meses' },
          { id: 'AL15', descripcion: 'Cuenta hasta 3', edadAparicion: '12 meses' }
        ]
      },
      personalSocial: {
        '0-1 mes': [
          { id: 'PS1', descripcion: 'Mira a la cara', edadAparicion: '1 mes' },
          { id: 'PS2', descripcion: 'Sonríe socialmente', edadAparicion: '1 mes' },
          { id: 'PS3', descripcion: 'Reconoce voces familiares', edadAparicion: '1 mes' }
        ],
        '1-3 meses': [
          { id: 'PS4', descripcion: 'Juega con sus manos', edadAparicion: '2 meses' },
          { id: 'PS5', descripcion: 'Muestra preferencia por personas', edadAparicion: '3 meses' },
          { id: 'PS6', descripcion: 'Responde a expresiones faciales', edadAparicion: '3 meses' }
        ],
        '3-6 meses': [
          { id: 'PS7', descripcion: 'Juega con otros niños', edadAparicion: '4 meses' },
          { id: 'PS8', descripcion: 'Comparte juguetes', edadAparicion: '5 meses' },
          { id: 'PS9', descripcion: 'Ayuda a vestirse', edadAparicion: '6 meses' }
        ],
        '6-9 meses': [
          { id: 'PS10', descripcion: 'Juega a esconderse', edadAparicion: '7 meses' },
          { id: 'PS11', descripcion: 'Imita acciones', edadAparicion: '8 meses' },
          { id: 'PS12', descripcion: 'Entiende turnos', edadAparicion: '9 meses' }
        ],
        '9-12 meses': [
          { id: 'PS13', descripcion: 'Juega roles', edadAparicion: '10 meses' },
          { id: 'PS14', descripcion: 'Sigue reglas simples', edadAparicion: '11 meses' },
          { id: 'PS15', descripcion: 'Expresa emociones', edadAparicion: '12 meses' }
        ]
      }
    }
    
    return itemsBase[area]?.[rango] || []
  }

  const obtenerRangoSiguiente = (rango: string): string | null => {
    const rangos = [
      '0-1 mes', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses',
      '1-1.5 años', '1.5-2 años', '2-3 años', '3-4 años', '4-5 años', '5-6 años', '6-7 años'
    ]
    const index = rangos.indexOf(rango)
    return index < rangos.length - 1 ? rangos[index + 1] : null
  }

  const calcularPuntuacionTipica = (area: string, puntuacionDirecta: number, rango: string): number => {
    // Simular cálculo (deberías usar tus tablas reales de Excel)
    return puntuacionDirecta * 10
  }

  const calcularPercentil = (puntuacionTipica: number): number => {
    // Simular cálculo (deberías usar tus tablas reales de Excel)
    return Math.min(99, Math.max(1, Math.floor(puntuacionTipica / 10)))
  }

  const iniciarEvaluacionAreas = () => {
    // Determinar rango inicial basado en edad corregida
    const rangoInicial = determinarRangoEdad(edadCorregida)
    console.log('Edad corregida:', edadCorregida)
    console.log('Rango inicial:', rangoInicial)
    
    setRangoActual(rangoInicial)
    
    // Comenzar con la primera área
    setAreaActual('motricidadGruesa')
    setItemActual(0)
    setEvaluacionAreas(true)
    setMensaje(`Iniciando evaluación de Motricidad Gruesa en rango ${rangoInicial}...`)
  }

  const obtenerNumeroSecuencial = (area: string) => {
    const areaData = formData.areas[area as keyof typeof formData.areas]
    const itemsEvaluados = areaData.items.filter(item => item.completado !== null)
    return itemsEvaluados.length + 1
  }

  const evaluarItem = (cumple: boolean) => {
    if (!areaActual || !rangoActual) {
      console.log('Error: área o rango no definidos', { areaActual, rangoActual })
      return
    }

    const areaData = formData.areas[areaActual as keyof typeof formData.areas]
    const itemsRango = obtenerItemsArea(areaActual, rangoActual)
    
    console.log('Evaluando item:', { areaActual, rangoActual, itemActual, itemsRango })
    
    if (itemActual >= itemsRango.length) {
      // Cambiar al siguiente rango
      const siguienteRango = obtenerRangoSiguiente(rangoActual)
      if (siguienteRango) {
        setRangoActual(siguienteRango)
        setItemActual(0)
        setMensaje(`Cambiando a ${siguienteRango}...`)
      } else {
        // Área completada
        completarArea()
      }
      return
    }

    const item = itemsRango[itemActual]
    const nuevoItem = {
      ...item,
      completado: cumple,
      observaciones: cumple ? 'Cumple' : 'No cumple',
      rango: rangoActual
    }

    // Agregar item a la lista de evaluados
    const nuevosItems = [...areaData.items, nuevoItem]
    
    // Verificar si hay 2 consecutivos que no cumplen
    const ultimosItems = nuevosItems.slice(-2)
    if (ultimosItems.length === 2 && 
        ultimosItems.every(item => item.completado === false)) {
      // Terminar área
      completarArea()
      return
    }

    // Actualizar área
    const nuevaArea = {
      ...areaData,
      items: nuevosItems
    }

    setFormData({
      ...formData,
      areas: {
        ...formData.areas,
        [areaActual]: nuevaArea
      }
    })

    // Pasar al siguiente item
    setItemActual(itemActual + 1)
    
    if (itemActual + 1 >= itemsRango.length) {
      // Cambiar al siguiente rango
      const siguienteRango = obtenerRangoSiguiente(rangoActual)
      if (siguienteRango) {
        setRangoActual(siguienteRango)
        setItemActual(0)
        setMensaje(`Cambiando a ${siguienteRango}...`)
      } else {
        // Área completada
        completarArea()
      }
    }
  }

  const completarArea = () => {
    // Calcular puntuación directa (último item que cumple)
    const areaData = formData.areas[areaActual as keyof typeof formData.areas]
    const itemsEvaluados = areaData.items.filter(item => item.completado !== null)
    
    let puntuacionDirecta = 0
    for (let i = itemsEvaluados.length - 1; i >= 0; i--) {
      if (itemsEvaluados[i].completado) {
        puntuacionDirecta = parseInt(itemsEvaluados[i].id.replace(/\D/g, ''))
        break
      }
    }

    // Calcular puntuación típica y percentil
    const puntuacionTipica = calcularPuntuacionTipica(areaActual, puntuacionDirecta, rangoActual)
    const percentil = calcularPercentil(puntuacionTipica)

    // Actualizar área con puntuaciones
    const areaActualizada = {
      ...areaData,
      puntuacionDirecta,
      puntuacionTipica,
      percentil
    }

    setFormData({
      ...formData,
      areas: {
        ...formData.areas,
        [areaActual]: areaActualizada
      }
    })

    // Marcar área como completada
    setAreasCompletadas([...areasCompletadas, areaActual])
    
    // Pasar a la siguiente área
    const siguienteArea = obtenerSiguienteArea(areaActual)
    if (siguienteArea) {
      setAreaActual(siguienteArea)
      setRangoActual(determinarRangoEdad(edadCorregida))
      setItemActual(0)
      setMensaje(`Iniciando evaluación de ${formData.areas[siguienteArea as keyof typeof formData.areas].nombre}...`)
    } else {
      // Todas las áreas completadas
      setEvaluacionCompletada(true)
      setMensaje('¡Evaluación completada! Todas las áreas han sido evaluadas.')
      guardarResultados()
    }
  }

  const obtenerSiguienteArea = (areaActual: string): string | null => {
    const areas = ['motricidadGruesa', 'motricidadFinaAdaptativa', 'audicionLenguaje', 'personalSocial']
    const index = areas.indexOf(areaActual)
    return index < areas.length - 1 ? areas[index + 1] : null
  }

  const obtenerNombreArea = (codigo: string) => {
    const areas = {
      motricidadGruesa: 'Motricidad Gruesa',
      motricidadFinaAdaptativa: 'Motricidad Fina Adaptativa',
      audicionLenguaje: 'Audición y Lenguaje',
      personalSocial: 'Personal Social'
    }
    return areas[codigo as keyof typeof areas] || codigo
  }

  const guardarResultados = () => {
    const resultados = {
      fecha: new Date().toISOString(),
      paciente: formData.paciente,
      edadCronologica,
      edadCorregida,
      areas: formData.areas,
      puntuacionTotal: Object.values(formData.areas).reduce((sum, area) => sum + area.puntuacionTipica, 0)
    }

    const contenido = JSON.stringify(resultados, null, 2)
    const nombreArchivo = `evaluacion_${formData.paciente.nombre}_${formData.paciente.apellidos}_${new Date().toISOString().split('T')[0]}.txt`
    
    // Crear archivo de descarga
    const blob = new Blob([contenido], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = nombreArchivo
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    setMensaje('Resultados guardados en archivo de texto')
  }

  const agruparItemsPorRango = (items: any[]) => {
    const grupos: { [key: string]: any[] } = {}
    items.forEach(item => {
      if (item.rango) {
        if (!grupos[item.rango]) {
          grupos[item.rango] = []
        }
        grupos[item.rango].push(item)
      }
    })
    return grupos
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Evaluación del Desarrollo
      </h1>
      
      {!evaluacionIniciada ? (
        // Formulario inicial
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Información del Paciente
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.paciente.nombre}
                onChange={(e) => setFormData({
                  ...formData,
                  paciente: { ...formData.paciente, nombre: e.target.value }
                })}
                placeholder="Ingrese el nombre"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Apellidos *
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.paciente.apellidos}
                onChange={(e) => setFormData({
                  ...formData,
                  paciente: { ...formData.paciente, apellidos: e.target.value }
                })}
                placeholder="Ingrese los apellidos"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fecha de Nacimiento *
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.paciente.fechaNacimiento}
                onChange={(e) => handleFechaNacimientoChange(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Semanas de Gestación *
              </label>
              <input
                type="number"
                min="20"
                max="45"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.paciente.semanasGestacion}
                onChange={(e) => handleSemanasGestacionChange(e.target.value)}
                placeholder="Ej: 40"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Género *
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.paciente.genero}
                onChange={(e) => setFormData({
                  ...formData,
                  paciente: { ...formData.paciente, genero: e.target.value }
                })}
              >
                <option value="">Seleccionar</option>
                <option value="M">Masculino</option>
                <option value="F">Femenino</option>
              </select>
            </div>
          </div>
          
          {/* Información de Edades */}
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-medium text-blue-900 mb-3">Información de Edades</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">
                  Edad Cronológica
                </label>
                <div className="text-blue-900 font-medium">
                  {edadCronologica.años} años, {edadCronologica.meses} meses, {edadCronologica.dias} días
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">
                  Edad Corregida
                </label>
                <div className="text-blue-900 font-medium">
                  {edadCorregida.años} años, {edadCorregida.meses} meses, {edadCorregida.dias} días
                </div>
              </div>
            </div>
          </div>
          
          {/* Mensaje de estado */}
          {mensaje && (
            <div className={`p-3 rounded-md mb-4 ${
              mensaje.includes('exitosamente') 
                ? 'bg-green-100 text-green-800 border border-green-200' 
                : 'bg-red-100 text-red-800 border border-red-200'
            }`}>
              {mensaje}
            </div>
          )}
          
          <div className="text-center">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={iniciarEvaluacion}
            >
              Iniciar Evaluación
            </button>
          </div>
        </div>
      ) : !evaluacionAreas ? (
        // Botón para continuar a evaluación de áreas
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Evaluación Iniciada
          </h2>
          <p className="text-gray-600 mb-6">
            Paciente: {formData.paciente.nombre} {formData.paciente.apellidos}
          </p>
          <p className="text-gray-600 mb-6">
            Edad Corregida: {edadCorregida.años} años, {edadCorregida.meses} meses, {edadCorregida.dias} días
          </p>
          <p className="text-gray-600 mb-6">
            Rango de Edad: {determinarRangoEdad(edadCorregida)}
          </p>
          
          <div className="space-y-3">
            <button
              className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors w-full"
              onClick={iniciarEvaluacionAreas}
            >
              Continuar Evaluación de Áreas
            </button>
            
            <button
              className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors w-full"
              onClick={() => {
                setEvaluacionIniciada(false)
                setMensaje('')
              }}
            >
              Nueva Evaluación
            </button>
          </div>
        </div>
      ) : (
        // Evaluación de áreas
        <div className="space-y-6">
          {/* Header de evaluación */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Evaluación de {obtenerNombreArea(areaActual)}
            </h2>
            <p className="text-gray-600 mb-2">
              Rango actual: <span className="font-semibold">{rangoActual}</span>
            </p>
            <p className="text-gray-600 mb-4">
              Áreas completadas: {areasCompletadas.length}/4
            </p>
            
            {mensaje && (
              <div className="p-3 rounded-md mb-4 bg-blue-100 text-blue-800 border border-blue-200">
                {mensaje}
              </div>
            )}
          </div>

          {/* Evaluación item a item */}
          {!evaluacionCompletada && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Evaluar Item
              </h3>
              
              {(() => {
                const itemsRango = obtenerItemsArea(areaActual, rangoActual)
                console.log('Items del rango:', itemsRango)
                
                if (itemsRango.length === 0) {
                  return (
                    <div className="text-center text-red-600 p-4">
                      No hay items disponibles para el rango {rangoActual} en {obtenerNombreArea(areaActual)}
                    </div>
                  )
                }
                
                if (itemActual < itemsRango.length) {
                  const item = itemsRango[itemActual]
                  const numeroSecuencial = obtenerNumeroSecuencial(areaActual)
                  
                  return (
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-500">
                          Item {numeroSecuencial} - {rangoActual}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.id}
                        </span>
                      </div>
                      
                      <p className="text-lg font-medium text-gray-800 mb-4">
                        {item.descripcion}
                      </p>
                      
                      <div className="flex space-x-4">
                        <button
                          className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                          onClick={() => evaluarItem(true)}
                        >
                          ✓ Cumple
                        </button>
                        <button
                          className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                          onClick={() => evaluarItem(false)}
                        >
                          ✗ No Cumple
                        </button>
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <div className="text-center text-gray-600">
                      Cambiando al siguiente rango...
                    </div>
                  )
                }
              })()}
            </div>
          )}

          {/* Resumen de área actual con items por rangos */}
          {areaActual && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Resumen de {obtenerNombreArea(areaActual)}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm text-blue-600 font-medium">Puntuación Directa</div>
                  <div className="text-2xl font-bold text-blue-800">
                    {formData.areas[areaActual as keyof typeof formData.areas].puntuacionDirecta}
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-sm text-green-600 font-medium">Puntuación Típica</div>
                  <div className="text-2xl font-bold text-green-800">
                    {formData.areas[areaActual as keyof typeof formData.areas].puntuacionTipica}
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-sm text-purple-600 font-medium">Percentil</div>
                  <div className="text-2xl font-bold text-purple-800">
                    {formData.areas[areaActual as keyof typeof formData.areas].percentil}
                  </div>
                </div>
              </div>
              
              {/* Items evaluados agrupados por rangos */}
              <div className="mt-6">
                <h4 className="text-md font-medium text-gray-700 mb-3">Items Evaluados por Rangos</h4>
                {(() => {
                  const itemsEvaluados = formData.areas[areaActual as keyof typeof formData.areas].items
                  const itemsPorRango = agruparItemsPorRango(itemsEvaluados)
                  
                  if (Object.keys(itemsPorRango).length === 0) {
                    return (
                      <div className="text-gray-500 text-center p-4">
                        No hay items evaluados aún
                      </div>
                    )
                  }
                  
                  return Object.entries(itemsPorRango).map(([rango, items]) => (
                    <div key={rango} className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-600 mb-2 bg-gray-100 p-2 rounded">
                        {rango}
                      </h5>
                      <div className="space-y-2">
                        {items.map((item, index) => (
                          <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <span className="text-sm font-medium text-gray-600">
                                {index + 1}.
                              </span>
                              <span className="text-sm text-gray-800">
                                {item.descripcion}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                item.completado 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {item.completado ? 'Cumple' : 'No Cumple'}
                              </span>
                              <span className="text-xs text-gray-500">
                                {item.id}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                })()}
              </div>
            </div>
          )}

          {/* Resumen general de todas las áreas */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Resumen General de Todas las Áreas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(formData.areas).map(([codigo, area]) => (
                <div key={codigo} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">{area.nombre}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Directa:</span>
                      <span className="font-medium">{area.puntuacionDirecta}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Típica:</span>
                      <span className="font-medium">{area.puntuacionTipica}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Percentil:</span>
                      <span className="font-medium">{area.percentil}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Items:</span>
                      <span className="font-medium">{area.items.length}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de control */}
          {evaluacionCompletada && (
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                ¡Evaluación Completada!
              </h3>
              <p className="text-gray-600 mb-6">
                Todas las áreas han sido evaluadas exitosamente.
              </p>
              
              <div className="space-y-3">
                <button
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors w-full"
                  onClick={guardarResultados}
                >
                  Descargar Resultados
                </button>
                
                <button
                  className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors w-full"
                  onClick={() => {
                    setEvaluacionIniciada(false)
                    setEvaluacionAreas(false)
                    setEvaluacionCompletada(false)
                    setAreaActual('')
                    setRangoActual('')
                    setItemActual(0)
                    setAreasCompletadas([])
                    setMensaje('')
                  }}
                >
                  Nueva Evaluación
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Evaluacion
