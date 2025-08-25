export interface AreaEvaluacion {
  nombre: string
  codigo: string
  items: ItemEvaluacion[]
  puntuacionDirecta: number
  puntuacionTipica: number
  percentil: number
}

export interface ItemEvaluacion {
  id: string
  descripcion: string
  completado: boolean | null
  edadAparicion: string
  observaciones: string
}

export interface EvaluacionDesarrollo {
  id: string
  fecha: string
  paciente: {
    nombre: string
    apellidos: string
    fechaNacimiento: string
    semanasGestacion: string
    genero: string
  }
  areas: {
    motricidadGruesa: AreaEvaluacion
    motricidadFinaAdaptativa: AreaEvaluacion
    audicionLenguaje: AreaEvaluacion
    personalSocial: AreaEvaluacion
  }
  puntuacionTotal: number
  nivelDesarrollo: string
}

export interface RangoEdad {
  id: string
  nombre: string
  edadMinima: number
  edadMaxima: number
  descripcion: string
}

export interface GrupoEtario {
  id: string
  nombre: string
  rangos: RangoEdad[]
}

export interface TablaConversion {
  edad: string
  puntuaciones: {
    directa: number
    tipica: number
    percentil: number
  }[]
}
