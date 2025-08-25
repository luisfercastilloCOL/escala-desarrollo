// Tablas de conversión para cada área (ejemplo - deberías usar tus datos reales de Excel)
export const tablasConversion = {
  motricidadGruesa: {
    nombre: 'Motricidad Gruesa',
    rangos: [
      { edad: '0-1 mes', puntuaciones: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 35 } },
      { edad: '1-3 meses', puntuaciones: { 1: 20, 2: 25, 3: 30, 4: 35, 5: 40 } },
      { edad: '3-6 meses', puntuaciones: { 1: 25, 2: 30, 3: 35, 4: 40, 5: 45 } },
      { edad: '6-9 meses', puntuaciones: { 1: 30, 2: 35, 3: 40, 4: 45, 5: 50 } },
      { edad: '9-12 meses', puntuaciones: { 1: 35, 2: 40, 3: 45, 4: 50, 5: 55 } },
      { edad: '1-1.5 años', puntuaciones: { 1: 40, 2: 45, 3: 50, 4: 55, 5: 60 } },
      { edad: '1.5-2 años', puntuaciones: { 1: 45, 2: 50, 3: 55, 4: 60, 5: 65 } },
      { edad: '2-3 años', puntuaciones: { 1: 50, 2: 55, 3: 60, 4: 65, 5: 70 } },
      { edad: '3-4 años', puntuaciones: { 1: 55, 2: 60, 3: 65, 4: 70, 5: 75 } },
      { edad: '4-5 años', puntuaciones: { 1: 60, 2: 65, 3: 70, 4: 75, 5: 80 } },
      { edad: '5-6 años', puntuaciones: { 1: 65, 2: 70, 3: 75, 4: 80, 5: 85 } },
      { edad: '6-7 años', puntuaciones: { 1: 70, 2: 75, 3: 80, 4: 85, 5: 90 } }
    ]
  },
  motricidadFinaAdaptativa: {
    nombre: 'Motricidad Fina Adaptativa',
    rangos: [
      { edad: '0-1 mes', puntuaciones: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 35 } },
      { edad: '1-3 meses', puntuaciones: { 1: 20, 2: 25, 3: 30, 4: 35, 5: 40 } },
      { edad: '3-6 meses', puntuaciones: { 1: 25, 2: 30, 3: 35, 4: 40, 5: 45 } },
      { edad: '6-9 meses', puntuaciones: { 1: 30, 2: 35, 3: 40, 4: 45, 5: 50 } },
      { edad: '9-12 meses', puntuaciones: { 1: 35, 2: 40, 3: 45, 4: 50, 5: 55 } },
      { edad: '1-1.5 años', puntuaciones: { 1: 40, 2: 45, 3: 50, 4: 55, 5: 60 } },
      { edad: '1.5-2 años', puntuaciones: { 1: 45, 2: 50, 3: 55, 4: 60, 5: 65 } },
      { edad: '2-3 años', puntuaciones: { 1: 50, 2: 55, 3: 60, 4: 65, 5: 70 } },
      { edad: '3-4 años', puntuaciones: { 1: 55, 2: 60, 3: 65, 4: 70, 5: 75 } },
      { edad: '4-5 años', puntuaciones: { 1: 60, 2: 65, 3: 70, 4: 75, 5: 80 } },
      { edad: '5-6 años', puntuaciones: { 1: 65, 2: 70, 3: 75, 4: 80, 5: 85 } },
      { edad: '6-7 años', puntuaciones: { 1: 70, 2: 75, 3: 80, 4: 85, 5: 90 } }
    ]
  },
  audicionLenguaje: {
    nombre: 'Audición y Lenguaje',
    rangos: [
      { edad: '0-1 mes', puntuaciones: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 35 } },
      { edad: '1-3 meses', puntuaciones: { 1: 20, 2: 25, 3: 30, 4: 35, 5: 40 } },
      { edad: '3-6 meses', puntuaciones: { 1: 25, 2: 30, 3: 35, 4: 40, 5: 45 } },
      { edad: '6-9 meses', puntuaciones: { 1: 30, 2: 35, 3: 40, 4: 45, 5: 50 } },
      { edad: '9-12 meses', puntuaciones: { 1: 35, 2: 40, 3: 45, 4: 50, 5: 55 } },
      { edad: '1-1.5 años', puntuaciones: { 1: 40, 2: 45, 3: 50, 4: 55, 5: 60 } },
      { edad: '1.5-2 años', puntuaciones: { 1: 45, 2: 50, 3: 55, 4: 60, 5: 65 } },
      { edad: '2-3 años', puntuaciones: { 1: 50, 2: 55, 3: 60, 4: 65, 5: 70 } },
      { edad: '3-4 años', puntuaciones: { 1: 55, 2: 60, 3: 65, 4: 70, 5: 75 } },
      { edad: '4-5 años', puntuaciones: { 1: 60, 2: 65, 3: 70, 4: 75, 5: 80 } },
      { edad: '5-6 años', puntuaciones: { 1: 65, 2: 70, 3: 75, 4: 80, 5: 85 } },
      { edad: '6-7 años', puntuaciones: { 1: 70, 2: 75, 3: 80, 4: 85, 5: 90 } }
    ]
  },
  personalSocial: {
    nombre: 'Personal Social',
    rangos: [
      { edad: '0-1 mes', puntuaciones: { 1: 15, 2: 20, 3: 25, 4: 30, 5: 35 } },
      { edad: '1-3 meses', puntuaciones: { 1: 20, 2: 25, 3: 30, 4: 35, 5: 40 } },
      { edad: '3-6 meses', puntuaciones: { 1: 25, 2: 30, 3: 35, 4: 40, 5: 45 } },
      { edad: '6-9 meses', puntuaciones: { 1: 30, 2: 35, 3: 40, 4: 45, 5: 50 } },
      { edad: '9-12 meses', puntuaciones: { 1: 35, 2: 40, 3: 45, 4: 50, 5: 55 } },
      { edad: '1-1.5 años', puntuaciones: { 1: 40, 2: 45, 3: 50, 4: 55, 5: 60 } },
      { edad: '1.5-2 años', puntuaciones: { 1: 45, 2: 50, 3: 55, 4: 60, 5: 65 } },
      { edad: '2-3 años', puntuaciones: { 1: 50, 2: 55, 3: 60, 4: 65, 5: 70 } },
      { edad: '3-4 años', puntuaciones: { 1: 55, 2: 60, 3: 65, 4: 70, 5: 75 } },
      { edad: '4-5 años', puntuaciones: { 1: 60, 2: 65, 3: 70, 4: 75, 5: 80 } },
      { edad: '5-6 años', puntuaciones: { 1: 65, 2: 70, 3: 75, 4: 80, 5: 85 } },
      { edad: '6-7 años', puntuaciones: { 1: 70, 2: 75, 3: 80, 4: 85, 5: 90 } }
    ]
  }
}

