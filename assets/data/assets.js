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
  requestEmail: "pr@grencoscience.com", // "Request an asset" mailto target
  orderEmail: "pr@grencoscience.com",   // marketing-material order requests
  locatorEmail: "pr@grencoscience.com", // store-locator listing requests
  newWindowDays: 30,                          // how many days counts as "New"
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
    "Melt Hot Knife",
    "Hydout",
    "510 Original",
    "Hydout — Retro",
    "510 Original — Retro",
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

var LEGACY_FILES = {
  "Connect": {
    "Black / Lifestyle Photos": ["_STZ5948.jpg","_STZ5967.jpg","_STZ6545.jpg","_STZ0565.jpg","_STZ5869.jpg","_STZ5949.jpg","_STZ6712.jpg","_STZ6725.jpg","_STZ5919.jpg","_STZ6533.jpg","_STZ7310.jpg","_STZ6530.jpg","_STZ6535.jpg","_STZ7162.jpg","_STZ9318.jpg","_STZ6681-3.jpg","_STZ6499-3.jpg","_STZ6551-2.jpg","gpen_IG-129.jpg","_STZ6705hires.jpg","_STZ6725_extended.jpg"],
    "Black / Renders": ["10mm_Female.png","14mm_Female.png","18mm_Female.png","Connect Web Tank.png","Connect Web Boxed.png","Connect Web On Rig.png","Connect Web Battery.png","Connect_Web_Exploded.png","Connect_Riggler_Solo.png","Connect Web Rig Only.png","Connect Web Full Kit.png","Connect Web 14mmGlass.png","Connect Web Open Case.png","Connect Web 10mmGlass.png","Connect Web 18mmGlass.png","Connect Web Assembled.png","Connect_Web_On_Riggler.png","Connect Web Glass Mount.png","Connect Web Open Case Angle.png","Web_MJArsenal_Ursa_Rig_Only.png","Connect Web Tank.png","Web_MJArsenal_Ursa_w_Connect.png","Connect Web Boxed.png","Connect Web Battery.png","Connect_Web_Exploded.png","Connect Web Full Kit.png","Connect Web 9mmGlass.png","Connect Web 14mmGlass.png","Connect Web Open Case.png","Connect Web Assembled.png","Connect Web Glass Mount.png","Connect Web Open Case Angle.png","Web_MJArsenal_Ursa_Rig_Only.png","Web_MJArsenal_Ursa_w_Connect.png"],
    "Cookies / Lifestyle Photos": ["_ALF1293.jpg","DSC09656.jpg","DSC09644.jpg","DSC09628.jpg","_ALF1296.jpg","_ALF1308.jpg","_STZ0992.jpg","_GSH2132.jpg","_GSH2127.jpg","GPEN_COOKIESCOLLAB_CONNECT-2.jpg","GPEN_COOKIESCOLLAB_CONNECT-3.jpg"],
    "Cookies / Product Photos": ["Cookies_Connect_vape_thumb.png","Cookies_Connect_vape_thumb_3.jpg","Cookies_Connect_vape_thumb_2.jpg","Cookies_Connect_vape_thumb_1.jpg","Cookies_Connect_vape_thumb_5.jpg","Cookies_Connect_vape_thumb_4.jpg","Cookies_Connect_vape_thumb_6.jpg"],
    "Cookies / Renders": ["Cookies_Connect Web Tank.jpg","Cookies_Connect Web Boxed.jpg","Cookies_Connect Web On Rig.jpg","Cookies Connect Web Battery.jpg","Cookies Connect web exploded.jpg","Cookies Connect Web Full Kit.jpg","Cookies Connect Web Open Case.jpg","Cookies_Connect Web Assembled.jpg"],
    "Dr. Greenthumb's / Lifestyle Photos": ["_DSC9899.jpg","_DSC9841.jpg","_ALF9008.jpg","_ALF9010.jpg","_ALF9001.jpg","_D6A5912.jpg","_DSC0058.jpg","_DSC0041.jpg","_DSC9945.jpg","_DSC9915.jpg"],
    "Dr. Greenthumb's / Product Photos": ["DGT_Connect_vape_thumb.png","DGT_Connect_vape_thumb_4.jpg","DGT_Connect_vape_thumb_5.jpg","DGT_Connect_vape_thumb_6.jpg","DGT_Connect_vape_thumb_2.jpg","DGT_Connect_vape_thumb_3.jpg","DGT_Connect_vape_thumb_1.jpg"],
    "Dr. Greenthumb's / Renders": ["DGT_Connect Web Tank.png","DGT_Connect Web Boxed.png","DGT Connect web exploded.png","DGT Connect Web Full Kit.png","DGT Connect Web Assembled.png","DGT Connect Web Open Case.png"],
    "Lemonnade / Lifestyle Photos": ["_ALF9461.jpg","_ALF9463.jpg","_ALF9625.jpg","_ALF9500.jpg","_ALF9693.jpg","_ALF5065.jpg","_GSH7615.jpg","_GSH7611.jpg","_GSH7607.jpg","_GSH7646.jpg"],
    "Lemonnade / Product Photos": ["Lemon_Connect_vape_thumb.psd","Lemon_Connect_vape_thumb.png","Lemon_Connect_vape_thumb_6.jpg","Lemon_Connect_vape_thumb_5.jpg","Lemon_Connect_vape_thumb_4.jpg","Lemon_Connect_vape_thumb_1.jpg","Lemon_connect_vape_thumb_3.jpg","Lemon_Connect_vape_thumb_2.jpg"],
    "Lemonnade / Renders": ["Lemonnade Connect Boxed.png","Lemonnade Connect exploded.png","Lemonnade Connect Web Battery.png","Lemonnade Connect Web Full Kit.png","Lemonnade Connect Web Open Case.png","Lemonnade Connect Web Assembled.png"],
    "Logo": ["GS_Connect_Logo.eps","GS_Connect_Logo.png"],
    "Lemonnade / 1-Sheet": ["G Pen Lemonnade Connect 1-Sheet Email.pdf","G Pen Lemonnade Connect 1-Sheet Print.pdf"],
    "Black / Videos": ["ConnectSizzle.mp4","Reels_Connect_A.mp4","Connect Cleaning.mp4","Connect Cleaning II.mp4","G Pen Connect Error.mp4","xo.highness Connect August.mp4","Connect Commercial_A_FINAL_1.mp4","Connect Commercial_B_FINAL_1.mp4","Connect HowTo IG without text.mp4","Connect TechSpec Youtube 1080p.mp4"],
    "Dr. Greenthumb's / Videos": ["DGT Connect_Reels.mp4","Reels_DGT SG Connect.mp4","DGT SG Connect Glass Upstems.mp4","DGT Connect_Mobile with logos.mp4"],
    "Lemonnade / Video": ["Lemmonade Connect_Reels.mp4","Lemmonade Connect Mobile with Logos.mp4"]
  },
  "Dash": {
    "Black / Lifestyle Photos": ["_ALF2661.jpg","_ALF2644.jpg","_ALF2656.jpg","_ALF2626.jpg","_ALF2634.jpg","_ALF3763.jpg","_ALF2619.jpg","_ALF3684.jpg","_ALF3341.jpg","_ALF3762.jpg","_ALF2666.jpg","_ALF3329.jpg","G_PEN-DASH-8.jpg","G_PEN-DASH-1.jpg","G_PEN-DASH-4.jpg","G_PEN-DASH-2.jpg","_ALF3763 (1).jpg","G_PEN-DASH-12.jpg","_ALF2609-web-2.jpg","_ALF9279.jpg","_ALF9281.jpg","_ALF9283.jpg","_ALF9284.jpg","_ALF9287.jpg","_ALF9280.jpg","_ALF9297.jpg","_ALF9327.jpg","_ALF9421.jpg","_ALF9424.jpg","_ALF9429.jpg","_ALF9398.jpg","_ALF9430.jpg","_ALF9455.jpg","_ALF9477.jpg","_ALF9566.jpg","_ALF9524.jpg","_ALF9486.jpg","_ALF9480.jpg","_ALF9567.jpg","_ALF9568.jpg","_ALF9613.jpg","_ALF9569.jpg","_ALF9627.jpg","_ALF9618.jpg","_ALF9629.jpg","_ALF9646.jpg","_ALF9653.jpg","_ALF9754.jpg","_ALF9751.jpg","_ALF9825.jpg","_ALF9753.jpg","_ALF9838.jpg","_ALF9842.jpg","_ALF9863.jpg","_ALF9875.jpg","_ALF9896.jpg","_ALF9893.jpg","_ALF9899.jpg","_ALF9901.jpg","_ALF9902.jpg","_ALF9903.jpg","_ALF9904.jpg","_GSH3901.jpg","_GSH3909.jpg","_GSH3902.jpg","_GSH3915.jpg","_GSH3913.jpg","_GSH3917.jpg","_GSH3918.jpg","_ALF7908.jpg","_ALF7910.jpg","_ALF7918.jpg","_ALF7922.jpg","_ALF7926.jpg","_ALF7940.jpg","_ALF8009.jpg","_ALF8179.jpg","_ALF8183.jpg","_ALF8185.jpg","_ALF8192.jpg","_ALF8221.jpg","_ALF8228.jpg","_ALF8245.jpg","_ALF8775.jpg","_ALF8791.jpg","_ALF8787.jpg","_ALF8789.jpg","_ALF8790.jpg","_ALF8794.jpg","_ALF8797.jpg","_ALF8798.jpg","_ALF8893.jpg","_ALF8894.jpg","_ALF8895.jpg","_ALF8895-2.jpg","RNI-Films-IMG-349874D0-942E-400F-BB28-DBFFD1CFCB80.JPG"],
    "Black / Product Photos": ["dash_vape_thumb.psd","dash_vape_thumb.png","dash_vape_thumb_4.jpg","dash_vape_thumb_5.jpg","dash_vape_thumb_7.jpg","dash_vape_thumb_6.jpg","dash_vape_thumb_2.jpg","dash_vape_thumb_3.jpg","dash_vape_thumb_8.jpg","dash_vape_thumb_1.jpg"],
    "Black / Renders": ["Dash_Web_Kit.png","Dash_Web_Battery.png","Dash_Web_Unit_lrg.png","Dash_Web_Mouthpiece.png","Dash_Web_Mouthpiece straight.png"],
    "Cookies / Lifestyle Photos": ["Jenny2.jpeg","gpen-19.jpg","_ALF2595.jpg","_ALF1892.jpg","_ALF1850.jpg","_ALF2162.jpg","_ALF1941.jpg","IMG_1689.jpeg","IMG_1688.jpeg","_ALF1744-web-2.jpg","Berner x Gpen-18.JPG","Berner x Gpen-29.JPG","Berner x Gpen-15.JPG","GPEN_COOKIES_DASH-5.jpg","GPEN_COOKIES_DASH-4.jpg","GPen_Cookies_collab-5.jpg","GPen_Cookies_collab-6.jpg","GPen_Cookies_collab-11.jpg","GPen_Cookies_collab-15.jpg","GPen_Cookies_collab-16.jpg"],
    "Cookies / Renders": ["Cookies_Dash_Web_Kit.png","Cookies_Dash_Web_Unit.png","Cookies_Dash_Web_Battery.png","Cookies_Dash_Web_Mouthpiece.png","Cookies_Dash_Web_Mouthpiece Ortho.png"],
    "Dr. Greenthumb's / Lifestyle Photos": ["_ALF6032.jpg","_ALF6034.jpg","_D6A5011.jpg","_D6A5050.jpg","_ALF6039.jpg","_ALF1287.jpg","_ALF1384.jpg","_ALF1404.jpg","_ALF1211.jpg","_ALF1236.jpg","_D6A5003.jpg","_ALF1278.jpg","GPEN_DRGRNTHMB_DASH5.jpg"],
    "Dr. Greenthumb's / Renders": ["DGT_Dash_Web_Kit.png","DGT_Dash_Web_Unit.png","DGT_Dash_Web_Mouthpiece.png","DGT_Dash_Web_BatteryOnly.png","Dash_Web_Mouthpiece Ortho.png"],
    "Grateful Dead / Photos": ["_ALF1399.jpg","_ALF1760.jpg","_ALF1775.jpg","_ALF1418.jpg","_ALF1337.jpg","_ALF1718.jpg","_ALF1323.jpg","_ALF1336.jpg","_ALF1426.jpg","_ALF1384.jpg","_ALF1448.jpg","_ALF1776.jpg","_ALF1441.jpg","_GSH7058.jpg","_ALF1515.jpg","_ALF1328.jpg","_ALF1334.jpg","_ALF1438.jpg","_ALF1439.jpg","_ALF1335.jpg","_ALF1578.jpg","_ALF1425.jpg","_GSH7059.jpg","_ALF1741.jpg","_ALF1350.jpg","_ALF1493.jpg","_ALF1543.jpg","_ALF1331.jpg","_ALF1428.jpg","_ALF1324.jpg","_ALF1575.jpg","_ALF1338.jpg","_ALF1729.jpg","_ALF1689.jpg","_ALF1716.jpg","_ALF1339.jpg","_ALF1420.jpg","_ALF1325.jpg","_ALF1721.jpg","_ALF1527.jpg","_ALF1499.jpg","_ALF1765.jpg","_GSH7057.jpg","_ALF1327.jpg","_ALF1332.jpg","_ALF1318.jpg","_ALF1437.jpg","_ALF1423.jpg","_ALF1640.jpg","_ALF1722.jpg","_ALF1326.jpg","_ALF1333.jpg","_GSH7056.jpg","_GSH7060.jpg","_ALF1507.jpg","_ALF1775bw.jpg","_ALF1421bw.jpg","_ALF1438bw.jpg","_ALF1775-2bw.jpg","GD_dash_vape_thumb.png","_GSH6746.jpg","_GSH6737.jpg","_GSH6750.jpg","_GSH6751.jpg","_GSH6744.jpg","_GSH6749.jpg","_GSH6755.jpg","_GSH6740.jpg","_GSH6739.jpg","_GSH6738.jpg","_GSH6754.jpg","_GSH6741.jpg","_GSH6742.jpg","GD_dash_vape_thumb_5.jpg","GD_dash_vape_thumb_4.jpg","GD_dash_vape_thumb_7.jpg","GD_dash_vape_thumb_6.png","GD_dash_vape_thumb_3.jpg","GD_dash_vape_thumb_2.jpg","GD_dash_vape_thumb_1.jpg","_GSH6746-2.jpg","_GSH6749-2.jpg","_GSH6744-2.jpg","_ALF0290.jpg","_ALF0285.jpg","_ALF0271.jpg","_ALF0279.jpg","_ALF0265.jpg","_ALF0270.jpg","_ALF0291.jpg","_ALF0272.jpg","_ALF0267.jpg","_ALF0286.jpg","_ALF0293.jpg","_ALF0287.jpg","_ALF0292.jpg","_ALF0259.jpg","_ALF0273.jpg","_ALF0266.jpg","_ALF0300.jpg","_ALF0277.jpg","_ALF0262.jpg","_ALF0296.jpg","_ALF0282.jpg","_ALF0297.jpg","_ALF0276.jpg","_ALF0263.jpg","_ALF0301.jpg","_ALF0268.jpg","_ALF0303.jpg","_ALF0289.jpg","_ALF0295.jpg","_ALF0280.jpg","_ALF0261.jpg","_ALF0260.jpg","_ALF0275.jpg","_ALF0294.jpg","_ALF0281.jpg","_ALF0302.jpg","_ALF0288.jpg","_ALF0269.jpg"],
    "Grateful Dead / Web Renders": ["GD_Dash_Web_Kit.png","GD_Dash_Web_Unit.png","GD_Dash_Web_Kit.png","GD_Dash_Web_Unit.png","GD_Dash_Web_BoxRear.png","GD_Dash_Web_BoxFront.png","GD_Dash_Web_BoxRear.png","GD_Dash_Web_Unit_Rear.png","GD_Dash_Web_BoxFront.png","GD_Dash_Web_Mouthpiece.png","GD_Dash_Web_Unit_Rear.png","GD_Dash_Web_Mouthpiece.png","GD_Dash_Web_Box_Ortho_Rear.png","GD_Dash_Web_Box_Ortho_Front.png","GD_Dash_Web_Box_Ortho_Rear.png","GD_Dash_Web_Mouthpiece Ortho.png","GD_Dash_Web_Box_Ortho_Front.png","GD_Dash_Web_Mouthpiece Ortho.png"],
    "Lemonnade / Lifestyle Photos": ["_ALF5034.jpg","_ALF5036.jpg","_ALF4831.jpg","_ALF5029.jpeg","_GSH7431.jpeg","_ALF5031.jpeg","_ALF4857.jpeg"],
    "Lemonnade / Renders": ["Lemonnade_Dash_Web_Kit.png","Lemonnade_Dash_Web_Unit.png","Lemonnade_Dash_Transparent.png"],
    "Tyson 2.0 / Photos": ["_ALF8862.jpg","_ALF8863.jpg","_ALF8865.jpg","_STZ6568.jpg","_STZ6597.jpg","_STZ6610.jpg","_STZ6620.jpg","_STZ6627.jpg","_STZ6629.jpg","_STZ6641.jpg","DSCF7324.jpg","DSCF7326.jpg","DSCF7328.jpg","DSCF7337.jpg","DSCF7338.jpg","1K2A3379.jpg","1K2A3387.jpg","1K2A3405.jpg","1K2A3436.jpg","1K2A3463.jpg","1K2A3728.jpg","1K2A3869.jpg","1K2A3876.jpg","1K2A3877.jpg","1K2A3891.jpg","1K2A3894.jpg","TysonDashNov.jpg","1K2A3869 (1).jpg","1K2A3876 (1).jpg","1K2A3877 (1).jpg","1K2A3891 (1).jpg","1K2A3894 (1).jpg","TysonDashBackNov.jpg","Tyson_dash_vape_thumb.png","Tyson_dash_vape_thumb_2.jpg","Tyson_dash_vape_thumb_3.jpg","Tyson_dash_vape_thumb_1.jpg","Tyson_dash_vape_thumb_4.jpg","Tyson_dash_vape_thumb_5.jpg","Tyson_dash_vape_thumb_7.jpg","Tyson_dash_vape_thumb_6.jpg","tyson-Dashsmall.jpg","tyson-dashsmall3.jpg","tyson-dashsmall2.jpg","tyson dash select 800.jpg","tyson dash select2 800.jpg","tyson dash select3 800.jpg"],
    "Tyson 2.0 / Renders": ["Tyson_Dash_Web_Kit.png","Dash_Web_Mouthpiece.png","Tyson_Dash_Web_Front.png","Tyson_Dash_Web_Unit_Rear.png"],
    "Logos": ["Dash-Full-Logo.ai","Dash-Full-Logo.jpg"],
    "Lemonnade / 1-Sheet": ["G Pen Lemonnade Dash 1-Sheet Email.pdf","G Pen Lemonnade Dash 1-Sheet Print.pdf"],
    "Black / Videos": ["Dash TVs.mp4","Dash Wide.mp4","Dash TV logo.mp4","Dash TVs Logo.mp4","Dash Hammock.mp4","Dash Lifestyle.mp4","Reels_Dash Quick.mp4","Dash How To Video.mp4","Barbara Reels Dash.mp4","Dash_HowTo_Youtube.mp4","Dash how to (quick).mp4","Dash Teaser Youtube.mp4","Dash_TechSpec_Youtube.mp4","Syd Pool Dash.mp4","Maya Pool Dash.mp4","Syd Pool Dash GIF.mp4","Bensie Dash GIF C.mp4","Bensie Dash GIF A.mp4","Bensie Dash GIF B.mp4","Bensie Dash GIF D.mp4","Bensie Dash GIF E.mp4","Bensie Dash GIF F.mp4","Bensie Dash GIF G.mp4","Bensie Dash Slow Mo A.mp4","Bensie Dash Slow Mo B.mp4"],
    "Dr. Greenthumb's / Videos": ["Dash_Reels.mp4","Dash mobile with music logos.mp4"],
    "Grateful Dead / Videos": ["GD Dash No Smoking Wide.mp4","GD G Pen Teaser Wide.mp4","Reels GD Dash No smoking.mp4","Reels GD Dash_with smoke.mp4","GD G Dash From Above_B.mp4","GD G Dash From Above_C.mp4","GD G Dash From Above_A.mp4","GD Dash Teaser with box.mp4","GD G Pen Teaser Antenna.mp4","Larry GD Dash Desert.mp4","Marty Grimes GD Dash.mp4","GD G Pen Teaser Smoke behind.mp4","GD Dash Teaser_SmokeFrontFast.mp4","GD Dash Teaser Smoke Front Slow.mp4","GD Dash Teaser Smoke Front 02 short.mp4"],
    "Lemonnade / Videos": ["Reels Lemonnade Dash.mp4","Lemonnade Dash_01 Color.mp4"],
    "Tyson 2.0 / Video": ["TysonDashJan.mp4","Tyson G Pen Dash.mp4","TysonCoffeeHouse_Dash.mp4","Tyson Dash Camoraw Studio.mp4"]
  },
  "Elite II": {
    "Media / Photos": ["_ALF1946.jpg","_ALF1950.jpg","_ALF1953.jpg","_ALF1962.jpg","_GSH2675.jpg","_GSH2682.jpg","_GSH2683.jpg","_GSH2685.jpg","_GSH2686.jpg","_GSH2699.jpg","_GSH2703.jpg","_GSH2723.jpg","_GSH2728.jpg","_GSH2734.jpg","_GSH2735.jpg","_GSH2742.jpg","_GSH2768.jpg","_GSH2776.jpg","_GSH2777.jpg","_GSH2778.jpg","_GSH2779.jpg","_GSH2797.jpg","_GSH2801.jpg","_GSH2803.jpg","_GSH2809.jpg","_GSH2810.jpg","_GSH2813.jpg","_GSH2823.jpg","_GSH2826.jpg","_GSH2831.jpg","_GSH2832.jpg","_GSH2836.jpg","_GSH2841.jpg","_GSH2846.jpg","_GSH2847.jpg","_GSH2850.jpg","_GSH2868.jpg","_GSH2870.jpg","_GSH2873.jpg","_GSH2874.jpg","_GSH2875.jpg","_GSH2876.jpg","_GSH2877.jpg","_GSH2878.jpg","_GSH2883.jpg","_GSH2892.jpg","_GSH2895.jpg","_GSH2899.jpg","_GSH2903.jpg","_GSH2906.jpg","_GSH2910.jpg","_GSH2918.jpg","_GSH2924.jpg","_GSH2936.jpg","_GSH2940.jpg","_GSH2944.jpg","_ALF0109.jpg","_ALF0110.jpg","_ALF0111.jpg","_ALF0106.jpg","_ALF0115.jpg","_ALF0107.jpg","_ALF0118.jpg","_ALF0147.jpg","_ALF0131.jpg","_ALF0142.jpg","_ALF0132.jpg","_ALF0121.jpg","_ALF0218.jpg","_ALF0220.jpg","_ALF0248.jpg","_ALF0299.jpg","_ALF0285.jpg","_ALF0304.jpg","_ALF0307.jpg","_ALF0318.jpg","_ALF0387.jpg","_ALF0388.jpg","_ALF0409.jpg","_ALF0491.jpg","_ALF0435.jpg","_ALF0511.jpg","_ALF0513.jpg","_ALF0524.jpg","_ALF0525.jpg","_ALF0565.jpg","_ALF0627.jpg","_ALF0578.jpg","_ALF0633.jpg","_ALF0639.jpg","_ALF1901.jpg","_ALF1904.jpg","_ALF1909.jpg","_ALF1910.jpg","_ALF1911.jpg","_ALF1912.jpg","_ALF1913.jpg","_ALF1917.jpg","_ALF1919.jpg","_ALF1921.jpg","_ALF1922.jpg","_ALF1924.jpg","_ALF1927.jpg","_ALF1928.jpg","_ALF1930.jpg","_ALF1936.jpg","_ALF1938.jpg","_ALF1941.jpg","_ALF1942.jpg","_ALF1943.jpg","elite_II_vape_thumb.psd","elite_II_vape_thumb.png","elite_II_vape_thumb_6.jpg","elite_II_vape_thumb_7.jpg","elite_II_vape_thumb_5.jpg","elite_II_vape_thumb_4.jpg","elite_II_vape_thumb_9.jpg","elite_II_vape_thumb_1.jpg","elite_II_vape_thumb_8.jpg","elite_II_vape_thumb_3.jpg","elite_II_vape_thumb_2.jpg","elite_II_vape_thumb_10.jpg","JM020436.jpg","JM020446.jpg","JM020466.jpg","JM020480.jpg","JM020482.jpg","JM020506.jpg","JM020523.jpg","JM020530.jpg","JM020556.jpg","JM020583.jpg","JM020599.jpg","JM020602.jpg","JM020614.jpg","JM020631.jpg","JM020677.jpg","JM020809.jpg","JM020810.jpg","JM020829.jpg","JM020842.jpg","JM020844.jpg","JM020848.jpg","JM020852.jpg","JM020858.jpg","JM020879.jpg","JM020909.jpg","JM021065.jpg","JM021071.jpg","JM021072.jpg","JM021073.jpg","JM021074.jpg","_GSH3149.jpg","_GSH3156.jpg","_GSH3158.jpg","_GSH3162.jpg","_GSH3163.jpg","_GSH3164.jpg","_GSH3165.jpg","_GSH3169.jpg"],
    "Renders": [" elite-II_render_press-release_1000x750.jpg"],
    "Renders / Web": ["Elite2_Web_Unit.png","Elite2_web_OpenCase.png","Elite2_Web_Unit_rear.png","Elite2_Web_Mouthpiece.png","Elite2_Web_Unit_Angle1.png","Elite2_Web_Unit_Turned.png","Elite2_web_All_LayFlat.png","Elite2_Web_PickTool_Alt.png","Elite2_web_Case_and_unit.png","Elite2_Web_Mouthpiece_side.png","Elite2_Web_Mouthpiece_ortho.png","Elite2_Web_Mouthpiece_Insert.png","Elite2_web_OpenCase_LowAngle_NoShadow.png"],
    "Branding": ["elite-2-logo.ai","elite-2-logo.png","elite-plus_silhouette.ai"],
    "(root)": ["G Pen Elite II Tech Specs + Description.pdf"],
    "Sales Sheet": ["G Pen - One Sheet - Elite II.pdf"],
    "Media / Video": ["Michelle Elite II 01.mp4","Michelle Elite II 02.mp4","Michelle Elite II 03.mp4","Michelle Elite II 04.mp4","G Pen Elite II Unboxing.mp4","Elite2_Teaser_Instagram.mp4","Reels_G Pen Elite II Tess.mp4","Reels_UnboxingGPenEliteII.mp4","How To Use G Pen Elite II.mp4","Elite2_Teaser_1080p_Vimeo.mp4","Elite2 TechSpec Vimeo.mp4","How To Clean G Pen Elite II.mp4","Elite2_Teaser_1080p_Youtube.mp4","Elite2 TechSpec Youtube.mp4","Reels_How To Clean G Pen Elite II.mp4","Reels_How To Use Video_1_Activating.mp4","G Pen Elite II Tess Lifestyle.mp4","Reels_How To Use Video_3_Advanced Settings.mp4","Reels_How To Use Video_2_Silicone Sleevemp4.mp4"],
    "Video / Social Videos": ["Elite II Marni.mp4","Rosie Elite II GIF.mp4","Michelle Elite II 01.mp4","Michelle Elite II 02.mp4","Michelle Elite II 03.mp4","Michelle Elite II 04.mp4","Taestayfried Elite II.mp4","Alyssa Elite II Bathrub.mp4","Alyssa Elite II Heat Up.mp4","Alyssa Elite II Emptying.mp4","Barbara Elite Dance Reels.mp4","Reels_G Pen Elite II Tess.mp4","Reels_UnboxingGPenEliteII.mp4","Elite II Cannabis Creations.mp4","How To Clean G Pen Elite II.mp4","Larry w fan Sydney Elite II.mp4","Barbara Elite II_Flowers_Reel.mp4","G Pen Elite II Tess Lifestyle.mp4","Reels_G Pen Elite II Tess (1).mp4","QueendomofKushJoshuaTree_EliteII.mp4","Reels_How To Clean G Pen Elite II.mp4","Reels_How To Use Video_1_Activating.mp4","Reels_How To Use Video_2_Silicone Sleeve.mp4","Reels_How To Use Video_3_Advanced Settings.mp4","GPenEliteII_okokcreative_poplockandlemondrops.MOV"],
    "Video / TV Screen": ["Elite II Tess Logo.mp4","Elite II Tess Wide.mp4"]
  },
  "Micro+": {
    "Black / Photos": ["_ALF6243.jpg","_ALF6244.jpg","_ALF6245.jpg","_ALF6246.jpg","_ALF6248.jpg","_ALF6249.jpg","_ALF6279.jpg","_ALF6291.jpg","_ALF6292.jpg","_ALF6319.jpg","_ALF6320.jpg","_ALF6323.jpg","_ALF6328.jpg","_ALF6338.jpg","_ALF6342.jpg","_ALF6359.jpg","_ALF6361.jpg","_ALF6457.jpg","_ALF6458.jpg","_ALF6459.jpg","_ALF6460.jpg","_ALF6462.jpg","_ALF6463.jpg","_ALF7912.jpg","_ALF8146.jpg","_ALF7913.jpg","_ALF8145.jpg","_ALF8148.jpg","_ALF8160.jpg","_ALF8167.jpg","_ALF8170.jpg","_ALF8169.jpg","_ALF8173.jpg","_ALF8825.jpg","_ALF8809.jpg","_ALF8824.jpg","_ALF8835.jpg","_ALF8836.jpg","_ALF8840.jpg","_ALF8845.jpg","_ALF8846.jpg","_ALF8843.jpg","_ALF8904.jpg","_ALF8898.jpg","_ALF8900.jpg","_ALF9090.jpg","_ALF9097.jpg","_ALF9119.jpg","_ALF9132.jpg","_ALF9141.jpg","_GSH1007.jpg","_GSH1086.jpg","_GSH1088.jpg","_GSH1106.jpg","_GSH1111.jpg","_GSH9381.jpg","_GSH9406.jpg","_GSH9421.jpg","_GSH9423.jpg","DSC01747.JPG","_GSH9458.jpg","_GSH9460.jpg","G_PEN_5.jpg","G_PEN_1.jpg","GPEN_AFTER.jpg","IMG_3147 (2).jpg","micro+_vape_thumb.psd","micro+_vape_thumb.png","_ALF3020.jpg","_GSH0283.jpg","_ALF2970.jpg","_ALF2965.jpg","_ALF3059.jpg","_GSH0212.jpg","_ALF2900.jpg","_ALF2915.jpg","_GSH0231.jpg","_ALF2896.jpg","_ALF2936.jpg","_ALF2923.jpg","_ALF2937.jpg","_ALF2922.jpg","_ALF2882.jpg","_ALF2897.jpg","_GSH0239.jpg","_ALF2901.jpg","_ALF3067.jpg","_ALF2914.jpg","_GSH0213.jpg","_GSH0282.jpg","_GSH0308.jpg","_ALF2964.jpg","_GSH0301.jpg","_GSH0257.jpg","_ALF2945.jpg","_ALF2959.jpg","_ALF2966.jpg","_ALF2916.jpg","_ALF2903.jpg","_ALF2929.jpg","_GSH0218.jpg","_ALF2920.jpg","_ALF2935.jpg","_ALF2874.jpg","_GSH0226.jpg","_GSH0219.jpg","_ALF2921.jpg","_ALF2934.jpg","_ALF2875.jpg","_ALF2928.jpg","_ALF2917.jpg","_ALF2902.jpg","_ALF2967.jpg","_GSH0281.jpg","_ALF2993.jpg","_ALF2944.jpg","_ALF2963.jpg","_GSH0285.jpg","_GSH0299.jpg","_GSH0306.jpg","_ALF2925.jpg","_ALF2871.jpg","_ALF2930.jpg","_ALF2899.jpg","_ALF2913.jpg","_GSH0214.jpg","_ALF2878.jpg","_ALF3080.jpg","_GSH0215.jpg","_ALF2879.jpg","_ALF2898.jpg","_ALF2912.jpg","_ALF2907.jpg","_GSH0223.jpg","_ALF3068.jpg","_ALF2884.jpg","_ALF2924.jpg","_ALF2931.jpg","_ALF2962.jpg","_GSH0284.jpg","_GSH0324.jpg","_GSH0286.jpg","_ALF2960.jpg","_GSH0258.jpg","_ALF2943.jpg","_GSH0305.jpg","_ALF2969.jpg","_GSH0234.jpg","_ALF2919.jpg","_ALF2933.jpg","_ALF2872.jpg","_ALF3114.jpg","_ALF2926.jpg","_ALF3063.jpg","_ALF2904.jpg","_ALF2911.jpg","_GSH0216.jpg","_ALF2932.jpg","_ALF2873.jpg","_ALF2927.jpg","_ALF2918.jpg","_GSH0304.jpg","_ALF2968.jpg","_GSH0287.jpg","_ALF2961.jpg","micro+_vape_thumb_2.jpg","micro+_vape_thumb_3.jpg","micro+_vape_thumb_8.xmp","micro+_vape_thumb_1.jpg","micro+_vape_thumb_8.jpg","micro+_vape_thumb_9.jpg","micro+_vape_thumb_4.jpg","micro+_vape_thumb_5.jpg","micro+_vape_thumb_7.jpg","micro+_vape_thumb_6.jpg","_GSH0305.jpg","_ALF2943.jpg","_ALF2872.jpg","_ALF3114.jpg","_GSH0234.jpg","_GSH0304.jpg","_ALF2963.jpg","_GSH0299.jpg","_ALF2898.jpg","_ALF2907.jpg","_ALF3080.jpg","_GSH0215.jpg","_ALF2879.jpg","_GSH0223.jpg","_ALF3068.jpg","_ALF2884.jpg","_GSH0324.jpg","_ALF2959.jpg","_ALF2920.jpg","_ALF2874.jpg","_ALF2921.jpg","_GSH0226.jpg","_ALF2993.jpg","_ALF3020.jpg","_ALF3059.jpg","_GSH0212.jpg","_ALF2896.jpg","_GSH0282.jpg","_GSH0308.jpg","micro+_vape_thumb_010.jpg","micro+_vape_thumb_011.jpg","DSC01552.JPG","IMG_3151.jpg","DSC01747.JPG","DSC01422.JPG","DSC01428.JPG","micro+_vape_thumb_hand.jpg","_ALF3063-web-2.jpg","GPEN_MICRO_PHOTO-05.jpg","GPEN_MICRO_PHOTO-13.jpg","GPEN_MICRO_PHOTO-06.jpg","GPEN_MICRO_PHOTO-12.jpg","GPEN_MICRO_PHOTO-07.jpg","GPEN_MICRO_PHOTO-05.jpg","GPEN_MICRO_PHOTO-10.jpg","GPEN_MICRO_PHOTO-04.jpg","GPEN_MICRO_PHOTO-11.jpg","GPEN_MICRO_PHOTO-09.jpg","GPEN_MICRO_PHOTO-08.jpg","GPEN_MICRO_PHOTO-01.jpg","GPEN_MICRO_PHOTO-14.jpg","GPEN_MICRO_PHOTO-03.jpg","GPEN_MICRO_PHOTO-02.jpg","DSC01730 (1).JPG","IMG_3144 (1).jpg","IMG_3145 (1).jpg","IMG_3156 (1).jpg","IMG_3147 (2).jpg","_ALF3063-web-2.jpg"],
    "Black / Renders": ["Micro+_web_Front.png","MicroPlus_web_Tank.png","MicroPlus_web_Battery.png","MicroPlus_web_BoxFront.png","Micro+_web_All_LayFlat.png","MicroPlus_web_Tank_Front.png","Micro+_web_OpenCase_Flat.png","MicroPlus_web_ClosedCase.png","Micro+_web_OpenCase_Angle.png","MicroPlus_web_ClosedCase_Shadowed.png","MicroPlus_web_Mouthpiece_Replacement.png"],
    "Cookies / Photos": ["_GSH1204.jpg","_GSH1199.jpg","_GSH1196.jpg","_ALF4455.jpg","_ALF4230.jpg","_ALF4224.jpg","_ALF4219.jpg","_GSH1206-webb-2.jpg","Cookies_micro+_vape_thumb.png","Cookies_micro+_vape_thumb_2.jpg","Cookies_micro+_vape_thumb_3.jpg","Cookies_micro+_vape_thumb_1.jpg","Cookies_micro+_vape_thumb_8.jpg","Cookies_micro+_vape_thumb_9.jpg","Cookies_micro+_vape_thumb_4.jpg","Cookies_micro+_vape_thumb_5.jpg","Cookies_micro+_vape_thumb_7.jpg","Cookies_micro+_vape_thumb_6.jpg"],
    "Cookies / Renders": ["MicroPlus_web_Tank.png","Cookies_MicroPlus_web_Front.png","Cookies_MicroPlus_web_Battery.png","Cookies_MicroPlus_web_OpenCase.png","Cookies_MicroPlus_web_Exploded.png","Cookies_MicroPlus_web_ClosedCase.png","Cookies_MicroPlus_web_All_LayFlat.png","Cookies_MicroPlus_web_OpenCase_Angled.png","Cookies_MicroPlus_web_Front_GreenLight.png","Cookies_MicroPlus_web_Mouthpiece_Replacement.png"],
    "Dr. Greenthumb's / Photo": ["_ALF6510.jpg","_ALF6512.jpg","_ALF6514.jpg","_ALF6517.jpg","_ALF6521.jpg","_ALF6524.jpg","_ALF6525.jpg","_ALF6543.jpg","_ALF6588.jpg","_ALF6589.jpg","_ALF6594.jpg","_ALF6595.jpg","_ALF6596.jpg","_ALF6607.jpg","_ALF6609.jpg","_ALF6611.jpg","_ALF6614.jpg","_ALF6615.jpg","_ALF6617.jpg","DGT_Micro+_vape_thumb.png","DGT_Micro+_vape_thumb_1.jpg","DGT_micro+_vape_thumb_8.jpg","DGT_micro+_vape_thumb_9.jpg","DGT_Micro+_vape_thumb_2.jpg","DGT_Micro+_vape_thumb_3.jpg","DGT_Micro+_vape_thumb_7.jpg","DGT_micro+_vape_thumb_6.jpg","DGT_Micro+_vape_thumb_4.jpg","DGT_Micro+_vape_thumb_5.jpg"],
    "Dr. Greenthumb's / Renders": ["MicroPlus_web_Tank.png","DGT_MicroPlus_web_Front.png","DGT_MicroPlus_web_Battery.png","DGT_MicroPlus_web_OpenCase.png","DGT_MicroPlus_web_Front_Lit.png","DGT_MicroPlus_web_ClosedCase.png","DGT_MicroPlus_web_All_LayFlat.png","DGT_MicroPlus_web_OpenCase_Angled.png","DGT_MicroPlus_web_Mouthpiece_Replacement.png"],
    "Lemonnade / Photos": ["_ALF3520.jpg","_ALF3517.jpg","_ALF3530.jpg","_ALF3581.jpg","_ALF3534.jpg","_ALF3638.jpg","_ALF3678.jpg","_ALF3767.jpg","_ALF4065.jpg","Lemonnade_micro+_vape_thumb.png","Lemonnade_micro+_vape_thumb_1.jpg","Lemonnade_micro+_vape_thumb_8.jpg","Lemonnade_micro+_vape_thumb_9.jpg","Lemonnade_micro+_vape_thumb_2.jpg","Lemonnade_micro+_vape_thumb_3.jpg","Lemonnade_micro+_vape_thumb_7.jpg","Lemonnade_micro+_vape_thumb_6.jpg","Lemonnade_micro+_vape_thumb_4.jpg","Lemonnade_micro+_vape_thumb_5.jpg"],
    "Lemonnade / Renders": ["MicroPlus_web_Tank.png","Lemonnade_MicroPlus_web_Front.png","Lemonnade_MicroPlus_web_Battery.png","Lemonnade_MicroPlus_web_Exploded.png","Lemonnade_MicroPlus_web_OpenCase.png","Lemonnade_MicroPlus_web_ClosedCase.png","Lemonnade_MicroPlus_web_All_LayFlat.png","Lemonnade_MicroPlus_web_OpenCase_Angled.png","Lemonnade_MicroPlus_web_Mouthpiece_Replacement.png"],
    "Logos": ["Micro+ Logo.pdf","micro-plus-logo.ai"],
    "Black / Videos": ["Syd Pool Micro+.mp4","Bella Micro+ Reels.mp4","High Rise Micro+ 1.mp4","High Rise Micro+ 2.m4v","Herb.co Micro+ Dec.mp4","Micro+ Tutorial_Oct.mp4","Reels Micro+ How To.mp4","Natalia Micro+ Reels.mp4","Drifting Micro+ Peck.mov","Reels Cleaning Micro+.mp4","Micro+ Tech Specs_Oct.mp4","MicroPlus_Teaser_Reels.mp4","Bella Micro+30 seconds.mp4","Bella Micro+ Horizontal.mp4","MicroPlus_TechSpec_Vimeo.mp4","MicroPlus_TechSpec_Youtube.mp4","Micro+ Tutorial no captions.mp4","Micro+ Tutorial with captions.mp4"],
    "Cookies / Videos": ["Cookies G Pen Micro+.mp4","Cookies micro+_Reels.mp4","Cookies Micro+ Tech Specs_Oct.mp4","Cookies Micro+ Tech Spec Youtube.mp4"],
    "Dr. Greenthumb's / Video": ["DGT Micro+ Isa_Reels.mp4","DGT Micro+ Isa Final.mp4","DGT micro+ Tech Specs_Oct.mp4"],
    "Lemonnade / Video": ["Lemonnade Micro+_Reels.mp4","Lemonnade G Pen Micro+.mp4","Lemonnade Micro+ Tech Specs_Oct.mp4"]
  },
  "Roam": {
    "Black / Lifestyle Photos": ["_ALF3328.jpg","_ALF3313.jpg","_ALF1494.jpg","_ALF1780.jpg","_ALF3291.jpg","_ALF3319.jpg","_ALF1277.jpg","_ALF1017.jpg","_ALF1477.jpg","_ALF1529.jpg","_STZ9383.jpg","_ALF0489.jpg","_ALF0563.jpg","_ALF0506.jpg","_ALF1236.jpg","_ALF1382.jpg","_ALF1582.jpg","_ALF1613.jpg","_ALF2130.jpg","_ALF2144.jpg","_ALF1652.jpg","_GSH0041-2.jpg","_GSH0049-2.jpg","gpen_IG-95.jpg","_GSH0046-2.jpg","gpen_IG-104.jpg","gpenapril-47.jpg","gpenapril-38.jpg","gpenapril-70.jpg","gpenapril-91.jpg","gpenapril-106.jpg","gpenapril-114.jpg","IMG_0538-Edit.jpg"],
    "Black / Renders": ["Roam Front.png","Roam Cheat2.png","Roam Cheat3.png","Roam Turned.png","Roam All Side.png","Roam Atomizer.png","Roam Glass Tube.png","Roam Atomizer top.png","Roam All Exploded.png","Roam Battery Only.png","Roam Atomizer side.png","Roam All Open Case.png","Roam Mouthpiece Solo.png","Roam Lid Airflow Part.png","Roam Silicone Channel.png","Roam Exploded with Case.png","Roam Glass Tube and Mouthpiece.png"],
    "Cookies / Lifestyle Photos": ["_ALF2232.jpg","_GSH2278.jpg","_GSH2285.jpg","_ALF1759.jpg","_ALF1729.jpg","_ALF2019.jpg","_ALF1996.jpg","_ALF1902.jpg","_ALF1899.jpg","_ALF1751.jpg","_GSH2314.jpg","_GSH2324.jpg","IMG_1643.jpeg","gpen.cookies-3.jpg","gpen.cookies-24.jpg","GPEN_COOKIES_ROAM-4.jpg","GPEN_COOKIES_ROAM-5.jpg","GPen_Cookies_collab-32.jpg","GPen_Cookies_collab-24.jpg","GPen_Cookies_collab-25.jpg"],
    "Cookies / Renders": ["Cookies Web Roam Front.png","Cookies Web Roam Atomizer.png","Cookies Roam Battery Only.png","Cookies web Roam Glass Tube.png","Cookies Web Roam All Exploded.png","Cookies Web Roam All Open Case.png"],
    "Dr. Greenthumb's / Lifestyle Photos": ["_D6A4613.jpg","_D6A4423.jpg","_D6A4621.jpg","_ALF1334.jpg","_ALF1348.jpg","_ALF1352.jpg","_ALF1363.jpg","_ALF1372.jpg","_ALF1386.jpg","_ALF1389.jpg","_ALF1402.jpg","_ALF1404.jpg","_ALF1411.jpg","_ALF1435.jpg","_ALF1437.jpg","_ALF1446.jpg"],
    "Dr. Greenthumb's / Renders": ["DGT Roam Side.png","DGT Roam Front.png","DGT Roam Turned.png","DGT Roam Atomizer.png","DGT Roam Glass Tube.png","DGT Roam All Exploded.png","DGT Roam Battery Only.png","DGT Roam All Open Case.png","DGT Web Roam Mouthpiece Solo.png"],
    "Lemonnade / Lifestyle Photos": ["_ALF6907.jpg","_ALF6924.jpg","_ALF6896.jpg","_ALF6779.jpg","_ALF6967.jpg","_ALF6953.jpg","_ALF6808.jpg","_GSH7501.jpg","_GSH7499.jpg","_GSH7576.jpg","_GSH7581.jpg","_GSH7594.jpg","_GSH7417.jpg","_ALF4946.jpg","_ALF4944.jpeg","_GSH7575.jpeg"],
    "Lemonnade / Renders": ["Lemonnade_Roam_Rear.png","Lemonnade_Roam_Turned.png"],
    "Logos": ["GS_Roam_Logo.ai","GS_Roam_Logo.eps"],
    "Lemonnade / 1-Sheet": ["G Pen Lemonnade Roam 1-Sheet Email.pdf","G Pen Lemonnade Roam 1-Sheet Print.pdf"],
    "Black / Videos": ["Roam Sizzle_Final.mp4","Roam How To Final.mp4","Roam Sizzle_Reels.mp4","Reels_Roam How To.mp4","DeafAccessRoamHowTo.mov","Roam Sizzle_Weedtube.mp4","Roam_HowToVid_YouTube.mp4","Roam How To - 30 second.mp4","Roam_HowTo_Youtube_Updooted.mp4","Roam How To + Cleaning Final.mp4","Roam_TechSpec_Youtube_Updated.mp4"],
    "Dr. Greenthumb's / Videos": ["DGT Roam Nancy.mp4","Reels_DGT Roam.mp4","DGT Roam Reels.mp4","DGT x G Pen Roam.mp4"],
    "Lemonnade / Video": ["Lemonnade Roam_Ani.mp4","Reels_Lemonnade Roam.mp4","Lemonnade Roam Vertical.mp4"]
  },
  "Hyer": {
    "Black / Photos": ["_ALF5950.jpg","_ALF5804.jpg","_GSH7126.jpg","_ALF5798.jpg","_GSH7133.jpg","_ALF5920.jpg","_ALF5935.jpg","_ALF5860.jpg","_ALF5790.jpg","_GSH7132.jpg","_ALF5799.jpg","_ALF5819.jpg","_ALF5986.jpg","_GSH7149.jpg","_ALF5953.jpg","_ALF5984.jpg","_ALF5848.jpg","_GSH7138.jpg","_ALF5786.jpg","_ALF5937.jpg","_ALF5901.jpg","_GSH7141.jpg","_ALF5964.jpg","_ALF5734.jpg","_ALF5990.jpg","_GSH7162.jpg","_ALF5839.jpg","_ALF5981.jpg","_GSH7187.jpg","_ALF5739.jpg","_ALF5919.jpg","_ALF5755.jpg","_ALF5904.jpg","_GSH7158.jpg","_ALF5837.jpg","_ALF5949.jpg","_ALF5939.jpg","_ALF5913.jpg","_ALF5788.jpg","_ALF5743.jpg","_ALF5852.jpg","_ALF5906.jpg","_GSH7136.jpg","_ALF5846.jpg","_ALF5938.jpg","_ALF5931.jpg","_ALF5800.jpg","_ALF5962.jpg","_ALF8766.jpg","_ALF8771.jpg","_ALF8767.jpg","_ALF8768.jpg","_ALF8769.jpg","_ALF8770.jpg","_ALF8772.jpg","_ALF8773.jpg","_ALF8774.jpg","hyer_vape_thumb.png","hyer_vape_thumb.psd","_STZ8778.jpg","_ALF5484.jpg","_STZ8765.jpg","_ALF5416.jpg","_ALF5420.jpg","_ALF5510.jpg","_STZ8766.jpg","_ALF5428.jpg","_ALF5425.jpg","_ALF5430.jpg","_ALF5455.jpg","_ALF5523.jpg","_STZ8776.jpg","_STZ8780.jpg","_ALF5460.jpg","_ALF5502.jpg","_STZ8769.jpg","_ALF5427.jpg","_STZ2413.jpg","_STZ2414.jpg","_ALF0027.jpg","hyer_vape_thumb_1.jpg","hyer_vape_thumb_8.jpg","hyer_vape_thumb_9.jpg","hyer_vape_thumb_2.jpg","hyer_vape_thumb_3.jpg","hyer_vape_thumb_7.jpg","hyer_vape_thumb_6.jpg","hyer_vape_thumb_4.jpg","hyer_vape_thumb_5.jpg","_ALF0068.jpg","_ALF0074.jpg","_ALF0484.jpg","_ALF0267.jpg","_ALF0286.jpg","_ALF0293.jpg","_ALF0409.jpg","_ALF0549.jpg","_ALF0193.jpg","_ALF0318.jpg","_ALF0414.jpg","_ALF0292.jpg","_ALF0332.jpg","_ALF0216.jpg","_ALF0490.jpg","_ALF0357.jpg","_ALF0368.jpg","_ALF0525.jpg","_ALF0374.jpg","_ALF0041.jpg","_ALF0518.jpg","_ALF0109.jpg","_ALF0532.jpg","_ALF0179.jpg","_ALF0165.jpg","_ALF0574.jpg","_ALF0247.jpg","_ALF0253.jpg","_ALF0185.jpg","_ALF0581.jpg","_ALF0279.jpg","_ALF0338.jpg","_ALF0569.jpg","_ALF0039.jpg","_ALF0178.jpg","_ALF0526.jpg","_ALF0049.jpg","_ALF0108.jpg","_ALF0055.jpg","_ALF0396.jpg","_ALF0101.jpg","_ALF0497.jpg","_ALF0482.jpg","_ALF0204.jpg","_ALF0067.jpg","_ALF0537.jpg","_ALF0455.jpg","_ALF0359.jpg","_ALF0564.jpg","_ALF0268.jpg","_ALF0430.jpg","_ALF0195.jpg","_ALF0111.jpg","_ALF0358.jpg","_ALF0351.jpg","_ALF0059.jpg","_ALF0448.jpg","_ALF0130.jpg","_ALF0125.jpg","_ALF0398.jpg","_ALF0197.jpg","_ALF0037.jpg","_ALF0248.jpg","_ALF0551.jpg","_ALF0141.jpg","_ALF0545.jpg","_ALF0550.jpg","_ALF0432.jpg","_ALF0566.jpg","_ALF0314.jpg","_ALF0138.jpg","_ALF0529.jpg","_ALF0046.jpg","_ALF0489.jpg","_ALF0112.jpg","_ALF0206.jpg","_ALF0535.jpg","_ALF0239.jpg","_ALF0070.jpg","_ALF8618.jpg","_ALF8640.jpg","_ALF8662.jpg","_ALF8727.jpg","_ALF8687.jpg","_ALF8644.jpg","_ALF8658.jpg","_ALF8726.jpg","_ALF8617.jpg","_ALF8691.jpg","_ALF8698.jpg","_ALF8622.jpg","_ALF8713.jpg","_ALF8706.jpg","_ALF8725.jpg","_GSH8897.jpg","_GSH8896.jpg","_ALF8835.jpg","_ALF8665.jpg","_ALF8670.jpg","_ALF8691.jpg","_ALF8698.jpg","_ALF8707.jpg","_ALF8829.jpg","_ALF8667.jpg","_ALF8719.jpg","_ALF8693.jpg","_GSH8869.jpg","_ALF8743.jpg","_GSH8902.jpg","_GSH8875.jpg","_GSH8874.jpg","_GSH8880.jpg","_GSH8868.jpg","_ALF8687.jpg","_ALF8732.jpg","_ALF8673.jpg","_ALF8836.jpg","_ALF8704.jpg","_ALF8815.jpg","_ALF8736.jpg","_ALF8700.jpg","_GSH8891.jpg","_GSH8879.jpg","_GSH8907.jpg","_ALF8842.jpg","_ALF8752.jpg","_GSH8878.jpg","_GSH8871.jpg","_ALF8708.jpg","_ALF8663.jpg","_ALF8695.jpg","_ALF8735.jpg","_ALF8674.jpg","_ALF8689.jpg","_ALF8766.jpg","_ALF8759.jpg","_GSH8910.jpg","_GSH8886.jpg","_ALF8702.jpg","_ALF8728.jpg","_ALF7521.jpg","_ALF7522.jpg","_ALF7535.jpg","_ALF7524.jpg","_ALF7528.jpg","_ALF7523.jpg","_ALF7530.jpg","_ALF7534.jpg","_ALF7537.jpg","_ALF7547.jpg","_ALF7558.jpg","_ALF7554.jpg","_ALF7573.jpg","_ALF7916.jpg","_ALF7915.jpg","_ALF7668.jpg","_ALF7918.jpg","_ALF7670.jpg","_ALF7926.jpg","_ALF7938.jpg","_ALF7945.jpg","_ALF7974.jpg","_ALF7959.jpg","_ALF8547.jpg","_ALF8463.jpg","_ALF8522.jpg","_ALF8462.jpg","_ALF8500.jpg","_ALF8565.jpg","_ALF8528.jpg","_ALF8469.jpg","_ALF8481.jpg","_ALF8602.jpg","_ALF9241.jpg","_ALF8465.jpg","_ALF8524.jpg","_ALF8531.jpg","_ALF8470.jpg","_ALF8464.jpg","_ALF8525.jpg","_ALF8530.jpg","_ALF9239.jpg","_ALF8582.jpg","_ALF9240.jpg","_ALF8595.jpg","_ALF9242.jpg","_ALF8527.jpg","_ALF8466.jpg","_ALF8510.jpg","_ALF8533.jpg","_ALF8467.jpg","_ALF9243.jpg","hyer_vape_thumb_010.jpg","_STZ2441edit.jpg","_ALF8523-2.jpg","_STZ0001.jpg","_STZ0011.jpg","_STZ0003.jpg","_STZ0007.jpg","_STZ0009.jpg","_STZ0013.jpg","_ALF9277.jpg","_ALF9290.jpg","_ALF9278.jpg","_ALF9280.jpg","_ALF9281.jpg","_ALF9287.jpg","_ALF9291.jpg","_ALF9292.jpg","_ALF9298.jpg","_ALF9299.jpg","_STZ9770.jpg","_STZ9823.jpg","_STZ9771.jpg","_STZ9774.jpg","_STZ9838.jpg","_GSH6344.jpg","_GSH6345.jpg","_STZ9793.jpg","_STZ9819.jpg","_STZ9778.jpg","_STZ9794.jpg","_STZ9798.jpg","_STZ9812.jpg","_STZ9822.jpg","_STZ9831.jpg","_STZ9832.jpg","_STZ9837.jpg","_STZ9839.jpg","_GSH6346.jpg","_ALF0923.jpg","_ALF0877.jpg","_ALF0946.jpg","_ALF0839.jpg","_ALF0964.jpg","_ALF0922.jpg","_ALF0895.jpg","_ALF0902.jpg","_ALF0921.jpg","_ALF0939.jpg","_ALF0837.jpg","_ALF1005.jpg","_ALF1057.jpg","_ALF1040.jpg","_ALF0942.jpg","_ALF1062.jpg"],
    "Black / Renders": ["cap.png","body.png","tank.png","glass.png","Battery.png","Hyer_No_Rig_Black_1.jpg","Hyer_Beauty_BlackBG_1.png","Hyer_Beauty_BlackBG_2.png","CapAndTool.png","Hyer_No_Rig_Transparent.png","Hyer_web_Front.png","Hyer_Exploded.zip","Hyer_web_Front.png","CapAndTool_Side.png","Hyer_No_Rig_Black_1_WithTool.png","Hyer_web_PowerCord.png","Hyer_NoRig_LowAngle.png","Hyer_Exploded_Full.png","Hyer_web_PowerCord.png","Hyer_web_Case_Closed.png","Hyer_web_Case_Opened.png","Hyer_web_OilCap_Solo.png","Hyer_web_OilCap_Tool.png","Hyer_web_Unit_Angled.png","Hyer_NoRig_LowAngle_transparent.png","Hyer_No_Rig_HighAngle.png","Hyer_web_Housing_Only.png","Hyer_web_Case_Closed.png","Hyer_web_Case_Opened.png","Hyer_web_OilCap_Solo.png","Hyer_web_OilCap_Tool.png","Hyer_web_Unit_Angled.png","Hyer_web_Battery_Front.png","Hyer_web_OilCap_w-Tool.png","Hyer_No_Rig_HighAngle.png","Hyer_web_14mm_BlackBG.png","Hyer_web_14mm_DualUse.png","Hyer_web_14mm_WhiteBG.png","Hyer_web_Housing_Only.png","Hyer 10mm glass adapter.png","Hyer 14mm glass adapter.png","Hyer 18mm glass adapter.png","Hyer_web_Battery_Angled.png","Hyer_web_OnUnit_DualUse.png","Battery size reference.png","Hyer_web_Battery_Front.png","Hyer_web_OilTank_OpenTop.png","Hyer_Exploded_Reference.png","Hyer_web_Battery_Angled.png","Hyer_web_OnUnit_DualUse.png","Hyer_web_USB_Cable_Looped.png","Hyer_Assembled_Reference.png","Hyer_web_OilTank_OpenTop.png","Hyer_web_Case_Opened_Angled.png","Hyer_web_OilTank_Side_NoCap.png","Hyer_web_Case_Opened_Angled.png","Hyer_web_OilTank_Side_NoCap.png","Hyer_web_OnUnit_Front_BlackBG.png","Hyer_web_OnUnit_Front_WhiteBG.png","Hyer_NoRig_WithTool_LowAngle_transparent.png","Hyer_NoRig_LowAngle_LowAngle.png","Hyer_web_DryHerbTank_Top_NoCap.png","Hyer_web_OnUnit_Front_BlackBG.png","Hyer_web_OnUnit_Front_WhiteBG.png","Hyer_web_DryHerbTank_Side_NoCap.png","Hyer_web_DryHerbTank_Top_NoCap.png","Hyer_web_DryHerbTank_Top_WithCap.png","Hyer_web_DryHerbTank_Side_NoCap.png","Hyer_web_DryHerbTank_Side_WithCap.png","Hyer_web_DryHerbTank_Top_WithCap.png","Hyer_web_DryHerbTank_Side_WithCap.png","Hyer_NoRig_WithTool_LowAngle_transparent.png"],
    "Tyson 2.0 / Photos": ["_STZ9863.jpg","_STZ9872.jpg","_STZ9868.jpg","_STZ9874.jpg","_STZ9877.jpg","_STZ9879.jpg","Tysonhyer_vape_thumb.psd","Tysonhyer_vape_thumb.png","Tyson_hyer_vape_thumb.jpg","Tysonhyer_vape_thumb_1.jpg","_ALF6905.jpg","_ALF6896.jpg","_ALF6895.jpg","_ALF6904.jpg","_ALF6902.jpg","_ALF6906.jpg","_ALF6899.jpg","_ALF6908.jpg","_ALF6900.jpg","_ALF6918.jpg","_ALF6915.jpg","_ALF6912.jpg","_ALF6921.jpg","_ALF6913.jpg","_ALF6926.jpg","_ALF6923.jpg","_ALF6909.jpg","_ALF6927.jpg","Tyson_hyer_vape_thumb_7.jpg","Tyson_hyer_vape_thumb_6.jpg","Tyson_hyer_vape_thumb_4.jpg","Tyson_hyer_vape_thumb_5.jpg","Tyson_hyer_vape_thumb_8.jpg","Tyson_hyer_vape_thumb_2.jpg","Tyson_hyer_vape_thumb_3.jpg","_ALF6947.jpg","_ALF6945.jpg","_ALF6938.jpg","_ALF6941.jpg","_ALF6935.jpg","_ALF6930.jpg","_ALF6932.jpg","_ALF6937.jpg","_ALF6948.jpg","_ALF6950.jpg","_ALF6951.jpg","_ALF6949.jpg","_STZ8956.jpg","_STZ8966.jpg","_STZ8957.jpg","_STZ8959.jpg","_STZ8965.jpg","_STZ8958.jpg","_STZ8964.jpg","_STZ8960.jpg","_STZ8961.jpg","_STZ8974.jpg","_STZ8963.jpg","_STZ8976.jpg","_STZ8822.jpg","_STZ8819.jpg","_STZ8824.jpg","_STZ8820.jpg","_STZ8829.jpg","_STZ8825.jpg","_STZ8821.jpg","_STZ8834.jpg","_STZ8838.jpg","_STZ8840.jpg","_STZ8849.jpg","_STZ8851.jpg","_STZ8853.jpg","_STZ8847.jpg","_STZ8848.jpg","_STZ8842.jpg","_STZ8861.jpg","_STZ8867.jpg","_STZ8866.jpg","_STZ8871.jpg","_STZ8874.jpg","_STZ8886.jpg","_STZ8900.jpg","_STZ8879.jpg","_STZ8904.jpg","_STZ8909.jpg","_STZ8907.jpg","_STZ8919.jpg","_STZ8929.jpg","_STZ8932.jpg","_STZ8936.jpg","_STZ8876-2.jpg"],
    "Tyson 2.0 / Web Renders": ["Tyson_Hyer_Web_NoRig.png","Tyson_Hyer_web_OnRig.png","Tyson_Hyer_Web_NoRig.png","Tyson_Hyer_web_OnRig.png","Tyson_Hyer_web_Battery.png","Tyson_Hyer_web_Battery.png","Tyson_Hyer_Web_Case_Open.png","Tyson_Hyer_web_PowerCord.png","Tyson_Hyer_Web_Case_Front.png","Tyson_Hyer_Web_Case_Open.png","Tyson_Hyer_web_PowerCord.png","Tyson_Hyer_Web_Case_Closed.png","Tyson_Hyer_Web_Case_Front.png","Tyson_Hyer_Web_Case_Closed.png","Tyson_Hyer_web_Unit_High_Angle.png","Tyson_Hyer_web_Unit_High_Angle.png"],
    "Black / Logos": ["hyer_logo_white_text-only.ai","hyer_logo_black_no-kearning.ai"],
    "Black / Video": ["Hyer TVs.mp4","Hyer Bre Wide.mp4","Hyer TVs Logo.mp4","Hyer Bre TVs Logo.mp4","SG Hyer_.mp4","Bre Hyer GIF.mp4","SG Hyer_.mp4","Bre Hyer GIF.mp4","Bensie Hyer_B.mp4","Bensie Hyer_A.mp4","Hyer Bing Bop.mp4","Bearded Larry GIF.mp4","Mike Barr Hyer GIF.mp4","WizHyerReels.mp4","Bensie Hyer_B.mp4","Bensie Hyer_A.mp4","Reels Teaser_A_01.mp4","Reels Teaser_C_01.mp4","Reels Teaser_B_01.mp4","Hyer Pool_Olaf.mp4","Bensie Hyer_C Herb.mp4","Mike Barr Hyer GIF.mp4","Hyer Flowers.mp4","Hyer Pool_Ozzie.mp4","Hyer Teaser 1080p.mp4","Reels Teaser_A_01.mp4","Hyer Teaser 1080p.mp4","Reels Teaser_C_01.mp4","Reels Teaser_B_01.mp4","Hyer Teaser IG Reels.mp4","Koala April Hyer.MOV","Shiona Pink SG Hyer A.mp4","Hyer TechSpec Video.mp4","Syd Hyer Grav Circa GIF.mp4","Bensie Hyer_C Herb.mp4","Mike Barr Hyer_B_Reels.mp4","Reels Teaser_C_short_3.mp4","Reels Teaser_C_short_2.mp4","Reels Teaser_C_short_1.mp4","Reels Teaser_C_short_5.mp4","Mike Barr Hyer_A_Reels.mp4","Reels Teaser_C_short_4.mp4","Mike Barr Hyer_C_Reels.mp4","Hyer Teaser IG Reels.mp4","Hyer Teaser IG Reels.mp4","Syd Pool Hyer Grav Circa.mp4","Bun B SG Hyer Woods.mp4","Colbi Yoga Feb Hyer.mp4","Syd Pool Hyer Grav Oracle.mp4","Bre Hyer Lifestyle_Reels.mp4","Reels Teaser_C_short_4.mp4","Reels Teaser_C_short_5.mp4","Reels Teaser_C_short_2.mp4","Reels Teaser_C_short_3.mp4","Reels Teaser_C_short_1.mp4","Barbara Reels Hyer SG.mp4","Pink SG Hyer Bathroom.mp4","Tess Hyer Lifestyle_Reels.mp4","Reels_Dab Tool Screw in.mp4","Mike Barr Hyer_B_Reels.mp4","Mike Barr Hyer_C_Reels.mp4","Mike Barr Hyer_A_Reels.mp4","Reels_How To Use Hyer Herb.mp4","Larry 5SG Hyer.mp4","coop.drifts Hyer.mp4","Reels_How To Use Hyer Herb.mp4","Reels_Dab Tool Screw in.mp4","Forrest Pool Hyer Grav Oracle.mp4","Bre Hyer Lifestyle_Reels.mp4","RPReplay_Final1644212002.MOV","Reels_How To Deep Clean Hyer.mp4","Larry Hyer March.mov","CocoPuffsbackup Hyer.mp4","How To Clean Hyer_Horizontal.mp4","Reels_How To Deep Clean Hyer.mp4","Tess Hyer Lifestyle_Reels.mp4","Mike Barr Hyer_Horizontal.mp4","Tarzana Pool SG Hyer Flip.mp4","Bre Hyer Battery Change_Reels.mp4","Tyson SG Larry 360.mp4","Baysmokereviews Hyer.mp4","Bre Hyer Battery Change_Reels.mp4","GoStonerlifeHyerSG.mp4","Hyer HiAmericanIzzy.mp4","How To Use Hyer Herb_Horiztonal.mp4","Reels_Hyer Concentrate ASMR Tess.mp4","ArtbyMozart Hyer Dec.mp4","Bre Hyer Lifestyle Horizontal.mp4","Bre Hyer Battery Change_Reels.mp4","Pineapple Globes SG Hyer Pool.mp4","Reels_How To Use Hyer Concentrate.mp4","adeniamariee Hyer Jan.mp4","Reels_How To Use Hyer Concentrate.mp4","LarryTG SG 360_Florida.mp4","Art by Mozart Hyer Nov.mp4","Cardoz Hyer SG Reels_May.mp4","TheHighWomanHyerSG_April.mp4","HighAmericaIzzi_septshort.mp4","highamericaizzi hyer sept.mp4","McDaddyReviews Hyer Oct.mp4","TJ Mastermind 2 Hyers Oct.mp4","Artbymozart Hyer Zen short.mp4","Happylilhippiee Hyer Jan.mp4","Snappernickel Hyer Gasmask.mp4","How To Use Hyer Concentrate_Horizontal.mp4","Reels_Hyer Quartz Battery Heat Settings.mp4","SouthernDabber Hyer_March.mp4","HighAmericaIzizi March Hyer.mp4","Reels_Hyer Quartz Battery Heat Settings.mp4","Hyer Pineapple Glass Jungle13 BCN.mp4","Southern Dabber Hyer_April_B.mp4","Southern Dabber Hyer_April_C.mp4","Southern Dabber Hyer_April_A.mp4","Southern Dabber Hyer_April_D.mp4","Southern Dabber Hyer_April_E.mp4","Southern Dabber Hyer_April_G.mp4","Southern Dabber Hyer_April_F.mp4","ThatHighCouple Hyer Pancakes.mp4","TJmastermind dual Hyers Green SG.mp4","Seanstaystoned Hyer Unboxing Mar.mp4","Hyer Herb Tank Lens Probe SG Kompact_short.mp4","Artbymozart Hyer Thanksgiving Walk.mp4","Snappernickel hyer melt march trim.mp4","Seanstaystoned Hyer Rip march trim.mp4","tj_mastermind_710 double Hyers Feb trim.mp4"],
    "Tyson 2.0 / Video": ["Bearded Larry Tyson.mov","Mike Tyson Hyer Reels.mp4","Tyson Hyer Reels_Short.mp4","Larry Tyson Hyer March.mov","Tyson Hyer SG Gym Reels.mp4","Tyson Hyer SG Flip Reels.mp4","Tyson Hyer SG Horizontal.mp4","Tyson Hyer Encanto House.mp4","Larry Tyson Hyer Pumpkin.mp4","Mike Tyson Hyer Horizontal.mp4","EarthSmokesTysonHyerSG March.mp4","Encanto House Tyson Hyer Short.mp4","Larry Pumpkin Tyson Hyer short.mp4","Tyson2.0 SG Gloves Hyer Vegas_Edit.mp4"]
  }
};

