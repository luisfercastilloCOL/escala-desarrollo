# Escala Abreviada del Desarrollo Infantil

## 📊 Descripción
Sistema de evaluación de desarrollo infantil basado en la Escala Abreviada del Desarrollo Infantil. Permite evaluar cuatro áreas principales: Motricidad Gruesa, Motricidad Fina, Audición y Lenguaje, y Personal Social.

## ✨ Características Principales

### 🎯 Evaluación Inteligente
- **Evaluación por rangos de edad**: Comienza según la edad corregida del niño
- **Evaluación continua**: Continúa automáticamente entre rangos hasta encontrar dos evaluaciones consecutivas que no cumplen
- **Terminación automática**: Se detiene cuando se detectan dos "No cumple" consecutivos
- **Transición fluida**: Pasa automáticamente a la siguiente área

### 📊 Cálculo de Puntuaciones
- **Puntuación Directa**: Número del último item que cumplió antes de los dos consecutivos que no cumplen
- **Puntuación Típica**: Calculada desde tablas Excel según la puntuación directa y el rango de edad
- **Cálculo de Edad Corregida**: Resta las semanas faltantes para llegar a 40 semanas de gestación

### 🎨 Interfaz de Usuario
- **Interfaz moderna**: Diseño limpio y profesional
- **Navegación intuitiva**: Botones claros para evaluar items
- **Progreso visual**: Barras de progreso y contadores
- **Información detallada**: Muestra rangos, items y puntuaciones

### 🔧 Funcionalidades Técnicas
- **Navegación entre rangos**: Permite cambiar manualmente de rango
- **Navegación hacia atrás**: Botón para retroceder entre items
- **Estado de evaluación**: Muestra áreas completadas
- **Prevención de re-evaluación**: No permite re-evaluar áreas completadas

## 🚀 Instalación y Uso

### Requisitos
- Node.js 18+ (para desarrollo)
- Python 3.8+ (para servidor de desarrollo)
- Navegador web moderno

### Instalación Local
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/escala-desarrollo-final2.git
cd escala-desarrollo-final2

# Instalar dependencias
npm install

# Construir el proyecto
npm run build

# Servir archivos estáticos
python3 -m http.server 8080 --directory dist
```

### Acceso
- **Local**: http://localhost:8080/evaluacion_corregida_final.html
- **Producción**: https://tu-proyecto.vercel.app

## 📋 Instrucciones de Uso

### 1. Datos del Paciente
1. Ingresa el nombre completo del niño
2. Ingresa los apellidos
3. Selecciona la fecha de nacimiento
4. Ingresa las semanas de gestación (20-45 semanas)
5. Selecciona el género

### 2. Iniciar Evaluación
1. Haz clic en "🚀 Iniciar Evaluación"
2. Verifica que las edades cronológica y corregida sean correctas
3. Selecciona el área a evaluar

### 3. Evaluar Items
1. Lee el enunciado del item
2. Haz clic en "✅ Cumple" o "❌ No cumple"
3. La evaluación continúa automáticamente
4. Se detiene cuando hay dos "No cumple" consecutivos

### 4. Navegación
- **⬅️ Anterior**: Retrocede al item anterior
- **🔄 Cambiar Rango**: Cambia manualmente de rango
- **🏠 Cambiar Área**: Regresa a la selección de áreas

## 📊 Áreas de Evaluación

### 1. Motricidad Gruesa
- Desarrollo de movimientos corporales grandes
- Control postural y locomoción
- Coordinación de extremidades

### 2. Motricidad Fina
- Desarrollo de movimientos precisos
- Coordinación ojo-mano
- Manipulación de objetos

### 3. Audición y Lenguaje
- Desarrollo del lenguaje receptivo
- Desarrollo del lenguaje expresivo
- Comprensión y comunicación

### 4. Personal Social
- Interacción social
- Autonomía personal
- Comportamiento adaptativo

## 🔍 Rangos de Edad

| Rango | Edad | Items |
|-------|------|-------|
| Rango 1 | 0-1 mes | 1-3 |
| Rango 2 | 1-3 meses | 4-6 |
| Rango 3 | 3-6 meses | 7-9 |
| Rango 4 | 6-9 meses | 10-12 |
| Rango 5 | 9-12 meses | 13-15 |
| Rango 6 | 12-18 meses | 16-18 |
| Rango 7 | 18-24 meses | 19-21 |
| Rango 8 | 24-36 meses | 22-24 |
| Rango 9 | 36-48 meses | 25-27 |
| Rango 10 | 48-60 meses | 28-30 |
| Rango 11 | 60-72 meses | 31-33 |
| Rango 12 | 72-84 meses | 34-36 |

## 📈 Cálculo de Puntuaciones

### Puntuación Directa
La puntuación directa es el **número del último item que cumplió** antes de los dos consecutivos que no cumplen.

**Ejemplo:**
- Item 1: Cumple
- Item 2: Cumple
- Item 3: Cumple
- Item 4: Cumple
- Item 5: Cumple ← ÚLTIMO QUE CUMPLIÓ
- Item 6: No cumple
- Item 7: No cumple
- **Puntuación Directa = 5**

### Puntuación Típica
La puntuación típica se calcula desde las tablas Excel según:
- La puntuación directa obtenida
- El rango de edad del niño

## 🛠️ Desarrollo

### Estructura del Proyecto
```
escala-desarrollo-final2/
├── src/                    # Código fuente React/TypeScript
│   ├── components/         # Componentes React
│   ├── pages/             # Páginas principales
│   ├── data/              # Datos y archivos Excel
│   ├── types/             # Definiciones de tipos
│   └── utils/             # Utilidades
├── dist/                  # Archivos compilados
├── backups/               # Backups de versiones
└── docs/                  # Documentación
```

### Scripts de Desarrollo
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de producción

### Archivos Excel
Los archivos Excel contienen:
- **Items por área**: Enunciados y valores de cada item
- **Puntuaciones típicas**: Tablas de conversión por rango de edad

## 🚀 Despliegue

### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel --prod
```

### GitHub Pages
```bash
# Construir proyecto
npm run build

# Subir a GitHub
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 📝 Versiones

### Estable 1 (Actual)
- ✅ Corrección crítica de puntuación directa
- ✅ Puntuación típica calculada correctamente desde Excel
- ✅ Lógica robusta de dos consecutivos que no cumplen
- ✅ Evaluación entre rangos dentro de cada área
- ✅ Terminación automática de áreas
- ✅ Transición fluida entre áreas
- ✅ Navegación mejorada entre rangos
- ✅ Progreso visual detallado
- ✅ Prevención de re-evaluación de áreas completadas

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o consultas:
- Abre un issue en GitHub
- Revisa la documentación en `backups/estable_1/README_ESTABLE_1.md`
- Consulta los logs en la consola del navegador (F12)

## 🎯 Estado del Proyecto

**Estado**: ✅ Completamente funcional y listo para producción
**Versión**: Estable 1
**Última actualización**: 2024-12-19
**Próximos pasos**: Despliegue en producción y optimizaciones de rendimiento
