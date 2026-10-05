# Dany Antoun — Portfolio

A lightweight, responsive personal portfolio built with plain HTML, CSS, and JavaScript. It is a static site: there is no application framework, runtime dependency, or backend service.

## Requirements

- Node.js 18 or newer (only needed for the included local server and build scripts)
- No npm packages are required

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by the command (normally `http://localhost:5173`). `npm install` is included as the standard setup step; this project intentionally has no third-party npm dependencies.

## Build and preview

```sh
npm run build
npm run preview
```

The build copies the static site into `dist/`. The preview server serves that directory at `http://localhost:4173`.

## Customize your information

- **Email and social URLs:** edit `siteConfig` in `src/data.js`. Keep unknown URLs empty. Replace `YOUR_EMAIL_HERE` with the real email address when ready.
- **Projects:** add/edit entries in the `projects` array in `src/data.js`. The Projects section renders entries automatically; no component changes are needed. Supported fields are `title`, `description`, `category`, `technologies`, `image`, `liveUrl`, `githubUrl`, `featured`, `status`, `imageAlt`, and optional `features`. Use empty URL strings when a URL is not known; buttons remain hidden.
- **Project images:** put real screenshots in `public/images/` and set each project's `image` to `/images/your-image.png`. No project screenshot is fabricated. Until you add them, a designed placeholder appears automatically.
- **Skills, experience, certifications:** edit the corresponding arrays in `src/data.js`.
- **SEO and site title:** edit the `<title>` and metadata in `index.html`.
- **Sitemap / robots:** replace `YOUR_DOMAIN_HERE` in `sitemap.xml` and `robots.txt` with the deployed domain.

Project technologies are placeholders where source repositories were not provided. Confirm them against the original project files before publishing.

## Deploy

This is a static website and can be hosted free on GitHub Pages, Vercel, or another static host. No paid server or build dependency is needed.

### GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, enable **Pages** and deploy from the `main` branch root. Since `index.html` is at the root, no build step is required.
3. For a project site under a repository subpath, change root-relative paths (`/src/...`, `/images/...`, `/favicon.svg`) to paths that include that repository base, or configure a custom domain.

### Vercel

1. Import the repository in Vercel.
2. Select **Other** as the framework preset.
3. Set build command to `npm run build` and output directory to `dist`.
4. Deploy. The `dist` folder is the complete static site.

## Project structure

```text
.
├── index.html
├── public/
│   ├── favicon.svg
│   └── images/
│       └── og-cover.svg
├── scripts/
│   ├── build.mjs
│   └── server.mjs
├── src/
│   ├── data.js
│   ├── main.js
│   └── styles.css
├── package.json
├── robots.txt
└── sitemap.xml
```
