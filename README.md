# Metrolog — Landing

Página pública de Metrolog Cloud: propuesta de valor, cómo funciona, preguntas
frecuentes, formulario de contacto y las páginas legales (aviso legal,
política de privacidad, términos de servicio). El registro y el login viven
en la aplicación real, no aquí — esta landing solo enlaza a ella.

En producción: **https://metrolog-landing-v2.vercel.app**

## Stack

React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router. Sin backend
propio: el formulario de contacto envía a través de FormSubmit, todo lo demás
es estático.

## Desarrollo

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # tsc -b && vite build → dist/
npm run preview   # sirve dist/ localmente para comprobar el build
```

## Variables de entorno

| Variable | Para qué |
| --- | --- |
| `VITE_APP_URL` | URL pública de la aplicación real (`metrolog-cloud-frontend`). Los botones de "Regístrate" / "Iniciar sesión" enlazan a `${VITE_APP_URL}/registro` y `${VITE_APP_URL}/login` (ver `src/lib/appUrl.ts`). Sin definir, cae a `http://localhost:5173` — solo válido en desarrollo local. |

En Vercel se configura en Project Settings → Environment Variables.

## Despliegue

Vercel despliega automáticamente cada push a `main` (build command y output
los detecta solo por `package.json`/Vite). `vercel.json` añade el rewrite que
necesita el enrutado de React Router para que refrescar en una ruta como
`/politica-de-privacidad` no dé 404.

GitHub Actions (`.github/workflows/ci.yml`) corre en cada push/PR como
verificación independiente de tipos y build — no despliega nada, eso ya lo
hace Vercel.

## Contenido

Todos los textos viven en `src/i18n/translations.ts` (solo español —
decisión deliberada, no hay selector de idioma). Las secciones legales están
en `translations.legal.*` y se comparten entre `AvisoLegal.tsx`,
`PoliticaPrivacidad.tsx` y `TerminosServicio.tsx`.
