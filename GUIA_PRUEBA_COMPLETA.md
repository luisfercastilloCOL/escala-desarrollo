# 🧪 Guía de Prueba - Aplicación Completa de Evaluación

## 📋 **Funcionalidades a Probar**

### 1. **Formulario de Datos del Paciente**
- [ ] Ingresar nombre del paciente
- [ ] Seleccionar fecha de nacimiento
- [ ] Seleccionar fecha de evaluación
- [ ] Ingresar semanas de gestación (probar con diferentes valores)
- [ ] Seleccionar género
- [ ] Verificar cálculo de edad corregida

**Casos de Prueba:**
- Bebé prematuro (32 semanas) - debe aplicar corrección
- Bebé a término (37 semanas) - no debe aplicar corrección
- Bebé a término (40 semanas) - no debe aplicar corrección

### 2. **Interfaz General de Áreas**
- [ ] Ver las 4 áreas disponibles:
  - Motricidad Gruesa (MG)
  - Motricidad Fina Adaptativa (MFA)
  - Audición y Lenguaje (AL)
  - Personal Social (PS)
- [ ] Verificar que cada área muestre el estado correcto
- [ ] Probar clic en cada área para iniciar evaluación

### 3. **Evaluación por Área**
- [ ] Verificar que la evaluación empiece en el rango de edad correcto
- [ ] Navegar entre items (anterior/siguiente)
- [ ] Marcar items como "Cumple" o "No Cumple"
- [ ] Verificar que se puede volver a áreas en cualquier momento
- [ ] Completar área y verificar puntuaciones

### 4. **Sistema de Puntuación**
- [ ] Verificar cálculo de puntuación directa (último item que cumple)
- [ ] Verificar cálculo de puntuación típica
- [ ] Verificar cálculo de percentil
- [ ] Verificar que se muestre el rango evaluado

### 5. **Resumen y Diagnóstico**
- [ ] Completar las 4 áreas
- [ ] Generar diagnóstico general
- [ ] Verificar información del paciente
- [ ] Verificar resultados por área
- [ ] Verificar promedios generales
- [ ] Verificar recomendaciones

### 6. **Sistema de Guardado**
- [ ] Guardar evaluación
- [ ] Verificar que se guarde en localStorage
- [ ] Probar exportar evaluación individual
- [ ] Probar imprimir resumen

### 7. **Panel de Administración**
- [ ] Acceder al panel de administración
- [ ] Ver estadísticas generales
- [ ] Ver lista de evaluaciones guardadas
- [ ] Probar exportar todas las evaluaciones
- [ ] Probar importar evaluaciones
- [ ] Probar eliminar evaluación individual
- [ ] Probar limpiar datos antiguos

## 🎯 **Casos de Prueba Específicos**

### **Caso 1: Bebé Prematuro**
```
Datos:
- Nombre: "Juan Pérez"
- Fecha Nacimiento: "2023-01-01"
- Fecha Evaluación: "2023-07-01"
- Semanas Gestación: "32"
- Género: "Masculino"

Resultado Esperado:
- Edad Cronológica: 6 meses
- Edad Corregida: 4 meses (debe restar 8 semanas)
- Rango de Inicio: 3-6 meses
```

### **Caso 2: Bebé a Término**
```
Datos:
- Nombre: "María García"
- Fecha Nacimiento: "2023-01-01"
- Fecha Evaluación: "2023-07-01"
- Semanas Gestación: "40"
- Género: "Femenino"

Resultado Esperado:
- Edad Cronológica: 6 meses
- Edad Corregida: 6 meses (sin corrección)
- Rango de Inicio: 3-6 meses
```

### **Caso 3: Bebé Muy Prematuro**
```
Datos:
- Nombre: "Carlos López"
- Fecha Nacimiento: "2023-01-01"
- Fecha Evaluación: "2023-05-01"
- Semanas Gestación: "28"
- Género: "Masculino"

Resultado Esperado:
- Edad Cronológica: 4 meses
- Edad Corregida: 1 mes (debe restar 12 semanas)
- Rango de Inicio: 0-1 mes
```

## 🔍 **Verificaciones Importantes**

### **Fórmula de Edad Corregida**
- ✅ Solo se aplica si semanas de gestación < 37
- ✅ Se resta en años, meses y días
- ✅ Usa fecha de evaluación, no fecha actual

### **Inicio de Evaluación**
- ✅ Empieza en el rango de edad corregido
- ✅ No empieza siempre en el item 1
- ✅ Muestra el rango correcto en la interfaz

### **Navegación**
- ✅ Se puede ir hacia adelante y atrás
- ✅ Se puede volver a áreas en cualquier momento
- ✅ Se puede completar área en cualquier momento

### **Puntuación**
- ✅ Se basa en el último item que cumple
- ✅ Se calcula puntuación típica y percentil
- ✅ Se muestra el rango evaluado

### **Guardado**
- ✅ Se guarda en localStorage
- ✅ Se puede exportar/importar
- ✅ Se puede administrar desde el panel

## 🚨 **Problemas a Reportar**

Si encuentras algún problema, reporta:
1. **Descripción del problema**
2. **Pasos para reproducirlo**
3. **Datos de prueba utilizados**
4. **Resultado esperado vs resultado obtenido**
5. **Captura de pantalla (si es posible)**

## 📱 **URLs de Prueba**

- **Aplicación Completa:** http://localhost:8000/app_completa.html
- **Aplicación Original:** http://localhost:8000/app_original_corregida.html
- **Aplicación Simple:** http://localhost:8000/app_corregida.html

## ✅ **Checklist de Prueba**

- [ ] Formulario funciona correctamente
- [ ] Cálculo de edad corregida es correcto
- [ ] Interfaz de áreas se muestra bien
- [ ] Evaluación empieza en el rango correcto
- [ ] Navegación funciona en ambas direcciones
- [ ] Puntuaciones se calculan correctamente
- [ ] Diagnóstico se genera correctamente
- [ ] Guardado funciona
- [ ] Panel de administración funciona
- [ ] Exportar/Importar funciona
- [ ] Aplicación es responsive (móvil/desktop)

---

**¡Disfruta probando la aplicación!** 🎉


