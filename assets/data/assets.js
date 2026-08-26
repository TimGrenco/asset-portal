/* =============================================================================
   ASSET PORTAL — DATA FILE
   -----------------------------------------------------------------------------
   This is the ONE file most people need to edit. No coding experience required.

   HOW IT WORKS
   - The portal is organized as:  BRAND  ->  PRODUCT  ->  ASSET FOLDERS
   - Each product mirrors your Dropbox structure (E-Comm Renders, Lifestyle,
     Logos, Video, Misc) plus a "One Sheet" spec PDF.
   - To add a product: copy an existing { ... } block, paste it, change the
     fields. Mind the commas between blocks.

   FIELD GUIDE (per product)
     name      : Product name shown in the UI (e.g. "Dash II")
     brand     : "gpen" (brand key below)
     category  : Short label shown under the name (e.g. "Dry Herb")
     cover     : Image URL for the product tile (Shopify CDN or any https URL)
     added     : ISO date the assets were added/updated "YYYY-MM-DD"
                 (drives the NEW badge + "Latest additions" ordering)
     oneSheet  : URL to the spec-sheet PDF (or "" if none yet)
     folders   : The asset folders. Each holds an array of files.
                 A file is { name, type, url, format }
                   type   : "image" | "video" | "vector" | "pdf"
                   format : "JPG" | "PNG" | "SVG" | "MP4" | "PDF" ...
                   url    : where the file lives (Dropbox direct link, CDN, etc.)

   NOTE ON IMAGES: cover/url can point at your Shopify CDN for now. For the live
   site we recommend pointing them at Dropbox/your own storage (see README).
   ========================================================================== */

window.PORTAL_CONFIG = {
  title: "G Pen Brand Assets Portal",
  tagline: "Everything you need, in one place.",
  intro:
    "The official asset portal for G Pen. Product photography, lifestyle imagery, logos, video and spec sheets — organized by product, ready to download.",
  requestEmail: "marketing@grencoscience.com", // "Request an asset" mailto target
  orderEmail: "marketing@grencoscience.com",   // marketing-material order requests
  locatorEmail: "marketing@grencoscience.com", // store-locator listing requests
  // Shown on each product page. Edit freely (or set to "" to hide).
  usageNote:
    "These assets are provided for approved partner, press, and retail use. Please don't alter logos or product imagery. Need something specific or a different format? Use “Request an asset.”",
};

/* Brand essentials (colors + fonts) power the "Brand essentials" panel.
   NOTE: these values are PLACEHOLDERS pulled from gpen.com
   to get the section looking right — replace with the official brand-guide
   values when they're provided. Colors: add { name, hex }. Fonts: add
   { name, role, stack }. `logoProduct` is the product name to deep-link the
   "Download logos" button to. */
window.PORTAL_BRANDS = {
  gpen: {
    key: "gpen", name: "G Pen", wordmark: "G PEN",
    logoProduct: "G Pen Logos",
    colors: [
      { name: "Ink", hex: "#111111" },
      { name: "Paper", hex: "#FFFFFF" },
      { name: "G Pen Gold", hex: "#FEC870" },
      { name: "Ember", hex: "#D75D43" },
      { name: "Stone", hex: "#E8E8E1" },
    ],
    fonts: [
      { name: "Kanit", role: "Display / Headlines", stack: "'Kanit', sans-serif" },
      { name: "Lato", role: "Body", stack: "'Lato', sans-serif" },
    ],
    // Official accounts (scraped from gpen.com — verify before launch).
    social: [
      { network: "Instagram", handle: "@GPen", url: "https://www.instagram.com/GPen/" },
      { network: "X", handle: "@gpen", url: "https://x.com/gpen" },
      { network: "Facebook", handle: "Grenco Science", url: "https://www.facebook.com/GrencoScience1" },
      { network: "YouTube", handle: "Grenco Science", url: "https://www.youtube.com/user/GrencoScience" },
    ],
    faqUrl: "https://www.gpen.com/pages/faq",
    warrantyUrl: "https://www.gpen.com/pages/warranty",
  },
};

/* CURRENT PRODUCT LINEUP (per brand, in display order).
   Products listed here show in the main "Current products" grid in THIS order.
   Any other (non-logo) product for that brand falls into "Additional Products"
   (legacy items we no longer sell but keep available). Edit these lists to
   promote/retire a product — names must match the product `name` exactly. */
window.PORTAL_CURRENT = {
  gpen: [
    "Dash II",
    "Dash+",
    "Slim 3-Piece Grinder",
    "Melt Hot Knife",
    "Hydout",
    "510 Original",
    "Hydout — Retro",
    "510 Original — Retro",
  ],
};


var CDN = "https://cdn.shopify.com/s/files/1/0185/1576/files/";
var CDNP = "https://cdn.shopify.com/s/files/1/0185/1576/products/";



window.PORTAL_PRODUCTS = [
  /* ---------------------------------- G PEN -------------------------------- */
  {
    name: "Dash II", brand: "gpen", category: "Dry Herb", type: "Dry Herb Vaporizer",
    cover: CDN + "Dash2_thumb_01.png?v=1782934099",
    added: "2026-06-02",
    newBadge: true,   // force the "New" flag on the home card (past the 30-day auto window)
    oneSheet: "#",
    // Real Dropbox shared folder for Dash II (TEST). "Download all" pulls this
    // folder as a .zip. Full per-file sync comes via the Dropbox API job.
    dropbox: "https://www.dropbox.com/scl/fo/5hz9ej94k16g5fdv87gtj/AKc2Ts1QEgWfRugLZ_GoFvM?rlkey=9ueqe3ucvu30dgp6hlgixclpq&dl=0",
    folders: {},   // real folders + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "510 Original — Retro", brand: "gpen", category: "510 Battery", type: "510 Cartridge Battery",
    cover: CDN + "Purple510O_thumb_01.png?v=1779898092",
    added: "2026-05-19", newBadge: "purple",
    oneSheet: "#",
    folders: {},   // real folders + thumbnails come from synced.js (Dropbox sync)
  },
  {
    // Micro II — PRE-LAUNCH. `unlisted: true` keeps it out of the home grid, the
    // Additional Products page, product search and file search; it is reachable
    // only by its direct URL (#gpen/micro-ii) so the page can be reviewed
    // internally before launch. Remove the flag and add it to PORTAL_CURRENT to
    // publish. Awaiting: Dropbox folder, cover image, marketing copy, MSRP.
    // Category/type confirmed by the owner 2026-08-19: Concentrate Vaporizer.
    name: "Micro II", brand: "gpen", category: "Concentrate", type: "Concentrate Vaporizer",
    unlisted: true,
    added: "2026-08-19",
    oneSheet: "#",
    // Transparent PNG built from the synced "Micro 2-front" shot (background
    // removed by edge flood-fill, preserving the lit display and the G logo),
    // so the tile matches the other products instead of sitting on white.
    cover: "assets/img/micro-ii.png?v=20260826d",
    // Durable rlkey link (expiring st= token stripped).
    dropbox: "https://www.dropbox.com/scl/fo/spharop9yvc7bnk5g3w4z/AKUC7ALBupRa8e039bvfNr4?rlkey=5560kr7brds1hco7tgeiafsbx&dl=0",
    folders: {},   // real files + thumbnails come from synced.js (Dropbox sync)
  },
  {
    // Grinder — category "Dry Herb" so familyOf() files it under the Dry Herb
    // Accessories panel alongside the Dash II / Dash+ it's meant to pair with.
    name: "Slim 3-Piece Grinder", brand: "gpen", category: "Dry Herb", type: "Grinder", label: "Grinder",
    // Transparent PNG so the tile matches the other products (the Shopify shot is
    // a JPEG on solid white, which shows as a white square inside the grey card).
    // Background removed by edge flood-fill, which preserves the white G on the lid.
    cover: "assets/img/grinder-slim-3pc.png?v=20260810a",
    added: "2026-08-10",
    newBadge: true,
    oneSheet: "#",
    // Durable rlkey link (the expiring st= token is deliberately stripped).
    dropbox: "https://www.dropbox.com/scl/fo/8lfqlq0faeml5pqnvzoys/ADcfy5cYRTh2lHbK13o_I60?rlkey=4jjwd6s48mon6tcpis5uass3x&dl=0",
    folders: {},   // real files + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "Melt Hot Knife", brand: "gpen", category: "Accessory", type: "Electric Hot Knife",
    cover: CDN + "Melt_thumbA.png?v=1772813232",
    added: "2026-05-24",
    oneSheet: "#",
    folders: {},   // real folders + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "Connect", brand: "gpen", category: "Concentrate",
    cover: CDN + "connect_vape_thumb_797e6d48-f3e6-44f4-8bc8-da33a02b129c.png?v=1729247667",
    added: "2026-04-27",
    oneSheet: "#",
    // Real Dropbox folder (durable rlkey link, no expiring st= token). "Download
    // all" pulls the whole folder as a .zip. Folders mirror the Dropbox names.
    dropbox: "https://www.dropbox.com/scl/fo/108b34jrd9bxryx34qil6/AHQA1sD2FzvZM4XjSUvv6E8?rlkey=rjxv6cytizy3d4ffk7i5f26dq&dl=0",
    folders: {},   // real files + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "510 Original", brand: "gpen", category: "510 Battery", type: "510 Cartridge Battery",
    cover: CDN + "510_on_white_01.png?v=1767045174",
    added: "2026-01-15",
    oneSheet: "#",
    folders: {},   // real folders + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "Hydout", brand: "gpen", category: "510 Battery", type: "510 Cartridge Battery",
    cover: CDN + "Hydout_vape_01.png?v=1762467078",
    added: "2025-12-10",
    oneSheet: "#",
    folders: {},   // real folders + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "Hydout — Retro", brand: "gpen", category: "510 Battery", type: "510 Cartridge Battery",
    cover: CDN + "Green_hydout_01_4b72ac42-025b-430e-937e-244203f17267.png?v=1765490119",
    added: "2025-12-03",
    oneSheet: "#",
    folders: {},   // real folders + thumbnails come from synced.js (Dropbox sync)
  },
  {
    /* Cover pulled from gpen.com/products/g-pen-dash-plus-vaporizer.
       Asset counts are placeholders — update when real files are available. */
    name: "Dash+", brand: "gpen", category: "Dry Herb", type: "Dry Herb Vaporizer",
    cover: CDN + "dash__vape_thumb_5e14bcb4-a63a-4cc3-8078-e57fc572e4da.png?v=1729247649",
    added: "2026-04-15",
    oneSheet: "#",
    folders: {},   // real folders + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "Hyer", brand: "gpen", category: "E-Nail",
    cover: CDN + "hyer_vape_thumb_1b7bd3f0-7aea-4fcb-b900-cbb5a43dc3cf.png?v=1729247638",
    added: "2025-11-20",
    oneSheet: "#",
    dropbox: "https://www.dropbox.com/scl/fo/a6lmzsjiawgjeiwklvho0/h?rlkey=vhqm2y94vgv2kvakwvbl39fvq&dl=0",
    folders: {},   // real files + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "Roam", brand: "gpen", category: "E-Rig",
    cover: CDN + "LemonnadeRoam_thumb_01.png?v=1768493533",
    added: "2026-03-30",
    oneSheet: "#",
    dropbox: "https://www.dropbox.com/scl/fo/hhscck78va88q3vriroup/AMtRY-P0vRv-cS1tHGklYVo?rlkey=hvjp5u49etu2j078wvl2e91bg&dl=0",
    folders: {},   // real files + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "Dash", brand: "gpen", category: "Dry Herb",
    cover: CDN + "GD_dash_vape_thumb_9a82df65-c9a7-4128-8767-e979e2f46efc.png?v=1729247627",
    added: "2025-09-01",
    oneSheet: "#",
    dropbox: "https://www.dropbox.com/scl/fo/o9sllao2v19zj39rge8yt/ALWHLAjR4-DxIJ5TaRfYw4Q?rlkey=z82vipxgfln478zz40p9lwn1s&dl=0",
    folders: {},   // real files + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "Elite II", brand: "gpen", category: "Dry Herb",
    cover: CDN + "elite_II_vape_thumb_40c473ea-29da-49bf-9b94-37eb591e46ed.png?v=1729247643",
    added: "2025-10-12",
    oneSheet: "#",
    dropbox: "https://www.dropbox.com/scl/fo/4i3r2lru6bt3xnnx0nhh2/APkJPwAV7QjeMGe6Rs-WSZg?rlkey=bn0ejx8ho4t0m8ea7jztlx7ni&dl=0",
    folders: {},   // real files + thumbnails come from synced.js (Dropbox sync)
  },
  {
    name: "Micro+", brand: "gpen", category: "Concentrate", type: "Concentrate Vaporizer",
    cover: CDN + "micro__vape_thumb_77792dea-cdec-4453-9a99-e051615123c2.png?v=1729247631",
    added: "2025-08-15",
    oneSheet: "#",
    dropbox: "https://www.dropbox.com/scl/fo/2428y3p4kiyvgm9bj55x8/AECLTfW3qJHVAAAdzDuI8p8?rlkey=y343whyn7o9kj7p8t5mfwo7sx&dl=0",
    folders: {},   // real files + thumbnails come from synced.js (Dropbox sync)
  },
  {
    /* A pure brand-asset folder (no product) — set isLogo:true */
    name: "G Pen Logos", brand: "gpen", category: "Brand", isLogo: true,
    cover: null,
    added: "2026-06-03",
    oneSheet: "",
    folders: {
      "Logos": (function () {
        var arr = []; for (var i = 1; i <= 16; i++) arr.push({ name: "gpen_logo_" + i, type: "vector", format: i % 2 ? "SVG" : "PNG", url: "#" }); return arr;
      })(),
    },
  },

];

/* =============================================================================
   PUBLISHED YOUTUBE VIDEOS  (scraped from the official channels — verify before
   launch). Each product below gets its "Video" folder replaced with real
   YouTube links: clicking the thumbnail opens the video, and the copy-link /
   open buttons share the watch URL. To add a video: drop its 11-char id and a
   title under the matching product name. id is from youtube.com/watch?v=<id>.
   ========================================================================== */
