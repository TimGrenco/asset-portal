/* =============================================================================
   ASSET PORTAL — APP LOGIC
   Reads from window.PORTAL_* (see assets/data/assets.js). No build step.
   ========================================================================== */
(function () {
  "use strict";

  var CFG = window.PORTAL_CONFIG;
  var BRANDS = window.PORTAL_BRANDS;
  var PRODUCTS = window.PORTAL_PRODUCTS;

  // ---- tiny helpers --------------------------------------------------------
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  var today = new Date();
  function daysSince(iso) { return Math.floor((today - new Date(iso)) / 86400000); }
  function isNew(p) { return daysSince(p.added) <= CFG.newWindowDays; }
  function fmtDate(iso) {
    // Parse as local midnight so an ISO date doesn't shift a day in US timezones.
    return new Date(iso + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }
  function icon(name) {
    var paths = {
      search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
      download: '<path d="M12 3v12"/><path d="m7 12 5 5 5-5"/><path d="M5 21h14"/>',
      eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
      mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
      arrowLeft: '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
      file: '<path d="M14 3v5h5"/><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>',
      photo: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
      video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4Z"/>',
      vector: '<path d="M3 5h4v4H3zM17 15h4v4h-4zM5 9v6M19 9V5h-4M7 17h6"/>',
      stack: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
      link: '<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 0 1 0 10h-2"/><path d="M8 12h8"/>',
      grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
      list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
      info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
      tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8Z"/><circle cx="7" cy="7" r="1.4"/>',
      copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
      play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
      x: '<path d="M18 6 6 18M6 6l12 12"/>',
    };
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (paths[name] || "") + "</svg>";
  }
  var typeIcon = { image: "photo", video: "video", vector: "vector", pdf: "file" };

  // Simplified brand glyphs for the social hub (filled marks).
  function socialIcon(net) {
    var paths = {
      instagram: '<rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17.4" cy="6.6" r="1.3" fill="currentColor"/>',
      x: '<path d="M17.5 3h3l-6.6 7.6L21.8 21h-5.9l-4.1-5.4L6.9 21H3.9l7.1-8.1L2.6 3h6.1l3.6 4.9L17.5 3Zm-1 16.2h1.7L7.6 4.7H5.8l10.7 14.5Z" fill="currentColor"/>',
      facebook: '<path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" fill="currentColor"/>',
      youtube: '<path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8ZM10 15V9l5.2 3L10 15Z" fill="currentColor"/>',
    };
    return '<svg viewBox="0 0 24 24" aria-hidden="true">' + (paths[net.toLowerCase()] || "") + "</svg>";
  }
  function hexToRgb(hex) {
    var m = hex.replace("#", "");
    if (m.length === 3) m = m.replace(/(.)/g, "$1$1");
    var n = parseInt(m, 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }

  // ---- derived per-product stats -------------------------------------------
  PRODUCTS.forEach(function (p) {
    var total = 0, fmts = {};
    Object.keys(p.folders).forEach(function (f) {
      p.folders[f].forEach(function (file) { total++; if (file.format) fmts[file.format] = 1; });
    });
    p.total = total;
    p.formats = Object.keys(fmts);
    p.days = daysSince(p.added);
  });

  // ---- state ---------------------------------------------------------------
  var state = {
    view: "gpen",      // gpen | stundenglass  (focused on one brand at a time)
    type: "all",       // all | E-Comm Render Photos | Lifestyle Photos | Logos | Video | Misc
    query: "",
    sort: "featured",  // featured (curated order) | az
    layout: "grid",    // grid | list (applies to the All-products grid)
  };

  function pid(p) { return p.brand + "::" + p.name; }
  function fileKey(folder, file) { return folder + "::" + file.name + "." + (file.format || ""); }

  // ---- recently viewed (local to the browser) ------------------------------
  function loadRecent() {
    try { return JSON.parse(localStorage.getItem("portal_recent") || "[]"); } catch (e) { return []; }
  }
  function recordRecent(p) {
    try {
      var id = pid(p);
      var arr = loadRecent().filter(function (x) { return x !== id; });
      arr.unshift(id);
      localStorage.setItem("portal_recent", JSON.stringify(arr.slice(0, 8)));
    } catch (e) {}
  }
  function fileLabel(file) {
    var f = file.format || "";
    if (!f || f === "YouTube" || f === "Link") return file.name;  // links keep their title, no fake extension
    return file.name + "." + f.toLowerCase();
  }
  function isExtVideo(file) { return file.type === "video" && /youtube\.com|youtu\.be|vimeo\.com/.test(file.url || ""); }

  // ---- shareable deep links ------------------------------------------------
  function slugify(s) {
    return String(s).toLowerCase().replace(/ü/g, "u").replace(/\+/g, " plus ")
      .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }
  function productHash(p) { return "#" + p.brand + "/" + slugify(p.name); }
  function productFromHash() {
    var h = location.hash.replace(/^#/, "");
    if (!h) return null;
    var parts = h.split("/"), brand = parts[0], slug = parts.slice(1).join("/");
    return PRODUCTS.filter(function (p) { return p.brand === brand && slugify(p.name) === slug; })[0] || null;
  }
  // When we change the hash ourselves we set this so the hashchange handler
  // (which exists for browser back/forward + external deep links) skips a
  // redundant re-render.
  var ignoreHash = false;
  function navTo(p) {
    openDetail(p);
    var h = productHash(p);
    if (location.hash !== h) { ignoreHash = true; location.hash = h; }
  }
  function navHome() {
    renderHome();
    if (location.hash) { ignoreHash = true; location.hash = ""; }
  }
  function route() {
    var parts = location.hash.replace(/^#/, "").split("/");
    if (parts[0] === "style" && BRANDS[parts[1]]) { openStyleGuide(parts[1]); return; }
    if (parts[0] === "additional" && BRANDS[parts[1]]) { openAdditional(parts[1]); return; }
    var p = productFromHash();
    if (p) openDetail(p); else renderHome();
  }

  // ---- clipboard -----------------------------------------------------------
  function copyText(text, okMsg) {
    function fallback() {
      try {
        var ta = document.createElement("textarea");
        ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select(); document.execCommand("copy");
        document.body.removeChild(ta); toast(okMsg);
      } catch (e) { toast("Copy failed"); }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast(okMsg); }, fallback);
    } else { fallback(); }
  }

  // ---- shareable filtered views + active filters ---------------------------
  var TYPE_LABELS = {
    "E-Comm Render Photos": "Product photos", "Lifestyle Photos": "Lifestyle Photos",
    "Logos": "Logos", "Social Videos": "Social Videos", "TV Screen Videos": "TV Screen Videos",
    "Misc": "Documents",
  };
  function typeLabel(t) { return TYPE_LABELS[t] || t; }

  function buildQuery() {
    var parts = [];
    if (state.view !== "gpen") parts.push("b=" + state.view);   // gpen is the default → keep its URL clean
    if (state.type !== "all") parts.push("t=" + encodeURIComponent(state.type));
    if (state.query) parts.push("q=" + encodeURIComponent(state.query));
    if (state.sort !== "featured") parts.push("s=" + state.sort);
    if (state.layout !== "grid") parts.push("l=" + state.layout);
    return parts.join("&");
  }
  // Keep the address bar in sync with the current filters (home view only, so
  // a refresh or a copied URL reproduces the view). replaceState avoids extra
  // history entries and never fires hashchange.
  function syncURL() {
    var qs = buildQuery();
    try { history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "")); } catch (e) {}
  }
  function parseURL() {
    var q = location.search.replace(/^\?/, "");
    if (!q) return;
    var params = {};
    q.split("&").forEach(function (kv) { var p = kv.split("="); params[p[0]] = decodeURIComponent(p[1] || ""); });
    if (params.b && BRANDS[params.b]) state.view = params.b;
    if (params.t) state.type = params.t;
    if (params.q) state.query = params.q;
    if (params.s === "az" || params.s === "featured") state.sort = params.s;
    if (params.l === "list" || params.l === "grid") state.layout = params.l;
    syncControls();
  }
  // Reflect state into the toggle / chips / sort / view / search controls.
  function syncControls() {
    $$("#view-toggle button").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-view") === state.view); });
    $$("#type-filters .chip").forEach(function (c) { c.classList.toggle("on", c.getAttribute("data-type") === state.type); });
    $$("#sort-toggle button").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-sort") === state.sort); });
    $$("#view-mode button").forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-layout") === state.layout); });
    var s = $("#search"); if (s && s.value !== state.query) s.value = state.query;
  }
  function shareView() {
    var qs = buildQuery();
    copyText(location.origin + location.pathname + (qs ? "?" + qs : ""), "View link copied");
  }
  function clearFilter(k) {
    // Brand is a primary toggle (always G Pen or Stündenglass), never a clearable
    // filter — so only type/query are reset here.
    if (k === "all") { state.type = "all"; state.query = ""; }
    else if (k === "type") state.type = "all";
    else if (k === "query") state.query = "";
    syncControls();
    navHome();
  }
  function renderActiveFilters() {
    var box = $("#active-filters"); if (!box) return;
    var chips = [];
    if (state.type !== "all") chips.push({ k: "type", label: typeLabel(state.type) });
    if (state.query) chips.push({ k: "query", label: "“" + state.query + "”" });
    // Nothing filtered → keep the top clean (the bar hides itself when empty).
    if (!chips.length) { box.innerHTML = ""; return; }
    var left = chips.map(function (c) {
      return '<button class="fchip" data-clear="' + c.k + '">' + c.label + ' <span class="x">' + icon("x") + "</span></button>";
    }).join("") + '<button class="fclear" data-clear="all">Clear all</button>';
    box.innerHTML =
      '<div class="fb-left">' + left + "</div>" +
      '<div class="fb-right"><button class="btn ghost sm" id="share-view">' + icon("link") + " Share view</button></div>";
    $$("[data-clear]", box).forEach(function (b) {
      b.addEventListener("click", function () { clearFilter(b.getAttribute("data-clear")); });
    });
    $("#share-view").addEventListener("click", shareView);
  }

  // ---- filtering -----------------------------------------------------------
  function visibleProducts() {
    return PRODUCTS.filter(function (p) {
      if (state.view !== "both" && p.brand !== state.view) return false;
      if (state.type !== "all" && !p.folders[state.type]) return false;
      if (state.query) {
        var q = state.query.toLowerCase();
        var hay = (p.name + " " + p.category + " " + BRANDS[p.brand].name + " " + p.formats.join(" ")).toLowerCase();
        if (hay.indexOf(q) === -1) return false;
      }
      return true;
    });
  }

  // ---- rendering: cover ----------------------------------------------------
  function coverHTML(p) {
    if (p.cover) {
      var safe = p.name.replace(/"/g, "");
      return '<img src="' + p.cover + '" alt="' + safe + '" loading="lazy" onerror="window.__fallback(this,\'' + safe + '\')"/>';
    }
    if (p.isLogo) return '<div class="logo-tile"><span>' + BRANDS[p.brand].wordmark + "</span></div>";
    return fallbackHTML(p.name);
  }
  function fallbackHTML(name) {
    return '<div class="fallback">' + icon("photo") + "<span>" + name + "</span></div>";
  }
  window.__fallback = function (img, name) { img.parentNode.innerHTML = fallbackHTML(name); };

  // ---- shared wiring helpers (swatches / style links / socials / logos) ----
  function wireSwatches(ctx) {
    $$("[data-hex]", ctx).forEach(function (s) {
      s.addEventListener("click", function () { var h = s.getAttribute("data-hex"); copyText(h, "Copied " + h); });
    });
  }
  function wireStyleLinks(ctx) {
    $$("[data-style]", ctx).forEach(function (b) {
      b.addEventListener("click", function () { navToStyle(b.getAttribute("data-style")); });
    });
  }
  function wireLogoLinks(ctx) {
    $$("[data-logo]", ctx).forEach(function (b) {
      b.addEventListener("click", function () {
        var p = PRODUCTS.filter(function (x) { return x.name === b.getAttribute("data-logo"); })[0];
        if (p) navTo(p);
      });
    });
  }
  function wireSocial(ctx) {
    $$("[data-copylink]", ctx).forEach(function (b) {
      b.addEventListener("click", function () { copyText(b.getAttribute("data-copylink"), "Link copied"); });
    });
  }

  // ---- social hub ----------------------------------------------------------
  function socialListHTML(bk) {
    var items = BRANDS[bk].social || [];
    if (!items.length) return '<p class="fnone">Social links coming soon.</p>';
    return '<div class="socials">' + items.map(function (s) {
      return '<div class="social-card">' +
        '<a class="social-main" href="' + s.url + '" target="_blank" rel="noopener noreferrer">' +
          '<span class="social-ic">' + socialIcon(s.network) + "</span>" +
          '<span class="social-meta"><span class="social-net">' + s.network + '</span><span class="social-handle">' + s.handle + "</span></span>" +
        "</a>" +
        '<button class="social-copy" data-copylink="' + s.url + '" title="Copy link" aria-label="Copy ' + s.network + ' link">' + icon("link") + "</button>" +
      "</div>";
    }).join("") + "</div>";
  }
  function renderSocialHub() {
    var box = $("#social-hub"); if (!box) return;
    var bk = state.view;
    box.innerHTML =
      '<div class="section-head"><h2>Follow ' + BRANDS[bk].name + "</h2><span class=\"badge\">Official accounts</span></div>" +
      '<div class="hub-wrap"><div class="hub-brand">' + socialListHTML(bk) + "</div></div>";
    wireSocial(box);
  }

  // ---- logos & brand assets ------------------------------------------------
  // Current brand's logo files (in various formats). The full brand/style guide
  // is hidden for now — a designer-made guide will replace this later.
  function renderLogoAssets() {
    var box = $("#logo-assets"); if (!box) return;
    var bk = state.view, b = BRANDS[bk];
    var logoP = PRODUCTS.filter(function (p) { return p.isLogo && p.brand === bk; })[0];
    if (!logoP) { box.innerHTML = ""; return; }

    var logos = [];
    Object.keys(logoP.folders || {}).forEach(function (f) { (logoP.folders[f] || []).forEach(function (x) { logos.push(x); }); });
    var fmts = (logoP.formats || []).map(function (f) { return '<span class="fmt">' + f + "</span>"; }).join("");

    // Preview just the two primary marks — the black G and the black GPEN
    // wordmark (preferring SVG). "Browse all" shows every file/format.
    function rankFmt(f) { return f === "SVG" ? 3 : f === "PNG" ? 2 : 1; }
    function pickLogo(re) {
      return logos.filter(function (x) { return re.test(x.name) && x.thumb; })
        .sort(function (a, b) { return rankFmt(b.format) - rankFmt(a.format); })[0];
    }
    var preview = [pickLogo(/^gpen_g_black$/i), pickLogo(/wordmark_black/i)].filter(Boolean);
    if (!preview.length) preview = logos.filter(function (x) { return x.thumb; }).slice(0, 2);
    var tiles = preview.map(function (x) {
      var dark = /white|reverse/i.test(x.name);
      var media = x.thumb ? '<img src="' + x.thumb + '" alt="' + x.name.replace(/"/g, "") + '" loading="lazy"/>' : window.__icon("photo");
      return '<button class="logo-tile' + (dark ? " dark" : "") + '" data-logodl="' + (x.file || "#") + '" data-logoname="' + fileLabel(x) + '" title="Download ' + fileLabel(x) + '">' +
        media + '<span class="logo-tile-fmt">' + x.format + "</span></button>";
    }).join("");

    box.innerHTML =
      '<div class="logo-card">' +
        '<div class="logo-card-head">' +
          '<div class="logo-card-meta">' +
            '<div class="logo-card-name">' + b.name + " Logos</div>" +
            '<p class="logo-card-note">Official ' + b.name + " logos — black, white &amp; various versions. For approved partner, press &amp; retail use; please don’t alter, recolor, or distort the marks.</p>" +
            (fmts ? '<div class="logo-card-fmts"><span class="logo-card-fmts-l">Formats</span>' + fmts + "</div>" : "") +
          "</div>" +
          '<button class="btn" id="logo-dl">' + icon("download") + " Download all logos</button>" +
        "</div>" +
        (tiles ? '<div class="logo-grid">' + tiles + "</div>" : "") +
        '<button class="logo-browse-link" id="logo-browse">' + icon("eye") + " Browse all " + logoP.total + " logo files →</button>" +
      "</div>";

    $("#logo-dl").addEventListener("click", function () { downloadAll(logoP); });
    $("#logo-browse").addEventListener("click", function () { navTo(logoP); });
    $$("[data-logodl]", box).forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-logodl");
        if (f && f !== "#") directDownload(f, btn.getAttribute("data-logoname"));
        else navTo(logoP);
      });
    });
  }

  // ---- brand style guide page ----------------------------------------------
  function swatchBigHTML(c) {
    var rgb = hexToRgb(c.hex).join(", ");
    return '<button class="sw-big" data-hex="' + c.hex + '" title="Copy ' + c.hex + '">' +
      '<span class="sw-big-chip" style="background:' + c.hex + '"></span>' +
      '<span class="sw-big-meta">' +
        '<span class="sw-big-name">' + c.name + "</span>" +
        '<span class="sw-big-hex">' + c.hex.toUpperCase() + "</span>" +
        '<span class="sw-big-rgb">rgb(' + rgb + ")</span>" +
      "</span></button>";
  }
  function fontSpecimenHTML(f) {
    return '<div class="fontspec">' +
      '<div class="fontspec-aa" style="font-family:' + f.stack + '">Aa</div>' +
      '<div class="fontspec-body">' +
        '<div class="fontspec-head"><span class="fontspec-name">' + f.name + '</span><span class="fontspec-role">' + f.role + "</span></div>" +
        '<div class="fontspec-line big" style="font-family:' + f.stack + '">The quick brown fox jumps over the lazy dog</div>' +
        '<div class="fontspec-line" style="font-family:' + f.stack + '">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789</div>' +
      "</div></div>";
  }
  function openStyleGuide(bk) {
    var b = BRANDS[bk];
    if (!b) { renderHome(); return; }
    $("#home").style.display = "none";
    $("#detail").style.display = "none";
    var sgBrowse = $("#browse"); if (sgBrowse) sgBrowse.style.display = "none";
    var sgHero = $("#hero"); if (sgHero) sgHero.style.display = "none";
    $("#additional").style.display = "none";
    var sg = $("#styleguide");
    sg.style.display = "block";
    window.scrollTo(0, 0);

    sg.innerHTML =
      '<button class="back" id="sg-back">' + icon("arrowLeft") + " Back to library</button>" +
      '<div class="sg-hero">' +
        '<div class="sg-word">' + b.wordmark + "</div>" +
        "<h2>Brand &amp; Style Guide</h2>" +
        '<p class="sg-note">' + icon("info") + "<span>Placeholder guide — the official " + b.name + " brand guide will replace this. Colors, type, and logos below reflect current brand usage.</span></p>" +
        '<div class="sg-actions">' +
          '<button class="btn" data-view-brand="' + bk + '">' + icon("stack") + " View " + b.name + " assets</button>" +
          (b.logoProduct ? '<button class="btn ghost" data-logo="' + b.logoProduct + '">' + icon("download") + " Download logos</button>" : "") +
        "</div>" +
      "</div>" +
      '<div class="section-head"><h2>Colors</h2><span class="badge">tap to copy</span></div>' +
      '<div class="sg-colors">' + (b.colors || []).map(swatchBigHTML).join("") + "</div>" +
      '<div class="section-head"><h2>Typography</h2></div>' +
      '<div class="sg-fonts">' + (b.fonts || []).map(fontSpecimenHTML).join("") + "</div>" +
      '<div class="section-head"><h2>Logos</h2></div>' +
      '<div class="sg-logos">' +
        '<div class="sg-logo-tile"><span>' + b.wordmark + "</span></div>" +
        (b.logoProduct ? '<button class="btn ghost" data-logo="' + b.logoProduct + '">' + icon("download") + " Download logo files</button>" : "") +
      "</div>" +
      '<div class="section-head"><h2>Follow ' + b.name + "</h2></div>" +
      socialListHTML(bk);

    $("#sg-back").addEventListener("click", navHome);
    $$("[data-view-brand]", sg).forEach(function (x) {
      x.addEventListener("click", function () { state.view = x.getAttribute("data-view-brand"); syncControls(); navHome(); });
    });
    wireSwatches(sg);
    wireLogoLinks(sg);
    wireSocial(sg);
  }
  function navToStyle(bk) {
    openStyleGuide(bk);
    var h = "#style/" + bk;
    if (location.hash !== h) { ignoreHash = true; location.hash = h; }
  }

  // ---- rendering: card -----------------------------------------------------
  function cardHTML(p, layout) {
    return (layout || state.layout) === "list" ? rowHTML(p) : gridCardHTML(p);
  }
  function gridCardHTML(p) {
    var showBrand = state.view === "both";
    return (
      '<article class="card" data-id="' + pid(p) + '" tabindex="0" role="button" aria-label="Open ' + p.name + '">' +
        '<div class="card-frame">' +
          (isNew(p) && !p.isLogo ? '<span class="tag-new">New</span>' : "") +
          (showBrand ? '<span class="tag-brand">' + BRANDS[p.brand].name + "</span>" : "") +
          coverHTML(p) +
          '<div class="quick">' +
            '<button class="qbtn" data-act="download" title="Download all">' + icon("download") + "</button>" +
          "</div>" +
        "</div>" +
        '<div class="card-name">' + p.name + "</div>" +
        '<div class="card-sub">' + (p.isLogo ? p.total + " logo files" : p.total + " assets · " + p.category) + "</div>" +
      "</article>"
    );
  }
  function rowHTML(p) {
    var showBrand = state.view === "both";
    return (
      '<article class="card row" data-id="' + pid(p) + '" tabindex="0" role="button" aria-label="Open ' + p.name + '">' +
        '<div class="row-thumb">' + coverHTML(p) + "</div>" +
        '<div class="row-main">' +
          '<div class="row-name">' + p.name + (isNew(p) && !p.isLogo ? ' <span class="row-new">New</span>' : "") + "</div>" +
          '<div class="row-sub">' + (p.isLogo ? p.total + " logo files" : p.total + " assets · " + p.category) + "</div>" +
        "</div>" +
        (showBrand ? '<span class="row-brand">' + BRANDS[p.brand].name + "</span>" : "") +
        '<button class="row-dl" data-act="download" title="Download all">' + icon("download") + "</button>" +
      "</article>"
    );
  }

  // ---- current / legacy split ----------------------------------------------
  function currentList(bk) { return (window.PORTAL_CURRENT && window.PORTAL_CURRENT[bk]) || []; }
  function isCurrentName(bk, name) { return currentList(bk).indexOf(name) !== -1; }
  // All legacy (non-current, non-logo) products for a brand — unfiltered.
  function legacyProducts(bk) {
    return PRODUCTS.filter(function (p) { return p.brand === bk && !p.isLogo && !isCurrentName(bk, p.name); });
  }

  // ---- rendering: home -----------------------------------------------------
  function renderHome() {
    $("#detail").style.display = "none";
    $("#styleguide").style.display = "none";
    $("#additional").style.display = "none";
    $("#home").style.display = "block";
    var browse = $("#browse"); if (browse) browse.style.display = "";
    var hero = $("#hero"); if (hero) hero.style.display = "";
    document.body.classList.remove("has-selection");

    // Current products in scope (brand + search), logos excluded.
    var vis = visibleProducts().filter(function (p) { return !p.isLogo; });
    $("#all-title").textContent = "Current " + BRANDS[state.view].name + " products";

    var curList = currentList(state.view);
    var byName = function (a, b) { return a.name.localeCompare(b.name); };
    // current keeps the curated order by default; A–Z when the sort toggle asks.
    var current = curList
      .map(function (n) { return vis.filter(function (p) { return p.name === n; })[0]; })
      .filter(Boolean);
    if (state.sort === "az") current = current.slice().sort(byName);

    var browseCount = $("#browse-count");
    if (browseCount) browseCount.textContent = current.length + (current.length === 1 ? " product" : " products");
    $("#count-badge").textContent = current.length + (current.length === 1 ? " product" : " products");

    renderActiveFilters();

    var layoutClass = state.layout === "list" ? "grid list" : "grid";
    var allGrid = $("#all-grid");
    allGrid.className = layoutClass;
    allGrid.innerHTML = current.map(function (p) { return cardHTML(p, state.layout); }).join("") || emptyState();

    renderLogoAssets();
    renderSocialHub();
    renderAdditionalEntry();
    bindCards($("#home"));
    syncURL();
  }

  // Bottom-of-page entry box → opens the dedicated Additional Products page.
  function renderAdditionalEntry() {
    var box = $("#additional-entry"); if (!box) return;
    var bk = state.view, legacy = legacyProducts(bk);
    if (!legacy.length) { box.innerHTML = ""; return; }
    box.innerHTML =
      '<button class="additional-entry-card" id="additional-entry-btn">' +
        '<span class="ae-main">' +
          '<span class="ae-title">Additional Products</span>' +
          '<span class="ae-sub">' + legacy.length + " older " + BRANDS[bk].name +
            " products we no longer sell — assets kept for partners who still need them.</span>" +
        "</span>" +
        '<span class="ae-go">View all →</span>' +
      "</button>";
    $("#additional-entry-btn").addEventListener("click", function () { navToAdditional(bk); });
  }

  // Dedicated page listing a brand's legacy products.
  function openAdditional(bk) {
    if (!BRANDS[bk]) { renderHome(); return; }
    $("#home").style.display = "none";
    $("#detail").style.display = "none";
    $("#styleguide").style.display = "none";
    var hero = $("#hero"); if (hero) hero.style.display = "none";
    var browse = $("#browse"); if (browse) browse.style.display = "none";
    var ad = $("#additional");
    ad.style.display = "block";
    window.scrollTo(0, 0);
    var legacy = legacyProducts(bk).slice().sort(function (a, b) { return a.name.localeCompare(b.name); });
    ad.innerHTML =
      '<button class="back" id="add-back">' + icon("arrowLeft") + " Back to library</button>" +
      '<div class="section-head"><h2>Additional ' + BRANDS[bk].name + " Products</h2><span class=\"badge\">" + legacy.length + " product" + (legacy.length === 1 ? "" : "s") + "</span></div>" +
      '<p class="additional-note">Products we no longer sell — assets kept here for partners who still need them.</p>' +
      '<div class="grid">' + legacy.map(function (p) { return cardHTML(p, "grid"); }).join("") + "</div>";
    $("#add-back").addEventListener("click", navHome);
    bindCards(ad);
  }
  function navToAdditional(bk) {
    openAdditional(bk);
    var h = "#additional/" + bk;
    if (location.hash !== h) { ignoreHash = true; location.hash = h; }
  }
  function emptyState() {
    return '<p style="grid-column:1/-1;color:var(--stone);font-size:14px;padding:30px 0;">No assets match your filters. <a href="mailto:' + CFG.requestEmail + '" style="text-decoration:underline;">Request one →</a></p>';
  }

  function bindCards(ctx) {
    $$(".card", ctx).forEach(function (card) {
      var id = card.getAttribute("data-id");
      var p = PRODUCTS.filter(function (x) { return pid(x) === id; })[0];
      card.addEventListener("click", function (e) {
        var act = e.target.closest("[data-act]");
        if (act) {
          e.stopPropagation();
          downloadAll(p);
          return;
        }
        navTo(p);
      });
      card.addEventListener("keydown", function (e) { if (e.key === "Enter") navTo(p); });
    });
  }

  // ---- rendering: detail ---------------------------------------------------
  function openDetail(p) {
    $("#home").style.display = "none";
    $("#styleguide").style.display = "none";
    var dBrowse = $("#browse"); if (dBrowse) dBrowse.style.display = "none";
    var dHero = $("#hero"); if (dHero) dHero.style.display = "none";
    $("#additional").style.display = "none";
    var d = $("#detail");
    d.style.display = "block";
    window.scrollTo(0, 0);
    recordRecent(p);

    var folderNames = Object.keys(p.folders);
    var active = folderNames[0];
    var selected = {};   // fileKey -> file object; persists while switching folder tabs

    function folderFiles() { return p.folders[active] || []; }
    function selectedList() { return Object.keys(selected).map(function (k) { return selected[k]; }); }
    function toggle(file, on) {
      var k = fileKey(active, file);
      if (on) selected[k] = file; else delete selected[k];
    }
    // Reflect selection state into the DOM without a full re-render.
    function syncSelection() {
      var n = Object.keys(selected).length;
      var bar = $("#selbar");
      if (bar) { $("#sel-n").textContent = n; bar.classList.toggle("show", n > 0); }
      document.body.classList.toggle("has-selection", n > 0);
      var ff = folderFiles();
      var some = ff.some(function (f) { return selected[fileKey(active, f)]; });
      var all = ff.length > 0 && ff.every(function (f) { return selected[fileKey(active, f)]; });
      var sa = $("#sel-all");
      if (sa) { sa.checked = all; sa.indeterminate = some && !all; }
      $$(".gcell", $("#gallery")).forEach(function (cell) {
        var k = cell.getAttribute("data-key"), on = !!selected[k];
        cell.classList.toggle("sel", on);
        var cb = $(".gcheck", cell); if (cb) cb.checked = on;
      });
    }

    function render() {
      // Asset filters: friendly-labelled chips for this product's folders, sat
      // right at the top of the Documents section for quick filtering.
      var assetNav = '<div class="asset-nav" id="asset-nav">' + folderNames.map(function (f) {
        return '<button class="anav ' + (f === active ? "on" : "") + '" data-folder="' + f + '">' + typeLabel(f) + '<span class="c">' + p.folders[f].length + "</span></button>";
      }).join("") + "</div>";
      var activeCount = (p.folders[active] || []).length;
      // Eyebrow shows the product type (falls back to category); the title is the
      // full brand-prefixed name (e.g. "G Pen Dash II"), without double-prefixing
      // names that already lead with the brand (e.g. "G Pen Logos").
      var typeLine = p.type || p.category || BRANDS[p.brand].name;
      var fullName = p.name.indexOf(BRANDS[p.brand].name) === 0 ? p.name : BRANDS[p.brand].name + " " + p.name;

      var stat = p.total + " assets" + (p.videos && p.videos.length ? " · " + p.videos.length + " videos" : "") + " · updated " + fmtDate(p.added);
      d.innerHTML =
        '<button class="back" id="back-btn">' + icon("arrowLeft") + " Back to library</button>" +
        '<div class="detail-hero">' +
          '<div class="detail-cover-lg' + (p.cover ? " clickable" : "") + '"' + (p.cover ? ' id="hero-cover"' : "") + ">" + coverHTML(p) + "</div>" +
          '<div class="detail-info">' +
            '<div class="detail-eyebrow">' + typeLine + "</div>" +
            "<h2>" + fullName + "</h2>" +
            '<div class="detail-stat">' + stat + "</div>" +
            ((p.info && p.info.description) ? '<p class="detail-desc">' + p.info.description + "</p>" : "") +
            '<div class="detail-actions">' +
              '<button class="btn" id="dl-all">' + icon("download") + " Download all</button>" +
              '<button class="btn ghost" id="copy-link">' + icon("link") + " Copy link</button>" +
            "</div>" +
            overviewFactsHTML(p) +
          "</div>" +
        "</div>" +
        highlightsHTML(p) +
        fullDescHTML(p) +
        // ---- Documents (assets) — sits above Packaging, filters at the top ----
        '<div class="section-head" id="docs-head"><h2>Digital Assets</h2><span class="badge">' + activeCount + " file" + (activeCount === 1 ? "" : "s") + "</span></div>" +
        assetNav +
        '<div class="gallery-toolbar">' +
          '<label class="selectall"><input type="checkbox" id="sel-all"/> Select all in this folder</label>' +
          '<button class="btn ghost sm" id="dl-folder">' + icon("download") + " Download folder</button>" +
        "</div>" +
        '<div class="gallery" id="gallery"></div>' +
        '<div class="selbar" id="selbar">' +
          '<span class="selcount"><strong id="sel-n">0</strong> selected</span>' +
          '<span class="selacts">' +
            '<button class="btn ghost sm" id="sel-clear">Clear</button>' +
            '<button class="btn sm" id="sel-dl">' + icon("download") + " Download selected</button>" +
          "</span>" +
        "</div>" +
        (CFG.usageNote ? '<div class="usage usage-foot">' + icon("info") + "<span>" + CFG.usageNote + "</span></div>" : "") +
        // ---- product info below the assets ----
        packagingHTML(p) +
        skuHTML(p) +
        videoHubHTML(p);

      renderGallery(p, active, selected, toggle, syncSelection);
      $$(".vcard[data-yt]", d).forEach(function (c) {
        c.addEventListener("click", function () { downloadOne(c.getAttribute("data-yt")); });
      });
      $$("[data-play]", d).forEach(function (el) {
        el.addEventListener("click", function () {
          openVideoModal(el.getAttribute("data-play"), el.getAttribute("data-title"), el.getAttribute("data-dl"), el.getAttribute("data-dlname"));
        });
      });
      $$("[data-vdl]", d).forEach(function (b) {
        b.addEventListener("click", function (e) { e.stopPropagation(); directDownload(b.getAttribute("data-vdl"), b.getAttribute("data-vname")); });
      });
      $("#back-btn").addEventListener("click", navHome);
      var heroCover = $("#hero-cover");
      if (heroCover) heroCover.addEventListener("click", function () { openLightbox([{ src: p.cover, name: fullName, url: p.cover }], 0); });
      $("#dl-all").addEventListener("click", function () { downloadAll(p); });
      $("#copy-link").addEventListener("click", function () {
        var url = location.origin + location.pathname + productHash(p);
        copyText(url, "Link copied");
      });
      var copyDesc = $("#copy-desc");
      if (copyDesc) copyDesc.addEventListener("click", function () {
        copyText(((p.info && p.info.fullDescription) || []).join("\n\n"), "Description copied");
      });
      $("#dl-folder").addEventListener("click", function () { downloadFiles(folderFiles(), active); });
      $("#sel-all").addEventListener("change", function (e) {
        var on = e.target.checked;
        folderFiles().forEach(function (f) { toggle(f, on); });
        syncSelection();
      });
      $("#sel-clear").addEventListener("click", function () { selected = {}; syncSelection(); });
      $("#sel-dl").addEventListener("click", function () { downloadFiles(selectedList(), selectedList().length + " selected"); });
      $$(".anav", d).forEach(function (t) {
        // Filters sit directly above the gallery, so switching folders just
        // updates the gallery in place — no scrolling needed.
        t.addEventListener("click", function () { active = t.getAttribute("data-folder"); render(); });
      });
      syncSelection();
    }
    render();
  }

  // Packaging visuals: retail outer box + (for POP products) the POP display.
  function pkgCard(label, url) {
    var media = url
      ? '<img src="' + url + '" alt="' + label + '" loading="lazy"/>'
      : '<div class="pkg-ph">' + icon("photo") + "<span>Image coming soon</span></div>";
    return '<div class="pkg-card"><div class="pkg-media">' + media + '</div><div class="pkg-label">' + label + "</div></div>";
  }
  function packagingHTML(p) {
    if (p.isLogo) return "";
    var info = p.info || {};
    // Pull the POP-display image from the synced "Packaging" Dropbox folder.
    var popImg = info.popImg;
    var pkgFolder = (p.folders && p.folders["Packaging"]) || [];
    var pkgImg = pkgFolder.filter(function (f) { return f.thumb; })[0];
    if (pkgImg) popImg = pkgImg.file || pkgImg.thumb;
    var cards = pkgCard("Retail packaging", info.boxImg);
    if (info.pop || popImg) cards += pkgCard("Retail POP display", popImg);
    if (info.cartonImg) cards += pkgCard("Master carton", info.cartonImg);
    var note = info.pop
      ? "Ships in a retail-ready POP display — see SKU details for inner-pack &amp; master-carton quantities."
      : "Ships in retail packaging — see SKU details for master-carton quantities.";
    return '<div class="section-head"><h2>Packaging</h2>' + (info.pop ? '<span class="badge">Ships in POP display</span>' : "") + "</div>" +
      '<div class="pkg-grid">' + cards + "</div>" +
      '<p class="pkg-note">' + note + "</p>";
  }

  // SKU details: identifiers + the pack/case breakdown for stores & ops.
  function skuHTML(p) {
    if (p.isLogo) return "";
    var info = p.info || {};
    // Every product shows the full SKU/packaging field set (like Dash II) so
    // it's clear what still needs filling in — blanks render as a muted "—".
    var missing = 0;
    function row(label, val) {
      var v = val ? '<span class="sku-v">' + val + "</span>" : (missing++, '<span class="sku-v sku-tbd">—</span>');
      return '<div class="sku-row"><span class="sku-l">' + label + "</span>" + v + "</div>";
    }
    var rows =
      row("Product SKU", info.sku) +
      row("Full name", info.fullName) +
      row("UPC", info.upc) +
      row("Product dimensions", info.dimensions) +
      row("Unit weight", info.unitWeight) +
      row(info.pop ? "Units per POP display" : "Inner pack", info.innerPack) +
      row("Units per master case", info.masterCarton) +
      row("Case weight", info.caseWeight) +
      row("Case dimensions", info.caseDimensions);
    return '<div class="section-head"><h2>SKU details</h2></div>' +
      '<div class="sku-table">' + rows + "</div>" +
      (missing ? '<p class="pkg-note">' + icon("info") + " Fields shown as <strong>—</strong> are still to be confirmed." + "</p>" : "");
  }

  // MSRP / warranty facts + FAQ/site CTAs (sits in the hero info column).
  function overviewFactsHTML(p) {
    var info = p.info || {};
    var faq = info.faqUrl || BRANDS[p.brand].faqUrl;
    var factItems =
      (info.msrp ? '<div class="ov-fact">' + icon("tag") + '<div class="ov-fact-t"><div class="ov-fact-l">MSRP</div><div class="ov-fact-v">' + info.msrp + "</div></div></div>" : "") +
      (info.warranty ? '<div class="ov-fact">' + icon("shield") + '<div class="ov-fact-t"><div class="ov-fact-l">Warranty</div><div class="ov-fact-v">' + info.warranty + "</div></div></div>" : "");
    var ctas =
      (info.manual ? '<a class="btn ghost sm" href="' + info.manual + '" target="_blank" rel="noopener noreferrer">' + icon("file") + " Product Manual</a>" : "") +
      (faq ? '<a class="btn ghost sm" href="' + faq + '" target="_blank" rel="noopener noreferrer">' + icon("info") + " Product FAQs</a>" : "") +
      (info.productUrl ? '<a class="btn ghost sm" href="' + info.productUrl + '" target="_blank" rel="noopener noreferrer">' + icon("link") + " View on site</a>" : "");
    if (!factItems && !ctas) return "";
    return '<div class="ov-facts">' +
      (factItems ? '<div class="ov-fact-group">' + factItems + "</div>" : "") +
      (ctas ? '<div class="ov-cta">' + ctas + "</div>" : "") +
    "</div>";
  }
  // Highlights — a full-width two-column grid below the hero.
  function highlightsHTML(p) {
    var info = p.info || {};
    if (!(info.highlights && info.highlights.length)) return "";
    return '<div class="section-head"><h2>Highlights</h2></div>' +
      '<ul class="highlights">' + info.highlights.map(function (h) { return "<li>" + h + "</li>"; }).join("") + "</ul>";
  }
  // Official scraped product description (copy-to-clipboard).
  function fullDescHTML(p) {
    var info = p.info || {};
    if (!(info.fullDescription && info.fullDescription.length)) return "";
    return '<div class="fulldesc">' +
      '<div class="fd-head"><h3 class="ov-h">Official product description</h3>' +
        '<button class="btn ghost sm" id="copy-desc">' + icon("copy") + " Copy</button></div>" +
      '<div class="fd-body">' + info.fullDescription.map(function (t) { return "<p>" + t + "</p>"; }).join("") + "</div>" +
    "</div>";
  }

  // Educational video hub (YouTube), separate from the downloadable files.
  function videoHubHTML(p) {
    if (!p.videos || !p.videos.length) return "";
    var hasMp4 = false, hasEmbed = false;
    var cards = p.videos.map(function (v) {
      var safe = v.title.replace(/"/g, "");
      var poster = v.thumb ? '<img src="' + v.thumb + '" alt="' + safe + '" loading="lazy"/>' : "";
      if (v.embed) {
        // Vimeo/YouTube embed — plays in the modal player (download comes later).
        hasEmbed = true;
        return '<div class="vcard">' +
          '<div class="vthumb vplay" data-play="' + v.embed + '" data-title="' + safe + '" role="button" tabindex="0" aria-label="Watch ' + safe + '">' +
            poster + '<span class="play-badge">' + icon("play") + '</span><span class="vthumb-hint">Click to watch</span></div>' +
          '<div class="vmeta"><div class="vtitle">' + v.title + "</div></div>" +
        "</div>";
      }
      if (v.mp4) {
        hasMp4 = true;
        var raw = dropboxRaw(v.mp4), dl = dropboxZipUrl(v.mp4), dlname = safe.replace(/[^\w.-]+/g, "_") + ".mp4";
        // Opens a large player on click; the labelled button downloads the file.
        return '<div class="vcard">' +
          '<div class="vthumb vplay" data-play="' + raw + '" data-title="' + safe + '" data-dl="' + dl + '" data-dlname="' + dlname + '" role="button" tabindex="0" aria-label="Watch ' + safe + '">' +
            poster + '<span class="play-badge">' + icon("play") + '</span><span class="vthumb-hint">Click to watch</span></div>' +
          '<div class="vmeta">' +
            '<div class="vtitle">' + v.title + "</div>" +
            '<button class="vdl" data-vdl="' + dl + '" data-vname="' + dlname + '">' + icon("download") + " Download</button>" +
          "</div>" +
        "</div>";
      }
      return '<button class="vcard" data-yt="' + v.url + '">' +
        '<div class="vthumb">' + poster + '<span class="play-badge">' + icon("play") + "</span></div>" +
        '<div class="vmeta"><div class="vtitle">' + v.title + "</div></div>" +
      "</button>";
    }).join("");
    var note = hasMp4 ? " Click a video to watch it in your browser, or use <strong>Download</strong> to save the file."
      : hasEmbed ? " Click a video to watch it in your browser. Downloadable versions coming soon." : "";
    return '<div class="section-head"><h2>How to use videos</h2><span class="badge">' + p.videos.length + " video" + (p.videos.length > 1 ? "s" : "") + "</span></div>" +
      (note ? '<p class="vhub-note">' + icon("eye") + note + "</p>" : "") +
      '<div class="vhub">' + cards + "</div>";
  }
  // Dropbox shared-file link → inline-streamable URL (raw=1) for <video>.
  function dropboxRaw(link) {
    if (/[?&]dl=/.test(link)) return link.replace(/([?&])dl=\d/, "$1raw=1");
    return link + (link.indexOf("?") === -1 ? "?raw=1" : "&raw=1");
  }
  // Large in-browser video player (modal overlay).
  function openVideoModal(src, title, dlUrl, dlName) {
    closeVideoModal();
    var ov = document.createElement("div");
    ov.className = "vlb"; ov.id = "vlb";
    // Vimeo/YouTube embeds play in an iframe; real MP4s use a <video> element.
    var isEmbed = /player\.vimeo\.com|youtube\.com\/embed/.test(src);
    var media = isEmbed
      ? '<iframe src="' + src + (src.indexOf("?") === -1 ? "?" : "&") + 'autoplay=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'
      : '<video src="' + src + '" controls autoplay playsinline></video>';
    ov.innerHTML =
      '<button class="vlb-close" aria-label="Close">' + icon("x") + "</button>" +
      '<div class="vlb-stage">' + media + "</div>" +
      '<div class="vlb-bar"><span class="vlb-name">' + (title || "") + "</span>" +
        (dlUrl ? '<button class="btn vlb-dl">' + icon("download") + " Download video</button>" : "") + "</div>";
    document.body.appendChild(ov);
    ov.addEventListener("click", function (e) { if (e.target === ov || e.target.classList.contains("vlb-stage")) closeVideoModal(); });
    $(".vlb-close", ov).addEventListener("click", closeVideoModal);
    var dlBtn = $(".vlb-dl", ov);
    if (dlBtn) dlBtn.addEventListener("click", function () { directDownload(dlUrl, dlName); });
  }
  function closeVideoModal() {
    var ov = $("#vlb");
    if (ov) { var v = $("video", ov); if (v) v.pause(); ov.remove(); }
  }

  function renderGallery(p, folder, selected, onToggle, onChange) {
    var files = p.folders[folder] || [];
    var items = [];     // previewable assets in this folder: { src, name, url }
    var lastIdx = null; // anchor cell for shift-click range selection
    $("#gallery").innerHTML = files.map(function (file) {
      var key = fileKey(folder, file);
      var on = selected && selected[key];
      var ext = isExtVideo(file);   // YouTube (or other external) video link
      var hasImg = !!file.thumb;
      var lbAttr = "", ytAttr = "", badge = "";
      if (ext && hasImg) {
        ytAttr = ' data-yt="' + file.url + '"';
        badge = '<span class="play-badge">' + icon("play") + "</span>";
      } else if (hasImg) {
        lbAttr = ' data-lbidx="' + items.length + '"';
        items.push({ src: file.thumb, name: fileLabel(file), url: file.url || "#", file: file.file || null });
      }
      var thumb = hasImg
        ? '<img src="' + file.thumb + '" alt="' + file.name + '" loading="lazy" onerror="this.parentNode.innerHTML=window.__icon(\'' + (typeIcon[file.type] || "file") + '\')"/>' + badge
        : window.__icon(typeIcon[file.type] || "file");
      return (
        '<div class="gcell' + (on ? " sel" : "") + '" data-key="' + key + '">' +
          '<label class="gselect"><input type="checkbox" class="gcheck"' + (on ? " checked" : "") + ' aria-label="Select ' + fileLabel(file) + '"/></label>' +
          '<div class="gthumb' + (ext ? " is-video" : "") + '"' + lbAttr + ytAttr + ">" + thumb +
            (file.format ? '<span class="gfmt">' + file.format + "</span>" : "") + "</div>" +
          '<div class="gbar"><span class="gn">' + fileLabel(file) + '</span>' +
          '<span class="ga">' +
            '<span data-copy="' + (file.url || "#") + '" title="Copy link">' + icon("link") + "</span>" +
            '<span data-dl="' + (file.file || file.url || "#") + '" data-name="' + fileLabel(file) + '"' + (file.file ? ' data-direct="1"' : "") + ' title="' + (ext ? "Watch on YouTube" : "Download") + '">' + icon(ext ? "play" : "download") + "</span>" +
          "</span></div>" +
        "</div>"
      );
    }).join("");
    $$(".gthumb", $("#gallery")).forEach(function (t) {
      var idx = t.getAttribute("data-lbidx");
      if (idx === null) return;
      t.addEventListener("click", function () { openLightbox(items, +idx); });
    });
    $$(".gthumb[data-yt]", $("#gallery")).forEach(function (t) {
      t.addEventListener("click", function () { downloadOne(t.getAttribute("data-yt")); });
    });
    // per-asset selection checkboxes (with Dropbox-style shift-click range)
    $$(".gcell", $("#gallery")).forEach(function (cell, idx) {
      var file = files[idx];
      var cb = $(".gcheck", cell);
      var label = $(".gselect", cell);
      if (!cb || !file) return;
      var shiftHeld = false;
      if (label) label.addEventListener("click", function (e) { shiftHeld = e.shiftKey; });
      cb.addEventListener("change", function () {
        if (shiftHeld && lastIdx !== null) {
          var a = Math.min(lastIdx, idx), b = Math.max(lastIdx, idx);
          for (var j = a; j <= b; j++) onToggle(files[j], cb.checked);
        } else {
          onToggle(file, cb.checked);
        }
        lastIdx = idx;
        onChange();
      });
    });
    $$("[data-dl]", $("#gallery")).forEach(function (b) {
      b.addEventListener("click", function () {
        if (b.getAttribute("data-direct")) directDownload(b.getAttribute("data-dl"), b.getAttribute("data-name"));
        else downloadOne(b.getAttribute("data-dl"));
      });
    });
    $$("[data-copy]", $("#gallery")).forEach(function (b) {
      b.addEventListener("click", function () {
        var url = b.getAttribute("data-copy");
        if (!url || url === "#") { toast("No link yet"); return; }
        copyText(url, "Link copied");
      });
    });
  }
  window.__icon = function (n) { return '<div style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;">' + icon(n).replace('stroke-width="1.8"', 'stroke-width="1.4"') + "</div>"; };

  // ---- downloads --------------------------------------------------------
  // Trigger a real browser download of a (same-origin or blob) URL.
  function directDownload(href, name) {
    var a = document.createElement("a");
    a.href = href; a.download = name || ""; a.rel = "noopener";
    document.body.appendChild(a); a.click(); a.remove();
  }
  // Lazy-load JSZip from CDN only when a bundle download is requested.
  function loadJSZip(cb) {
    if (window.JSZip) return cb(window.JSZip);
    var s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
    s.onload = function () { cb(window.JSZip || null); };
    s.onerror = function () { cb(null); };
    document.head.appendChild(s);
  }
  // A single file: synced files download directly; anything else opens its link.
  function downloadOne(url) {
    if (!url || url === "#") { toast("Connect storage to enable downloads"); return; }
    window.open(url, "_blank");
  }
  // A folder / selection: fetch the real synced files and bundle them into a
  // .zip in the browser. Files too large to host (big videos) come via the
  // Dropbox "Download all" instead.
  function downloadFiles(files, label) {
    if (!files || !files.length) { toast("Select at least one asset first"); return; }
    var dl = files.filter(function (f) { return f && f.file; });
    var skipped = files.length - dl.length;
    if (!dl.length) {
      var u = (files.find(function (f) { return f && f.url; }) || {}).url;
      if (u) { toast("Opening these in Dropbox — or use “Download all” for the full folder"); downloadOne(u); }
      else toast("Use “Download all” to get these from Dropbox");
      return;
    }
    if (dl.length === 1) { directDownload(dl[0].file, fileLabel(dl[0])); return; }
    toast("Preparing " + dl.length + " files as a .zip…");
    loadJSZip(function (JSZip) {
      if (!JSZip) { toast("Couldn’t load the zipper — try again"); return; }
      var zip = new JSZip();
      Promise.all(dl.map(function (f) {
        return fetch(f.file).then(function (r) { return r.blob(); }).then(function (b) { zip.file(fileLabel(f), b); });
      })).then(function () { return zip.generateAsync({ type: "blob" }); })
        .then(function (blob) {
          var href = URL.createObjectURL(blob);
          directDownload(href, String(label || "assets").replace(/[^\w.-]+/g, "_") + ".zip");
          setTimeout(function () { URL.revokeObjectURL(href); }, 8000);
          toast("Downloaded " + dl.length + " files" + (skipped ? " · " + skipped + " too large (use Download all)" : ""));
        })
        .catch(function () { toast("Couldn’t build the zip"); });
    });
  }
  // Turn a Dropbox shared-folder link into a direct "download whole folder as
  // .zip" URL (forces dl=1).
  function dropboxZipUrl(link) {
    if (/[?&]dl=/.test(link)) return link.replace(/([?&]dl=)\d/, "$11");
    return link + (link.indexOf("?") === -1 ? "?dl=1" : "&dl=1");
  }
  function downloadAll(p) {
    // Real Dropbox: download the whole product folder as a .zip from the shared
    // link (works on the static site, no backend). Per-file/zip-of-selection
    // still needs the Dropbox API sync (see GitHub Action) to resolve paths.
    if (p.dropbox) {
      toast("Opening Dropbox download…");
      window.open(dropboxZipUrl(p.dropbox), "_blank", "noopener");
      return;
    }
    var files = [];
    Object.keys(p.folders).forEach(function (f) {
      p.folders[f].forEach(function (x) { files.push(x); });
    });
    downloadFiles(files, p.name);
  }
  window.__open = function (url) {
    if (!url || url === "#") { toast("Document coming soon"); return; }
    window.open(url, "_blank");
  };

  // ---- lightbox / asset viewer ---------------------------------------------
  var lbItems = [], lbIdx = 0;   // items: { src, name, url }
  function openLightbox(items, idx) {
    lbItems = items && items.length ? items : [];
    lbIdx = idx || 0;
    showLb();
    $("#lightbox").classList.add("open");
  }
  function lbCurrent() { return lbItems[lbIdx] || {}; }
  function showLb() {
    var it = lbCurrent();
    $("#lightbox img").src = it.src || "";
    $("#lb-name").textContent = it.name || "";
    $("#lb-count").textContent = lbItems.length > 1 ? (lbIdx + 1) + " / " + lbItems.length : "";
    var multi = lbItems.length > 1 ? "flex" : "none";
    $("#lb-prev").style.display = multi;
    $("#lb-next").style.display = multi;
  }
  function lbStep(d) {
    if (lbItems.length < 2) return;
    lbIdx = (lbIdx + d + lbItems.length) % lbItems.length;
    showLb();
  }
  function closeLightbox() { $("#lightbox").classList.remove("open"); $("#lightbox img").src = ""; lbItems = []; }
  function lbOpen() { return $("#lightbox").classList.contains("open"); }

  // ---- toast ---------------------------------------------------------------
  var toastTimer;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 2200);
  }

  // ---- wire up the static shell -------------------------------------------
  function init() {
    // hero text from config
    $("#hero-tagline").textContent = CFG.tagline;
    var heroIntro = $("#hero-intro"); if (heroIntro) heroIntro.textContent = CFG.intro;
    $$(".req-mail").forEach(function (a) { a.href = "mailto:" + CFG.requestEmail; });

    // nav "Logos & assets" link scrolls down to the de-emphasized resources strip.
    var navGuides = $("#nav-guides");
    if (navGuides) navGuides.addEventListener("click", function () {
      navHome();
      var r = $("#resources"); if (r) r.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    var homeLink = $("#home-link");
    if (homeLink) {
      homeLink.addEventListener("click", navHome);
      homeLink.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navHome(); } });
    }

    // brand toggle
    $$("#view-toggle button").forEach(function (b) {
      b.addEventListener("click", function () {
        $$("#view-toggle button").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        state.view = b.getAttribute("data-view");
        navHome();
      });
    });
    // type filter chips (no "All assets" chip — clicking an active chip clears it)
    $$("#type-filters .chip").forEach(function (c) {
      c.addEventListener("click", function () {
        var t = c.getAttribute("data-type");
        var deselect = state.type === t;
        state.type = deselect ? "all" : t;
        $$("#type-filters .chip").forEach(function (x) { x.classList.remove("on"); });
        if (!deselect) c.classList.add("on");
        navHome();
      });
    });
    // sort toggle
    $$("#sort-toggle button").forEach(function (b) {
      b.addEventListener("click", function () {
        $$("#sort-toggle button").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        state.sort = b.getAttribute("data-sort");
        renderHome();
      });
    });
    // grid / list view toggle
    $$("#view-mode button").forEach(function (b) {
      b.innerHTML = icon(b.getAttribute("data-layout"));
      b.addEventListener("click", function () {
        $$("#view-mode button").forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        state.layout = b.getAttribute("data-layout");
        renderHome();
      });
    });
    // search
    $("#search").addEventListener("input", function (e) { state.query = e.target.value.trim(); navHome(); });

    // lightbox / asset viewer
    $("#lb-copy").innerHTML = icon("link") + " Copy link";
    $("#lb-dl").innerHTML = icon("download") + " Download";
    $("#lb-close").addEventListener("click", closeLightbox);
    $("#lb-prev").addEventListener("click", function () { lbStep(-1); });
    $("#lb-next").addEventListener("click", function () { lbStep(1); });
    $("#lb-copy").addEventListener("click", function () {
      var u = lbCurrent().url;
      if (!u || u === "#") { toast("No link yet"); return; }
      copyText(u, "Link copied");
    });
    $("#lb-dl").addEventListener("click", function () { var it = lbCurrent(); if (it.file) directDownload(it.file, it.name); else downloadOne(it.url); });
    $("#lightbox").addEventListener("click", function (e) {
      if (e.target.id === "lightbox" || e.target.classList.contains("lb-stage")) closeLightbox();
    });

    // keyboard shortcuts
    document.addEventListener("keydown", function (e) {
      var el = document.activeElement;
      var typing = el && /^(INPUT|TEXTAREA)$/.test(el.tagName);
      if (e.key === "Escape") {
        if ($("#vlb")) { closeVideoModal(); return; }
        if (lbOpen()) { closeLightbox(); return; }
        if (typing && el.id === "search") { el.value = ""; state.query = ""; el.blur(); navHome(); }
        return;
      }
      if (lbOpen()) {
        if (e.key === "ArrowLeft") lbStep(-1);
        else if (e.key === "ArrowRight") lbStep(1);
        return;
      }
      if (e.key === "/" && !typing) { e.preventDefault(); var s = $("#search"); if (s) s.focus(); }
    });

    // restore filters from the URL (shareable views), then route to product/home
    parseURL();
    window.addEventListener("hashchange", function () {
      if (ignoreHash) { ignoreHash = false; return; }
      route();
    });
    route();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
