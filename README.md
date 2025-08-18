# Escala Abreviada del Desarrollo - Aplicación Web

Esta es una aplicación web moderna para la gestión y evaluación del desarrollo infantil utilizando la escala abreviada del desarrollo.

## 🚀 Características

- **Dashboard Interactivo**: Vista general de evaluaciones y estadísticas
- **Sistema de Evaluación**: Formularios paso a paso para recopilar información del paciente
- **Gestión de Resultados**: Visualización y análisis de evaluaciones completadas
- **Configuración Avanzada**: Personalización de la aplicación y gestión de pacientes
- **Diseño Responsivo**: Funciona perfectamente en dispositivos móviles y de escritorio
- **Interfaz Moderna**: Diseño limpio y profesional con Tailwind CSS

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Routing**: React Router DOM
- **State Management**: React Hooks

## 📋 Requisitos Previos

- Node.js 16+ 
- npm o yarn

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd escala-desarrollo-app
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   └── Layout.tsx      # Layout principal con navegación
├── pages/              # Páginas de la aplicación
│   ├── Dashboard.tsx   # Página principal
│   ├── Evaluacion.tsx  # Formulario de evaluación
│   ├── Resultados.tsx  # Visualización de resultados
│   └── Configuracion.tsx # Configuración y gestión
├── App.tsx             # Componente principal con routing
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🎯 Funcionalidades Principales

### Dashboard
- Estadísticas generales de evaluaciones
- Acciones rápidas para funciones comunes
- Lista de evaluaciones recientes

### Evaluación
- Formulario paso a paso para información del paciente
- Validación de campos requeridos
- Progreso visual del proceso

### Resultados
- Búsqueda y filtrado de evaluaciones
- Visualización detallada de resultados
- Estadísticas y análisis

### Configuración
- Gestión de pacientes
- Configuración de la clínica
- Preferencias de la aplicación
- Configuración de seguridad

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build
- `npm run lint` - Verificar código con ESLint
- `npm run lint:fix` - Corregir errores de ESLint automáticamente

## 📱 Diseño Responsivo

La aplicación está diseñada para funcionar perfectamente en:
- Dispositivos móviles (320px+)
- Tablets (768px+)
- Escritorio (1024px+)

## 🎨 Personalización

### Colores
Los colores principales se pueden personalizar en `tailwind.config.js`:
- Primary: Azul (#3b82f6)
- Secondary: Gris (#64748b)

### Componentes
Los estilos de componentes están definidos en `src/index.css` con clases utilitarias personalizadas.

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

### Servidor de Producción
```bash
npm run preview
```

## 📚 Próximos Pasos

- [ ] Integración con backend/API
- [ ] Sistema de autenticación
- [ ] Base de datos para pacientes
- [ ] Exportación de reportes
- [ ] Aplicación móvil nativa
- [ ] Sincronización offline

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas sobre la implementación:
- Crear un issue en el repositorio
- Contactar al equipo de desarrollo

## 🔗 Enlaces Útiles

- [Documentación de React](https://reactjs.org/docs/)
- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Escala Abreviada del Desarrollo](https://es.wikipedia.org/wiki/Escala_Abreviada_del_Desarrollo)