var PRODUCT_VIDEOS = {
  // ---- G Pen ----
  "Dash II": [
    // Real Dropbox MP4s — playable in-browser + downloadable. thumbId reuses an
    // existing YouTube frame for the poster image.
    { title: "How to Use: G Pen Dash II", thumbId: "sqCdU8Kn5ek", youtube: "sqCdU8Kn5ek",
      mp4: "https://www.dropbox.com/scl/fi/75n3wv24t1f56dxnyvi49/G-Pen-Dash-2-Tutorial.mp4?rlkey=496dlhqzbmrhr01m882ar2sth&dl=0" },
    { title: "How to Clean: Dash II", thumbId: "wBOzqPxDhd8", youtube: "wBOzqPxDhd8",
      mp4: "https://www.dropbox.com/scl/fi/yzqxtivxnhbdfr9g7jak9/How-to-Clean-Your-Dash-II.mp4?rlkey=cg2m8xjg7fsxz0on2rcy4l4iq&dl=0" },
  ],
  "Dash": [
    ["yd3DBUOZJ-0", "Grateful Dead x G Pen Dash"],
  ],
  "Connect": [
    ["NaBQ9rE5zTY", "G Pen Connect + Your Favorite Glass"],
    ["oNMAJFifIxs", "Connect to Favorite Glass"],
  ],
  "Melt Hot Knife": [
    ["nEDYSJqHk5o", "A Closer Look at the Melt"],
    ["mgErvUJHYQU", "Melt — The Judge's Favorite"],
  ],
  "Roam": [
    ["l6QSb4Obox4", "G Pen x Lemonnade Roam"],
  ],
  // How-to-use / how-to-clean tutorials pulled from the gpen.com product pages
  // (Vimeo). Placeholders until Dropbox MP4s arrive so they can be downloaded.
  "510 Original": [
    // Real Dropbox MP4s — play in-browser + downloadable; Vimeo poster thumbs and
    // (use) YouTube link retained. Same videos used for 510 Original — Retro below.
    { title: "How to Use: G Pen 510 Original", youtube: "_SF_4zkbZdI",
      thumb: "https://i.vimeocdn.com/video/2099496548-9f356818ba8ca793122dcf45c0911332ea2271f63bb31116c6e0da05b66d0b83-d_640?region=us",
      mp4: "https://www.dropbox.com/scl/fi/i5ydk989oftm54y5n8hty/Bianca-510-How-To-Horizontal.mp4?rlkey=gpkapx6dynv1utt4yya5ksoc9&dl=0" },
    { title: "How to Clean: G Pen 510 Original", youtube: "4aMKTqSw0bQ",
      thumb: "https://i.vimeocdn.com/video/2165544391-c70c4c689b5becbd372bd32b6bf431be5c8442a4b1e6875cf85ed96e636747b5-d_640?region=us",
      mp4: "https://www.dropbox.com/scl/fi/xshnmbfruvrc021r6ykqs/510-Original-Cleaning.mp4?rlkey=om0u51vawgzdr4y13rqn3hnfc&dl=0" },
  ],
  "510 Original — Retro": [
    // Same how-to videos as 510 Original (Dropbox MP4s: play + download; use has a YouTube link).
    { title: "How to Use: G Pen 510 Original", youtube: "_SF_4zkbZdI",
      thumb: "https://i.vimeocdn.com/video/2099496548-9f356818ba8ca793122dcf45c0911332ea2271f63bb31116c6e0da05b66d0b83-d_640?region=us",
      mp4: "https://www.dropbox.com/scl/fi/i5ydk989oftm54y5n8hty/Bianca-510-How-To-Horizontal.mp4?rlkey=gpkapx6dynv1utt4yya5ksoc9&dl=0" },
    { title: "How to Clean: G Pen 510 Original", youtube: "4aMKTqSw0bQ",
      thumb: "https://i.vimeocdn.com/video/2165544391-c70c4c689b5becbd372bd32b6bf431be5c8442a4b1e6875cf85ed96e636747b5-d_640?region=us",
      mp4: "https://www.dropbox.com/scl/fi/xshnmbfruvrc021r6ykqs/510-Original-Cleaning.mp4?rlkey=om0u51vawgzdr4y13rqn3hnfc&dl=0" },
  ],
  "Hydout": [
    // Real Dropbox MP4s — play in-browser + downloadable; Vimeo poster thumbs and
    // YouTube links retained. Same videos used for Hydout — Retro below.
    { title: "How to Use: G Pen Hydout", youtube: "WK3EXouKwGs",
      thumb: "https://i.vimeocdn.com/video/2042536830-ad33a7ce448923a860282dcd9a0acade12fd6a9a18bf61116b68ea3954b4655c-d_640?region=us",
      mp4: "https://www.dropbox.com/scl/fi/b7g4fnjmk6vmyljiryjr6/Hydout-How-To-Use.mp4?rlkey=7i0r0r10hpanwjcfjrgi5foc6&dl=0" },
    { title: "How to Clean: G Pen Hydout", youtube: "e9oEXqNajh4",
      thumb: "https://i.vimeocdn.com/video/2042601767-c1a1df4b3c5e2f524fbdf5eab7af78886897186ff84062dcc1f01a49e8600c9a-d_640?region=us",
      mp4: "https://www.dropbox.com/scl/fi/j1uyo5dqf0nyjucqhjf6b/Hydout-How-To-Clean.mp4?rlkey=xw6pm2gur4rg5zv0effj8xi71&dl=0" },
  ],
  "Hydout — Retro": [
    // Same how-to videos as Hydout (Dropbox MP4s: play + download + YouTube links).
    { title: "How to Use: G Pen Hydout", youtube: "WK3EXouKwGs",
      thumb: "https://i.vimeocdn.com/video/2042536830-ad33a7ce448923a860282dcd9a0acade12fd6a9a18bf61116b68ea3954b4655c-d_640?region=us",
      mp4: "https://www.dropbox.com/scl/fi/b7g4fnjmk6vmyljiryjr6/Hydout-How-To-Use.mp4?rlkey=7i0r0r10hpanwjcfjrgi5foc6&dl=0" },
    { title: "How to Clean: G Pen Hydout", youtube: "e9oEXqNajh4",
      thumb: "https://i.vimeocdn.com/video/2042601767-c1a1df4b3c5e2f524fbdf5eab7af78886897186ff84062dcc1f01a49e8600c9a-d_640?region=us",
      mp4: "https://www.dropbox.com/scl/fi/j1uyo5dqf0nyjucqhjf6b/Hydout-How-To-Clean.mp4?rlkey=xw6pm2gur4rg5zv0effj8xi71&dl=0" },
  ],
  "Dash+": [
    // Real Dropbox MP4s — play in-browser + downloadable. Poster thumbs kept from
    // the Vimeo frames; YouTube link retained for the "Share on YouTube" button.
    { title: "How to Use: G Pen Dash+", youtube: "OzgMUHgEQao",
      thumb: "https://i.vimeocdn.com/video/1904791595-274b91c5aa41aa688212f27f78b73f010482b21cc15d9935379b05d73e63f851-d_640?region=us",
      mp4: "https://www.dropbox.com/scl/fi/dvo07vnvh54bdfpbrep59/Dash-Tutorial.mp4?rlkey=jkcrentnbxsfn4hruo6tf3ki4&dl=0" },
    { title: "How to Clean: G Pen Dash+", youtube: "vSAc8WPkUpY",
      thumb: "https://i.vimeocdn.com/video/1904792226-ecd92a819e1074a45154a6dff6b558c242612cf8c6a2bbd099d17f25a451d949-d_640?region=us",
      mp4: "https://www.dropbox.com/scl/fi/dl8q275uioal7vdu6phey/Dash-How-to-Clean.mp4?rlkey=10jzsg9wg7bvhk3skqgpxxy7d&dl=0" },
  ],
  "Hyer": [
    ["L5pIGbmtLU8", "Tyson 2.0 x G Pen Hyer"],
  ],
  // Official Grenco Science tutorials (YouTube).
  "Elite II": [
    ["ZLL3oAI-J2c", "How To Use Your G Pen Elite II"],
    ["X7j7LP8lfic", "Using the Elite II"],
  ],
  // Official how-to videos embedded on gpen.com (Vimeo).
  "Micro+": [
    { title: "How to Use: G Pen Micro+", vimeo: "989157950", hash: "0257076fb0",
      thumb: "https://i.vimeocdn.com/video/1904866054-bee3d5ede62b81c88132243572e6a765f55d169208730f7ff4c37cbe290332e6-d_640?region=us" },
    { title: "How to Clean: G Pen Micro+", vimeo: "989157776", hash: "76399b5d24",
      thumb: "https://i.vimeocdn.com/video/1904853742-511f7849a60a2167cb3436177b1aa86fe72ea269f2793c1341942626ad89f83b-d_640?region=us" },
  ],
};

// Inject videos into a product-level `videos` array (the educational video hub,
// SEPARATE from the downloadable file folders). The "Video" folder stays for
// real downloadable video files (placeholder for now).
window.PORTAL_PRODUCTS.forEach(function (p) {
  var vids = PRODUCT_VIDEOS[p.name];
  if (!vids || !vids.length) return;
  // `youtube` (a video id) on any form adds a "Share on YouTube" link.
  var yt = function (id) { return id ? "https://www.youtube.com/watch?v=" + id : null; };
  p.videos = vids.map(function (v) {
    if (Array.isArray(v)) {
      return {
        id: v[0], title: v[1],
        embed: "https://www.youtube.com/embed/" + v[0],
        url: "https://www.youtube.com/watch?v=" + v[0],
        youtube: "https://www.youtube.com/watch?v=" + v[0],
        thumb: "https://i.ytimg.com/vi/" + v[0] + "/hqdefault.jpg",
      };
    }
    // Vimeo form: {title, vimeo:"id", hash?:"privacyhash", thumb:"url", youtube?:"ytid"}
    // — plays in the modal via iframe (from gpen.com; download TBD via Dropbox).
    if (v.vimeo) {
      return {
        title: v.title, thumb: v.thumb || null,
        embed: "https://player.vimeo.com/video/" + v.vimeo + "?" + (v.hash ? "h=" + v.hash + "&" : "") + "title=0&byline=0&portrait=0&dnt=1",
        url: "https://vimeo.com/" + v.vimeo + (v.hash ? "/" + v.hash : ""),
        youtube: yt(v.youtube),
      };
    }
    // Object form: a real MP4 (Dropbox) that plays in-browser + downloads.
    return {
      title: v.title, mp4: v.mp4,
      thumb: v.thumbId ? "https://i.ytimg.com/vi/" + v.thumbId + "/hqdefault.jpg" : (v.thumb || null),
      youtube: yt(v.youtube),
    };
  });
});

/* =============================================================================
   PRODUCT INFO — official copy for each product hub (description, highlights,
   warranty, links). PLACEHOLDER content scraped from gpen.com
   — replace with official brand copy when provided. Per product:
     description : short overview paragraph
     highlights  : array of key selling points (bullets)
     warranty    : manufacturer warranty summary (string)
     productUrl  : link to the live product page ("View on site")
     faqUrl      : optional per-product FAQ link (falls back to the brand FAQ)
   ========================================================================== */
