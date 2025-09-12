# Instrucciones de Despliegue

## Opción 1: GitHub Pages (Automático)

1. Ve a tu repositorio en GitHub: https://github.com/luisfercastilloCOL/escala-desarrollo
2. Ve a Settings > Pages
3. En "Source", selecciona "GitHub Actions"
4. El workflow ya está configurado y se ejecutará automáticamente

## Opción 2: GitHub Pages (Manual)

1. Ve a tu repositorio en GitHub: https://github.com/luisfercastilloCOL/escala-desarrollo
2. Ve a Settings > Pages
3. En "Source", selecciona "Deploy from a branch"
4. Selecciona la rama "gh-pages" y la carpeta "/ (root)"
5. Guarda los cambios

## Opción 3: Vercel (Recomendado)

1. Ve a https://vercel.com
2. Conecta tu cuenta de GitHub
3. Importa el repositorio: https://github.com/luisfercastilloCOL/escala-desarrollo
4. Vercel detectará automáticamente la configuración de Vite
5. Haz clic en "Deploy"

## Verificación Local

Para verificar que la aplicación funciona localmente:

```bash
# Instalar un servidor simple
npm install -g serve

# Servir los archivos construidos
serve -s dist -l 3000
```

Luego abre http://localhost:3000 en tu navegador.

## URL de Despliegue

Una vez desplegado, tu aplicación estará disponible en:
- GitHub Pages: https://luisfercastilloCOL.github.io/escala-desarrollo
- Vercel: https://escala-desarrollo.vercel.app (o similar)
