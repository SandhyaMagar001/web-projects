# Himalayan Herald

News website for Himalayan Herald Pvt. Ltd., a Kathmandu publisher covering Nepal in English and Nepali. The site presents sections, stories, and category pages as a static front end.

The interface is built with React, React Router, Tailwind CSS, and Vite. Stories and interface copy are maintained in `src/data`. The project does not use a server or external news API. Published articles are local sample content.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The build writes the deployable site to `dist/`. Netlify settings publish that directory and send story and category routes, including `/news/...` and `/category/...`, to `index.html`.
