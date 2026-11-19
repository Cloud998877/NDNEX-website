# NDNEX website

Company website for NDNEX (www.ndnex.com), built with Vite, React, TypeScript and Tailwind CSS, and deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build does three things:

1. `vite build` bundles the site into `dist/`.
2. `vite build --ssr entry-server.tsx` makes a server-side version of the app.
3. `node prerender.mjs` writes a static HTML file for each page (`dist/about/index.html`, and so on), with its own title, description and canonical URL, so search engines can read every page.

## Adding a page

1. Add the route in `App.tsx`.
2. Add the same path, with its title and description, to the `routes` list in `prerender.mjs`.
3. Add the URL to `public/sitemap.xml`.

## Notes

- Pages use clean URLs (`/about`, not `/#/about`). Old `/#/...` links are redirected in the browser by `index.tsx`.
- Security headers and URL rules live in `vercel.json`.
