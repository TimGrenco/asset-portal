/* =============================================================================
   DROPBOX SYNC — regenerates assets/data/synced.js from real Dropbox folders.
   Runs in GitHub Actions (see .github/workflows/dropbox-sync.yml). Node 18+.

   Env (GitHub Secrets): DROPBOX_APP_KEY, DROPBOX_APP_SECRET, DROPBOX_REFRESH_TOKEN

   For each product it lists the shared folder, walks the subfolders, and builds a
   thumbnail for EVERY file:
     - images  → Dropbox get_thumbnail_v2 (jpeg)
     - svg     → the vector itself (committed, renders natively)
     - pdf     → first page rendered with pdftoppm (poppler)
     - video   → a frame grabbed with ffmpeg
   Thumbnails are content-addressed (named by Dropbox content_hash) and committed
   under assets/synced/<slug>/, so unchanged files are never re-downloaded.
   Writes window.PORTAL_SYNCED into assets/data/synced.js.
   ========================================================================== */
import { writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync, createWriteStream } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const APP_KEY = process.env.DROPBOX_APP_KEY;
const APP_SECRET = process.env.DROPBOX_APP_SECRET;
const REFRESH = process.env.DROPBOX_REFRESH_TOKEN;
if (!APP_KEY || !APP_SECRET || !REFRESH) {
  console.error("Missing DROPBOX_* env vars — nothing to sync.");
  process.exit(0);
}

// Products to sync: portal product name → its public Dropbox shared-folder link.
const PRODUCTS = [
  {
    // `commitFiles` = commit the real originals so the browser can download/zip
    // them in-portal. Only Dash II (the launch showcase) does this; other
    // products stay thumbnail-only and download via "Download all" / Dropbox,
    // which keeps the published site well under GitHub Pages' 1 GB ceiling.
    name: "Dash II",
    slug: "dash-ii",
    commitFiles: true,
    link: "https://www.dropbox.com/scl/fo/5hz9ej94k16g5fdv87gtj/AKc2Ts1QEgWfRugLZ_GoFvM?rlkey=9ueqe3ucvu30dgp6hlgixclpq&dl=0",
  },
  { name: "510 Original", slug: "510-original", link: "https://www.dropbox.com/scl/fo/mtuk2kb73ln5pv0qj68y5/AOnLPmrirA3wsvOdaA0v9rw?rlkey=e8svbeey6dql240rjqzch9qco&st=tvt2s0qf&dl=0" },
  { name: "510 Original — Retro", slug: "510-original-retro", link: "https://www.dropbox.com/scl/fo/shfo4arqn8cb0hgs7wbi5/AH9A3v7LBdLMtbzkJRi15zE?rlkey=4hyypo3a92gplotrlfp55rlxk&st=te4ygopg&dl=0" },
  { name: "Dash+", slug: "dash-plus", link: "https://www.dropbox.com/scl/fo/5wps4y20eqmpbzj0j4ijq/h?rlkey=5bna5as30dz79lmqumcml47x7&st=xt8upom3&dl=0" },
  { name: "Hydout", slug: "hydout", link: "https://www.dropbox.com/scl/fo/n9ddtzpx0x057qsdmfwoy/AHXmj-4gwaME5kQLZSmcBgw?rlkey=jy88uxm10tctjt6759gw015r4&st=frr8irpc&dl=0" },
  { name: "Hydout — Retro", slug: "hydout-retro", link: "https://www.dropbox.com/scl/fo/fnsys0ijwhl2059nu45u5/AEE18ADvSJZ1RYdf0EDDk0Q?rlkey=2cz8o729ku9u1c9unhewv55wr&st=5lrpymts&dl=0" },
  { name: "Melt Hot Knife", slug: "melt", link: "https://www.dropbox.com/scl/fo/qvw93szg11i4ka3d9yuaq/AC8I-n2z09RvRGiA__rNYEs?rlkey=a0yhcy2ok0j1l4dnmk6ktwcoy&st=zx3371he&dl=0" },
  {
    // Overall G Pen brand logos (black/white/various). Powers the homepage
    // "Logos and Brand Assets" section. `flat` = folder name to bucket files
    // under if the Dropbox folder has no subfolders.
    name: "G Pen Logos",
    slug: "gpen-logos",
    link: "https://www.dropbox.com/scl/fo/gjjl69xfmfxqdxg87vym9/h?rlkey=q17pigcl81qcvr7rzcv2xpne3&st=wok0w9o7&dl=0",
    flat: "Logos",
    pngThumbs: true,
  },
  {
    // Central library of retail POP display images — matched to each product's
    // "Retail POP display" packaging card by filename (see assets.js).
    name: "POP Displays",
    slug: "pop-displays",
    link: "https://www.dropbox.com/scl/fo/z31rov1tjw0rm2fy7qssw/ABSnVsz5hLjhid95WhqyajM?rlkey=jkld2f2m07jctowd5x1ao357b&st=lmrqshh4&dl=0",
    flat: "POP Displays",
  },
];

