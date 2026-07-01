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
     brand     : "gpen" or "stundenglass"  (must match a brand key below)
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
  title: "Brand Asset Portal",
  tagline: "Everything you need, in one place.",
  intro:
    "The official asset portal for G Pen and Stündenglass. Product photography, lifestyle imagery, logos, video and spec sheets — organized by product, ready to download.",
  requestEmail: "pr@grencoscience.com", // "Request an asset" mailto target
  orderEmail: "pr@grencoscience.com",   // marketing-material order requests
  locatorEmail: "pr@grencoscience.com", // store-locator listing requests
  newWindowDays: 30,                          // how many days counts as "New"
  // Shown on each product page. Edit freely (or set to "" to hide).
  usageNote:
    "These assets are provided for approved partner, press, and retail use. Please don't alter logos or product imagery. Need something specific or a different format? Use “Request an asset.”",
};

/* Brand essentials (colors + fonts) power the "Brand essentials" panel.
   NOTE: these values are PLACEHOLDERS pulled from gpen.com / stundenglass.com
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
  stundenglass: {
    key: "stundenglass", name: "Stündenglass", wordmark: "STÜNDENGLASS",
    logoProduct: "Stündenglass Logos",
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Midnight", hex: "#1B1C30" },
      { name: "Paper", hex: "#FFFFFF" },
      { name: "Violet", hex: "#642AC9" },
      { name: "Stone", hex: "#E8E8E1" },
    ],
    fonts: [
      { name: "Montserrat", role: "Display / Headlines", stack: "'Montserrat', sans-serif" },
      { name: "Inter", role: "Body", stack: "'Inter', sans-serif" },
    ],
    // Official accounts (scraped from stundenglass.com — verify before launch).
    social: [
      { network: "Instagram", handle: "@stundenglass", url: "https://www.instagram.com/stundenglass" },
      { network: "X", handle: "@stundenglass", url: "https://x.com/stundenglass" },
      { network: "Facebook", handle: "Stündenglass", url: "https://www.facebook.com/stundenglass" },
      { network: "YouTube", handle: "Stündenglass", url: "https://www.youtube.com/channel/UCJv-OGIfGxTHHaQXubwuiUg" },
    ],
    faqUrl: "https://www.stundenglass.com/pages/faq-1",
    warrantyUrl: "https://www.stundenglass.com/pages/warranty",
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
    "Melt Hot Knife",
    "Hydout",
    "510 Original",
    "Hydout — Retro",
    "510 Original — Retro",
  ],
  stundenglass: [
    "Kompact",
    "Gravity Infuser",
    "Studio Kit",
  ],
};

/* Helper so the demo data stays short: builds the 5 standard folders.
   In real use you can also just write the folders object out by hand.

   `images` (optional) is an array of real image URLs. When provided, the
   image files (E-Comm + Lifestyle) get real thumbnails cycled from that list
   so the gallery looks populated. Without it, the first E-Comm image uses the
   `cover` and the rest fall back to icon placeholders. */
function mkFolders(cover, brandName, productName, counts, images) {
  var f = {};
  var defs = [
    ["E-Comm Render Photos", "image", "PNG"],
    ["Lifestyle Photos", "image", "JPG"],
    ["Logos", "vector", "SVG"],
    ["Social Videos", "video", "MP4"],
    ["TV Screen Videos", "video", "MP4"],
    ["Misc", "pdf", "PDF"],
  ];
  var pool = images && images.length ? images : null;
  var pick = 0;
  defs.forEach(function (d) {
    var folderName = d[0], type = d[1], fmt = d[2];
    var n = counts[folderName];
    // Back-compat: a single "Video" count fans out to both video folders.
    // Set "Social Videos" / "TV Screen Videos" explicitly to override per folder.
    if (n == null && (folderName === "Social Videos" || folderName === "TV Screen Videos")) n = counts["Video"];
    n = n || 0;
    var files = [];
    for (var i = 1; i <= n; i++) {
      var img = null, firstEComm = folderName.indexOf("E-Comm") === 0 && i === 1;
      if (type === "image") {
        if (pool) {
          // Real gallery: first E-Comm cell uses the cover, the rest cycle the pool.
          img = (firstEComm && cover) ? cover : pool[pick++ % pool.length];
        } else if (firstEComm) {
          // No image list given: only the first E-Comm cell previews (the cover).
          img = cover;
        }
      }
      files.push({
        name: productName.replace(/\s+/g, "_").toLowerCase() + "_" + folderName.split(" ")[0].toLowerCase() + "_" + i,
        type: type,
        format: fmt,
        url: img || "#",
        thumb: img,
      });
    }
    if (n > 0) f[folderName] = files;
  });
  return f;
}

