import React, { useState, useEffect } from 'react'
import { gruposEtarios, itemsEvaluacion, obtenerRangoEdad, obtenerRangoAnterior } from '../data/escalaDesarrollo'
import { obtenerPuntuacionTipica, obtenerPercentil } from '../data/tablasConversion'
import { EvaluacionDesarrollo, AreaEvaluacion, ItemEvaluacion } from '../types/evaluacion'
import GraficoDesarrollo from '../components/GraficoDesarrollo'

const Evaluacion: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<EvaluacionDesarrollo>({
    id: '',
    fecha: new Date().toISOString().split('T')[0],
    paciente: {
      nombre: '',
      apellidos: '', // Added apellidos field
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
        puntuacionTipica: 100,
        percentil: 50
      },
      motricidadFinaAdaptativa: {
        nombre: 'Motricidad Fina Adaptativa',
        codigo: 'MFA',
        items: [],
        puntuacionDirecta: 0,
        puntuacionTipica: 100,
        percentil: 50
      },
      audicionLenguaje: {
        nombre: 'Audición y Lenguaje',
        codigo: 'AL',
        items: [],
        puntuacionDirecta: 0,
        puntuacionTipica: 100,
        percentil: 50
      },
      personalSocial: {
        nombre: 'Personal Social',
        codigo: 'PS',
        items: [],
        puntuacionDirecta: 0,
        puntuacionTipica: 100,
        percentil: 50
      }
    },
    puntuacionTotal: 0,
    nivelDesarrollo: 'Normal'
  })

  const [rangoEdadSeleccionado, setRangoEdadSeleccionado] = useState<string>('')
  const [rangoEvaluacionActual, setRangoEvaluacionActual] = useState<string>('')
  const [evaluacionCompletada, setEvaluacionCompletada] = useState<{[key: string]: boolean}>({
    motricidadGruesa: false,
    motricidadFinaAdaptativa: false,
    audicionLenguaje: false,
    personalSocial: false
  })
  
  // Historial de rangos evaluados por área
  const [historialRangos, setHistorialRangos] = useState<{[key: string]: string[]}>({
    motricidadGruesa: [],
    motricidadFinaAdaptativa: [],
    audicionLenguaje: [],
    personalSocial: []
  })
  
  // Historial de items evaluados por área con su rango y resultado
  const [historialItems, setHistorialItems] = useState<{[key: string]: Array<{
    itemId: string,
    descripcion: string,
    rango: string,
    completado: boolean,
    edadAparicion: string
  }>}>({
    motricidadGruesa: [],
    motricidadFinaAdaptativa: [],
    audicionLenguaje: [],
    personalSocial: []
  })

  // Función para calcular edad cronológica en años, meses y días
  const calcularEdadCronologica = (fechaNacimiento: string): { años: number; meses: number; dias: number } => {
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

  // Función para calcular edad corregida en años, meses y días
  const calcularEdadCorregida = (fechaNacimiento: string, semanasGestacion: string): { años: number; meses: number; dias: number } => {
    const edadCronologica = calcularEdadCronologica(fechaNacimiento)
    const semanas = parseInt(semanasGestacion)
    
    if (semanas < 37) {
      const semanasFaltantes = 40 - semanas
      const diasFaltantes = semanasFaltantes * 7
      
      // Convertir edad cronológica a días totales
      const diasTotales = edadCronologica.años * 365 + edadCronologica.meses * 30 + edadCronologica.dias
      const diasCorregidos = Math.max(0, diasTotales - diasFaltantes)
      
      // Convertir de vuelta a años, meses y días
      const años = Math.floor(diasCorregidos / 365)
      const meses = Math.floor((diasCorregidos % 365) / 30)
      const dias = diasCorregidos % 30
      
      return { años, meses, dias }
    }
    
    return edadCronologica
  }

  // Función para formatear edad en texto legible
  const formatearEdad = (edad: { años: number; meses: number; dias: number }): string => {
    const partes = []
    if (edad.años > 0) partes.push(`${edad.años} año${edad.años !== 1 ? 's' : ''}`)
    if (edad.meses > 0) partes.push(`${edad.meses} mes${edad.meses !== 1 ? 'es' : ''}`)
    if (edad.dias > 0) partes.push(`${edad.dias} día${edad.dias !== 1 ? 's' : ''}`)
    
    return partes.length > 0 ? partes.join(', ') : '0 días'
  }

  // Función para obtener edad corregida en meses (para cálculos internos)
  const obtenerEdadCorregidaMeses = (fechaNacimiento: string, semanasGestacion: string): number => {
    const edadCorregida = calcularEdadCorregida(fechaNacimiento, semanasGestacion)
    return edadCorregida.años * 12 + edadCorregida.meses
  }

  // Función para cargar items de evaluación según el rango de edad
  const cargarItemsEvaluacion = (rangoId: string) => {
    const items = itemsEvaluacion[rangoId as keyof typeof itemsEvaluacion]
    if (items) {
      setFormData(prev => ({
        ...prev,
        areas: {
          motricidadGruesa: { ...prev.areas.motricidadGruesa, items: [...items.motricidadGruesa] },
          motricidadFinaAdaptativa: { ...prev.areas.motricidadFinaAdaptativa, items: [...items.motricidadFinaAdaptativa] },
          audicionLenguaje: { ...prev.areas.audicionLenguaje, items: [...items.audicionLenguaje] },
          personalSocial: { ...prev.areas.personalSocial, items: [...items.personalSocial] }
        }
      }))
      setRangoEvaluacionActual(rangoId)
      console.log(`Items cargados para rango: ${rangoId}`)
    }
  }

  // Función para evaluar si se debe continuar en el rango actual o retroceder
  const evaluarProgresoRango = (areaKey: string, rangoActual: string): boolean => {
    const area = formData.areas[areaKey as keyof typeof formData.areas]
    const items = area.items
    
    // Verificar si hay 2 items consecutivos que cumplan
    let consecutivosCumplidos = 0
    for (let i = 0; i < items.length; i++) {
      if (items[i].completado === true) {
        consecutivosCumplidos++
        if (consecutivosCumplidos >= 2) {
          return true // Puede continuar en el rango actual
        }
      } else {
        consecutivosCumplidos = 0
      }
    }
    
    // Si no cumple 2 consecutivos, debe retroceder al rango anterior
    return false
  }

  // Función para retroceder al rango anterior y cargar items
  const retrocederRangoAnterior = (areaKey: string, rangoActual: string) => {
    const rangoAnterior = obtenerRangoAnterior(rangoActual)
    if (rangoAnterior) {
      const itemsAnteriores = itemsEvaluacion[rangoAnterior as keyof typeof itemsEvaluacion]
      if (itemsAnteriores) {
        const areaAnterior = itemsAnteriores[areaKey as keyof typeof itemsAnteriores]
        if (areaAnterior) {
          // Cargar items del rango anterior en orden inverso
          const itemsInversos = [...areaAnterior].reverse()
          
          setFormData(prev => ({
            ...prev,
            areas: {
              ...prev.areas,
              [areaKey]: { 
                ...prev.areas[areaKey as keyof typeof prev.areas], 
                items: itemsInversos 
              }
            }
          }))
          
          // Registrar en el historial
          setHistorialRangos(prev => ({
            ...prev,
            [areaKey]: [...prev[areaKey], `← ${rangoAnterior} (retroceso)`]
          }))
          
          console.log(`Retrocediendo a ${rangoAnterior} para ${areaKey} con items en orden inverso`)
          return true
        }
      }
    }
    return false
  }

  // Función para verificar si se debe detener la evaluación (2 negativos consecutivos)
  const verificarDetencionEvaluacion = (areaKey: string): boolean => {
    const area = formData.areas[areaKey as keyof typeof formData.areas]
    const items = area.items
    
    // Verificar si hay 2 negativos consecutivos
    let negativosConsecutivos = 0
    for (let i = 0; i < items.length; i++) {
      if (items[i].completado === false) {
        negativosConsecutivos++
        if (negativosConsecutivos >= 2) {
          return true // Debe detener la evaluación
        }
      } else {
        negativosConsecutivos = 0
      }
    }
    
    return false
  }

  // Función para avanzar al siguiente rango si es posible
  const avanzarSiguienteRango = (areaKey: string, rangoActual: string) => {
    const rangos = ['rango-1', 'rango-2', 'rango-3', 'rango-4', 'rango-5', 'rango-6', 'rango-7', 'rango-8', 'rango-9', 'rango-10', 'rango-11', 'rango-12']
    const index = rangos.indexOf(rangoActual)
    const siguienteRango = index < rangos.length - 1 ? rangos[index + 1] : null
    
    if (siguienteRango) {
      const itemsSiguiente = itemsEvaluacion[siguienteRango as keyof typeof itemsEvaluacion]
      if (itemsSiguiente) {
        const areaSiguiente = itemsSiguiente[areaKey as keyof typeof itemsSiguiente]
        if (areaSiguiente) {
          setFormData(prev => ({
            ...prev,
            areas: {
              ...prev.areas,
              [areaKey]: { 
                ...prev.areas[areaKey as keyof typeof prev.areas], 
                items: [...areaSiguiente] 
              }
            }
          }))
          
          // Registrar en el historial
          setHistorialRangos(prev => ({
            ...prev,
            [areaKey]: [...prev[areaKey], `→ ${siguienteRango} (avance)`]
          }))
          
          console.log(`Avanzando a ${siguienteRango} para ${areaKey}`)
          return true
        }
      }
    }
    return false
  }

  // Función para evaluar el progreso de un área específica
  const evaluarProgresoArea = (areaKey: string) => {
    const area = formData.areas[areaKey as keyof typeof formData.areas]
    const rangoActual = rangoEvaluacionActual
    
    if (!rangoActual) return
    
    console.log(`Evaluando progreso de ${areaKey} en rango ${rangoActual}`)
    
    // Verificar si debe detenerse (2 negativos consecutivos)
    if (verificarDetencionEvaluacion(areaKey)) {
      console.log(`Evaluación detenida para ${areaKey} - 2 negativos consecutivos`)
      return
    }
    
    // Verificar si puede continuar en el rango actual
    if (evaluarProgresoRango(areaKey, rangoActual)) {
      console.log(`${areaKey} puede continuar en rango actual`)
      
      // Intentar avanzar al siguiente rango
      if (avanzarSiguienteRango(areaKey, rangoActual)) {
        console.log(`${areaKey} avanzó al siguiente rango`)
      }
    } else {
      console.log(`${areaKey} no cumple criterios - retrocediendo`)
      
      // Retroceder al rango anterior
      if (!retrocederRangoAnterior(areaKey, rangoActual)) {
        console.log(`No se pudo retroceder para ${areaKey}`)
      }
    }
  }

  // Función para calcular puntuación directa basada en la lógica de evaluación progresiva
  const calcularPuntuacionDirecta = (areaKey: string): number => {
    // Obtener todos los items evaluados para esta área (historial completo)
    const historialCompleto = historialItems[areaKey] || []
    
    if (historialCompleto.length === 0) return 0
    
    // Ordenar el historial por orden de evaluación (mantener el orden cronológico)
    const historialOrdenado = [...historialCompleto].sort((a, b) => {
      // Si tienen el mismo rango, ordenar por ID del item
      if (a.rango === b.rango) {
        return parseInt(a.itemId) - parseInt(b.itemId)
      }
      // Ordenar por rango (rango-1, rango-2, etc.)
      const rangoA = parseInt(a.rango.split('-')[1])
      const rangoB = parseInt(b.rango.split('-')[1])
      return rangoA - rangoB
    })
    
    console.log(`Historial ordenado para ${areaKey}:`, historialOrdenado)
    
    // Implementar lógica de evaluación progresiva
    let puntuacionDirecta = 0
    let negativosConsecutivos = 0
    let ultimoItemExitoso = 0
    
    // Recorrer el historial en orden cronológico
    for (let i = 0; i < historialOrdenado.length; i++) {
      const item = historialOrdenado[i]
      
      if (item.completado === true) {
        // Item cumple
        const itemId = parseInt(item.itemId)
        ultimoItemExitoso = itemId
        puntuacionDirecta = itemId // La puntuación directa es el último item que cumple
        negativosConsecutivos = 0 // Resetear contador de negativos
        console.log(`Item ${itemId} cumple - puntuación directa actualizada a ${puntuacionDirecta}`)
      } else {
        // Item no cumple
        negativosConsecutivos++
        console.log(`Item ${item.itemId} no cumple - negativos consecutivos: ${negativosConsecutivos}`)
        
        // Si hay 2 negativos consecutivos, detener evaluación
        // PERO mantener la puntuación del último item que cumplió
        if (negativosConsecutivos >= 2) {
          console.log(`Evaluación detenida - 2 negativos consecutivos. Puntuación final: ${puntuacionDirecta}`)
          break
        }
      }
    }
    
    // Si no hay items exitosos en el historial, verificar el rango actual
    if (puntuacionDirecta === 0) {
      const area = formData.areas[areaKey as keyof typeof formData.areas]
      const items = area.items
      
      if (items.length === 0) return 0
      
      negativosConsecutivos = 0
      ultimoItemExitoso = 0
      
      // Recorrer items del rango actual secuencialmente
      for (let i = 0; i < items.length; i++) {
        if (items[i].completado === true) {
          // Item cumple
          const itemId = parseInt(items[i].id)
          ultimoItemExitoso = itemId
          puntuacionDirecta = itemId
          negativosConsecutivos = 0
          console.log(`Item actual ${itemId} cumple - puntuación directa: ${puntuacionDirecta}`)
        } else {
          // Item no cumple
          negativosConsecutivos++
          console.log(`Item actual ${items[i].id} no cumple - negativos consecutivos: ${negativosConsecutivos}`)
          
          // Si hay 2 negativos consecutivos, detener evaluación
          if (negativosConsecutivos >= 2) {
            console.log(`Evaluación detenida en rango actual - 2 negativos consecutivos. Puntuación final: ${puntuacionDirecta}`)
            break
          }
        }
      }
    }
    
    console.log(`Puntuación directa final para ${areaKey}: ${puntuacionDirecta}`)
    
    // La puntuación directa es el valor del ÚLTIMO item que cumplió
    // antes de obtener 2 negativos consecutivos
    return Number(puntuacionDirecta)
  }

  // Función para calcular puntuaciones
  const calcularPuntuaciones = () => {
    const areas = { ...formData.areas }
    
    Object.keys(areas).forEach(areaKey => {
      const area = areas[areaKey as keyof typeof areas]
      
      // Calcular puntuación directa usando la nueva lógica
      const puntuacionDirecta = calcularPuntuacionDirecta(areaKey)
      
      // Obtener el rango de edad actual en el formato correcto para la tabla
      let rangoEdadParaTabla: string = ''
      if (rangoEvaluacionActual) {
        const numeroRango = rangoEvaluacionActual.split('-')[1]
        rangoEdadParaTabla = `Rango ${numeroRango}`
      }
      
      // Convertir a puntuación típica según el rango actual
      const rangoNombre = rangoEvaluacionActual ? `Rango ${rangoEvaluacionActual.split('-')[1]}: ${rangoEdadSeleccionado.split(':')[1]?.trim()}` : ''
      const conversion = obtenerPuntuacionTipica(areaKey, puntuacionDirecta, rangoEdadParaTabla)
      const tipica = conversion ? conversion.puntuacionTipica : 0
      const percentil = conversion ? conversion.percentil : 0
      
      areas[areaKey as keyof typeof areas] = {
        ...area,
        puntuacionDirecta: Number(puntuacionDirecta),
        puntuacionTipica: tipica,
        percentil: percentil
      }
    })
    
    const puntuacionTotal = Object.values(areas).reduce((sum, area) => sum + area.puntuacionTipica, 0) / 4
    
    setFormData(prev => ({
      ...prev,
      areas,
      puntuacionTotal
    }))
  }

  // Función para manejar cambios en inputs
  const handleInputChange = (field: string, value: string) => {
    console.log('handleInputChange called:', field, value)
    console.log('Current formData:', formData)
    
    // Manejar campos anidados del paciente
    if (field.startsWith('paciente.')) {
      const patientField = field.split('.')[1]
      console.log('Updating patient field:', patientField, 'with value:', value)
      
      setFormData(prev => {
        const newData = {
          ...prev,
          paciente: {
            ...prev.paciente,
            [patientField]: value
          }
        }
        console.log('New formData:', newData)
        return newData
      })
      
      // Limpiar edades calculadas cuando cambian fecha de nacimiento o semanas de gestación
      if (patientField === 'fechaNacimiento' || patientField === 'semanasGestacion') {
        // Solo calcular edades si ambos campos están presentes
        if (patientField === 'fechaNacimiento' && formData.paciente.semanasGestacion) {
          const edadCorregida = calcularEdadCorregida(value, formData.paciente.semanasGestacion)
          console.log(`Edad corregida calculada: ${formatearEdad(edadCorregida)}`)
        } else if (patientField === 'semanasGestacion' && formData.paciente.fechaNacimiento) {
          const edadCorregida = calcularEdadCorregida(formData.paciente.fechaNacimiento, value)
          console.log(`Edad corregida calculada: ${formatearEdad(edadCorregida)}`)
        }
      }
    } else {
      // Manejar otros campos del formulario
      console.log('Updating other field:', field, 'with value:', value)
      setFormData(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  // Función para manejar cambios en checkboxes
  const handleCheckboxChange = (areaKey: string, itemId: string, completado: boolean | null) => {
    setFormData(prev => ({
      ...prev,
      areas: {
        ...prev.areas,
        [areaKey]: {
          ...prev.areas[areaKey as keyof typeof prev.areas],
          items: prev.areas[areaKey as keyof typeof prev.areas].items.map(item =>
            item.id === itemId ? { ...item, completado } : item
          )
        }
      }
    }))
    
    // Registrar el item evaluado en el historial
    const item = formData.areas[areaKey as keyof typeof formData.areas].items.find(i => i.id === itemId)
    if (item) {
      setHistorialItems(prev => {
        const areaHistorial = prev[areaKey] || []
        const existingIndex = areaHistorial.findIndex(h => h.itemId === itemId)
        
        if (existingIndex >= 0) {
          // Actualizar item existente
          const updatedHistorial = [...areaHistorial]
          updatedHistorial[existingIndex] = {
            ...updatedHistorial[existingIndex],
            completado: completado === true
          }
          return { ...prev, [areaKey]: updatedHistorial }
        } else if (completado !== null) {
          // Agregar nuevo item al historial solo si tiene un valor
          return {
            ...prev,
            [areaKey]: [...areaHistorial, {
              itemId: item.id,
              descripcion: item.descripcion,
              rango: rangoEvaluacionActual || 'rango-inicial',
              completado: completado === true,
              edadAparicion: item.edadAparicion
            }]
          }
        }
        return prev
      })
    }
    
    // Actualizar automáticamente la puntuación directa después de un pequeño delay
    setTimeout(() => {
      const nuevaPuntuacionDirecta = calcularPuntuacionDirecta(areaKey)
      
      // Obtener el rango de edad actual en el formato correcto para la tabla
      let rangoEdadParaTabla: string = ''
      if (rangoEvaluacionActual) {
        const numeroRango = rangoEvaluacionActual.split('-')[1]
        rangoEdadParaTabla = `Rango ${numeroRango}`
      }
      
      // Calcular puntuación típica y percentil usando las tablas de conversión
      // Pasar el rango de edad para que use la tabla completa cuando esté disponible
      const conversion = obtenerPuntuacionTipica(areaKey, nuevaPuntuacionDirecta, rangoEdadParaTabla)
      const nuevaPuntuacionTipica = conversion ? conversion.puntuacionTipica : 0
      const nuevoPercentil = conversion ? conversion.percentil : 0
      
      setFormData(prev => ({
        ...prev,
        areas: {
          ...prev.areas,
          [areaKey]: {
            ...prev.areas[areaKey as keyof typeof prev.areas],
            puntuacionDirecta: nuevaPuntuacionDirecta,
            puntuacionTipica: nuevaPuntuacionTipica,
            percentil: nuevoPercentil
          }
        }
      }))
      
      console.log(`Puntuación directa actualizada para ${areaKey}: ${nuevaPuntuacionDirecta}`)
      console.log(`Rango de edad para tabla: ${rangoEdadParaTabla}`)
      console.log(`Puntuación típica actualizada para ${areaKey}: ${nuevaPuntuacionTipica}`)
      console.log(`Percentil actualizado para ${areaKey}: ${nuevoPercentil}`)
      
      // Evaluar automáticamente el progreso
      evaluarProgresoArea(areaKey)
    }, 100)
  }

  // Función para manejar observaciones
  const handleObservacionItem = (areaKey: string, itemId: string, observacion: string) => {
    setFormData(prev => ({
      ...prev,
      areas: {
        ...prev.areas,
        [areaKey]: {
          ...prev.areas[areaKey as keyof typeof prev.areas],
          items: prev.areas[areaKey as keyof typeof prev.areas].items.map(item =>
            item.id === itemId ? { ...item, observaciones: observacion } : item
          )
        }
      }
    }))
  }

  // Función para manejar siguiente paso
  const handleNext = () => {
    if (currentStep === 1) {
      // Validar información del paciente
      if (!formData.paciente.nombre || !formData.paciente.apellidos || !formData.paciente.fechaNacimiento || !formData.paciente.semanasGestacion || !formData.paciente.genero) {
        alert('Por favor complete todos los campos obligatorios.')
        return
      }
      
      // Calcular edad corregida y determinar rango
      const edadCorregida = obtenerEdadCorregidaMeses(formData.paciente.fechaNacimiento, formData.paciente.semanasGestacion)
      const rangoEdad = obtenerRangoEdad(edadCorregida)
      
      if (rangoEdad) {
        setRangoEdadSeleccionado(rangoEdad.nombre)
        cargarItemsEvaluacion(rangoEdad.id)
        
        // Mostrar información del rango identificado
        console.log(`Rango identificado: ${rangoEdad.nombre}`)
        console.log(`Descripción: ${rangoEdad.descripcion}`)
      } else {
        alert('La edad del niño no está dentro del rango válido para la evaluación (0-84 meses).')
        return
      }
      
      setCurrentStep(2)
    } else if (currentStep === 2) {
      // Calcular puntuaciones antes de continuar
      calcularPuntuaciones()
      setCurrentStep(3)
    } else if (currentStep === 3) {
      setCurrentStep(4)
    }
  }

  // Función para manejar paso anterior
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Función para recalcular edades
  const recalcularEdades = () => {
    if (formData.paciente.fechaNacimiento && formData.paciente.semanasGestacion) {
      const edadCronologica = calcularEdadCronologica(formData.paciente.fechaNacimiento)
      const edadCorregida = calcularEdadCorregida(formData.paciente.fechaNacimiento, formData.paciente.semanasGestacion)
      
      console.log('Edad Cronológica:', formatearEdad(edadCronologica))
      console.log('Edad Corregida:', formatearEdad(edadCorregida))
      
      // Determinar rango de edad para cargar items
      const edadMeses = obtenerEdadCorregidaMeses(formData.paciente.fechaNacimiento, formData.paciente.semanasGestacion)
      const rango = obtenerRangoEdad(edadMeses)
      
      if (rango) {
        console.log('Rango de edad:', rango.nombre)
        cargarItemsEvaluacion(rango.id)
      }
    }
  }

  // Función para renderizar contenido del paso
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Información del Paciente</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  value={formData.paciente.nombre}
                  onChange={(e) => handleInputChange('paciente.nombre', e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Apellidos *
                </label>
                <input
                  type="text"
                  value={formData.paciente.apellidos}
                  onChange={(e) => handleInputChange('paciente.apellidos', e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha de Nacimiento *
                </label>
                <input
                  type="date"
                  value={formData.paciente.fechaNacimiento}
                  onChange={(e) => handleInputChange('paciente.fechaNacimiento', e.target.value)}
                  className="input-field"
                  required
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
                  value={formData.paciente.semanasGestacion}
                  onChange={(e) => handleInputChange('paciente.semanasGestacion', e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Género *
                </label>
                <select
                  value={formData.paciente.genero}
                  onChange={(e) => handleInputChange('paciente.genero', e.target.value)}
                  className="input-field"
                  required
                >
                  <option value="">Seleccionar género</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
              </div>
            </div>

            {/* Información de edades calculadas */}
            {formData.paciente.fechaNacimiento && formData.paciente.semanasGestacion && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Edades Calculadas:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Edad Cronológica:</span>
                    <span className="ml-2 text-blue-600">
                      {formatearEdad(calcularEdadCronologica(formData.paciente.fechaNacimiento))}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Edad Corregida:</span>
                    <span className="ml-2 text-blue-600">
                      {formatearEdad(calcularEdadCorregida(formData.paciente.fechaNacimiento, formData.paciente.semanasGestacion))}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={recalcularEdades}
                  className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Recalcular Edades
                </button>
              </div>
            )}

            <div className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg">
              <strong>Nota:</strong> La edad corregida se calcula automáticamente para niños nacidos antes de las 37 semanas de gestación.
            </div>
            
            {/* Botón de Reset para debugging */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => {
                  setFormData({
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
                        puntuacionTipica: 100,
                        percentil: 50
                      },
                      motricidadFinaAdaptativa: {
                        nombre: 'Motricidad Fina Adaptativa',
                        codigo: 'MFA',
                        items: [],
                        puntuacionDirecta: 0,
                        puntuacionTipica: 100,
                        percentil: 50
                      },
                      audicionLenguaje: {
                        nombre: 'Audición y Lenguaje',
                        codigo: 'AL',
                        items: [],
                        puntuacionDirecta: 0,
                        puntuacionTipica: 100,
                        percentil: 50
                      },
                      personalSocial: {
                        nombre: 'Personal Social',
                        codigo: 'PS',
                        items: [],
                        puntuacionDirecta: 0,
                        puntuacionTipica: 100,
                        percentil: 50
                      }
                    },
                    puntuacionTotal: 0,
                    nivelDesarrollo: 'Normal'
                  })
                  
                  // Limpiar historial de rangos
                  setHistorialRangos({
                    motricidadGruesa: [],
                    motricidadFinaAdaptativa: [],
                    audicionLenguaje: [],
                    personalSocial: []
                  })
                  
                  // Limpiar historial de items
                  setHistorialItems({
                    motricidadGruesa: [],
                    motricidadFinaAdaptativa: [],
                    audicionLenguaje: [],
                    personalSocial: []
                  })
                  
                  // Limpiar otros estados
                  setRangoEdadSeleccionado('')
                  setRangoEvaluacionActual('')
                  setEvaluacionCompletada({
                    motricidadGruesa: false,
                    motricidadFinaAdaptativa: false,
                    audicionLenguaje: false,
                    personalSocial: false
                  })
                  
                  console.log('Form reset to initial state')
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              >
                Reset Form
              </button>
            </div>
          </div>
        )
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-lg font-medium text-blue-800 mb-2">
                Evaluación por Áreas - {rangoEdadSeleccionado}
              </h3>
              <div className="bg-blue-100 border border-blue-300 rounded p-3 mb-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-blue-800 font-medium">
                      <strong>Rango Identificado:</strong>
                    </p>
                    <p className="text-sm text-blue-900">{rangoEdadSeleccionado}</p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-800 font-medium">
                      <strong>Edad para Evaluación:</strong>
                    </p>
                    <p className="text-sm text-blue-900">
                      {formatearEdad(calcularEdadCorregida(formData.paciente.fechaNacimiento, formData.paciente.semanasGestacion))}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Reglas de Evaluación Secuencial */}
              <div className="bg-white border border-blue-300 rounded p-3 mb-3">
                <h4 className="font-medium text-blue-900 mb-2">📋 Reglas de Evaluación Secuencial:</h4>
                <div className="text-sm text-blue-800 space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span><strong>Punto Inicial:</strong> Se requieren 2 items consecutivos que cumplan en el rango de edad inicial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span><strong>Si No Cumple:</strong> Retroceder al rango anterior en orden inverso hasta lograr 2 consecutivos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    <span><strong>Punto de Cierre:</strong> Evaluación se detiene cuando no se cumplan 2 items consecutivos</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-blue-700 mb-3">
                Evalúe cada área del desarrollo marcando los checkboxes para los items que el niño cumple. 
                La evaluación es secuencial y automática según las reglas establecidas.
              </p>
            </div>
            
            {Object.entries(formData.areas).map(([areaKey, area]) => (
              <div key={areaKey} className="card">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium text-gray-900">{area.nombre}</h4>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={() => evaluarProgresoArea(areaKey)}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                    >
                      Evaluar Progreso
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (verificarDetencionEvaluacion(areaKey)) {
                          alert(`Evaluación detenida para ${area.nombre} - 2 negativos consecutivos`)
                        } else {
                          alert(`${area.nombre} puede continuar evaluando`)
                        }
                      }}
                      className="px-3 py-1 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700 transition-colors"
                    >
                      Verificar Estado
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const nuevaPuntuacion = calcularPuntuacionDirecta(areaKey)
                        alert(`Puntuación Directa recalculada: ${nuevaPuntuacion}`)
                      }}
                      className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition-colors"
                    >
                      Recalcular Puntuación
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        const puntuacion = calcularPuntuacionDirecta(areaKey)
                        if (puntuacion > 0) {
                          const itemEnHistorial = historialItems[areaKey]?.find(item => 
                            parseInt(item.itemId) === puntuacion && item.completado === true
                          )
                          if (itemEnHistorial) {
                            const rangoDisplay = itemEnHistorial.rango === 'rango-inicial' 
                              ? 'Rango Inicial' 
                              : `Rango ${itemEnHistorial.rango.split('-')[1]}`
                            alert(`Puntuación Directa: ${puntuacion}\nÚltimo nivel alcanzado en: ${rangoDisplay}\nDescripción: ${itemEnHistorial.descripcion}`)
                          }
                        } else {
                          alert('No hay puntuación directa calculada aún.')
                        }
                      }}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                    >
                      Ver Último Nivel
                    </button>
                  </div>
                </div>

                {/* Información del rango actual */}
                <div className="bg-gray-50 p-3 rounded-lg mb-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Rango Actual:</span>
                      <span className="ml-2 text-blue-600">{rangoEvaluacionActual}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Items Evaluados:</span>
                      <span className="ml-2 text-green-600">
                        {area.items.filter(item => item.completado !== null).length} de {area.items.length}
                      </span>
                    </div>
                  </div>
                  
                  {/* Historial de rangos evaluados */}
                  {historialRangos[areaKey].length > 0 && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <span className="font-medium text-gray-700 text-xs">Historial de Rangos:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {historialRangos[areaKey].map((rango, index) => (
                          <span
                            key={index}
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                              rango.includes('←') 
                                ? 'bg-yellow-100 text-yellow-800' 
                                : rango.includes('→')
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {rango}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Items de evaluación */}
                <div className="space-y-3">
                  {area.items.map((item, index) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg p-3">
                      <div className="flex items-start space-x-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-sm font-medium text-gray-900">
                                Item {item.id}
                              </span>
                              <span className="text-xs text-gray-500">
                                ({item.edadAparicion})
                              </span>
                            </div>
                            {/* Estado actual del item */}
                            <div className="text-xs">
                              <span className={`inline-flex px-2 py-1 font-medium rounded-full ${
                                item.completado === true
                                  ? 'bg-green-100 text-green-800' 
                                  : item.completado === false
                                    ? 'bg-red-100 text-red-800'
                                    : 'bg-gray-100 text-gray-600'
                              }`}>
                                {item.completado === true 
                                  ? '✅ Cumple' 
                                  : item.completado === false 
                                    ? '❌ No cumple' 
                                    : '⏸️ Sin evaluar'}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mb-3">{item.descripcion}</p>
                          
                          {/* Controles de evaluación con dos checkboxes */}
                          <div className="flex items-center space-x-4">
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={item.completado === true}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    // Si se marca "Cumple", desmarcar "No cumple"
                                    handleCheckboxChange(areaKey, item.id, true)
                                  } else {
                                    // Si se desmarca, poner en estado neutral
                                    handleCheckboxChange(areaKey, item.id, null)
                                  }
                                }}
                                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                              />
                              <span className="text-sm font-medium text-green-700">1 (Cumple)</span>
                            </label>
                            
                            <label className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={item.completado === false}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    // Si se marca "No cumple", desmarcar "Cumple"
                                    handleCheckboxChange(areaKey, item.id, false)
                                  } else {
                                    // Si se desmarca, poner en estado neutral
                                    handleCheckboxChange(areaKey, item.id, null)
                                  }
                                }}
                                className="h-4 w-4 text-red-600 focus:ring-red-500 border-red-300 rounded"
                              />
                              <span className="text-sm font-medium text-red-700">0 (No cumple)</span>
                            </label>
                          </div>
                          
                          {/* Indicador de progreso secuencial */}
                          <div className="mt-3 flex items-center space-x-2">
                            <div className="flex space-x-1">
                              {area.items.slice(0, index + 1).map((prevItem, prevIndex) => (
                                <div
                                  key={prevIndex}
                                  className={`w-2 h-2 rounded-full ${
                                    prevItem.completado === true
                                      ? 'bg-green-500' 
                                      : prevItem.completado === false 
                                        ? 'bg-red-500' 
                                        : 'bg-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500">
                              Progreso secuencial
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resumen del área */}
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-blue-700">Puntuación Directa:</span>
                      <span className="ml-2 text-blue-900 font-bold text-lg">
                        {calcularPuntuacionDirecta(areaKey)}
                      </span>
                      <div className="text-xs text-blue-600 mt-1">
                        🎯 Último nivel alcanzado
                      </div>
                      {(() => {
                        const puntuacion = calcularPuntuacionDirecta(areaKey)
                        if (puntuacion > 0) {
                          // Buscar en qué rango se evaluó este item
                          const itemEnHistorial = historialItems[areaKey]?.find(item => 
                            parseInt(item.itemId) === puntuacion && item.completado === true
                          )
                          if (itemEnHistorial) {
                            const rangoDisplay = itemEnHistorial.rango === 'rango-inicial' 
                              ? 'Rango Inicial' 
                              : `Rango ${itemEnHistorial.rango.split('-')[1]}`
                            return (
                              <div className="text-xs text-blue-600 mt-1">
                                Último nivel alcanzado en: {rangoDisplay}
                              </div>
                            )
                          }
                        }
                        return null
                      })()}
                    </div>
                    <div>
                      <span className="font-medium text-blue-700">Puntuación Típica:</span>
                      <span className="ml-2 text-blue-900">
                        {(() => {
                          const puntuacionDirecta = calcularPuntuacionDirecta(areaKey)
                          if (puntuacionDirecta > 0) {
                            // Obtener el rango de edad actual en el formato correcto para la tabla
                            let rangoEdadParaTabla: string = ''
                            if (rangoEvaluacionActual) {
                              const numeroRango = rangoEvaluacionActual.split('-')[1]
                              rangoEdadParaTabla = `Rango ${numeroRango}`
                            }
                            
                            const conversion = obtenerPuntuacionTipica(areaKey, puntuacionDirecta, rangoEdadParaTabla)
                            return conversion ? conversion.puntuacionTipica : 0
                          }
                          return 0
                        })()}
                      </span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-700">Percentil:</span>
                      <span className="ml-2 text-blue-900">
                        {(() => {
                          const puntuacionDirecta = calcularPuntuacionDirecta(areaKey)
                          if (puntuacionDirecta > 0) {
                            // Obtener el rango de edad actual en el formato correcto para la tabla
                            let rangoEdadParaTabla: string = ''
                            if (rangoEvaluacionActual) {
                              const numeroRango = rangoEvaluacionActual.split('-')[1]
                              rangoEdadParaTabla = `Rango ${numeroRango}`
                            }
                            
                            const conversion = obtenerPuntuacionTipica(areaKey, puntuacionDirecta, rangoEdadParaTabla)
                            return conversion ? `P${conversion.percentil}` : 'P0'
                          }
                          return 'P0'
                        })()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Explicación de la puntuación directa */}
                  <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-800">
                    <strong>📊 Cálculo de Puntuación Directa:</strong>
                    {(() => {
                      const puntuacion = calcularPuntuacionDirecta(areaKey)
                      if (puntuacion > 0) {
                        return ` Valor del ÚLTIMO item que cumple (Item ${puntuacion}) antes de obtener 2 negativos consecutivos. La puntuación representa el nivel alcanzado por el niño en la evaluación progresiva.`
                      } else {
                        return ' No hay items que cumplan aún. La puntuación será 0 hasta que se evalúen items positivos.'
                      }
                    })()}
                  </div>
                  
                  {/* Explicación de la puntuación típica */}
                  <div className="mt-2 p-2 bg-green-100 rounded text-xs text-green-800">
                    <strong>🎯 Cálculo de Puntuación Típica:</strong>
                    {(() => {
                      const puntuacion = calcularPuntuacionDirecta(areaKey)
                      if (puntuacion > 0) {
                        return ` Transformada automáticamente desde la puntuación directa (${puntuacion}) usando las tablas de conversión específicas para ${areaKey.replace(/([A-Z])/g, ' $1').trim()}.`
                      } else {
                        return ' No hay puntuación directa calculada aún. La puntuación típica será 0 hasta que se evalúen items positivos.'
                      }
                    })()}
                  </div>
                  
                  {/* Estado de la evaluación */}
                  <div className="mt-2">
                    <span className="font-medium text-blue-700">Estado:</span>
                    <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      verificarDetencionEvaluacion(areaKey)
                        ? 'bg-red-100 text-red-800'
                        : evaluarProgresoRango(areaKey, rangoEvaluacionActual || '')
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {verificarDetencionEvaluacion(areaKey)
                        ? 'Evaluación Detenida'
                        : evaluarProgresoRango(areaKey, rangoEvaluacionActual || '')
                          ? 'Puede Continuar'
                          : 'Requiere Retroceso'}
                    </span>
                  </div>
                </div>
                
                {/* Visualización de Evaluación por Rangos */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-3">📊 Historial de Evaluación por Rangos</h5>
                  
                  {historialItems[areaKey].length > 0 ? (
                    <div className="space-y-3">
                      {/* Agrupar items por rango */}
                      {(() => {
                        const itemsPorRango: {[key: string]: typeof historialItems[typeof areaKey]} = {}
                        historialItems[areaKey].forEach(item => {
                          if (!itemsPorRango[item.rango]) {
                            itemsPorRango[item.rango] = []
                          }
                          itemsPorRango[item.rango].push(item)
                        })
                        
                        return Object.entries(itemsPorRango).map(([rango, items]) => (
                          <div key={rango} className="border border-gray-200 rounded-lg p-3 bg-white">
                            <div className="flex items-center justify-between mb-2">
                              <h6 className="font-medium text-gray-800 text-sm">
                                {rango === 'rango-inicial' ? 'Rango Inicial' : `Rango ${rango.split('-')[1]}`}
                              </h6>
                              <span className="text-xs text-gray-500">
                                {items.length} items evaluados
                              </span>
                            </div>
                            
                            <div className="space-y-2">
                              {items.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3 text-sm">
                                  <div className={`w-3 h-3 rounded-full ${
                                    item.completado ? 'bg-green-500' : 'bg-red-500'
                                  }`}></div>
                                  <span className="font-medium text-gray-700">
                                    Item {item.itemId}:
                                  </span>
                                  <span className="text-gray-600 flex-1">
                                    {item.descripcion}
                                  </span>
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    item.completado 
                                      ? 'bg-green-100 text-green-800' 
                                      : 'bg-red-100 text-red-800'
                                  }`}>
                                    {item.completado ? 'Cumple' : 'No cumple'}
                                  </span>
                                </div>
                              ))}
                            </div>
                            
                            {/* Resumen del rango */}
                            <div className="mt-3 pt-2 border-t border-gray-200">
                              <div className="flex justify-between text-xs text-gray-600">
                                <span>
                                  Cumple: {items.filter(item => item.completado === true).length}
                                </span>
                                <span>
                                  No cumple: {items.filter(item => item.completado === false).length}
                                </span>
                                <span>
                                  Total: {items.length}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))
                      })()}
                      
                      {/* Resumen general del área */}
                      <div className="bg-blue-100 border border-blue-300 rounded-lg p-3">
                        <h6 className="font-medium text-blue-900 text-sm mb-2">📈 Resumen General del Área</h6>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-blue-700">Total Items Evaluados:</span>
                            <span className="ml-2 text-blue-900">{historialItems[areaKey].length}</span>
                          </div>
                          <div>
                            <span className="font-medium text-blue-700">Items que Cumplen:</span>
                            <span className="ml-2 text-blue-900">
                              {historialItems[areaKey].filter(item => item.completado === true).length}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-blue-700">Rangos Evaluados:</span>
                            <span className="ml-2 text-blue-900">
                              {new Set(historialItems[areaKey].map(item => item.rango)).size}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-blue-700">Puntuación Directa:</span>
                            <span className="ml-2 text-blue-900">{area.puntuacionDirecta}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4 text-gray-500">
                      <p className="text-sm">No hay items evaluados aún</p>
                      <p className="text-xs">Marque los checkboxes para comenzar la evaluación</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Resultados y Gráficos</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-md font-medium text-gray-700 mb-3">Puntuaciones por Área</h4>
                  {Object.entries(formData.areas).map(([areaKey, area]) => (
                    <div key={areaKey} className="mb-4 p-3 bg-gray-50 rounded">
                      <h5 className="font-medium text-gray-900">{area.nombre}</h5>
                      <div className="text-sm text-gray-600">
                        <p>Puntuación Directa: {area.puntuacionDirecta}</p>
                        <p>Puntuación Típica: {area.puntuacionTipica}</p>
                        <p>Percentil: {area.percentil}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
                    <h5 className="font-medium text-blue-900">Puntuación Total</h5>
                    <p className="text-2xl font-bold text-blue-800">{formData.puntuacionTotal.toFixed(1)}</p>
                  </div>
                </div>
                
                                 <div>
                   <h4 className="text-md font-medium text-gray-700 mb-3">Gráfico de Desarrollo</h4>
                   <GraficoDesarrollo areas={formData.areas} />
                 </div>
              </div>
            </div>
          </div>
        )
        
      case 4:
        return (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Revisión Final</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium text-gray-900 mb-2">Información del Paciente</h4>
                  <p><strong>Nombre:</strong> {formData.paciente.nombre}</p>
                  <p><strong>Apellidos:</strong> {formData.paciente.apellidos}</p>
                  <p><strong>Fecha de Nacimiento:</strong> {formData.paciente.fechaNacimiento}</p>
                  <p><strong>Semanas de Gestación:</strong> {formData.paciente.semanasGestacion}</p>
                  <p><strong>Género:</strong> {formData.paciente.genero}</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium text-gray-900 mb-2">Rango de Evaluación</h4>
                  <p><strong>Rango Identificado:</strong> {rangoEdadSeleccionado}</p>
                  <p><strong>Rango de Evaluación:</strong> {rangoEvaluacionActual}</p>
                </div>
                
                <div className="p-4 bg-gray-50 rounded">
                  <h4 className="font-medium text-gray-900 mb-2">Resumen de Puntuaciones</h4>
                  {Object.entries(formData.areas).map(([areaKey, area]) => (
                    <div key={areaKey} className="mb-2">
                      <p><strong>{area.nombre}:</strong> Directa: {area.puntuacionDirecta}, Típica: {area.puntuacionTipica}</p>
                    </div>
                  ))}
                  <p className="mt-2 font-medium"><strong>Puntuación Total:</strong> {formData.puntuacionTotal.toFixed(1)}</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
                <p className="text-green-800 text-center">
                  ✅ Evaluación completada exitosamente. Los resultados han sido calculados y están listos para ser guardados.
                </p>
              </div>
            </div>
          </div>
        )
        
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Nueva Evaluación</h1>
          <p className="text-gray-600">Complete la información del paciente y evalúe las áreas del desarrollo</p>
        </div>
        
        {/* Indicador de pasos */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Información del Paciente</span>
            <span>Evaluación por Áreas</span>
            <span>Resultados</span>
            <span>Revisión Final</span>
          </div>
        </div>
        
        {/* Contenido del paso */}
        {renderStepContent()}
        
        {/* Navegación */}
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`px-4 py-2 rounded-md ${
              currentStep === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            Anterior
          </button>
          
          <button
            type="button"
            onClick={handleNext}
            disabled={currentStep === 4}
            className={`px-6 py-2 rounded-md ${
              currentStep === 4
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-primary-600 text-white hover:bg-primary-700'
            }`}
          >
            {currentStep === 4 ? 'Completado' : 'Siguiente'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Evaluacion