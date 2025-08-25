import React, { useState } from 'react'

interface ItemEvaluacion {
  id: string
  descripcion: string
  edadAparicion: string
  completado?: boolean
  observaciones?: string
  rango?: string
}

interface AreaEvaluacion {
  nombre: string
  codigo: string
  items: ItemEvaluacion[]
  puntuacionDirecta: number
  puntuacionTipica: number
  percentil: number
}

const Evaluacion: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '',
    fecha: new Date().toISOString().split('T')[0],
    paciente: {
      nombre: '',
      apellidos: '',
      fechaNacimiento: '',
      semanasGestacion: '',
      genero: ''
    }
  })

  const [edadCronologica, setEdadCronologica] = useState({ años: 0, meses: 0, dias: 0 })
  const [edadCorregida, setEdadCorregida] = useState({ años: 0, meses: 0, dias: 0 })
  const [evaluacionIniciada, setEvaluacionIniciada] = useState(false)
  const [evaluacionAreas, setEvaluacionAreas] = useState(false)
  const [mensaje, setMensaje] = useState('')
  
  // Estado para controlar la evaluación de cada área
  const [areaActual, setAreaActual] = useState('')
  const [rangoActual, setRangoActual] = useState('')
  const [itemActual, setItemActual] = useState(0)
  const [areasCompletadas, setAreasCompletadas] = useState<string[]>([])
  const [evaluacionCompletada, setEvaluacionCompletada] = useState(false)
  
  // Estado para las áreas
  const [areas, setAreas] = useState<Record<string, AreaEvaluacion>>({
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
  })

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

  const obtenerTodosLosItemsArea = (area: string): ItemEvaluacion[] => {
    // TODOS los 12 rangos con items para cada área
    const itemsBase: Record<string, Record<string, ItemEvaluacion[]>> = {
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
        ],
        '1-1.5 años': [
          { id: 'MG16', descripcion: 'Sube escaleras solo', edadAparicion: '13 meses' },
          { id: 'MG17', descripcion: 'Baja escaleras', edadAparicion: '14 meses' },
          { id: 'MG18', descripcion: 'Salta en un pie', edadAparicion: '18 meses' }
        ],
        '1.5-2 años': [
          { id: 'MG19', descripcion: 'Corre sin caerse', edadAparicion: '20 meses' },
          { id: 'MG20', descripcion: 'Patea pelota', edadAparicion: '22 meses' },
          { id: 'MG21', descripcion: 'Salta con ambos pies', edadAparicion: '24 meses' }
        ],
        '2-3 años': [
          { id: 'MG22', descripcion: 'Sube escaleras alternando pies', edadAparicion: '30 meses' },
          { id: 'MG23', descripcion: 'Baja escaleras alternando pies', edadAparicion: '32 meses' },
          { id: 'MG24', descripcion: 'Monta triciclo', edadAparicion: '36 meses' }
        ],
        '3-4 años': [
          { id: 'MG25', descripcion: 'Salta en un pie 3 veces', edadAparicion: '42 meses' },
          { id: 'MG26', descripcion: 'Camina en línea recta', edadAparicion: '45 meses' },
          { id: 'MG27', descripcion: 'Atrapa pelota con ambas manos', edadAparicion: '48 meses' }
        ],
        '4-5 años': [
          { id: 'MG28', descripcion: 'Salta en un pie 5 veces', edadAparicion: '54 meses' },
          { id: 'MG29', descripcion: 'Camina hacia atrás', edadAparicion: '57 meses' },
          { id: 'MG30', descripcion: 'Lanza pelota con precisión', edadAparicion: '60 meses' }
        ],
        '5-6 años': [
          { id: 'MG31', descripcion: 'Salta en un pie 10 veces', edadAparicion: '66 meses' },
          { id: 'MG32', descripcion: 'Camina en punta de pies', edadAparicion: '69 meses' },
          { id: 'MG33', descripcion: 'Hace volteretas', edadAparicion: '72 meses' }
        ],
        '6-7 años': [
          { id: 'MG34', descripcion: 'Salta en un pie 20 veces', edadAparicion: '78 meses' },
          { id: 'MG35', descripcion: 'Camina en talones', edadAparicion: '81 meses' },
          { id: 'MG36', descripcion: 'Hace splits', edadAparicion: '84 meses' }
        ]
      },
      motricidadFinaAdaptativa: {
        '0-1 mes': [
          { id: 'MFA1', descripcion: 'Mira objetos cercanos', edadAparicion: '1 mes' },
          { id: 'MFA2', descripcion: 'Sigue objetos con la mirada', edadAparicion: '1 mes' },
          { id: 'MFA3', descripcion: 'Abre y cierra las manos', edadAparicion: '1 mes' }
        ],
        '1-3 meses': [
          { id: 'MFA4', descripcion: 'Agarra objetos con toda la mano', edadAparicion: '2 meses' },
          { id: 'MFA5', descripcion: 'Lleva objetos a la boca', edadAparicion: '3 meses' },
          { id: 'MFA6', descripcion: 'Pasa objetos de una mano a otra', edadAparicion: '3 meses' }
        ],
        '3-6 meses': [
          { id: 'MFA7', descripcion: 'Agarra objetos pequeños con pinza', edadAparicion: '4 meses' },
          { id: 'MFA8', descripcion: 'Golpea objetos entre sí', edadAparicion: '5 meses' },
          { id: 'MFA9', descripcion: 'Construye torre de 2 cubos', edadAparicion: '6 meses' }
        ],
        '6-9 meses': [
          { id: 'MFA10', descripcion: 'Construye torre de 3 cubos', edadAparicion: '7 meses' },
          { id: 'MFA11', descripcion: 'Garabatea con crayón', edadAparicion: '8 meses' },
          { id: 'MFA12', descripcion: 'Construye torre de 4 cubos', edadAparicion: '9 meses' }
        ],
        '9-12 meses': [
          { id: 'MFA13', descripcion: 'Construye torre de 5 cubos', edadAparicion: '10 meses' },
          { id: 'MFA14', descripcion: 'Hace trazos verticales', edadAparicion: '11 meses' },
          { id: 'MFA15', descripcion: 'Construye torre de 6 cubos', edadAparicion: '12 meses' }
        ],
        '1-1.5 años': [
          { id: 'MFA16', descripcion: 'Construye torre de 7 cubos', edadAparicion: '13 meses' },
          { id: 'MFA17', descripcion: 'Hace trazos horizontales', edadAparicion: '14 meses' },
          { id: 'MFA18', descripcion: 'Construye torre de 8 cubos', edadAparicion: '18 meses' }
        ],
        '1.5-2 años': [
          { id: 'MFA19', descripcion: 'Construye torre de 9 cubos', edadAparicion: '20 meses' },
          { id: 'MFA20', descripcion: 'Hace trazos circulares', edadAparicion: '22 meses' },
          { id: 'MFA21', descripcion: 'Construye torre de 10 cubos', edadAparicion: '24 meses' }
        ],
        '2-3 años': [
          { id: 'MFA22', descripcion: 'Construye torre de 11 cubos', edadAparicion: '30 meses' },
          { id: 'MFA23', descripcion: 'Copia línea horizontal', edadAparicion: '32 meses' },
          { id: 'MFA24', descripcion: 'Construye torre de 12 cubos', edadAparicion: '36 meses' }
        ],
        '3-4 años': [
          { id: 'MFA25', descripcion: 'Copia círculo', edadAparicion: '42 meses' },
          { id: 'MFA26', descripcion: 'Copia cruz', edadAparicion: '45 meses' },
          { id: 'MFA27', descripcion: 'Construye puente con 3 cubos', edadAparicion: '48 meses' }
        ],
        '4-5 años': [
          { id: 'MFA28', descripcion: 'Copia triángulo', edadAparicion: '54 meses' },
          { id: 'MFA29', descripcion: 'Copia cuadrado', edadAparicion: '57 meses' },
          { id: 'MFA30', descripcion: 'Construye escalera con cubos', edadAparicion: '60 meses' }
        ],
        '5-6 años': [
          { id: 'MFA31', descripcion: 'Copia rombo', edadAparicion: '66 meses' },
          { id: 'MFA32', descripcion: 'Copia estrella', edadAparicion: '69 meses' },
          { id: 'MFA33', descripcion: 'Construye figura compleja', edadAparicion: '72 meses' }
        ],
        '6-7 años': [
          { id: 'MFA34', descripcion: 'Copia figura 3D', edadAparicion: '78 meses' },
          { id: 'MFA35', descripcion: 'Dibuja persona completa', edadAparicion: '81 meses' },
          { id: 'MFA36', descripcion: 'Construye modelo arquitectónico', edadAparicion: '84 meses' }
        ]
      },
      audicionLenguaje: {
        '0-1 mes': [
          { id: 'AL1', descripcion: 'Reacciona a sonidos fuertes', edadAparicion: '1 mes' },
          { id: 'AL2', descripcion: 'Hace sonidos guturales', edadAparicion: '1 mes' },
          { id: 'AL3', descripcion: 'Mira hacia la voz', edadAparicion: '1 mes' }
        ],
        '1-3 meses': [
          { id: 'AL4', descripcion: 'Sonríe al escuchar voz', edadAparicion: '2 meses' },
          { id: 'AL5', descripcion: 'Hace sonidos de placer', edadAparicion: '3 meses' },
          { id: 'AL6', descripcion: 'Balbucea', edadAparicion: '3 meses' }
        ],
        '3-6 meses': [
          { id: 'AL7', descripcion: 'Responde a su nombre', edadAparicion: '4 meses' },
          { id: 'AL8', descripcion: 'Hace sonidos de consonantes', edadAparicion: '5 meses' },
          { id: 'AL9', descripcion: 'Dice "mama" o "papa"', edadAparicion: '6 meses' }
        ],
        '6-9 meses': [
          { id: 'AL10', descripcion: 'Entiende "no"', edadAparicion: '7 meses' },
          { id: 'AL11', descripcion: 'Dice 2-3 palabras', edadAparicion: '8 meses' },
          { id: 'AL12', descripcion: 'Entiende comandos simples', edadAparicion: '9 meses' }
        ],
        '9-12 meses': [
          { id: 'AL13', descripcion: 'Dice 4-6 palabras', edadAparicion: '10 meses' },
          { id: 'AL14', descripcion: 'Entiende 50 palabras', edadAparicion: '11 meses' },
          { id: 'AL15', descripcion: 'Dice 8-10 palabras', edadAparicion: '12 meses' }
        ],
        '1-1.5 años': [
          { id: 'AL16', descripcion: 'Dice 15-20 palabras', edadAparicion: '13 meses' },
          { id: 'AL17', descripcion: 'Combina 2 palabras', edadAparicion: '14 meses' },
          { id: 'AL18', descripcion: 'Dice 25-30 palabras', edadAparicion: '18 meses' }
        ],
        '1.5-2 años': [
          { id: 'AL19', descripcion: 'Dice 50+ palabras', edadAparicion: '20 meses' },
          { id: 'AL20', descripcion: 'Combina 3 palabras', edadAparicion: '22 meses' },
          { id: 'AL21', descripcion: 'Hace preguntas simples', edadAparicion: '24 meses' }
        ],
        '2-3 años': [
          { id: 'AL22', descripcion: 'Dice 200+ palabras', edadAparicion: '30 meses' },
          { id: 'AL23', descripcion: 'Combina 4-5 palabras', edadAparicion: '32 meses' },
          { id: 'AL24', descripcion: 'Cuenta hasta 3', edadAparicion: '36 meses' }
        ],
        '3-4 años': [
          { id: 'AL25', descripcion: 'Dice 500+ palabras', edadAparicion: '42 meses' },
          { id: 'AL26', descripcion: 'Hace oraciones completas', edadAparicion: '45 meses' },
          { id: 'AL27', descripcion: 'Cuenta hasta 10', edadAparicion: '48 meses' }
        ],
        '4-5 años': [
          { id: 'AL28', descripcion: 'Dice 1000+ palabras', edadAparicion: '54 meses' },
          { id: 'AL29', descripcion: 'Narra historias simples', edadAparicion: '57 meses' },
          { id: 'AL30', descripcion: 'Cuenta hasta 20', edadAparicion: '60 meses' }
        ],
        '5-6 años': [
          { id: 'AL31', descripcion: 'Dice 2000+ palabras', edadAparicion: '66 meses' },
          { id: 'AL32', descripcion: 'Lee palabras simples', edadAparicion: '69 meses' },
          { id: 'AL33', descripcion: 'Cuenta hasta 100', edadAparicion: '72 meses' }
        ],
        '6-7 años': [
          { id: 'AL34', descripcion: 'Lee oraciones completas', edadAparicion: '78 meses' },
          { id: 'AL35', descripcion: 'Escribe palabras simples', edadAparicion: '81 meses' },
          { id: 'AL36', descripcion: 'Cuenta hasta 1000', edadAparicion: '84 meses' }
        ]
      },
      personalSocial: {
        '0-1 mes': [
          { id: 'PS1', descripcion: 'Mira a la cara', edadAparicion: '1 mes' },
          { id: 'PS2', descripcion: 'Sonríe socialmente', edadAparicion: '1 mes' },
          { id: 'PS3', descripcion: 'Reconoce la madre', edadAparicion: '1 mes' }
        ],
        '1-3 meses': [
          { id: 'PS4', descripcion: 'Sonríe a la voz', edadAparicion: '2 meses' },
          { id: 'PS5', descripcion: 'Juega con las manos', edadAparicion: '3 meses' },
          { id: 'PS6', descripcion: 'Reconoce familiares', edadAparicion: '3 meses' }
        ],
        '3-6 meses': [
          { id: 'PS7', descripcion: 'Juega con objetos', edadAparicion: '4 meses' },
          { id: 'PS8', descripcion: 'Busca objetos escondidos', edadAparicion: '5 meses' },
          { id: 'PS9', descripcion: 'Juega a las escondidas', edadAparicion: '6 meses' }
        ],
        '6-9 meses': [
          { id: 'PS10', descripcion: 'Juega con otros niños', edadAparicion: '7 meses' },
          { id: 'PS11', descripcion: 'Comparte juguetes', edadAparicion: '8 meses' },
          { id: 'PS12', descripcion: 'Juega a imitar', edadAparicion: '9 meses' }
        ],
        '9-12 meses': [
          { id: 'PS13', descripcion: 'Juega a la pelota', edadAparicion: '10 meses' },
          { id: 'PS14', descripcion: 'Juega a las casitas', edadAparicion: '11 meses' },
          { id: 'PS15', descripcion: 'Juega a la cocina', edadAparicion: '12 meses' }
        ],
        '1-1.5 años': [
          { id: 'PS16', descripcion: 'Juega a la escuela', edadAparicion: '13 meses' },
          { id: 'PS17', descripcion: 'Juega a los doctores', edadAparicion: '14 meses' },
          { id: 'PS18', descripcion: 'Juega a la familia', edadAparicion: '18 meses' }
        ],
        '1.5-2 años': [
          { id: 'PS19', descripcion: 'Juega a la tienda', edadAparicion: '20 meses' },
          { id: 'PS20', descripcion: 'Juega a la policía', edadAparicion: '22 meses' },
          { id: 'PS21', descripcion: 'Juega a la construcción', edadAparicion: '24 meses' }
        ],
        '2-3 años': [
          { id: 'PS22', descripcion: 'Juega a la granja', edadAparicion: '30 meses' },
          { id: 'PS23', descripcion: 'Juega a la estación', edadAparicion: '32 meses' },
          { id: 'PS24', descripcion: 'Juega a la ciudad', edadAparicion: '36 meses' }
        ],
        '3-4 años': [
          { id: 'PS25', descripcion: 'Juega a la oficina', edadAparicion: '42 meses' },
          { id: 'PS26', descripcion: 'Juega a la fábrica', edadAparicion: '45 meses' },
          { id: 'PS27', descripcion: 'Juega a la biblioteca', edadAparicion: '48 meses' }
        ],
        '4-5 años': [
          { id: 'PS28', descripcion: 'Juega a la universidad', edadAparicion: '54 meses' },
          { id: 'PS29', descripcion: 'Juega al laboratorio', edadAparicion: '57 meses' },
          { id: 'PS30', descripcion: 'Juega al museo', edadAparicion: '60 meses' }
        ],
        '5-6 años': [
          { id: 'PS31', descripcion: 'Juega a la empresa', edadAparicion: '66 meses' },
          { id: 'PS32', descripcion: 'Juega al banco', edadAparicion: '69 meses' },
          { id: 'PS33', descripcion: 'Juega al hospital', edadAparicion: '72 meses' }
        ],
        '6-7 años': [
          { id: 'PS34', descripcion: 'Juega a la política', edadAparicion: '78 meses' },
          { id: 'PS35', descripcion: 'Juega a la diplomacia', edadAparicion: '81 meses' },
          { id: 'PS36', descripcion: 'Juega a la investigación', edadAparicion: '84 meses' }
        ]
      }
    }
    
    // Combinar todos los items de todos los rangos en una sola lista
    const todosLosItems: ItemEvaluacion[] = []
    const rangos = [
      '0-1 mes', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses', 
      '1-1.5 años', '1.5-2 años', '2-3 años', '3-4 años', '4-5 años', '5-6 años', '6-7 años'
    ]
    
    rangos.forEach(rango => {
      const itemsRango = itemsBase[area]?.[rango] || []
      itemsRango.forEach(item => {
        todosLosItems.push({
          ...item,
          rango: rango
        })
      })
    })
    
    return todosLosItems
  }

  // Función para obtener items de un rango específico (mantener compatibilidad)
  const obtenerItemsArea = (area: string, rango: string): ItemEvaluacion[] => {
    const todosLosItems = obtenerTodosLosItemsArea(area)
    return todosLosItems.filter(item => item.rango === rango)
  }

  const iniciarEvaluacionAreas = () => {
    const rangoInicial = determinarRangoEdad(edadCorregida)
    setRangoActual(rangoInicial)
    setAreaActual('motricidadGruesa')
    setItemActual(0)
    setEvaluacionAreas(true)
    setMensaje(`Iniciando evaluación de Motricidad Gruesa en rango ${rangoInicial}...`)
  }

  const obtenerNumeroSecuencial = (area: string): number => {
    const areaData = areas[area]
    if (!areaData) return 0
    const itemsEvaluados = areaData.items.filter(item => item.completado !== undefined)
    return itemsEvaluados.length + 1
  }

  const evaluarItem = (cumple: boolean) => {
    if (!areaActual) return

    const areaData = areas[areaActual]
    if (!areaData) return
    
    const todosLosItems = obtenerTodosLosItemsArea(areaActual)
    
    if (itemActual >= todosLosItems.length) {
      // Área completada
      completarArea()
      return
    }

    const item = todosLosItems[itemActual]
    const nuevoItem: ItemEvaluacion = {
      ...item,
      completado: cumple,
      observaciones: cumple ? 'Cumple' : 'No cumple',
      rango: item.rango
    }

    // Agregar item a la lista de evaluados
    const nuevosItems = [...areaData.items, nuevoItem]
    
    // Verificar si hay 2 consecutivos que no cumplen (sin importar el rango)
    const ultimosItems = nuevosItems.slice(-2)
    if (ultimosItems.length === 2 && 
        ultimosItems.every(item => item.completado === false)) {
      // Terminar área
      completarArea()
      return
    }

    // Actualizar área
    const nuevaArea: AreaEvaluacion = {
      ...areaData,
      items: nuevosItems
    }

    setAreas({
      ...areas,
      [areaActual]: nuevaArea
    })

    // Pasar al siguiente item
    setItemActual(itemActual + 1)
    
    // Actualizar el rango actual para mostrar en la interfaz
    if (itemActual + 1 < todosLosItems.length) {
      const siguienteItem = todosLosItems[itemActual + 1]
      setRangoActual(siguienteItem.rango || '')
    }
  }

  const obtenerRangoSiguiente = (rango: string): string | null => {
    const rangos = [
      '0-1 mes', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses',
      '1-1.5 años', '1.5-2 años', '2-3 años', '3-4 años', '4-5 años', '5-6 años', '6-7 años'
    ]
    const index = rangos.indexOf(rango)
    return index < rangos.length - 1 ? rangos[index + 1] : null
  }

  // Función para retroceder al item anterior
  const retrocederItem = () => {
    if (itemActual > 0) {
      setItemActual(itemActual - 1)
      const todosLosItems = obtenerTodosLosItemsArea(areaActual)
      if (itemActual - 1 >= 0) {
        const itemAnterior = todosLosItems[itemActual - 1]
        setRangoActual(itemAnterior.rango || '')
      }
    }
  }

  // Función para cambiar la respuesta de un item
  const cambiarRespuestaItem = (index: number, cumple: boolean) => {
    if (!areaActual) return

    const areaData = areas[areaActual]
    if (!areaData) return

    const nuevosItems = [...areaData.items]
    nuevosItems[index] = {
      ...nuevosItems[index],
      completado: cumple,
      observaciones: cumple ? 'Cumple' : 'No cumple'
    }

    // Recalcular puntuación directa
    let puntuacionDirecta = 0
    for (let i = nuevosItems.length - 1; i >= 0; i--) {
      if (nuevosItems[i].completado) {
        const numeroItem = parseInt(nuevosItems[i].id.replace(/\D/g, ''))
        puntuacionDirecta = numeroItem
        break
      }
    }

    const puntuacionTipica = puntuacionDirecta * 10
    const percentil = Math.min(99, Math.max(1, Math.floor(puntuacionTipica / 10)))

    const areaActualizada: AreaEvaluacion = {
      ...areaData,
      items: nuevosItems,
      puntuacionDirecta,
      puntuacionTipica,
      percentil
    }

    setAreas({
      ...areas,
      [areaActual]: areaActualizada
    })
  }

  // Función para ir a un área específica
  const irAArea = (area: string) => {
    if (areasCompletadas.includes(area)) {
      setAreaActual(area)
      setRangoActual('')
      setItemActual(0)
      setMensaje(`Revisando evaluación de ${areas[area].nombre}...`)
    }
  }

  // Función para ir a un rango específico
  const irARango = (rango: string) => {
    if (!areaActual) return

    const todosLosItems = obtenerTodosLosItemsArea(areaActual)
    const primerItemRango = todosLosItems.findIndex(item => item.rango === rango)
    
    if (primerItemRango !== -1) {
      setRangoActual(rango)
      setItemActual(primerItemRango)
      setMensaje(`Revisando rango ${rango} de ${areas[areaActual].nombre}...`)
    }
  }

  const completarArea = () => {
    const areaData = areas[areaActual]
    if (!areaData) return
    
    const itemsEvaluados = areaData.items.filter(item => item.completado !== undefined)
    
    // Calcular puntuación directa: el ID del último item que cumple
    let puntuacionDirecta = 0
    for (let i = itemsEvaluados.length - 1; i >= 0; i--) {
      if (itemsEvaluados[i].completado) {
        // Extraer el número del ID (ej: MG15 -> 15, AL24 -> 24)
        const numeroItem = parseInt(itemsEvaluados[i].id.replace(/\D/g, ''))
        puntuacionDirecta = numeroItem
        break
      }
    }

    // Calcular puntuación típica (por ahora multiplicando por 10, pero debería usar las tablas de Excel)
    const puntuacionTipica = puntuacionDirecta * 10
    const percentil = Math.min(99, Math.max(1, Math.floor(puntuacionTipica / 10)))

    const areaActualizada: AreaEvaluacion = {
      ...areaData,
      puntuacionDirecta,
      puntuacionTipica,
      percentil
    }

    setAreas({
      ...areas,
      [areaActual]: areaActualizada
    })

    setAreasCompletadas([...areasCompletadas, areaActual])
    
    const siguienteArea = obtenerSiguienteArea(areaActual)
    if (siguienteArea) {
      setAreaActual(siguienteArea)
      setRangoActual(determinarRangoEdad(edadCorregida))
      setItemActual(0)
      setMensaje(`Iniciando evaluación de ${areas[siguienteArea].nombre}...`)
    } else {
      setEvaluacionCompletada(true)
      setMensaje('¡Evaluación completada! Todas las áreas han sido evaluadas.')
    }
  }

  const obtenerSiguienteArea = (areaActual: string): string | null => {
    const areasList = ['motricidadGruesa', 'motricidadFinaAdaptativa', 'audicionLenguaje', 'personalSocial']
    const index = areasList.indexOf(areaActual)
    return index < areasList.length - 1 ? areasList[index + 1] : null
  }

  const obtenerNombreArea = (codigo: string): string => {
    const areasNames: Record<string, string> = {
      motricidadGruesa: 'Motricidad Gruesa',
      motricidadFinaAdaptativa: 'Motricidad Fina Adaptativa',
      audicionLenguaje: 'Audición y Lenguaje',
      personalSocial: 'Personal Social'
    }
    return areasNames[codigo] || codigo
  }

  const agruparItemsPorRango = (items: ItemEvaluacion[]): Record<string, ItemEvaluacion[]> => {
    const grupos: Record<string, ItemEvaluacion[]> = {}
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
            
            {/* Botones de navegación entre áreas */}
            <div className="flex flex-wrap gap-2 mb-4">
              {['motricidadGruesa', 'motricidadFinaAdaptativa', 'audicionLenguaje', 'personalSocial'].map((area) => (
                <button
                  key={area}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    area === areaActual
                      ? 'bg-blue-600 text-white'
                      : areasCompletadas.includes(area)
                      ? 'bg-green-100 text-green-800 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={() => irAArea(area)}
                  disabled={!areasCompletadas.includes(area)}
                >
                  {obtenerNombreArea(area).split(' ')[0]}
                </button>
              ))}
            </div>
            
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
                const todosLosItems = obtenerTodosLosItemsArea(areaActual)
                
                if (todosLosItems.length === 0) {
                  return (
                    <div className="text-center text-red-600 p-4">
                      No hay items disponibles para {obtenerNombreArea(areaActual)}
                    </div>
                  )
                }
                
                if (itemActual < todosLosItems.length) {
                  const item = todosLosItems[itemActual]
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
                      
                      {/* Botones de navegación */}
                      <div className="flex space-x-2 mt-4">
                        <button
                          className="bg-gray-500 text-white px-3 py-2 rounded-md hover:bg-gray-600 transition-colors text-sm"
                          onClick={retrocederItem}
                          disabled={itemActual === 0}
                        >
                          ← Anterior
                        </button>
                        
                        <button
                          className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition-colors text-sm"
                          onClick={() => {
                            // Ir al siguiente rango
                            const todosLosItems = obtenerTodosLosItemsArea(areaActual)
                            const rangos = ['0-1 mes', '1-3 meses', '3-6 meses', '6-9 meses', '9-12 meses', 
                                           '1-1.5 años', '1.5-2 años', '2-3 años', '3-4 años', '4-5 años', '5-6 años', '6-7 años']
                            const rangoActualIndex = rangos.indexOf(rangoActual)
                            if (rangoActualIndex < rangos.length - 1) {
                              const siguienteRango = rangos[rangoActualIndex + 1]
                              irARango(siguienteRango)
                            }
                          }}
                        >
                          Siguiente Rango →
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
                    {areas[areaActual].puntuacionDirecta}
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-sm text-green-600 font-medium">Puntuación Típica</div>
                  <div className="text-2xl font-bold text-green-800">
                    {areas[areaActual].puntuacionTipica}
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-sm text-purple-600 font-medium">Percentil</div>
                  <div className="text-2xl font-bold text-purple-800">
                    {areas[areaActual].percentil}
                  </div>
                </div>
              </div>
              
              {/* Items evaluados agrupados por rangos */}
              <div className="mt-6">
                <h4 className="text-md font-medium text-gray-700 mb-3">Items Evaluados por Rangos</h4>
                {(() => {
                  const itemsEvaluados = areas[areaActual].items
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
                              
                              {/* Botones para cambiar respuesta */}
                              <div className="flex space-x-1">
                                <button
                                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                    item.completado === true
                                      ? 'bg-green-200 text-green-800'
                                      : 'bg-gray-200 text-gray-600 hover:bg-green-200 hover:text-green-800'
                                  }`}
                                  onClick={() => cambiarRespuestaItem(index, true)}
                                >
                                  1
                                </button>
                                <button
                                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                    item.completado === false
                                      ? 'bg-red-200 text-red-800'
                                      : 'bg-gray-200 text-gray-600 hover:bg-red-200 hover:text-red-800'
                                  }`}
                                  onClick={() => cambiarRespuestaItem(index, false)}
                                >
                                  0
                                </button>
                              </div>
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
              {Object.entries(areas).map(([codigo, area]) => (
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
                  onClick={() => setMensaje('Funcionalidad de descarga en desarrollo...')}
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
                    setAreas({
                      motricidadGruesa: { nombre: 'Motricidad Gruesa', codigo: 'MG', items: [], puntuacionDirecta: 0, puntuacionTipica: 0, percentil: 0 },
                      motricidadFinaAdaptativa: { nombre: 'Motricidad Fina Adaptativa', codigo: 'MFA', items: [], puntuacionDirecta: 0, puntuacionTipica: 0, percentil: 0 },
                      audicionLenguaje: { nombre: 'Audición y Lenguaje', codigo: 'AL', items: [], puntuacionDirecta: 0, puntuacionTipica: 0, percentil: 0 },
                      personalSocial: { nombre: 'Personal Social', codigo: 'PS', items: [], puntuacionDirecta: 0, puntuacionTipica: 0, percentil: 0 }
                    })
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