var PRODUCT_INFO = {
  // ---- G Pen ----
  "Dash II": {
    description: "The next evolution of the best-selling Dash — a pocket-sized dry herb vaporizer upgraded across the board with faster heat-up, improved airflow, and refined temperature control.",
    highlights: ["Pocket Sized Dry Herb Vaporizer", "30-second heat-up", "Precise temperature control", "OLED display", "Upgraded 0.4g ceramic chamber (easier loading)", "Pick Tool", "1,100mAh battery", "USB-C pass-through charging"],
    warranty: "6-month limited warranty, extended to 1 year if registered",
    manual: "https://cdn.shopify.com/s/files/1/0185/1576/files/20260309_GPen_Dash2_Manual.pdf?v=1773074467",
    faqUrl: "https://gpen.com/pages/dash-ii-faq",
    productUrl: "https://www.gpen.com/products/g-pen-dash-ii-vaporizer",
  },
  "Connect": {
    description: "A torchless concentrate vaporizer that turns any glass-on-glass water pipe into the ultimate dab rig — no torch or exposed nail required.",
    highlights: [
      "Torchless ceramic heating — no open flames",
      "5-second heat-up for immediate, dense vapor",
      "Includes 10mm, 14mm & 18mm glass adapters",
      "Patented reverse airflow for even vaporization",
      "Three temperature settings + extended draw mode",
    ],
    warranty: "1-year limited warranty",
    productUrl: "https://www.gpen.com/products/g-pen-connect",
  },
  "Roam": {
    description: "An all-in-one portable e-rig delivering water-filtered concentrate vaporization on the go, with a spill-resistant borosilicate glass hydrotube and full quartz tank.",
    highlights: ["Built-in borosilicate glass water filtration", "Full quartz tank", "Powerful 1,300mAh battery", "Self-contained, all-in-one e-rig"],
    warranty: "1-year limited warranty",
    productUrl: "https://www.gpen.com/products/g-pen-roam",
  },
  "Hyer": {
    description: "A dual-use portable e-nail for concentrates or dried herb that pairs with any glass-on-glass water piece, built around a full quartz heating element.",
    highlights: ["Dual-use: concentrates or dry herb", "Full quartz heating element", "Pairs with any glass-on-glass piece", "Portable e-nail design"],
    warranty: "2-year limited warranty",
    productUrl: "https://www.gpen.com/products/g-pen-hyer-vaporizer",
  },
  "510 Original": {
    description: "The smallest and most affordable G Pen battery ever, the 510 Original reimagines Grenco's very first 2012 battery with modern breath-activated, ultra-portable performance for 510 cartridges.",
    highlights: ["Smallest G Pen battery ever", "Breath activation — just inhale and go", "Three preset voltages (3.2 / 3.6 / 3.8V)", "1.8V 10-second pre-heat mode", "400mAh battery", "USB-C pass-through charging", "Digital display", "24 × 21.1 × 56.7 mm"],
    warranty: "Limited warranty — see policy",
    manual: "https://cdn.shopify.com/s/files/1/0185/1576/files/20251218_GPen_510_Original_Manual-2.pdf?v=1767623021",
    productUrl: "https://www.gpen.com/products/g-pen-510-original",
  },
  "510 Original — Retro": {
    description: "The Retro Collection edition of the 510 Original pairs a smooth, vintage translucent finish with the same breath-activated, ultra-portable 510 performance inspired by G Pen's original 2012 battery.",
    highlights: ["Translucent retro finish", "Breath activation", "Three preset voltages (3.2 / 3.6 / 3.8V)", "1.8V 10-second pre-heat mode", "400mAh battery", "USB-C pass-through charging", "Digital display", "24 × 21.1 × 56.7 mm"],
    warranty: "Limited warranty — see policy",
    manual: "https://cdn.shopify.com/s/files/1/0185/1576/files/20251218_GPen_510_Original_Manual-2.pdf?v=1767623021",
    productUrl: "https://www.gpen.com/products/g-pen-510-original-purple-translucent",
  },
  "Hydout": {
    description: "The G Pen Hydout is a compact, discreet 510 cartridge battery with a hidden magnetic mouthpiece cover, adjustable voltage, and LED display for smooth, customizable low-key sessions.",
    highlights: ["Hidden magnetic mouthpiece cover", "5 heat settings (2.4V – 3.8V)", "1.8V preheat mode", "400mAh rechargeable battery", "Bright LED display", "USB-C charging", "Fits 510 carts up to 2g", "90 × 37.5 × 18.5 mm"],
    warranty: "Limited warranty — see policy",
    manual: "https://cdn.shopify.com/s/files/1/0185/1576/files/20250528_GPen_Hydout_Manual.pdf?v=1749240232",
    productUrl: "https://www.gpen.com/products/g-pen-hydout",
  },
  "Hydout — Retro": {
    description: "The Retro edition of the G Pen Hydout brings a see-through, 90s-inspired translucent finish to the discreet 510 cartridge battery, adding breath activation alongside variable voltage and USB-C charging.",
    highlights: ["See-through 90s-inspired finish", "Breath activation", "Adjustable variable voltage", "1.8V preheat mode", "400mAh rechargeable battery", "USB-C pass-through charging", "Fits most 510 cartridges", "Hidden magnetic mouthpiece cover"],
    warranty: "Limited warranty — see policy",
    manual: "https://cdn.shopify.com/s/files/1/0185/1576/files/GPEN_Retro_Hydout_Manual.pdf?v=1765208154",
    productUrl: "https://www.gpen.com/products/g-pen-hydout-purple-translucent",
  },
  "Micro II": {
    // SKU data from G-Pen-SKU-Details-Template-7.xlsx (rows 9-10).
    // MSRP + every highlight below come from the official one-sheet in the
    // product's own Dropbox Documents folder ("G Pen - One Sheet - Micro II"),
    // which is the authority the Grinder's price was corrected against.
    description:
      "A compact concentrate vaporizer featuring three heat settings, adjustable airflow, a digital display, ceramic heating, and up to 120 sessions per charge.",
    // Long copy is the approved Shopify description — retailers copy it verbatim
    // into their own listings, so keep it in sync with gpen.com rather than
    // paraphrasing it here.
    fullDescription: [
      "The G Pen Micro II reimagines the iconic Micro concentrate vaporizer with more power, precision, and control in a compact, pocket-friendly design.",
      "Powered by a 1,250mAh rechargeable battery, the Micro II delivers up to 120 sessions per charge with USB-C fast charging in under 60 minutes. Three optimized temperature settings \u2014 LOW at approximately 295\u00B0F, MEDIUM at 340\u00B0F, and HIGH at 395\u00B0F \u2014 let you dial in your session for smooth flavor, balanced performance, or heavier vapor production.",
      "A premium 0.8\u03A9 ceramic atomizer provides consistent concentrate performance, while adjustable airflow gives you even more control over every draw. Choose between a 20-second Session Mode cycle for convenient automatic heating or Manual Heating for up to 25 seconds of direct control.",
      "The integrated digital display keeps battery, temperature, and heating status visible at a glance, while haptic feedback lets you know when the Micro II has reached temperature. A durable anodized aluminum body, simple one-button operation, pass-through charging, and 10-minute automatic shutoff make everyday use effortless.",
      "Use the included silicone mouthpiece for a compact setup, or expand the experience with the separately available G Pen Micro II Sidecar and 14mm Rig Adapter for water-filtered sessions at home or on the go.",
      "More than a decade after the original microG helped define portable concentrate vaporization, the Micro II brings the Micro experience into a new generation \u2014 all for $49.95.",
    ],
    highlights: [
      "Three heat settings \u2014 LOW ~295\u00B0F, MEDIUM ~340\u00B0F, HIGH ~395\u00B0F",
      "5-second heat-up",
      "Session Mode (20s) + Manual Heating (up to 25s)",
      "Adjustable airflow \u2014 open to restricted",
      "0.8\u03A9 ceramic atomizer",
      "Digital display \u2014 temperature, heating status, battery",
      "Haptic feedback at temperature",
      "1,250mAh battery \u2014 up to 120 sessions per charge",
      "USB-C fast charging \u2014 under 60 minutes",
      "Pass-through charging",
      "10-minute auto shutoff",
      "Anodized aluminum body",
      "Sidecar & 14mm Rig Adapter compatible (sold separately)",
      "Simple one-button operation",
    ],
    // Ordered [label, value] pairs from the approved spec sheet.
    // NOTE: "Device Dimensions/Weight" here are the bare unit (98.6\u00D724\u00D732 mm, 86 g).
    // The SKU table's "Product Dimensions" (105\u00D735\u00D728 mm) and "Unit Weight"
    // (0.1 kg) come from the ops spreadsheet and are the PACKAGED figures — the
    // two are labelled differently on purpose so they don't read as a conflict.
    specs: [
      ["Battery", "1,250mAh rechargeable"],
      ["Charging", "USB-C fast charging, under 60 minutes"],
      ["Pass-through charging", "Yes"],
      ["Display", "Digital black-and-white display"],
      ["Temperature \u2014 LOW", "~295\u00B0F"],
      ["Temperature \u2014 MEDIUM", "~340\u00B0F"],
      ["Temperature \u2014 HIGH", "~395\u00B0F"],
      ["Temperature tolerance", "\u00B115\u201330\u00B0F"],
      ["Heat-up time", "5 seconds"],
      ["Session Mode", "20-second heating cycle (including heat-up)"],
      ["Manual Heating", "Up to 25 seconds (including heat-up)"],
      ["Atomizer", "0.8\u03A9 ceramic"],
      ["Airflow", "Adjustable"],
      ["Haptic feedback", "Yes"],
      ["Battery life", "Up to 120 sessions per charge"],
      ["Auto shutoff", "10 minutes"],
      ["Body", "Anodized aluminum"],
      ["Mouthpiece", "Silicone"],
      ["Device Dimensions", "98.6 \u00D7 24 \u00D7 32 mm"],
      ["Device Weight", "86 g"],
    ],
    // Official FAQ copy, rendered inline by faqHTML(). Kept verbatim from the
    // approved source so retail staff and gpen.com never disagree.
    faqs: [
      ["What is the G Pen Micro II?", [
        "The G Pen Micro II is a portable concentrate vaporizer featuring a ceramic atomizer, three heat settings, adjustable airflow, automatic and manual heating modes, a digital display, haptic feedback, and a 1,250mAh rechargeable battery.",
      ]],
      ["What material is the G Pen Micro II designed for?", [
        "The G Pen Micro II is designed for use with concentrates.",
      ]],
      ["How much does the G Pen Micro II cost?", [
        "The G Pen Micro II retails for $49.95.",
      ]],
      ["What are the G Pen Micro II temperature settings?", [
        "The Micro II features three optimized temperature settings:",
        "\u2022 LOW \u2014 ~295\u00b0F",
        "\u2022 MEDIUM \u2014 ~340\u00b0F",
        "\u2022 HIGH \u2014 ~395\u00b0F",
        "Temperatures may vary by approximately \u00b115\u201330\u00b0F depending on how long the heating element is activated.",
      ]],
      ["How do I change the temperature?", [
        "With the Micro II powered on, click the button three times to cycle between the three temperature settings. One cloud represents LOW, two clouds represent MEDIUM, and three clouds represent HIGH.",
      ]],
      ["How long does the Micro II take to heat up?", [
        "The Micro II reaches its selected temperature in approximately 5 seconds. The device will vibrate when temperature has been reached.",
      ]],
      ["What is Session Mode?", [
        "Session Mode provides an automatic heating cycle. Click the button twice to begin heating. The cycle runs 20 seconds in total, including the approximately 5-second heat-up \u2014 the Micro II vibrates once the selected temperature is reached, then stops automatically at the end of the cycle.",
        "You can click the button twice at any time to cancel the session.",
      ]],
      ["What is Manual Heating?", [
        "Manual Heating gives you direct control over activation. Press and hold the button to begin heating. Manual Heating can run for up to 25 seconds in total, including the approximately 5-second heat-up, before automatically shutting off.",
      ]],
      ["How do I turn the Micro II on and off?", [
        "Click the button five times to power the Micro II on or off.",
        "The device will also automatically shut off after 10 minutes of inactivity.",
      ]],
      ["Why am I not getting much vapor on my first session?", [
        "During the first heat activation, concentrate must prime the porous ceramic heating plate before optimal vapor production can occur.",
        "Additional heat activations and draws may be necessary during initial use, particularly when using the LOW temperature setting.",
      ]],
      ["How do I adjust the airflow?", [
        "The airflow control is located on the opposite side of the device from the display. Slide the airflow control to the left for increased airflow or to the right for a more restricted draw.",
      ]],
      ["What type of atomizer does the Micro II use?", [
        "The Micro II uses a 0.8\u03a9 ceramic atomizer designed to provide consistent heating and concentrate performance.",
      ]],
      ["How much concentrate should I load?", [
        "Place a small amount of concentrate directly onto the center of the ceramic heating plate. Avoid overfilling the tank to help maintain consistent performance and make cleaning easier.",
      ]],
      ["How long does the Micro II battery last?", [
        "The 1,250mAh rechargeable battery provides up to 120 sessions on a single charge. Actual battery life may vary depending on temperature setting, session length, and usage.",
      ]],
      ["How long does the Micro II take to charge?", [
        "The Micro II supports USB-C fast charging and can fully charge in under 60 minutes.",
      ]],
      ["Does the Micro II support pass-through charging?", [
        "Yes. The G Pen Micro II supports pass-through charging.",
      ]],
      ["How do I know when my Micro II is fully charged?", [
        "The digital display shows battery status while charging. Once the battery icon on the display is full, the Micro II is fully charged.",
      ]],
      ["Does the Micro II have haptic feedback?", [
        "Yes. The Micro II uses haptic feedback to confirm device actions and vibrates when the selected temperature has been reached.",
      ]],
      ["Does the Micro II have an automatic shutoff?", [
        "Yes. The Micro II automatically powers off after 10 minutes.",
      ]],
      ["Can I use the Micro II with a glass rig?", [
        "Yes. The separately available G Pen Micro II Rig Adapter features a 14mm male glass connection that allows the Micro II to connect to compatible glass rigs for water-filtered and water-cooled vapor.",
        "The Rig Adapter is sold separately and is not included with the Micro II.",
      ]],
      ["What is the G Pen Micro II Sidecar?", [
        "The separately available Micro II Sidecar is a glass water-filtration attachment designed specifically for the Micro II. It replaces the standard mouthpiece and allows you to enjoy water-filtered, cooled vapor in a compact setup without requiring a separate rig.",
        "The Sidecar is sold separately and is not included with the Micro II.",
      ]],
      ["How do I use the Micro II Sidecar?", [
        "Remove the standard Micro II mouthpiece and attach the Sidecar silicone adapter. Fill the Sidecar with water to the indicated black fill line and attach it to the silicone adapter.",
        "Position the Sidecar so its mouthpiece faces the same direction as the Micro II power button and display. Cover the carb at the top of the Sidecar while drawing, then release the carb to clear the vapor from the glass.",
      ]],
      ["Are the Sidecar and Rig Adapter included with the Micro II?", [
        "No. The G Pen Micro II Sidecar and Rig Adapter are optional accessories sold separately.",
      ]],
      ["How do I clean the G Pen Micro II?", [
        "Power off the Micro II and allow it to cool completely before cleaning.",
        "Remove the mouthpiece and use a cotton swab lightly dampened with isopropyl alcohol to gently clean the ceramic heating chamber and remove concentrate buildup. Use the same method to clean buildup from the mouthpiece.",
        "Do not soak the Micro II tank or battery in isopropyl alcohol. Allow all components to dry completely before reassembling and using the device.",
      ]],
      ["How do I clean the Micro II Rig Adapter?", [
        "Disconnect the Rig Adapter from both the Micro II and your glass rig. Use a cotton swab with a small amount of isopropyl alcohol to remove concentrate buildup.",
        "The internal airpath can be accessed by removing the top panel. If deeper cleaning is necessary, the 14mm glass adapter can be removed and soaked in isopropyl alcohol.",
        "After soaking, thoroughly rinse the glass with water and allow all components to dry completely before reassembly.",
      ]],
      ["Can I soak the Micro II tank in isopropyl alcohol?", [
        "No. Do not soak the Micro II tank or battery in isopropyl alcohol. Use a cotton swab lightly dampened with isopropyl alcohol for cleaning instead.",
      ]],
      ["How big is the G Pen Micro II?", [
        "The Micro II measures approximately 98.6 \u00d7 24 \u00d7 32 mm and weighs 86g, making it compact enough for easy everyday portability.",
      ]],
      ["How is the Micro II different from previous G Pen Micro devices?", [
        "The Micro II represents the newest evolution of the G Pen Micro concentrate platform, which began with the original microG in 2013. It introduces a 1,250mAh battery, digital display, three temperature settings, adjustable airflow, automatic and manual heating, USB-C fast charging, haptic feedback, and compatibility with optional water-filtration accessories.",
      ]],
    ],
    msrp: "$49.95",
    fullName: "MICRO II VAPORIZER",
    sku: "GPM-001-APZZ",
    upc: "811736020343",
    pop: true,
    popSku: "GPM-001-APZZ-Inner Pack",
    popUpc: "10811736020340",
    dimensions: "105 × 35 × 28 mm",
    unitWeight: "0.1 kg",
    innerPack: "10",
    masterCarton: "160",
    caseWeight: "16.8 kg",
    caseDimensions: "325 × 305 × 235 mm",
    htsCode: "8543.70.9940",
  },
  "Slim 3-Piece Grinder": {
    description:
      "A slim, screenless 3-piece grinder with micro-rounded teeth that gently separate flower into a consistent grind — built to pair with the Dash II and Dash+.",
    highlights: [
      "Micro-rounded teeth for a gentle, even grind",
      "Helps preserve cannabinoids and terpenes",
      "Screenless 3-piece design keeps trichomes in your material",
      "Smooth interior reduces friction and buildup",
      "6063 aircraft-grade anodized aluminum",
      "Highest post-grind THC retention in Orange Photonics testing",
      "Magnetic lid keeps contents secure",
      "Compact profile for pocket and travel",
      "Pairs with G Pen Dash II and Dash+",
    ],
    msrp: "$19.95",
    // From G-Pen-SKU-Details-Template-6.xlsx (rows 7–8). The sheet listed the same
    // SKU for the unit and the 10-pack POP; the official one-sheet shows the POP is
    // GPA-001-APSC-INNER PACK, so the sheet\'s duplicate was an oversight. MSRP also
    // comes from the one-sheet ($19.95) — the Shopify draft listing said $24.95.
    sku: "GPA-001-APSC",
    upc: "811736020688",
    fullName: "G PEN GRINDER (3-PC ALUMINUM)",
    pop: true,
    popSku: "GPA-001-APSC-INNER PACK",
    popUpc: "10811736020685",
    dimensions: "65 × 65 × 31 mm",
    unitWeight: "0.11 kg",
    innerPack: "10",
    masterCarton: "150",
    caseWeight: "18.2 kg",
    caseDimensions: "410 × 170 × 360 mm",
    htsCode: "7615.1",
    fullDescription: [
      "Every great session starts with a better grind. The G Pen Slim 3-Piece Grinder is engineered with innovative micro-rounded teeth that gently separate flower into a consistent grind while helping preserve the cannabinoids and terpenes that make every strain unique.",
      "Unlike traditional sharp-tooth grinders, the Slim\u2019s rounded tooth geometry and smooth interior reduce friction and minimize buildup, keeping more of your flower where it belongs. The screenless 3-piece design also keeps trichomes mixed with your ground material instead of separating them away, while the compact profile is perfect for pockets, travel, and everyday carry.",
      "Crafted from premium 6063 aircraft-grade anodized aluminum, the G Pen Slim delivers smooth rotation, lasting durability, and precision performance. Backed by independent testing from Orange Photonics, the innovative micro-rounded tooth design demonstrated the highest post-grind THC retention among multiple grinder styles tested.",
      "Designed to produce a consistent grind that\u2019s ideal for vaporization, the G Pen Slim 3-Piece Grinder pairs perfectly with the G Pen Dash II and G Pen Dash+ dry herb vaporizers, helping you get the most out of every pack with an even, efficient grind optimized for flavorful vapor production.",
      "Smarter by design. Better with every turn.",
    ],
  },
  "Melt Hot Knife": {
    description: "The G Pen Melt is the smallest hot knife on the market — a compact, ceramic-tipped dab tool for fast, clean, zero-mess concentrate scooping and drops.",
    highlights: ["Smallest hot knife on the market", "Rapid-heat ceramic tip", "USB-C pass-through charging", "Sleek aluminum body", "Ultra-compact: 3.94 × 0.5 × 0.25 in", "Zero-mess scooping and drops", "Pocket & travel-kit friendly", "Works with rigs, Micro+, Hyer"],
    warranty: "Limited warranty — see policy",
    manual: "https://cdn.shopify.com/s/files/1/0185/1576/files/20251203_GPen_MELT_Manual.pdf?v=1764795290",
    productUrl: "https://www.gpen.com/products/g-pen-melt",
  },
  "Dash+": {
    description: "The G Pen Dash+ is a next-generation portable dry herb vaporizer using hybrid convection-conduction heating in a titanium chamber to reach vaporization temperatures in about 20 seconds.",
    highlights: ["Hybrid convection + conduction heating", "Titanium heating chamber", "Heats up in ~20 seconds", "1,800mAh rechargeable Li-ion battery", "USB-C charging", "Full-color LED display", "Haptic feedback, 3-button interface", "Zinc-alloy casing"],
    warranty: "Limited warranty — see policy",
    manual: "https://cdn.shopify.com/s/files/1/0185/1576/files/gpen-dash-plus_quick-start-guide_web_mobile.jpg?v=1692910503",
    productUrl: "https://www.gpen.com/products/g-pen-dash-plus-vaporizer",
  },
  "Dash": {
    description: "The original G Pen Dash — a compact, lightweight dry herb vaporizer designed for simple, on-the-go sessions.",
    highlights: ["Compact dry herb vaporizer", "Simple one-button operation", "Pocket-friendly design"],
    warranty: "2-year limited warranty",
  },
  "Elite II": {
    description: "A premium full-convection dry herb vaporizer delivering pure flavor and dense vapor with precision temperature control.",
    highlights: ["Full-convection heating", "Precision temperature control", "Large capacity ceramic chamber"],
    warranty: "2-year limited warranty",
  },
};

