import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ClipboardDocumentListIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const Dashboard: React.FC = () => {
  const stats = [
    { name: 'Evaluaciones Completadas', value: '12', change: '+2.5%', changeType: 'positive' },
    { name: 'Pacientes Activos', value: '8', change: '+1.2%', changeType: 'positive' },
    { name: 'Promedio de Edad', value: '4.2 años', change: '-0.3%', changeType: 'negative' },
    { name: 'Última Evaluación', value: 'Hace 2 días', change: '', changeType: 'neutral' },
  ]

  const quickActions = [
    {
      name: 'Nueva Evaluación',
      description: 'Iniciar evaluación de desarrollo',
      href: '/evaluacion',
      icon: ClipboardDocumentListIcon,
      color: 'bg-primary-500',
    },
    {
      name: 'Ver Resultados',
      description: 'Revisar evaluaciones previas',
      href: '/resultados',
      icon: ChartBarIcon,
      color: 'bg-green-500',
    },
    {
      name: 'Gestionar Pacientes',
      description: 'Administrar información de pacientes',
      href: '/configuracion',
      icon: UserGroupIcon,
      color: 'bg-blue-500',
    },
  ]

  const recentEvaluaciones = [
    { id: 1, paciente: 'María González', edad: '3 años 2 meses', fecha: '2024-01-15', estado: 'Completada' },
    { id: 2, paciente: 'Carlos Ruiz', edad: '2 años 8 meses', fecha: '2024-01-14', estado: 'En Progreso' },
    { id: 3, paciente: 'Ana Martínez', edad: '4 años 1 mes', fecha: '2024-01-13', estado: 'Completada' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Resumen general de las evaluaciones de desarrollo
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="card">
            <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</dd>
            {stat.change && (
              <dd className={`text-sm ${
                stat.changeType === 'positive' ? 'text-green-600' : 
                stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-500'
              }`}>
                {stat.change}
              </dd>
            )}
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Acciones Rápidas</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickActions.map((action) => (
            <Link
              key={action.name}
              to={action.href}
              className="card hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div className={`flex-shrink-0 p-2 rounded-lg ${action.color}`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">{action.name}</h3>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Evaluaciones */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Evaluaciones Recientes</h2>
          <Link to="/resultados" className="text-sm text-primary-600 hover:text-primary-500">
            Ver todas
          </Link>
        </div>
        <div className="card">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Paciente
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Edad
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentEvaluaciones.map((evaluacion) => (
                  <tr key={evaluacion.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {evaluacion.paciente}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {evaluacion.edad}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {evaluacion.fecha}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        evaluacion.estado === 'Completada' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {evaluacion.estado}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

