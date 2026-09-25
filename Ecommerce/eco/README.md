# Velune

Storefront for Velune, a static ecommerce site covering shoes, clothing, beauty, electronics, and home. Shoppers can browse products, manage a cart and wishlist, and review orders in the browser.

The interface is built with React, TypeScript, Tailwind CSS, and Vite. Catalogue and page content are maintained in `src/data.ts`. The project does not use a server. Cart, wishlist, account, and order details stay in the visitor’s browser through `localStorage`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The build writes the deployable site to `dist/`. Netlify settings in `netlify.toml` use that directory and send client routes such as `/shop`, `/cart`, and `/product/:id` to `index.html`. Node 22 is the intended runtime.