/* MSRP per product (pulled from the live store feeds — VERIFY before launch;
   e.g. confirm a price). Shown in the product hub. */
var PRODUCT_MSRP = {
  "Dash II": "$49.95",
  "Connect": "$74.95",
  "Roam": "$49.95",
  "Hyer": "$149.95",
  "Dash+": "$99.95",
  "510 Original": "$12.95",
  "510 Original — Retro": "$12.95",
  "Hydout": "$24.95",
  "Hydout — Retro": "$24.95",
  "Melt Hot Knife": "$24.95",
};

/* Full official product descriptions (scraped from the Shopify product
   pages — VERIFY/replace with official copy). Shown in the product hub
   under "Official product description" with a copy-to-clipboard button. */
var PRODUCT_DESCRIPTION = {
  "Dash II": [
    "The next evolution of our best-selling Dash vaporizer — upgraded across the board and now just $49.95.",
    "The G Pen Dash II is a pocket-sized dry herb vaporizer featuring precise temperature control, an OLED display, and an upgraded 0.4g ceramic chamber designed for improved performance and easier loading. Powered by an upgraded longer lasting 1,100mAh battery, Dash II delivers smooth, reliable sessions with 30-second heat-up and USB-C pass-through charging capability.",
    "More control. Easier loading. Better performance.",
  ],
  "Connect": [
    "The best torchless dab vaporizer alternative to traditional rigs. The G Pen Connect is a revolutionary concentrate vaporizer for water pipes that eliminates the need for a torch and exposed nail. This fast heating concentrate vaporizer reaches optimal temperature within five seconds, delivering premium vapor quality with zero hassle.",
    "Why Choose the G Pen Connect?",
    "Torchless Technology: Safe, convenient ceramic heating dab vaporizer – no open flames required",
    "5-Second Heat-Up: Rapid activation for immediate, high-density vapor production",
    "Universal Compatibility: Includes 10mm, 14mm glass attachment vaporizer, and 18mm adapters for any glass-on-glass water piece",
    "Patented Reverse Airflow: Ensures even, efficient vaporization of concentrates",
    "Three Temperature Settings: Customize your experience based on concentrate type and flavor preferences",
    "Extended Draw Mode: For longer, more powerful sessions",
    "Powerful 850 mAh Battery: Supports multiple back-to-back sessions with pass-through charging",
    "Spring-Loaded Carb Release: Instant airflow control for effortless chamber clearing",
    "Premium Build Quality: Powered by a ceramic heating element that preserves concentrate flavor and delivers smooth, powerful draws when paired with your favorite water piece. The magnetic snap-in connection ensures quick, effortless setup every time.",
    "Portable & Travel-Ready: Despite its powerful performance, the G Pen Connect is compact enough for transport. Every kit includes a hemp travel pouch for easy storage.",
    "Complete Kit Includes: G Pen Connect device, 10mm/14mm/18mm glass adapters, hemp travel pouch, USB charging cable, and user manual.",
    "Ready to upgrade from your traditional rig? Explore our Cookies x G Pen Connect and Dr. Greenthumb's x G Pen Connect limited edition collaborations.",
    "Patented Technology:",
    "US 10,004,264 B2",
    "US 10,021,909 B2",
    "US 10,188,145 B2",
    "US 10,321,721 B2",
    "US 10,327,470 B2",
    "*This Product is Not For Use With Tobacco, Nicotine-Containing E-liquids, or Any Synthetic Nicotine or Nicotine Substitute.",
    "\"@context\": \"https://schema.org\",",
  ],
  "Roam": [
    "Introducing the G Pen Roam, an all-in-one portable vaporizer intuitively designed to provide water-filtered concentrate vaporization on-the-go. Featuring a spill-resistant, self-contained borosilicate glass hydrotube, a fully Quartz tank, and powerful 1,300mAh Lithium-Ion Battery, the G Pen Roam heats to temperature within seconds of activation to deliver smooth and flavorful draws with ease.",
    "The G Pen Roam tailors to each user’s flavor and heat preferences through a digital temperature control and LED display ranging from 400° - 800°+F (204° - 427°+C), along with a haptic feedback feature that indicates when the device is ready for use. Designed with strict attention to discrete portability, the Roam is encased within a light yet durable aluminum alloy shell which fully shelters the Quartz tank and glass water tube. Passthrough technology allows for the device to be used while plugged in, and all parts in connection to the vapor air path can be easily disassembled and cleaned.",
    "Each G Pen Roam complete kit comes standard within a Hemp Travel Case, with room for two concentrates jars and a pocket for accessories which include a micro USB Charging Cable and G Pen Tool for loading of concentrates.",
    "*This Product is Not For Use With Tobacco, Nicotine-Containing E-liquids, or Any Synthetic Nicotine or Nicotine Substitute.",
  ],
  "Hyer": [
    "The G Pen Hyer®️ is an intuitively designed, dual-use, portable enail that works with concentrates or dried herb and pairs with any glass-on-glass water piece. Manufactured with the highest quality materials, including a full quartz heating element, the G Pen Hyer features smart heating technology with constant temperature output to deliver best-in-class flavor and vapor production.",
    "Featuring a 6,000mAh rechargeable lithium-ion battery with rapid, pass-through charging via USB-C, in a lightweight and durable, anodized aluminum casing, the G Pen Hyer redefines the limits of sheer power and portability. Utilizing a simple three-button operation and five-LED user interface, the G Pen Hyer allows for easy set-up and activation while delivering an uncompromising experience.",
    "A premium braided power cable with durable snap-in magnetic attachments connects the battery to a lightweight, anodized aluminum tank housing, in which the G Pen Hyer Quartz Tank for Concentrates or Dry Herb Tank* can be easily threaded in and out. The Concentrates Tank is heated by a custom-stamped stainless steel heating element and features a full Quartz chamber and internal up-stem that provides maximum surface area for heating, efficient airflow, and an optimal vaporization of concentrate materials.",
    "The final component in the superior performance of the G Pen Hyer Quartz Tank for Concentrates is the Concentrates Tank Cap, magnetically attached and made of anodized aluminum with a built-in ceramic liner and dual airflow holes for smooth, rotary functionality. The included stainless steel wax tool can also be attached to the top or side of the tank cap for easy placement and accessibility.",
    "Each G Pen Hyer Vaporizer kit comes with a 14mm male glass adapter (10mm and 18mm glass adapters sold separately). All kit components come neatly packed in an included hemp travel case with a mesh pocket for additional accessories.",
    "*G Pen Hyer Dry Herb Tank sold separately.",
    "﻿*The durability index of the G Pen Hyer Quartz Tank carries a minimum of 200 power cycles. It is recommended to replace your tank once this number of power cycles has been reached for optimal performance.",
    "*This Product is Not For Use With Tobacco, Nicotine-Containing E-liquids, or Any Synthetic Nicotine or Nicotine Substitute.",
  ],
  "510 Original": [
    "Back to where it all started—with upgrades.",
    "The G Pen 510 Original brings it full circle, taking inspiration from our very first battery in 2012 and reworking it for today. This is the smallest G Pen battery ever made (24 × 21.1 × 56.7 mm), built ultra-portable and effortless to use, without cutting corners on performance.",
    "Designed with breath activation, the 510 Original makes sessions effortless, just inhale and go. For added control, the single-button interface lets you cycle through three preset voltage settings (3.2/3.6/3.8V), activate a 1.8V pre-heat mode for 10 seconds, and keep track of everything on the digital display. A 400 mAh battery paired with USB-C pass-through charging means you can charge and use it at the same time, without slowing down.",
    "At just $12.95, it’s also the most affordable G Pen battery ever—proof that premium tech doesn’t have to come with a premium price tag.",
    "Simple. Reliable. Iconic. The original is back.",
    "*510 Cartridge Not Included",
    "** USB C Charger Not Included",
  ],
  "510 Original — Retro": [
    "Original. Upgraded. Retro.",
    "Back to where it all started—with a smooth retro finish.",
    "The Retro Collection G Pen 510 Original blends nostalgic transparent design with a rich, standout translucent colorway. Inspired by our very first 510 battery from 2012, this upgraded edition keeps the original simple and reliable while refining it for modern, on-the-go sessions.",
    "As the smallest G Pen battery ever made at just 24 × 21.1 × 56.7 mm, the 510 Original is compact enough to fit effortlessly into your day. Breath activation keeps operation easy and button-free during use, while the single-button interface gives you control over three preset voltage settings (3.2/3.6/3.8V), a 10-second 1.8V pre-heat mode, and the digital display.",
    "A 400 mAh battery with USB-C pass-through charging helps keep your device ready when you are, even while plugged in. With its translucent retro shell and upgraded 510 performance, this pocket-ready battery delivers a smooth mix of vintage style and everyday function.",
    "Simple. Reliable. Iconic. The original is back.",
    "*510 Cartridge Not Included",
    "**USB-C Charger Not Included",
  ],
  "Hydout": [
    "Looking for the best 510 cartridge battery for low-key sessions on the go? Meet the G Pen Hydout 510 Cartridge Battery — a compact, concealed vape battery for 510 cartridges that delivers serious performance without blowing your cover.",
    "This pocket-sized powerhouse features a hidden magnetic mouthpiece cover to keep your cart discreet and protected from light (yes, it helps preserve oil quality), a 400mAh battery, adjustable voltage, and a bright LED display for full control over every hit. Compatible with most 510 thread cartridges up to 2g, the Hydout is perfect for smooth, customizable sessions—wherever you are.",
  ],
  "Hydout — Retro": [
    "The G Pen Hydout Retro blends a sleek, see-through 90s-inspired translucent finish with the refined engineering behind G Pen’s most discreet 510 battery. Its magnetic shell wraps around your cartridge to protect it from daily wear while keeping your setup visually minimal and clean.",
    "Designed for versatility, the Hydout includes variable voltage settings for customized heat control and a 1.8V pre-heat function to warm thicker concentrates before use. This Retro edition also adds breath activation, making every pull completely button-free, and USB-C pass-through charging, which keeps the device ready for use even while it’s plugged in.",
    "With fast USB-C charging, a snug no-rattle cartridge chamber, and compatibility with most 510 carts, the Hydout Retro delivers modern performance beneath its nostalgic translucent shell.",
    "*510 Cartridge Not Included",
    "**USB-C Charger Not Included",
  ],
  "Melt Hot Knife": [
    "Meet the all-new G Pen Melt Hot Knife — the smallest hot knife on the market and the fastest, cleanest way to prep your concentrates. At just 3.94 inches tall, 0.5 inches wide, and 0.25 inches deep, Melt is ultra-compact, ultra-portable, and built to disappear into any pocket or travel kit.",
    "Designed for zero-mess scooping and smooth, controlled drops, Melt makes sticky situations buttery easy. The rapid-heat ceramic tip warms up instantly for perfect transfers every time. No sticky tools. No reclaim disasters. No fumbling.",
    "And now with USB-C pass-through charging, you can keep using Melt even while it’s plugged in — because the only thing worse than a dead dab tool is waiting for it to charge.",
    "With its sleek aluminum body, universal USB-C port, and signature G Pen silhouette, Melt is your new everyday essential — whether you’re loading a rig, refilling a G Pen Micro+, or prepping your G Pen Hyer.",
    "Small size. Big power. Zero mess. Always ready.",
  ],
  "Dash+": [
    "The G Pen Dash+ is a compact dry herb vaporizer designed for fast, flavorful, and customizable sessions. Featuring hybrid convection and conduction heating in a full titanium chamber, it reaches temperature in as little as 20 seconds for smooth, consistent vapor.",
    "Dual clean air intake channels and a magnetic mouthpiece with a spiral ceramic air path help maximize airflow and flavor. A full-color LED display, three-button controls, haptic feedback, and precise temperature adjustment make it easy to personalize every session.",
    "Built with a durable zinc-alloy body and powered by a rechargeable 1,800mAh battery with USB-C charging, the G Pen Dash+ delivers reliable performance in a sleek, portable design made for everyday use.",
    "*This Product is Not For Use With Tobacco, Nicotine-Containing E-liquids, or Any Synthetic Nicotine or Nicotine Substitute.",
  ],
};

