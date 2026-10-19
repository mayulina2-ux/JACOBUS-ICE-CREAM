# Jacobus Ice Cream

Web de la heladería Jacobus (Elda, Alicante). Next.js 15 (App Router) + React 19 + TypeScript + CSS Modules.

## Arrancar

Node 22 LTS está en versión portable en `%USERPROFILE%\node-portable` (no en el PATH). En PowerShell:

```powershell
$env:Path = "$env:USERPROFILE\node-portable\node-v22.23.3-win-x64;$env:Path"
npm run dev
```

Abre http://localhost:3000. La referencia visual está en http://localhost:3000/sistema.

`npm run build` compila la versión de producción (todas las páginas son estáticas).

## Estructura

- `styles/tokens.css`: todos los tokens (color, tipo, espaciado, radios, sombras, capas). Tema oscuro por `prefers-color-scheme` y `[data-theme="dark"]`.
- `styles/pressable.module.css`: estados hover / activo / disabled compartidos (vía `composes`).
- `components/`: un componente por carpeta con su `.module.css`.
- `data/`: sabores, familias, eventos, noticias y datos de la tienda (sin backend).
- `app/`: portada, `/sabores`, `/sabores/[slug]`, `/familias/[slug]`, `/carta`, `/ranking`, `/eventos`, `/tienda`, `/nosotros`, `/sistema`.
