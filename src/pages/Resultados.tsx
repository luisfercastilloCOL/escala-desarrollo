import React, { useState } from 'react'
import { 
  MagnifyingGlassIcon, 
  FunnelIcon,
  EyeIcon,
  DocumentArrowDownIcon
} from '@heroicons/react/24/outline'
import GraficoDesarrollo from '../components/GraficoDesarrollo'
import { EvaluacionDesarrollo } from '../types/evaluacion'

const Resultados: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArea, setSelectedArea] = useState<string>('todas')
  const [selectedEvaluation, setSelectedEvaluation] = useState<EvaluacionDesarrollo | null>(null)

  // Datos de ejemplo
  const evaluaciones: EvaluacionDesarrollo[] = [
    {
      id: '1',
      fecha: '2024-01-15',
      paciente: {
        nombre: 'María',
        apellidos: 'García López',
        fechaNacimiento: '2022-06-15',
        semanasGestacion: '38',
        genero: 'femenino'
      },
      areas: {
        motricidadGruesa: {
          nombre: 'Motricidad Gruesa',
          codigo: 'MG',
          items: [],
          puntuacionDirecta: 8,
          puntuacionTipica: 85,
          percentil: 63
        },
        motricidadFinaAdaptativa: {
          nombre: 'Motricidad Fina Adaptativa',
          codigo: 'MFA',
          items: [],
          puntuacionDirecta: 7,
          puntuacionTipica: 80,
          percentil: 50
        },
        audicionLenguaje: {
          nombre: 'Audición y Lenguaje',
          codigo: 'AL',
          items: [],
          puntuacionDirecta: 9,
          puntuacionTipica: 90,
          percentil: 75
        },
        personalSocial: {
          nombre: 'Personal Social',
          codigo: 'PS',
          items: [],
          puntuacionDirecta: 8,
          puntuacionTipica: 85,
          percentil: 63
        }
      },
      puntuacionTotal: 85,
      nivelDesarrollo: 'Normal'
    },
    {
      id: '2',
      fecha: '2024-01-10',
      paciente: {
        nombre: 'Carlos',
        apellidos: 'Rodríguez Martínez',
        fechaNacimiento: '2021-12-03',
        semanasGestacion: '35',
        genero: 'masculino'
      },
      areas: {
        motricidadGruesa: {
          nombre: 'Motricidad Gruesa',
          codigo: 'MG',
          items: [],
          puntuacionDirecta: 6,
          puntuacionTipica: 75,
          percentil: 37
        },
        motricidadFinaAdaptativa: {
          nombre: 'Motricidad Fina Adaptativa',
          codigo: 'MFA',
          items: [],
          puntuacionDirecta: 5,
          puntuacionTipica: 70,
          percentil: 25
        },
        audicionLenguaje: {
          nombre: 'Audición y Lenguaje',
          codigo: 'AL',
          items: [],
          puntuacionDirecta: 7,
          puntuacionTipica: 80,
          percentil: 50
        },
        personalSocial: {
          nombre: 'Personal Social',
          codigo: 'PS',
          items: [],
          puntuacionDirecta: 6,
          puntuacionTipica: 75,
          percentil: 37
        }
      },
      puntuacionTotal: 75,
      nivelDesarrollo: 'Normal Bajo'
    }
  ]

  const filteredEvaluaciones = evaluaciones.filter(evaluacion => {
    const matchesSearch = evaluacion.paciente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         evaluacion.paciente.apellidos.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesArea = selectedArea === 'todas' || true // Por ahora todas las áreas
    return matchesSearch && matchesArea
  })

  const handleViewDetails = (evaluacion: EvaluacionDesarrollo) => {
    setSelectedEvaluation(evaluacion)
  }

  const handleCloseDetails = () => {
    setSelectedEvaluation(null)
  }

  const handleExportPDF = (evaluacion: EvaluacionDesarrollo) => {
    // Aquí se implementaría la exportación a PDF
    console.log('Exportando a PDF:', evaluacion)
    alert('Función de exportación a PDF en desarrollo')
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Resultados de Evaluaciones</h1>
        <p className="mt-1 text-sm text-gray-500">
          Historial completo de evaluaciones de desarrollo infantil
        </p>
      </div>

      {/* Filtros y Búsqueda */}
      <div className="card mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar por nombre del paciente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field pl-10 w-full"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="input-field"
            >
              <option value="todas">Todas las áreas</option>
              <option value="motricidadGruesa">Motricidad Gruesa</option>
              <option value="motricidadFinaAdaptativa">Motricidad Fina</option>
              <option value="audicionLenguaje">Audición y Lenguaje</option>
              <option value="personalSocial">Personal Social</option>
            </select>
            <button className="btn-secondary">
              <FunnelIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Lista de Evaluaciones */}
      <div className="card">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Paciente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edad
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Puntuación Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Estado
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEvaluaciones.map((evaluacion) => (
                <tr key={evaluacion.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {evaluacion.paciente.nombre} {evaluacion.paciente.apellidos}
                      </div>
                      <div className="text-sm text-gray-500">{evaluacion.paciente.genero}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(evaluacion.fecha).toLocaleDateString('es-ES')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {evaluacion.nivelDesarrollo}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{evaluacion.puntuacionTotal}</div>
                    <div className="text-sm text-gray-500">
                      Nivel: {evaluacion.nivelDesarrollo}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      evaluacion.puntuacionTotal >= 85 ? 'bg-green-100 text-green-800' :
                      evaluacion.puntuacionTotal >= 70 ? 'bg-blue-100 text-blue-800' :
                      evaluacion.puntuacionTotal >= 55 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {evaluacion.puntuacionTotal >= 85 ? 'Superior' :
                       evaluacion.puntuacionTotal >= 70 ? 'Normal Alto' :
                       evaluacion.puntuacionTotal >= 55 ? 'Normal' :
                       evaluacion.puntuacionTotal >= 40 ? 'Normal Bajo' : 'Bajo'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleViewDetails(evaluacion)}
                        className="text-primary-600 hover:text-primary-900"
                        title="Ver detalles"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleExportPDF(evaluacion)}
                        className="text-gray-600 hover:text-gray-900"
                        title="Exportar PDF"
                      >
                        <DocumentArrowDownIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal de Detalles */}
      {selectedEvaluation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-11/12 max-w-6xl shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                Hoja de Registro - {selectedEvaluation.paciente.nombre} {selectedEvaluation.paciente.apellidos}
              </h3>
              <button
                onClick={handleCloseDetails}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6 max-h-96 overflow-y-auto">
              {/* Información del Paciente */}
              <div className="card">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Información del Paciente</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                    <p className="text-sm text-gray-900">{selectedEvaluation.paciente.nombre} {selectedEvaluation.paciente.apellidos}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Género</label>
                    <p className="text-sm text-gray-900">{selectedEvaluation.paciente.genero}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                    <p className="text-sm text-gray-900">{new Date(selectedEvaluation.paciente.fechaNacimiento).toLocaleDateString('es-ES')}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Semanas de gestación</label>
                    <p className="text-sm text-gray-900">{selectedEvaluation.paciente.semanasGestacion} semanas</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Nivel de Desarrollo</label>
                    <p className="text-sm text-gray-900">{selectedEvaluation.nivelDesarrollo}</p>
                  </div>
                </div>
              </div>

              {/* Resultados por Áreas */}
              <div className="card">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Resultados por Áreas de Desarrollo</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {Object.entries(selectedEvaluation.areas).map(([key, area]) => (
                    <div key={key} className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 mb-3">{area.nombre}</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Puntuación Directa:</span>
                          <span className="font-medium text-blue-600">{area.puntuacionDirecta}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Puntuación Típica:</span>
                          <span className="font-medium text-green-600">{area.puntuacionTipica}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Percentil:</span>
                          <span className="font-medium text-purple-600">{area.percentil}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Puntuación Total */}
              <div className="card bg-blue-50 border-blue-200">
                <h4 className="text-lg font-medium text-blue-900 mb-4">Puntuación Total</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-blue-600">Puntuación Directa Total</p>
                    <p className="text-2xl font-bold text-blue-800">{selectedEvaluation.puntuacionTotal}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-blue-600">Nivel de Desarrollo</p>
                    <p className="text-2xl font-bold text-blue-800">{selectedEvaluation.nivelDesarrollo}</p>
                  </div>
                </div>
              </div>

                          {/* Gráficos de Desarrollo */}
            <div className="card">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Gráficos de Desarrollo por Áreas</h4>
              <GraficoDesarrollo areas={selectedEvaluation.areas} />
            </div>

            {/* Hoja de Registro según páginas 152-155 */}
            <div className="card">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Hoja de Registro - Escala Abreviada del Desarrollo</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Object.entries(selectedEvaluation.areas).map(([areaKey, area]) => (
                  <div key={areaKey} className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-3">{area.nombre}</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Puntuación Directa:</span>
                        <span className="font-medium text-blue-600">{area.puntuacionDirecta}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Puntuación Típica:</span>
                        <span className="font-medium text-green-600">{area.puntuacionTipica}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Percentil:</span>
                        <span className="font-medium text-purple-600">P{area.percentil}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nivel:</span>
                        <span className={`font-medium ${
                          area.puntuacionTipica >= 85 ? 'text-green-600' :
                          area.puntuacionTipica >= 70 ? 'text-blue-600' :
                          area.puntuacionTipica >= 55 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {area.puntuacionTipica >= 85 ? 'Normal' :
                           area.puntuacionTipica >= 70 ? 'Normal Bajo' :
                           area.puntuacionTipica >= 55 ? 'Bajo' : 'Muy Bajo'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

              {/* Nivel de Desarrollo */}
              <div className="card">
                <h4 className="text-lg font-medium text-gray-900 mb-4">Nivel de Desarrollo</h4>
                <p className="text-sm text-gray-700">{selectedEvaluation.nivelDesarrollo}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => handleExportPDF(selectedEvaluation)}
                className="btn-primary"
              >
                Exportar a PDF
              </button>
              <button
                onClick={handleCloseDetails}
                className="btn-secondary"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Resultados