var CDN = "https://cdn.shopify.com/s/files/1/0185/1576/files/";
var CDNP = "https://cdn.shopify.com/s/files/1/0185/1576/products/";
// Stündenglass store CDN (stundenglass.com). Placeholder imagery until the
// Stündenglass Dropbox/store is formally connected.
var SG = "https://cdn.shopify.com/s/files/1/1419/1556/files/";

window.PORTAL_PRODUCTS = [
  /* ---------------------------------- G PEN -------------------------------- */
  {
    name: "Dash II", brand: "gpen", category: "Dry Herb", type: "Dry Herb Vaporizer",
    cover: CDN + "Dash2_thumb_01.png?v=1782934099",
    added: "2026-06-02",
    oneSheet: "#",
    // Real Dropbox shared folder for Dash II (TEST). "Download all" pulls this
    // folder as a .zip. Full per-file sync comes via the Dropbox API job.
    dropbox: "https://www.dropbox.com/scl/fo/5hz9ej94k16g5fdv87gtj/AKc2Ts1QEgWfRugLZ_GoFvM?rlkey=9ueqe3ucvu30dgp6hlgixclpq&st=24fyalcp&dl=0",
    folders: mkFolders(CDN + "Dash2_thumb_01.png?v=1782934099", "G Pen", "Dash II",
      { "E-Comm Render Photos": 11, "Lifestyle Photos": 6, "Logos": 3, "Video": 2, "Misc": 1 }),
  },
  {
    name: "510 Original — Retro", brand: "gpen", category: "510 Battery", type: "510 Cartridge Battery",
    cover: CDN + "Purple510O_thumb_01.png?v=1779898092",
    added: "2026-05-19", newBadge: "purple",
    oneSheet: "#",
    folders: mkFolders(CDN + "Purple510O_thumb_01.png?v=1779898092", "G Pen", "510 Original Retro",
      { "E-Comm Render Photos": 8, "Lifestyle Photos": 4, "Logos": 3, "Video": 1, "Misc": 0 }),
  },
  {
    name: "Melt Hot Knife", brand: "gpen", category: "Accessory", type: "Electric Hot Knife",
    cover: CDN + "Melt_thumbA.png?v=1772813232",
    added: "2026-05-24",
    oneSheet: "#",
    folders: mkFolders(CDN + "Melt_thumbA.png?v=1772813232", "G Pen", "Melt",
      { "E-Comm Render Photos": 6, "Lifestyle Photos": 3, "Logos": 2, "Video": 1, "Misc": 1 }),
  },
  {
    name: "Connect", brand: "gpen", category: "Concentrate",
    cover: CDN + "connect_vape_thumb_797e6d48-f3e6-44f4-8bc8-da33a02b129c.png?v=1729247667",
    added: "2026-04-27",
    oneSheet: "#",
    folders: mkFolders(CDN + "connect_vape_thumb_797e6d48-f3e6-44f4-8bc8-da33a02b129c.png?v=1729247667", "G Pen", "Connect",
      { "E-Comm Render Photos": 14, "Lifestyle Photos": 5, "Logos": 3, "Video": 2, "Misc": 1 }),
  },
  {
    name: "510 Original", brand: "gpen", category: "510 Battery", type: "510 Cartridge Battery",
    cover: CDN + "510_on_white_01.png?v=1767045174",
    added: "2026-01-15",
    oneSheet: "#",
    folders: mkFolders(CDN + "510_on_white_01.png?v=1767045174", "G Pen", "510 Original",
      { "E-Comm Render Photos": 9, "Lifestyle Photos": 4, "Logos": 3, "Video": 1, "Misc": 0 }),
  },
  {
    name: "Hydout", brand: "gpen", category: "510 Battery", type: "510 Cartridge Battery",
    cover: CDN + "Hydout_vape_01.png?v=1762467078",
    added: "2025-12-10",
    oneSheet: "#",
    folders: mkFolders(CDN + "Hydout_vape_01.png?v=1762467078", "G Pen", "Hydout",
      { "E-Comm Render Photos": 10, "Lifestyle Photos": 5, "Logos": 3, "Video": 2, "Misc": 1 }),
  },
  {
    name: "Hydout — Retro", brand: "gpen", category: "510 Battery", type: "510 Cartridge Battery",
    cover: CDN + "Green_hydout_01_4b72ac42-025b-430e-937e-244203f17267.png?v=1765490119",
    added: "2025-12-03",
    oneSheet: "#",
    folders: mkFolders(CDN + "Green_hydout_01_4b72ac42-025b-430e-937e-244203f17267.png?v=1765490119", "G Pen", "Hydout Retro",
      { "E-Comm Render Photos": 8, "Lifestyle Photos": 4, "Logos": 2, "Video": 0, "Misc": 0 }),
  },
  {
    /* Cover pulled from gpen.com/products/g-pen-dash-plus-vaporizer.
       Asset counts are placeholders — update when real files are available. */
    name: "Dash+", brand: "gpen", category: "Dry Herb", type: "Dry Herb Vaporizer",
    cover: CDN + "dash__vape_thumb_5e14bcb4-a63a-4cc3-8078-e57fc572e4da.png?v=1729247649",
    added: "2026-04-15",
    oneSheet: "#",
    folders: mkFolders(CDN + "dash__vape_thumb_5e14bcb4-a63a-4cc3-8078-e57fc572e4da.png?v=1729247649", "G Pen", "Dash+",
      { "E-Comm Render Photos": 6, "Lifestyle Photos": 3, "Logos": 2, "Video": 1, "Misc": 0 }),
  },
  {
    name: "Hyer", brand: "gpen", category: "E-Nail",
    cover: CDN + "GlassCap_thumb_05_81ca4328-c1dc-49d1-8fad-cea56312b869.png?v=1765563306",
    added: "2025-11-20",
    oneSheet: "#",
    folders: mkFolders(CDN + "GlassCap_thumb_05_81ca4328-c1dc-49d1-8fad-cea56312b869.png?v=1765563306", "G Pen", "Hyer",
      { "E-Comm Render Photos": 7, "Lifestyle Photos": 4, "Logos": 3, "Video": 1, "Misc": 0 }),
  },
  {
    name: "Roam", brand: "gpen", category: "E-Rig",
    cover: CDN + "LemonnadeRoam_thumb_01.png?v=1768493533",
    added: "2026-03-30",
    oneSheet: "#",
    folders: mkFolders(CDN + "LemonnadeRoam_thumb_01.png?v=1768493533", "G Pen", "Roam",
      { "E-Comm Render Photos": 12, "Lifestyle Photos": 6, "Logos": 3, "Video": 2, "Misc": 1 }),
  },
  {
    name: "Dash", brand: "gpen", category: "Dry Herb",
    cover: CDN + "GD_dash_vape_thumb_9a82df65-c9a7-4128-8767-e979e2f46efc.png?v=1729247627",
    added: "2025-09-01",
    oneSheet: "#",
    folders: mkFolders(CDN + "GD_dash_vape_thumb_9a82df65-c9a7-4128-8767-e979e2f46efc.png?v=1729247627", "G Pen", "Dash",
      { "E-Comm Render Photos": 10, "Lifestyle Photos": 5, "Logos": 3, "Video": 1, "Misc": 1 }),
  },
  {
    name: "Elite II", brand: "gpen", category: "Dry Herb",
    cover: CDNP + "Elite2_Web_Mouthpiece_ortho.png?v=1692903123",
    added: "2025-10-12",
    oneSheet: "#",
    folders: mkFolders(CDNP + "Elite2_Web_Mouthpiece_ortho.png?v=1692903123", "G Pen", "Elite II",
      { "E-Comm Render Photos": 8, "Lifestyle Photos": 4, "Logos": 3, "Video": 1, "Misc": 0 }),
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

  /* ------------------------------ STÜNDENGLASS ----------------------------- */
  /* Placeholder imagery pulled from stundenglass.com (separate store, not yet
     formally connected). Replace `cover`/file urls once the Stündenglass
     Dropbox/store is connected. */
  {
    name: "Kompact", brand: "stundenglass", category: "Gravity",
    cover: SG + "Pink_Kompact_thumb_01.png", added: "2026-06-02", oneSheet: "#",
    folders: mkFolders(SG + "Pink_Kompact_thumb_01.png", "Stündenglass", "Kompact",
      { "E-Comm Render Photos": 6, "Lifestyle Photos": 3, "Logos": 2, "Video": 1, "Misc": 0 },
      [
        SG + "Pink_Kompact_thumb_01.png", SG + "Pink_Kompact_thumb_03.png",
        SG + "Pink_Kompact_thumb_02.png", SG + "Pink_Kompact_thumb_06.png",
        SG + "webPinkKompactStraightwithTravelCase.png", SG + "Pink_Kompact_thumb_05.png",
      ]),
  },
  {
    name: "Gravity Infuser", brand: "stundenglass", category: "Gravity",
    cover: SG + "SG_thumb_02_24234b17-6488-4e0a-84dd-25bb2202ef5f.png", added: "2025-09-15", oneSheet: "#",
    folders: mkFolders(SG + "SG_thumb_02_24234b17-6488-4e0a-84dd-25bb2202ef5f.png", "Stündenglass", "Gravity Infuser",
      { "E-Comm Render Photos": 12, "Lifestyle Photos": 6, "Logos": 3, "Video": 3, "Misc": 1 },
      [
        SG + "SG_thumb_02_24234b17-6488-4e0a-84dd-25bb2202ef5f.png", SG + "SG_thumb_01_0ce0f45e-2381-496b-8303-9f20a1791cbe.png",
        SG + "SG_thumb_05_2083262a-20fa-4c0e-b360-a1c349508b61.png", SG + "SG_thumb_07_2fd3ef28-63f8-4a36-bda9-186fd1fd77e4.png",
        SG + "SG_thumb_08_06d59fdd-631f-42ea-bd54-8e867a4ab527.png", SG + "SG_thumb_06_e35be35d-44f8-4dd7-886f-906aec5ddff9.png",
      ]),
  },
  {
    name: "Studio Kit", brand: "stundenglass", category: "Accessory",
    cover: SG + "Clear_DTS_thumb_04_cd0a66cb-75f6-47dc-8898-e84ecde0c902.png", added: "2026-05-20", oneSheet: "#",
    folders: mkFolders(SG + "Clear_DTS_thumb_04_cd0a66cb-75f6-47dc-8898-e84ecde0c902.png", "Stündenglass", "Studio Kit",
      { "E-Comm Render Photos": 5, "Lifestyle Photos": 2, "Logos": 1, "Video": 0, "Misc": 0 },
      [
        SG + "Clear_DTS_thumb_04_cd0a66cb-75f6-47dc-8898-e84ecde0c902.png", SG + "Clear_DTS_thumb_01_10d6e837-ff40-445b-80b8-5916172b5a73.png",
        SG + "Clear_DTS_thumb_03_0dd69e0b-f81f-4ef5-b0f2-fc2a77f36654.png", SG + "DokTravelCaseOpenedFlatClear_8746ab5c-651f-4f4f-8e93-b73d9b19ae0d.png",
        SG + "webDOKDeluxetravelkitlayflatClear.png",
      ]),
  },
  {
    name: "Stündenglass Logos", brand: "stundenglass", category: "Brand", isLogo: true,
    cover: null, added: "2026-06-05", oneSheet: "",
    folders: {
      "Logos": (function () {
        var arr = []; for (var i = 1; i <= 14; i++) arr.push({ name: "sg_logo_" + i, type: "vector", format: i % 2 ? "SVG" : "PNG", url: "#" }); return arr;
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
      mp4: "https://www.dropbox.com/scl/fi/75n3wv24t1f56dxnyvi49/G-Pen-Dash-2-Tutorial.mp4?rlkey=496dlhqzbmrhr01m882ar2sth&st=d16aeh6q&dl=0" },
    { title: "How to Clean: Dash II", thumbId: "wBOzqPxDhd8", youtube: "wBOzqPxDhd8",
      mp4: "https://www.dropbox.com/scl/fi/yzqxtivxnhbdfr9g7jak9/How-to-Clean-Your-Dash-II.mp4?rlkey=cg2m8xjg7fsxz0on2rcy4l4iq&st=x982tzj8&dl=0" },
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
    { title: "How to Use: G Pen 510 Original", vimeo: "1149053260", youtube: "_SF_4zkbZdI", thumb: "https://i.vimeocdn.com/video/2099496548-9f356818ba8ca793122dcf45c0911332ea2271f63bb31116c6e0da05b66d0b83-d_640?region=us" },
    { title: "How to Clean: G Pen 510 Original", vimeo: "1198848006", thumb: "https://i.vimeocdn.com/video/2165544391-c70c4c689b5becbd372bd32b6bf431be5c8442a4b1e6875cf85ed96e636747b5-d_640?region=us" },
  ],
  "510 Original — Retro": [
    { title: "How to Use: G Pen 510 Original", vimeo: "1149053260", youtube: "_SF_4zkbZdI", thumb: "https://i.vimeocdn.com/video/2099496548-9f356818ba8ca793122dcf45c0911332ea2271f63bb31116c6e0da05b66d0b83-d_640?region=us" },
    { title: "How to Clean: G Pen 510 Original", vimeo: "1198848006", thumb: "https://i.vimeocdn.com/video/2165544391-c70c4c689b5becbd372bd32b6bf431be5c8442a4b1e6875cf85ed96e636747b5-d_640?region=us" },
  ],
  "Hydout": [
    { title: "How to Use: G Pen Hydout", vimeo: "1105906397", youtube: "WK3EXouKwGs", thumb: "https://i.vimeocdn.com/video/2042536830-ad33a7ce448923a860282dcd9a0acade12fd6a9a18bf61116b68ea3954b4655c-d_640?region=us" },
    { title: "How to Clean: G Pen Hydout", vimeo: "1105958727", hash: "59fe004ad8", youtube: "e9oEXqNajh4", thumb: "https://i.vimeocdn.com/video/2042601767-c1a1df4b3c5e2f524fbdf5eab7af78886897186ff84062dcc1f01a49e8600c9a-d_640?region=us" },
  ],
  "Hydout — Retro": [
    { title: "How to Use: G Pen Hydout", vimeo: "1105906397", youtube: "WK3EXouKwGs", thumb: "https://i.vimeocdn.com/video/2042536830-ad33a7ce448923a860282dcd9a0acade12fd6a9a18bf61116b68ea3954b4655c-d_640?region=us" },
    { title: "How to Clean: G Pen Hydout", vimeo: "1105958727", hash: "59fe004ad8", youtube: "e9oEXqNajh4", thumb: "https://i.vimeocdn.com/video/2042601767-c1a1df4b3c5e2f524fbdf5eab7af78886897186ff84062dcc1f01a49e8600c9a-d_640?region=us" },
  ],
  "Dash+": [
    { title: "How to Use: G Pen Dash+", vimeo: "989095151", hash: "ebbe638ab0", youtube: "OzgMUHgEQao", thumb: "https://i.vimeocdn.com/video/1904791595-274b91c5aa41aa688212f27f78b73f010482b21cc15d9935379b05d73e63f851-d_640?region=us" },
    { title: "How to Clean: G Pen Dash+", vimeo: "989096678", hash: "38d053dfc5", thumb: "https://i.vimeocdn.com/video/1904792226-ecd92a819e1074a45154a6dff6b558c242612cf8c6a2bbd099d17f25a451d949-d_640?region=us" },
  ],
  "Hyer": [
    ["L5pIGbmtLU8", "Tyson 2.0 x G Pen Hyer"],
  ],
  // ---- Stündenglass ----
  "Gravity Infuser": [
    ["ZjST1m7crrs", "Getting Started with Your Stündenglass"],
    ["mi4t9DHKAoE", "How to Use Stündenglass Classic"],
    ["HinNP7St1Bg", "How to Clean Your Stündenglass"],
    ["w0XQWHg2Ff0", "Stündenglass Classic for Hookah"],
    ["dES3TIvA4ms", "Stündenglass Classic for Concentrate"],
    ["6zIZSCq2QDo", "Stündenglass Classic with Dry Material"],
  ],
  "Kompact": [
    ["mBuS1Vehvrw", "Kompact — Ready to Go Where You Go"],
  ],
  "Studio Kit": [
    ["dCbzXIiCyNI", "Modül Dok Deluxe Travel Set"],
    ["34wA6KJDi7g", "How to Use Stündenglass Modül Dok"],
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
   warranty, links). PLACEHOLDER content scraped from gpen.com / stundenglass.com
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
    warranty: "1-year limited warranty",
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
  // ---- Stündenglass ----
  "Gravity Infuser": {
    description: "A sophisticated 360° rotating glass infuser that generates kinetic motion via cascading water displacement, opposing airflow technology, and the natural force of gravity.",
    highlights: ["Patented 360° rotational design", "Cascading water displacement + opposing airflow", "Contactless, fully kinetic experience", "For hookah, concentrate, dry material, or food & beverage infusion"],
    warranty: "Extended 10-year limited warranty. Glass components not covered.",
    productUrl: "https://www.stundenglass.com/products/stundenglass-gravity-infuser",
  },
  "Kompact": {
    description: "The Kompact Gravity Infuser brings Stündenglass's patented 360° gravity system and immersive experience into a more refined, portable size.",
    highlights: ["Patented 360° gravity system", "More portable, refined size", "Same immersive Stündenglass experience"],
    warranty: "Extended 10-year limited warranty. Glass components not covered.",
    productUrl: "https://www.stundenglass.com/products/stundenglass-kompact-gravity-infuser",
  },
  "Studio Kit": {
    description: "Placeholder product hub for a Stündenglass accessory kit — official description and highlights to come.",
    warranty: "1-year limited warranty (365 days). Glass components not covered.",
  },
};

/* MSRP per product (pulled from the live store feeds — VERIFY before launch;
   e.g. confirm the Kompact price). Shown in the product hub. */
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
  "Gravity Infuser": "$599.95",
  "Kompact": "$599.95",
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
    "Why You’ll Love It:",
    "Stealth Design: Magnetic cover hides your 510 cart for ultra-discreet vaping",
    "Adjustable Voltage: 5 heat settings (2.4V–3.8V) + preheat mode for clog-free hits",
    "LED Display: Shows battery life + voltage so you’re always in control",
    "USB-C Charging: Fast, modern, and convenient",
    "Compatible with Most 510 Carts: Works with cartridges up to 2g",
    "⚡ Specs:",
    "Battery: 400mAh rechargeable",
    "Voltage: 2.4V / 2.8V / 3.2V / 3.6V / 3.8V",
    "Preheat Mode: 1.8V",
    "Size: 90mm x 37.5mm x 18.5mm",
    "Charging: USB-C (cable not included)",
    "📦 What’s In The Box:",
    "1x G Pen Hydout 510 Cartridge Battery",
    "1x Magnetic Mouthpiece Cover",
    "510 Cartridge not included",
    "USB-C Charging cable not included",
    "Whether you’re new to carts or a seasoned sesher, the G Pen Hydout 510 Cartridge Battery is the perfect vape battery to keep your sessions smooth, smart, and on the low.",
    "Get yours now—stealth mode never looked this good.",
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
    "Grenco Science is proud to introduce the next generation of portable dry herb vaporizers with the G Pen Dash+. Following in the footsteps of its predecessor, the massively popular G Pen Dash, the Dash+ sports a similarly compact profile with notable upgrades, including hybrid heating technology, precise temperature control, and a full-color LED display.",
    "The G Pen Dash+ features hybrid convection and conduction heating technology in a full Titanium chamber, capable of reaching vaporization temperatures in as little as 20 seconds. Outfitted with dual clean air intake channels and a magnetic mouthpiece with spiral ceramic air path, the Dash+ is designed to deliver superior vapor production and flavor.",
    "Equipped with an easy-to-use 3-button interface, a full-color LED display, and haptic feedback, the Dash+ makes it easy to customize and view session status in real-time, all with intuitive alerts. Dressed in a zinc-alloy casing and powered by a rechargeable 1,800mAh lithium-ion battery with USB-C charging, the G Pen Dash+ was built for extended use and utmost durability.",
    "Combining a high-tech, yet simple user interface with premium-grade materials in a sleek profile that is always ready for on-the-go use, the G Pen Dash+ was thoughtfully engineered to be the evolution in portable dry herb vaporization at a competitive price.",
    "*This Product is Not For Use With Tobacco, Nicotine-Containing E-liquids, or Any Synthetic Nicotine or Nicotine Substitute.",
  ],
  "Gravity Infuser": [
    "Stündenglass® is honored to introduce the Gravity Infuser, a sophisticated and elegantly designed 360° rotating glass infuser that generates kinetic motion activation via cascading water displacement, opposing airflow technology and the natural force of gravity. Constructed using the highest quality materials, including borosilicate glass globes and aircraft-grade anodized aluminum, the Stündenglass Gravity Infuser elicits an immersive experience while delivering smooth, consistent and vaporous draws.",
    "Designed for functional versatility, the Stündenglass Gravity Infuser is a complete set that includes an aluminum bowl kit and a glass liner, but can also connect to any smoking or vaporization device with a 14mm male joint. Using only fluid physics, a steady stream of smoke is force-air delivered through a 45° adjustable mouthpiece, providing an entirely contactless consumption.",
    "A patented design backed by an extended 10-year warranty, the Stündenglass Gravity Infuser comes packaged in a reusable craft box with a handle, allowing for safe storage and transportation. Durable, futuristic in design and superb function, the Stündenglass Gravity Infuser stands alone at the pinnacle of smoking and vaporization devices.",
  ],
  "Kompact": [
    "Introducing the newest sensation from Stündenglass, the Kompact Gravity Infuser. The Kompact features the same patented 360° gravity system, dynamic design, and immersive experience as the original, now available in a more refined, portable size that includes a custom-fit travel case.",
    "Coming in at just under a foot tall, the Kompact is exactly what you need to enjoy the benefits of Stündenglass in an easy to handle package. The smaller globes hold about two thirds of the volume, or 2 cups, compared to the full size, which creates cooler and faster pulls.",
    "The travel case is carefully crafted with high grade fabric and form-fitted to cradle the Kompact Stündenglass, which arrives full assembled. A beautiful metal inlayed logo plate adorns the front with an easy to use zipper, carrying handle and strap for over the shoulder use. Inside, there is space for accessories including a handy pocket to store anything extra you want to bring along with you.",
    "Designed for functional versatility, the Kompact Gravity Infuser is a complete set that includes an aluminum bowl kit and a glass liner but can also connect to any smoking or vaporization device with a 14mm male joint. Also included is a 3-foot silicone hose that can be connected to the 45° adjustable mouthpiece for direct draws or a steady stream of smoke for contactless consumption.",
    "The Kompact is a sophisticated and elegantly designed 360° rotating glass device that generates kinetic motion activation via cascading water displacement, opposing airflow technology, and the natural force of gravity. It is constructed using the highest quality materials, including borosilicate glass globes and aircraft-grade anodized aluminum.",
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
  // dimensions = single-unit product size (from gpen.com). unitWeight to be
  // supplied by ops (scraped store weights are ship weight, not bare unit).
  "Dash II":              { sku: "GPD-001-APZZ", pop: true, fullName: "DASH II VAPORIZER", upc: "852570004441", dimensions: "97 × 35 × 21 mm", innerPack: "10", masterCarton: "200", caseWeight: "16.07 kg", caseDimensions: "580 × 280 × 245 mm" },
  "Melt Hot Knife":       { sku: "GHK-001-AOZZ", pop: true, dimensions: "3.94 × 0.5 × 0.25 in" },
  "510 Original":         { sku: "GSB-001-AOZZ", pop: true, dimensions: "24 × 21.1 × 56.7 mm" },
  "510 Original — Retro": { sku: "GSB-005-APZZ", pop: true, dimensions: "24 × 21.1 × 56.7 mm" },
  "Hydout":               { sku: "GHO-001-AOZZ", pop: true, dimensions: "90 × 37.5 × 18.5 mm" },
  "Hydout — Retro":       { sku: "GHO-006-AOZZ", pop: true, dimensions: "90 × 37.5 × 18.5 mm" },
  "Dash+":                { sku: "GPD-001-AMZZ", dimensions: "4.3 × 1.6 × 0.8 in" },
  "Connect":              { sku: "GPC-100-AJZZ" },
  "Roam":                 { sku: "GPR-001-AIZZ" },
  "Hyer":                 { sku: "GPH-001-ALZZ" },
  "Gravity Infuser":      { sku: "SG2-KIT-STBK-02" },
  "Kompact":              { sku: "SG3-KIT-STBK-02" },
};

// Attach info (+ MSRP + SKU/packaging) to each product; empty object if none.
window.PORTAL_PRODUCTS.forEach(function (p) {
  p.info = PRODUCT_INFO[p.name] || {};
  if (PRODUCT_MSRP[p.name] && !p.info.msrp) p.info.msrp = PRODUCT_MSRP[p.name];
  if (PRODUCT_DESCRIPTION[p.name] && !p.info.fullDescription) p.info.fullDescription = PRODUCT_DESCRIPTION[p.name];
  var sk = PRODUCT_SKU[p.name];
  if (sk) Object.keys(sk).forEach(function (k) { if (p.info[k] === undefined) p.info[k] = sk[k]; });
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
    if (img) { p.info.popImg = img.thumb; p.info.pop = true; }
  });
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
  // Placeholder items until the "In-Store Marketing General" Dropbox folder is
  // connected — keeps the ordering page functional. Real photos replace these
  // automatically once the folder syncs (thumb: null → shows a photo icon).
  return [
    { name: "G Pen Napkins", type: "image", format: "", thumb: null, url: "#", file: null },
    { name: "G Pen Lanyard", type: "image", format: "", thumb: null, url: "#", file: null },
    { name: "G Pen Standee Display", type: "image", format: "", thumb: null, url: "#", file: null },
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

/* Web Banners placeholder — show the tab on every product page even before its
   Dropbox "Web Banners" folder exists. When the synced folder appears (with real
   banners) it replaces this empty placeholder automatically. */
(function () {
  window.PORTAL_PRODUCTS.forEach(function (p) {
    if (p.isLogo) return;
    if (!p.folders) p.folders = {};
    if (!p.folders["Web Banners"]) p.folders["Web Banners"] = [];
  });
})();