/* SKU + packaging details per product (shown in the "SKU details" and
   "Packaging" hub sections). SKUs are real (scraped from the store). Fill in
   the rest from ops/factory (Dash II below is a complete example):
     pop            : true if it ships inside a retail POP display
     fullName       : official full product name (e.g. "DASH II VAPORIZER")
     upc            : product UPC barcode number
     innerPack      : units per POP display (e.g. "10")
     masterCarton   : units per master case (e.g. "200")
     caseWeight     : master case weight (e.g. "16.07 kg")
     caseDimensions : master case dimensions (e.g. "580 × 280 × 245 mm")
     boxImg/popImg/cartonImg : packaging image URLs (Dropbox) — placeholder
                      tiles show until these are set */
var PRODUCT_SKU = {
  // Values supplied by ops (SKU worksheet). dimensions/unitWeight = single unit;
  // innerPack/masterCarton/caseWeight/caseDimensions = retail packaging. Retro
  // rows use the collection-level POP SKU/UPC (per-colour SKUs live in the sheet).
  "Dash II":              { sku: "GPD-001-APZZ", pop: true,  fullName: "DASH II VAPORIZER", upc: "852570004441", popSku: "GPD-001-APZZ-Inner Pack", popUpc: "10852570004448", dimensions: "97 × 35 × 21 mm", unitWeight: "59.5 g", innerPack: "10", masterCarton: "200", caseWeight: "16.07 kg", caseDimensions: "580 × 280 × 245 mm", htsCode: "8543.70.9940", boxImg: "assets/materials/dash-ii-retail-packaging.png", popImg: "assets/materials/dash-ii-pop-display.png" },
  "Dash+":                { sku: "GPD-001-AMZZ", pop: false, fullName: "DASH+ VAPORIZER", upc: "811736027489", dimensions: "135 × 100 × 35 mm", unitWeight: "276 g", innerPack: "N/A", masterCarton: "48", caseWeight: "14.3 kg", caseDimensions: "330 × 320 × 320 mm", htsCode: "8543.70.9940" },
  "Melt Hot Knife":       { sku: "GHK-001-AOZZ", pop: true,  fullName: "MELT", upc: "811736029711", popSku: "GHK-001-AOZZ-Inner Pack", popUpc: "10811736029718", dimensions: "122.5 × 42 × 12 mm", unitWeight: "17 g", innerPack: "20", masterCarton: "720", caseWeight: "14.74 kg", caseDimensions: "513 × 482 × 262 mm", htsCode: "8543.70.9940" },
  "Hydout":               { sku: "GHO-001-AOZZ", pop: true,  fullName: "HYDOUT", upc: "811736029254", popSku: "GHO-001-AOZZ-Inner Pack", popUpc: "10811736029251", dimensions: "55 × 20 × 105 mm", unitWeight: "50 g", innerPack: "10", masterCarton: "300", caseWeight: "16 kg", caseDimensions: "580 × 380 × 250 mm", htsCode: "8543.70.9940" },
  "510 Original":         { sku: "GSB-001-AOZZ", pop: true,  fullName: "510 ORIGINAL", upc: "811736029742", popSku: "GSB-001-AOZZ-Inner Pack", popUpc: "10811736029749", dimensions: "24 × 21.1 × 56.7 mm", unitWeight: "30 g", innerPack: "20", masterCarton: "400", caseWeight: "13.4 kg", caseDimensions: "510 × 330 × 310 mm", htsCode: "8543.70.9940" },
  "Hydout — Retro":       { sku: "GHO-006-AOZZ", pop: true,  fullName: "HYDOUT — RETRO COLLECTION", upc: "00811736029889", popSku: "GHO-006-AOZZ", popUpc: "00811736029889", dimensions: "55 × 20 × 105 mm", unitWeight: "50 g", innerPack: "10", masterCarton: "300", caseWeight: "16 kg", caseDimensions: "580 × 380 × 250 mm", htsCode: "8543.70.9940" },
  "510 Original — Retro": { sku: "GSB-006-APZZ", pop: true,  fullName: "510 ORIGINAL — RETRO COLLECTION", upc: "00811736021791", popSku: "GSB-006-APZZ", popUpc: "00811736021791", dimensions: "24 × 21.1 × 56.7 mm", unitWeight: "30 g", innerPack: "20", masterCarton: "400", caseWeight: "13.4 kg", caseDimensions: "510 × 330 × 310 mm", htsCode: "8543.70.9940" },
  "Connect":              { sku: "GPC-100-AJZZ", pop: false, fullName: "CONNECT", upc: "811736023986", dimensions: "158 × 117 × 48 mm", unitWeight: "362 g", innerPack: "N/A", masterCarton: "50", caseWeight: "19.1 kg", caseDimensions: "625 × 330 × 265 mm", htsCode: "8543.70.9940" },
  "Dash":                 { sku: "GPD-003-ANZZ", pop: false, fullName: "DASH", upc: "811736029025", dimensions: "122 × 78 × 28 mm", unitWeight: "131 g", innerPack: "N/A", masterCarton: "80", caseWeight: "12 kg", caseDimensions: "570 × 320 × 246 mm", htsCode: "8543.70.9940" },
  "Elite II":             { sku: "GPE-001-AKZZ", pop: false, fullName: "ELITE II", upc: "811736026154", dimensions: "190 × 90 × 60 mm", unitWeight: "396 g", innerPack: "N/A", masterCarton: "30", caseWeight: "13.04 kg", caseDimensions: "400 × 310 × 325 mm", htsCode: "8543.70.9940" },
  "Hyer":                 { sku: "GPH-001-ALZZ", pop: false, fullName: "HYER", upc: "811736026475", dimensions: "165 × 137 × 70 mm", unitWeight: "670 g", innerPack: "N/A", masterCarton: "20", caseWeight: "14 kg", caseDimensions: "375 × 375 × 305 mm", htsCode: "8543.70.9940" },
  "Micro+":               { sku: "GPM-001-AKZZ", pop: false, fullName: "MICRO+", upc: "811736025362", dimensions: "177 × 69 × 42 mm", unitWeight: "190 g", innerPack: "N/A", masterCarton: "80", caseWeight: "16 kg", caseDimensions: "400 × 350 × 450 mm", htsCode: "8543.70.9940" },
  "Roam":                 { sku: "GPR-001-AIZZ", pop: false, fullName: "ROAM", upc: "811736022620", dimensions: "193 × 148.5 × 55 mm", unitWeight: "700 g", innerPack: "N/A", masterCarton: "36", caseWeight: "26.3 kg", caseDimensions: "528 × 322 × 420 mm", htsCode: "8543.70.9940" },
};

/* "What's In the Box?" contents + components image per product (from gpen.com).
   { image: "<url>", contents: ["item", ...] } */
var PRODUCT_BOX = {
  // No components image yet — Micro II isn't on the gpen.com CDN. The renderer
  // falls back to a list-only layout, so this is complete as-is.
  "Micro II": {
    contents: [
      "G Pen Micro II Battery",
      "G Pen Micro II Ceramic Tank",
      "Silicone Mouthpiece",
      "*USB-C Charging Cable Not Included",
      "*Micro II Sidecar Sold Separately",
      "*Micro II 14mm Rig Adapter Sold Separately",
    ],
  },
  "Dash II": {
    image: CDN + "dash2_thumb_011.jpg?v=1772834595",
    contents: ["G Pen Dash II Dry Herb Vape", "Built in loading tool", "Silicone Mouthpiece Sleeve", "*USB-C Charging Cable Not Included"],
  },
  "Dash+": {
    image: CDN + "dash_what_inc.png?v=1692903153",
    contents: ["Dash+ Vaporizer", "Dash+ Mouthpiece Silicone Sleeve", "Loading Tool with Keychain", "USB-C Charging Cable"],
  },
  "Melt Hot Knife": {
    image: CDN + "Melt_thumb_02.jpg?v=1772808678",
    contents: ["G Pen Melt Hot Knife", "Protective Travel Cap", "*USB C Charging Cable Not Included"],
  },
  "510 Original": {
    image: CDN + "510_thumb_01.jpg?v=1765987884",
    contents: ["G Pen 510 Original Battery", "*USB C Charger Not Included", "*510 Cartridge Not Included"],
  },
  "510 Original — Retro": {
    image: CDN + "Purple510O_thumb_01.jpg?v=1779898107",
    contents: ["G Pen 510 Original Battery", "*USB C Charger Not Included", "*510 Cartridge Not Included"],
  },
  "Hydout": {
    image: CDN + "Hydout_vape_thumb_02.jpg?v=1762461585",
    contents: ["1x G Pen Hydout 510 Cartridge Battery", "1x Magnetic Mouthpiece Cover", "510 Cartridge not included", "USB-C Charging cable not included"],
  },
  "Hydout — Retro": {
    image: CDN + "Purple_hydout_07.jpg?v=1765487537",
    contents: ["G Pen Hydout 510 Thread Battery", "Magnetic Mouthpiece", "*USB-C Charging Cable Not Included", "*510 Cartridge Not Included"],
  },
};

// Attach info (+ MSRP + SKU/packaging + box) to each product; empty object if none.
window.PORTAL_PRODUCTS.forEach(function (p) {
  p.info = PRODUCT_INFO[p.name] || {};
  if (PRODUCT_MSRP[p.name] && !p.info.msrp) p.info.msrp = PRODUCT_MSRP[p.name];
  if (PRODUCT_DESCRIPTION[p.name] && !p.info.fullDescription) p.info.fullDescription = PRODUCT_DESCRIPTION[p.name];
  var sk = PRODUCT_SKU[p.name];
  if (sk) Object.keys(sk).forEach(function (k) { if (p.info[k] === undefined) p.info[k] = sk[k]; });
  if (PRODUCT_BOX[p.name]) p.info.box = PRODUCT_BOX[p.name];
});

/* Live Dropbox sync overlay: assets/data/synced.js (regenerated by the GitHub
   Action) defines window.PORTAL_SYNCED = { "<Product>": { folders, dropbox } }.
   When present, the real Dropbox folders/files replace the placeholder ones. */
(function () {
  var SYNCED = (typeof window !== "undefined" && window.PORTAL_SYNCED) || {};
  window.PORTAL_PRODUCTS.forEach(function (p) {
    var s = SYNCED[p.name];
    if (s && s.folders && Object.keys(s.folders).length) {
      p.folders = s.folders;
      if (s.dropbox) p.dropbox = s.dropbox;
      if (s.folderLinks) p.folderLinks = s.folderLinks;
      p.synced = true;
      p.syncedAt = s.syncedAt;
      // Logo folders have no product shot — use the main black G monogram
      // (GPen_G_Black, not the registered/wordmark variants) as the hero cover.
      if (p.isLogo && !p.cover) {
        var all = [];
        Object.keys(s.folders).forEach(function (f) { all = all.concat(s.folders[f]); });
        var cand = all.filter(function (x) { return /^gpen_g_black$/i.test(x.name) && x.thumb; });
        var g = cand.filter(function (x) { return x.format === "PNG"; })[0] || cand[0];
        if (g) p.cover = g.thumb;
      }
    }
  });
})();

/* Per-colourway SKU/UPC for the multi-colour Retro collections. Shown as the
   "Collection Colorways" section on those product pages. `hex` drives the fun,
   colour-coded card design. */
window.PORTAL_COLORWAYS = {
  "Hydout — Retro": [
    { color: "Red",    hex: "#E23B34", sku: "GHO-002-AOZZ", upc: "811736029605", name: "Retro Collection Hydout — Red" },
    { color: "Blue",   hex: "#2F6BE0", sku: "GHO-003-AOZZ", upc: "811736029612", name: "Retro Collection Hydout — Blue" },
    { color: "Green",  hex: "#57B733", sku: "GHO-004-AOZZ", upc: "811736029629", name: "Retro Collection Hydout — Green" },
    { color: "Pink",   hex: "#E8479E", sku: "GHO-005-AOZZ", upc: "811736029636", name: "Retro Collection Hydout — Pink" },
    { color: "Purple", hex: "#8B4AD6", sku: "GHO-006-AOZZ", upc: "811736029643", name: "Retro Collection Hydout — Purple" },
  ],
  "510 Original — Retro": [
    { color: "Red",    hex: "#E23B34", sku: "GSB-001-APZZ", upc: "852570004298", name: "Retro Collection 510 Original — Red" },
    { color: "Blue",   hex: "#2F6BE0", sku: "GSB-002-APZZ", upc: "852570004816", name: "Retro Collection 510 Original — Blue" },
    { color: "Green",  hex: "#57B733", sku: "GSB-003-APZZ", upc: "852570004465", name: "Retro Collection 510 Original — Green" },
    { color: "Pink",   hex: "#E8479E", sku: "GSB-004-APZZ", upc: "852570004779", name: "Retro Collection 510 Original — Pink" },
    { color: "Purple", hex: "#8B4AD6", sku: "GSB-005-APZZ", upc: "852570004878", name: "Retro Collection 510 Original — Purple" },
  ],
};

/* Central POP-display library (synced from the "POP Displays" Dropbox folder) →
   matched to each product's "Retail POP display" packaging card by filename.
   Add a product + filename pattern here as new POP images arrive. */
