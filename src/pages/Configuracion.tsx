import React, { useState } from 'react'
import { 
  UserGroupIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline'

interface Paciente {
  id: number
  nombre: string
  apellidos: string
  edad: string
  telefono: string
  ultimaEvaluacion: string
  estado: string
}

interface ConfiguracionApp {
  nombreClinica: string
  direccion: string
  telefono: string
  email: string
  idioma: string
  tema: string
  notificaciones: boolean
  backupAutomatico: boolean
}

const Configuracion: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pacientes')
  const [showAddPatient, setShowAddPatient] = useState(false)
  const [editingPatient, setEditingPatient] = useState<Paciente | null>(null)

  const [configuracion, setConfiguracion] = useState<ConfiguracionApp>({
    nombreClinica: 'Centro de Desarrollo Infantil',
    direccion: 'Av. Principal 123, Ciudad',
    telefono: '+1 234 567 890',
    email: 'info@centrodesarrollo.com',
    idioma: 'español',
    tema: 'claro',
    notificaciones: true,
    backupAutomatico: true
  })

  const [pacientes, setPacientes] = useState<Paciente[]>([
    {
      id: 1,
      nombre: 'María',
      apellidos: 'González',
      edad: '3 años 2 meses',
      telefono: '+1 234 567 890',
      ultimaEvaluacion: '2024-01-15',
      estado: 'Activo'
    },
    {
      id: 2,
      nombre: 'Carlos',
      apellidos: 'Ruiz',
      edad: '2 años 8 meses',
      telefono: '+1 234 567 891',
      ultimaEvaluacion: '2024-01-14',
      estado: 'Activo'
    },
    {
      id: 3,
      nombre: 'Ana',
      apellidos: 'Martínez',
      edad: '4 años 1 mes',
      telefono: '+1 234 567 892',
      ultimaEvaluacion: '2024-01-13',
      estado: 'Inactivo'
    }
  ])

  const tabs = [
    { id: 'pacientes', name: 'Pacientes', icon: UserGroupIcon },
    { id: 'clinica', name: 'Clínica', icon: Cog6ToothIcon },
    { id: 'seguridad', name: 'Seguridad', icon: ShieldCheckIcon },
    { id: 'documentacion', name: 'Documentación', icon: DocumentTextIcon },
  ]

  const handleConfigChange = (field: keyof ConfiguracionApp, value: string | boolean) => {
    setConfiguracion(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddPatient = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se agregaría la lógica para agregar un nuevo paciente
    setShowAddPatient(false)
  }

  const handleEditPatient = (paciente: Paciente) => {
    setEditingPatient(paciente)
  }

  const handleDeletePatient = (id: number) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este paciente?')) {
      setPacientes(prev => prev.filter(p => p.id !== id))
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'pacientes':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Gestión de Pacientes</h3>
              <button
                onClick={() => setShowAddPatient(true)}
                className="btn-primary flex items-center"
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Agregar Paciente
              </button>
            </div>

            {/* Patients Table */}
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
                        Teléfono
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Última Evaluación
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
                    {pacientes.map((paciente) => (
                      <tr key={paciente.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {paciente.nombre} {paciente.apellidos}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {paciente.edad}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {paciente.telefono}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {paciente.ultimaEvaluacion}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            paciente.estado === 'Activo' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {paciente.estado}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEditPatient(paciente)}
                              className="text-primary-600 hover:text-primary-900"
                            >
                              <PencilIcon className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleDeletePatient(paciente.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )

      case 'clinica':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Configuración de la Clínica</h3>
            
            <div className="card">
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="nombreClinica" className="block text-sm font-medium text-gray-700">
                      Nombre de la Clínica
                    </label>
                    <input
                      type="text"
                      id="nombreClinica"
                      value={configuracion.nombreClinica}
                      onChange={(e) => handleConfigChange('nombreClinica', e.target.value)}
                      className="input-field mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      value={configuracion.telefono}
                      onChange={(e) => handleConfigChange('telefono', e.target.value)}
                      className="input-field mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
                    Dirección
                  </label>
                  <textarea
                    id="direccion"
                    rows={3}
                    value={configuracion.direccion}
                    onChange={(e) => handleConfigChange('direccion', e.target.value)}
                    className="input-field mt-1"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={configuracion.email}
                    onChange={(e) => handleConfigChange('email', e.target.value)}
                    className="input-field mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="card">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Preferencias de la Aplicación</h4>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="idioma" className="block text-sm font-medium text-gray-700">
                      Idioma
                    </label>
                    <select
                      id="idioma"
                      value={configuracion.idioma}
                      onChange={(e) => handleConfigChange('idioma', e.target.value)}
                      className="input-field mt-1"
                    >
                      <option value="español">Español</option>
                      <option value="ingles">Inglés</option>
                      <option value="frances">Francés</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="tema" className="block text-sm font-medium text-gray-700">
                      Tema
                    </label>
                    <select
                      id="tema"
                      value={configuracion.tema}
                      onChange={(e) => handleConfigChange('tema', e.target.value)}
                      className="input-field mt-1"
                    >
                      <option value="claro">Claro</option>
                      <option value="oscuro">Oscuro</option>
                      <option value="auto">Automático</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <label htmlFor="notificaciones" className="text-sm font-medium text-gray-700">
                        Notificaciones
                      </label>
                      <p className="text-sm text-gray-500">Recibir alertas y recordatorios</p>
                    </div>
                    <input
                      type="checkbox"
                      id="notificaciones"
                      checked={configuracion.notificaciones}
                      onChange={(e) => handleConfigChange('notificaciones', e.target.checked)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <label htmlFor="backupAutomatico" className="text-sm font-medium text-gray-700">
                        Backup Automático
                      </label>
                      <p className="text-sm text-gray-500">Realizar copias de seguridad automáticamente</p>
                    </div>
                    <input
                      type="checkbox"
                      id="backupAutomatico"
                      checked={configuracion.backupAutomatico}
                      onChange={(e) => handleConfigChange('backupAutomatico', e.target.checked)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'seguridad':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Configuración de Seguridad</h3>
            
            <div className="card">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Cambiar Contraseña</h4>
              <div className="space-y-4">
                <div>
                  <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                    Contraseña Actual
                  </label>
                  <input
                    type="password"
                    id="currentPassword"
                    className="input-field mt-1"
                    placeholder="Ingresa tu contraseña actual"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                    Nueva Contraseña
                  </label>
                  <input
                    type="password"
                    id="newPassword"
                    className="input-field mt-1"
                    placeholder="Ingresa tu nueva contraseña"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                    Confirmar Nueva Contraseña
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="input-field mt-1"
                    placeholder="Confirma tu nueva contraseña"
                  />
                </div>
                <button className="btn-primary">
                  Cambiar Contraseña
                </button>
              </div>
            </div>

            <div className="card">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Autenticación de Dos Factores</h4>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-700">Activar autenticación de dos factores</p>
                  <p className="text-sm text-gray-500">Añade una capa extra de seguridad a tu cuenta</p>
                </div>
                <button className="btn-secondary">
                  Configurar
                </button>
              </div>
            </div>
          </div>
        )

      case 'documentacion':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Documentación y Ayuda</h3>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="card hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div className="text-center">
                  <DocumentTextIcon className="mx-auto h-12 w-12 text-primary-600" />
                  <h4 className="mt-2 text-sm font-medium text-gray-900">Manual de Usuario</h4>
                  <p className="mt-1 text-sm text-gray-500">Guía completa de uso de la aplicación</p>
                </div>
              </div>
              
              <div className="card hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div className="text-center">
                  <DocumentTextIcon className="mx-auto h-12 w-12 text-primary-600" />
                  <h4 className="mt-2 text-sm font-medium text-gray-900">Escala de Desarrollo</h4>
                  <p className="mt-1 text-sm text-gray-500">Documentación de la escala abreviada</p>
                </div>
              </div>
              
              <div className="card hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div className="text-center">
                  <DocumentTextIcon className="mx-auto h-12 w-12 text-primary-600" />
                  <h4 className="mt-2 text-sm font-medium text-gray-900">Video Tutoriales</h4>
                  <p className="mt-1 text-sm text-gray-500">Aprende a usar la aplicación paso a paso</p>
                </div>
              </div>
              
              <div className="card hover:shadow-md transition-shadow duration-200 cursor-pointer">
                <div className="text-center">
                  <DocumentTextIcon className="mx-auto h-12 w-12 text-primary-600" />
                  <h4 className="mt-2 text-sm font-medium text-gray-900">Soporte Técnico</h4>
                  <p className="mt-1 text-sm text-gray-500">Contacta con nuestro equipo de soporte</p>
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Configuración</h1>
        <p className="mt-1 text-sm text-gray-500">
          Administra la configuración de la aplicación y los datos de pacientes
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <tab.icon className="h-5 w-5 inline mr-2" />
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  )
}

export default Configuracion

