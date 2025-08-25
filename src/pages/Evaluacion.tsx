import React, { useState } from 'react'
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
  const [mensaje, setMensaje] = useState('')

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
      ) : (
        // Evaluación iniciada
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
          
          <div className="space-y-3">
            <button
              className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors w-full"
              onClick={() => setMensaje('Funcionalidad de evaluación de áreas en desarrollo...')}
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
      )}
    </div>
  )
}

export default Evaluacion
