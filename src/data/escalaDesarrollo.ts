import { GrupoEtario, RangoEdad, TablaConversion } from '../types/evaluacion'

// Grupos etarios según la página 13 del PDF con rangos exactos
export const gruposEtarios: GrupoEtario[] = [
  {
    id: 'desarrollo',
    nombre: 'Desarrollo Infantil',
    rangos: [
      { 
        id: 'rango-1', 
        nombre: 'Rango 1: 0 días a 1 mes 0 días', 
        edadMinima: 0, 
        edadMaxima: 1, 
        descripcion: 'De 0 días a 1 mes y 0 días' 
      },
      { 
        id: 'rango-2', 
        nombre: 'Rango 2: 1 mes 1 día a 3 meses 0 días', 
        edadMinima: 1, 
        edadMaxima: 3, 
        descripcion: 'De 1 mes y 1 día a 3 meses y 0 días' 
      },
      { 
        id: 'rango-3', 
        nombre: 'Rango 3: 3 meses 1 día a 6 meses 0 días', 
        edadMinima: 3, 
        edadMaxima: 6, 
        descripcion: 'De 3 meses y 1 día a 6 meses y 0 días' 
      },
      { 
        id: 'rango-4', 
        nombre: 'Rango 4: 6 meses 1 día a 9 meses 0 días', 
        edadMinima: 6, 
        edadMaxima: 9, 
        descripcion: 'De 6 meses y 1 día a 9 meses y 0 días' 
      },
      { 
        id: 'rango-5', 
        nombre: 'Rango 5: 9 meses 1 día a 12 meses 0 días', 
        edadMinima: 9, 
        edadMaxima: 12, 
        descripcion: 'De 9 meses y 1 día a 12 meses y 0 días' 
      },
      { 
        id: 'rango-6', 
        nombre: 'Rango 6: 1 año 0 meses 1 día a 1 año 6 meses 0 días', 
        edadMinima: 12, 
        edadMaxima: 18, 
        descripcion: 'De 1 año 0 meses y 1 día a 1 año 6 meses y 0 días' 
      },
      { 
        id: 'rango-7', 
        nombre: 'Rango 7: 1 año 6 meses 1 día a 2 años 0 meses 0 días', 
        edadMinima: 18, 
        edadMaxima: 24, 
        descripcion: 'De 1 año 6 meses y 1 día a 2 años, 0 meses y 0 días' 
      },
      { 
        id: 'rango-8', 
        nombre: 'Rango 8: 2 años 0 meses 1 día a 3 años 0 meses 0 días', 
        edadMinima: 24, 
        edadMaxima: 36, 
        descripcion: 'De 2 años, 0 meses, 1 día a 3 años 0 meses 0 días' 
      },
      { 
        id: 'rango-9', 
        nombre: 'Rango 9: 3 años 0 meses 1 día a 4 años 0 meses 0 días', 
        edadMinima: 36, 
        edadMaxima: 48, 
        descripcion: '3 años 0 meses 1 día a 4 años 0 meses 0 días' 
      },
      { 
        id: 'rango-10', 
        nombre: 'Rango 10: 4 años 0 meses 1 día a 5 años 0 meses 0 días', 
        edadMinima: 48, 
        edadMaxima: 60, 
        descripcion: '4 años 0 meses 1 día a 5 años 0 meses 0 días' 
      },
      { 
        id: 'rango-11', 
        nombre: 'Rango 11: 5 años 0 meses 1 día a 6 años 0 meses 0 días', 
        edadMinima: 60, 
        edadMaxima: 72, 
        descripcion: '5 años 0 meses 1 día a 6 años 0 meses 0 días' 
      },
      { 
        id: 'rango-12', 
        nombre: 'Rango 12: 6 años 0 meses 1 día a 7 años 0 meses 0 días', 
        edadMinima: 72, 
        edadMaxima: 84, 
        descripcion: '6 años 0 meses 1 día a 7 años 0 meses 0 días' 
      }
    ]
  }
]

