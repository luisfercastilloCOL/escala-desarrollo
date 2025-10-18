# Guía de Prueba - Evaluación por Rango de Edad Corregido

## 🎯 Objetivo
Verificar que la evaluación de cada área empiece en el rango de edad corregido del paciente y permita navegación hacia adelante y atrás.

## 📋 Casos de Prueba

### Caso 1: Paciente de 2 años (24 meses)
**Edad corregida:** 2 años  
**Rango esperado:** 1.5-2 años  
**Items esperados:** 19-21 (Motricidad Gruesa)

**Pasos:**
1. Ir a http://localhost:8000
2. Hacer clic en "Nueva Evaluación"
3. Ingresar datos:
   - Nombre: "Paciente Test 2 años"
   - Fecha de nacimiento: Hace 2 años
   - Fecha de evaluación: Hoy
   - Edad corregida: 2 años
4. Hacer clic en "Iniciar Evaluación"
5. **VERIFICAR:** La evaluación debe empezar en el item 19 (rango 1.5-2 años)
6. **VERIFICAR:** El mensaje debe mostrar "Iniciando evaluación de Motricidad Gruesa desde el rango 1.5-2 años (item 19)"

### Caso 2: Paciente de 4 años (48 meses)
**Edad corregida:** 4 años  
**Rango esperado:** 3-4 años  
**Items esperados:** 25-27 (Motricidad Gruesa)

**Pasos:**
1. Crear nueva evaluación
2. Ingresar datos para paciente de 4 años
3. **VERIFICAR:** La evaluación debe empezar en el item 25 (rango 3-4 años)
4. **VERIFICAR:** El mensaje debe mostrar "Iniciando evaluación de Motricidad Gruesa desde el rango 3-4 años (item 25)"

### Caso 3: Paciente de 6 meses
**Edad corregida:** 6 meses  
**Rango esperado:** 3-6 meses  
**Items esperados:** 7-9 (Motricidad Gruesa)

**Pasos:**
1. Crear nueva evaluación
2. Ingresar datos para paciente de 6 meses
3. **VERIFICAR:** La evaluación debe empezar en el item 7 (rango 3-6 meses)
4. **VERIFICAR:** El mensaje debe mostrar "Iniciando evaluación de Motricidad Gruesa desde el rango 3-6 meses (item 7)"

## 🔄 Pruebas de Navegación

### Navegación Hacia Atrás
1. En cualquier evaluación, hacer clic en "Anterior"
2. **VERIFICAR:** Debe retroceder al item anterior
3. **VERIFICAR:** El número de item debe cambiar correctamente

### Navegación Hacia Adelante
1. Evaluar un item (Cumple/No cumple)
2. Hacer clic en "Siguiente"
3. **VERIFICAR:** Debe avanzar al siguiente item
4. **VERIFICAR:** El número de item debe incrementar correctamente

## 🎯 Pruebas de Puntuación

### Puntuación Directa
1. Evaluar varios items consecutivos
2. **VERIFICAR:** La puntuación directa debe ser el ID del último item que cumple
3. **VERIFICAR:** Si un item no cumple, la puntuación debe ser el ID del último que sí cumple

### Puntuación Típica y Percentil
1. Completar un área
2. **VERIFICAR:** La puntuación típica debe calcularse usando las tablas de Excel
3. **VERIFICAR:** El percentil debe calcularse correctamente
4. **VERIFICAR:** Los valores deben ser realistas para la edad del paciente

## 🚨 Casos de Error

### Edad Fuera de Rango
1. Crear paciente con edad muy alta (ej: 10 años)
2. **VERIFICAR:** Debe mostrar mensaje de error o usar el último rango disponible

### Rango No Encontrado
1. Crear paciente con edad muy baja (ej: 0 meses)
2. **VERIFICAR:** Debe empezar desde el item 1 con mensaje de advertencia

## ✅ Criterios de Éxito

- [ ] La evaluación empieza en el rango de edad corregido
- [ ] El mensaje muestra el rango correcto y el número de item
- [ ] La navegación hacia adelante y atrás funciona correctamente
- [ ] La puntuación directa se calcula correctamente
- [ ] La puntuación típica y percentil se calculan usando las tablas de Excel
- [ ] Los números de items van del 1 al 36 por área
- [ ] Cada área mantiene su propia numeración independiente

## 🔍 Verificaciones Adicionales

1. **Consistencia de Rangos:** Verificar que todos los rangos estén correctamente mapeados
2. **Items por Rango:** Verificar que cada rango tenga exactamente 3 items
3. **Numeración Secuencial:** Verificar que los items vayan del 1 al 36 por área
4. **Navegación entre Áreas:** Verificar que al cambiar de área se mantenga el rango correcto

## 📝 Notas

- La aplicación debe funcionar correctamente en http://localhost:8000
- Los cambios se aplican automáticamente al recargar la página
- Si hay errores, revisar la consola del navegador para más detalles


