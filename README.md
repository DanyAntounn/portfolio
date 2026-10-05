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
- **Project images:** put real screenshots in `public/images/` and set each project's `image` to `/images/your-image.png`. The site resolves these paths on GitHub Pages project URLs as well. No project screenshot is fabricated. Until you add them, a designed placeholder appears automatically.
- **Skills, experience, certifications:** edit the corresponding arrays in `src/data.js`.
- **SEO and site title:** edit the `<title>` and metadata in `index.html`.
- **Sitemap / robots:** update `sitemap.xml`, `robots.txt`, and the Open Graph URLs in `index.html` if you use a domain other than the current GitHub Pages address.

Project technologies are placeholders where source repositories were not provided. Confirm them against the original project files before publishing.

## Deploy

This is a static website and can be hosted free on GitHub Pages, Vercel, or another static host. No paid server or build dependency is needed.

### Firebase Hosting

The included `firebase.json` publishes the production build from `dist/`. Create a **separate Firebase project for this portfolio**; do not select the `onlinelibrary-c33f9` project used by the Online Library Catalog, because deploying to its default Hosting site could replace that app.

1. Install the Firebase CLI (`npm install -g firebase-tools`) and sign in with `firebase login`.
2. From this repository, run `firebase use --add` and select the new portfolio Firebase project.
3. Build and deploy with `npm run build` followed by `firebase deploy --only hosting`.

Firebase Hosting's current no-cost quota includes 10 GB of Hosting storage and 10 GB/month of data transfer. If a project exceeds the free data-transfer limit, the site may be disabled until the next monthly cycle unless the project is upgraded to Blaze. See [Firebase Hosting quotas and pricing](https://firebase.google.com/docs/hosting/usage-quotas-pricing). Update the canonical and Open Graph URLs in `index.html`, plus `robots.txt` and `sitemap.xml`, after choosing the final Firebase site URL or custom domain.

### GitHub Pages

1. Push this repository to GitHub.
2. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
3. GitHub Pages will publish the site at `https://danyantounn.github.io/portfolio/`. Asset URLs are project-relative so they work under this repository subpath without extra changes.

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
