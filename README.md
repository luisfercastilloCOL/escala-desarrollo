# Escala Abreviada del Desarrollo

Aplicación web para la evaluación del desarrollo infantil utilizando la Escala Abreviada del Desarrollo.

## 🚀 Características

- **Evaluación por áreas**: 4 áreas de desarrollo (Motricidad Gruesa, Motricidad Fina Adaptativa, Audición y Lenguaje, Personal Social)
- **Numeración por área**: Cada área tiene items del 1 al 36
- **Regla de parada**: Se detiene con 2 consecutivos que no cumple
- **Navegación fluida**: Entre áreas y items con retroceso
- **Interfaz moderna**: Diseño responsive y intuitivo

## 🛠️ Tecnologías

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Routing**: React Router DOM

## 📦 Instalación

```bash
npm install
```

## 🚀 Desarrollo

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🌐 Despliegue

La aplicación está configurada para desplegarse automáticamente en Vercel cuando se hace push a la rama `main`.

### Configuración de Vercel

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18+

## 📋 Uso

1. **Ingresar datos del paciente**: Nombre, fecha de nacimiento, fecha de evaluación
2. **Iniciar evaluación**: Comenzar con la primera área
3. **Evaluar items**: Marcar "Cumple" o "No Cumple" para cada item
4. **Navegar entre áreas**: Cambiar entre las 4 áreas de desarrollo
5. **Ver resultados**: Revisar puntuaciones y progreso

## 🎯 Áreas de Evaluación

### Motricidad Gruesa (Items 1-36)
- Control postural y movimientos corporales
- Coordinación y equilibrio
- Habilidades motoras gruesas

### Motricidad Fina Adaptativa (Items 1-36)
- Coordinación ojo-mano
- Habilidades de manipulación
- Destrezas finas

### Audición y Lenguaje (Items 1-36)
- Comprensión del lenguaje
- Expresión verbal
- Habilidades comunicativas

### Personal Social (Items 1-36)
- Interacción social
- Autonomía personal
- Habilidades adaptativas

## 📊 Reglas de Evaluación

- **Inicio**: Cada área comienza en el item 1
- **Progresión**: Secuencial del 1 al 36
- **Parada**: 2 consecutivos que no cumple
- **Navegación**: Retroceso permitido a items anteriores

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico.

### Personalización

Los items de evaluación se pueden modificar en `src/pages/Evaluacion.tsx`.

## 📱 Responsive

La aplicación está optimizada para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Despliegue en Vercel

1. Conectar el repositorio de GitHub a Vercel
2. Configurar el framework como "Vite"
3. Establecer el build command como `npm run build`
4. Establecer el output directory como `dist`
5. El despliegue se realizará automáticamente en cada push a `main`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Contribuidores

- Luis Fernando Castillo