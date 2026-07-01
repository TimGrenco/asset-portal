# Brand Asset Portal — G Pen & Stündenglass

A fast, editorial, **black-and-white** asset portal for wholesale buyers, press, and
influencers. One portal, two brands, with a simple toggle (Both / G Pen / Stündenglass),
search, type filters, favorites, a spec-sheet ("One Sheet") callout per product, a
lightbox preview, and download hooks.

It's a **plain static site** — HTML + CSS + vanilla JS, no build step, no framework.
That means anyone (or any AI assistant) can open it, edit it, and host it anywhere.

---

## 1. Run it locally

No tooling required. Either:

- Double-click `index.html`, **or**
- Serve it (recommended, avoids any browser file restrictions):

```bash
cd asset-portal
python3 -m http.server 8000
# then open http://localhost:8000
```

---

## 2. Put it online (shareable link)

### Option A — GitHub Pages (free, simple)
1. Create a new GitHub repo and upload this whole `asset-portal` folder's contents.
2. Repo → **Settings → Pages** → Source: `main` branch, `/root`.
3. Your portal goes live at `https://<user>.github.io/<repo>/`.
4. To get a clean URL like `assets.gpen.com`: in **Settings → Pages → Custom domain**
   enter `assets.gpen.com`, then add a `CNAME` DNS record at your domain pointing to
   `<user>.github.io`. (A `CNAME` file is already included as a template — edit it.)

### Option B — Netlify / Cloudflare Pages (also free)
Drag-and-drop the folder, or connect the repo. Both give instant HTTPS + custom domains.

> Note on `gpen.com/assets` (a *path*, not a subdomain): Shopify Plus hosts your apex
> domain and won't proxy a sub-path to an external host. The clean options are a
> **subdomain** (`assets.gpen.com`, easiest) or a **Cloudflare reverse proxy** in front
> of the domain. See the "Hosting" notes you were given for the trade-offs.

---

## 3. Edit the content (the only file most people touch)

Open **`assets/data/assets.js`**. It's heavily commented. To add a product, copy an
existing `{ ... }` block and change the fields:

```js
{
  name: "Dash II",            // shown in the UI
  brand: "gpen",              // "gpen" or "stundenglass"
  category: "Dry Herb",       // small label under the name
  cover: "https://…/img.jpg", // tile image (any https URL)
  added: "2026-06-02",        // drives the NEW badge + Latest ordering
  oneSheet: "https://…/spec.pdf", // or "" if none
  folders: { … }              // the asset folders (see file for the helper)
}
```

- **NEW badge / Latest section** are automatic from the `added` date
  (window is `newWindowDays` in `PORTAL_CONFIG`, default 30).
- A **logo-only** folder (no product device) uses `isLogo: true`.
- Global settings (title, tagline, intro, request email) live in `PORTAL_CONFIG`
  at the top of the same file.

---

## 4. Where the real files come from (current vs. live)

**Right now (prototype):** product cover images are pulled from the G Pen Shopify CDN,
and the *files inside folders* are placeholders. Stündenglass uses placeholders because
that store isn't connected yet.

**For the live portal we recommend:**
- **Dropbox** holds the real downloadable assets (lifestyle, video, logos, one-sheets,
  raw files). It auto-syncs so the portal stays current.
- **Shopify** (optional) supplies polished product cover images.

The download/preview functions in `assets/js/app.js` (`downloadOne`, `downloadAll`,
`renderGallery` thumbnails) are written as **clear hooks**. To go live, point them at a
small backend that lists a product's Dropbox folder and returns file links. Search the
file for `Real build:` comments to find the exact spots.

### Suggested live architecture
```
Dropbox (assets)  ──►  small backend (Cloudflare Worker / Pages Function)
                         • lists folders, generates temp links, builds an index
Shopify (covers)  ──►  optional cover images
                         │
Static site (this) ◄────┘  reads the index, renders the gallery
Hosted at assets.gpen.com (GitHub Pages / Cloudflare Pages)
```
The backend holds the Dropbox token server-side (never in this front-end code).

---

## 5. For teammates extending this with Claude

This codebase is intentionally simple so you and Claude can keep building. Good prompts:

- "Add a product detail field for dimensions and show it on the detail page."
- "Wire `downloadAll` to a Cloudflare Worker that zips a Dropbox folder — here's my endpoint."
- "Add a 'copy share link' button to each asset."
- "Add password gating for the whole portal."
- "Connect the Stündenglass Shopify store and replace the placeholder covers."

Files:
- `index.html` — page shell (nav, hero, sections, drawer, lightbox)
- `assets/css/styles.css` — all styling (CSS variables at top to retheme)
- `assets/js/app.js` — all behavior (rendering, toggle, search, favorites, lightbox)
- `assets/data/assets.js` — **content** (brands + products + files)

---

## Feature checklist (built)
- [x] One portal, two brands, simple Both / G Pen / Stündenglass toggle (defaults to Both)
- [x] Editorial black-and-white design, responsive desktop + mobile
- [x] Big centered hero headline + prominent search
- [x] Search across name, brand, category, format
- [x] Type filters (Product / Lifestyle / Logos / Video / Misc)
- [x] "New & recently added" section + automatic NEW badges
- [x] Product → folder drill-down with thumbnail gallery
- [x] Spec sheet ("One Sheet") callout per product
- [x] Favorites with browser persistence + slide-out drawer
- [x] Lightbox image preview
- [x] Per-file + "Download all" hooks (stubbed for static demo)
- [x] "Request an asset" mailto for missing items
- [x] Data-driven — non-coders edit one file

## Not built (intentionally out of scope for an *asset* portal)
- Live inventory / ordering / ERP sync (that's a B2B commerce platform, not a DAM)
- User accounts / per-partner permissions (can be added with gating later)
