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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Evaluación del Desarrollo
      </h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Información del Paciente
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.paciente.nombre}
              onChange={(e) => setFormData({
                ...formData,
                paciente: { ...formData.paciente, nombre: e.target.value }
              })}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Apellidos
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.paciente.apellidos}
              onChange={(e) => setFormData({
                ...formData,
                paciente: { ...formData.paciente, apellidos: e.target.value }
              })}
            />
          </div>
        </div>
        
        <div className="text-center">
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => console.log('Evaluación iniciada')}
          >
            Iniciar Evaluación
          </button>
        </div>
      </div>
    </div>
  )
}

export default Evaluacion