// Función para determinar el rango de edad basado en la edad corregida
export const determinarRangoEdad = (edadCorregida: { años: number, meses: number, dias: number }) => {
  const totalMeses = edadCorregida.años * 12 + edadCorregida.meses + (edadCorregida.dias / 30.44)
  
  if (totalMeses <= 1) return '0-1 mes'
  if (totalMeses <= 3) return '1-3 meses'
  if (totalMeses <= 6) return '3-6 meses'
  if (totalMeses <= 9) return '6-9 meses'
  if (totalMeses <= 12) return '9-12 meses'
  if (totalMeses <= 18) return '1-1.5 años'
  if (totalMeses <= 24) return '1.5-2 años'
  if (totalMeses <= 36) return '2-3 años'
  if (totalMeses <= 48) return '3-4 años'
  if (totalMeses <= 60) return '4-5 años'
  if (totalMeses <= 72) return '5-6 años'
  return '6-7 años'
}

// Función para calcular puntuación típica
export const calcularPuntuacionTipica = (area: string, puntuacionDirecta: number, rangoEdad: string) => {
  const tabla = tablasConversion[area as keyof typeof tablasConversion]
  if (!tabla) return 0
  
  const rango = tabla.rangos.find(r => r.edad === rangoEdad)
  if (!rango) return 0
  
  return rango.puntuaciones[puntuacionDirecta as keyof typeof rango.puntuaciones] || 0
}

// Función para calcular percentil basado en puntuación típica
export const calcularPercentil = (puntuacionTipica: number) => {
  // Tabla de percentiles simplificada (deberías usar tus datos reales)
  if (puntuacionTipica >= 85) return 95
  if (puntuacionTipica >= 80) return 90
  if (puntuacionTipica >= 75) return 85
  if (puntuacionTipica >= 70) return 80
  if (puntuacionTipica >= 65) return 75
  if (puntuacionTipica >= 60) return 70
  if (puntuacionTipica >= 55) return 65
  if (puntuacionTipica >= 50) return 60
  if (puntuacionTipica >= 45) return 55
  if (puntuacionTipica >= 40) return 50
  if (puntuacionTipica >= 35) return 45
  if (puntuacionTipica >= 30) return 40
  if (puntuacionTipica >= 25) return 35
  if (puntuacionTipica >= 20) return 30
  if (puntuacionTipica >= 15) return 25
  return 20
}
