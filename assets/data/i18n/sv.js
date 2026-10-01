/* =============================================================================
   SWEDISH (sv) LANGUAGE PACK
   -----------------------------------------------------------------------------
   Loaded on demand — only when a visitor selects this language, so English
   visitors download none of it. Editing this file is the ONLY thing needed to
   revise the Swedish; no code changes.

     ui        UI chrome, keyed by the ENGLISH source string. A missing key
               simply falls back to English. "<key>|one" / "<key>|few" are
               count forms picked by Intl.PluralRules (see trn() in app.js).
     products  Product prose: description / highlights / warranty /
               fullDescription / box / specs. Array lengths must match the
               English, or that field stays in English.
   VOICE  Informal "du" (standard in Swedish business copy). "Assets" = material,
          files = filer, POP display = POP-display, MSRP = Rek. pris.
   RULES
   - Product names, brand names, SKUs, UPCs, filenames, units and prices are
     never translated.
   - Keep inline <strong> tags balanced, and keep {placeholder} tokens intact.
   ========================================================================== */
window.PORTAL_I18N = window.PORTAL_I18N || {};
window.PORTAL_I18N.sv = {
  "ui": {
    "N/A": "Ej tillg.",
    "Back to home": "Tillbaka till startsidan",
    "Select language": "Välj språk",
    "Clear search": "Rensa sökning",
    "Previous": "Föregående",
    "Scroll to top": "Till toppen",
    "Grid view": "Rutnätsvy",
    "List view": "Listvy",
    "Layout": "Layout",
    "Sort products": "Sortera produkter",
    "Select {name}": "Markera {name}",
    "Play {name}": "Spela upp {name}",
    "Enlarge {name}": "Förstora {name}",
    "Copy link to {name}": "Kopiera länk till {name}",
    "Download {name}": "Ladda ner {name}",
    "Watch {name}": "Titta på {name}",
    "Watch on YouTube": "Titta på YouTube",
    "Share on YouTube": "Dela på YouTube",
    "Close": "Stäng",
    "Video player": "Videospelare",
    "Asset preview": "Förhandsvisning",
    "Zoom in": "Zooma in",
    "Fit to screen": "Anpassa till skärmen",
    "Viewer unavailable — downloading instead": "Visaren är inte tillgänglig — laddar ner i stället",
    "Couldn’t open the catalog — downloading instead": "Det gick inte att öppna katalogen — laddar ner i stället",
    "Filter results by type": "Filtrera resultat efter typ",
    "asset": "material",
    "video": "video",
    "Photos": "Bilder",
    "Lifestyle": "Livsstil",
    "Videos": "Videor",
    "In-store": "I butik",
    "View": "Visa",
    "{n} colors": "{n} färger",
    "Copied link to {folder}": "Länken till {folder} har kopierats",
    "Concentrate Accessories": "Tillbehör för koncentrat",
    "Dry Herb Accessories": "Tillbehör för torkade örter",
    "Dry-herb devices & accessories": "Enheter och tillbehör för torkade örter",
    "Grinder": "Kvarn",
    "This folder has {n} files. Downloading them one at a time can take several minutes and your browser may block it. Open the full Dropbox download instead?": "Den här mappen innehåller {n} filer. Att ladda ner dem en i taget kan ta flera minuter, och webbläsaren kan blockera det. Vill du öppna hela nedladdningen i Dropbox i stället?",
    "{n} downloads starting — allow multiple if your browser asks, or use “Download all”.": "{n} nedladdningar startar — tillåt flera om webbläsaren frågar, eller använd ”Ladda ner allt”.",
    "Add your store name, mailing address and email so we can ship your order": "Ange butikens namn, postadress och e-post så att vi kan skicka din beställning",
    "Enter a valid email address": "Ange en giltig e-postadress",
    "Add your name and email so we can reply": "Ange ditt namn och din e-post så att vi kan svara",
    "Click a video to watch it, and download it or open it on YouTube where available.": "Klicka på en video för att titta på den, och ladda ner den eller öppna den på YouTube där det finns.",
    "document": "dokument",
    "documents": "dokument",
    "item": "artikel",
    "items": "artiklar",
    "These assets are provided for approved partner, press, and retail use. Please don't alter logos or product imagery. Need something specific or a different format? Use “Request an asset.”": "Materialet tillhandahålls för godkända partner, press och återförsäljare. Ändra inte logotyper eller produktbilder. Behöver du något särskilt eller ett annat format? Använd ”Begär material”.",
    "Brand Documents": "Varumärkesdokument",
    "Dry Herb Vaporizer": "Vaporizer för torkade örter",
    "510 Cartridge Battery": "Batteri för 510-patroner",
    "Electric Hot Knife": "Elektrisk hot knife",
    "Concentrate Vaporizer": "Vaporizer för koncentrat",
    "Take the course on G Pen Training — watch the videos, learn the product and pass a short quiz to get certified.": "Gå kursen på G Pen Training — titta på videorna, lär dig produkten och klara ett kort quiz för att bli certifierad.",
    "Start training": "Starta utbildningen",
    "Opens G Pen Training in a new tab": "Öppnar G Pen Training i en ny flik",
    "How to Use: G Pen Dash II": "Så använder du G Pen Dash II",
    "How to Use: G Pen 510 Original": "Så använder du G Pen 510 Original",
    "How to Use: G Pen Hydout": "Så använder du G Pen Hydout",
    "How to Use: G Pen Dash+": "Så använder du G Pen Dash+",
    "How to Use: G Pen Micro+": "Så använder du G Pen Micro+",
    "How to Clean: Dash II": "Så rengör du Dash II",
    "How to Clean: G Pen 510 Original": "Så rengör du G Pen 510 Original",
    "How to Clean: G Pen Hydout": "Så rengör du G Pen Hydout",
    "How to Clean: G Pen Dash+": "Så rengör du G Pen Dash+",
    "How to Clean: G Pen Micro+": "Så rengör du G Pen Micro+",
    "A Closer Look at the Melt": "En närmare titt på Melt",
    "G Pen Connect + Your Favorite Glass": "G Pen Connect + ditt favoritglas",
    "Connect to Favorite Glass": "Anslut till ditt favoritglas",
    "How To Use Your G Pen Elite II": "Så använder du din G Pen Elite II",
    "Using the Elite II": "Använda Elite II",
    "Products we no longer sell — assets kept here for partners who still need them.": "Produkter vi inte längre säljer — materialet finns kvar här för partner som fortfarande behöver det.",
    "Placeholder guide — the official {brand} brand guide will replace this. Colors, type, and logos below reflect current brand usage.": "Tillfällig guide — den officiella varumärkesguiden för {brand} ersätter den här. Färger, typsnitt och logotyper nedan visar hur varumärket används i dag.",
    "No assets match your filters.": "Inget material matchar dina filter.",
    "Request one →": "Begär det →",
    "{n} more coming from Dropbox": "{n} till kommer från Dropbox",
    "With vape holder": "Med vape-hållare",
    "2.5\" L × 2.5\" W · 25 notes per pad": "2.5\" L × 2.5\" W · 25 lappar per block",
    "3ft Circular": "Rund, 3 ft",
    "How to Use: G Pen Micro II": "Så använder du G Pen Micro II",
    "How to Clean: G Pen Micro II": "Så rengör du G Pen Micro II",
    "How to Use: G Pen Micro II Sidecar": "Så använder du G Pen Micro II Sidecar",
    "How to Use: G Pen Micro II Rig Adapter": "Så använder du G Pen Micro II Rig Adapter",
    "Become a {name} Product Specialist": "Bli produktspecialist på {name}",
    "Your Name": "Ditt namn",
    "Full name": "För- och efternamn",
    "Product Name": "Produktnamn",
    "Product SKU": "Produkt-SKU",
    "Product UPC": "Produkt-UPC",
    "Retail POP Display SKU": "SKU för POP-display",
    "Retail POP Display UPC": "UPC för POP-display",
    "Product Dimensions": "Produktmått",
    "Unit Weight": "Vikt per enhet",
    "Ships In Retail POP Display": "Levereras i POP-display",
    "Units Per POP Display": "Enheter per POP-display",
    "Units Per Master Case": "Enheter per ytterkartong",
    "Case Weight": "Kartongvikt",
    "Case Dimensions": "Kartongmått",
    "HTS (Harmonized Tariff Schedule) Code": "HTS-kod (Harmonized Tariff Schedule)",
    "Dry Herb Vape": "Vape för torkade örter",
    "510 Battery": "510-batteri",
    "Concentrate Hot Knife": "Hot knife för koncentrat",
    "Dry Herb": "Torkade örter",
    "Accessory": "Tillbehör",
    "E-Nail": "E-Nail",
    "E-Rig": "E-Rig",
    "Brand": "Varumärke",
    "Product photos": "Produktbilder",
    "Lifestyle Photos": "Livsstilsbilder",
    "Social Videos": "Videor för sociala medier",
    "TV Screen Videos": "Videor för TV-skärmar",
    "Documents": "Dokument",
    "Product Photos": "Produktbilder",
    "Web Banners": "Webbbanners",
    "E-Comm Render Photos": "Renderingar för e-handel",
    "Misc": "Övrigt",
    "Our customer service team has been with us since day one — with over 15 years of hands-on experience with our devices. They know these products inside and out, and they’d be happy to walk you through anything or go over any additional questions you might have. We love to chat all things cannabis and vaporizers with you.": "Vårt kundtjänstteam har varit med oss sedan första dagen — med över 15 års praktisk erfarenhet av våra enheter. De kan produkterna utan och innan och hjälper dig gärna steg för steg eller svarar på andra frågor du kan ha. Vi pratar gärna allt om cannabis och vaporizers med dig.",
    "(optional)": "(valfritt)",
    "123 Main St, City, State ZIP": "Storgatan 1, 123 45 Ort",
    "Add each store you'd like listed on our official locator, then send your request. Have more than one location? Use <strong>Add another store</strong> to include them all.": "Lägg till varje butik som du vill ha med i vår officiella butikssökare och skicka sedan din förfrågan. Har du fler än en butik? Använd <strong>Lägg till ännu en butik</strong> för att ta med alla.",
    "Additional Products": "Fler produkter",
    "Address": "Adress",
    "All": "Alla",
    "Assets": "Material",
    "Browse all {n} logo files →": "Bläddra bland alla {n} logofiler →",
    "Carry G Pen? Request to be added to our official store locator so customers can find your shop.": "Säljer du G Pen? Be om att bli tillagd i vår officiella butikssökare så att kunderna hittar din butik.",
    "Clear": "Rensa",
    "Click a preview to enlarge it.": "Klicka på en förhandsvisning för att förstora den.",
    "Click preview to enlarge": "Klicka för att förstora",
    "Close viewer": "Stäng visaren",
    "Contact us": "Kontakta oss",
    "Decrease": "Minska",
    "Downloaded": "Nedladdat:",
    "Downloading {n} files…": "Laddar ner {n} filer…",
    "Email Address": "E-postadress",
    "Enlarge": "Förstora",
    "Fields shown as <strong>—</strong> are still to be confirmed.": "Fält som visas som <strong>—</strong> är ännu inte bekräftade.",
    "Formats": "Format",
    "Increase": "Öka",
    "Loading catalog…": "Läser in katalogen…",
    "Mailing Address": "Postadress",
    "New": "Nyhet",
    "Next": "Nästa",
    "No": "Nej",
    "No matches for": "Inga träffar för",
    "Official {brand} logos — black, white &amp; various versions. For approved partner, press &amp; retail use; please don’t alter, recolor, or distort the marks.": "Officiella logotyper för {brand} — svart, vitt och olika versioner. För godkända partner, press och återförsäljare; ändra, färga om eller förvräng inte märkena.",
    "Open": "Öppna",
    "Order Marketing Materials": "Beställ marknadsföringsmaterial",
    "Order Materials": "Beställ material",
    "Orderable in-store marketing materials will be listed here soon. In the meantime, reach out and we’ll let you know what’s available.": "Beställningsbart marknadsföringsmaterial för butik listas här snart. Hör av dig under tiden så berättar vi vad som finns.",
    "Phone": "Telefon",
    "Popular searches": "Populära sökningar",
    "Preparing {n} files as a .zip…": "Förbereder {n} filer som en .zip…",
    "Press <kbd>/</kbd> to search from anywhere · <kbd>Enter</kbd> opens the top result": "Tryck på <kbd>/</kbd> för att söka var du än är · <kbd>Enter</kbd> öppnar översta träffen",
    "Quantity for": "Antal för",
    "Remove this store": "Ta bort den här butiken",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} will show here as they’re added — order what you need for your shop.": "Displayer, affischer, hyllpratare och annat butiksmaterial för {brand} visas här när det läggs till — beställ det du behöver till din butik.",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} — order what you need for your shop.": "Displayer, affischer, hyllpratare och annat butiksmaterial för {brand} — beställ det du behöver till din butik.",
    "Retailers": "Återförsäljare",
    "Select all": "Markera alla",
    "Set a quantity for each item, add your store details, then send your request.": "Ange antal för varje artikel, fyll i butiksuppgifterna och skicka sedan din förfrågan.",
    "Showing the top {n} of {total} files — add a word to narrow it down.": "Visar de {n} främsta av {total} filer — lägg till ett ord för att begränsa sökningen.",
    "Store": "Butik",
    "Store Name": "Butikens namn",
    "Store name": "Butikens namn",
    "Street, City, State, ZIP": "Gatuadress, postnummer, ort",
    "Submit Request": "Skicka förfrågan",
    "Try a product name (Dash), a file type (PNG, MP4), a category (lifestyle, packaging), or “catalog”.": "Prova ett produktnamn (Dash), en filtyp (PNG, MP4), en kategori (livsstil, förpackning) eller ”katalog”.",
    "View all →": "Visa alla →",
    "Website": "Webbplats",
    "Yes": "Ja",
    "Your contact info": "Dina kontaktuppgifter",
    "Your details": "Dina uppgifter",
    "You’ll confirm and send from your email app.": "Du bekräftar och skickar från din e-postapp.",
    "assets": "material",
    "available": "tillgängliga",
    "colorways": "färgvarianter",
    "files": "filer",
    "file": "fil",
    "logo files": "logofiler",
    "selected": "markerade",
    "stores": "butiker",
    "material": "material",
    "materials": "material",
    "{n} older {brand} products we no longer sell — assets kept for partners who still need them.": "{n} äldre {brand}-produkter som vi inte längre säljer — materialet finns kvar för partner som fortfarande behöver det.",
    "Click to watch": "Klicka för att titta",
    "Description copied": "Beskrivningen har kopierats",
    "Copy": "Kopiera",
    "product": "produkt",
    "products": "produkter",
    "result": "träff",
    "results": "träffar",
    "510 Batteries": "510-batterier",
    "510-thread cartridge batteries": "Batterier för 510-gängade patroner",
    "Dry Herb Vaporizers": "Vaporizers för torkade örter",
    "Portable dry-herb devices": "Bärbara enheter för torkade örter",
    "Concentrate": "Koncentrat",
    "Concentrate tools & accessories": "Verktyg och tillbehör för koncentrat",
    "More products": "Fler produkter",
    "Catalogs & Brand Documents": "Kataloger och varumärkesdokument",
    "Logos & assets": "Logotyper och material",
    "Official Brand & Product Assets": "Officiellt varumärkes- och produktmaterial",
    "Wholesale & press asset requests welcome. Assets update as new products launch.": "Förfrågningar om material från grossister och press är välkomna. Materialet uppdateras när nya produkter lanseras.",
    "Catalogs": "Kataloger",
    "Logos &amp; assets": "Logotyper och material",
    "Request an asset": "Begär material",
    "Request an asset →": "Begär material →",
    "Official Brand &amp; Product Assets": "Officiellt varumärkes- och produktmaterial",
    "Everything you need, in one place.": "Allt du behöver, på ett ställe.",
    "Search products, files, formats…": "Sök produkter, filer, format…",
    "Search all assets": "Sök i allt material",
    "Featured": "Utvalda",
    "Logos and Brand Assets": "Logotyper och varumärkesmaterial",
    "Catalogs &amp; Brand Documents": "Kataloger och varumärkesdokument",
    "Questions about a product?": "Frågor om en produkt?",
    "Talk to our team.": "Prata med vårt team.",
    "Mon–Fri · 10:00 AM – 6:00 PM EST": "Mån–fre · 10:00–18:00 EST",
    "Wholesale &amp; press asset requests welcome. Assets update as new products launch.": "Förfrågningar om material från grossister och press är välkomna. Materialet uppdateras när nya produkter lanseras.",
    "Browse G Pen by category": "Bläddra i G Pen efter kategori",
    "Search results": "Sökresultat",
    "Follow G Pen On Socials": "Följ G Pen i sociala medier",
    "Official accounts": "Officiella konton",
    " Copy link": " Kopiera länk",
    " Download": " Ladda ner",
    "Add another store": "Lägg till ännu en butik",
    "Add at least one store's details first": "Fyll först i uppgifterna för minst en butik",
    "At least one store is required": "Minst en butik krävs",
    "Back to library": "Tillbaka till biblioteket",
    "Brand &amp; Style Guide": "Varumärkes- och stilguide",
    "Catalog not found": "Katalogen hittades inte",
    "Collection Colorways": "Kollektionens färgvarianter",
    "Colors": "Färger",
    "Connect storage to enable downloads": "Anslut lagring för att aktivera nedladdningar",
    "Copy failed": "Det gick inte att kopiera",
    "Copy folder link": "Kopiera mapplänk",
    "Copy link": "Kopiera länk",
    "Couldn’t build the zip": "Det gick inte att skapa zip-filen",
    "Couldn’t load the zipper — try again": "Det gick inte att läsa in zip-verktyget — försök igen",
    "Couldn’t render that page": "Det gick inte att visa sidan",
    "Document coming soon": "Dokumentet kommer snart",
    "Download": "Ladda ner",
    "Download PDF": "Ladda ner PDF",
    "Download all": "Ladda ner allt",
    "Download all logos": "Ladda ner alla logotyper",
    "Photo / Video Assets": "Foto- och videomaterial",
    "Sales Assets": "Säljmaterial",
    "Other": "Övrigt",
    "User Generated Content": "Användargenererat innehåll",
    "One Sheet": "Produktblad",
    "Region": "Region",
    "Download coming soon": "Nedladdning kommer snart",
    "Download folder": "Ladda ner mapp",
    "Download logo files": "Ladda ner logofiler",
    "Download logos": "Ladda ner logotyper",
    "Download selected": "Ladda ner markerade",
    "Download video": "Ladda ner video",
    "Downloadable file coming soon — Dropbox link on the way": "Nedladdningsbar fil kommer snart — Dropbox-länk är på väg",
    "Get your store on our Store Locator": "Få med din butik i vår butikssökare",
    "Highlights": "Höjdpunkter",
    "How to use videos": "Instruktionsvideor",
    "In-Store Marketing Materials": "Marknadsföringsmaterial för butik",
    "Logos": "Logotyper",
    "Matching files &amp; assets": "Matchande filer och material",
    "No link yet": "Ingen länk än",
    "No shareable link for this folder yet": "Ingen delbar länk för den här mappen än",
    "Official Product Description": "Officiell produktbeskrivning",
    "Opening Dropbox download…": "Öppnar nedladdning från Dropbox…",
    "Order materials": "Beställ material",
    "Packaging": "Förpackning",
    "Prev": "Föreg.",
    "This video can't be played in the browser.": "Den här videon kan inte spelas upp i webbläsaren.",
    "Use Download below to save it": "Använd Ladda ner nedan för att spara den",
    "Technical specifications": "Tekniska specifikationer",
    "Product FAQs": "Vanliga frågor om produkten",
    "Product Manual": "Bruksanvisning",
    "Remove": "Ta bort",
    "Request materials": "Begär material",
    "Request this asset": "Begär det här materialet",
    "Request to be listed": "Be om att bli listad",
    "SKU details": "SKU-information",
    "Select at least one asset first": "Markera minst ett material först",
    "Set a quantity for at least one item first": "Ange först antal för minst en artikel",
    "Share": "Dela",
    "Store Locator Request": "Förfrågan till butikssökaren",
    "Typography": "Typografi",
    "Use “Download all” to get these from Dropbox": "Använd ”Ladda ner allt” för att hämta dem från Dropbox",
    "View on site": "Visa på webbplatsen",
    "Viewer is taking too long — downloading instead": "Visaren tar för lång tid — laddar ner i stället",
    "Watch": "Titta på",
    "What’s In the Box?": "Vad ingår?",
    "YouTube": "YouTube",
    "Assets are coming soon — check back shortly.": "Materialet kommer snart — titta in igen om en stund.",
    "B2B Resources": "B2B-resurser",
    "Blue": "Blå",
    "Body": "Brödtext",
    "Catalog": "Katalog",
    "Catalog link copied": "Kataloglänken har kopierats",
    "Clear all": "Rensa alla",
    "Display / Headlines": "Display / rubriker",
    "Green": "Grön",
    "How-to video": "Instruktionsvideo",
    "In-store marketing": "Marknadsföring i butik",
    "Link copied": "Länken har kopierats",
    "MSRP": "Rek. pris",
    "Master carton": "Ytterkartong",
    "Open in": "Öppna i",
    "Pink": "Rosa",
    "Purple": "Lila",
    "Red": "Röd",
    "Regional Catalogs": "Regionala kataloger",
    "Retail POP display": "POP-display för butik",
    "Share view": "Dela vy",
    "Ships in POP display": "Levereras i POP-display",
    "Ships in a retail-ready POP display — one retail box shown per colorway. See SKU details for inner-pack &amp; master-carton quantities.": "Levereras i en butiksklar POP-display — en detaljhandelsförpackning visas per färgvariant. Se SKU-informationen för antal per innerförpackning och ytterkartong.",
    "Ships in a retail-ready POP display — see SKU details for inner-pack &amp; master-carton quantities.": "Levereras i en butiksklar POP-display — se SKU-informationen för antal per innerförpackning och ytterkartong.",
    "Ships in single retail boxes — no POP display. See SKU details for master-carton quantities.": "Levereras i enskilda detaljhandelsförpackningar — ingen POP-display. Se SKU-informationen för antal per ytterkartong.",
    "Single Retail Packaging": "Enskild detaljhandelsförpackning",
    "View link copied": "Länken till vyn har kopierats",
    "View {brand} assets": "Visa material för {brand}",
    "Warranty": "Garanti",
    "What’s in the box": "Vad ingår",
    "tap to copy": "tryck för att kopiera",
    "updated": "uppdaterad",
    "videos": "videor",
    "{brand} specific in-store materials.": "Butiksmaterial specifikt för {brand}.",
    "{n}-Pack Retail POP Display": "POP-display med {n} st.",
    "SKU": "SKU",
    "Order": "Beställ",
    "Order marketing materials": "Beställ marknadsföringsmaterial",
    "Printed in-store materials (posters, shelf talkers, displays) for this product will appear here as they’re added.": "Tryckt butiksmaterial (affischer, hyllpratare, displayer) för den här produkten visas här när det läggs till.",
    "Training": "Utbildning",
    "Additional G Pen Products": "Fler G Pen-produkter",
    "files|one": "fil",
    "logo files|one": "logofil",
    "available|one": "tillgängligt",
    "selected|one": "markerad",
    "stores|one": "butik",
    "colorways|one": "färgvariant"
  },
  "products": {
    "Micro II": {
      "description": "En kompakt vaporizer för koncentrat med tre värmelägen, justerbart luftflöde, digital display, keramisk uppvärmning och upp till 120 sessioner per laddning.",
      "highlights": [
        "Tre värmelägen — LOW ~295°F, MEDIUM ~340°F, HIGH ~395°F",
        "Uppvärmning på 5 sekunder",
        "Session Mode (20 s) + manuell uppvärmning (upp till 25 s)",
        "Justerbart luftflöde — från öppet till begränsat",
        "0,8 Ω keramisk atomizer",
        "Digital display — temperatur, uppvärmningsstatus, batteri",
        "Haptisk återkoppling när temperaturen är nådd",
        "1 250 mAh batteri — upp till 120 sessioner per laddning",
        "USB-C-snabbladdning — under 60 minuter",
        "Genomströmningsladdning (pass-through)",
        "Automatisk avstängning efter 10 minuter",
        "Kropp i anodiserad aluminium",
        "Kompatibel med Sidecar och 14 mm Rig Adapter (säljs separat)",
        "Enkel hantering med en knapp"
      ],
      "fullDescription": [
        "G Pen Micro II tar den ikoniska Micro-vaporizern för koncentrat till nästa nivå, med mer kraft, precision och kontroll i en kompakt design som får plats i fickan.",
        "Micro II drivs av ett uppladdningsbart batteri på 1 250 mAh och ger upp till 120 sessioner per laddning, med USB-C-snabbladdning på under 60 minuter. Tre optimerade temperaturlägen — LOW på cirka 295°F, MEDIUM på 340°F och HIGH på 395°F — låter dig ställa in sessionen för mjuk smak, balanserad prestanda eller kraftigare ångproduktion.",
        "En premium keramisk atomizer på 0,8 Ω ger jämn prestanda med koncentrat, medan det justerbara luftflödet ger dig ännu mer kontroll över varje bloss. Välj mellan en 20 sekunder lång cykel i Session Mode för bekväm automatisk uppvärmning eller manuell uppvärmning i upp till 25 sekunder för direkt kontroll.",
        "Den inbyggda digitala displayen visar batteri, temperatur och uppvärmningsstatus med en snabb blick, och haptisk återkoppling talar om när Micro II har nått rätt temperatur. En tålig kropp i anodiserad aluminium, enkel hantering med en knapp, genomströmningsladdning och automatisk avstängning efter 10 minuter gör vardagsanvändningen enkel.",
        "Använd det medföljande munstycket i silikon för en kompakt lösning, eller bygg ut upplevelsen med G Pen Micro II Sidecar och 14 mm Rig Adapter, som säljs separat, för vattenfiltrerade sessioner hemma eller på språng.",
        "Mer än ett decennium efter att den ursprungliga microG var med och definierade bärbar förångning av koncentrat tar Micro II Micro-upplevelsen in i en ny generation — allt för $49.95."
      ],
      "box": {
        "contents": [
          "G Pen Micro II-batteri",
          "G Pen Micro II keramisk tank",
          "Munstycke i silikon",
          "*Micro II Sidecar säljs separat",
          "*Micro II 14 mm Rig Adapter säljs separat"
        ]
      },
      "specs": [
        [
          "Batteri",
          "1 250 mAh, uppladdningsbart"
        ],
        [
          "Laddning",
          "USB-C-snabbladdning, under 60 minuter"
        ],
        [
          "Genomströmningsladdning",
          "Ja"
        ],
        [
          "Display",
          "Digital svartvit display"
        ],
        [
          "Temperatur — LOW",
          "~295°F"
        ],
        [
          "Temperatur — MEDIUM",
          "~340°F"
        ],
        [
          "Temperatur — HIGH",
          "~395°F"
        ],
        [
          "Temperaturtolerans",
          "±15–30°F"
        ],
        [
          "Uppvärmningstid",
          "5 sekunder"
        ],
        [
          "Session Mode",
          "20 sekunders uppvärmningscykel (inklusive uppvärmning)"
        ],
        [
          "Manuell uppvärmning",
          "Upp till 25 sekunder (inklusive uppvärmning)"
        ],
        [
          "Atomizer",
          "0,8 Ω keramisk"
        ],
        [
          "Luftflöde",
          "Justerbart"
        ],
        [
          "Haptisk återkoppling",
          "Ja"
        ],
        [
          "Batteritid",
          "Upp till 120 sessioner per laddning"
        ],
        [
          "Automatisk avstängning",
          "10 minuter"
        ],
        [
          "Kropp",
          "Anodiserad aluminium"
        ],
        [
          "Munstycke",
          "Silikon"
        ],
        [
          "Enhetens mått",
          "98,6 × 24 × 32 mm"
        ],
        [
          "Enhetens vikt",
          "86 g"
        ]
      ]
    },
    "Slim 3-Piece Grinder": {
      "description": "En smal tredelad kvarn utan såll, med mikrorundade tänder som varsamt fördelar blomman till en jämn malning — gjord för att passa ihop med Dash II och Dash+.",
      "highlights": [
        "Mikrorundade tänder för en varsam, jämn malning",
        "Hjälper till att bevara cannabinoider och terpener",
        "Tredelad design utan såll håller kvar trikomerna i materialet",
        "Slät insida minskar friktion och avlagringar",
        "Anodiserad aluminium av flygplanskvalitet (6063)",
        "Högst kvarvarande THC efter malning i tester från Orange Photonics",
        "Magnetiskt lock håller innehållet på plats",
        "Kompakt form för fickan och resan",
        "Passar ihop med G Pen Dash II och Dash+"
      ],
      "fullDescription": [
        "Varje riktigt bra session börjar med en bättre malning. G Pen Slim 3-Piece Grinder har innovativa mikrorundade tänder som varsamt fördelar blomman till en jämn malning och samtidigt hjälper till att bevara de cannabinoider och terpener som gör varje sort unik.",
        "Till skillnad från traditionella kvarnar med vassa tänder minskar Slims rundade tandgeometri och släta insida friktionen och avlagringarna, så att mer av blomman stannar där den hör hemma. Den tredelade designen utan såll håller dessutom trikomerna blandade med det malda materialet i stället för att skilja dem åt, och den kompakta formen passar perfekt i fickan, på resan och i vardagen.",
        "G Pen Slim är tillverkad av förstklassig anodiserad aluminium av flygplanskvalitet (6063) och ger mjuk rotation, lång hållbarhet och precisa resultat. Oberoende tester från Orange Photonics visade att den innovativa designen med mikrorundade tänder gav högst kvarvarande THC efter malning bland flera testade kvarntyper.",
        "G Pen Slim 3-Piece Grinder är utformad för att ge en jämn malning som är idealisk för förångning och passar perfekt ihop med vaporizers för torkade örter som G Pen Dash II och G Pen Dash+. Den hjälper dig att få ut det mesta av varje fyllning med en jämn och effektiv malning, optimerad för smakrik ånga.",
        "Smartare design. Bättre för varje vridning."
      ]
    },
    "Dash II": {
      "description": "Nästa steg för storsäljaren Dash — en fickstor vaporizer för torkade örter som uppgraderats på alla punkter, med snabbare uppvärmning, bättre luftflöde och förfinad temperaturkontroll.",
      "highlights": [
        "Fickstor vaporizer för torkade örter",
        "Uppvärmning på 30 sekunder",
        "Exakt temperaturkontroll",
        "OLED-display",
        "Uppgraderad keramisk kammare på 0,4 g (enklare att fylla)",
        "Fyllverktyg",
        "1 100 mAh batteri",
        "USB-C med genomströmningsladdning"
      ],
      "warranty": "6 månaders begränsad garanti, förlängd till 1 år vid registrering",
      "fullDescription": [
        "Nästa steg för vår storsäljande Dash-vaporizer — uppgraderad på alla punkter och nu för bara $49.95.",
        "G Pen Dash II är en fickstor vaporizer för torkade örter med exakt temperaturkontroll, OLED-display och en uppgraderad keramisk kammare på 0,4 g som ger bättre prestanda och är enklare att fylla. Dash II drivs av ett uppgraderat och mer långvarigt batteri på 1 100 mAh och ger mjuka, pålitliga sessioner med uppvärmning på 30 sekunder och USB-C med genomströmningsladdning.",
        "Mer kontroll. Enklare att fylla. Bättre prestanda."
      ],
      "box": {
        "contents": [
          "G Pen Dash II vape för torkade örter",
          "Inbyggt fyllverktyg",
          "Hylsa i silikon till munstycket",
          "*USB-C-laddkabel ingår inte"
        ]
      }
    },
    "510 Original — Retro": {
      "description": "Retro Collection-utgåvan av 510 Original kombinerar en mjuk, genomskinlig vintagefinish med samma andningsaktiverade, ultraportabla 510-prestanda, inspirerad av G Pens ursprungliga batteri från 2012.",
      "highlights": [
        "Genomskinlig retrofinish",
        "Andningsaktivering",
        "Tre förinställda spänningar (3,2 / 3,6 / 3,8 V)",
        "Förvärmningsläge 1,8 V i 10 sekunder",
        "400 mAh batteri",
        "USB-C med genomströmningsladdning",
        "Digital display",
        "24 × 21,1 × 56,7 mm"
      ],
      "warranty": "Begränsad garanti — se villkoren",
      "fullDescription": [
        "Original. Uppgraderad. Retro.",
        "Tillbaka där allt började — med en mjuk retrofinish.",
        "Retro Collection-versionen av G Pen 510 Original förenar nostalgisk genomskinlig design med en djup, iögonfallande genomskinlig färg. Den här uppgraderade utgåvan är inspirerad av vårt allra första 510-batteri från 2012 och behåller originalets enkelhet och pålitlighet, men är förfinad för moderna sessioner på språng.",
        "Som det minsta G Pen-batteriet någonsin, bara 24 × 21,1 × 56,7 mm, är 510 Original tillräckligt kompakt för att smidigt passa in i din dag. Andningsaktiveringen gör användningen enkel och knappfri, medan gränssnittet med en knapp ger dig kontroll över tre förinställda spänningar (3,2/3,6/3,8 V), ett förvärmningsläge på 1,8 V i 10 sekunder och den digitala displayen.",
        "Ett batteri på 400 mAh med USB-C och genomströmningsladdning håller enheten redo när du är det, även medan den är ansluten. Med sitt genomskinliga retroskal och uppgraderade 510-prestanda ger det här fickvänliga batteriet en smidig blandning av vintagestil och vardagsfunktion.",
        "Enkel. Pålitlig. Ikonisk. Originalet är tillbaka.",
        "*510-patron ingår inte",
        "**USB-C-laddare ingår inte"
      ],
      "box": {
        "contents": [
          "G Pen 510 Original-batteri",
          "*USB-C-laddare ingår inte",
          "*510-patron ingår inte"
        ]
      }
    },
    "Melt Hot Knife": {
      "description": "G Pen Melt är den minsta hot knife som finns på marknaden — ett kompakt dab-verktyg med keramisk spets för snabb, ren och kladdfri hantering av koncentrat.",
      "highlights": [
        "Den minsta hot knife som finns på marknaden",
        "Keramisk spets med snabb uppvärmning",
        "USB-C med genomströmningsladdning",
        "Snygg kropp i aluminium",
        "Ultrakompakt: 3,94 × 0,5 × 0,25 tum",
        "Kladdfri upplockning och dosering",
        "Passar i fickan och resväskan",
        "Fungerar med riggar, Micro+ och Hyer"
      ],
      "warranty": "Begränsad garanti — se villkoren",
      "fullDescription": [
        "Möt helt nya G Pen Melt Hot Knife — den minsta hot knife som finns på marknaden och det snabbaste och renaste sättet att förbereda dina koncentrat. Med bara 3,94 tum i höjd, 0,5 tum i bredd och 0,25 tum i djup är Melt ultrakompakt, ultraportabel och gjord för att försvinna ner i vilken ficka eller resväska som helst.",
        "Melt är utformad för kladdfri upplockning och jämn, kontrollerad dosering och gör kladdiga situationer smörenkla. Den keramiska spetsen värms upp direkt för perfekta överföringar varje gång. Inga kladdiga verktyg. Inga reclaim-katastrofer. Inget fipplande.",
        "Och nu med USB-C och genomströmningsladdning kan du fortsätta använda Melt även när den är ansluten — för det enda som är värre än ett urladdat dab-verktyg är att vänta på att det ska laddas.",
        "Med sin snygga aluminiumkropp, universella USB-C-port och G Pens karakteristiska siluett är Melt din nya vardagsfavorit — oavsett om du fyller en rigg, fyller på en G Pen Micro+ eller förbereder din G Pen Hyer.",
        "Liten storlek. Stor kraft. Inget kladd. Alltid redo."
      ],
      "box": {
        "contents": [
          "G Pen Melt Hot Knife",
          "Skyddslock för resan",
          "*USB-C-laddkabel ingår inte"
        ]
      }
    },
    "Connect": {
      "description": "En vaporizer för koncentrat utan brännare som förvandlar vilken vattenpipa med glas-mot-glas-anslutning som helst till den ultimata dab-riggen — ingen brännare eller exponerad nail behövs.",
      "highlights": [
        "Keramisk uppvärmning utan brännare — inga öppna lågor",
        "Uppvärmning på 5 sekunder för direkt, tät ånga",
        "Glasadaptrar på 10 mm, 14 mm och 18 mm ingår",
        "Patenterat omvänt luftflöde för jämn förångning",
        "Tre temperaturlägen + läge för förlängda bloss"
      ],
      "warranty": "1 års begränsad garanti",
      "fullDescription": [
        "Det bästa alternativet utan brännare till traditionella riggar. G Pen Connect är en revolutionerande vaporizer för koncentrat till vattenpipor som gör brännare och exponerad nail överflödiga. Den här snabbt uppvärmda vaporizern når optimal temperatur inom fem sekunder och ger ånga av högsta kvalitet helt utan krångel.",
        "Varför välja G Pen Connect?",
        "Teknik utan brännare: säker och bekväm keramisk uppvärmning – inga öppna lågor behövs",
        "Uppvärmning på 5 sekunder: snabb aktivering för direkt, tät ångproduktion",
        "Universell kompatibilitet: adaptrar på 10 mm, 14 mm och 18 mm ingår för alla vattenpipor med glas-mot-glas-anslutning",
        "Patenterat omvänt luftflöde: ger jämn och effektiv förångning av koncentrat",
        "Tre temperaturlägen: anpassa upplevelsen efter typ av koncentrat och smakpreferenser",
        "Läge för förlängda bloss: för längre och kraftfullare sessioner",
        "Kraftfullt batteri på 850 mAh: klarar flera sessioner i rad, med genomströmningsladdning",
        "Fjäderbelastad carb-ventil: direkt kontroll över luftflödet för enkel tömning av kammaren",
        "Förstklassig byggkvalitet: ett keramiskt värmeelement bevarar koncentratets smak och ger mjuka, kraftfulla bloss tillsammans med din favoritvattenpipa. Den magnetiska snäppanslutningen ger en snabb och enkel uppsättning varje gång.",
        "Bärbar och redo för resan: trots sin kraftfulla prestanda är G Pen Connect kompakt nog att ta med. Varje kit innehåller ett resefodral i hampa för enkel förvaring.",
        "Hela kitet innehåller: G Pen Connect-enhet, glasadaptrar på 10 mm/14 mm/18 mm, resefodral i hampa, USB-laddkabel och bruksanvisning.",
        "Redo att uppgradera från din traditionella rigg? Upptäck våra limiterade samarbeten Cookies x G Pen Connect och Dr. Greenthumb's x G Pen Connect.",
        "Patenterad teknik:",
        "US 10,004,264 B2",
        "US 10,021,909 B2",
        "US 10,188,145 B2",
        "US 10,321,721 B2",
        "US 10,327,470 B2",
        "*Den här produkten är inte avsedd att användas med tobak, e-vätskor som innehåller nikotin eller syntetiskt nikotin eller nikotinersättning.",
        "\"@context\": \"https://schema.org\","
      ]
    },
    "510 Original": {
      "description": "Det minsta och mest prisvärda G Pen-batteriet någonsin. 510 Original tolkar om Grencos allra första batteri från 2012 med modern, andningsaktiverad och ultraportabel prestanda för 510-patroner.",
      "highlights": [
        "Det minsta G Pen-batteriet någonsin",
        "Andningsaktivering — bara andas in och kör",
        "Tre förinställda spänningar (3,2 / 3,6 / 3,8 V)",
        "Förvärmningsläge 1,8 V i 10 sekunder",
        "400 mAh batteri",
        "USB-C med genomströmningsladdning",
        "Digital display",
        "24 × 21,1 × 56,7 mm"
      ],
      "warranty": "Begränsad garanti — se villkoren",
      "fullDescription": [
        "Tillbaka där allt började — med uppgraderingar.",
        "G Pen 510 Original sluter cirkeln: den tar inspiration från vårt allra första batteri från 2012 och arbetar om det för i dag. Det här är det minsta G Pen-batteriet som någonsin tillverkats (24 × 21,1 × 56,7 mm), ultraportabelt och enkelt att använda, utan att snåla på prestandan.",
        "Med andningsaktivering blir sessionerna enkla med 510 Original — bara andas in och kör. För extra kontroll låter gränssnittet med en knapp dig växla mellan tre förinställda spänningar (3,2/3,6/3,8 V), aktivera ett förvärmningsläge på 1,8 V i 10 sekunder och hålla koll på allt på den digitala displayen. Ett batteri på 400 mAh med USB-C och genomströmningsladdning gör att du kan ladda och använda det samtidigt, utan att sakta ner.",
        "För bara $12.95 är det också det mest prisvärda G Pen-batteriet någonsin — ett bevis på att förstklassig teknik inte behöver ha en förstklassig prislapp.",
        "Enkel. Pålitlig. Ikonisk. Originalet är tillbaka.",
        "*510-patron ingår inte",
        "** USB-C-laddare ingår inte"
      ],
      "box": {
        "contents": [
          "G Pen 510 Original-batteri",
          "*USB-C-laddare ingår inte",
          "*510-patron ingår inte"
        ]
      }
    },
    "Hydout": {
      "description": "G Pen Hydout är ett kompakt och diskret batteri för 510-patroner med dolt magnetiskt munstycksskydd, justerbar spänning och LED-display för mjuka, anpassningsbara och diskreta sessioner.",
      "highlights": [
        "Dolt magnetiskt munstycksskydd",
        "5 värmelägen (2,4 V – 3,8 V)",
        "Förvärmningsläge 1,8 V",
        "Uppladdningsbart batteri på 400 mAh",
        "Ljusstark LED-display",
        "USB-C-laddning",
        "Passar 510-patroner upp till 2 g",
        "90 × 37,5 × 18,5 mm"
      ],
      "warranty": "Begränsad garanti — se villkoren",
      "fullDescription": [
        "Letar du efter det bästa batteriet för 510-patroner för diskreta sessioner på språng? Möt G Pen Hydout 510 Cartridge Battery — ett kompakt, dolt vape-batteri för 510-patroner som levererar riktig prestanda utan att avslöja dig.",
        "Det här fickstora kraftpaketet har ett dolt magnetiskt munstycksskydd som håller patronen diskret och skyddad mot ljus (ja, det hjälper till att bevara oljans kvalitet), ett batteri på 400 mAh, justerbar spänning och en ljusstark LED-display för full kontroll över varje bloss. Hydout är kompatibel med de flesta 510-gängade patroner upp till 2 g och passar perfekt för mjuka, anpassningsbara sessioner — var du än är."
      ],
      "box": {
        "contents": [
          "1x G Pen Hydout 510 Cartridge Battery",
          "1x Magnetiskt munstycksskydd",
          "510-patron ingår inte",
          "USB-C-laddkabel ingår inte"
        ]
      }
    },
    "Hydout — Retro": {
      "description": "Retro-utgåvan av G Pen Hydout ger det diskreta batteriet för 510-patroner en genomskinlig finish inspirerad av 90-talet och lägger till andningsaktivering, tillsammans med variabel spänning och USB-C-laddning.",
      "highlights": [
        "Genomskinlig finish inspirerad av 90-talet",
        "Andningsaktivering",
        "Justerbar variabel spänning",
        "Förvärmningsläge 1,8 V",
        "Uppladdningsbart batteri på 400 mAh",
        "USB-C med genomströmningsladdning",
        "Passar de flesta 510-patroner",
        "Dolt magnetiskt munstycksskydd"
      ],
      "warranty": "Begränsad garanti — se villkoren",
      "fullDescription": [
        "G Pen Hydout Retro förenar en snygg, genomskinlig finish inspirerad av 90-talet med den förfinade tekniken bakom G Pens mest diskreta 510-batteri. Det magnetiska skalet omsluter patronen och skyddar den mot vardagligt slitage, samtidigt som utrustningen ser minimal och ren ut.",
        "Hydout är utformad för mångsidighet och har variabla spänningslägen för anpassad värmekontroll samt en förvärmningsfunktion på 1,8 V som värmer tjockare koncentrat före användning. Den här Retro-utgåvan lägger också till andningsaktivering, så att varje bloss blir helt knappfritt, och USB-C med genomströmningsladdning, som håller enheten redo att användas även medan den är ansluten.",
        "Med snabb USB-C-laddning, en tättslutande patronkammare som inte skramlar och kompatibilitet med de flesta 510-patroner levererar Hydout Retro modern prestanda under sitt nostalgiska genomskinliga skal.",
        "*510-patron ingår inte",
        "**USB-C-laddare ingår inte"
      ],
      "box": {
        "contents": [
          "G Pen Hydout-batteri med 510-gänga",
          "Magnetiskt munstycke",
          "*USB-C-laddkabel ingår inte",
          "*510-patron ingår inte"
        ]
      }
    },
    "Dash+": {
      "description": "G Pen Dash+ är en bärbar vaporizer för torkade örter av nästa generation, med hybriduppvärmning genom konvektion och konduktion i en titankammare som når förångningstemperatur på cirka 20 sekunder.",
      "highlights": [
        "Hybriduppvärmning: konvektion + konduktion",
        "Värmekammare i titan",
        "Värms upp på ~20 sekunder",
        "Uppladdningsbart litiumjonbatteri på 1 800 mAh",
        "USB-C-laddning",
        "LED-display i fullfärg",
        "Haptisk återkoppling, tre knappar",
        "Hölje i zinklegering"
      ],
      "warranty": "Begränsad garanti — se villkoren",
      "fullDescription": [
        "G Pen Dash+ är en kompakt vaporizer för torkade örter, utformad för snabba, smakrika och anpassningsbara sessioner. Med hybriduppvärmning genom konvektion och konduktion i en kammare helt i titan når den rätt temperatur på så lite som 20 sekunder och ger mjuk, jämn ånga.",
        "Två kanaler för ren inluft och ett magnetiskt munstycke med spiralformad keramisk luftväg hjälper till att maximera luftflödet och smaken. En LED-display i fullfärg, tre knappar, haptisk återkoppling och exakt temperaturjustering gör det enkelt att anpassa varje session.",
        "G Pen Dash+ har en tålig kropp i zinklegering och drivs av ett uppladdningsbart batteri på 1 800 mAh med USB-C-laddning. Den ger pålitlig prestanda i en snygg, bärbar design gjord för vardagsbruk.",
        "*Den här produkten är inte avsedd att användas med tobak, e-vätskor som innehåller nikotin eller syntetiskt nikotin eller nikotinersättning."
      ],
      "box": {
        "contents": [
          "Dash+ vaporizer",
          "Hylsa i silikon till Dash+-munstycket",
          "Fyllverktyg med nyckelring",
          "USB-C-laddkabel"
        ]
      }
    },
    "Hyer": {
      "description": "En bärbar e-nail för både koncentrat och torkade örter som passar ihop med alla vattenpipor med glas-mot-glas-anslutning, uppbyggd kring ett värmeelement helt i kvarts.",
      "highlights": [
        "Dubbel användning: koncentrat eller torkade örter",
        "Värmeelement helt i kvarts",
        "Passar alla pipor med glas-mot-glas-anslutning",
        "Bärbar e-nail-design"
      ],
      "warranty": "2 års begränsad garanti",
      "fullDescription": [
        "G Pen Hyer®️ är en intuitivt utformad, bärbar e-nail för dubbel användning som fungerar med koncentrat eller torkade örter och passar ihop med alla vattenpipor med glas-mot-glas-anslutning. G Pen Hyer är tillverkad av material av högsta kvalitet, inklusive ett värmeelement helt i kvarts, och har smart uppvärmningsteknik med konstant temperatur som ger smak och ångproduktion i toppklass.",
        "Med ett uppladdningsbart litiumjonbatteri på 6 000 mAh med snabb genomströmningsladdning via USB-C, i ett lätt och tåligt hölje av anodiserad aluminium, tänjer G Pen Hyer på gränserna för ren kraft och portabilitet. Med enkel hantering via tre knappar och ett gränssnitt med fem LED-lampor är G Pen Hyer enkel att ställa in och aktivera, samtidigt som den ger en kompromisslös upplevelse.",
        "En förstklassig flätad strömkabel med tåliga magnetiska snäppfästen ansluter batteriet till ett lätt tankhölje i anodiserad aluminium, där G Pen Hyer Quartz Tank för koncentrat eller Dry Herb Tank* enkelt skruvas i och ur. Tanken för koncentrat värms av ett specialstansat värmeelement i rostfritt stål och har en kammare helt i kvarts med en invändig up-stem som ger maximal yta för uppvärmning, effektivt luftflöde och optimal förångning av koncentrat.",
        "Den sista delen i den överlägsna prestandan hos G Pen Hyer Quartz Tank för koncentrat är tanklocket, som fästs magnetiskt och är tillverkat av anodiserad aluminium med inbyggd keramisk insats och dubbla lufthål för mjuk, roterande funktion. Det medföljande vaxverktyget i rostfritt stål kan också fästas ovanpå eller på sidan av tanklocket så att det alltid finns till hands.",
        "Varje G Pen Hyer-kit levereras med en 14 mm glasadapter (hane) (glasadaptrar på 10 mm och 18 mm säljs separat). Alla delar i kitet levereras prydligt packade i ett medföljande resefodral i hampa med nätficka för extra tillbehör.",
        "*G Pen Hyer Dry Herb Tank säljs separat.",
        "﻿*Hållbarhetsindexet för G Pen Hyer Quartz Tank är minst 200 uppvärmningscykler. Vi rekommenderar att du byter tank när detta antal har uppnåtts för optimal prestanda.",
        "*Den här produkten är inte avsedd att användas med tobak, e-vätskor som innehåller nikotin eller syntetiskt nikotin eller nikotinersättning."
      ]
    },
    "Roam": {
      "description": "En bärbar allt-i-ett-e-rig som ger vattenfiltrerad förångning av koncentrat på språng, med ett spillsäkert vattenrör i borosilikatglas och en tank helt i kvarts.",
      "highlights": [
        "Inbyggd vattenfiltrering i borosilikatglas",
        "Tank helt i kvarts",
        "Kraftfullt batteri på 1 300 mAh",
        "Fristående allt-i-ett-e-rig"
      ],
      "warranty": "1 års begränsad garanti",
      "fullDescription": [
        "Här är G Pen Roam, en bärbar allt-i-ett-vaporizer som är intuitivt utformad för vattenfiltrerad förångning av koncentrat på språng. Med ett spillsäkert, fristående vattenrör i borosilikatglas, en tank helt i kvarts och ett kraftfullt litiumjonbatteri på 1 300 mAh värms G Pen Roam upp till rätt temperatur inom några sekunder efter aktivering och ger mjuka, smakrika bloss med lätthet.",
        "G Pen Roam anpassar sig efter varje användares smak- och värmepreferenser med digital temperaturkontroll och LED-display från 400° till 800°+F (204° till 427°+C), plus haptisk återkoppling som visar när enheten är redo att användas. Roam är utformad med stort fokus på diskret portabilitet och är innesluten i ett lätt men tåligt skal av aluminiumlegering som helt skyddar kvartstanken och vattenröret i glas. Genomströmningstekniken gör att enheten kan användas medan den är ansluten, och alla delar som kommer i kontakt med ångans luftväg kan enkelt tas isär och rengöras.",
        "Varje komplett G Pen Roam-kit levereras som standard i ett resefodral i hampa, med plats för två burkar koncentrat och en ficka för tillbehör, bland annat en micro-USB-laddkabel och ett G Pen-verktyg för att fylla på koncentrat.",
        "*Den här produkten är inte avsedd att användas med tobak, e-vätskor som innehåller nikotin eller syntetiskt nikotin eller nikotinersättning."
      ]
    },
    "Dash": {
      "description": "Den ursprungliga G Pen Dash — en kompakt och lätt vaporizer för torkade örter, utformad för enkla sessioner på språng.",
      "highlights": [
        "Kompakt vaporizer för torkade örter",
        "Enkel hantering med en knapp",
        "Fickvänlig design"
      ],
      "warranty": "2 års begränsad garanti"
    },
    "Elite II": {
      "description": "En förstklassig vaporizer för torkade örter med full konvektion som ger ren smak och tät ånga med exakt temperaturkontroll.",
      "highlights": [
        "Uppvärmning med full konvektion",
        "Exakt temperaturkontroll",
        "Keramisk kammare med stor kapacitet"
      ],
      "warranty": "2 års begränsad garanti"
    }
  }
};
