/* =============================================================================
   DANISH (da) LANGUAGE PACK
   -----------------------------------------------------------------------------
   Loaded on demand — only when a visitor selects this language, so English
   visitors download none of it. Editing this file is the ONLY thing needed to
   revise the Danish; no code changes.

     ui        UI chrome, keyed by the ENGLISH source string. A missing key
               simply falls back to English. "<key>|one" / "<key>|few" are
               count forms picked by Intl.PluralRules (see trn() in app.js).
     products  Product prose: description / highlights / warranty /
               fullDescription / box / specs. Array lengths must match the
               English, or that field stays in English.
   VOICE  Informal "du" (standard in Danish business copy). "Assets" = materialer,
          files = filer, POP display = POP-display, MSRP = Vejl. pris. Quotes »…«.
   RULES
   - Product names, brand names, SKUs, UPCs, filenames, units and prices are
     never translated.
   - Keep inline <strong> tags balanced, and keep {placeholder} tokens intact.
   ========================================================================== */
window.PORTAL_I18N = window.PORTAL_I18N || {};
window.PORTAL_I18N.da = {
  "ui": {
    "N/A": "Ikke oplyst",
    "Back to home": "Tilbage til forsiden",
    "Select language": "Vælg sprog",
    "Clear search": "Ryd søgning",
    "Previous": "Forrige",
    "Scroll to top": "Til toppen",
    "Grid view": "Gittervisning",
    "List view": "Listevisning",
    "Layout": "Layout",
    "Sort products": "Sortér produkter",
    "Select {name}": "Vælg {name}",
    "Play {name}": "Afspil {name}",
    "Enlarge {name}": "Forstør {name}",
    "Copy link to {name}": "Kopiér link til {name}",
    "Download {name}": "Download {name}",
    "Watch {name}": "Se {name}",
    "Watch on YouTube": "Se på YouTube",
    "Share on YouTube": "Del på YouTube",
    "Close": "Luk",
    "Video player": "Videoafspiller",
    "Asset preview": "Forhåndsvisning",
    "Zoom in": "Zoom ind",
    "Fit to screen": "Tilpas til skærmen",
    "Viewer unavailable — downloading instead": "Fremviseren er ikke tilgængelig — downloader i stedet",
    "Couldn’t open the catalog — downloading instead": "Kataloget kunne ikke åbnes — downloader i stedet",
    "Filter results by type": "Filtrér resultater efter type",
    "asset": "materiale",
    "video": "video",
    "Photos": "Billeder",
    "Lifestyle": "Livsstil",
    "Videos": "Videoer",
    "In-store": "I butikken",
    "View": "Se",
    "{n} colors": "{n} farver",
    "Copied link to {folder}": "Link til {folder} er kopieret",
    "Concentrate Accessories": "Tilbehør til koncentrater",
    "Dry Herb Accessories": "Tilbehør til tørrede urter",
    "Dry-herb devices & accessories": "Enheder og tilbehør til tørrede urter",
    "Grinder": "Kværn",
    "This folder has {n} files. Downloading them one at a time can take several minutes and your browser may block it. Open the full Dropbox download instead?": "Denne mappe indeholder {n} filer. Det kan tage flere minutter at downloade dem én ad gangen, og din browser kan blokere det. Vil du åbne hele downloaden i Dropbox i stedet?",
    "{n} downloads starting — allow multiple if your browser asks, or use “Download all”.": "{n} downloads starter — tillad flere, hvis browseren spørger, eller brug »Download alt«.",
    "Add your store name, mailing address and email so we can ship your order": "Angiv butikkens navn, postadresse og e-mail, så vi kan sende din bestilling",
    "Enter a valid email address": "Angiv en gyldig e-mailadresse",
    "Add your name and email so we can reply": "Angiv dit navn og din e-mail, så vi kan svare",
    "Click a video to watch it, and download it or open it on YouTube where available.": "Klik på en video for at se den, og download den eller åbn den på YouTube, hvor det er muligt.",
    "document": "dokument",
    "documents": "dokumenter",
    "item": "vare",
    "items": "varer",
    "These assets are provided for approved partner, press, and retail use. Please don't alter logos or product imagery. Need something specific or a different format? Use “Request an asset.”": "Materialerne stilles til rådighed for godkendte partnere, presse og forhandlere. Lad være med at ændre logoer eller produktbilleder. Har du brug for noget bestemt eller et andet format? Brug »Anmod om materiale«.",
    "Brand Documents": "Branddokumenter",
    "Dry Herb Vaporizer": "Vaporizer til tørrede urter",
    "510 Cartridge Battery": "Batteri til 510-patroner",
    "Electric Hot Knife": "Elektrisk hot knife",
    "Concentrate Vaporizer": "Vaporizer til koncentrater",
    "Take the course on G Pen Training — watch the videos, learn the product and pass a short quiz to get certified.": "Tag kurset på G Pen Training — se videoerne, lær produktet at kende, og bestå en kort quiz for at blive certificeret.",
    "Start training": "Start uddannelsen",
    "Opens G Pen Training in a new tab": "Åbner G Pen Training i en ny fane",
    "How to Use: G Pen Dash II": "Sådan bruger du G Pen Dash II",
    "How to Use: G Pen 510 Original": "Sådan bruger du G Pen 510 Original",
    "How to Use: G Pen Hydout": "Sådan bruger du G Pen Hydout",
    "How to Use: G Pen Dash+": "Sådan bruger du G Pen Dash+",
    "How to Use: G Pen Micro+": "Sådan bruger du G Pen Micro+",
    "How to Clean: Dash II": "Sådan rengør du Dash II",
    "How to Clean: G Pen 510 Original": "Sådan rengør du G Pen 510 Original",
    "How to Clean: G Pen Hydout": "Sådan rengør du G Pen Hydout",
    "How to Clean: G Pen Dash+": "Sådan rengør du G Pen Dash+",
    "How to Clean: G Pen Micro+": "Sådan rengør du G Pen Micro+",
    "How to Use: G Pen Melt": "Sådan bruger du G Pen Melt",
    "How to Clean: G Pen Melt": "Sådan rengør du G Pen Melt",
    "G Pen Connect + Your Favorite Glass": "G Pen Connect + dit yndlingsglas",
    "Connect to Favorite Glass": "Tilslut til dit yndlingsglas",
    "How To Use Your G Pen Elite II": "Sådan bruger du din G Pen Elite II",
    "Using the Elite II": "Brug af Elite II",
    "Products we no longer sell — assets kept here for partners who still need them.": "Produkter, vi ikke længere sælger — materialerne ligger her stadig til partnere, der har brug for dem.",
    "Placeholder guide — the official {brand} brand guide will replace this. Colors, type, and logos below reflect current brand usage.": "Midlertidig guide — den officielle brandguide for {brand} erstatter den. Farver, skrifttyper og logoer nedenfor viser, hvordan brandet bruges i dag.",
    "No assets match your filters.": "Ingen materialer matcher dine filtre.",
    "Request one →": "Anmod om det →",
    "{n} more coming from Dropbox": "{n} mere på vej fra Dropbox",
    "With vape holder": "Med vapeholder",
    "2.5\" L × 2.5\" W · 25 notes per pad": "2.5\" L × 2.5\" W · 25 sedler pr. blok",
    "3ft Circular": "Rund, 3 ft",
    "How to Use: G Pen Micro II": "Sådan bruger du G Pen Micro II",
    "How to Clean: G Pen Micro II": "Sådan rengør du G Pen Micro II",
    "How to Use: G Pen Micro II Sidecar": "Sådan bruger du G Pen Micro II Sidecar",
    "How to Use: G Pen Micro II Rig Adapter": "Sådan bruger du G Pen Micro II Rig Adapter",
    "Become a {name} Product Specialist": "Bliv produktspecialist i {name}",
    "Your Name": "Dit navn",
    "Full name": "Fulde navn",
    "Product Name": "Produktnavn",
    "Product SKU": "Produkt-SKU",
    "Product UPC": "Produkt-UPC",
    "Retail POP Display SKU": "SKU for POP-display",
    "Retail POP Display UPC": "UPC for POP-display",
    "Product Dimensions": "Produktmål",
    "Unit Weight": "Vægt pr. enhed",
    "Ships In Retail POP Display": "Leveres i POP-display",
    "Units Per POP Display": "Enheder pr. POP-display",
    "Units Per Master Case": "Enheder pr. yderkarton",
    "Case Weight": "Kartonvægt",
    "Case Dimensions": "Kartonmål",
    "HTS (Harmonized Tariff Schedule) Code": "HTS-kode (Harmonized Tariff Schedule)",
    "Dry Herb Vape": "Vape til tørrede urter",
    "510 Battery": "510-batteri",
    "Concentrate Hot Knife": "Hot knife til koncentrater",
    "Dry Herb": "Tørrede urter",
    "Accessory": "Tilbehør",
    "E-Nail": "E-Nail",
    "E-Rig": "E-Rig",
    "Brand": "Brand",
    "Product photos": "Produktbilleder",
    "Lifestyle Photos": "Livsstilsbilleder",
    "Social Videos": "Videoer til sociale medier",
    "TV Screen Videos": "Videoer til tv-skærme",
    "Documents": "Dokumenter",
    "Product Photos": "Produktbilleder",
    "Web Banners": "Webbannere",
    "E-Comm Render Photos": "Renderinger til webshop",
    "Misc": "Diverse",
    "Our customer service team has been with us since day one — with over 15 years of hands-on experience with our devices. They know these products inside and out, and they’d be happy to walk you through anything or go over any additional questions you might have. We love to chat all things cannabis and vaporizers with you.": "Vores kundeserviceteam har været med os fra første dag — med over 15 års praktisk erfaring med vores enheder. De kender produkterne ud og ind og hjælper dig gerne trin for trin eller svarer på andre spørgsmål, du måtte have. Vi snakker gerne om alt, hvad der har med cannabis og vaporizers at gøre.",
    "(optional)": "(valgfrit)",
    "123 Main St, City, State ZIP": "Hovedgaden 1, 1234 By",
    "Add each store you'd like listed on our official locator, then send your request. Have more than one location? Use <strong>Add another store</strong> to include them all.": "Tilføj hver butik, du vil have med på vores officielle butiksoversigt, og send derefter din anmodning. Har du mere end én butik? Brug <strong>Tilføj endnu en butik</strong> for at få dem alle med.",
    "Additional Products": "Flere produkter",
    "Address": "Adresse",
    "All": "Alle",
    "Assets": "Materialer",
    "Browse all {n} logo files →": "Se alle {n} logofiler →",
    "Carry G Pen? Request to be added to our official store locator so customers can find your shop.": "Sælger du G Pen? Anmod om at komme med på vores officielle butiksoversigt, så kunderne kan finde din butik.",
    "Clear": "Ryd",
    "Click a preview to enlarge it.": "Klik på en forhåndsvisning for at forstørre den.",
    "Click preview to enlarge": "Klik for at forstørre",
    "Close viewer": "Luk fremviseren",
    "Contact us": "Kontakt os",
    "Decrease": "Færre",
    "Downloaded": "Downloadet:",
    "Downloading {n} files…": "Downloader {n} filer…",
    "Email Address": "E-mailadresse",
    "Enlarge": "Forstør",
    "Fields shown as <strong>—</strong> are still to be confirmed.": "Felter vist som <strong>—</strong> er endnu ikke bekræftet.",
    "Formats": "Formater",
    "Increase": "Flere",
    "Loading catalog…": "Indlæser kataloget…",
    "Mailing Address": "Postadresse",
    "New": "Nyhed",
    "Next": "Næste",
    "No": "Nej",
    "No matches for": "Ingen resultater for",
    "Official {brand} logos — black, white &amp; various versions. For approved partner, press &amp; retail use; please don’t alter, recolor, or distort the marks.": "Officielle logoer for {brand} — sort, hvid og forskellige versioner. Til godkendte partnere, presse og forhandlere; lad være med at ændre, omfarve eller forvrænge mærkerne.",
    "Open": "Åbn",
    "Order Marketing Materials": "Bestil markedsføringsmaterialer",
    "Order Materials": "Bestil materialer",
    "Orderable in-store marketing materials will be listed here soon. In the meantime, reach out and we’ll let you know what’s available.": "Markedsføringsmaterialer til butikken, som kan bestilles, vises her snart. Kontakt os i mellemtiden, så fortæller vi, hvad der er tilgængeligt.",
    "Phone": "Telefon",
    "Popular searches": "Populære søgninger",
    "Preparing {n} files as a .zip…": "Forbereder {n} filer som en .zip…",
    "Press <kbd>/</kbd> to search from anywhere · <kbd>Enter</kbd> opens the top result": "Tryk på <kbd>/</kbd> for at søge hvor som helst · <kbd>Enter</kbd> åbner det øverste resultat",
    "Quantity for": "Antal for",
    "Remove this store": "Fjern denne butik",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} will show here as they’re added — order what you need for your shop.": "Displays, plakater, hyldeforkanter og andre butiksmaterialer for {brand} vises her, efterhånden som de tilføjes — bestil det, din butik har brug for.",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} — order what you need for your shop.": "Displays, plakater, hyldeforkanter og andre butiksmaterialer for {brand} — bestil det, din butik har brug for.",
    "Retailers": "Forhandlere",
    "Select all": "Vælg alle",
    "Set a quantity for each item, add your store details, then send your request.": "Angiv antal for hver vare, udfyld butikkens oplysninger, og send derefter din anmodning.",
    "Showing the top {n} of {total} files — add a word to narrow it down.": "Viser de øverste {n} af {total} filer — tilføj et ord for at indsnævre søgningen.",
    "Store": "Butik",
    "Store Name": "Butikkens navn",
    "Store name": "Butikkens navn",
    "Street, City, State, ZIP": "Vej, postnummer, by",
    "Submit Request": "Send anmodning",
    "Try a product name (Dash), a file type (PNG, MP4), a category (lifestyle, packaging), or “catalog”.": "Prøv et produktnavn (Dash), en filtype (PNG, MP4), en kategori (livsstil, emballage) eller »katalog«.",
    "View all →": "Se alle →",
    "Website": "Websted",
    "Yes": "Ja",
    "Your contact info": "Dine kontaktoplysninger",
    "Your details": "Dine oplysninger",
    "You’ll confirm and send from your email app.": "Du bekræfter og sender fra din mailapp.",
    "assets": "materialer",
    "available": "tilgængelige",
    "colorways": "farvevarianter",
    "files": "filer",
    "file": "fil",
    "logo files": "logofiler",
    "selected": "valgt",
    "stores": "butikker",
    "material": "materiale",
    "materials": "materialer",
    "{n} older {brand} products we no longer sell — assets kept for partners who still need them.": "{n} ældre {brand}-produkter, som vi ikke længere sælger — materialerne bevares til partnere, der stadig har brug for dem.",
    "Click to watch": "Klik for at se",
    "Description copied": "Beskrivelsen er kopieret",
    "Copy": "Kopiér",
    "product": "produkt",
    "products": "produkter",
    "result": "resultat",
    "results": "resultater",
    "510 Batteries": "510-batterier",
    "510-thread cartridge batteries": "Batterier til patroner med 510-gevind",
    "Dry Herb Vaporizers": "Vaporizere til tørrede urter",
    "Portable dry-herb devices": "Bærbare enheder til tørrede urter",
    "Concentrate": "Koncentrat",
    "Concentrate tools & accessories": "Værktøj og tilbehør til koncentrater",
    "More products": "Flere produkter",
    "Catalogs & Brand Documents": "Kataloger og branddokumenter",
    "Logos & assets": "Logoer og materialer",
    "Official Brand & Product Assets": "Officielle brand- og produktmaterialer",
    "Wholesale & press asset requests welcome. Assets update as new products launch.": "Anmodninger om materialer fra grossister og presse er velkomne. Materialerne opdateres, når nye produkter lanceres.",
    "Catalogs": "Kataloger",
    "Logos &amp; assets": "Logoer og materialer",
    "Request an asset": "Anmod om materiale",
    "Request an asset →": "Anmod om materiale →",
    "Official Brand &amp; Product Assets": "Officielle brand- og produktmaterialer",
    "Everything you need, in one place.": "Alt, hvad du har brug for, samlet ét sted.",
    "Search products, files, formats…": "Søg efter produkter, filer, formater…",
    "Search all assets": "Søg i alle materialer",
    "Featured": "Udvalgte",
    "Logos and Brand Assets": "Logoer og brandmaterialer",
    "Catalogs &amp; Brand Documents": "Kataloger og branddokumenter",
    "Questions about a product?": "Spørgsmål om et produkt?",
    "Talk to our team.": "Tal med vores team.",
    "Mon–Fri · 10:00 AM – 6:00 PM EST": "Man.–fre. · 10.00–18.00 EST",
    "Wholesale &amp; press asset requests welcome. Assets update as new products launch.": "Anmodninger om materialer fra grossister og presse er velkomne. Materialerne opdateres, når nye produkter lanceres.",
    "Browse G Pen by category": "Gennemse G Pen efter kategori",
    "Search results": "Søgeresultater",
    "Follow G Pen On Socials": "Følg G Pen på sociale medier",
    "Official accounts": "Officielle konti",
    " Copy link": " Kopiér link",
    " Download": " Download",
    "Add another store": "Tilføj endnu en butik",
    "Add at least one store's details first": "Udfyld først oplysningerne for mindst én butik",
    "At least one store is required": "Der skal være mindst én butik",
    "Back to library": "Tilbage til biblioteket",
    "Brand &amp; Style Guide": "Brand- og stilguide",
    "Catalog not found": "Kataloget blev ikke fundet",
    "Collection Colorways": "Kollektionens farvevarianter",
    "Colors": "Farver",
    "Connect storage to enable downloads": "Tilslut lager for at aktivere downloads",
    "Copy failed": "Kopiering mislykkedes",
    "Copy folder link": "Kopiér mappelink",
    "Copy link": "Kopiér link",
    "Couldn’t build the zip": "Zip-filen kunne ikke oprettes",
    "Couldn’t load the zipper — try again": "Zip-værktøjet kunne ikke indlæses — prøv igen",
    "Couldn’t render that page": "Siden kunne ikke vises",
    "Document coming soon": "Dokumentet kommer snart",
    "Download": "Download",
    "Download PDF": "Download PDF",
    "Download all": "Download alt",
    "Download all logos": "Download alle logoer",
    "Photo / Video Assets": "Foto- og videomaterialer",
    "Sales Assets": "Salgsmaterialer",
    "Other": "Andet",
    "User Generated Content": "Brugergenereret indhold",
    "One Sheet": "Produktark",
    "Region": "Region",
    "Download coming soon": "Download kommer snart",
    "Download folder": "Download mappe",
    "Download logo files": "Download logofiler",
    "Download logos": "Download logoer",
    "Download selected": "Download valgte",
    "Download video": "Download video",
    "Downloadable file coming soon — Dropbox link on the way": "Fil til download kommer snart — Dropbox-link er på vej",
    "Get your store on our Store Locator": "Få din butik med på vores butiksoversigt",
    "Highlights": "Højdepunkter",
    "How to use videos": "Instruktionsvideoer",
    "In-Store Marketing Materials": "Markedsføringsmaterialer til butikken",
    "Logos": "Logoer",
    "Matching files &amp; assets": "Matchende filer og materialer",
    "No link yet": "Intet link endnu",
    "No shareable link for this folder yet": "Der er endnu intet delbart link til denne mappe",
    "Official Product Description": "Officiel produktbeskrivelse",
    "Opening Dropbox download…": "Åbner download fra Dropbox…",
    "Order materials": "Bestil materialer",
    "Packaging": "Emballage",
    "Prev": "Forr.",
    "This video can't be played in the browser.": "Videoen kan ikke afspilles i browseren.",
    "Use Download below to save it": "Brug Download nedenfor for at gemme den",
    "Technical specifications": "Tekniske specifikationer",
    "Product FAQs": "Ofte stillede spørgsmål om produktet",
    "Product Manual": "Brugsanvisning",
    "Remove": "Fjern",
    "Request materials": "Anmod om materialer",
    "Request this asset": "Anmod om dette materiale",
    "Request to be listed": "Anmod om at komme med",
    "SKU details": "SKU-oplysninger",
    "Select at least one asset first": "Vælg mindst ét materiale først",
    "Set a quantity for at least one item first": "Angiv først antal for mindst én vare",
    "Share": "Del",
    "Store Locator Request": "Anmodning til butiksoversigten",
    "Typography": "Typografi",
    "Use “Download all” to get these from Dropbox": "Brug »Download alt« for at hente dem fra Dropbox",
    "View on site": "Se på webstedet",
    "Viewer is taking too long — downloading instead": "Fremviseren er for længe om det — downloader i stedet",
    "Watch": "Se",
    "What’s In the Box?": "Hvad er der i æsken?",
    "YouTube": "YouTube",
    "Assets are coming soon — check back shortly.": "Materialerne kommer snart — kig forbi igen om lidt.",
    "B2B Resources": "B2B-ressourcer",
    "Blue": "Blå",
    "Body": "Brødtekst",
    "Catalog": "Katalog",
    "Catalog link copied": "Katalogets link er kopieret",
    "Clear all": "Ryd alle",
    "Display / Headlines": "Display / overskrifter",
    "Green": "Grøn",
    "How-to video": "Instruktionsvideo",
    "In-store marketing": "Markedsføring i butikken",
    "Link copied": "Linket er kopieret",
    "MSRP": "Vejl. pris",
    "Master carton": "Yderkarton",
    "Open in": "Åbn i",
    "Pink": "Pink",
    "Purple": "Lilla",
    "Red": "Rød",
    "Regional Catalogs": "Regionale kataloger",
    "Retail POP display": "POP-display til butikken",
    "Share view": "Del visning",
    "Ships in POP display": "Leveres i POP-display",
    "Ships in a retail-ready POP display — one retail box shown per colorway. See SKU details for inner-pack &amp; master-carton quantities.": "Leveres i et butiksklart POP-display — der vises én detailæske pr. farvevariant. Se SKU-oplysningerne for antal pr. inderpakning og yderkarton.",
    "Ships in a retail-ready POP display — see SKU details for inner-pack &amp; master-carton quantities.": "Leveres i et butiksklart POP-display — se SKU-oplysningerne for antal pr. inderpakning og yderkarton.",
    "Ships in single retail boxes — no POP display. See SKU details for master-carton quantities.": "Leveres i enkelte detailæsker — uden POP-display. Se SKU-oplysningerne for antal pr. yderkarton.",
    "Single Retail Packaging": "Enkelt detailemballage",
    "View link copied": "Linket til visningen er kopieret",
    "View {brand} assets": "Se materialer for {brand}",
    "Warranty": "Garanti",
    "What’s in the box": "Hvad er der i æsken",
    "tap to copy": "tryk for at kopiere",
    "updated": "opdateret",
    "videos": "videoer",
    "{brand} specific in-store materials.": "Butiksmaterialer specifikt til {brand}.",
    "{n}-Pack Retail POP Display": "POP-display med {n} stk.",
    "SKU": "SKU",
    "Order": "Bestil",
    "Order marketing materials": "Bestil markedsføringsmaterialer",
    "Printed in-store materials (posters, shelf talkers, displays) for this product will appear here as they’re added.": "Trykte butiksmaterialer (plakater, hyldeforkanter, displays) til dette produkt vises her, efterhånden som de tilføjes.",
    "Training": "Uddannelse",
    "Additional G Pen Products": "Flere G Pen-produkter",
    "assets|one": "materiale",
    "files|one": "fil",
    "logo files|one": "logofil",
    "available|one": "tilgængeligt",
    "stores|one": "butik",
    "colorways|one": "farvevariant"
  },
  "products": {
    "Micro II": {
      "description": "En kompakt vaporizer til koncentrater med tre varmeindstillinger, justerbart luftflow, digitalt display, keramisk opvarmning og op til 120 sessioner pr. opladning.",
      "highlights": [
        "Tre varmeindstillinger — LOW ~295°F, MEDIUM ~340°F, HIGH ~395°F",
        "Opvarmning på 5 sekunder",
        "Session Mode (20 sek.) + manuel opvarmning (op til 25 sek.)",
        "Justerbart luftflow — fra åbent til begrænset",
        "0,8 Ω keramisk forstøver",
        "Digitalt display — temperatur, opvarmningsstatus, batteri",
        "Haptisk feedback, når temperaturen er nået",
        "1.250 mAh batteri — op til 120 sessioner pr. opladning",
        "USB-C-hurtigopladning — under 60 minutter",
        "Pass-through-opladning",
        "Automatisk slukning efter 10 minutter",
        "Krop i anodiseret aluminium",
        "Kompatibel med Sidecar og 14 mm Rig Adapter (sælges separat)",
        "Enkel betjening med én knap"
      ],
      "fullDescription": [
        "G Pen Micro II nytænker den ikoniske Micro-vaporizer til koncentrater med mere kraft, præcision og kontrol i et kompakt design, der passer i lommen.",
        "Micro II drives af et genopladeligt batteri på 1.250 mAh og giver op til 120 sessioner pr. opladning med USB-C-hurtigopladning på under 60 minutter. Tre optimerede temperaturindstillinger — LOW på ca. 295°F, MEDIUM på 340°F og HIGH på 395°F — lader dig indstille sessionen til blød smag, afbalanceret ydelse eller kraftigere dampproduktion.",
        "En førsteklasses keramisk forstøver på 0,8 Ω giver ensartet ydelse med koncentrater, mens det justerbare luftflow giver dig endnu mere kontrol over hvert sug. Vælg mellem en 20 sekunders cyklus i Session Mode med bekvem automatisk opvarmning eller manuel opvarmning i op til 25 sekunder med direkte kontrol.",
        "Det indbyggede digitale display viser batteri, temperatur og opvarmningsstatus med et hurtigt blik, og haptisk feedback fortæller dig, når Micro II har nået temperaturen. En robust krop i anodiseret aluminium, enkel betjening med én knap, pass-through-opladning og automatisk slukning efter 10 minutter gør hverdagsbrugen nem.",
        "Brug det medfølgende mundstykke i silikone til en kompakt løsning, eller udvid oplevelsen med G Pen Micro II Sidecar og 14 mm Rig Adapter, der sælges separat, til vandfiltrerede sessioner derhjemme eller på farten.",
        "Mere end ti år efter at den oprindelige microG var med til at definere bærbar fordampning af koncentrater, tager Micro II Micro-oplevelsen ind i en ny generation — alt sammen for $49.95."
      ],
      "box": {
        "contents": [
          "G Pen Micro II-batteri",
          "G Pen Micro II keramisk tank",
          "Mundstykke i silikone",
          "*Micro II Sidecar sælges separat",
          "*Micro II 14 mm Rig Adapter sælges separat"
        ]
      },
      "specs": [
        [
          "Batteri",
          "1.250 mAh, genopladeligt"
        ],
        [
          "Opladning",
          "USB-C-hurtigopladning, under 60 minutter"
        ],
        [
          "Pass-through-opladning",
          "Ja"
        ],
        [
          "Display",
          "Digitalt sort-hvidt display"
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
          "Temperaturtolerance",
          "±15–30°F"
        ],
        [
          "Opvarmningstid",
          "5 sekunder"
        ],
        [
          "Session Mode",
          "20 sekunders opvarmningscyklus (inkl. opvarmning)"
        ],
        [
          "Manuel opvarmning",
          "Op til 25 sekunder (inkl. opvarmning)"
        ],
        [
          "Forstøver",
          "0,8 Ω keramisk"
        ],
        [
          "Luftflow",
          "Justerbart"
        ],
        [
          "Haptisk feedback",
          "Ja"
        ],
        [
          "Batterilevetid",
          "Op til 120 sessioner pr. opladning"
        ],
        [
          "Automatisk slukning",
          "10 minutter"
        ],
        [
          "Krop",
          "Anodiseret aluminium"
        ],
        [
          "Mundstykke",
          "Silikone"
        ],
        [
          "Enhedens mål",
          "98,6 × 24 × 32 mm"
        ],
        [
          "Enhedens vægt",
          "86 g"
        ]
      ]
    },
    "Slim 3-Piece Grinder": {
      "description": "En slank tredelt kværn uden si, med mikroafrundede tænder, der skånsomt deler blomsten op til en ensartet formaling — skabt til at passe sammen med Dash II og Dash+.",
      "highlights": [
        "Mikroafrundede tænder til en skånsom, jævn formaling",
        "Hjælper med at bevare cannabinoider og terpener",
        "Tredelt design uden si holder trikomerne i materialet",
        "Glat inderside mindsker friktion og belægninger",
        "Anodiseret aluminium i flykvalitet (6063)",
        "Højeste tilbageværende THC efter formaling i test fra Orange Photonics",
        "Magnetisk låg holder indholdet på plads",
        "Kompakt form til lommen og rejsen",
        "Passer sammen med G Pen Dash II og Dash+"
      ],
      "fullDescription": [
        "Enhver god session starter med en bedre formaling. G Pen Slim 3-Piece Grinder har innovative mikroafrundede tænder, der skånsomt deler blomsten op til en ensartet formaling og samtidig hjælper med at bevare de cannabinoider og terpener, der gør hver sort unik.",
        "I modsætning til traditionelle kværne med skarpe tænder mindsker Slims afrundede tandgeometri og glatte inderside friktion og belægninger, så mere af blomsten bliver, hvor den hører hjemme. Det tredelte design uden si holder desuden trikomerne blandet med det formalede materiale i stedet for at skille dem fra, og den kompakte form er perfekt til lommen, rejsen og hverdagen.",
        "G Pen Slim er fremstillet af førsteklasses anodiseret aluminium i flykvalitet (6063) og giver jævn rotation, lang holdbarhed og præcis ydelse. Uafhængige test fra Orange Photonics viste, at det innovative design med mikroafrundede tænder gav den højeste tilbageværende THC efter formaling blandt flere testede kværntyper.",
        "G Pen Slim 3-Piece Grinder er designet til at give en ensartet formaling, der er ideel til fordampning, og passer perfekt sammen med vaporizerne til tørrede urter G Pen Dash II og G Pen Dash+. Den hjælper dig med at få mest muligt ud af hver fyldning med en jævn og effektiv formaling, optimeret til smagfuld damp.",
        "Smartere design. Bedre for hver drejning."
      ]
    },
    "Dash II": {
      "description": "Det næste skridt for bestselleren Dash — en vaporizer til tørrede urter i lommeformat, opgraderet på alle punkter med hurtigere opvarmning, bedre luftflow og forfinet temperaturkontrol.",
      "highlights": [
        "Vaporizer til tørrede urter i lommeformat",
        "Opvarmning på 30 sekunder",
        "Præcis temperaturkontrol",
        "OLED-display",
        "Opgraderet keramisk kammer på 0,4 g (nemmere at fylde)",
        "Fyldeværktøj",
        "1.100 mAh batteri",
        "USB-C med pass-through-opladning"
      ],
      "warranty": "6 måneders begrænset garanti, forlænget til 1 år ved registrering",
      "fullDescription": [
        "Det næste skridt for vores bestseller, Dash-vaporizeren — opgraderet på alle punkter og nu til kun $49.95.",
        "G Pen Dash II er en vaporizer til tørrede urter i lommeformat med præcis temperaturkontrol, OLED-display og et opgraderet keramisk kammer på 0,4 g, der giver bedre ydelse og er nemmere at fylde. Dash II drives af et opgraderet batteri på 1.100 mAh, der holder længere, og giver bløde, pålidelige sessioner med opvarmning på 30 sekunder og USB-C med pass-through-opladning.",
        "Mere kontrol. Nemmere at fylde. Bedre ydelse."
      ],
      "box": {
        "contents": [
          "G Pen Dash II vape til tørrede urter",
          "Indbygget fyldeværktøj",
          "Silikonemuffe til mundstykket",
          "*USB-C-opladerkabel medfølger ikke"
        ]
      }
    },
    "510 Original — Retro": {
      "description": "Retro Collection-udgaven af 510 Original kombinerer en blød, gennemsigtig vintagefinish med den samme åndedrætsaktiverede, ultrabærbare 510-ydelse, inspireret af G Pens oprindelige batteri fra 2012.",
      "highlights": [
        "Gennemsigtig retrofinish",
        "Åndedrætsaktivering",
        "Tre forudindstillede spændinger (3,2 / 3,6 / 3,8 V)",
        "Forvarmningstilstand på 1,8 V i 10 sekunder",
        "400 mAh batteri",
        "USB-C med pass-through-opladning",
        "Digitalt display",
        "24 × 21,1 × 56,7 mm"
      ],
      "warranty": "Begrænset garanti — se vilkårene",
      "fullDescription": [
        "Original. Opgraderet. Retro.",
        "Tilbage, hvor det hele startede — med en blød retrofinish.",
        "Retro Collection-versionen af G Pen 510 Original forener nostalgisk gennemsigtigt design med en dyb, iøjnefaldende gennemsigtig farve. Den opgraderede udgave er inspireret af vores allerførste 510-batteri fra 2012 og bevarer originalens enkelhed og pålidelighed, men er forfinet til moderne sessioner på farten.",
        "Som det mindste G Pen-batteri nogensinde, kun 24 × 21,1 × 56,7 mm, er 510 Original kompakt nok til ubesværet at passe ind i din dag. Åndedrætsaktiveringen gør brugen nem og knapfri, mens grænsefladen med én knap giver dig kontrol over tre forudindstillede spændinger (3,2/3,6/3,8 V), en forvarmningstilstand på 1,8 V i 10 sekunder og det digitale display.",
        "Et batteri på 400 mAh med USB-C og pass-through-opladning holder enheden klar, når du er, også mens den er tilsluttet. Med sin gennemsigtige retroskal og opgraderede 510-ydelse giver dette lommevenlige batteri en glidende blanding af vintagestil og hverdagsfunktion.",
        "Enkel. Pålidelig. Ikonisk. Originalen er tilbage.",
        "*510-patron medfølger ikke",
        "**USB-C-oplader medfølger ikke"
      ],
      "box": {
        "contents": [
          "G Pen 510 Original-batteri",
          "*USB-C-oplader medfølger ikke",
          "*510-patron medfølger ikke"
        ]
      }
    },
    "Melt Hot Knife": {
      "description": "G Pen Melt er den mindste hot knife på markedet — et kompakt dab-værktøj med keramisk spids til hurtig, ren og svinefri håndtering af koncentrater.",
      "highlights": [
        "Den mindste hot knife på markedet",
        "Keramisk spids med hurtig opvarmning",
        "USB-C med pass-through-opladning",
        "Elegant krop i aluminium",
        "Ultrakompakt: 3,94 × 0,5 × 0,25 tommer",
        "Svinefri optagning og dosering",
        "Passer i lommen og rejsetasken",
        "Fungerer med rigs, Micro+ og Hyer"
      ],
      "warranty": "Begrænset garanti — se vilkårene",
      "fullDescription": [
        "Mød den helt nye G Pen Melt Hot Knife — den mindste hot knife på markedet og den hurtigste og reneste måde at forberede dine koncentrater på. Med kun 3,94 tommer i højden, 0,5 tommer i bredden og 0,25 tommer i dybden er Melt ultrakompakt, ultrabærbar og skabt til at forsvinde i enhver lomme eller rejsetaske.",
        "Melt er designet til svinefri optagning og jævn, kontrolleret dosering og gør klistrede situationer smørnemme. Den keramiske spids varmes op med det samme og giver perfekte overførsler hver gang. Ingen klistrede værktøjer. Ingen reclaim-katastrofer. Intet fumleri.",
        "Og nu med USB-C og pass-through-opladning kan du blive ved med at bruge Melt, også mens den er tilsluttet — for det eneste, der er værre end et afladet dab-værktøj, er at vente på, at det lader op.",
        "Med sin elegante aluminiumskrop, universelle USB-C-port og G Pens karakteristiske silhuet er Melt din nye hverdagsfavorit — uanset om du fylder en rig, fylder en G Pen Micro+ op eller forbereder din G Pen Hyer.",
        "Lille størrelse. Stor kraft. Intet svineri. Altid klar."
      ],
      "box": {
        "contents": [
          "G Pen Melt Hot Knife",
          "Beskyttende rejsehætte",
          "*USB-C-opladerkabel medfølger ikke"
        ]
      }
    },
    "Connect": {
      "description": "En vaporizer til koncentrater uden brænder, der forvandler enhver vandpibe med glas-mod-glas-tilslutning til den ultimative dab-rig — uden brænder eller blotlagt nail.",
      "highlights": [
        "Keramisk opvarmning uden brænder — ingen åben ild",
        "Opvarmning på 5 sekunder giver øjeblikkelig, tæt damp",
        "Glasadaptere på 10 mm, 14 mm og 18 mm medfølger",
        "Patenteret omvendt luftflow for jævn fordampning",
        "Tre temperaturindstillinger + tilstand til forlængede sug"
      ],
      "warranty": "1 års begrænset garanti",
      "fullDescription": [
        "Det bedste alternativ uden brænder til traditionelle rigs. G Pen Connect er en revolutionerende vaporizer til koncentrater til vandpiber, der gør brænder og blotlagt nail overflødige. Denne hurtigt opvarmende vaporizer når optimal temperatur inden for fem sekunder og giver damp af højeste kvalitet helt uden besvær.",
        "Hvorfor vælge G Pen Connect?",
        "Teknologi uden brænder: sikker og bekvem keramisk opvarmning – ingen åben ild nødvendig",
        "Opvarmning på 5 sekunder: hurtig aktivering til øjeblikkelig, tæt dampproduktion",
        "Universel kompatibilitet: adaptere på 10 mm, 14 mm og 18 mm medfølger til alle vandpiber med glas-mod-glas-tilslutning",
        "Patenteret omvendt luftflow: sikrer jævn og effektiv fordampning af koncentrater",
        "Tre temperaturindstillinger: tilpas oplevelsen efter type koncentrat og smagspræferencer",
        "Tilstand til forlængede sug: til længere og kraftigere sessioner",
        "Kraftigt batteri på 850 mAh: klarer flere sessioner i træk, med pass-through-opladning",
        "Fjederbelastet carb-ventil: øjeblikkelig kontrol over luftflowet, så kammeret nemt tømmes",
        "Førsteklasses byggekvalitet: et keramisk varmelegeme bevarer koncentratets smag og giver bløde, kraftige sug sammen med din yndlingsvandpibe. Den magnetiske snap-tilslutning giver en hurtig og nem opsætning hver gang.",
        "Bærbar og klar til rejsen: trods den kraftige ydelse er G Pen Connect kompakt nok til at tage med. Hvert kit indeholder et rejseetui i hamp til nem opbevaring.",
        "Det komplette kit indeholder: G Pen Connect-enhed, glasadaptere på 10 mm/14 mm/18 mm, rejseetui i hamp, USB-opladerkabel og brugsanvisning.",
        "Klar til at opgradere fra din traditionelle rig? Udforsk vores limited edition-samarbejder Cookies x G Pen Connect og Dr. Greenthumb's x G Pen Connect.",
        "Patenteret teknologi:",
        "US 10,004,264 B2",
        "US 10,021,909 B2",
        "US 10,188,145 B2",
        "US 10,321,721 B2",
        "US 10,327,470 B2",
        "*Dette produkt må ikke bruges med tobak, nikotinholdige e-væsker eller nogen form for syntetisk nikotin eller nikotinerstatning.",
        "\"@context\": \"https://schema.org\","
      ]
    },
    "510 Original": {
      "description": "Det mindste og mest prisvenlige G Pen-batteri nogensinde. 510 Original nyfortolker Grencos allerførste batteri fra 2012 med moderne, åndedrætsaktiveret og ultrabærbar ydelse til 510-patroner.",
      "highlights": [
        "Det mindste G Pen-batteri nogensinde",
        "Åndedrætsaktivering — bare træk vejret ind",
        "Tre forudindstillede spændinger (3,2 / 3,6 / 3,8 V)",
        "Forvarmningstilstand på 1,8 V i 10 sekunder",
        "400 mAh batteri",
        "USB-C med pass-through-opladning",
        "Digitalt display",
        "24 × 21,1 × 56,7 mm"
      ],
      "warranty": "Begrænset garanti — se vilkårene",
      "fullDescription": [
        "Tilbage, hvor det hele startede — med opgraderinger.",
        "G Pen 510 Original slutter cirklen: den henter inspiration fra vores allerførste batteri fra 2012 og omarbejder det til i dag. Det er det mindste G Pen-batteri, der nogensinde er lavet (24 × 21,1 × 56,7 mm), ultrabærbart og nemt at bruge, uden at gå på kompromis med ydelsen.",
        "Med åndedrætsaktivering bliver sessionerne ubesværede med 510 Original — bare træk vejret ind. For ekstra kontrol lader grænsefladen med én knap dig skifte mellem tre forudindstillede spændinger (3,2/3,6/3,8 V), aktivere en forvarmningstilstand på 1,8 V i 10 sekunder og holde styr på det hele på det digitale display. Et batteri på 400 mAh med USB-C og pass-through-opladning betyder, at du kan oplade og bruge det samtidig, uden at sætte tempoet ned.",
        "Til kun $12.95 er det også det mest prisvenlige G Pen-batteri nogensinde — et bevis på, at førsteklasses teknologi ikke behøver at have en førsteklasses pris.",
        "Enkel. Pålidelig. Ikonisk. Originalen er tilbage.",
        "*510-patron medfølger ikke",
        "** USB-C-oplader medfølger ikke"
      ],
      "box": {
        "contents": [
          "G Pen 510 Original-batteri",
          "*USB-C-oplader medfølger ikke",
          "*510-patron medfølger ikke"
        ]
      }
    },
    "Hydout": {
      "description": "G Pen Hydout er et kompakt og diskret batteri til 510-patroner med skjult magnetisk mundstykkedæksel, justerbar spænding og LED-display til bløde, tilpassede og diskrete sessioner.",
      "highlights": [
        "Skjult magnetisk mundstykkedæksel",
        "5 varmeindstillinger (2,4 V – 3,8 V)",
        "Forvarmningstilstand på 1,8 V",
        "Genopladeligt batteri på 400 mAh",
        "Klart LED-display",
        "USB-C-opladning",
        "Passer til 510-patroner op til 2 g",
        "90 × 37,5 × 18,5 mm"
      ],
      "warranty": "Begrænset garanti — se vilkårene",
      "fullDescription": [
        "Leder du efter det bedste batteri til 510-patroner til diskrete sessioner på farten? Mød G Pen Hydout 510 Cartridge Battery — et kompakt, skjult vape-batteri til 510-patroner, der leverer seriøs ydelse uden at afsløre dig.",
        "Denne lommestørrelse kraftpakke har et skjult magnetisk mundstykkedæksel, der holder patronen diskret og beskyttet mod lys (ja, det hjælper med at bevare oliens kvalitet), et batteri på 400 mAh, justerbar spænding og et klart LED-display, der giver fuld kontrol over hvert hit. Hydout er kompatibel med de fleste patroner med 510-gevind op til 2 g og er perfekt til bløde, tilpassede sessioner — uanset hvor du er."
      ],
      "box": {
        "contents": [
          "1x G Pen Hydout 510 Cartridge Battery",
          "1x Magnetisk mundstykkedæksel",
          "510-patron medfølger ikke",
          "USB-C-opladerkabel medfølger ikke"
        ]
      }
    },
    "Hydout — Retro": {
      "description": "Retro-udgaven af G Pen Hydout giver det diskrete batteri til 510-patroner en gennemsigtig finish inspireret af 90'erne og tilføjer åndedrætsaktivering sammen med variabel spænding og USB-C-opladning.",
      "highlights": [
        "Gennemsigtig finish inspireret af 90'erne",
        "Åndedrætsaktivering",
        "Justerbar variabel spænding",
        "Forvarmningstilstand på 1,8 V",
        "Genopladeligt batteri på 400 mAh",
        "USB-C med pass-through-opladning",
        "Passer til de fleste 510-patroner",
        "Skjult magnetisk mundstykkedæksel"
      ],
      "warranty": "Begrænset garanti — se vilkårene",
      "fullDescription": [
        "G Pen Hydout Retro forener en elegant, gennemsigtig finish inspireret af 90'erne med den forfinede teknik bag G Pens mest diskrete 510-batteri. Den magnetiske skal omslutter patronen og beskytter den mod daglig slitage, samtidig med at udstyret ser minimalistisk og rent ud.",
        "Hydout er designet til alsidighed og har variable spændingsindstillinger til tilpasset varmekontrol samt en forvarmningsfunktion på 1,8 V, der varmer tykkere koncentrater op før brug. Denne Retro-udgave tilføjer også åndedrætsaktivering, så hvert sug er helt knapfrit, og USB-C med pass-through-opladning, som holder enheden klar til brug, også mens den er tilsluttet.",
        "Med hurtig USB-C-opladning, et tætsluttende patronkammer, der ikke rasler, og kompatibilitet med de fleste 510-patroner leverer Hydout Retro moderne ydelse under sin nostalgiske, gennemsigtige skal.",
        "*510-patron medfølger ikke",
        "**USB-C-oplader medfølger ikke"
      ],
      "box": {
        "contents": [
          "G Pen Hydout-batteri med 510-gevind",
          "Magnetisk mundstykke",
          "*USB-C-opladerkabel medfølger ikke",
          "*510-patron medfølger ikke"
        ]
      }
    },
    "Dash+": {
      "description": "G Pen Dash+ er en bærbar vaporizer til tørrede urter af næste generation med hybrid opvarmning ved konvektion og konduktion i et kammer af titanium, der når fordampningstemperatur på ca. 20 sekunder.",
      "highlights": [
        "Hybrid opvarmning: konvektion + konduktion",
        "Varmekammer i titanium",
        "Varmer op på ~20 sekunder",
        "Genopladeligt litium-ion-batteri på 1.800 mAh",
        "USB-C-opladning",
        "LED-display i fuld farve",
        "Haptisk feedback, tre knapper",
        "Kabinet i zinklegering"
      ],
      "warranty": "Begrænset garanti — se vilkårene",
      "fullDescription": [
        "G Pen Dash+ er en kompakt vaporizer til tørrede urter, designet til hurtige, smagfulde og tilpassede sessioner. Med hybrid opvarmning ved konvektion og konduktion i et kammer helt i titanium når den temperaturen på helt ned til 20 sekunder og giver blød, ensartet damp.",
        "To kanaler til ren indsugningsluft og et magnetisk mundstykke med spiralformet keramisk luftvej hjælper med at maksimere luftflow og smag. Et LED-display i fuld farve, tre knapper, haptisk feedback og præcis temperaturjustering gør det nemt at tilpasse hver session.",
        "G Pen Dash+ har en robust krop i zinklegering og drives af et genopladeligt batteri på 1.800 mAh med USB-C-opladning. Den leverer pålidelig ydelse i et elegant, bærbart design skabt til hverdagsbrug.",
        "*Dette produkt må ikke bruges med tobak, nikotinholdige e-væsker eller nogen form for syntetisk nikotin eller nikotinerstatning."
      ],
      "box": {
        "contents": [
          "Dash+ vaporizer",
          "Silikonemuffe til Dash+-mundstykket",
          "Fyldeværktøj med nøglering",
          "USB-C-opladerkabel"
        ]
      }
    },
    "Hyer": {
      "description": "En bærbar e-nail til både koncentrater og tørrede urter, der passer sammen med alle vandpiber med glas-mod-glas-tilslutning, bygget op omkring et varmelegeme helt i kvarts.",
      "highlights": [
        "Dobbelt brug: koncentrater eller tørrede urter",
        "Varmelegeme helt i kvarts",
        "Passer til alle piber med glas-mod-glas-tilslutning",
        "Bærbart e-nail-design"
      ],
      "warranty": "2 års begrænset garanti",
      "fullDescription": [
        "G Pen Hyer®️ er en intuitivt designet, bærbar e-nail til dobbelt brug, der fungerer med koncentrater eller tørrede urter og passer sammen med alle vandpiber med glas-mod-glas-tilslutning. G Pen Hyer er fremstillet af materialer af højeste kvalitet, herunder et varmelegeme helt i kvarts, og har smart opvarmningsteknologi med konstant temperatur, der giver smag og dampproduktion i topklasse.",
        "Med et genopladeligt litium-ion-batteri på 6.000 mAh med hurtig pass-through-opladning via USB-C i et let og robust kabinet af anodiseret aluminium flytter G Pen Hyer grænserne for ren kraft og bærbarhed. Med enkel betjening via tre knapper og en brugerflade med fem LED'er er G Pen Hyer nem at sætte op og aktivere og giver samtidig en kompromisløs oplevelse.",
        "Et førsteklasses flettet strømkabel med robuste magnetiske snap-beslag forbinder batteriet med et let tankhus i anodiseret aluminium, hvor G Pen Hyer Quartz Tank til koncentrater eller Dry Herb Tank* nemt skrues ind og ud. Tanken til koncentrater opvarmes af et specialstanset varmelegeme i rustfrit stål og har et kammer helt i kvarts med en indvendig up-stem, der giver maksimal overflade til opvarmning, effektivt luftflow og optimal fordampning af koncentrater.",
        "Den sidste del af den overlegne ydelse i G Pen Hyer Quartz Tank til koncentrater er tanklåget, der sidder magnetisk fast og er lavet af anodiseret aluminium med indbygget keramisk foring og to lufthuller for en jævn, roterende funktion. Det medfølgende voksværktøj i rustfrit stål kan også sættes fast oven på eller på siden af tanklåget, så det altid er lige ved hånden.",
        "Hvert G Pen Hyer-kit leveres med en 14 mm glasadapter (han) (glasadaptere på 10 mm og 18 mm sælges separat). Alle dele i kittet leveres pænt pakket i et medfølgende rejseetui i hamp med en netlomme til ekstra tilbehør.",
        "*G Pen Hyer Dry Herb Tank sælges separat.",
        "﻿*Holdbarhedsindekset for G Pen Hyer Quartz Tank er mindst 200 opvarmningscyklusser. Vi anbefaler, at du udskifter tanken, når dette antal er nået, for at opnå optimal ydelse.",
        "*Dette produkt må ikke bruges med tobak, nikotinholdige e-væsker eller nogen form for syntetisk nikotin eller nikotinerstatning."
      ]
    },
    "Roam": {
      "description": "En bærbar alt-i-én-e-rig, der giver vandfiltreret fordampning af koncentrater på farten, med et spildsikkert vandrør i borosilikatglas og en tank helt i kvarts.",
      "highlights": [
        "Indbygget vandfiltrering i borosilikatglas",
        "Tank helt i kvarts",
        "Kraftigt batteri på 1.300 mAh",
        "Selvstændig alt-i-én-e-rig"
      ],
      "warranty": "1 års begrænset garanti",
      "fullDescription": [
        "Her er G Pen Roam, en bærbar alt-i-én-vaporizer, der er intuitivt designet til vandfiltreret fordampning af koncentrater på farten. Med et spildsikkert, selvstændigt vandrør i borosilikatglas, en tank helt i kvarts og et kraftigt litium-ion-batteri på 1.300 mAh varmer G Pen Roam op til temperatur inden for få sekunder efter aktivering og giver bløde, smagfulde sug helt uden besvær.",
        "G Pen Roam tilpasser sig hver brugers smags- og varmepræferencer med digital temperaturkontrol og LED-display fra 400° til 800°+F (204° til 427°+C) samt haptisk feedback, der viser, når enheden er klar til brug. Roam er designet med stor vægt på diskret bærbarhed og er indkapslet i en let, men robust skal af aluminiumslegering, der helt beskytter kvartstanken og vandrøret i glas. Pass-through-teknologien gør det muligt at bruge enheden, mens den er tilsluttet, og alle dele, der er i kontakt med dampens luftvej, kan nemt skilles ad og rengøres.",
        "Hvert komplet G Pen Roam-kit leveres som standard i et rejseetui i hamp med plads til to glas med koncentrat og en lomme til tilbehør, herunder et micro-USB-opladerkabel og et G Pen-værktøj til at fylde koncentrater i.",
        "*Dette produkt må ikke bruges med tobak, nikotinholdige e-væsker eller nogen form for syntetisk nikotin eller nikotinerstatning."
      ]
    },
    "Dash": {
      "description": "Den originale G Pen Dash — en kompakt og let vaporizer til tørrede urter, designet til enkle sessioner på farten.",
      "highlights": [
        "Kompakt vaporizer til tørrede urter",
        "Enkel betjening med én knap",
        "Lommevenligt design"
      ],
      "warranty": "2 års begrænset garanti"
    },
    "Elite II": {
      "description": "En førsteklasses vaporizer til tørrede urter med fuld konvektion, der giver ren smag og tæt damp med præcis temperaturkontrol.",
      "highlights": [
        "Opvarmning med fuld konvektion",
        "Præcis temperaturkontrol",
        "Keramisk kammer med stor kapacitet"
      ],
      "warranty": "2 års begrænset garanti"
    }
  }
};