(function () {
  var POP = (typeof window !== "undefined" && window.PORTAL_SYNCED && window.PORTAL_SYNCED["POP Displays"]) || null;
  if (!POP || !POP.folders) return;
  var pops = [];
  Object.keys(POP.folders).forEach(function (f) { (POP.folders[f] || []).forEach(function (x) { pops.push(x); }); });
  var MATCH = {
    "510 Original": /^510-Original-Front-POP/i,
    "510 Original — Retro": /^510-Retro-Front-POP/i,
    "Hydout": /^Hydout-Front-POP/i,
    "Melt Hot Knife": /^Melt-Front-POP/i,
    "Dash II": /^Dash-Front-POP/i,
  };
  window.PORTAL_PRODUCTS.forEach(function (p) {
    var re = MATCH[p.name]; if (!re || !p.info) return;
    var img = pops.filter(function (x) { return re.test(x.name) && x.thumb; })[0];
    if (img) { if (!p.info.popImg) { p.info.popImg = img.thumb; p.info.popImgDl = img.url; } p.info.pop = true; }
  });

  // Fallback: a POP shot that lives in the product's OWN Dropbox folders rather
  // than the central POP Displays library. packagingHTML only looks in a folder
  // literally called "Packaging", so a POP image filed anywhere else (the
  // Grinder's arrived under "Documents") would never reach the packaging card.
  // Prefer a front-on, non-"copy" shot, matching the -Front-POP convention the
  // central library uses. Resolved at load time by filename, so it survives the
  // content-hash thumbnails changing on every re-sync.
  window.PORTAL_PRODUCTS.forEach(function (p) {
    if (!p.info || p.info.popImg || !p.folders) return;
    var own = [];
    Object.keys(p.folders).forEach(function (f) {
      if (f === "Packaging") return;                     // already handled natively
      (p.folders[f] || []).forEach(function (x) {
        if (x && x.thumb && /pop/i.test(x.name || "")) own.push(x);
      });
    });
    if (!own.length) return;
    own.sort(function (a, b) {
      function score(x) {
        var n = 0, nm = x.name || "";
        if (/front/i.test(nm)) n += 3;
        if (/transparent/i.test(nm)) n += 2;
        if (/copy/i.test(nm)) n -= 3;                    // working files, not finals
        if (/\bside\b|-side/i.test(nm)) n -= 2;
        return n;
      }
      return score(b) - score(a);
    });
    p.info.popImg = own[0].thumb;
    p.info.popImgDl = own[0].url;
    p.info.pop = true;
  });
})();

/* =============================================================================
   CATALOGS & B2B BRAND DOCUMENTS — synced from the "Catalog" Dropbox folder.
   These aren't product-specific, so they get their own home-page section with an
   in-site page viewer, a download, and a shareable deep link.

   Map a synced filename → display title / region / group below. Anything not
   mapped still appears (titled by its filename), so new drops show up on the
   next sync without a code change.
   ========================================================================== */
window.PORTAL_CATALOG_GROUPS = ["Regional Catalogs", "B2B Resources"];
window.PORTAL_CATALOG_META = {
  "G Pen Catalog - 2026 - US":           { title: "G Pen 2026 Catalog",    region: "US",  group: "Regional Catalogs", order: 1 },
  "G Pen Catalog - 2026 - UK":           { title: "G Pen 2026 Catalog",    region: "UK",  group: "Regional Catalogs", order: 2 },
  "G Pen Catalog - 2026 - EU":           { title: "G Pen 2026 Catalog",    region: "EU",  group: "Regional Catalogs", order: 3 },
  "G Pen Catalog - 2026 - CAD":          { title: "G Pen 2026 Catalog",    region: "CAD", group: "Regional Catalogs", order: 4 },
  "GPEN_Catalog_CAD":                    { title: "G Pen 2026 Catalog",    region: "CAD", group: "Regional Catalogs", order: 4 },
  "G Pen - Dispensary Essentials":       { title: "Dispensary Essentials", region: "US",  group: "B2B Resources",     order: 1 },
  "G Pen - Dispensary Essentials - UK":  { title: "Dispensary Essentials", region: "UK",  group: "B2B Resources",     order: 2 },
  "G Pen - Dispensary Essentials - EU":  { title: "Dispensary Essentials", region: "EU",  group: "B2B Resources",     order: 3 },
  "G Pen - Dispensary Essentials - CAD": { title: "Dispensary Essentials", region: "CAD", group: "B2B Resources",     order: 4 },
};