const FOLDER_ORDER = ["Product Photos", "Lifestyle Photos", "Logos", "Social Videos", "TV Screen Videos", "Packaging", "In-Store Marketing", "Documents"];
// Normalize inconsistent Dropbox folder names to the canonical tab names above,
// so a folder called "TV Screen" or "Video" still lands in the right section.
const FOLDER_ALIAS = {
  "TV Screen": "TV Screen Videos", "TV Screens": "TV Screen Videos", "TV Videos": "TV Screen Videos",
  "Video": "Social Videos", "Videos": "Social Videos", "Social Video": "Social Videos",
  "Lifestyle": "Lifestyle Photos", "Lifestyle Photo": "Lifestyle Photos",
  "Product Photo": "Product Photos", "Product Images": "Product Photos", "E-Comm": "Product Photos",
  "Misc": "Documents", "Docs": "Documents", "Logo": "Logos",
  "In Store Marketing": "In-Store Marketing", "Instore Marketing": "In-Store Marketing",
  "In-Store Materials": "In-Store Marketing", "In Store Materials": "In-Store Marketing",
  "POS": "In-Store Marketing", "POS Materials": "In-Store Marketing", "Point of Sale": "In-Store Marketing",
  "Retail Marketing": "In-Store Marketing", "In Store": "In-Store Marketing",
};
const MAX_COMMIT = 50 * 1024 * 1024;   // commit originals up to 50 MB (bigger files → Dropbox)
const RASTER = /\.(jpe?g|png|gif|webp|bmp|tiff?)$/i;   // Dropbox can thumbnail these directly
const VIDEO = /\.(mp4|mov|m4v|webm|avi|mkv)$/i;

function dlLink(link) { return /[?&]dl=/.test(link) ? link.replace(/([?&]dl=)\d/, "$11") : link + (link.includes("?") ? "&dl=1" : "?dl=1"); }
function ext(name) { return (name.split(".").pop() || "").toLowerCase(); }
function typeOf(e) {
  if (e === "svg") return "vector";
  if (RASTER.test("." + e)) return "image";
  if (VIDEO.test("." + e)) return "video";
  if (e === "pdf") return "pdf";
  return "file";
}

async function getToken() {
  const r = await fetch("https://api.dropbox.com/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", Authorization: "Basic " + Buffer.from(`${APP_KEY}:${APP_SECRET}`).toString("base64") },
    body: new URLSearchParams({ grant_type: "refresh_token", refresh_token: REFRESH }),
  });
  if (!r.ok) throw new Error("token " + r.status + " " + (await r.text()));
  return (await r.json()).access_token;
}

async function rpc(tok, endpoint, body) {
  const r = await fetch("https://api.dropboxapi.com/2/" + endpoint, {
    method: "POST",
    headers: { Authorization: "Bearer " + tok, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!r.ok) throw new Error(endpoint + " " + r.status + " " + (await r.text()));
  return r.json();
}

async function listFolder(tok, link, path) {
  let res = await rpc(tok, "files/list_folder", { path, shared_link: { url: link } });
  let entries = res.entries;
  while (res.has_more) {
    res = await rpc(tok, "files/list_folder/continue", { cursor: res.cursor });
    entries = entries.concat(res.entries);
  }
  return entries;
}

let warned = {};
function warnOnce(key, msg) { if (!warned[key]) { warned[key] = true; console.error(msg); } }

// Dropbox-rendered thumbnail (raster images only) → writes jpeg to outFile.
async function thumbV2(tok, link, path, outFile) {
  const r = await fetch("https://content.dropboxapi.com/2/files/get_thumbnail_v2", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + tok,
      "Dropbox-API-Arg": JSON.stringify({ resource: { ".tag": "link", url: link, path }, format: "jpeg", size: "w640h480", mode: "fitone_bestfit" }),
    },
  });
  if (!r.ok) { warnOnce("thumbV2", "thumbnail failed " + r.status + ": " + (await r.text()).slice(0, 200)); return false; }
  writeFileSync(outFile, Buffer.from(await r.arrayBuffer()));
  return true;
}

// Download a file from the shared link to disk (streamed — safe for big videos).
async function downloadFile(tok, link, path, outFile) {
  const r = await fetch("https://content.dropboxapi.com/2/sharing/get_shared_link_file", {
    method: "POST",
    headers: { Authorization: "Bearer " + tok, "Dropbox-API-Arg": JSON.stringify({ url: link, path }) },
  });
  if (!r.ok) { warnOnce("dl", "download failed " + r.status + ": " + (await r.text()).slice(0, 200)); return false; }
  await pipeline(Readable.fromWeb(r.body), createWriteStream(outFile));
  return true;
}

