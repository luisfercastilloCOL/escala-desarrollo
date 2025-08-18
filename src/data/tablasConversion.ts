// Tablas de conversión de puntuación directa a puntuación típica
// Basadas en los archivos Excel proporcionados por el usuario

export interface TablaConversion {
  puntuacionDirecta: number
  puntuacionTipica: number
  percentil: string
}

// Nueva interfaz para tablas de conversión por rangos
export interface ConversionTable {
  puntuacionDirecta: number
  rangos: {
    [key: string]: number | null
  }
}

// Tabla de conversión para Motricidad Gruesa
// Extraída del archivo Excel: PUNTUACION TIPICA MOTRICIDAD GRUESA .xlsx
export const tablaConversionMotricidadGruesa: ConversionTable[] = [
  {
    puntuacionDirecta: 0,
    rangos: {
      'rango 1': 2,
      'rango 2': 0,
      'rango 3': 0,
      'rango 4': 0,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 1,
    rangos: {
      'rango 1': 13,
      'rango 2': 0,
      'rango 3': 0,
      'rango 4': 0,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 2,
    rangos: {
      'rango 1': 25,
      'rango 2': 11,
      'rango 3': 0,
      'rango 4': 0,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 3,
    rangos: {
      'rango 1': 36,
      'rango 2': 21,
      'rango 3': 0,
      'rango 4': 0,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 4,
    rangos: {
      'rango 1': 48,
      'rango 2': 31,
      'rango 3': 8,
      'rango 4': 0,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 5,
    rangos: {
      'rango 1': 59,
      'rango 2': 41,
      'rango 3': 16,
      'rango 4': 0,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 6,
    rangos: {
      'rango 1': 71,
      'rango 2': 51,
      'rango 3': 25,
      'rango 4': 8,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 7,
    rangos: {
      'rango 1': 82,
      'rango 2': 61,
      'rango 3': 35,
      'rango 4': 18,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 8,
    rangos: {
      'rango 1': 93,
      'rango 2': 71,
      'rango 3': 45,
      'rango 4': 28,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 9,
    rangos: {
      'rango 1': 104,
      'rango 2': 81,
      'rango 3': 55,
      'rango 4': 38,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 10,
    rangos: {
      'rango 1': 115,
      'rango 2': 91,
      'rango 3': 65,
      'rango 4': 48,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 11,
    rangos: {
      'rango 1': 126,
      'rango 2': 101,
      'rango 3': 75,
      'rango 4': 58,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 12,
    rangos: {
      'rango 1': 137,
      'rango 2': 111,
      'rango 3': 85,
      'rango 4': 68,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 13,
    rangos: {
      'rango 1': 148,
      'rango 2': 121,
      'rango 3': 95,
      'rango 4': 78,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 14,
    rangos: {
      'rango 1': 159,
      'rango 2': 131,
      'rango 3': 105,
      'rango 4': 88,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 15,
    rangos: {
      'rango 1': 170,
      'rango 2': 141,
      'rango 3': 115,
      'rango 4': 98,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 16,
    rangos: {
      'rango 1': 181,
      'rango 2': 151,
      'rango 3': 125,
      'rango 4': 108,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 17,
    rangos: {
      'rango 1': 192,
      'rango 2': 161,
      'rango 3': 135,
      'rango 4': 118,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 18,
    rangos: {
      'rango 1': 203,
      'rango 2': 171,
      'rango 3': 145,
      'rango 4': 128,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 19,
    rangos: {
      'rango 1': 214,
      'rango 2': 181,
      'rango 3': 155,
      'rango 4': 138,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 20,
    rangos: {
      'rango 1': 225,
      'rango 2': 191,
      'rango 3': 165,
      'rango 4': 148,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 21,
    rangos: {
      'rango 1': 236,
      'rango 2': 201,
      'rango 3': 175,
      'rango 4': 158,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 22,
    rangos: {
      'rango 1': 247,
      'rango 2': 211,
      'rango 3': 185,
      'rango 4': 168,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 23,
    rangos: {
      'rango 1': 258,
      'rango 2': 221,
      'rango 3': 195,
      'rango 4': 178,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 24,
    rangos: {
      'rango 1': 269,
      'rango 2': 231,
      'rango 3': 205,
      'rango 4': 188,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 25,
    rangos: {
      'rango 1': 280,
      'rango 2': 241,
      'rango 3': 215,
      'rango 4': 198,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 26,
    rangos: {
      'rango 1': 291,
      'rango 2': 251,
      'rango 3': 225,
      'rango 4': 208,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 27,
    rangos: {
      'rango 1': 302,
      'rango 2': 261,
      'rango 3': 235,
      'rango 4': 218,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 28,
    rangos: {
      'rango 1': 313,
      'rango 2': 271,
      'rango 3': 245,
      'rango 4': 228,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 29,
    rangos: {
      'rango 1': 324,
      'rango 2': 281,
      'rango 3': 255,
      'rango 4': 238,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 30,
    rangos: {
      'rango 1': 335,
      'rango 2': 291,
      'rango 3': 265,
      'rango 4': 248,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 31,
    rangos: {
      'rango 1': 346,
      'rango 2': 301,
      'rango 3': 275,
      'rango 4': 258,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 32,
    rangos: {
      'rango 1': 357,
      'rango 2': 311,
      'rango 3': 285,
      'rango 4': 268,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 33,
    rangos: {
      'rango 1': 368,
      'rango 2': 321,
      'rango 3': 295,
      'rango 4': 278,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 34,
    rangos: {
      'rango 1': 379,
      'rango 2': 331,
      'rango 3': 305,
      'rango 4': 288,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 35,
    rangos: {
      'rango 1': 390,
      'rango 2': 341,
      'rango 3': 315,
      'rango 4': 298,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 36,
    rangos: {
      'rango 1': 401,
      'rango 2': 351,
      'rango 3': 325,
      'rango 4': 308,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  }
]

// Tabla de conversión para Motricidad Fina Adaptativa
// Extraída del archivo Excel: PUNTUACION TIPICA MOTRICIDAD FINA .xlsx
export const tablaConversionMotricidadFina: ConversionTable[] = [
  {
    puntuacionDirecta: 0,
    rangos: {
      'rango 1': 0,
      'rango 2': 4,
      'rango 3': 0,
      'rango 4': 0,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 1,
    rangos: {
      'rango 1': 12,
      'rango 2': 11,
      'rango 3': 5,
      'rango 4': 0,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 2,
    rangos: {
      'rango 1': 32,
      'rango 2': 19,
      'rango 3': 11,
      'rango 4': 0,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 3,
    rangos: {
      'rango 1': 52,
      'rango 2': 26,
      'rango 3': 17,
      'rango 4': 2,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 4,
    rangos: {
      'rango 1': 72,
      'rango 2': 33,
      'rango 3': 23,
      'rango 4': 8,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 5,
    rangos: {
      'rango 1': 92,
      'rango 2': 40,
      'rango 3': 29,
      'rango 4': 15,
      'rango 5': 0,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 6,
    rangos: {
      'rango 1': 112,
      'rango 2': 47,
      'rango 3': 34,
      'rango 4': 21,
      'rango 5': 7,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 7,
    rangos: {
      'rango 1': 132,
      'rango 2': 54,
      'rango 3': 39,
      'rango 4': 26,
      'rango 5': 14,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 8,
    rangos: {
      'rango 1': 152,
      'rango 2': 61,
      'rango 3': 44,
      'rango 4': 31,
      'rango 5': 21,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 9,
    rangos: {
      'rango 1': 172,
      'rango 2': 68,
      'rango 3': 49,
      'rango 4': 36,
      'rango 5': 28,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 10,
    rangos: {
      'rango 1': 192,
      'rango 2': 75,
      'rango 3': 54,
      'rango 4': 41,
      'rango 5': 35,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 11,
    rangos: {
      'rango 1': 212,
      'rango 2': 82,
      'rango 3': 59,
      'rango 4': 46,
      'rango 5': 42,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 12,
    rangos: {
      'rango 1': 232,
      'rango 2': 89,
      'rango 3': 64,
      'rango 4': 51,
      'rango 5': 49,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 13,
    rangos: {
      'rango 1': 252,
      'rango 2': 96,
      'rango 3': 69,
      'rango 4': 56,
      'rango 5': 56,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 14,
    rangos: {
      'rango 1': 272,
      'rango 2': 103,
      'rango 3': 74,
      'rango 4': 61,
      'rango 5': 63,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 15,
    rangos: {
      'rango 1': 292,
      'rango 2': 110,
      'rango 3': 79,
      'rango 4': 66,
      'rango 5': 70,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 16,
    rangos: {
      'rango 1': 312,
      'rango 2': 117,
      'rango 3': 84,
      'rango 4': 71,
      'rango 5': 77,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 17,
    rangos: {
      'rango 1': 332,
      'rango 2': 124,
      'rango 3': 89,
      'rango 4': 76,
      'rango 5': 84,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 18,
    rangos: {
      'rango 1': 352,
      'rango 2': 131,
      'rango 3': 94,
      'rango 4': 81,
      'rango 5': 91,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 19,
    rangos: {
      'rango 1': 372,
      'rango 2': 138,
      'rango 3': 99,
      'rango 4': 86,
      'rango 5': 98,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 20,
    rangos: {
      'rango 1': 392,
      'rango 2': 145,
      'rango 3': 104,
      'rango 4': 91,
      'rango 5': 105,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 21,
    rangos: {
      'rango 1': 412,
      'rango 2': 152,
      'rango 3': 109,
      'rango 4': 96,
      'rango 5': 112,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 22,
    rangos: {
      'rango 1': 432,
      'rango 2': 159,
      'rango 3': 114,
      'rango 4': 101,
      'rango 5': 119,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 23,
    rangos: {
      'rango 1': 452,
      'rango 2': 166,
      'rango 3': 119,
      'rango 4': 106,
      'rango 5': 126,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 24,
    rangos: {
      'rango 1': 472,
      'rango 2': 173,
      'rango 3': 124,
      'rango 4': 111,
      'rango 5': 133,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 25,
    rangos: {
      'rango 1': 492,
      'rango 2': 180,
      'rango 3': 129,
      'rango 4': 116,
      'rango 5': 140,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 26,
    rangos: {
      'rango 1': 512,
      'rango 2': 187,
      'rango 3': 134,
      'rango 4': 121,
      'rango 5': 147,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 27,
    rangos: {
      'rango 1': 532,
      'rango 2': 194,
      'rango 3': 139,
      'rango 4': 126,
      'rango 5': 154,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 28,
    rangos: {
      'rango 1': 552,
      'rango 2': 201,
      'rango 3': 144,
      'rango 4': 131,
      'rango 5': 161,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 29,
    rangos: {
      'rango 1': 572,
      'rango 2': 208,
      'rango 3': 149,
      'rango 4': 136,
      'rango 5': 168,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 30,
    rangos: {
      'rango 1': 592,
      'rango 2': 215,
      'rango 3': 154,
      'rango 4': 141,
      'rango 5': 175,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 31,
    rangos: {
      'rango 1': 612,
      'rango 2': 222,
      'rango 3': 159,
      'rango 4': 146,
      'rango 5': 182,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 32,
    rangos: {
      'rango 1': 632,
      'rango 2': 229,
      'rango 3': 164,
      'rango 4': 151,
      'rango 5': 189,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 33,
    rangos: {
      'rango 1': 652,
      'rango 2': 236,
      'rango 3': 169,
      'rango 4': 156,
      'rango 5': 196,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 34,
    rangos: {
      'rango 1': 672,
      'rango 2': 243,
      'rango 3': 174,
      'rango 4': 161,
      'rango 5': 203,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 35,
    rangos: {
      'rango 1': 692,
      'rango 2': 250,
      'rango 3': 179,
      'rango 4': 166,
      'rango 5': 210,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  },
  {
    puntuacionDirecta: 36,
    rangos: {
      'rango 1': 712,
      'rango 2': 257,
      'rango 3': 184,
      'rango 4': 171,
      'rango 5': 217,
      'rango 6 ': 0,
      'rango 7': 0,
      'rango 8': 0,
      'rango 9': 0,
      'rango 10 ': 0,
      'rango 11': 0,
      'rango 12': 0,
    }
  }
]

// Tabla completa de conversión para Audición y Lenguaje
// Extraída del archivo Excel: PUNTUACION TIPICA AUDICION Y LENGUAJE.xlsx
// Considera tanto la puntuación directa como el rango de edad
export interface ConversionAudicionLenguaje {
  puntuacionDirecta: number
  rangos: {
    'Rango 1': number | null
    'Rango 2': number | null
    'Rango 3': number | null
    'Rango 4': number | null
    'Rango 5': number | null
    'Rango 6': number | null
    'Rango 7': number | null
    'Rango 8': number | null
    'Rango 9': number | null
    'Rango 10': number | null
    'Rango 11': number | null
    'Rango 12': number | null
  }
}

export const tablaConversionCompletaAudicionLenguaje: ConversionAudicionLenguaje[] = [
  {
    puntuacionDirecta: 0,
    rangos: {
      'Rango 1': null, 'Rango 2': null, 'Rango 3': null, 'Rango 4': null,
      'Rango 5': null, 'Rango 6': null, 'Rango 7': null, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 1,
    rangos: {
      'Rango 1': null, 'Rango 2': null, 'Rango 3': null, 'Rango 4': null,
      'Rango 5': null, 'Rango 6': null, 'Rango 7': null, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 2,
    rangos: {
      'Rango 1': 10, 'Rango 2': 3, 'Rango 3': null, 'Rango 4': null,
      'Rango 5': null, 'Rango 6': null, 'Rango 7': null, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 3,
    rangos: {
      'Rango 1': 20, 'Rango 2': 12, 'Rango 3': 1, 'Rango 4': null,
      'Rango 5': null, 'Rango 6': null, 'Rango 7': null, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 4,
    rangos: {
      'Rango 1': 30, 'Rango 2': 22, 'Rango 3': 9, 'Rango 4': null,
      'Rango 5': null, 'Rango 6': null, 'Rango 7': null, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 5,
    rangos: {
      'Rango 1': 40, 'Rango 2': 31, 'Rango 3': 17, 'Rango 4': 6,
      'Rango 5': null, 'Rango 6': null, 'Rango 7': null, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 6,
    rangos: {
      'Rango 1': 50, 'Rango 2': 40, 'Rango 3': 25, 'Rango 4': 13,
      'Rango 5': 4, 'Rango 6': null, 'Rango 7': null, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 7,
    rangos: {
      'Rango 1': 60, 'Rango 2': 49, 'Rango 3': 33, 'Rango 4': 20,
      'Rango 5': 11, 'Rango 6': null, 'Rango 7': null, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 8,
    rangos: {
      'Rango 1': 70, 'Rango 2': 58, 'Rango 3': 41, 'Rango 4': 27,
      'Rango 5': 17, 'Rango 6': 5, 'Rango 7': null, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 9,
    rangos: {
      'Rango 1': 80, 'Rango 2': 67, 'Rango 3': 49, 'Rango 4': 34,
      'Rango 5': 23, 'Rango 6': 11, 'Rango 7': null, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 10,
    rangos: {
      'Rango 1': 90, 'Rango 2': 77, 'Rango 3': 56, 'Rango 4': 42,
      'Rango 5': 30, 'Rango 6': 16, 'Rango 7': 3, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 11,
    rangos: {
      'Rango 1': 100, 'Rango 2': 86, 'Rango 3': 64, 'Rango 4': 49,
      'Rango 5': 36, 'Rango 6': 22, 'Rango 7': 8, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 12,
    rangos: {
      'Rango 1': 110, 'Rango 2': 95, 'Rango 3': 72, 'Rango 4': 56,
      'Rango 5': 43, 'Rango 6': 28, 'Rango 7': 13, 'Rango 8': null,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 13,
    rangos: {
      'Rango 1': 120, 'Rango 2': 104, 'Rango 3': 80, 'Rango 4': 63,
      'Rango 5': 49, 'Rango 6': 34, 'Rango 7': 18, 'Rango 8': 1,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 14,
    rangos: {
      'Rango 1': 130, 'Rango 2': 113, 'Rango 3': 88, 'Rango 4': 70,
      'Rango 5': 56, 'Rango 6': 39, 'Rango 7': 23, 'Rango 8': 5,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 15,
    rangos: {
      'Rango 1': 140, 'Rango 2': 123, 'Rango 3': 96, 'Rango 4': 77,
      'Rango 5': 62, 'Rango 6': 45, 'Rango 7': 28, 'Rango 8': 10,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 16,
    rangos: {
      'Rango 1': 150, 'Rango 2': 132, 'Rango 3': 104, 'Rango 4': 84,
      'Rango 5': 69, 'Rango 6': 51, 'Rango 7': 34, 'Rango 8': 15,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 17,
    rangos: {
      'Rango 1': 160, 'Rango 2': 141, 'Rango 3': 112, 'Rango 4': 91,
      'Rango 5': 75, 'Rango 6': 57, 'Rango 7': 39, 'Rango 8': 19,
      'Rango 9': null, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 18,
    rangos: {
      'Rango 1': 170, 'Rango 2': 150, 'Rango 3': 120, 'Rango 4': 98,
      'Rango 5': 82, 'Rango 6': 63, 'Rango 7': 44, 'Rango 8': 24,
      'Rango 9': 4, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 19,
    rangos: {
      'Rango 1': 180, 'Rango 2': 159, 'Rango 3': 128, 'Rango 4': 105,
      'Rango 5': 88, 'Rango 6': 68, 'Rango 7': 49, 'Rango 8': 29,
      'Rango 9': 8, 'Rango 10': null, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 20,
    rangos: {
      'Rango 1': 190, 'Rango 2': 168, 'Rango 3': 136, 'Rango 4': 113,
      'Rango 5': 94, 'Rango 6': 74, 'Rango 7': 54, 'Rango 8': 33,
      'Rango 9': 13, 'Rango 10': 2, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 21,
    rangos: {
      'Rango 1': 200, 'Rango 2': 178, 'Rango 3': 144, 'Rango 4': 120,
      'Rango 5': 101, 'Rango 6': 80, 'Rango 7': 59, 'Rango 8': 38,
      'Rango 9': 17, 'Rango 10': 6, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 22,
    rangos: {
      'Rango 1': 210, 'Rango 2': 187, 'Rango 3': 152, 'Rango 4': 127,
      'Rango 5': 107, 'Rango 6': 86, 'Rango 7': 65, 'Rango 8': 43,
      'Rango 9': 22, 'Rango 10': 11, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 23,
    rangos: {
      'Rango 1': 220, 'Rango 2': 196, 'Rango 3': 160, 'Rango 4': 134,
      'Rango 5': 114, 'Rango 6': 91, 'Rango 7': 70, 'Rango 8': 47,
      'Rango 9': 26, 'Rango 10': 15, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 24,
    rangos: {
      'Rango 1': 230, 'Rango 2': 205, 'Rango 3': 168, 'Rango 4': 141,
      'Rango 5': 120, 'Rango 6': 97, 'Rango 7': 75, 'Rango 8': 52,
      'Rango 9': 31, 'Rango 10': 20, 'Rango 11': null, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 25,
    rangos: {
      'Rango 1': 240, 'Rango 2': 214, 'Rango 3': 176, 'Rango 4': 148,
      'Rango 5': 127, 'Rango 6': 103, 'Rango 7': 80, 'Rango 8': 57,
      'Rango 9': 35, 'Rango 10': 25, 'Rango 11': 1, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 26,
    rangos: {
      'Rango 1': 250, 'Rango 2': 224, 'Rango 3': 184, 'Rango 4': 155,
      'Rango 5': 133, 'Rango 6': 109, 'Rango 7': 85, 'Rango 8': 61,
      'Rango 9': 40, 'Rango 10': 29, 'Rango 11': 7, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 27,
    rangos: {
      'Rango 1': 260, 'Rango 2': 233, 'Rango 3': 192, 'Rango 4': 162,
      'Rango 5': 140, 'Rango 6': 114, 'Rango 7': 90, 'Rango 8': 66,
      'Rango 9': 44, 'Rango 10': 34, 'Rango 11': 12, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 28,
    rangos: {
      'Rango 1': 270, 'Rango 2': 242, 'Rango 3': 200, 'Rango 4': 169,
      'Rango 5': 146, 'Rango 6': 120, 'Rango 7': 96, 'Rango 8': 71,
      'Rango 9': 49, 'Rango 10': 38, 'Rango 11': 18, 'Rango 12': null
    }
  },
  {
    puntuacionDirecta: 29,
    rangos: {
      'Rango 1': 280, 'Rango 2': 251, 'Rango 3': 208, 'Rango 4': 176,
      'Rango 5': 153, 'Rango 6': 126, 'Rango 7': 101, 'Rango 8': 75,
      'Rango 9': 53, 'Rango 10': 43, 'Rango 11': 24, 'Rango 12': 6
    }
  },
  {
    puntuacionDirecta: 30,
    rangos: {
      'Rango 1': 290, 'Rango 2': 260, 'Rango 3': 216, 'Rango 4': 184,
      'Rango 5': 159, 'Rango 6': 132, 'Rango 7': 106, 'Rango 8': 80,
      'Rango 9': 58, 'Rango 10': 48, 'Rango 11': 29, 'Rango 12': 14
    }
  },
  {
    puntuacionDirecta: 31,
    rangos: {
      'Rango 1': 300, 'Rango 2': 270, 'Rango 3': 224, 'Rango 4': 191,
      'Rango 5': 166, 'Rango 6': 137, 'Rango 7': 111, 'Rango 8': 85,
      'Rango 9': 62, 'Rango 10': 52, 'Rango 11': 35, 'Rango 12': 22
    }
  },
  {
    puntuacionDirecta: 32,
    rangos: {
      'Rango 1': 310, 'Rango 2': 279, 'Rango 3': 232, 'Rango 4': 198,
      'Rango 5': 172, 'Rango 6': 143, 'Rango 7': 116, 'Rango 8': 89,
      'Rango 9': 67, 'Rango 10': 57, 'Rango 11': 41, 'Rango 12': 31
    }
  },
  {
    puntuacionDirecta: 33,
    rangos: {
      'Rango 1': 320, 'Rango 2': 288, 'Rango 3': 240, 'Rango 4': 205,
      'Rango 5': 178, 'Rango 6': 149, 'Rango 7': 121, 'Rango 8': 94,
      'Rango 9': 71, 'Rango 10': 62, 'Rango 11': 46, 'Rango 12': 39
    }
  },
  {
    puntuacionDirecta: 34,
    rangos: {
      'Rango 1': 330, 'Rango 2': 297, 'Rango 3': 248, 'Rango 4': 212,
      'Rango 5': 185, 'Rango 6': 155, 'Rango 7': 127, 'Rango 8': 99,
      'Rango 9': 76, 'Rango 10': 66, 'Rango 11': 52, 'Rango 12': 47
    }
  },
  {
    puntuacionDirecta: 35,
    rangos: {
      'Rango 1': 340, 'Rango 2': 306, 'Rango 3': 256, 'Rango 4': 219,
      'Rango 5': 191, 'Rango 6': 161, 'Rango 7': 132, 'Rango 8': 104,
      'Rango 9': 80, 'Rango 10': 71, 'Rango 11': 58, 'Rango 12': 55
    }
  },
  {
    puntuacionDirecta: 36,
    rangos: {
      'Rango 1': 350, 'Rango 2': 315, 'Rango 3': 264, 'Rango 4': 226,
      'Rango 5': 198, 'Rango 6': 166, 'Rango 7': 137, 'Rango 8': 108,
      'Rango 9': 85, 'Rango 10': 75, 'Rango 11': 63, 'Rango 12': 64
    }
  }
]

// Tabla de conversión para Personal Social
// Extraída del archivo Excel: PUNTUACION TIPICA PERSONAL SOCIAL.xlsx
export const tablaConversionPersonalSocial: ConversionTable[] = [
  {
    puntuacionDirecta: 0,
    rangos: {
      'Rango 1': 0,
      'Rango 2': null,
      'Rango 3': null,
      'Rango 4 ': null,
      'rango 5': null,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 1,
    rangos: {
      'Rango 1': 8,
      'Rango 2': 3,
      'Rango 3': null,
      'Rango 4 ': null,
      'rango 5': null,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 2,
    rangos: {
      'Rango 1': 17,
      'Rango 2': 11,
      'Rango 3': 1,
      'Rango 4 ': null,
      'rango 5': null,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 3,
    rangos: {
      'Rango 1': 25,
      'Rango 2': 18,
      'Rango 3': 8,
      'Rango 4 ': null,
      'rango 5': null,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 4,
    rangos: {
      'Rango 1': 32,
      'Rango 2': 26,
      'Rango 3': 14,
      'Rango 4 ': 6,
      'rango 5': null,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 5,
    rangos: {
      'Rango 1': 42,
      'Rango 2': 34,
      'Rango 3': 21,
      'Rango 4 ': 11,
      'rango 5': 4,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 6,
    rangos: {
      'Rango 1': 52,
      'Rango 2': 42,
      'Rango 3': 28,
      'Rango 4 ': 18,
      'rango 5': 11,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 7,
    rangos: {
      'Rango 1': 62,
      'Rango 2': 50,
      'Rango 3': 35,
      'Rango 4 ': 25,
      'rango 5': 18,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 8,
    rangos: {
      'Rango 1': 72,
      'Rango 2': 58,
      'Rango 3': 42,
      'Rango 4 ': 32,
      'rango 5': 25,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 9,
    rangos: {
      'Rango 1': 82,
      'Rango 2': 66,
      'Rango 3': 49,
      'Rango 4 ': 39,
      'rango 5': 32,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 10,
    rangos: {
      'Rango 1': 92,
      'Rango 2': 74,
      'Rango 3': 56,
      'Rango 4 ': 46,
      'rango 5': 39,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 11,
    rangos: {
      'Rango 1': 102,
      'Rango 2': 82,
      'Rango 3': 63,
      'Rango 4 ': 53,
      'rango 5': 46,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 12,
    rangos: {
      'Rango 1': 112,
      'Rango 2': 90,
      'Rango 3': 70,
      'Rango 4 ': 60,
      'rango 5': 53,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 13,
    rangos: {
      'Rango 1': 122,
      'Rango 2': 98,
      'Rango 3': 77,
      'Rango 4 ': 67,
      'rango 5': 60,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 14,
    rangos: {
      'Rango 1': 132,
      'Rango 2': 106,
      'Rango 3': 84,
      'Rango 4 ': 74,
      'rango 5': 67,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 15,
    rangos: {
      'Rango 1': 142,
      'Rango 2': 114,
      'Rango 3': 91,
      'Rango 4 ': 81,
      'rango 5': 74,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 16,
    rangos: {
      'Rango 1': 152,
      'Rango 2': 122,
      'Rango 3': 98,
      'Rango 4 ': 88,
      'rango 5': 81,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 17,
    rangos: {
      'Rango 1': 162,
      'Rango 2': 130,
      'Rango 3': 105,
      'Rango 4 ': 95,
      'rango 5': 88,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 18,
    rangos: {
      'Rango 1': 172,
      'Rango 2': 138,
      'Rango 3': 112,
      'Rango 4 ': 102,
      'rango 5': 95,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 19,
    rangos: {
      'Rango 1': 182,
      'Rango 2': 146,
      'Rango 3': 119,
      'Rango 4 ': 109,
      'rango 5': 102,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 20,
    rangos: {
      'Rango 1': 192,
      'Rango 2': 154,
      'Rango 3': 126,
      'Rango 4 ': 116,
      'rango 5': 109,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 21,
    rangos: {
      'Rango 1': 202,
      'Rango 2': 162,
      'Rango 3': 133,
      'Rango 4 ': 123,
      'rango 5': 116,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 22,
    rangos: {
      'Rango 1': 212,
      'Rango 2': 170,
      'Rango 3': 140,
      'Rango 4 ': 130,
      'rango 5': 123,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 23,
    rangos: {
      'Rango 1': 222,
      'Rango 2': 178,
      'Rango 3': 147,
      'Rango 4 ': 137,
      'rango 5': 130,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 24,
    rangos: {
      'Rango 1': 232,
      'Rango 2': 186,
      'Rango 3': 154,
      'Rango 4 ': 144,
      'rango 5': 137,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 25,
    rangos: {
      'Rango 1': 242,
      'Rango 2': 194,
      'Rango 3': 161,
      'Rango 4 ': 151,
      'rango 5': 144,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 26,
    rangos: {
      'Rango 1': 252,
      'Rango 2': 202,
      'Rango 3': 168,
      'Rango 4 ': 158,
      'rango 5': 151,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 27,
    rangos: {
      'Rango 1': 262,
      'Rango 2': 210,
      'Rango 3': 175,
      'Rango 4 ': 165,
      'rango 5': 158,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 28,
    rangos: {
      'Rango 1': 272,
      'Rango 2': 218,
      'Rango 3': 182,
      'Rango 4 ': 172,
      'rango 5': 165,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 29,
    rangos: {
      'Rango 1': 282,
      'Rango 2': 226,
      'Rango 3': 189,
      'Rango 4 ': 179,
      'rango 5': 172,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 30,
    rangos: {
      'Rango 1': 292,
      'Rango 2': 234,
      'Rango 3': 196,
      'Rango 4 ': 186,
      'rango 5': 179,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 31,
    rangos: {
      'Rango 1': 302,
      'Rango 2': 242,
      'Rango 3': 203,
      'Rango 4 ': 193,
      'rango 5': 186,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 32,
    rangos: {
      'Rango 1': 312,
      'Rango 2': 250,
      'Rango 3': 210,
      'Rango 4 ': 200,
      'rango 5': 193,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 33,
    rangos: {
      'Rango 1': 322,
      'Rango 2': 258,
      'Rango 3': 217,
      'Rango 4 ': 207,
      'rango 5': 200,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 34,
    rangos: {
      'Rango 1': 332,
      'Rango 2': 266,
      'Rango 3': 224,
      'Rango 4 ': 214,
      'rango 5': 207,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 35,
    rangos: {
      'Rango 1': 342,
      'Rango 2': 274,
      'Rango 3': 231,
      'Rango 4 ': 221,
      'rango 5': 214,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  },
  {
    puntuacionDirecta: 36,
    rangos: {
      'Rango 1': 352,
      'Rango 2': 282,
      'Rango 3': 238,
      'Rango 4 ': 228,
      'rango 5': 221,
      'rango 6': null,
      'rango 7': null,
      'rango 8': null,
      'rango 9': null,
      'rango 10': null,
      'rango 11': null,
      'rango 12': null,
    }
  }
]

// Función para obtener puntuación típica específica por rango de edad para Audición y Lenguaje
export const obtenerPuntuacionTipicaPorRangoAudicionLenguaje = (puntuacionDirecta: number, rangoEdad: string): number => {
  const conversion = tablaConversionCompletaAudicionLenguaje.find(
    item => item.puntuacionDirecta === puntuacionDirecta
  )
  
  if (!conversion) return 0
  
  const puntuacionTipica = conversion.rangos[rangoEdad as keyof typeof conversion.rangos]
  return puntuacionTipica !== null ? puntuacionTipica : 0
}

// Función para obtener puntuación típica basada en puntuación directa
export const obtenerPuntuacionTipica = (areaKey: string, puntuacionDirecta: number, rangoEdad?: string): TablaConversion | null => {
  // Si no tenemos rango de edad, no podemos usar las nuevas tablas
  if (!rangoEdad) {
    return null
  }

  // Normalizar el nombre del rango para que coincida con las tablas
  let rangoNormalizado = rangoEdad
  if (rangoEdad.startsWith('Rango ')) {
    // Para personal social, mantener el formato "Rango X"
    if (areaKey === 'personalSocial') {
      rangoNormalizado = rangoEdad
    } else {
      // Para motricidad gruesa y fina, convertir a "rango X"
      rangoNormalizado = rangoEdad.toLowerCase()
    }
  }

  switch (areaKey) {
    case 'motricidadGruesa':
      const conversionMG = tablaConversionMotricidadGruesa.find(item => item.puntuacionDirecta === puntuacionDirecta)
      if (conversionMG && conversionMG.rangos[rangoNormalizado] !== null) {
        const puntuacionTipica = conversionMG.rangos[rangoNormalizado]
        return {
          puntuacionDirecta: puntuacionDirecta,
          puntuacionTipica: puntuacionTipica as number,
          percentil: obtenerPercentil(puntuacionTipica as number)
        }
      }
      return null

    case 'motricidadFinaAdaptativa':
      const conversionMF = tablaConversionMotricidadFina.find(item => item.puntuacionDirecta === puntuacionDirecta)
      if (conversionMF && conversionMF.rangos[rangoNormalizado] !== null) {
        const puntuacionTipica = conversionMF.rangos[rangoNormalizado]
        return {
          puntuacionDirecta: puntuacionDirecta,
          puntuacionTipica: puntuacionTipica as number,
          percentil: obtenerPercentil(puntuacionTipica as number)
        }
      }
      return null

    case 'audicionLenguaje':
      // Para audición y lenguaje, usar la tabla completa
      const conversionAL = tablaConversionCompletaAudicionLenguaje.find(
        item => item.puntuacionDirecta === puntuacionDirecta
      )
      if (conversionAL) {
        const puntuacionTipica = conversionAL.rangos[rangoEdad as keyof typeof conversionAL.rangos]
        if (puntuacionTipica !== null) {
          return {
            puntuacionDirecta: puntuacionDirecta,
            puntuacionTipica: puntuacionTipica,
            percentil: obtenerPercentil(puntuacionTipica)
          }
        }
      }
      return null

    case 'personalSocial':
      const conversionPS = tablaConversionPersonalSocial.find(item => item.puntuacionDirecta === puntuacionDirecta)
      if (conversionPS && conversionPS.rangos[rangoNormalizado] !== null) {
        const puntuacionTipica = conversionPS.rangos[rangoNormalizado]
        return {
          puntuacionDirecta: puntuacionDirecta,
          puntuacionTipica: puntuacionTipica as number,
          percentil: obtenerPercentil(puntuacionTipica as number)
        }
      }
      return null

    default:
      return null
  }
}

// Función para obtener percentil basado en puntuación típica
export const obtenerPercentil = (puntuacionTipica: number): string => {
  if (puntuacionTipica < 70) return 'Muy Bajo'
  if (puntuacionTipica < 85) return 'Bajo'
  if (puntuacionTipica < 115) return 'Promedio'
  if (puntuacionTipica < 130) return 'Alto'
  return 'Muy Alto'
}
