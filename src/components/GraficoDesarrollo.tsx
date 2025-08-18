import React from 'react'
import { AreaEvaluacion } from '../types/evaluacion'

interface GraficoDesarrolloProps {
  areas: {
    motricidadGruesa: AreaEvaluacion
    motricidadFinaAdaptativa: AreaEvaluacion
    audicionLenguaje: AreaEvaluacion
    personalSocial: AreaEvaluacion
  }
}

const GraficoDesarrollo: React.FC<GraficoDesarrolloProps> = ({ areas }) => {
  const areaNames = {
    motricidadGruesa: 'Motricidad Gruesa',
    motricidadFinaAdaptativa: 'Motricidad Fina',
    audicionLenguaje: 'Audición y Lenguaje',
    personalSocial: 'Personal Social'
  }

  const areaColors = {
    motricidadGruesa: '#3B82F6', // blue-500
    motricidadFinaAdaptativa: '#10B981', // emerald-500
    audicionLenguaje: '#F59E0B', // amber-500
    personalSocial: '#8B5CF6' // violet-500
  }

  // Normalizar puntuaciones típicas para el gráfico (0-100)
  const normalizarPuntuacion = (puntuacion: number): number => {
    // Las puntuaciones típicas van de 50 a 130, normalizamos a 0-100
    return Math.max(0, Math.min(100, ((puntuacion - 50) / 80) * 100))
  }

  // Crear puntos para el gráfico de radar
  const crearPuntosRadar = () => {
    const centerX = 200
    const centerY = 200
    const radius = 150
    
    return Object.entries(areas).map(([key, area], index) => {
      const angle = (index * Math.PI * 2) / 4 - Math.PI / 2
      const normalizedScore = normalizarPuntuacion(area.puntuacionTipica)
      const pointRadius = (normalizedScore / 100) * radius
      
      return {
        x: centerX + Math.cos(angle) * pointRadius,
        y: centerY + Math.sin(angle) * pointRadius,
        angle,
        area: key,
        score: area.puntuacionTipica,
        normalizedScore
      }
    })
  }

  const puntos = crearPuntosRadar()

  return (
    <div className="space-y-6">
      {/* Gráfico de Radar */}
      <div className="card">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Perfil de Desarrollo por Áreas</h4>
        <div className="flex justify-center">
          <svg width="400" height="400" className="border border-gray-200 rounded-lg">
            {/* Círculos de fondo */}
            <circle cx="200" cy="200" r="150" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            <circle cx="200" cy="200" r="120" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            <circle cx="200" cy="200" r="90" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            <circle cx="200" cy="200" r="60" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            <circle cx="200" cy="200" r="30" fill="none" stroke="#E5E7EB" strokeWidth="1" />
            
            {/* Líneas radiales */}
            {Object.entries(areas).map((_, index) => {
              const angle = (index * Math.PI * 2) / 4 - Math.PI / 2
              const x = 200 + Math.cos(angle) * 150
              const y = 200 + Math.sin(angle) * 150
              return (
                <line
                  key={index}
                  x1="200"
                  y1="200"
                  x2={x}
                  y2={y}
                  stroke="#E5E7EB"
                  strokeWidth="1"
                />
              )
            })}
            
            {/* Área del gráfico */}
            <polygon
              points={puntos.map(p => `${p.x},${p.y}`).join(' ')}
              fill="rgba(59, 130, 246, 0.1)"
              stroke="#3B82F6"
              strokeWidth="2"
            />
            
            {/* Puntos de datos */}
            {puntos.map((punto, index) => (
              <circle
                key={index}
                cx={punto.x}
                cy={punto.y}
                r="6"
                fill={areaColors[punto.area as keyof typeof areaColors]}
                stroke="white"
                strokeWidth="2"
              />
            ))}
            
            {/* Etiquetas de áreas */}
            {Object.entries(areas).map(([key, area], index) => {
              const angle = (index * Math.PI * 2) / 4 - Math.PI / 2
              const labelRadius = 170
              const x = 200 + Math.cos(angle) * labelRadius
              const y = 200 + Math.sin(angle) * labelRadius
              
              return (
                <text
                  key={index}
                  x={x}
                  y={y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-medium"
                  fill="#374151"
                >
                  {areaNames[key as keyof typeof areaNames]}
                </text>
              )
            })}
            
            {/* Puntuaciones en los puntos */}
            {puntos.map((punto, index) => (
              <text
                key={index}
                x={punto.x}
                y={punto.y - 15}
                textAnchor="middle"
                className="text-xs font-bold"
                fill="#1F2937"
              >
                {punto.score}
              </text>
            ))}
          </svg>
        </div>
      </div>

      {/* Gráfico de Barras */}
      <div className="card">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Comparación de Puntuaciones por Área</h4>
        <div className="space-y-4">
          {Object.entries(areas).map(([key, area]) => (
            <div key={key} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">
                  {areaNames[key as keyof typeof areaNames]}
                </span>
                <span className="text-gray-600">
                  {area.puntuacionTipica} (P{area.percentil})
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="h-3 rounded-full transition-all duration-300"
                  style={{
                    width: `${normalizarPuntuacion(area.puntuacionTipica)}%`,
                    backgroundColor: areaColors[key as keyof typeof areaColors]
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="card bg-gray-50">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Interpretación de Puntuaciones</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-gray-600">Bajo: 50-69</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            <span className="text-gray-600">Normal Bajo: 70-84</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-gray-600">Normal: 85-115</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-gray-600">Superior: 116-130</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GraficoDesarrollo