// Items de evaluación extraídos de los archivos Excel (páginas 143-150)
// Motricidad Gruesa, Motricidad Fina Adaptativa, Audición y Lenguaje, Personal Social
// Cada rango tiene exactamente 3 items por área según la tabla especificada
export const itemsEvaluacion = {
  'rango-1': { // Items 1-3
    motricidadGruesa: [
      { id: '1', descripcion: 'Realiza reflejo de búsqueda y reflejo de succión.', completado: false, edadAparicion: '0-1 mes', observaciones: '' },
      { id: '2', descripcion: 'El reflejo de moro está presente y es simétrico.', completado: false, edadAparicion: '0-1 mes', observaciones: '' },
      { id: '3', descripcion: 'Mueve sus extremidades.', completado: false, edadAparicion: '0-1 mes', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '1', descripcion: 'Reflejo de prensión palmar.', completado: false, edadAparicion: '0-1 mes', observaciones: '' },
      { id: '2', descripcion: 'Reacciona ante luz y sonidos.', completado: false, edadAparicion: '0-1 mes', observaciones: '' },
      { id: '3', descripcion: 'Sigue movimiento horizontal.', completado: false, edadAparicion: '0-1 mes', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '1', descripcion: 'Se sobresalta con un ruido', completado: false, edadAparicion: '0-1 mes', observaciones: '' },
      { id: '2', descripcion: 'Contempla momentaneamente a una persona', completado: false, edadAparicion: '0-1 mes', observaciones: '' },
      { id: '3', descripcion: 'Llora para expresar necesidades', completado: false, edadAparicion: '0-1 mes', observaciones: '' }
    ],
    personalSocial: [
      { id: '1', descripcion: 'Se tranquiliza cuando se toma entre los brazos', completado: false, edadAparicion: '0-1 mes', observaciones: '' },
      { id: '2', descripcion: 'Responde a las caricias', completado: false, edadAparicion: '0-1 mes', observaciones: '' },
      { id: '3', descripcion: 'El bebe ya esta registrado', completado: false, edadAparicion: '0-1 mes', observaciones: '' }
    ]
  },
  'rango-2': { // Items 4-6
    motricidadGruesa: [
      { id: '4', descripcion: 'Sostiene la cabeza al levantarlo de los brazos.', completado: false, edadAparicion: '1-3 meses', observaciones: '' },
      { id: '5', descripcion: 'Levanta la cabeza y pecho en prono.', completado: false, edadAparicion: '1-3 meses', observaciones: '' },
      { id: '6', descripcion: 'Gira la cabeza desde la línea media.', completado: false, edadAparicion: '1-3 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '4', descripcion: 'Abre y mira sus manos.', completado: false, edadAparicion: '1-3 meses', observaciones: '' },
      { id: '5', descripcion: 'Sostiene objeto en la mano.', completado: false, edadAparicion: '1-3 meses', observaciones: '' },
      { id: '6', descripcion: 'Se lleva un objeto a la boca.', completado: false, edadAparicion: '1-3 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '4', descripcion: 'Se tranquiliza con las voz humana', completado: false, edadAparicion: '1-3 meses', observaciones: '' },
      { id: '5', descripcion: 'Produce sonidos guturales indiferenciados', completado: false, edadAparicion: '1-3 meses', observaciones: '' },
      { id: '6', descripcion: 'Busca el sonido con la mirada', completado: false, edadAparicion: '1-3 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '4', descripcion: 'Reconoce la voz del cuidador principal', completado: false, edadAparicion: '1-3 meses', observaciones: '' },
      { id: '5', descripcion: 'Sonrisa social', completado: false, edadAparicion: '1-3 meses', observaciones: '' },
      { id: '6', descripcion: 'Responde a una conversacion', completado: false, edadAparicion: '1-3 meses', observaciones: '' }
    ]
  },
  'rango-3': { // Items 7-9
    motricidadGruesa: [
      { id: '7', descripcion: 'Control de cabeza sentado con apoyo.', completado: false, edadAparicion: '3-6 meses', observaciones: '' },
      { id: '8', descripcion: 'Se voltea.', completado: false, edadAparicion: '3-6 meses', observaciones: '' },
      { id: '9', descripcion: 'Se mantiene sentado momentáneamente.', completado: false, edadAparicion: '3-6 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '7', descripcion: 'Agarra objetos voluntariamente.', completado: false, edadAparicion: '3-6 meses', observaciones: '' },
      { id: '8', descripcion: 'Retiene un objeto cuando se lo intentan quitar.', completado: false, edadAparicion: '3-6 meses', observaciones: '' },
      { id: '9', descripcion: 'Pasa objeto de una mano a otra.', completado: false, edadAparicion: '3-6 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '7', descripcion: 'Busca diferentes sonidos con la mirada', completado: false, edadAparicion: '3-6 meses', observaciones: '' },
      { id: '8', descripcion: 'Pone atencion a la conversacion', completado: false, edadAparicion: '3-6 meses', observaciones: '' },
      { id: '9', descripcion: 'Produce cuatro o mas sonidos diferentes', completado: false, edadAparicion: '3-6 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '7', descripcion: 'Coge las manos del examinador', completado: false, edadAparicion: '3-6 meses', observaciones: '' },
      { id: '8', descripcion: 'Rie a carcajadas', completado: false, edadAparicion: '3-6 meses', observaciones: '' },
      { id: '9', descripcion: 'Busca la continuacion del juego', completado: false, edadAparicion: '3-6 meses', observaciones: '' }
    ]
  },
  'rango-4': { // Items 10-12
    motricidadGruesa: [
      { id: '10', descripcion: 'Se mantiene sentado sin apoyo.', completado: false, edadAparicion: '6-9 meses', observaciones: '' },
      { id: '11', descripcion: 'Adopta la posición de sentado.', completado: false, edadAparicion: '6-9 meses', observaciones: '' },
      { id: '12', descripcion: 'Se arrastra en posición prono.', completado: false, edadAparicion: '6-9 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '10', descripcion: 'Agarra objetos con ambas manos.', completado: false, edadAparicion: '6-9 meses', observaciones: '' },
      { id: '11', descripcion: 'Deja caer los objetos intencionalmente.', completado: false, edadAparicion: '6-9 meses', observaciones: '' },
      { id: '12', descripcion: 'Agarra con pulgar e índice (pinza).', completado: false, edadAparicion: '6-9 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '10', descripcion: 'Responde a su nombre cuando se le llama', completado: false, edadAparicion: '6-9 meses', observaciones: '' },
      { id: '11', descripcion: 'Reacciona cuando se le llama por su nombre', completado: false, edadAparicion: '6-9 meses', observaciones: '' },
      { id: '12', descripcion: 'Reacciona a tres palabras familiares', completado: false, edadAparicion: '6-9 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '10', descripcion: 'Busca objetos escondidos.', completado: false, edadAparicion: '6-9 meses', observaciones: '' },
      { id: '11', descripcion: 'Busca apoyo del cuidador', completado: false, edadAparicion: '6-9 meses', observaciones: '' },
      { id: '12', descripcion: 'Reacciona a su imagen en el espejo', completado: false, edadAparicion: '6-9 meses', observaciones: '' }
    ]
  },
  'rango-5': { // Items 13-15
    motricidadGruesa: [
      { id: '13', descripcion: 'Se mantiene de pie con apoyo.', completado: false, edadAparicion: '9-12 meses', observaciones: '' },
      { id: '14', descripcion: 'Adopta posición bípeda y se sostiene de pie con apoyo.', completado: false, edadAparicion: '9-12 meses', observaciones: '' },
      { id: '15', descripcion: 'Se sostiene de pie sin apoyo.', completado: false, edadAparicion: '9-12 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '13', descripcion: 'Construye torre de dos cubos.', completado: false, edadAparicion: '9-12 meses', observaciones: '' },
      { id: '14', descripcion: 'Saca objetos del contenedor.', completado: false, edadAparicion: '9-12 meses', observaciones: '' },
      { id: '15', descripcion: 'Busca objetos escondidos.', completado: false, edadAparicion: '9-12 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '13', descripcion: 'Dice dos o tres palabras con significado.', completado: false, edadAparicion: '9-12 meses', observaciones: '' },
      { id: '14', descripcion: 'Llama al cuidador', completado: false, edadAparicion: '9-12 meses', observaciones: '' },
      { id: '15', descripcion: 'Responde a una instrucción sencilla', completado: false, edadAparicion: '9-12 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '13', descripcion: 'Juega al escondite.', completado: false, edadAparicion: '9-12 meses', observaciones: '' },
      { id: '14', descripcion: 'Muestra interes o intencion en alimentarse solo', completado: false, edadAparicion: '9-12 meses', observaciones: '' },
      { id: '15', descripcion: 'Explora el entorno', completado: false, edadAparicion: '9-12 meses', observaciones: '' }
    ]
  },
  'rango-6': { // Items 16-18
    motricidadGruesa: [
      { id: '16', descripcion: 'Se mantiene de pie sin apoyo.', completado: false, edadAparicion: '12-18 meses', observaciones: '' },
      { id: '17', descripcion: 'Da pasos solo(a).', completado: false, edadAparicion: '12-18 meses', observaciones: '' },
      { id: '18', descripcion: 'Camina con desplazamiento cruzado sin ayuda (alternando manos y pies).', completado: false, edadAparicion: '12-18 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '16', descripcion: 'Construye torre de tres cubos.', completado: false, edadAparicion: '12-18 meses', observaciones: '' },
      { id: '17', descripcion: 'Pasa hojas de un libro.', completado: false, edadAparicion: '12-18 meses', observaciones: '' },
      { id: '18', descripcion: 'Agarra una cuchara y se la lleva a la boca.', completado: false, edadAparicion: '12-18 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '16', descripcion: 'Dice cinco o más palabras con significado.', completado: false, edadAparicion: '12-18 meses', observaciones: '' },
      { id: '17', descripcion: 'Reconoce al menos 6 objetos o imágenes', completado: false, edadAparicion: '12-18 meses', observaciones: '' },
      { id: '18', descripcion: 'Sigue instrucciones de dos pasos', completado: false, edadAparicion: '12-18 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '16', descripcion: 'Juega solo.', completado: false, edadAparicion: '12-18 meses', observaciones: '' },
      { id: '17', descripcion: 'Ayuda a desvestirse', completado: false, edadAparicion: '12-18 meses', observaciones: '' },
      { id: '18', descripcion: 'Señala 5 partes de su cuerpo', completado: false, edadAparicion: '12-18 meses', observaciones: '' }
    ]
  },
  'rango-7': { // Items 19-21
    motricidadGruesa: [
      { id: '19', descripcion: 'Camina hacia atrás.', completado: false, edadAparicion: '18-24 meses', observaciones: '' },
      { id: '20', descripcion: 'Lanza la pelota.', completado: false, edadAparicion: '18-24 meses', observaciones: '' },
      { id: '21', descripcion: 'Patea la pelota.', completado: false, edadAparicion: '18-24 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '19', descripcion: 'Construye torre de cuatro cubos.', completado: false, edadAparicion: '18-24 meses', observaciones: '' },
      { id: '20', descripcion: 'Quita la tapa del contenedor o frasco de muestra de orina.', completado: false, edadAparicion: '18-24 meses', observaciones: '' },
      { id: '21', descripcion: 'Hace torre de cinco cubos.', completado: false, edadAparicion: '18-24 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '19', descripcion: 'Dice diez o más palabras con significado.', completado: false, edadAparicion: '18-24 meses', observaciones: '' },
      { id: '20', descripcion: 'Utiliza mas de 20 palabras', completado: false, edadAparicion: '18-24 meses', observaciones: '' },
      { id: '21', descripcion: 'Usa frase de dos palabras', completado: false, edadAparicion: '18-24 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '19', descripcion: 'Juega con otros niños.', completado: false, edadAparicion: '18-24 meses', observaciones: '' },
      { id: '20', descripcion: 'Expresa su satisfaccion cuando logra o consigue algo', completado: false, edadAparicion: '18-24 meses', observaciones: '' },
      { id: '21', descripcion: 'Identifica emociones basicas en una imagen', completado: false, edadAparicion: '18-24 meses', observaciones: '' }
    ]
  },
  'rango-8': { // Items 22-24
    motricidadGruesa: [
      { id: '22', descripcion: 'Corre sin caerse.', completado: false, edadAparicion: '24-36 meses', observaciones: '' },
      { id: '23', descripcion: 'Se empina en ambos pies.', completado: false, edadAparicion: '24-36 meses', observaciones: '' },
      { id: '24', descripcion: 'Sube dos escalones sin apoyo.', completado: false, edadAparicion: '24-36 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '22', descripcion: 'Construye torre de seis cubos.', completado: false, edadAparicion: '24-36 meses', observaciones: '' },
      { id: '23', descripcion: 'Rasga papel con pinza de ambas manos.', completado: false, edadAparicion: '24-36 meses', observaciones: '' },
      { id: '24', descripcion: 'Copia línea horizontal y vertical.', completado: false, edadAparicion: '24-36 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '22', descripcion: 'Dice frases de dos palabras.', completado: false, edadAparicion: '24-36 meses', observaciones: '' },
      { id: '23', descripcion: 'Dice frases de 3 palabras', completado: false, edadAparicion: '24-36 meses', observaciones: '' },
      { id: '24', descripcion: 'Reconoce cualidades de los objetos', completado: false, edadAparicion: '24-36 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '22', descripcion: 'Se viste solo.', completado: false, edadAparicion: '24-36 meses', observaciones: '' },
      { id: '23', descripcion: 'Dice nombres de las personas con quien vive o comparte', completado: false, edadAparicion: '24-36 meses', observaciones: '' },
      { id: '24', descripcion: 'Expresa verbalmente emociones basicas ( tristeza, alegria, miedo, rabia)', completado: false, edadAparicion: '24-36 meses', observaciones: '' }
    ]
  },
  'rango-9': { // Items 25-27
    motricidadGruesa: [
      { id: '25', descripcion: 'Salta en el lugar.', completado: false, edadAparicion: '36-48 meses', observaciones: '' },
      { id: '26', descripcion: 'Se para en un solo pie.', completado: false, edadAparicion: '36-48 meses', observaciones: '' },
      { id: '27', descripcion: 'Baja dos escalones con apoyo mínimo, alternando los pies.', completado: false, edadAparicion: '36-48 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '25', descripcion: 'Construye torre de ocho cubos.', completado: false, edadAparicion: '36-48 meses', observaciones: '' },
      { id: '26', descripcion: 'Copia círculo.', completado: false, edadAparicion: '36-48 meses', observaciones: '' },
      { id: '27', descripcion: 'Figura humana rudimentaria.', completado: false, edadAparicion: '36-48 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '25', descripcion: 'Dice frases de tres palabras.', completado: false, edadAparicion: '36-48 meses', observaciones: '' },
      { id: '26', descripcion: 'Hace comparativos', completado: false, edadAparicion: '36-48 meses', observaciones: '' },
      { id: '27', descripcion: 'Describle el dibujo', completado: false, edadAparicion: '36-48 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '25', descripcion: 'Juega con otros niños.', completado: false, edadAparicion: '36-48 meses', observaciones: '' },
      { id: '26', descripcion: 'Comparte juego con otros(as) niños(as)', completado: false, edadAparicion: '36-48 meses', observaciones: '' },
      { id: '27', descripcion: 'Reconoce las emociones baiscas de los otros(as)', completado: false, edadAparicion: '36-48 meses', observaciones: '' }
    ]
  },
  'rango-10': { // Items 28-30
    motricidadGruesa: [
      { id: '28', descripcion: 'Salta hacia adelante.', completado: false, edadAparicion: '48-60 meses', observaciones: '' },
      { id: '29', descripcion: 'Salta en tres o más ocasiones en un pie.', completado: false, edadAparicion: '48-60 meses', observaciones: '' },
      { id: '30', descripcion: 'Hace rebotar y agarra la pelota.', completado: false, edadAparicion: '48-60 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '28', descripcion: 'Construye torre de diez cubos.', completado: false, edadAparicion: '48-60 meses', observaciones: '' },
      { id: '29', descripcion: 'Corta papel con las tijeras.', completado: false, edadAparicion: '48-60 meses', observaciones: '' },
      { id: '30', descripcion: 'Figura humana 2.', completado: false, edadAparicion: '48-60 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '28', descripcion: 'Dice frases de cuatro palabras.', completado: false, edadAparicion: '48-60 meses', observaciones: '' },
      { id: '29', descripcion: 'Responde a tres preguntas sobre un relato', completado: false, edadAparicion: '48-60 meses', observaciones: '' },
      { id: '30', descripcion: 'Elabora un relato a partir de una imagen', completado: false, edadAparicion: '48-60 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '28', descripcion: 'Se lava las manos.', completado: false, edadAparicion: '48-60 meses', observaciones: '' },
      { id: '29', descripcion: 'Propone juegos.', completado: false, edadAparicion: '48-60 meses', observaciones: '' },
      { id: '30', descripcion: 'Sabe cuantos años tiene', completado: false, edadAparicion: '48-60 meses', observaciones: '' }
    ]
  },
  'rango-11': { // Items 31-33
    motricidadGruesa: [
      { id: '31', descripcion: 'Salta hacia atrás.', completado: false, edadAparicion: '60-72 meses', observaciones: '' },
      { id: '32', descripcion: 'Salta de lado a lado de una línea con los pies juntos.', completado: false, edadAparicion: '60-72 meses', observaciones: '' },
      { id: '33', descripcion: 'Salta desplazándose con ambos pies.', completado: false, edadAparicion: '60-72 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '31', descripcion: 'Construye torre de doce cubos.', completado: false, edadAparicion: '60-72 meses', observaciones: '' },
      { id: '32', descripcion: 'Modelo de cubos "escalera".', completado: false, edadAparicion: '60-72 meses', observaciones: '' },
      { id: '33', descripcion: 'Copia de un triángulo.', completado: false, edadAparicion: '60-72 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '31', descripcion: 'Dice frases de cinco palabras.', completado: false, edadAparicion: '60-72 meses', observaciones: '' },
      { id: '32', descripcion: 'Repite palabras con pronunciacion correcta', completado: false, edadAparicion: '60-72 meses', observaciones: '' },
      { id: '33', descripcion: 'Absurdos visuales', completado: false, edadAparicion: '60-72 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '31', descripcion: 'Se cepilla los dientes.', completado: false, edadAparicion: '60-72 meses', observaciones: '' },
      { id: '32', descripcion: 'Comenta vida familiar', completado: false, edadAparicion: '60-72 meses', observaciones: '' },
      { id: '33', descripcion: 'Colabora por iniciativa propia con actividades cotidianas', completado: false, edadAparicion: '60-72 meses', observaciones: '' }
    ]
  },
  'rango-12': { // Items 34-36
    motricidadGruesa: [
      { id: '34', descripcion: 'Salta con un pie.', completado: false, edadAparicion: '72-84 meses', observaciones: '' },
      { id: '35', descripcion: 'Realiza saltos alternados en secuencia.', completado: false, edadAparicion: '72-84 meses', observaciones: '' },
      { id: '36', descripcion: 'Realiza alguna actividad de integración motora.', completado: false, edadAparicion: '72-84 meses', observaciones: '' }
    ],
    motricidadFinaAdaptativa: [
      { id: '34', descripcion: 'Construye torre de catorce cubos.', completado: false, edadAparicion: '72-84 meses', observaciones: '' },
      { id: '35', descripcion: 'Puede hacer una figura plegada.', completado: false, edadAparicion: '72-84 meses', observaciones: '' },
      { id: '36', descripcion: 'Ensarta cordón cruzado (cómo amarrarse los zapatos).', completado: false, edadAparicion: '72-84 meses', observaciones: '' }
    ],
    audicionLenguaje: [
      { id: '34', descripcion: 'Dice frases de seis palabras.', completado: false, edadAparicion: '72-84 meses', observaciones: '' },
      { id: '35', descripcion: 'Conoce: Ayer, hoy y mañana', completado: false, edadAparicion: '72-84 meses', observaciones: '' },
      { id: '36', descripcion: 'Ordena una historia y la relata', completado: false, edadAparicion: '72-84 meses', observaciones: '' }
    ],
    personalSocial: [
      { id: '34', descripcion: 'Se viste completamente solo.', completado: false, edadAparicion: '72-84 meses', observaciones: '' },
      { id: '35', descripcion: 'Reconocimientos de normas o prohibiciones', completado: false, edadAparicion: '72-84 meses', observaciones: '' },
      { id: '36', descripcion: 'Reconoce emociones complejas (culpa, pena, etc).', completado: false, edadAparicion: '72-84 meses', observaciones: '' }
    ]
  }
}

// Tablas de conversión de puntuación directa a típica según Anexo 11 (páginas 155-158)
export const tablasConversion: TablaConversion[] = [
  {
    edad: 'Rango 1: 0-1 mes',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 2: 1-3 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 3: 3-6 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 4: 6-9 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 5: 9-12 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 6: 12-18 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 7: 18-24 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 8: 24-36 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 9: 36-48 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 10: 48-60 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 11: 60-72 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  },
  {
    edad: 'Rango 12: 72-84 meses',
    puntuaciones: [
      { directa: 0, tipica: 50, percentil: 1 },
      { directa: 1, tipica: 55, percentil: 3 },
      { directa: 2, tipica: 60, percentil: 8 },
      { directa: 3, tipica: 65, percentil: 16 },
      { directa: 4, tipica: 70, percentil: 25 },
      { directa: 5, tipica: 75, percentil: 37 },
      { directa: 6, tipica: 80, percentil: 50 },
      { directa: 7, tipica: 85, percentil: 63 },
      { directa: 8, tipica: 90, percentil: 75 },
      { directa: 9, tipica: 95, percentil: 84 }
    ]
  }
]

// Función para obtener el rango de edad según la edad corregida en meses
export const obtenerRangoEdad = (edadMeses: number): RangoEdad | null => {
  // Convertir edad a días para mayor precisión
  const edadDias = edadMeses * 30.44 // Aproximación de días por mes
  
  for (const grupo of gruposEtarios) {
    for (const rango of grupo.rangos) {
      // Convertir rangos a días para comparación precisa
      let rangoMinDias: number
      let rangoMaxDias: number
      
      if (rango.id === 'rango-1') {
        // Rango 1: 0 días a 1 mes 0 días
        rangoMinDias = 0
        rangoMaxDias = 30 // 1 mes = 30 días
      } else if (rango.id === 'rango-2') {
        // Rango 2: 1 mes 1 día a 3 meses 0 días
        rangoMinDias = 31 // 1 mes 1 día
        rangoMaxDias = 90 // 3 meses
      } else if (rango.id === 'rango-3') {
        // Rango 3: 3 meses 1 día a 6 meses 0 días
        rangoMinDias = 91 // 3 meses 1 día
        rangoMaxDias = 180 // 6 meses
      } else if (rango.id === 'rango-4') {
        // Rango 4: 6 meses 1 día a 9 meses 0 días
        rangoMinDias = 181 // 6 meses 1 día
        rangoMaxDias = 270 // 9 meses
      } else if (rango.id === 'rango-5') {
        // Rango 5: 9 meses 1 día a 12 meses 0 días
        rangoMinDias = 271 // 9 meses 1 día
        rangoMaxDias = 360 // 12 meses
      } else if (rango.id === 'rango-6') {
        // Rango 6: 1 año 0 meses 1 día a 1 año 6 meses 0 días
        rangoMinDias = 361 // 1 año 1 día
        rangoMaxDias = 540 // 1 año 6 meses
      } else if (rango.id === 'rango-7') {
        // Rango 7: 1 año 6 meses 1 día a 2 años 0 meses 0 días
        rangoMinDias = 541 // 1 año 6 meses 1 día
        rangoMaxDias = 720 // 2 años
      } else if (rango.id === 'rango-8') {
        // Rango 8: 2 años 0 meses 1 día a 3 años 0 meses 0 días
        rangoMinDias = 721 // 2 años 1 día
        rangoMaxDias = 1080 // 3 años
      } else if (rango.id === 'rango-9') {
        // Rango 9: 3 años 0 meses 1 día a 4 años 0 meses 0 días
        rangoMinDias = 1081 // 3 años 1 día
        rangoMaxDias = 1440 // 4 años
      } else if (rango.id === 'rango-10') {
        // Rango 10: 4 años 0 meses 1 día a 5 años 0 meses 0 días
        rangoMinDias = 1441 // 4 años 1 día
        rangoMaxDias = 1800 // 5 años
      } else if (rango.id === 'rango-11') {
        // Rango 11: 5 años 0 meses 1 día a 6 años 0 meses 0 días
        rangoMinDias = 1801 // 5 años 1 día
        rangoMaxDias = 2160 // 6 años
      } else if (rango.id === 'rango-12') {
        // Rango 12: 6 años 0 meses 1 día a 7 años 0 meses 0 días
        rangoMinDias = 2161 // 6 años 1 día
        rangoMaxDias = 2520 // 7 años
      } else {
        // Fallback a la lógica anterior
        rangoMinDias = rango.edadMinima * 30.44
        rangoMaxDias = rango.edadMaxima * 30.44
      }
      
      if (edadDias >= rangoMinDias && edadDias <= rangoMaxDias) {
        return rango
      }
    }
  }
  return null
}

// Función para obtener el rango anterior
export const obtenerRangoAnterior = (rangoActual: string): string | null => {
  const rangos = ['rango-1', 'rango-2', 'rango-3', 'rango-4', 'rango-5', 'rango-6', 'rango-7', 'rango-8', 'rango-9', 'rango-10', 'rango-11', 'rango-12']
  const index = rangos.indexOf(rangoActual)
  return index > 0 ? rangos[index - 1] : null
}

// Función para convertir puntuación directa a típica según Anexo 11
export const convertirPuntuacion = (puntuacionDirecta: number, edad: string): { tipica: number; percentil: number } => {
  const tabla = tablasConversion.find(t => t.edad === edad)
  if (!tabla) return { tipica: 100, percentil: 50 }

  const puntuacion = tabla.puntuaciones.find(p => p.directa === puntuacionDirecta)
  if (puntuacion) {
    return { tipica: puntuacion.tipica, percentil: puntuacion.percentil }
  }

  // Interpolación si no hay coincidencia exacta
  const puntuaciones = tabla.puntuaciones.sort((a, b) => a.directa - b.directa)
  for (let i = 0; i < puntuaciones.length - 1; i++) {
    if (puntuacionDirecta >= puntuaciones[i].directa && puntuacionDirecta <= puntuaciones[i + 1].directa) {
      const factor = (puntuacionDirecta - puntuaciones[i].directa) / (puntuaciones[i + 1].directa - puntuaciones[i].directa)
      const tipica = Math.round(puntuaciones[i].tipica + factor * (puntuaciones[i + 1].tipica - puntuaciones[i].tipica))
      const percentil = Math.round(puntuaciones[i].percentil + factor * (puntuaciones[i + 1].percentil - puntuaciones[i].percentil))
      return { tipica, percentil }
    }
  }

  return { tipica: 100, percentil: 50 }
}
