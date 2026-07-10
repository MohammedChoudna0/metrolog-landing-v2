# 000 · Landing Page — Plan

## Enfoque
Diseño minimalista "Single Page". La prioridad es la velocidad y la legibilidad. Usaremos componentes de layout reutilizables y la configuración de `locales` para gestionar todo el contenido.

## Implementación
1. **Layout Principal** — `src/features/landing/layout/LandingLayout.tsx`: Header, Main, Footer.
2. **Diccionario** — `src/features/landing/locales/es.json`: Todos los textos de la página.
3. **Componentes** — `src/features/landing/components/`: `HeroSection.tsx`, `FeatureGrid.tsx`, `PricingPreview.tsx`.
4. **Estilos** — `src/features/landing/styles/landing.css`: Tailwind v4 para layouts modulares.

## Decisiones
- **Sin estado complejo** — Al ser una página informativa, no requiere gestión de estado global compleja, favoreciendo componentes puros.
- **i18n estricto** — Ningún texto (incluso botones) irá hardcodeado en los componentes.

## Riesgos
- **Peso de la página** — Imágenes pesadas podrían ralentizarla. *Mitigación:* Optimización automática con Vite y uso de formatos web modernos (WebP).