# AP Appliance Service — React + TypeScript (Vite)

All images are included under `public/` and referenced via `import.meta.env.BASE_URL` to avoid broken paths on Cloudflare.

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Build output: `dist/`

## Deploy to Cloudflare Workers (Wrangler)
```bash
npm run build
npx wrangler deploy
```
This uses `wrangler.jsonc` + an assets binding to serve `dist/` and provides SPA fallback.

## Deploy to Cloudflare Pages
- Build command: `npm run build`
- Output directory: `dist`
- SPA fallback is included via `public/_redirects`


## Images
Brand and service images are custom-made PNG graphics included in `public/brands` and `public/services`.