/* Build a product's folders from LEGACY_FILES using the real Dropbox file names.
   Every file links to the product's shared Dropbox folder (durable rlkey link);
   "Download all" pulls the whole folder as a .zip. First image cell shows the
   cover so the gallery has a hero — same rendering as the current products. */
function mkFiles(productName, cover, dropboxUrl) {
  var groups = LEGACY_FILES[productName] || {}, f = {}, usedCover = false;
  Object.keys(groups).forEach(function (folderName) {
    var arr = groups[folderName].map(function (fn) {
      var ext = (fn.split(".").pop() || "").toLowerCase();
      var type = /^(mp4|mov|m4v|avi|webm)$/.test(ext) ? "video"
               : /^(svg|ai|eps)$/.test(ext) ? "vector"
               : ext === "pdf" ? "pdf" : "image";
      var thumb = null;
      if (type === "image" && !usedCover && cover) { thumb = cover; usedCover = true; }
      return { name: fn.replace(/\.[^.]+$/, ""), type: type,
        format: ext ? (ext === "jpeg" ? "JPG" : ext.toUpperCase()) : "",
        url: dropboxUrl || "#", thumb: thumb };
    });
    if (arr.length) f[folderName] = arr;
  });
  return f;
}

window.PORTAL_PRODUCTS = [
  /* ---------------------------------- G PEN -------------------------------- */
  {
    name: "Dash II", brand: "gpen", category: "Dry Herb", type: "Dry Herb Vaporizer",
    cover: CDN + "Dash2_thumb_01.png?v=1782934099",
    added: "2026-06-02",
    oneSheet: "#",
    // Real Dropbox shared folder for Dash II (TEST). "Download all" pulls this
    // folder as a .zip. Full per-file sync comes via the Dropbox API job.
    dropbox: "https://www.dropbox.com/scl/fo/5hz9ej94k16g5fdv87gtj/AKc2Ts1QEgWfRugLZ_GoFvM?rlkey=9ueqe3ucvu30dgp6hlgixclpq&dl=0",
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
    // Real Dropbox folder (durable rlkey link, no expiring st= token). "Download
    // all" pulls the whole folder as a .zip. Folders mirror the Dropbox names.
    dropbox: "https://www.dropbox.com/scl/fo/108b34jrd9bxryx34qil6/AHQA1sD2FzvZM4XjSUvv6E8?rlkey=rjxv6cytizy3d4ffk7i5f26dq&dl=0",
    folders: mkFiles("Connect", CDN + "connect_vape_thumb_797e6d48-f3e6-44f4-8bc8-da33a02b129c.png?v=1729247667", "https://www.dropbox.com/scl/fo/108b34jrd9bxryx34qil6/AHQA1sD2FzvZM4XjSUvv6E8?rlkey=rjxv6cytizy3d4ffk7i5f26dq&dl=0"),
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
    dropbox: "https://www.dropbox.com/scl/fo/a6lmzsjiawgjeiwklvho0/h?rlkey=vhqm2y94vgv2kvakwvbl39fvq&dl=0",
    folders: mkFiles("Hyer", CDN + "GlassCap_thumb_05_81ca4328-c1dc-49d1-8fad-cea56312b869.png?v=1765563306", "https://www.dropbox.com/scl/fo/a6lmzsjiawgjeiwklvho0/h?rlkey=vhqm2y94vgv2kvakwvbl39fvq&dl=0"),
  },
  {
    name: "Roam", brand: "gpen", category: "E-Rig",
    cover: CDN + "LemonnadeRoam_thumb_01.png?v=1768493533",
    added: "2026-03-30",
    oneSheet: "#",
    dropbox: "https://www.dropbox.com/scl/fo/hhscck78va88q3vriroup/AMtRY-P0vRv-cS1tHGklYVo?rlkey=hvjp5u49etu2j078wvl2e91bg&dl=0",
    folders: mkFiles("Roam", CDN + "LemonnadeRoam_thumb_01.png?v=1768493533", "https://www.dropbox.com/scl/fo/hhscck78va88q3vriroup/AMtRY-P0vRv-cS1tHGklYVo?rlkey=hvjp5u49etu2j078wvl2e91bg&dl=0"),
  },
  {
    name: "Dash", brand: "gpen", category: "Dry Herb",
    cover: CDN + "GD_dash_vape_thumb_9a82df65-c9a7-4128-8767-e979e2f46efc.png?v=1729247627",
    added: "2025-09-01",
    oneSheet: "#",
    dropbox: "https://www.dropbox.com/scl/fo/o9sllao2v19zj39rge8yt/ALWHLAjR4-DxIJ5TaRfYw4Q?rlkey=z82vipxgfln478zz40p9lwn1s&dl=0",
    folders: mkFiles("Dash", CDN + "GD_dash_vape_thumb_9a82df65-c9a7-4128-8767-e979e2f46efc.png?v=1729247627", "https://www.dropbox.com/scl/fo/o9sllao2v19zj39rge8yt/ALWHLAjR4-DxIJ5TaRfYw4Q?rlkey=z82vipxgfln478zz40p9lwn1s&dl=0"),
  },
  {
    name: "Elite II", brand: "gpen", category: "Dry Herb",
    cover: CDNP + "Elite2_Web_Mouthpiece_ortho.png?v=1692903123",
    added: "2025-10-12",
    oneSheet: "#",
    dropbox: "https://www.dropbox.com/scl/fo/4i3r2lru6bt3xnnx0nhh2/APkJPwAV7QjeMGe6Rs-WSZg?rlkey=bn0ejx8ho4t0m8ea7jztlx7ni&dl=0",
    folders: mkFiles("Elite II", CDNP + "Elite2_Web_Mouthpiece_ortho.png?v=1692903123", "https://www.dropbox.com/scl/fo/4i3r2lru6bt3xnnx0nhh2/APkJPwAV7QjeMGe6Rs-WSZg?rlkey=bn0ejx8ho4t0m8ea7jztlx7ni&dl=0"),
  },
  {
    name: "Micro+", brand: "gpen", category: "Concentrate", type: "Concentrate Vaporizer",
    cover: CDN + "micro__vape_thumb_77792dea-cdec-4453-9a99-e051615123c2.png?v=1729247631",
    added: "2025-08-15",
    oneSheet: "#",
    dropbox: "https://www.dropbox.com/scl/fo/2428y3p4kiyvgm9bj55x8/AECLTfW3qJHVAAAdzDuI8p8?rlkey=y343whyn7o9kj7p8t5mfwo7sx&dl=0",
    folders: mkFiles("Micro+", CDN + "micro__vape_thumb_77792dea-cdec-4453-9a99-e051615123c2.png?v=1729247631", "https://www.dropbox.com/scl/fo/2428y3p4kiyvgm9bj55x8/AECLTfW3qJHVAAAdzDuI8p8?rlkey=y343whyn7o9kj7p8t5mfwo7sx&dl=0"),
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
  // dimensions = single-unit product size (from gpen.com). unitWeight to be
  // supplied by ops (scraped store weights are ship weight, not bare unit).
  "Dash II":              { sku: "GPD-001-APZZ", pop: true, fullName: "DASH II VAPORIZER", upc: "852570004441", dimensions: "97 × 35 × 21 mm", innerPack: "10", masterCarton: "200", caseWeight: "16.07 kg", caseDimensions: "580 × 280 × 245 mm", boxImg: "assets/materials/dash-ii-retail-packaging.png", popImg: "assets/materials/dash-ii-pop-display.png" },
  "Melt Hot Knife":       { sku: "GHK-001-AOZZ", pop: true, dimensions: "3.94 × 0.5 × 0.25 in" },
  "510 Original":         { sku: "GSB-001-AOZZ", pop: true, dimensions: "24 × 21.1 × 56.7 mm" },
  "510 Original — Retro": { sku: "GSB-005-APZZ", pop: true, dimensions: "24 × 21.1 × 56.7 mm" },
  "Hydout":               { sku: "GHO-001-AOZZ", pop: true, dimensions: "90 × 37.5 × 18.5 mm" },
  "Hydout — Retro":       { sku: "GHO-006-AOZZ", pop: true, dimensions: "90 × 37.5 × 18.5 mm" },
  "Dash+":                { sku: "GPD-001-AMZZ", dimensions: "4.3 × 1.6 × 0.8 in" },
  "Connect":              { sku: "GPC-100-AJZZ" },
  "Roam":                 { sku: "GPR-001-AIZZ" },
  "Hyer":                 { sku: "GPH-001-ALZZ" },
};

/* "What's In the Box?" contents + components image per product (from gpen.com).
   { image: "<url>", contents: ["item", ...] } */
var PRODUCT_BOX = {
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
    if (img) { if (!p.info.popImg) p.info.popImg = img.thumb; p.info.pop = true; }
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
  // Real in-store marketing materials (hosted on Dropbox). thumb uses ?raw=1 for
  // inline display; url uses ?dl=1 so the ordering page / lightbox can download.
  // These are replaced automatically once the "In-Store Marketing General"
  // Dropbox folder syncs.
  return [
    { name: "Channel Letter", type: "image", format: "PNG", dim: "12\" L × 12\" W × 2\" D",
      thumb: "assets/materials/channel-letter.png", url: "assets/materials/channel-letter.png", file: "assets/materials/channel-letter.png" },
    { name: "Die-Cut Window Cling", type: "image", format: "PNG", dim: "8\" L × 8\" W",
      thumb: "assets/materials/die-cut-window-cling.png", url: "assets/materials/die-cut-window-cling.png", file: "assets/materials/die-cut-window-cling.png" },
    { name: "Fridge Magnet", type: "image", format: "PNG", dim: "2.5\" L × 2.5\" W",
      thumb: "assets/materials/fridge-magnet.png", url: "assets/materials/fridge-magnet.png", file: "assets/materials/fridge-magnet.png" },
    { name: "Lanyard", type: "image", format: "PNG", dim: "With vape holder",
      thumb: "assets/materials/lanyard.png", url: "assets/materials/lanyard.png", file: "assets/materials/lanyard.png" },
    { name: "Sticky Notes", type: "image", format: "PNG", dim: "2.5\" L × 2.5\" W · 25 notes per pad",
      thumb: "assets/materials/sticky-notes.png", url: "assets/materials/sticky-notes.png", file: "assets/materials/sticky-notes.png" },
    { name: "Dash II Table Tent", type: "image", format: "JPG", dim: "4\" W × 6\" H", product: "Dash II",
      thumb: "assets/materials/dash-ii-table-tent.jpg", url: "assets/materials/dash-ii-table-tent.jpg", file: "assets/materials/dash-ii-table-tent.jpg" },
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
          "Dimensions <strong>97 × 35 × 21 mm</strong>, weight <strong>62 g</strong>.",
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
