# 🧪 Guía de Pruebas - Escala Abreviada del Desarrollo

## 🌐 **Aplicación Ejecutándose**

**URL**: http://localhost:8000

## 📋 **Funcionalidades a Probar**

### 1. **Inicio de Sesión**
- [ ] Ingresar nombre del paciente
- [ ] Ingresar fecha de nacimiento
- [ ] Ingresar fecha de evaluación
- [ ] Verificar cálculo de edad corregida

### 2. **Evaluación por Áreas**

#### **Motricidad Gruesa (Items 1-36)**
- [ ] Comenzar evaluación desde item 1
- [ ] Navegar secuencialmente del 1 al 36
- [ ] Probar botón "Anterior" (debe estar deshabilitado en item 1)
- [ ] Probar botones "Cumple" y "No Cumple"
- [ ] Verificar regla de parada (2 consecutivos que no cumple)

#### **Motricidad Fina Adaptativa (Items 1-36)**
- [ ] Cambiar a esta área desde la navegación
- [ ] Verificar que comienza en item 1
- [ ] Probar navegación secuencial
- [ ] Verificar numeración del 1 al 36

#### **Audición y Lenguaje (Items 1-36)**
- [ ] Cambiar a esta área desde la navegación
- [ ] Verificar que comienza en item 1
- [ ] Probar navegación secuencial
- [ ] Verificar numeración del 1 al 36

#### **Personal Social (Items 1-36)**
- [ ] Cambiar a esta área desde la navegación
- [ ] Verificar que comienza en item 1
- [ ] Probar navegación secuencial
- [ ] Verificar numeración del 1 al 36

### 3. **Interfaz de Usuario**

#### **Navegación entre Áreas**
- [ ] Verificar tarjetas informativas de cada área
- [ ] Probar botones de cambio de área
- [ ] Verificar estados visuales (actual, completada, pendiente)
- [ ] Verificar barras de progreso por área

#### **Evaluación de Items**
- [ ] Verificar número de item destacado
- [ ] Verificar información del área y rango de edad
- [ ] Probar barra de progreso con porcentaje
- [ ] Verificar ID del item evaluado

#### **Botones de Evaluación**
- [ ] Probar botón "Cumple" (verde con ✓)
- [ ] Probar botón "No Cumple" (rojo con ✗)
- [ ] Verificar efectos hover y transiciones
- [ ] Probar botón "Anterior"
- [ ] Probar botón "Limpiar mensaje"

### 4. **Funcionalidades Específicas**

#### **Regla de Parada**
- [ ] Marcar 2 items consecutivos como "No Cumple"
- [ ] Verificar que la evaluación se detiene automáticamente
- [ ] Verificar que pasa a la siguiente área

#### **Navegación**
- [ ] Probar retroceso entre items
- [ ] Verificar que el botón "Anterior" se deshabilita en item 1
- [ ] Probar cambio entre áreas
- [ ] Verificar que cada área mantiene su progreso

#### **Progreso Visual**
- [ ] Verificar indicadores "Item X de 36"
- [ ] Verificar barras de progreso por área
- [ ] Verificar porcentajes de completado
- [ ] Verificar contadores de items evaluados

### 5. **Responsive Design**

#### **Desktop (1024px+)**
- [ ] Verificar layout de 2 columnas
- [ ] Verificar tarjetas de áreas
- [ ] Verificar botones de evaluación

#### **Tablet (768px - 1023px)**
- [ ] Verificar adaptación del layout
- [ ] Verificar navegación táctil
- [ ] Verificar legibilidad

#### **Mobile (320px - 767px)**
- [ ] Verificar layout de 1 columna
- [ ] Verificar botones táctiles
- [ ] Verificar navegación móvil

## 🎯 **Casos de Prueba Específicos**

### **Caso 1: Evaluación Completa**
1. Ingresar datos de un paciente de 2 años
2. Comenzar con Motricidad Gruesa
3. Evaluar items 1-5 como "Cumple"
4. Evaluar items 6-7 como "No Cumple"
5. Verificar que se detiene automáticamente
6. Cambiar a Motricidad Fina Adaptativa
7. Verificar que comienza en item 1

### **Caso 2: Navegación Completa**
1. Evaluar algunos items en cada área
2. Cambiar entre áreas usando los botones
3. Verificar que cada área mantiene su progreso
4. Probar retroceso en cada área
5. Verificar numeración correcta en cada área

### **Caso 3: Interfaz Responsive**
1. Cambiar tamaño de ventana
2. Verificar adaptación del layout
3. Probar en diferentes dispositivos
4. Verificar legibilidad y usabilidad

## ✅ **Criterios de Aceptación**

- [ ] **Funcionalidad**: Todas las características funcionan correctamente
- [ ] **Navegación**: Flujo intuitivo y sin errores
- [ ] **Interfaz**: Diseño moderno y responsive
- [ ] **Rendimiento**: Carga rápida y sin errores
- [ ] **Usabilidad**: Fácil de usar para profesionales de la salud

## 🐛 **Problemas Conocidos**

- Ninguno identificado

## 📞 **Soporte**

Si encuentras algún problema:
1. Verifica la consola del navegador (F12)
2. Revisa que el servidor esté funcionando
3. Verifica que todos los assets estén cargando
4. Consulta los logs del servidor

## 🎉 **¡Listo para Probar!**

La aplicación está funcionando en http://localhost:8000 y lista para ser probada con todas las funcionalidades implementadas.