function videoFrame(src, out) {
  for (const args of [["-y", "-ss", "1", "-i", src, "-frames:v", "1", "-vf", "scale=640:-1", out],
                      ["-y", "-i", src, "-frames:v", "1", "-vf", "scale=640:-1", out]]) {
    try { execFileSync("ffmpeg", args, { stdio: "ignore" }); if (existsSync(out)) return true; } catch { /* try next */ }
  }
  return false;
}

function pdfFirstPage(src, outBase) {
  try { execFileSync("pdftoppm", ["-jpeg", "-singlefile", "-scale-to", "640", src, outBase], { stdio: "ignore" }); return existsSync(outBase + ".jpg"); }
  catch (e) { warnOnce("pdf", "pdftoppm failed: " + e.message); return false; }
}

// White/light logos are invisible on the default white thumbnail — composite
// the (usually transparent) art onto a dark neutral gray so it shows. ImageMagick
// reads PNG/SVG/AI/PDF; `[0]` takes the first page/layer.
const LIGHT = /white/i;
function grayThumb(src, out, e) {
  try {
    if (e === "ai" || e === "pdf" || e === "eps") {
      // Illustrator/PDF render onto an opaque white artboard via Ghostscript's
      // default device, hiding the gray. Render with pngalpha (transparent) first,
      // then composite the art onto gray.
      const png = out + ".src.png";
      execFileSync("gs", ["-q", "-dNOPAUSE", "-dBATCH", "-dSAFER", "-sDEVICE=pngalpha", "-r150", "-dFirstPage=1", "-dLastPage=1", "-o", png, src], { stdio: "ignore" });
      execFileSync("convert", ["-background", "#3f3f46", png, "-flatten", "-resize", "640x480>", out], { stdio: "ignore" });
      try { unlinkSync(png); } catch {}
    } else {
      execFileSync("convert", ["-background", "#3f3f46", src + "[0]", "-flatten", "-resize", "640x480>", out], { stdio: "ignore" });
    }
    return existsSync(out);
  } catch (err) { warnOnce("gray", "gray thumb failed: " + err.message); return false; }
}

const tok = await getToken();
const synced = {};

