# 🚀 Guía de Despliegue - Escala Abreviada del Desarrollo Infantil

## 📋 Preparación para Despliegue

### 1. Verificar Archivos
- ✅ `dist/evaluacion_corregida_final.html` - Archivo principal
- ✅ `README.md` - Documentación principal
- ✅ `vercel.json` - Configuración de Vercel
- ✅ `package.json` - Dependencias y scripts
- ✅ `.gitignore` - Archivos a ignorar

### 2. Construir Proyecto
```bash
npm run build
```

### 3. Verificar Construcción
```bash
ls -la dist/
```

## 🌐 Despliegue en Vercel

### Opción 1: Vercel CLI
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login en Vercel
vercel login

# Desplegar
vercel --prod
```

### Opción 2: GitHub + Vercel
1. Subir código a GitHub
2. Conectar repositorio en Vercel
3. Configurar despliegue automático

## 🔗 URLs de Acceso

### Local
- http://localhost:8080/evaluacion_corregida_final.html

### Producción (Vercel)
- https://escala-desarrollo-infantil.vercel.app
- https://escala-desarrollo-infantil.vercel.app/evaluacion

## 📊 Verificación Post-Despliegue

### 1. Funcionalidad Básica
- [ ] Carga la página principal
- [ ] Aparece el título "Cálculo Escala Abreviada del Desarrollo Infantil"
- [ ] Aparece el botón "Iniciar Evaluación"
- [ ] Los campos se llenan automáticamente

### 2. Evaluación
- [ ] Se puede iniciar evaluación
- [ ] Se calculan edades correctamente
- [ ] Aparecen los 4 botones de áreas
- [ ] Se puede seleccionar un área

### 3. Evaluación de Items
- [ ] Se cargan items según edad corregida
- [ ] Se puede evaluar items como "Cumple" o "No cumple"
- [ ] Se detiene con dos "No cumple" consecutivos
- [ ] Se calcula puntuación directa correctamente
- [ ] Se calcula puntuación típica desde Excel

### 4. Navegación
- [ ] Botón "Anterior" funciona
- [ ] Botón "Cambiar Rango" funciona
- [ ] Botón "Cambiar Área" funciona
- [ ] Se puede evaluar múltiples áreas

## 🛠️ Solución de Problemas

### Error 404
- Verificar que `vercel.json` está configurado correctamente
- Verificar que `dist/evaluacion_corregida_final.html` existe

### Error de CORS
- Verificar headers en `vercel.json`
- Verificar configuración de rutas

### Error de JavaScript
- Verificar logs en consola del navegador
- Verificar que todos los archivos se cargan correctamente

## 📈 Monitoreo

### Vercel Analytics
- Activar en dashboard de Vercel
- Monitorear rendimiento y errores

### Logs
- Revisar logs de Vercel
- Monitorear errores en consola del navegador

## 🔄 Actualizaciones

### Proceso de Actualización
1. Hacer cambios en código local
2. Probar localmente
3. Construir proyecto (`npm run build`)
4. Subir a GitHub
5. Vercel despliega automáticamente

### Rollback
- Usar dashboard de Vercel para rollback
- O usar `vercel rollback` desde CLI

## 📞 Soporte

Para problemas de despliegue:
- Revisar logs de Vercel
- Verificar configuración en `vercel.json`
- Consultar documentación de Vercel
- Abrir issue en GitHub
