# Meridian Security Portal

Site vitrine de démonstration (Vite + React + TypeScript + Tailwind CSS 3 + React Router + Lucide). Frontend uniquement, données fictives locales.
Ce site n'est pas le site officiel d'Interpol.

## Lancer le projet

    npm install
    npm run dev

Puis ouvrir http://localhost:5173. Pour vérifier la production : `npm run build`.

## Structure

- `src/data/` : profils, articles et missions fictifs (types TypeScript inclus)
- `src/pages/` : pages (Notices = recherche, filtres, pagination ; ProfileDetail = `/notices/:id`)
- `src/components/` : Navbar, Footer, Hero, cartes, SearchBar, illustrations SVG locales