for (const p of PRODUCTS) {
  const dir = join("assets", "synced", p.slug);
  mkdirSync(dir, { recursive: true });
  const keep = new Set();   // thumbnail filenames referenced this run (for pruning)
  const tmp = join(dir, "_tmp");

  const top = await listFolder(tok, p.link, "");
  const subs = top.filter((e) => e[".tag"] === "folder").map((e) => e.name);

  // Folders with subfolders use them as asset groups (like Dash II); a flat
  // folder buckets its files under `flat` (e.g. the logo set).
  const folderSpecs = [];
  if (subs.length) {
    // Map each Dropbox subfolder to its canonical display name, then order by
    // the canonical tab order (aliased/unknown names fall to the end).
    const specs = subs.map((raw) => ({ raw, disp: FOLDER_ALIAS[raw] || raw }));
    specs.sort((a, b) => {
      var ia = FOLDER_ORDER.indexOf(a.disp), ib = FOLDER_ORDER.indexOf(b.disp);
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    });
    for (const { raw, disp } of specs) {
      const files = (await listFolder(tok, p.link, "/" + raw)).filter((e) => e[".tag"] === "file");
      folderSpecs.push({ name: disp, prefix: "/" + raw, files });
    }
  } else {
    folderSpecs.push({ name: p.flat || "Files", prefix: "", files: top.filter((e) => e[".tag"] === "file") });
  }

  const filesDir = join(dir, "files");
  mkdirSync(filesDir, { recursive: true });
  const keepFiles = new Set();   // committed original filenames (under files/)

  const folders = {};
  for (const spec of folderSpecs) {
    const files = spec.files;
    files.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
    const out = [];
    for (const f of files) {
      const e = ext(f.name), type = typeOf(e), path = spec.prefix + "/" + f.name;
      const hash = f.content_hash, size = f.size || 0;
      let thumb = null, fileRel = null;
      try {
        // Commit the real original (so the browser can download/zip it in
        // portal) for commitFiles products; always commit tiny SVGs since the
        // vector itself is the preview. Everything else is thumbnail-only.
        if (size <= MAX_COMMIT && type !== "video" && (p.commitFiles || type === "vector")) {
          const cf = `${hash}.${e}`;
          if (!existsSync(join(filesDir, cf))) await downloadFile(tok, p.link, path, join(filesDir, cf));
          if (existsSync(join(filesDir, cf))) { fileRel = `assets/synced/${p.slug}/files/${cf}`; keepFiles.add(cf); }
        }
        const localOrig = fileRel ? join(filesDir, `${hash}.${e}`) : null;

        // White/light logos → composite onto gray (baked into the thumbnail) so
        // they're visible. Distinct `-lt.jpg` name so old white thumbs get pruned.
        if (LIGHT.test(f.name) && type !== "video") {
          const tn = hash + "-lt2.jpg";
          if (!existsSync(join(dir, tn))) {
            const src = localOrig || (await downloadFile(tok, p.link, path, tmp + "." + e) ? tmp + "." + e : null);
            if (src) { grayThumb(src, join(dir, tn), e); if (src === tmp + "." + e) unlinkSync(src); }
          }
          if (existsSync(join(dir, tn))) { thumb = `assets/synced/${p.slug}/${tn}`; keep.add(tn); }
        }

        // Thumbnail (reuses the committed original when we have it). Skipped when
        // the gray light-logo composite above already produced one.
        if (thumb) {
          /* light composite done */
        } else if (type === "vector") {
          thumb = fileRel;  // the SVG itself renders as the preview
        } else if (type === "image" && p.pngThumbs) {
          // Logos: transparent PNG thumbnails. Dropbox's thumbnail service flattens
          // alpha to white, so resize the original with ImageMagick to keep it.
          const tn = hash + "-tr.png";
          if (!existsSync(join(dir, tn))) {
            const src = (await downloadFile(tok, p.link, path, tmp + "." + e)) ? tmp + "." + e : null;
            if (src) {
              try { execFileSync("convert", [src + "[0]", "-resize", "640x480>", join(dir, tn)], { stdio: "ignore" }); }
              catch (e2) { warnOnce("pngthumb", "png thumb failed: " + e2.message); }
              try { unlinkSync(src); } catch {}
            }
          }
          if (existsSync(join(dir, tn))) { thumb = `assets/synced/${p.slug}/${tn}`; keep.add(tn); }
        } else if (type === "image") {
          const tn = hash + ".jpg";
          if (!existsSync(join(dir, tn))) await thumbV2(tok, p.link, path, join(dir, tn));
          if (existsSync(join(dir, tn))) { thumb = `assets/synced/${p.slug}/${tn}`; keep.add(tn); }
        } else if (type === "pdf" || e === "ai") {
          const tn = hash + ".jpg";
          if (!existsSync(join(dir, tn))) {
            const src = localOrig || (await downloadFile(tok, p.link, path, tmp + ".pdf") ? tmp + ".pdf" : null);
            if (src) { pdfFirstPage(src, join(dir, hash)); if (src === tmp + ".pdf") unlinkSync(src); }
          }
          if (existsSync(join(dir, tn))) { thumb = `assets/synced/${p.slug}/${tn}`; keep.add(tn); }
        } else if (type === "video") {
          const tn = hash + ".jpg";
          if (!existsSync(join(dir, tn))) {
            const src = localOrig || (await downloadFile(tok, p.link, path, tmp + "." + e) ? tmp + "." + e : null);
            if (src) { videoFrame(src, join(dir, tn)); if (src === tmp + "." + e) unlinkSync(src); }
          }
          if (existsSync(join(dir, tn))) { thumb = `assets/synced/${p.slug}/${tn}`; keep.add(tn); }
        }
      } catch (err) { warnOnce("gen-" + type, "asset error (" + f.name + "): " + err.message); }

      out.push({ name: f.name.replace(/\.[^.]+$/, ""), type, format: e.toUpperCase(), url: p.link, thumb, file: fileRel });
    }
    if (out.length) folders[spec.name] = (folders[spec.name] || []).concat(out);  // concat so aliased names merge
  }

  // Prune thumbnails / originals for files that no longer exist.
  for (const fn of readdirSync(dir)) if (fn !== "files" && !keep.has(fn)) { try { unlinkSync(join(dir, fn)); } catch {} }
  for (const fn of readdirSync(filesDir)) if (!keepFiles.has(fn)) { try { unlinkSync(join(filesDir, fn)); } catch {} }

  synced[p.name] = { folders, dropbox: dlLink(p.link) };
  const total = Object.values(folders).reduce((n, a) => n + a.length, 0);
  const withThumb = Object.values(folders).reduce((n, a) => n + a.filter((x) => x.thumb).length, 0);
  const withFile = Object.values(folders).reduce((n, a) => n + a.filter((x) => x.file).length, 0);
  console.log(`${p.name}: ${folderSpecs.length} folders, ${total} files, ${withThumb} thumbnails, ${withFile} downloadable`);
}

writeFileSync("assets/data/synced.js", "window.PORTAL_SYNCED = " + JSON.stringify(synced, null, 2) + ";\n");
console.log("Wrote assets/data/synced.js");
