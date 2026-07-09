# G Pen Brand Assets Portal

The official self-serve brand & product asset portal for **G Pen**, live at
**[assets.gpen.com](https://assets.gpen.com)**. Retailers and press browse products and
download photography, lifestyle imagery, logos, video, spec sheets, and in-store
marketing materials — organized by product, straight from Dropbox.

It's a **plain static site** (HTML + CSS + vanilla JS, no build step, no framework) that
reads a Dropbox-synced data file. Anyone can open it, edit it, and host it anywhere.

---

## Run it locally

No tooling required — serve the folder with any static server:

```bash
python3 -m http.server 4599
# then open http://localhost:4599
```

---

## Project layout

```
index.html                 Page shell (nav, hero, sections, lightbox) + <head> meta
assets/css/styles.css      All styling — CSS variables at the top to retheme
assets/js/app.js           All behavior (one IIFE): rendering, search, gallery,
                           packaging, SKU details, colorways, training/certificate,
                           downloads (per-file / folder / selected / all)
assets/data/assets.js      Hand-authored content: PORTAL_BRANDS, PORTAL_PRODUCTS,
                           PRODUCT_SKU, PRODUCT_INFO, PRODUCT_VIDEOS, PRODUCT_TRAINING,
                           PORTAL_COLORWAYS, in-store materials…
assets/data/synced.js      AUTO-GENERATED — do not hand-edit. A window.PORTAL_SYNCED
                           overlay of each product's Dropbox folders → files, with
                           per-file + per-folder download links and local thumbnails
assets/img/                Brandmark PNGs (gpen-g-black.png / -white.png), favicon
scripts/dropbox-sync.mjs   The sync bot (Node, no deps)
.github/workflows/         dropbox-sync.yml (hourly + manual) and deploy-pages.yml
robots.txt, sitemap.xml,
404.html, apple-touch-icon.png, CNAME
```

## Editing content

Open **`assets/data/assets.js`** — it's heavily commented. Product copy, SKU details,
videos, colorways, and training modules all live there. Cache-bust after edits by
bumping the `?v=` token on the three script/style tags in `index.html`.

## How assets sync from Dropbox

`scripts/dropbox-sync.mjs` runs in GitHub Actions (`dropbox-sync.yml`, hourly + manual
dispatch). For each product it lists the product's Dropbox folder, generates thumbnails
(ImageMagick / ffmpeg / poppler), mints **per-file and per-folder share links** (so
"Download all / folder / selected" return real `.zip`s), and writes `assets/data/synced.js`.

Dropbox credentials live **only** in GitHub Actions repo secrets — never in the repo:
`DROPBOX_APP_KEY`, `DROPBOX_APP_SECRET`, `DROPBOX_REFRESH_TOKEN`
(scopes: `files.metadata.read`, `files.content.read`, `sharing.write`).

## Deploy

GitHub Pages, built by `.github/workflows/deploy-pages.yml`, served at the custom domain
in `CNAME` (`assets.gpen.com`). Any push to `main` — and each Dropbox-sync commit —
publishes automatically.