window.PORTAL_CATALOGS = (function () {
  var src = (typeof window !== "undefined" && window.PORTAL_SYNCED && window.PORTAL_SYNCED["Catalogs"]) || null;
  if (!src || !src.folders) return [];
  function slugify(s) { return String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
  var out = [];
  Object.keys(src.folders).forEach(function (f) {
    (src.folders[f] || []).forEach(function (x) {
      if (!/^pdf$/i.test(x.format || "")) return;
      var m = window.PORTAL_CATALOG_META[x.name] || {};
      var title = m.title || x.name;
      out.push({
        title: title,
        region: m.region || "",
        group: m.group || "Brand Documents",
        order: m.order || 99,
        slug: slugify(title) + (m.region ? "-" + slugify(m.region) : ""),
        thumb: x.thumb || null,   // first-page cover
        file: x.file || null,     // same-origin PDF → in-site viewer + download
        url: x.url || null,       // Dropbox link (fallback)
      });
    });
  });
  var G = window.PORTAL_CATALOG_GROUPS;
  out.sort(function (a, b) {
    var ga = G.indexOf(a.group), gb = G.indexOf(b.group);
    return (ga < 0 ? 99 : ga) - (gb < 0 ? 99 : gb) || a.order - b.order || a.title.localeCompare(b.title);
  });
  return out;
})();

/* Generic (brand-level) in-store marketing materials — synced from the
   "In-Store Marketing General" Dropbox folder. Shown on the home In-Store section
   and as placeholders on any product page that has no product-specific pieces. */
window.PORTAL_INSTORE_GENERAL = (function () {
  var g = (typeof window !== "undefined" && window.PORTAL_SYNCED && window.PORTAL_SYNCED["In-Store Marketing General"]) || null;
  if (g && g.folders) {
    var out = [];
    Object.keys(g.folders).forEach(function (f) { (g.folders[f] || []).forEach(function (x) { out.push(x); }); });
    if (out.length) return out;
  }
  // Real in-store marketing materials (hosted on Dropbox). thumb uses ?raw=1 for
  // inline display; url uses ?dl=1 so the ordering page / lightbox can download.
  // These are replaced automatically once the "In-Store Marketing General"
  // Dropbox folder syncs.
  return [
    { name: "Channel Letter", type: "image", format: "PNG", dim: "12\" L × 12\" W × 2\" D",
      thumb: "assets/materials/thumbs/channel-letter.jpg", url: "assets/materials/channel-letter.png", file: "assets/materials/channel-letter.png" },
    { name: "Die-Cut Window Cling", type: "image", format: "PNG", dim: "8\" L × 8\" W",
      thumb: "assets/materials/thumbs/die-cut-window-cling.png", url: "assets/materials/die-cut-window-cling.png", file: "assets/materials/die-cut-window-cling.png" },
    { name: "Fridge Magnet", type: "image", format: "PNG", dim: "2.5\" L × 2.5\" W",
      thumb: "assets/materials/thumbs/fridge-magnet.png", url: "assets/materials/fridge-magnet.png", file: "assets/materials/fridge-magnet.png" },
    { name: "Lanyard", type: "image", format: "PNG", dim: "With vape holder",
      thumb: "assets/materials/thumbs/lanyard.png", url: "assets/materials/lanyard.png", file: "assets/materials/lanyard.png" },
    { name: "Sticky Notes", type: "image", format: "PNG", dim: "2.5\" L × 2.5\" W · 25 notes per pad",
      thumb: "assets/materials/thumbs/sticky-notes.png", url: "assets/materials/sticky-notes.png", file: "assets/materials/sticky-notes.png" },
    { name: "G Pen Floor Rug", type: "image", format: "PNG", dim: "3ft Circular", sku: "GMK-010-ANZZ",
      thumb: "assets/materials/thumbs/g-pen-floor-rug.jpg", url: "assets/materials/g-pen-floor-rug.png", file: "assets/materials/g-pen-floor-rug.png" },
    // (Dash II Table Tent removed — superseded by the synced "Dash II Postcard".)
  ];
})();

/* Hydout — Retro has no Product Photos in its Dropbox folder yet, so show all
   translucent colorways pulled from gpen.com (Purple / Blue / Pink / Red / Neon
   Green). Replaced automatically once a Dropbox "Product Photos" folder syncs. */
var HYDOUT_RETRO_PHOTOS = [
    { name: "Purple · 01", type: "image", format: "PNG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_01_7ba93da8-20db-4862-8531-230c078bd976.png?v=1765490117&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_01_7ba93da8-20db-4862-8531-230c078bd976.png?v=1765490117", file: null },
    { name: "Purple · 02", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_02.jpg?v=1765487537&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_02.jpg?v=1765487537", file: null },
    { name: "Purple · 03", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_014.jpg?v=1765487537&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_014.jpg?v=1765487537", file: null },
    { name: "Purple · 04", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_03.jpg?v=1765487537&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_03.jpg?v=1765487537", file: null },
    { name: "Purple · 05", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_04.jpg?v=1765487537&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_04.jpg?v=1765487537", file: null },
    { name: "Purple · 06", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_05.jpg?v=1765487537&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_05.jpg?v=1765487537", file: null },
    { name: "Purple · 07", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_06.jpg?v=1765487537&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_06.jpg?v=1765487537", file: null },
    { name: "Purple · 08", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_013.jpg?v=1765487537&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_013.jpg?v=1765487537", file: null },
    { name: "Purple · 09", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_012.jpg?v=1765487537&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_012.jpg?v=1765487537", file: null },
    { name: "Purple · 10", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_011.jpg?v=1765487537&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Purple_hydout_011.jpg?v=1765487537", file: null },
    { name: "Blue · 01", type: "image", format: "PNG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_01_b21c0212-728d-4dbd-b4a3-0fbb23d5024d.png?v=1765490118&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_01_b21c0212-728d-4dbd-b4a3-0fbb23d5024d.png?v=1765490118", file: null },
    { name: "Blue · 02", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_02.jpg?v=1765487649&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_02.jpg?v=1765487649", file: null },
    { name: "Blue · 03", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_04.jpg?v=1765487649&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_04.jpg?v=1765487649", file: null },
    { name: "Blue · 04", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_05.jpg?v=1765487649&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_05.jpg?v=1765487649", file: null },
    { name: "Blue · 05", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_06.jpg?v=1765487649&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_06.jpg?v=1765487649", file: null },
    { name: "Blue · 06", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_016.jpg?v=1765487649&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_016.jpg?v=1765487649", file: null },
    { name: "Blue · 07", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_015.jpg?v=1765487649&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_015.jpg?v=1765487649", file: null },
    { name: "Blue · 08", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_014.jpg?v=1765487649&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_014.jpg?v=1765487649", file: null },
    { name: "Blue · 09", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_013.jpg?v=1765487649&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_013.jpg?v=1765487649", file: null },
    { name: "Blue · 10", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_012.jpg?v=1765487649&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Blue_hydout_012.jpg?v=1765487649", file: null },
    { name: "Pink · 01", type: "image", format: "PNG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_01_77d690dc-506c-4882-af04-cdac6999fb58.png?v=1765490118&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_01_77d690dc-506c-4882-af04-cdac6999fb58.png?v=1765490118", file: null },
    { name: "Pink · 02", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_02.jpg?v=1765487573&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_02.jpg?v=1765487573", file: null },
    { name: "Pink · 03", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_04.jpg?v=1765487573&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_04.jpg?v=1765487573", file: null },
    { name: "Pink · 04", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_05.jpg?v=1765487573&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_05.jpg?v=1765487573", file: null },
    { name: "Pink · 05", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_06.jpg?v=1765487573&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_06.jpg?v=1765487573", file: null },
    { name: "Pink · 06", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_016.jpg?v=1765487573&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_016.jpg?v=1765487573", file: null },
    { name: "Pink · 07", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_015.jpg?v=1765487573&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_015.jpg?v=1765487573", file: null },
    { name: "Pink · 08", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_012.jpg?v=1765487573&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_012.jpg?v=1765487573", file: null },
    { name: "Pink · 09", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_013.jpg?v=1765487573&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_013.jpg?v=1765487573", file: null },
    { name: "Pink · 10", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_011.jpg?v=1765487573&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Pink_hydout_011.jpg?v=1765487573", file: null },
    { name: "Red · 01", type: "image", format: "PNG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_01_07f75c25-d7d0-49ab-9e19-ccfc13b5f75b.png?v=1765490119&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_01_07f75c25-d7d0-49ab-9e19-ccfc13b5f75b.png?v=1765490119", file: null },
    { name: "Red · 02", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_02.jpg?v=1765487679&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_02.jpg?v=1765487679", file: null },
    { name: "Red · 03", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_04.jpg?v=1765487679&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_04.jpg?v=1765487679", file: null },
    { name: "Red · 04", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_05.jpg?v=1765487679&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_05.jpg?v=1765487679", file: null },
    { name: "Red · 05", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_06.jpg?v=1765487679&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_06.jpg?v=1765487679", file: null },
    { name: "Red · 06", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_016.jpg?v=1765487679&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_016.jpg?v=1765487679", file: null },
    { name: "Red · 07", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_015.jpg?v=1765487679&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_015.jpg?v=1765487679", file: null },
    { name: "Red · 08", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_014.jpg?v=1765487679&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_014.jpg?v=1765487679", file: null },
    { name: "Red · 09", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_013.jpg?v=1765487679&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_013.jpg?v=1765487679", file: null },
    { name: "Red · 10", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_012.jpg?v=1765487679&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Red_hydout_012.jpg?v=1765487679", file: null },
    { name: "Neon Green · 01", type: "image", format: "PNG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_01_4b72ac42-025b-430e-937e-244203f17267.png?v=1765490119&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_01_4b72ac42-025b-430e-937e-244203f17267.png?v=1765490119", file: null },
    { name: "Neon Green · 02", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_02.jpg?v=1765487610&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_02.jpg?v=1765487610", file: null },
    { name: "Neon Green · 03", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_04.jpg?v=1765487610&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_04.jpg?v=1765487610", file: null },
    { name: "Neon Green · 04", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_05.jpg?v=1765487610&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_05.jpg?v=1765487610", file: null },
    { name: "Neon Green · 05", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_06.jpg?v=1765487610&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_06.jpg?v=1765487610", file: null },
    { name: "Neon Green · 06", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_016.jpg?v=1765487610&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_016.jpg?v=1765487610", file: null },
    { name: "Neon Green · 07", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_015.jpg?v=1765487610&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_015.jpg?v=1765487610", file: null },
    { name: "Neon Green · 08", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_014.jpg?v=1765487610&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_014.jpg?v=1765487610", file: null },
    { name: "Neon Green · 09", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_013.jpg?v=1765487610&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_013.jpg?v=1765487610", file: null },
    { name: "Neon Green · 10", type: "image", format: "JPG", thumb: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_012.jpg?v=1765487610&width=1000", url: "https://cdn.shopify.com/s/files/1/0185/1576/files/Green_hydout_012.jpg?v=1765487610", file: null },
];
(function () {
  var p = window.PORTAL_PRODUCTS.filter(function (x) { return x.name === "Hydout — Retro"; })[0];
  if (p && p.folders && (!p.folders["Product Photos"] || !p.folders["Product Photos"].length)) {
    p.folders["Product Photos"] = HYDOUT_RETRO_PHOTOS;
  }
})();

/* Product labels — short type tags shown on each current-product card. */
(function () {
  var LABELS = {
    "Dash II": "Dry Herb Vape",
    "Dash+": "Dry Herb Vape",
    "Melt Hot Knife": "Concentrate Hot Knife",
    "510 Original": "510 Battery",
    "510 Original — Retro": "510 Battery",
    "Hydout": "510 Battery",
    "Hydout — Retro": "510 Battery",
  };
  window.PORTAL_PRODUCTS.forEach(function (p) { if (LABELS[p.name]) p.label = LABELS[p.name]; });
})();


/* =============================================================================
   PRODUCT TRAINING — self-serve "Product Specialist" certification courses.
   Per product: intro, learn modules (grounded in official FAQ + manual + portal
   copy), and a multiple-choice quiz. Videos are pulled from the product's own
   `videos` array. Add a product key here to give it a training page.
   ========================================================================== */
window.PORTAL_TRAINING = {
  "Dash II": {
    tagline: "Learn the G Pen Dash II inside-out, then pass the quiz to become a certified Product Specialist.",
    minutes: 8,
    passPct: 80,
    modules: [
      {
        title: "Product Overview",
        points: [
          "The Dash II is a pocket-sized <strong>dry herb vaporizer</strong> — the next evolution of the best-selling G Pen Dash.",
          "It is for <strong>dry herb only</strong> — not compatible with concentrates, oils, or 510 carts.",
          "Uses a <strong>conduction</strong> heating system for reliable vapor and ~30-second heat-up.",
          "MSRP <strong>$49.95</strong>.",
        ],
      },
      {
        title: "Key Specs",
        points: [
          "<strong>0.4g ceramic</strong> heating chamber — larger than the original Dash and easier to load.",
          "<strong>1,100mAh</strong> battery.",
          "<strong>USB-C</strong> charging with <strong>pass-through charging</strong> — it can be used while plugged in.",
          "<strong>OLED display</strong> shows real-time temperature and battery level.",
          "Precise <strong>adjustable temperature control</strong>.",
          "Dimensions <strong>97 × 35 × 21 mm</strong>, weight <strong>59.5 g</strong>.",
          "Built-in <strong>pick tool</strong> for loading and cleaning.",
        ],
      },
      {
        title: "How to Use",
        points: [
          "<strong>Charge</strong> with any USB-C charger.",
          "<strong>Load:</strong> remove the mouthpiece, fully load the chamber with dry material, and pack lightly with the pick tool — <strong>do not overpack</strong>.",
          "<strong>Power on:</strong> hold the button for <strong>3 seconds</strong>.",
          "Use <strong>– / +</strong> to adjust the session temperature.",
          "<strong>Start a session:</strong> tap the button <strong>2× (within 2 seconds)</strong>. Tap <strong>2×</strong> again to cancel anytime.",
          "Draw from the mouthpiece — <strong>long, sustained draws</strong> give the best results.",
          "Tap the button <strong>5×</strong> to open the device settings menu.",
        ],
      },
      {
        title: "How to Clean & Maintain",
        points: [
          "<strong>After every use:</strong> clean the mouthpiece filter screen and bowl with the included pick tool.",
          "<strong>Deep clean:</strong> remove the mouthpiece insert and clean with <strong>Isopropyl Alcohol</strong>.",
          "Always let all parts <strong>dry completely</strong> before reassembling.",
        ],
      },
      {
        title: "Warranty & Registration",
        points: [
          "Backed by a <strong>6-month</strong> limited warranty.",
          "Registering the device at <strong>gpen.com/register</strong> adds another 6 months — a full <strong>1-year</strong> limited warranty.",
          "<strong>In the box:</strong> Dash II device, built-in loading (pick) tool, silicone mouthpiece sleeve. <strong>A USB-C charging cable is NOT included.</strong>",
        ],
      },
      {
        title: "Upgrades vs. the Original Dash",
        points: [
          "Lower MSRP ($49.95), adjustable <strong>temperature control</strong>, and an <strong>OLED display</strong>.",
          "Larger <strong>0.4g</strong> chamber and a bigger <strong>1,100mAh</strong> battery.",
          "Modern <strong>USB-C</strong> charging with pass-through, and an updated chamber design.",
        ],
      },
    ],
    quiz: [
      { q: "What material is the G Pen Dash II designed to vaporize?",
        choices: ["Dry herb only", "Concentrates and oils", "510 cartridges", "Any of the above"],
        answer: 0, why: "The Dash II is a dry herb vaporizer only — it is not compatible with concentrates, oils, or 510 carts." },
      { q: "How large is the Dash II's heating chamber?",
        choices: ["0.2g", "0.4g ceramic", "1.0g", "It has no chamber"],
        answer: 1, why: "The Dash II has an upgraded 0.4g ceramic chamber — larger than the original Dash and easier to load." },
      { q: "What type of heating system does the Dash II use?",
        choices: ["Convection", "Conduction", "Induction", "Open flame"],
        answer: 1, why: "It uses a conduction heating system, with roughly a 30-second heat-up." },
      { q: "Approximately how long does the Dash II take to heat up?",
        choices: ["5 seconds", "30 seconds", "2 minutes", "5 minutes"],
        answer: 1, why: "Heat-up is approximately 30 seconds." },
      { q: "What is the Dash II's battery capacity?",
        choices: ["650mAh", "900mAh", "1,100mAh", "2,200mAh"],
        answer: 2, why: "The Dash II is powered by a 1,100mAh battery — an upgrade over the original Dash." },
      { q: "Which statement about charging the Dash II is TRUE?",
        choices: ["It uses Micro-USB", "It charges via USB-C and supports pass-through (use while plugged in)", "It charges wirelessly only", "It cannot be used while charging"],
        answer: 1, why: "The Dash II charges via USB-C and supports pass-through charging, so it can be used while plugged in." },
      { q: "How do you power the Dash II on?",
        choices: ["Tap the button once", "Hold the button for 3 seconds", "Tap the button 5 times", "Slide the power switch"],
        answer: 1, why: "Hold the button for 3 seconds to power on." },
      { q: "After setting your temperature, how do you START a session?",
        choices: ["Tap the button 2× within 2 seconds", "Hold for 10 seconds", "Blow into the mouthpiece", "It starts automatically"],
        answer: 0, why: "Tap the button 2× (within 2 seconds) to start a session; tap 2× again to cancel." },
      { q: "For a DEEP clean, what should you use on the removed mouthpiece insert?",
        choices: ["Water and soap", "Isopropyl Alcohol", "Vinegar", "Just wipe it dry"],
        answer: 1, why: "For a deep clean, remove the mouthpiece insert and clean it with Isopropyl Alcohol, then let it dry completely before reassembling." },
      { q: "How does the Dash II's warranty work?",
        choices: ["No warranty", "Lifetime warranty", "6-month limited, extended to 1 year if you register the device", "30-day returns only"],
        answer: 2, why: "It's a 6-month limited warranty; registering at gpen.com/register adds 6 more months for a full year." },
      { q: "What is the Dash II's MSRP?",
        choices: ["$29.95", "$49.95", "$79.95", "$99.95"],
        answer: 1, why: "The Dash II launched at a lower MSRP of $49.95." },
      { q: "Which item is NOT included in the box?",
        choices: ["The Dash II device", "Built-in pick/loading tool", "Silicone mouthpiece sleeve", "A USB-C charging cable"],
        answer: 3, why: "A USB-C charging cable is not included — any USB-C charger can be used." },
    ],
  },

  "Dash+": {
    tagline: "Master the G Pen Dash+, then pass the quiz to become a certified Product Specialist.",
    minutes: 8, passPct: 80,
    modules: [
      { title: "Product Overview", points: [
        "The Dash+ is a compact, portable <strong>dry herb vaporizer</strong> — the plus-sized evolution of the best-selling G Pen Dash.",
        "It uses <strong>hybrid convection + conduction</strong> heating for fast, flavorful, even sessions.",
        "For <strong>dry herb only</strong>. MSRP <strong>$99.95</strong>.",
      ] },
      { title: "Key Specs", points: [
        "Full <strong>titanium</strong> heating chamber.",
        "Reaches vaporization temperature in as little as <strong>20 seconds</strong>.",
        "<strong>1,800mAh</strong> rechargeable Li-ion battery with <strong>USB-C</strong> charging.",
        "<strong>Full-color LED display</strong> with precise temperature control.",
        "<strong>Haptic feedback</strong> and an intuitive <strong>3-button</strong> interface.",
        "Durable <strong>zinc-alloy</strong> body.",
      ] },
      { title: "How to Use", points: [
        "<strong>Load:</strong> remove the mouthpiece, load the chamber with ground dry herb, and re-attach the mouthpiece.",
        "<strong>Power on/off:</strong> hold the power button for <strong>3 seconds</strong>.",
        "<strong>Adjust temperature</strong> with the left (–) and right (+) buttons.",
        "<strong>Start or cancel a session:</strong> press the power button <strong>2× within 2 seconds</strong>. It vibrates and the session timer begins once the temperature is reached.",
        "When the session timer ends, heating shuts off automatically; the device powers off after about 1 minute of standby inactivity.",
        "Press the power button <strong>5×</strong> to open the Settings menu (session timer, °F/°C, brightness, haptics).",
      ] },
      { title: "What's In the Box", points: [
        "G Pen Dash+ vaporizer, mouthpiece silicone sleeve, loading tool with keychain, and a <strong>USB-C charging cable</strong> (included).",
        "Register your device at <strong>gpen.com/register</strong>.",
      ] },
    ],
    quiz: [
      { q: "What type of heating does the Dash+ use?", choices: ["Conduction only", "Hybrid convection + conduction", "Open flame", "Induction"], answer: 1, why: "The Dash+ uses hybrid convection + conduction heating for fast, even, flavorful sessions." },
      { q: "What is the Dash+'s heating chamber made of?", choices: ["Plastic", "Titanium", "Glass", "Stainless steel"], answer: 1, why: "It features a full titanium heating chamber." },
      { q: "About how long does the Dash+ take to reach temperature?", choices: ["20 seconds", "2 minutes", "5 seconds", "45 seconds"], answer: 0, why: "The Dash+ reaches vaporization temperature in as little as 20 seconds." },
      { q: "What is the Dash+'s battery capacity?", choices: ["650mAh", "1,100mAh", "1,800mAh", "3,000mAh"], answer: 2, why: "It's powered by an 1,800mAh rechargeable Li-ion battery." },
      { q: "How do you power the Dash+ on?", choices: ["Tap once", "Hold the power button for 3 seconds", "Tap 5 times", "Shake it"], answer: 1, why: "Hold the power button for 3 seconds to power on or off." },
      { q: "After setting temperature, how do you START a session?", choices: ["Press the power button 2× within 2 seconds", "Hold for 10 seconds", "Blow into it", "It starts on its own"], answer: 0, why: "Press the power button 2× within 2 seconds to start (or cancel) a session." },
      { q: "How do you open the Settings menu?", choices: ["Press the power button 5×", "Hold both side buttons", "Tap once", "Plug in USB-C"], answer: 0, why: "Press the power button 5× to enter the Settings menu (timer, °F/°C, brightness, haptics)." },
      { q: "What kind of display does the Dash+ have?", choices: ["No display", "Monochrome OLED", "Full-color LED", "E-ink"], answer: 2, why: "The Dash+ has a full-color LED display." },
      { q: "What is the Dash+'s MSRP?", choices: ["$49.95", "$99.95", "$149.95", "$79.95"], answer: 1, why: "The Dash+ MSRP is $99.95." },
      { q: "What is the Dash+'s body made of?", choices: ["Zinc-alloy", "Silicone", "Wood", "Carbon fiber"], answer: 0, why: "The Dash+ has a durable zinc-alloy body." },
    ],
  },

  "Slim 3-Piece Grinder": {
    tagline: "Learn the G Pen Slim 3-Piece Grinder, then pass the quiz to become a certified Product Specialist.",
    minutes: 6, passPct: 80,
    modules: [
      {
        title: "Product Overview",
        points: [
          "The G Pen Slim is a <strong>3-piece grinder</strong> for flower — not a vaporizer.",
          "Its job is a <strong>consistent grind</strong> that is ideal for vaporization.",
          "Compact enough for <strong>pockets, travel and everyday carry</strong>.",
          "MSRP <strong>$19.95</strong>.",
        ],
      },
      {
        title: "What Makes It Different",
        points: [
          "<strong>Micro-rounded teeth</strong> — not the sharp teeth of a traditional grinder — gently separate flower.",
          "The gentler action helps <strong>preserve cannabinoids and terpenes</strong>, which carry a strain's potency and flavour.",
          "Rounded tooth geometry plus a <strong>smooth interior</strong> reduce friction and minimise buildup, so less flower is left behind.",
          "It is <strong>screenless</strong>: a 3-piece design has no kief screen, so <strong>trichomes stay mixed into the ground material</strong> instead of being sifted away.",
        ],
      },
      {
        title: "Build & Independent Testing",
        points: [
          "Machined from premium <strong>6063 aircraft-grade anodized aluminum</strong> for smooth rotation and durability.",
          "Independently tested by <strong>Orange Photonics</strong>.",
          "In that testing the micro-rounded tooth design showed the <strong>highest post-grind THC retention</strong> among the grinder styles tested.",
        ],
      },
      {
        title: "Selling It",
        points: [
          "Pairs with the <strong>G Pen Dash II</strong> and <strong>G Pen Dash+</strong> dry herb vaporizers.",
          "An even grind means a more efficient pack and better vapor production — an easy add-on to any dry herb device.",
          "Positioning line: <strong>Smarter by design. Better with every turn.</strong>",
        ],
      },
    ],
    quiz: [
      { q: "What is the G Pen Slim 3-Piece Grinder?",
        choices: ["A dry herb vaporizer", "A grinder for flower", "A 510 battery", "A concentrate dab tool"],
        answer: 1,
        why: "The Slim is a 3-piece grinder — it prepares flower, it does not vaporize it." },
      { q: "What kind of teeth does the Slim use?",
        choices: ["Traditional sharp teeth", "Micro-rounded teeth", "Serrated blades", "Ceramic burrs"],
        answer: 1,
        why: "Micro-rounded teeth gently separate flower, unlike a traditional sharp-tooth grinder." },
      { q: "Why does the rounded tooth design matter?",
        choices: ["It grinds faster than any other design", "It helps preserve cannabinoids and terpenes", "It lets you grind concentrates", "It removes the need to clean the grinder"],
        answer: 1,
        why: "The gentler separation helps preserve the cannabinoids and terpenes that make each strain unique." },
      { q: "What does “screenless” mean on this grinder?",
        choices: ["It has no lid", "There is no kief screen, so trichomes stay mixed with your ground material", "It cannot be taken apart", "It only works with dry flower"],
        answer: 1,
        why: "A 3-piece screenless design keeps trichomes in the ground material instead of sifting them into a separate chamber." },
      { q: "How many pieces does the Slim have?",
        choices: ["2", "3", "4", "5"],
        answer: 1,
        why: "It is a 3-piece grinder." },
      { q: "What material is the Slim made from?",
        choices: ["Stainless steel", "6063 aircraft-grade anodized aluminum", "Hemp bioplastic", "Anodized titanium"],
        answer: 1,
        why: "Premium 6063 aircraft-grade anodized aluminum gives smooth rotation and lasting durability." },
      { q: "Who independently tested the Slim's tooth design?",
        choices: ["Orange Photonics", "Santa Cruz Shredder", "SGS", "Underwriters Laboratories"],
        answer: 0,
        why: "Orange Photonics ran the independent testing." },
      { q: "What did that independent testing show?",
        choices: ["The fastest grind time", "The highest post-grind THC retention among the grinder styles tested", "The lowest price per gram", "The quietest operation"],
        answer: 1,
        why: "The micro-rounded tooth design demonstrated the highest post-grind THC retention among multiple grinder styles tested." },
      { q: "Which devices is the Slim positioned to pair with?",
        choices: ["Hydout and 510 Original", "Dash II and Dash+", "Melt and Connect", "Micro+ and Hyer"],
        answer: 1,
        why: "It is designed to pair with the G Pen Dash II and G Pen Dash+ dry herb vaporizers." },
      { q: "What is the MSRP of the G Pen Slim 3-Piece Grinder?",
        choices: ["$14.95", "$19.95", "$29.95", "$49.95"],
        answer: 1,
        why: "The Slim 3-Piece Grinder retails at $19.95." },
    ],
  },
  "Melt Hot Knife": {
    tagline: "Learn the G Pen Melt, then pass the quiz to become a certified Product Specialist.",
    minutes: 6, passPct: 80,
    modules: [
      { title: "Product Overview", points: [
        "The Melt is the <strong>smallest hot knife on the market</strong> — an electric, ceramic-tipped <strong>dab tool</strong> for concentrates.",
        "Designed for fast, clean, <strong>zero-mess</strong> scooping and drops.",
        "MSRP <strong>$24.95</strong>.",
      ] },
      { title: "Key Specs", points: [
        "<strong>Rapid-heat ceramic tip</strong>.",
        "<strong>USB-C pass-through charging</strong> — it can be used while charging.",
        "Sleek <strong>aluminum</strong> body.",
        "Ultra-compact: <strong>3.94 × 0.5 × 0.25 in</strong>, pocket &amp; travel-kit friendly.",
        "Pairs with rigs and the G Pen Micro+ / Hyer.",
      ] },
      { title: "How to Use", points: [
        "<strong>Power on:</strong> press the button <strong>5×</strong>.",
        "<strong>Heat:</strong> <strong>hold</strong> the button to start heating — it heats for a maximum of <strong>5 seconds</strong> per press.",
        "Use the hot ceramic tip to scoop or drop your concentrate.",
        "It can be operated <strong>while charging</strong> (always ready).",
        "The device powers off automatically after <strong>10 minutes</strong> of inactivity; the LED blinks <strong>8 times</strong> when it needs a charge.",
      ] },
      { title: "What's In the Box", points: [
        "G Pen Melt Hot Knife and a protective travel cap.",
        "<strong>A USB-C charging cable is NOT included</strong> — any USB-C charger works.",
      ] },
    ],
    quiz: [
      { q: "What is the G Pen Melt?", choices: ["A dry herb vaporizer", "An electric hot knife (dab tool) for concentrates", "A 510 battery", "A water pipe"], answer: 1, why: "The Melt is an electric, ceramic-tipped hot knife for scooping and dropping concentrates." },
      { q: "The Melt is marketed as the smallest ___ on the market.", choices: ["vaporizer", "hot knife", "battery", "rig"], answer: 1, why: "It's the smallest hot knife on the market." },
      { q: "What is the Melt's heated tip made of?", choices: ["Ceramic", "Titanium", "Quartz", "Steel"], answer: 0, why: "The Melt has a rapid-heat ceramic tip." },
      { q: "How do you START heating the Melt?", choices: ["Tap once", "Hold the button", "Press 5×", "It heats automatically"], answer: 1, why: "After powering on, hold the button to start heating." },
      { q: "What is the maximum heat time per press?", choices: ["5 seconds", "30 seconds", "2 minutes", "10 seconds"], answer: 0, why: "The device heats for a maximum of 5 seconds per press." },
      { q: "Can the Melt be used while it's charging?", choices: ["No", "Yes — USB-C pass-through", "Only on a special dock", "Only when full"], answer: 1, why: "Yes — it supports USB-C pass-through and can be operated while charging." },
      { q: "How long until the Melt auto powers off from inactivity?", choices: ["1 minute", "10 minutes", "1 hour", "It never does"], answer: 1, why: "It powers off automatically after 10 minutes of inactivity." },
      { q: "How do you power the Melt on?", choices: ["Press the button 5×", "Hold for 3 seconds", "Tap once", "Twist the cap"], answer: 0, why: "Press the button 5× to turn the Melt on." },
      { q: "How does the Melt signal it needs a charge?", choices: ["It beeps", "The LED blinks 8 times", "It gets hot", "Nothing"], answer: 1, why: "The LED button blinks 8 times when it's time to charge." },
      { q: "What is the Melt's MSRP?", choices: ["$12.95", "$24.95", "$49.95", "$99.95"], answer: 1, why: "The Melt MSRP is $24.95." },
    ],
  },

  "Hydout": {
    tagline: "Learn the G Pen Hydout, then pass the quiz to become a certified Product Specialist.",
    minutes: 7, passPct: 80,
    modules: [
      { title: "Product Overview", points: [
        "The Hydout is a compact, <strong>discreet 510 cartridge battery</strong> with a <strong>hidden magnetic mouthpiece cover</strong>.",
        "Adjustable voltage plus an LED display for smooth, customizable, low-key sessions.",
        "MSRP <strong>$24.95</strong>.",
      ] },
      { title: "Key Specs", points: [
        "<strong>5 heat settings</strong> from <strong>2.4V to 3.8V</strong>.",
        "<strong>1.8V</strong> 10-second preheat mode.",
        "<strong>400mAh</strong> rechargeable battery, <strong>USB-C</strong> charging.",
        "Bright <strong>LED display</strong>.",
        "Fits <strong>510 cartridges up to 2g</strong>.",
        "Dimensions: <strong>90 × 37.5 × 18.5 mm</strong>.",
      ] },
      { title: "How to Use", points: [
        "<strong>Load:</strong> remove the mouthpiece, screw in a 510 cartridge, and replace the mouthpiece.",
        "<strong>Power on/off:</strong> click the button <strong>5×</strong>.",
        "<strong>Adjust voltage:</strong> click <strong>3×</strong> to cycle the heat settings.",
        "<strong>Preheat:</strong> click <strong>2×</strong> for a 10-second 1.8V preheat.",
        "<strong>Draw:</strong> <strong>hold</strong> the button to activate and draw.",
        "Auto shut-off after <strong>2 minutes</strong> of inactivity.",
      ] },
      { title: "Care &amp; What's In the Box", points: [
        "Clean the mouthpiece and battery/cartridge connection with a cotton swab and <strong>Isopropyl Alcohol</strong>. <strong>Do not soak the battery.</strong>",
        "In the box: the Hydout 510 battery + magnetic mouthpiece cover. A 510 cartridge and USB-C cable are <strong>not included</strong>.",
      ] },
    ],
    quiz: [
      { q: "What is the G Pen Hydout?", choices: ["A dry herb vaporizer", "A 510 cartridge battery", "A hot knife", "A gravity infuser"], answer: 1, why: "The Hydout is a discreet 510 cartridge battery." },
      { q: "What is the Hydout's signature discreet feature?", choices: ["A hidden magnetic mouthpiece cover", "A folding screen", "A silent motor", "A camo wrap"], answer: 0, why: "It has a hidden magnetic mouthpiece cover for a discreet look." },
      { q: "What is the Hydout's voltage range?", choices: ["1.0V–2.0V", "2.4V–3.8V (5 settings)", "3.8V–4.8V", "A single fixed voltage"], answer: 1, why: "The Hydout offers 5 heat settings from 2.4V to 3.8V." },
      { q: "What is the Hydout's battery capacity?", choices: ["200mAh", "400mAh", "900mAh", "1,800mAh"], answer: 1, why: "It has a 400mAh rechargeable battery." },
      { q: "How do you power the Hydout on or off?", choices: ["Click the button 5×", "Hold for 3 seconds", "Click 2×", "Breathe in"], answer: 0, why: "Click the button 5× to turn the Hydout on or off." },
      { q: "How do you change the voltage?", choices: ["Click 3×", "Click 5×", "Hold the button", "Twist the mouthpiece"], answer: 0, why: "Click the button 3× to cycle through the heat settings." },
      { q: "How do you take a draw on the Hydout?", choices: ["Just inhale", "Hold the button while drawing", "Click 2×", "Press and release"], answer: 1, why: "Hold the button to activate and draw." },
      { q: "What does clicking the button 2× do?", choices: ["Turns it off", "Starts a 10-second 1.8V preheat", "Locks it", "Nothing"], answer: 1, why: "Clicking 2× starts a 10-second 1.8V preheat." },
      { q: "How long until the Hydout auto shuts off?", choices: ["2 minutes", "10 minutes", "30 seconds", "1 hour"], answer: 0, why: "The Hydout auto shuts off after 2 minutes of inactivity." },
      { q: "What is the correct way to clean the Hydout?", choices: ["Soak the whole battery in alcohol", "Cotton swab + Isopropyl Alcohol on the connection — do NOT soak the battery", "Rinse under water", "It never needs cleaning"], answer: 1, why: "Use a cotton swab with Isopropyl Alcohol on the connection points; never soak the battery." },
    ],
  },

  "510 Original": {
    tagline: "Learn the G Pen 510 Original, then pass the quiz to become a certified Product Specialist.",
    minutes: 6, passPct: 80,
    modules: [
      { title: "Product Overview", points: [
        "The 510 Original is the <strong>smallest and most affordable G Pen battery ever</strong> — a modern remake of Grenco's very first 2012 battery.",
        "An ultra-portable <strong>510 cartridge battery</strong> with <strong>breath activation</strong>.",
        "MSRP <strong>$12.95</strong>.",
      ] },
      { title: "Key Specs", points: [
        "<strong>Breath-activated</strong> — just inhale (or hold the button).",
        "<strong>Three preset voltages: 3.2 / 3.6 / 3.8V</strong>.",
        "<strong>1.8V</strong> 10-second preheat mode.",
        "<strong>400mAh</strong> battery with <strong>USB-C pass-through</strong> charging.",
        "Digital <strong>display</strong>.",
        "Dimensions: <strong>24 × 21.1 × 56.7 mm</strong>.",
      ] },
      { title: "How to Use", points: [
        "<strong>Load:</strong> screw in a 510 cartridge.",
        "<strong>Power on/off:</strong> click the button <strong>5×</strong>.",
        "<strong>Adjust voltage:</strong> click <strong>3×</strong> to cycle 3.2 / 3.6 / 3.8V.",
        "<strong>Preheat:</strong> click <strong>2×</strong> for a 10-second 1.8V preheat.",
        "<strong>Draw:</strong> simply <strong>breathe in</strong> (breath-activated) — or hold the button.",
        "Auto shut-off after <strong>10 minutes</strong> of inactivity.",
      ] },
      { title: "Care &amp; What's In the Box", points: [
        "Clean the battery/cartridge connection with a cotton swab and <strong>Isopropyl Alcohol</strong>. <strong>Do not soak the battery.</strong>",
        "In the box: the 510 Original battery. A USB-C charger and 510 cartridge are <strong>not included</strong>.",
      ] },
    ],
    quiz: [
      { q: "What is notable about the 510 Original?", choices: ["It's the largest G Pen battery", "It's the smallest and most affordable G Pen battery ever (a remake of the 2012 original)", "It's a dry herb vaporizer", "It only works with G Pen carts"], answer: 1, why: "It's the smallest, most affordable G Pen battery ever — a modern remake of Grenco's first 2012 battery." },
      { q: "How do you activate a draw on the 510 Original?", choices: ["Breathe in (it's breath-activated) — or hold the button", "Click 5×", "It won't draw without a screen tap", "Twist the cartridge"], answer: 0, why: "The 510 Original is breath-activated — just inhale, or hold the button." },
      { q: "What are the three preset voltages?", choices: ["2.4 / 3.0 / 3.6V", "3.2 / 3.6 / 3.8V", "1.8 / 2.4 / 3.0V", "3.8 / 4.2 / 4.8V"], answer: 1, why: "It has three preset voltages: 3.2, 3.6, and 3.8V." },
      { q: "What is the 510 Original's battery capacity?", choices: ["150mAh", "400mAh", "900mAh", "1,100mAh"], answer: 1, why: "It has a 400mAh battery with USB-C pass-through charging." },
      { q: "How do you power the 510 Original on or off?", choices: ["Click the button 5×", "Hold for 3 seconds", "Click 3×", "Breathe out"], answer: 0, why: "Click the button 5× to turn it on or off." },
      { q: "How do you change the voltage?", choices: ["Click 3×", "Click 5×", "Hold the button", "Screw the cart tighter"], answer: 0, why: "Click the button 3× to cycle through 3.2 / 3.6 / 3.8V." },
      { q: "What does clicking 2× do?", choices: ["Turns it off", "Starts a 10-second 1.8V preheat", "Locks the battery", "Nothing"], answer: 1, why: "Clicking 2× starts a 10-second 1.8V preheat." },
      { q: "How long until the 510 Original auto shuts off?", choices: ["2 minutes", "10 minutes", "30 seconds", "1 hour"], answer: 1, why: "It auto shuts off after 10 minutes of inactivity." },
      { q: "How does the 510 Original charge?", choices: ["Micro-USB", "USB-C pass-through", "Wireless only", "Replaceable batteries"], answer: 1, why: "It charges via USB-C and supports pass-through charging." },
      { q: "What is the 510 Original's MSRP?", choices: ["$12.95", "$24.95", "$49.95", "$9.95"], answer: 0, why: "At $12.95, it's the most affordable G Pen battery ever." },
    ],
  },
};
// The Retro colorways are the same device as the base model — reuse the same course.
window.PORTAL_TRAINING["Hydout — Retro"] = window.PORTAL_TRAINING["Hydout"];
window.PORTAL_TRAINING["510 Original — Retro"] = window.PORTAL_TRAINING["510 Original"];
