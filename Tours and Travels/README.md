# Himalaya Crest

Travel website for Himalaya Crest, a Kathmandu agency presenting Nepal journeys, destinations, packages, and a journal. Visitors can review itineraries and send enquiries from the site.

The interface is built with React, React Router, and Tailwind CSS. Destinations, packages, and company details are maintained in `src/data`. The project does not use a server. Journey information and enquiry drafts stay in the browser.

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

The build writes the deployable site to `dist/`. Netlify settings in `netlify.toml` use that directory and send client routes such as `/packages` and `/tours/everest-base-camp` to `index.html`.
