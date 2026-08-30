/* =============================================================================
   ITALIAN (it) LANGUAGE PACK
   -----------------------------------------------------------------------------
   Loaded on demand — only when a visitor selects this language, so visitors in
   other languages download none of it. Editing this file is the ONLY thing
   needed to revise this language; no code changes.

     ui        UI chrome, keyed by the ENGLISH source string. A missing key
               simply falls back to English.
     training  Courses + quizzes, mirroring PORTAL_TRAINING.
     products  description / highlights / warranty / fullDescription.

   RULES
   - Product names, brand names, SKUs, UPCs, filenames, units and prices are
     never translated.
   - Quiz choices MUST stay in the same ORDER as the English source: the correct
     answer is an index stored on the English data and reused as-is.
   - Keep inline <strong> tags balanced, and keep {placeholder} tokens intact.
   ========================================================================== */
window.PORTAL_I18N = window.PORTAL_I18N || {};
window.PORTAL_I18N.it = {
  "ui": {
    "{m} lessons · {q}-question quiz · ~{min} min": "{m} lezioni · Quiz da {q} domande · ~{min} min",
    "Concentrate Accessories": "Accessori per concentrati",
    "Dry Herb Accessories": "Accessori per erba secca",
    "Dry-herb devices & accessories": "Dispositivi e accessori per erba secca",
    "Grinder": "Grinder",
    "This folder has {n} files. Downloading them one at a time can take several minutes and your browser may block it. Open the full Dropbox download instead?": "Questa cartella contiene {n} file. Scaricarli uno alla volta può richiedere diversi minuti e il browser potrebbe bloccarlo. Vuoi aprire invece il download completo da Dropbox?",
    "{n} downloads starting — allow multiple if your browser asks, or use “Download all”.": "Avvio di {n} download: consenti download multipli se il browser lo chiede, oppure usa «Scarica tutto».",
    "Add your store name, mailing address and email so we can ship your order": "Inserisci il nome del negozio, l’indirizzo di spedizione e l’email per poterti inviare l’ordine",
    "Enter a valid email address": "Inserisci un indirizzo email valido",
    "Add your name and email so we can reply": "Inserisci il tuo nome e la tua email per poterti rispondere",
    "Click a video to watch it, and download it or open it on YouTube where available.": "Fai clic su un video per guardarlo, quindi scaricalo o aprilo su YouTube se disponibile.",
    "document": "documento",
    "documents": "documenti",
    "item": "elemento",
    "items": "elementi",
    "These assets are provided for approved partner, press, and retail use. Please don't alter logos or product imagery. Need something specific or a different format? Use “Request an asset.”": "Questi asset sono forniti per l’uso autorizzato da parte di partner, stampa e punti vendita. Non modificare i loghi né le immagini di prodotto. Serve qualcosa di specifico o un altro formato? Usa “Richiedi un asset”.",
    "Brand Documents": "Documenti di marca",
    "Dry Herb Vaporizer": "Vaporizzatore a erba secca",
    "510 Cartridge Battery": "Batteria per cartucce 510",
    "Electric Hot Knife": "Hot knife elettrico",
    "Concentrate Vaporizer": "Vaporizzatore per concentrati",
    "Become a {name} Product Specialist": "Diventa Specialista di Prodotto {name}",
    "You’re a certified {name} Specialist": "Lei è uno Specialista {name} certificato",
    "Watch the videos, learn the product, and pass a short quiz to get certified.": "Guardi i video, impari a conoscere il prodotto e superi un breve quiz per ottenere la certificazione.",
    "Certificate earned {date} · review the course or retake anytime": "Certificato ottenuto il {date} · riveda il corso o lo ripeta quando vuole",
    "Start training →": "Inizia la formazione →",
    "Back to {name}": "Torna a {name}",
    "Product Specialist Training": "Formazione Specialista di Prodotto",
    "{v} videos · {m} lessons · {q}-question quiz · ~{min} min": "{v} video · {m} lezioni · quiz da {q} domande · ~{min} min",
    "Watch the how-to-use and cleaning videos — click a video to play it in the large viewer, or download it.": "Guardi i video sull’uso e sulla pulizia — clicchi su un video per riprodurlo nel visualizzatore grande o per scaricarlo.",
    "Answer all {q} questions. Score {p}% or higher to earn your certificate.": "Risponda a tutte le {q} domande. Ottenga almeno il {p}% per ricevere il certificato.",
    "Question {n} of {total}": "Domanda {n} di {total}",
    "{a} / {b} answered": "{a} / {b} risposte",
    "Please answer all {q} questions first": "Risponda prima a tutte le {q} domande",
    "Correct": "Corretto",
    "Incorrect": "Errato",
    "Not quite — you need {p}% to certify.": "Ci siamo quasi — serve il {p}% per certificarsi.",
    "Review the explanations above, then try again.": "Riveda le spiegazioni qui sopra, poi riprovi.",
    "Enter your name to generate your Product Specialist certificate.": "Inserisca il suo nome per generare il certificato di Specialista di Prodotto.",
    "Your Name": "Il suo nome",
    "Full name": "Nome e cognome",
    "G Pen · Product Specialist Program": "G Pen · Programma Specialista di Prodotto",
    "Certificate of Completion": "Certificato di completamento",
    "This certifies that": "Si certifica che",
    "has successfully completed the Product Specialist training and demonstrated expert product knowledge of the": "ha completato con successo la formazione da Specialista di Prodotto e dimostrato una conoscenza esperta del prodotto",
    "Date Issued": "Data di rilascio",
    "Authorized By": "Autorizzato da",
    "Certificate ID": "ID certificato",
    "Print certificate": "Stampa certificato",
    "Download image": "Scarica immagine",
    "Email my certification": "Invia la certificazione via email",
    "G PEN · PRODUCT SPECIALIST PROGRAM": "G PEN · PROGRAMMA SPECIALISTA DI PRODOTTO",
    "has successfully completed the Product Specialist training": "ha completato con successo la formazione da Specialista di Prodotto",
    "and demonstrated expert product knowledge of the": "e dimostrato una conoscenza esperta del prodotto",
    "Product Name": "Nome prodotto",
    "Product SKU": "SKU prodotto",
    "Product UPC": "UPC prodotto",
    "Retail POP Display SKU": "SKU espositore POP retail",
    "Retail POP Display UPC": "UPC espositore POP retail",
    "Product Dimensions": "Dimensioni prodotto",
    "Unit Weight": "Peso unitario",
    "Ships In Retail POP Display": "Spedito in espositore POP retail",
    "Units Per POP Display": "Unità per espositore POP",
    "Units Per Master Case": "Unità per cartone master",
    "Case Weight": "Peso cartone",
    "Case Dimensions": "Dimensioni cartone",
    "HTS (Harmonized Tariff Schedule) Code": "Codice HTS (Harmonized Tariff Schedule)",
    "Dry Herb Vape": "Vaporizzatore a erba secca",
    "510 Battery": "Batteria 510",
    "Concentrate Hot Knife": "Hot knife per concentrati",
    "Dry Herb": "Erba secca",
    "Accessory": "Accessorio",
    "E-Nail": "E-Nail",
    "E-Rig": "E-Rig",
    "Brand": "Brand",
    "Product photos": "Foto prodotto",
    "Lifestyle Photos": "Foto lifestyle",
    "Social Videos": "Video social",
    "TV Screen Videos": "Video per schermi TV",
    "Documents": "Documenti",
    "Product Photos": "Foto prodotto",
    "Web Banners": "Banner web",
    "E-Comm Render Photos": "Render foto e-commerce",
    "Misc": "Varie",
    "Our customer service team has been with us since day one — with over 15 years of hands-on experience with our devices. They know these products inside and out, and they’d be happy to walk you through anything or go over any additional questions you might have. We love to chat all things cannabis and vaporizers with you.": "Il nostro team di assistenza clienti è con noi fin dal primo giorno, con oltre 15 anni di esperienza diretta sui nostri dispositivi. Conosce questi prodotti a fondo ed è a disposizione per illustrarle qualsiasi aspetto o rispondere a ulteriori domande. Siamo sempre felici di parlare di cannabis e vaporizzatori con Lei.",
    "(optional)": "(facoltativo)",
    "123 Main St, City, State ZIP": "Via Roma 123, Città, Provincia, CAP",
    "Add each store you'd like listed on our official locator, then send your request. Have more than one location? Use <strong>Add another store</strong> to include them all.": "Aggiunga ogni negozio che desidera inserire nel nostro localizzatore ufficiale, poi invii la richiesta. Ha più di una sede? Usi <strong>Aggiungi un altro negozio</strong> per includerle tutte.",
    "Additional Products": "Prodotti aggiuntivi",
    "Address": "Indirizzo",
    "All": "Tutti",
    "Assets": "Asset",
    "Browse all {n} logo files →": "Sfoglia tutti i {n} file logo →",
    "Carry G Pen? Request to be added to our official store locator so customers can find your shop.": "Vende G Pen? Richieda l’inserimento nel nostro localizzatore ufficiale così i clienti potranno trovare il suo negozio.",
    "Clear": "Cancella",
    "Click a preview to enlarge it.": "Clicchi su un’anteprima per ingrandirla.",
    "Click preview to enlarge": "Clicchi sull’anteprima per ingrandire",
    "Close viewer": "Chiudi visualizzatore",
    "Contact us": "Contattaci",
    "Decrease": "Riduci",
    "Downloaded": "Scaricato",
    "Downloading {n} files…": "Download di {n} file…",
    "Email Address": "Indirizzo email",
    "Enlarge": "Ingrandisci",
    "Fields shown as <strong>—</strong> are still to be confirmed.": "I campi indicati con <strong>—</strong> sono ancora da confermare.",
    "Formats": "Formati",
    "Increase": "Aumenta",
    "Loading catalog…": "Caricamento catalogo…",
    "Mailing Address": "Indirizzo postale",
    "New": "Nuovo",
    "Next": "Avanti",
    "No": "No",
    "No matches for": "Nessun risultato per",
    "Official {brand} logos — black, white &amp; various versions. For approved partner, press &amp; retail use; please don’t alter, recolor, or distort the marks.": "Loghi ufficiali {brand} — nero, bianco &amp; varie versioni. Per uso approvato da partner, stampa &amp; retail; non alteri, ricolori o distorca i marchi.",
    "Open": "Apri",
    "Order Marketing Materials": "Ordina materiali marketing",
    "Order Materials": "Ordina materiali",
    "Orderable in-store marketing materials will be listed here soon. In the meantime, reach out and we’ll let you know what’s available.": "I materiali marketing per il punto vendita ordinabili saranno presto elencati qui. Nel frattempo ci contatti e le faremo sapere cosa è disponibile.",
    "Phone": "Telefono",
    "Popular searches": "Ricerche popolari",
    "Preparing {n} files as a .zip…": "Preparazione di {n} file in .zip…",
    "Press <kbd>/</kbd> to search from anywhere · <kbd>Enter</kbd> opens the top result": "Prema <kbd>/</kbd> per cercare da qualsiasi punto · <kbd>Enter</kbd> apre il primo risultato",
    "Quantity for": "Quantità per",
    "Remove this store": "Rimuovi questo negozio",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} will show here as they’re added — order what you need for your shop.": "Espositori, poster, shelf talker e altri materiali per il punto vendita {brand} appariranno qui man mano che vengono aggiunti — ordini ciò che le serve per il suo negozio.",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} — order what you need for your shop.": "Espositori, poster, shelf talker e altri materiali per il punto vendita {brand} — ordini ciò che le serve per il suo negozio.",
    "Retailers": "Rivenditori",
    "Select all": "Seleziona tutto",
    "Set a quantity for each item, add your store details, then send your request.": "Imposti una quantità per ogni articolo, aggiunga i dati del negozio e invii la richiesta.",
    "Showing the top {n} of {total} files — add a word to narrow it down.": "Mostrati i primi {n} di {total} file — aggiunga una parola per affinare.",
    "Store": "Negozio",
    "Store Name": "Nome negozio",
    "Store name": "Nome negozio",
    "Street, City, State, ZIP": "Via, Città, Provincia, CAP",
    "Submit Request": "Invia richiesta",
    "Try a product name (Dash), a file type (PNG, MP4), a category (lifestyle, packaging), or “catalog”.": "Provi un nome prodotto (Dash), un tipo di file (PNG, MP4), una categoria (lifestyle, packaging) o “catalogo”.",
    "View all →": "Vedi tutto →",
    "Website": "Sito web",
    "Yes": "Sì",
    "Your contact info": "I suoi contatti",
    "Your details": "I suoi dati",
    "You’ll confirm and send from your email app.": "Confermerà e invierà dalla sua app di posta.",
    "assets": "asset",
    "available": "disponibili",
    "colorways": "colorazioni",
    "files": "file",
    "file": "file",
    "logo files": "file logo",
    "selected": "selezionati",
    "stores": "negozi",
    "material": "materiale",
    "materials": "materiali",
    "{n} older {brand} products we no longer sell — assets kept for partners who still need them.": "{n} prodotti {brand} fuori produzione che non vendiamo più — asset conservati per i partner che ne hanno ancora bisogno.",
    "Click to watch": "Clicchi per guardare",
    "Description copied": "Descrizione copiata",
    "Copy": "Copia",
    "product": "prodotto",
    "products": "prodotti",
    "result": "risultato",
    "results": "risultati",
    "510 Batteries": "Batterie 510",
    "510-thread cartridge batteries": "Batterie per cartucce a filettatura 510",
    "Dry Herb Vaporizers": "Vaporizzatori a erba secca",
    "Portable dry-herb devices": "Dispositivi portatili per erba secca",
    "Concentrate": "Concentrato",
    "Concentrate tools & accessories": "Strumenti & accessori per concentrati",
    "More products": "Altri prodotti",
    "Catalogs & Brand Documents": "Cataloghi & documenti brand",
    "Logos & assets": "Loghi & asset",
    "Official Brand & Product Assets": "Asset ufficiali brand & prodotto",
    "Wholesale & press asset requests welcome. Assets update as new products launch.": "Richieste di asset per wholesale & stampa sono benvenute. Gli asset si aggiornano a ogni lancio di nuovi prodotti.",
    "Catalogs": "Cataloghi",
    "Logos &amp; assets": "Loghi &amp; asset",
    "Request an asset": "Richiedi un asset",
    "Request an asset →": "Richiedi un asset →",
    "Official Brand &amp; Product Assets": "Asset ufficiali brand &amp; prodotto",
    "Everything you need, in one place.": "Tutto ciò che le serve, in un unico posto.",
    "Search products, files, formats…": "Cerca prodotti, file, formati…",
    "Search all assets": "Cerca in tutti gli asset",
    "Featured": "In evidenza",
    "Logos and Brand Assets": "Loghi e asset del brand",
    "Catalogs &amp; Brand Documents": "Cataloghi &amp; documenti brand",
    "Questions about a product?": "Domande su un prodotto?",
    "Talk to our team.": "Parli con il nostro team.",
    "Mon–Fri · 10:00 AM – 6:00 PM EST": "Lun–Ven · 10:00 – 18:00 EST",
    "Wholesale &amp; press asset requests welcome. Assets update as new products launch.": "Richieste di asset per wholesale &amp; stampa sono benvenute. Gli asset si aggiornano a ogni lancio di nuovi prodotti.",
    "Browse G Pen by category": "Sfoglia G Pen per categoria",
    "Search results": "Risultati di ricerca",
    "Follow G Pen On Socials": "Segui G Pen sui social",
    "Official accounts": "Account ufficiali",
    " Copy link": " Copia link",
    " Download": " Scarica",
    "Add another store": "Aggiungi un altro negozio",
    "Add at least one store's details first": "Aggiunga prima i dati di almeno un negozio",
    "At least one store is required": "È richiesto almeno un negozio",
    "Back to library": "Torna alla libreria",
    "Brand &amp; Style Guide": "Brand &amp; Style Guide",
    "Catalog not found": "Catalogo non trovato",
    "Certified": "Certificato",
    "Certified! 🎓": "Certificato! 🎓",
    "Collection Colorways": "Colorazioni della collezione",
    "Colors": "Colori",
    "Connect storage to enable downloads": "Colleghi lo storage per abilitare i download",
    "Copy failed": "Copia non riuscita",
    "Copy folder link": "Copia link cartella",
    "Copy link": "Copia link",
    "Couldn’t build the zip": "Impossibile creare lo zip",
    "Couldn’t load the zipper — try again": "Impossibile caricare lo zipper — riprovi",
    "Couldn’t render that page": "Impossibile visualizzare la pagina",
    "Document coming soon": "Documento in arrivo",
    "Download": "Scarica",
    "Download PDF": "Scarica PDF",
    "Download all": "Scarica tutto",
    "Download all logos": "Scarica tutti i loghi",
    "Download assets by category": "Scarica asset per categoria",
    "Download coming soon": "Download in arrivo",
    "Download folder": "Scarica cartella",
    "Download logo files": "Scarica i file logo",
    "Download logos": "Scarica loghi",
    "Download selected": "Scarica selezionati",
    "Download video": "Scarica video",
    "Downloadable file coming soon — Dropbox link on the way": "File scaricabile in arrivo — link Dropbox in preparazione",
    "Enter your name for the certificate": "Inserisca il suo nome per il certificato",
    "Get Certified": "Ottieni la certificazione",
    "Get My Certificate": "Ottieni il certificato",
    "Get your store on our Store Locator": "Inserisca il suo negozio nel nostro Store Locator",
    "Highlights": "Punti salienti",
    "How to use videos": "Video su come si usa",
    "In-Store Marketing Materials": "Materiali marketing per il punto vendita",
    "Learn": "Impara",
    "Logos": "Loghi",
    "Matching files &amp; assets": "File &amp; asset corrispondenti",
    "No link yet": "Nessun link disponibile",
    "No shareable link for this folder yet": "Nessun link condivisibile per questa cartella",
    "Official Product Description": "Descrizione ufficiale del prodotto",
    "Opening Dropbox download…": "Apertura download Dropbox…",
    "Order materials": "Ordina materiali",
    "Packaging": "Packaging",
    "Prev": "Indietro",
    "Technical specifications": "Specifiche tecniche",
    "Product FAQs": "FAQ prodotto",
    "Product Manual": "Manuale del prodotto",
    "Remove": "Rimuovi",
    "Request materials": "Richiedi materiali",
    "Request this asset": "Richiedi questo asset",
    "Request to be listed": "Richiedi l’inserimento",
    "Retry quiz": "Ripeti il quiz",
    "SKU details": "Dettagli SKU",
    "Select at least one asset first": "Selezioni prima almeno un asset",
    "Set a quantity for at least one item first": "Imposti prima una quantità per almeno un articolo",
    "Share": "Condividi",
    "Store Locator Request": "Richiesta Store Locator",
    "Submit Answers": "Invia risposte",
    "Typography": "Tipografia",
    "Use “Download all” to get these from Dropbox": "Usi “Scarica tutto” per ottenerli da Dropbox",
    "View on site": "Vedi sul sito",
    "Viewer is taking too long — downloading instead": "Il visualizzatore impiega troppo tempo — avvio del download",
    "Watch": "Guarda",
    "What’s In the Box?": "Cosa c’è nella confezione?",
    "You passed!": "Ha superato il quiz!",
    "YouTube": "YouTube",
    "AUTHORIZED BY": "AUTORIZZATO DA",
    "Assets are coming soon — check back shortly.": "Gli asset saranno disponibili a breve — torni a controllare tra poco.",
    "B2B Resources": "Risorse B2B",
    "Blue": "Blu",
    "Body": "Testo",
    "CERTIFICATE ID": "ID CERTIFICATO",
    "CERTIFIED · PRODUCT SPECIALIST": "CERTIFICATO · SPECIALISTA DI PRODOTTO",
    "Catalog": "Catalogo",
    "Catalog link copied": "Link del catalogo copiato",
    "Clear all": "Cancella tutto",
    "DATE ISSUED": "DATA DI EMISSIONE",
    "Display / Headlines": "Display / Titoli",
    "Green": "Verde",
    "How-to video": "Video tutorial",
    "In-store marketing": "Marketing in negozio",
    "Link copied": "Link copiato",
    "MSRP": "Prezzo consigliato",
    "Master carton": "Cartone master",
    "Open in": "Apri in",
    "Pink": "Rosa",
    "Purple": "Viola",
    "Red": "Rosso",
    "Regional Catalogs": "Cataloghi regionali",
    "Retail POP display": "Espositore POP per punto vendita",
    "Share view": "Condividi vista",
    "Ships in POP display": "Spedito in espositore POP",
    "Ships in a retail-ready POP display — one retail box shown per colorway. See SKU details for inner-pack &amp; master-carton quantities.": "Spedito in un espositore POP pronto per la vendita — viene mostrata una confezione di vendita per colorazione. Consultare i dettagli SKU per le quantità di confezione interna &amp; cartone master.",
    "Ships in a retail-ready POP display — see SKU details for inner-pack &amp; master-carton quantities.": "Spedito in un espositore POP pronto per la vendita — consultare i dettagli SKU per le quantità di confezione interna &amp; cartone master.",
    "Ships in single retail boxes — no POP display. See SKU details for master-carton quantities.": "Spedito in singole confezioni di vendita — nessun espositore POP. Consultare i dettagli SKU per le quantità del cartone master.",
    "Single Retail Packaging": "Confezione di vendita singola",
    "Swipe to see more folders": "Scorrere per vedere altre cartelle",
    "View link copied": "Link della vista copiato",
    "View {brand} assets": "Visualizza gli asset {brand}",
    "Warranty": "Garanzia",
    "What’s in the box": "Contenuto della confezione",
    "tap to copy": "toccare per copiare",
    "updated": "aggiornato",
    "videos": "video",
    "{brand} specific in-store materials.": "Materiali per il punto vendita specifici {brand}.",
    "{n}-Pack Retail POP Display": "Espositore POP da {n} pezzi",
    "SKU": "SKU",
    "Order": "Ordina",
    "Order marketing materials": "Ordina materiali di marketing",
    "Printed in-store materials (posters, shelf talkers, displays) for this product will appear here as they’re added.": "I materiali stampati per il punto vendita (poster, shelf talker, espositori) di questo prodotto compariranno qui man mano che verranno aggiunti.",
    "Training": "Formazione",
    "Additional G Pen Products": "Altri prodotti G Pen"
  },
  "training": {
    "Slim 3-Piece Grinder": {
     "tagline": "Impara a conoscere il G Pen Slim 3-Piece Grinder, poi supera il quiz per diventare Product Specialist certificato.",
     "minutes": 6,
     "passPct": 80,
     "modules": [
      {
       "title": "Panoramica del prodotto",
       "points": [
        "Il G Pen Slim è un <strong>grinder a 3 pezzi</strong> per il fiore — non un vaporizzatore.",
        "Il suo compito è garantire una <strong>macinatura uniforme</strong>, ideale per la vaporizzazione.",
        "Abbastanza compatto per <strong>tasca, viaggio e uso quotidiano</strong>.",
        "Prezzo consigliato <strong>$19.95</strong>."
       ]
      },
      {
       "title": "Cosa lo rende diverso",
       "points": [
        "<strong>Denti micro-arrotondati</strong> — non i denti affilati di un grinder tradizionale — separano il fiore con delicatezza.",
        "L'azione più delicata aiuta a <strong>preservare cannabinoidi e terpeni</strong>, che custodiscono la potenza e l'aroma di ogni varietà.",
        "La geometria arrotondata dei denti e l'<strong>interno liscio</strong> riducono l'attrito e limitano i residui: così resta meno fiore all'interno.",
        "È <strong>senza setaccio</strong>: il design a 3 pezzi non ha il filtro per il kief, quindi i <strong>tricomi restano mescolati al macinato</strong> invece di essere separati."
       ]
      },
      {
       "title": "Materiali e test indipendenti",
       "points": [
        "Lavorato in pregiato <strong>alluminio anodizzato 6063 di grado aeronautico</strong>, per una rotazione fluida e una lunga durata.",
        "Testato in modo indipendente da <strong>Orange Photonics</strong>.",
        "In quei test il design a denti micro-arrotondati ha registrato la <strong>più alta ritenzione di THC dopo la macinatura</strong> tra le tipologie di grinder esaminate."
       ]
      },
      {
       "title": "Come venderlo",
       "points": [
        "Si abbina ai vaporizzatori per erbe secche <strong>G Pen Dash II</strong> e <strong>G Pen Dash+</strong>.",
        "Una macinatura uniforme significa un caricamento più efficiente e una resa di vapore migliore: un accessorio facile da proporre con qualsiasi dispositivo a erbe secche.",
        "Frase di posizionamento: <strong>Progettato con intelligenza. Migliore a ogni giro.</strong>"
       ]
      }
     ],
     "quiz": [
      {
       "q": "Che cos'è il G Pen Slim 3-Piece Grinder?",
       "choices": [
        "Un vaporizzatore per erbe secche",
        "Un grinder per il fiore",
        "Una batteria 510",
        "Un dab tool per concentrati"
       ],
       "answer": 1,
       "why": "Lo Slim è un grinder a 3 pezzi: prepara il fiore, non lo vaporizza."
      },
      {
       "q": "Che tipo di denti utilizza lo Slim?",
       "choices": [
        "Denti affilati tradizionali",
        "Denti micro-arrotondati",
        "Lame seghettate",
        "Macine in ceramica"
       ],
       "answer": 1,
       "why": "I denti micro-arrotondati separano il fiore con delicatezza, a differenza di un grinder tradizionale a denti affilati."
      },
      {
       "q": "Perché il design a denti arrotondati fa la differenza?",
       "choices": [
        "Macina più velocemente di qualsiasi altro design",
        "Aiuta a preservare cannabinoidi e terpeni",
        "Permette di macinare i concentrati",
        "Elimina la necessità di pulire il grinder"
       ],
       "answer": 1,
       "why": "La separazione più delicata aiuta a preservare i cannabinoidi e i terpeni che rendono unica ogni varietà."
      },
      {
       "q": "Che cosa significa che questo grinder è «senza setaccio»?",
       "choices": [
        "Che non ha coperchio",
        "Che non ha il filtro per il kief, quindi i tricomi restano mescolati al macinato",
        "Che non può essere smontato",
        "Che funziona solo con fiore secco"
       ],
       "answer": 1,
       "why": "Un design a 3 pezzi senza setaccio mantiene i tricomi nel macinato, invece di filtrarli in una camera separata."
      },
      {
       "q": "Da quanti pezzi è composto lo Slim?",
       "choices": [
        "2",
        "3",
        "4",
        "5"
       ],
       "answer": 1,
       "why": "È un grinder a 3 pezzi."
      },
      {
       "q": "Di quale materiale è fatto lo Slim?",
       "choices": [
        "Acciaio inox",
        "Alluminio anodizzato 6063 di grado aeronautico",
        "Bioplastica di canapa",
        "Titanio anodizzato"
       ],
       "answer": 1,
       "why": "Il pregiato alluminio anodizzato 6063 di grado aeronautico assicura una rotazione fluida e una lunga durata."
      },
      {
       "q": "Chi ha testato in modo indipendente il design dei denti dello Slim?",
       "choices": [
        "Orange Photonics",
        "Santa Cruz Shredder",
        "SGS",
        "Underwriters Laboratories"
       ],
       "answer": 0,
       "why": "I test indipendenti sono stati condotti da Orange Photonics."
      },
      {
       "q": "Che cosa hanno dimostrato quei test indipendenti?",
       "choices": [
        "Il tempo di macinatura più rapido",
        "La più alta ritenzione di THC dopo la macinatura tra le tipologie di grinder esaminate",
        "Il prezzo al grammo più basso",
        "Il funzionamento più silenzioso"
       ],
       "answer": 1,
       "why": "Il design a denti micro-arrotondati ha registrato la più alta ritenzione di THC dopo la macinatura tra le diverse tipologie di grinder esaminate."
      },
      {
       "q": "Con quali dispositivi è pensato per essere abbinato lo Slim?",
       "choices": [
        "Hydout e 510 Original",
        "Dash II e Dash+",
        "Melt e Connect",
        "Micro+ e Hyer"
       ],
       "answer": 1,
       "why": "È progettato per abbinarsi ai vaporizzatori per erbe secche G Pen Dash II e G Pen Dash+."
      },
      {
       "q": "Qual è il prezzo consigliato del G Pen Slim 3-Piece Grinder?",
       "choices": [
        "$14.95",
        "$19.95",
        "$29.95",
        "$49.95"
       ],
       "answer": 1,
       "why": "Lo Slim 3-Piece Grinder è venduto a $19.95."
      }
     ]
    },
    "Dash II": {
      "tagline": "Impari a conoscere a fondo il G Pen Dash II, poi superi il quiz per diventare Specialista di Prodotto certificato.",
      "modules": [
        {
          "title": "Panoramica del prodotto",
          "points": [
            "Il Dash II è un <strong>vaporizzatore per erba secca</strong> tascabile — la nuova evoluzione del G Pen Dash, il modello più venduto.",
            "È concepito <strong>solo per erba secca</strong> — non è compatibile con concentrati, oli o cartucce 510.",
            "Utilizza un sistema di riscaldamento a <strong>conduzione</strong> per un vapore affidabile e un riscaldamento in circa 30 secondi.",
            "Prezzo consigliato <strong>$49.95</strong>."
          ]
        },
        {
          "title": "Specifiche principali",
          "points": [
            "Camera di riscaldamento in <strong>ceramica da 0.4g</strong> — più capiente rispetto al Dash originale e più facile da caricare.",
            "Batteria da <strong>1,100mAh</strong>.",
            "Ricarica <strong>USB-C</strong> con <strong>ricarica pass-through (utilizzabile durante la ricarica)</strong> — può essere usato mentre è collegato.",
            "Il <strong>display OLED</strong> mostra la temperatura e il livello della batteria in tempo reale.",
            "<strong>Controllo della temperatura regolabile</strong> con precisione.",
            "Dimensioni <strong>97 × 35 × 21 mm</strong>, peso <strong>59.5 g</strong>.",
            "<strong>Utensile a punta</strong> integrato per il caricamento e la pulizia."
          ]
        },
        {
          "title": "Come si usa",
          "points": [
            "<strong>Ricarica</strong> con qualsiasi caricatore USB-C.",
            "<strong>Caricamento:</strong> rimuova il boccaglio, riempia completamente la camera con il materiale secco e comprima leggermente con l'utensile a punta — <strong>non comprima eccessivamente</strong>.",
            "<strong>Accensione:</strong> tenga premuto il pulsante per <strong>3 secondi</strong>.",
            "Usi <strong>– / +</strong> per regolare la temperatura della sessione.",
            "<strong>Avvio di una sessione:</strong> prema il pulsante <strong>2× (entro 2 secondi)</strong>. Prema di nuovo <strong>2×</strong> per annullare in qualsiasi momento.",
            "Aspiri dal boccaglio — <strong>tiri lunghi e costanti</strong> offrono i risultati migliori.",
            "Prema il pulsante <strong>5×</strong> per aprire il menu delle impostazioni del dispositivo."
          ]
        },
        {
          "title": "Pulizia e manutenzione",
          "points": [
            "<strong>Dopo ogni utilizzo:</strong> pulisca il filtro a rete del boccaglio e la camera con l'utensile a punta incluso.",
            "<strong>Pulizia profonda:</strong> rimuova l'inserto del boccaglio e lo pulisca con <strong>alcol isopropilico</strong>.",
            "Lasci sempre <strong>asciugare completamente</strong> tutte le parti prima di rimontarle."
          ]
        },
        {
          "title": "Garanzia e registrazione",
          "points": [
            "Supportato da una garanzia limitata di <strong>6 mesi</strong>.",
            "La registrazione del dispositivo su <strong>gpen.com/register</strong> aggiunge altri 6 mesi — una garanzia limitata completa di <strong>1 anno</strong>.",
            "<strong>Nella confezione:</strong> dispositivo Dash II, utensile a punta integrato per il caricamento, guaina in silicone per il boccaglio. <strong>Il cavo di ricarica USB-C NON è incluso.</strong>"
          ]
        },
        {
          "title": "Miglioramenti rispetto al Dash originale",
          "points": [
            "Prezzo consigliato più basso ($49.95), <strong>controllo della temperatura</strong> regolabile e <strong>display OLED</strong>.",
            "Camera più capiente da <strong>0.4g</strong> e batteria più grande da <strong>1,100mAh</strong>.",
            "Ricarica moderna <strong>USB-C</strong> con pass-through e design della camera aggiornato."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Quale materiale è progettato per vaporizzare il G Pen Dash II?",
          "choices": [
            "Solo erba secca",
            "Concentrati e oli",
            "Cartucce 510",
            "Uno qualsiasi dei precedenti"
          ],
          "why": "Il Dash II è un vaporizzatore solo per erba secca — non è compatibile con concentrati, oli o cartucce 510."
        },
        {
          "q": "Quanto è grande la camera di riscaldamento del Dash II?",
          "choices": [
            "0.2g",
            "Ceramica da 0.4g",
            "1.0g",
            "Non ha una camera"
          ],
          "why": "Il Dash II dispone di una camera in ceramica migliorata da 0.4g — più capiente rispetto al Dash originale e più facile da caricare."
        },
        {
          "q": "Che tipo di sistema di riscaldamento utilizza il Dash II?",
          "choices": [
            "Convezione",
            "Conduzione",
            "Induzione",
            "Fiamma libera"
          ],
          "why": "Utilizza un sistema di riscaldamento a conduzione, con un riscaldamento di circa 30 secondi."
        },
        {
          "q": "Quanto tempo impiega all'incirca il Dash II per riscaldarsi?",
          "choices": [
            "5 secondi",
            "30 secondi",
            "2 minuti",
            "5 minuti"
          ],
          "why": "Il riscaldamento richiede circa 30 secondi."
        },
        {
          "q": "Qual è la capacità della batteria del Dash II?",
          "choices": [
            "650mAh",
            "900mAh",
            "1,100mAh",
            "2,200mAh"
          ],
          "why": "Il Dash II è alimentato da una batteria da 1,100mAh — un miglioramento rispetto al Dash originale."
        },
        {
          "q": "Quale affermazione sulla ricarica del Dash II è VERA?",
          "choices": [
            "Utilizza Micro-USB",
            "Si ricarica tramite USB-C e supporta il pass-through (utilizzabile mentre è collegato)",
            "Si ricarica solo in modalità wireless",
            "Non può essere utilizzato durante la ricarica"
          ],
          "why": "Il Dash II si ricarica tramite USB-C e supporta la ricarica pass-through, quindi può essere utilizzato mentre è collegato."
        },
        {
          "q": "Come si accende il Dash II?",
          "choices": [
            "Premendo il pulsante una volta",
            "Tenendo premuto il pulsante per 3 secondi",
            "Premendo il pulsante 5 volte",
            "Facendo scorrere l'interruttore di accensione"
          ],
          "why": "Tenga premuto il pulsante per 3 secondi per accendere il dispositivo."
        },
        {
          "q": "Dopo aver impostato la temperatura, come si AVVIA una sessione?",
          "choices": [
            "Premendo il pulsante 2× entro 2 secondi",
            "Tenendo premuto per 10 secondi",
            "Soffiando nel boccaglio",
            "Si avvia automaticamente"
          ],
          "why": "Prema il pulsante 2× (entro 2 secondi) per avviare una sessione; prema di nuovo 2× per annullare."
        },
        {
          "q": "Per una pulizia PROFONDA, cosa si deve usare sull'inserto del boccaglio rimosso?",
          "choices": [
            "Acqua e sapone",
            "Alcol isopropilico",
            "Aceto",
            "Basta asciugarlo con un panno"
          ],
          "why": "Per una pulizia profonda, rimuova l'inserto del boccaglio e lo pulisca con alcol isopropilico, poi lo lasci asciugare completamente prima di rimontarlo."
        },
        {
          "q": "Come funziona la garanzia del Dash II?",
          "choices": [
            "Nessuna garanzia",
            "Garanzia a vita",
            "Limitata di 6 mesi, estesa a 1 anno se si registra il dispositivo",
            "Solo resi entro 30 giorni"
          ],
          "why": "È una garanzia limitata di 6 mesi; la registrazione su gpen.com/register aggiunge altri 6 mesi per un anno completo."
        },
        {
          "q": "Qual è il prezzo consigliato del Dash II?",
          "choices": [
            "$29.95",
            "$49.95",
            "$79.95",
            "$99.95"
          ],
          "why": "Il Dash II è stato lanciato a un prezzo consigliato più basso di $49.95."
        },
        {
          "q": "Quale articolo NON è incluso nella confezione?",
          "choices": [
            "Il dispositivo Dash II",
            "Utensile a punta integrato per il caricamento",
            "Guaina in silicone per il boccaglio",
            "Un cavo di ricarica USB-C"
          ],
          "why": "Il cavo di ricarica USB-C non è incluso — è possibile utilizzare qualsiasi caricatore USB-C."
        }
      ]
    },
    "Dash+": {
      "tagline": "Impari a conoscere a fondo il G Pen Dash+, poi superi il quiz per diventare Specialista di Prodotto certificato.",
      "modules": [
        {
          "title": "Panoramica del prodotto",
          "points": [
            "Il Dash+ è un <strong>vaporizzatore per erba secca</strong> compatto e portatile — l'evoluzione in formato maggiorato del G Pen Dash, il modello più venduto.",
            "Utilizza un riscaldamento <strong>ibrido a convezione + conduzione</strong> per sessioni rapide, saporite e uniformi.",
            "<strong>Solo erba secca</strong>. Prezzo consigliato <strong>$99.95</strong>."
          ]
        },
        {
          "title": "Specifiche principali",
          "points": [
            "Camera di riscaldamento interamente in <strong>titanio</strong>.",
            "Raggiunge la temperatura di vaporizzazione in appena <strong>20 secondi</strong>.",
            "Batteria ricaricabile agli ioni di litio da <strong>1,800mAh</strong> con ricarica <strong>USB-C</strong>.",
            "<strong>Display LED a colori</strong> con controllo preciso della temperatura.",
            "<strong>Feedback aptico</strong> e interfaccia intuitiva a <strong>3 pulsanti</strong>.",
            "Corpo resistente in <strong>lega di zinco</strong>."
          ]
        },
        {
          "title": "Come si usa",
          "points": [
            "<strong>Caricamento:</strong> rimuova il boccaglio, riempia la camera con erba secca tritata e riapplichi il boccaglio.",
            "<strong>Accensione/spegnimento:</strong> tenga premuto il pulsante di accensione per <strong>3 secondi</strong>.",
            "<strong>Regoli la temperatura</strong> con i pulsanti sinistro (–) e destro (+).",
            "<strong>Avvio o annullamento di una sessione:</strong> prema il pulsante di accensione <strong>2× entro 2 secondi</strong>. Il dispositivo vibra e il timer della sessione parte una volta raggiunta la temperatura.",
            "Al termine del timer della sessione, il riscaldamento si interrompe automaticamente; il dispositivo si spegne dopo circa 1 minuto di inattività in standby.",
            "Prema il pulsante di accensione <strong>5×</strong> per aprire il menu Impostazioni (timer della sessione, °F/°C, luminosità, feedback aptico)."
          ]
        },
        {
          "title": "Contenuto della confezione",
          "points": [
            "Vaporizzatore G Pen Dash+, guaina in silicone per il boccaglio, strumento di caricamento con portachiavi e un <strong>cavo di ricarica USB-C</strong> (incluso).",
            "Registri il suo dispositivo su <strong>gpen.com/register</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Che tipo di riscaldamento utilizza il Dash+?",
          "choices": [
            "Solo conduzione",
            "Ibrido a convezione + conduzione",
            "Fiamma libera",
            "Induzione"
          ],
          "why": "Il Dash+ utilizza un riscaldamento ibrido a convezione + conduzione per sessioni rapide, uniformi e saporite."
        },
        {
          "q": "Di quale materiale è fatta la camera di riscaldamento del Dash+?",
          "choices": [
            "Plastica",
            "Titanio",
            "Vetro",
            "Acciaio inossidabile"
          ],
          "why": "È dotato di una camera di riscaldamento interamente in titanio."
        },
        {
          "q": "Quanto tempo impiega all'incirca il Dash+ per raggiungere la temperatura?",
          "choices": [
            "20 secondi",
            "2 minuti",
            "5 secondi",
            "45 secondi"
          ],
          "why": "Il Dash+ raggiunge la temperatura di vaporizzazione in appena 20 secondi."
        },
        {
          "q": "Qual è la capacità della batteria del Dash+?",
          "choices": [
            "650mAh",
            "1,100mAh",
            "1,800mAh",
            "3,000mAh"
          ],
          "why": "È alimentato da una batteria ricaricabile agli ioni di litio da 1,800mAh."
        },
        {
          "q": "Come si accende il Dash+?",
          "choices": [
            "Premendo una volta",
            "Tenendo premuto il pulsante di accensione per 3 secondi",
            "Premendo 5 volte",
            "Agitandolo"
          ],
          "why": "Tenga premuto il pulsante di accensione per 3 secondi per accendere o spegnere."
        },
        {
          "q": "Dopo aver impostato la temperatura, come si AVVIA una sessione?",
          "choices": [
            "Premendo il pulsante di accensione 2× entro 2 secondi",
            "Tenendo premuto per 10 secondi",
            "Soffiandoci dentro",
            "Si avvia da sola"
          ],
          "why": "Prema il pulsante di accensione 2× entro 2 secondi per avviare (o annullare) una sessione."
        },
        {
          "q": "Come si apre il menu Impostazioni?",
          "choices": [
            "Premendo il pulsante di accensione 5×",
            "Tenendo premuti entrambi i pulsanti laterali",
            "Premendo una volta",
            "Collegando l'USB-C"
          ],
          "why": "Prema il pulsante di accensione 5× per accedere al menu Impostazioni (timer, °F/°C, luminosità, feedback aptico)."
        },
        {
          "q": "Che tipo di display ha il Dash+?",
          "choices": [
            "Nessun display",
            "OLED monocromatico",
            "LED a colori",
            "E-ink"
          ],
          "why": "Il Dash+ ha un display LED a colori."
        },
        {
          "q": "Qual è il prezzo consigliato del Dash+?",
          "choices": [
            "$49.95",
            "$99.95",
            "$149.95",
            "$79.95"
          ],
          "why": "Il prezzo consigliato del Dash+ è $99.95."
        },
        {
          "q": "Di quale materiale è fatto il corpo del Dash+?",
          "choices": [
            "Lega di zinco",
            "Silicone",
            "Legno",
            "Fibra di carbonio"
          ],
          "why": "Il Dash+ ha un corpo resistente in lega di zinco."
        }
      ]
    },
    "Melt Hot Knife": {
      "tagline": "Scopra il G Pen Melt, poi superi il quiz per diventare Specialista di Prodotto certificato.",
      "modules": [
        {
          "title": "Panoramica del prodotto",
          "points": [
            "Il Melt è il <strong>più piccolo hot knife sul mercato</strong> — uno <strong>strumento per dab</strong> elettrico con punta in ceramica per concentrati.",
            "Progettato per raccogliere e rilasciare il concentrato in modo rapido, pulito e <strong>senza sporcare</strong>.",
            "Prezzo consigliato <strong>$19.95</strong>."
          ]
        },
        {
          "title": "Specifiche principali",
          "points": [
            "<strong>Punta in ceramica a riscaldamento rapido</strong>.",
            "<strong>Ricarica pass-through USB-C</strong> — può essere utilizzato durante la ricarica.",
            "Elegante corpo in <strong>alluminio</strong>.",
            "Ultra compatto: <strong>3.94 × 0.5 × 0.25 in</strong>, ideale per la tasca e per il kit da viaggio.",
            "Si abbina ai rig e al G Pen Micro+ / Hyer."
          ]
        },
        {
          "title": "Come si usa",
          "points": [
            "<strong>Accensione:</strong> prema il pulsante <strong>5×</strong>.",
            "<strong>Riscaldamento:</strong> <strong>tenga premuto</strong> il pulsante per avviare il riscaldamento — si riscalda per un massimo di <strong>5 secondi</strong> per pressione.",
            "Utilizzi la punta in ceramica calda per raccogliere o rilasciare il concentrato.",
            "Può essere utilizzato <strong>durante la ricarica</strong> (sempre pronto all'uso).",
            "Il dispositivo si spegne automaticamente dopo <strong>10 minuti</strong> di inattività; il LED lampeggia <strong>8 volte</strong> quando necessita di essere ricaricato."
          ]
        },
        {
          "title": "Contenuto della confezione",
          "points": [
            "G Pen Melt Hot Knife e un cappuccio protettivo da viaggio.",
            "<strong>Il cavo di ricarica USB-C NON è incluso</strong> — funziona con qualsiasi caricatore USB-C."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Che cos'è il G Pen Melt?",
          "choices": [
            "Un vaporizzatore per erba secca",
            "Un hot knife elettrico (strumento per dab) per concentrati",
            "Una batteria 510",
            "Un water pipe"
          ],
          "why": "Il Melt è un hot knife elettrico con punta in ceramica per raccogliere e rilasciare i concentrati."
        },
        {
          "q": "Il Melt è promosso come il più piccolo ___ sul mercato.",
          "choices": [
            "vaporizzatore",
            "hot knife",
            "batteria",
            "rig"
          ],
          "why": "È il più piccolo hot knife sul mercato."
        },
        {
          "q": "Di che materiale è fatta la punta riscaldata del Melt?",
          "choices": [
            "Ceramica",
            "Titanio",
            "Quarzo",
            "Acciaio"
          ],
          "why": "Il Melt ha una punta in ceramica a riscaldamento rapido."
        },
        {
          "q": "Come si AVVIA il riscaldamento del Melt?",
          "choices": [
            "Con un solo tocco",
            "Tenendo premuto il pulsante",
            "Premendo 5×",
            "Si riscalda automaticamente"
          ],
          "why": "Dopo l'accensione, tenga premuto il pulsante per avviare il riscaldamento."
        },
        {
          "q": "Qual è il tempo massimo di riscaldamento per pressione?",
          "choices": [
            "5 secondi",
            "30 secondi",
            "2 minuti",
            "10 secondi"
          ],
          "why": "Il dispositivo si riscalda per un massimo di 5 secondi per pressione."
        },
        {
          "q": "Il Melt può essere utilizzato mentre è in carica?",
          "choices": [
            "No",
            "Sì — pass-through USB-C",
            "Solo su una base speciale",
            "Solo quando è completamente carico"
          ],
          "why": "Sì — supporta la ricarica pass-through USB-C e può essere utilizzato durante la ricarica."
        },
        {
          "q": "Dopo quanto tempo il Melt si spegne automaticamente per inattività?",
          "choices": [
            "1 minuto",
            "10 minuti",
            "1 ora",
            "Non si spegne mai"
          ],
          "why": "Si spegne automaticamente dopo 10 minuti di inattività."
        },
        {
          "q": "Come si accende il Melt?",
          "choices": [
            "Premendo il pulsante 5×",
            "Tenendo premuto per 3 secondi",
            "Con un solo tocco",
            "Ruotando il cappuccio"
          ],
          "why": "Prema il pulsante 5× per accendere il Melt."
        },
        {
          "q": "Come segnala il Melt che deve essere ricaricato?",
          "choices": [
            "Emette un segnale acustico",
            "Il LED lampeggia 8 volte",
            "Si scalda",
            "Non lo segnala"
          ],
          "why": "Il pulsante LED lampeggia 8 volte quando è il momento di ricaricare."
        },
        {
          "q": "Qual è il prezzo consigliato del Melt?",
          "choices": [
            "$12.95",
            "$19.95",
            "$49.95",
            "$99.95"
          ],
          "why": "Il prezzo consigliato del Melt è $19.95."
        }
      ]
    },
    "Hydout": {
      "tagline": "Scopra il G Pen Hydout, poi superi il quiz per diventare Specialista di Prodotto certificato.",
      "modules": [
        {
          "title": "Panoramica del prodotto",
          "points": [
            "Hydout è una <strong>batteria per cartucce 510 discreta</strong> e compatta, con un <strong>coperchio magnetico nascosto per il boccaglio</strong>.",
            "Voltaggio regolabile e display LED per sessioni fluide, personalizzabili e riservate.",
            "Prezzo consigliato <strong>$19.95</strong>."
          ]
        },
        {
          "title": "Specifiche principali",
          "points": [
            "<strong>5 impostazioni di calore</strong> da <strong>2.4V a 3.8V</strong>.",
            "Modalità di preriscaldamento a <strong>1.8V</strong> per 10 secondi.",
            "Batteria ricaricabile da <strong>400mAh</strong>, ricarica <strong>USB-C</strong>.",
            "<strong>Display LED</strong> luminoso.",
            "Compatibile con <strong>cartucce 510 fino a 2g</strong>.",
            "Dimensioni: <strong>90 × 37.5 × 18.5 mm</strong>."
          ]
        },
        {
          "title": "Come si usa",
          "points": [
            "<strong>Caricamento:</strong> rimuova il boccaglio, avviti una cartuccia 510 e riposizioni il boccaglio.",
            "<strong>Accensione/spegnimento:</strong> prema il pulsante <strong>5×</strong>.",
            "<strong>Regolazione del voltaggio:</strong> prema <strong>3×</strong> per scorrere le impostazioni di calore.",
            "<strong>Preriscaldamento:</strong> prema <strong>2×</strong> per un preriscaldamento di 10 secondi a 1.8V.",
            "<strong>Tiro:</strong> <strong>tenga premuto</strong> il pulsante per attivare e aspiri.",
            "Spegnimento automatico dopo <strong>2 minuti</strong> di inattività."
          ]
        },
        {
          "title": "Manutenzione e contenuto della confezione",
          "points": [
            "Pulisca il boccaglio e il punto di contatto tra batteria e cartuccia con un cotton fioc e <strong>alcol isopropilico</strong>. <strong>Non immerga la batteria.</strong>",
            "Nella confezione: la batteria 510 Hydout + coperchio magnetico per il boccaglio. La cartuccia 510 e il cavo USB-C <strong>non sono inclusi</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Che cos'è il G Pen Hydout?",
          "choices": [
            "Un vaporizzatore per erba secca",
            "Una batteria per cartucce 510",
            "Un hot knife",
            "Un infusore a gravità"
          ],
          "why": "Hydout è una batteria per cartucce 510 discreta."
        },
        {
          "q": "Qual è la caratteristica distintiva di discrezione di Hydout?",
          "choices": [
            "Un coperchio magnetico nascosto per il boccaglio",
            "Uno schermo pieghevole",
            "Un motore silenzioso",
            "Un rivestimento mimetico"
          ],
          "why": "Ha un coperchio magnetico nascosto per il boccaglio, per un aspetto discreto."
        },
        {
          "q": "Qual è la gamma di voltaggio di Hydout?",
          "choices": [
            "1.0V–2.0V",
            "2.4V–3.8V (5 impostazioni)",
            "3.8V–4.8V",
            "Un unico voltaggio fisso"
          ],
          "why": "Hydout offre 5 impostazioni di calore da 2.4V a 3.8V."
        },
        {
          "q": "Qual è la capacità della batteria di Hydout?",
          "choices": [
            "200mAh",
            "400mAh",
            "900mAh",
            "1.800mAh"
          ],
          "why": "Ha una batteria ricaricabile da 400mAh."
        },
        {
          "q": "Come si accende o si spegne Hydout?",
          "choices": [
            "Premendo il pulsante 5×",
            "Tenendo premuto per 3 secondi",
            "Premendo 2×",
            "Aspirando"
          ],
          "why": "Prema il pulsante 5× per accendere o spegnere Hydout."
        },
        {
          "q": "Come si cambia il voltaggio?",
          "choices": [
            "Premendo 3×",
            "Premendo 5×",
            "Tenendo premuto il pulsante",
            "Ruotando il boccaglio"
          ],
          "why": "Prema il pulsante 3× per scorrere le impostazioni di calore."
        },
        {
          "q": "Come si esegue un tiro con Hydout?",
          "choices": [
            "Basta inspirare",
            "Tenendo premuto il pulsante mentre si aspira",
            "Premendo 2×",
            "Premendo e rilasciando"
          ],
          "why": "Tenga premuto il pulsante per attivare e aspiri."
        },
        {
          "q": "Cosa succede premendo il pulsante 2×?",
          "choices": [
            "Si spegne",
            "Si avvia un preriscaldamento di 10 secondi a 1.8V",
            "Si blocca",
            "Niente"
          ],
          "why": "Premendo 2× si avvia un preriscaldamento di 10 secondi a 1.8V."
        },
        {
          "q": "Dopo quanto tempo Hydout si spegne automaticamente?",
          "choices": [
            "2 minuti",
            "10 minuti",
            "30 secondi",
            "1 ora"
          ],
          "why": "Hydout si spegne automaticamente dopo 2 minuti di inattività."
        },
        {
          "q": "Qual è il modo corretto di pulire Hydout?",
          "choices": [
            "Immergere tutta la batteria nell'alcol",
            "Cotton fioc + alcol isopropilico sul punto di contatto — NON immergere la batteria",
            "Sciacquare sotto l'acqua",
            "Non necessita mai di pulizia"
          ],
          "why": "Usi un cotton fioc con alcol isopropilico sui punti di contatto; non immerga mai la batteria."
        }
      ]
    },
    "510 Original": {
      "tagline": "Scopra il G Pen 510 Original, poi superi il quiz per diventare Specialista di Prodotto certificato.",
      "modules": [
        {
          "title": "Panoramica del prodotto",
          "points": [
            "Il 510 Original è la <strong>batteria G Pen più piccola ed economica di sempre</strong> — una rivisitazione moderna della primissima batteria Grenco del 2012.",
            "Una <strong>batteria per cartuccia 510</strong> ultraportatile con <strong>attivazione a respiro</strong>.",
            "Prezzo consigliato <strong>$12.95</strong>."
          ]
        },
        {
          "title": "Specifiche principali",
          "points": [
            "<strong>Attivazione a respiro</strong> — basta inalare (oppure tenere premuto il pulsante).",
            "<strong>Tre voltaggi preimpostati: 3.2 / 3.6 / 3.8V</strong>.",
            "Modalità preriscaldamento a <strong>1.8V</strong> per 10 secondi.",
            "Batteria da <strong>400mAh</strong> con ricarica <strong>USB-C pass-through</strong> (utilizzabile durante la ricarica).",
            "<strong>Display</strong> digitale.",
            "Dimensioni: <strong>24 × 21.1 × 56.7 mm</strong>."
          ]
        },
        {
          "title": "Come si usa",
          "points": [
            "<strong>Caricamento:</strong> avviti una cartuccia 510.",
            "<strong>Accensione/spegnimento:</strong> prema il pulsante <strong>5×</strong>.",
            "<strong>Regolazione del voltaggio:</strong> prema <strong>3×</strong> per scorrere tra 3.2 / 3.6 / 3.8V.",
            "<strong>Preriscaldamento:</strong> prema <strong>2×</strong> per un preriscaldamento di 10 secondi a 1.8V.",
            "<strong>Tiro:</strong> semplicemente <strong>inspiri</strong> (attivazione a respiro) — oppure tenga premuto il pulsante.",
            "Spegnimento automatico dopo <strong>10 minuti</strong> di inattività."
          ]
        },
        {
          "title": "Manutenzione e contenuto della confezione",
          "points": [
            "Pulisca il contatto tra batteria e cartuccia con un cotton fioc e <strong>alcol isopropilico</strong>. <strong>Non immerga la batteria.</strong>",
            "Nella confezione: la batteria 510 Original. Il caricatore USB-C e la cartuccia 510 <strong>non sono inclusi</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Qual è la caratteristica notevole del 510 Original?",
          "choices": [
            "È la batteria G Pen più grande",
            "È la batteria G Pen più piccola ed economica di sempre (una rivisitazione dell'originale del 2012)",
            "È un vaporizzatore per erba secca",
            "Funziona solo con le cartucce G Pen"
          ],
          "why": "È la batteria G Pen più piccola ed economica di sempre — una rivisitazione moderna della prima batteria Grenco del 2012."
        },
        {
          "q": "Come si attiva un tiro sul 510 Original?",
          "choices": [
            "Inspirando (ha l'attivazione a respiro) — oppure tenendo premuto il pulsante",
            "Premendo 5×",
            "Non eroga senza toccare lo schermo",
            "Ruotando la cartuccia"
          ],
          "why": "Il 510 Original si attiva a respiro — basta inalare, oppure tenere premuto il pulsante."
        },
        {
          "q": "Quali sono i tre voltaggi preimpostati?",
          "choices": [
            "2.4 / 3.0 / 3.6V",
            "3.2 / 3.6 / 3.8V",
            "1.8 / 2.4 / 3.0V",
            "3.8 / 4.2 / 4.8V"
          ],
          "why": "Ha tre voltaggi preimpostati: 3.2, 3.6 e 3.8V."
        },
        {
          "q": "Qual è la capacità della batteria del 510 Original?",
          "choices": [
            "150mAh",
            "400mAh",
            "900mAh",
            "1,100mAh"
          ],
          "why": "Ha una batteria da 400mAh con ricarica pass-through (utilizzabile durante la ricarica) via USB-C."
        },
        {
          "q": "Come si accende o si spegne il 510 Original?",
          "choices": [
            "Premendo il pulsante 5×",
            "Tenendolo premuto per 3 secondi",
            "Premendo 3×",
            "Espirando"
          ],
          "why": "Prema il pulsante 5× per accenderlo o spegnerlo."
        },
        {
          "q": "Come si cambia il voltaggio?",
          "choices": [
            "Premendo 3×",
            "Premendo 5×",
            "Tenendo premuto il pulsante",
            "Avvitando più stretta la cartuccia"
          ],
          "why": "Prema il pulsante 3× per scorrere tra 3.2 / 3.6 / 3.8V."
        },
        {
          "q": "Cosa fa la pressione 2×?",
          "choices": [
            "Lo spegne",
            "Avvia un preriscaldamento di 10 secondi a 1.8V",
            "Blocca la batteria",
            "Niente"
          ],
          "why": "Premendo 2× si avvia un preriscaldamento di 10 secondi a 1.8V."
        },
        {
          "q": "Dopo quanto tempo il 510 Original si spegne automaticamente?",
          "choices": [
            "2 minuti",
            "10 minuti",
            "30 secondi",
            "1 ora"
          ],
          "why": "Si spegne automaticamente dopo 10 minuti di inattività."
        },
        {
          "q": "Come si ricarica il 510 Original?",
          "choices": [
            "Micro-USB",
            "USB-C pass-through",
            "Solo wireless",
            "Batterie sostituibili"
          ],
          "why": "Si ricarica via USB-C e supporta la ricarica pass-through (utilizzabile durante la ricarica)."
        },
        {
          "q": "Qual è il prezzo consigliato del 510 Original?",
          "choices": [
            "$12.95",
            "$19.95",
            "$49.95",
            "$9.95"
          ],
          "why": "A $12.95, è la batteria G Pen più economica di sempre."
        }
      ]
    },
    "510 Original — Retro": {
      "tagline": "Impari a conoscere il G Pen 510 Original, poi superi il quiz per diventare Specialista di Prodotto certificato.",
      "modules": [
        {
          "title": "Panoramica del prodotto",
          "points": [
            "Il 510 Original è la <strong>batteria G Pen più piccola ed economica di sempre</strong> — una rivisitazione moderna della primissima batteria Grenco del 2012.",
            "Una <strong>batteria per cartuccia 510</strong> ultraportatile con <strong>attivazione a respiro</strong>.",
            "Prezzo consigliato <strong>$12.95</strong>."
          ]
        },
        {
          "title": "Specifiche principali",
          "points": [
            "<strong>Attivazione a respiro</strong> — basta inspirare (oppure tenere premuto il pulsante).",
            "<strong>Tre voltaggi preimpostati: 3.2 / 3.6 / 3.8V</strong>.",
            "Modalità di preriscaldamento a <strong>1.8V</strong> per 10 secondi.",
            "Batteria da <strong>400mAh</strong> con ricarica <strong>USB-C pass-through</strong> (utilizzabile durante la ricarica).",
            "<strong>Display</strong> digitale.",
            "Dimensioni: <strong>24 × 21.1 × 56.7 mm</strong>."
          ]
        },
        {
          "title": "Come si usa",
          "points": [
            "<strong>Caricamento:</strong> avviti una cartuccia 510.",
            "<strong>Accensione/spegnimento:</strong> prema il pulsante <strong>5×</strong>.",
            "<strong>Regolazione del voltaggio:</strong> prema <strong>3×</strong> per scorrere 3.2 / 3.6 / 3.8V.",
            "<strong>Preriscaldamento:</strong> prema <strong>2×</strong> per un preriscaldamento di 10 secondi a 1.8V.",
            "<strong>Tiro:</strong> è sufficiente <strong>inspirare</strong> (attivazione a respiro) — oppure tenere premuto il pulsante.",
            "Spegnimento automatico dopo <strong>10 minuti</strong> di inattività."
          ]
        },
        {
          "title": "Cura &amp; Contenuto della confezione",
          "points": [
            "Pulisca il contatto tra batteria e cartuccia con un cotton fioc e <strong>alcol isopropilico</strong>. <strong>Non immerga la batteria in liquidi.</strong>",
            "Nella confezione: la batteria 510 Original. Un caricatore USB-C e una cartuccia 510 <strong>non sono inclusi</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Che cosa contraddistingue il 510 Original?",
          "choices": [
            "È la batteria G Pen più grande",
            "È la batteria G Pen più piccola ed economica di sempre (una rivisitazione dell'originale del 2012)",
            "È un vaporizzatore per erba secca",
            "Funziona solo con le cartucce G Pen"
          ],
          "why": "È la batteria G Pen più piccola ed economica di sempre — una rivisitazione moderna della prima batteria Grenco del 2012."
        },
        {
          "q": "Come si attiva un tiro sul 510 Original?",
          "choices": [
            "Inspirando (ha l'attivazione a respiro) — oppure tenendo premuto il pulsante",
            "Premendo 5×",
            "Non eroga senza un tocco sullo schermo",
            "Ruotando la cartuccia"
          ],
          "why": "Il 510 Original ha l'attivazione a respiro — basta inspirare, oppure tenere premuto il pulsante."
        },
        {
          "q": "Quali sono i tre voltaggi preimpostati?",
          "choices": [
            "2.4 / 3.0 / 3.6V",
            "3.2 / 3.6 / 3.8V",
            "1.8 / 2.4 / 3.0V",
            "3.8 / 4.2 / 4.8V"
          ],
          "why": "Ha tre voltaggi preimpostati: 3.2, 3.6 e 3.8V."
        },
        {
          "q": "Qual è la capacità della batteria del 510 Original?",
          "choices": [
            "150mAh",
            "400mAh",
            "900mAh",
            "1,100mAh"
          ],
          "why": "Ha una batteria da 400mAh con ricarica USB-C pass-through."
        },
        {
          "q": "Come si accende o si spegne il 510 Original?",
          "choices": [
            "Premendo il pulsante 5×",
            "Tenendolo premuto per 3 secondi",
            "Premendo 3×",
            "Espirando"
          ],
          "why": "Prema il pulsante 5× per accenderlo o spegnerlo."
        },
        {
          "q": "Come si cambia il voltaggio?",
          "choices": [
            "Premendo 3×",
            "Premendo 5×",
            "Tenendo premuto il pulsante",
            "Avvitando la cartuccia più stretta"
          ],
          "why": "Prema il pulsante 3× per scorrere tra 3.2 / 3.6 / 3.8V."
        },
        {
          "q": "Che cosa fa la pressione 2×?",
          "choices": [
            "Lo spegne",
            "Avvia un preriscaldamento di 10 secondi a 1.8V",
            "Blocca la batteria",
            "Niente"
          ],
          "why": "Premendo 2× si avvia un preriscaldamento di 10 secondi a 1.8V."
        },
        {
          "q": "Dopo quanto tempo il 510 Original si spegne automaticamente?",
          "choices": [
            "2 minuti",
            "10 minuti",
            "30 secondi",
            "1 ora"
          ],
          "why": "Si spegne automaticamente dopo 10 minuti di inattività."
        },
        {
          "q": "Come si ricarica il 510 Original?",
          "choices": [
            "Micro-USB",
            "USB-C pass-through",
            "Solo wireless",
            "Batterie sostituibili"
          ],
          "why": "Si ricarica tramite USB-C e supporta la ricarica pass-through."
        },
        {
          "q": "Qual è il prezzo consigliato del 510 Original?",
          "choices": [
            "$12.95",
            "$19.95",
            "$49.95",
            "$9.95"
          ],
          "why": "A $12.95 è la batteria G Pen più economica di sempre."
        }
      ]
    },
    "Hydout — Retro": {
      "tagline": "Scopra il G Pen Hydout, poi superi il quiz per diventare Specialista di Prodotto certificato.",
      "modules": [
        {
          "title": "Panoramica del prodotto",
          "points": [
            "L'Hydout è una <strong>batteria per cartucce 510 discreta</strong> e compatta, con <strong>copri-boccaglio magnetico nascosto</strong>.",
            "Voltaggio regolabile e display LED per sessioni fluide, personalizzabili e discrete.",
            "Prezzo consigliato <strong>$19.95</strong>."
          ]
        },
        {
          "title": "Specifiche principali",
          "points": [
            "<strong>5 livelli di temperatura</strong> da <strong>2.4V a 3.8V</strong>.",
            "Modalità di preriscaldamento a <strong>1.8V</strong> per 10 secondi.",
            "Batteria ricaricabile da <strong>400mAh</strong>, ricarica <strong>USB-C</strong>.",
            "<strong>Display LED</strong> luminoso.",
            "Compatibile con <strong>cartucce 510 fino a 2g</strong>.",
            "Dimensioni: <strong>90 × 37.5 × 18.5 mm</strong>."
          ]
        },
        {
          "title": "Come si usa",
          "points": [
            "<strong>Caricamento:</strong> rimuovere il boccaglio, avvitare una cartuccia 510 e riposizionare il boccaglio.",
            "<strong>Accensione/spegnimento:</strong> premere il pulsante <strong>5×</strong>.",
            "<strong>Regolazione del voltaggio:</strong> premere <strong>3×</strong> per scorrere i livelli di temperatura.",
            "<strong>Preriscaldamento:</strong> premere <strong>2×</strong> per un preriscaldamento di 10 secondi a 1.8V.",
            "<strong>Tiro:</strong> <strong>tenere premuto</strong> il pulsante per attivare e tirare.",
            "Spegnimento automatico dopo <strong>2 minuti</strong> di inattività."
          ]
        },
        {
          "title": "Manutenzione &amp; Contenuto della confezione",
          "points": [
            "Pulire il boccaglio e il punto di contatto tra batteria e cartuccia con un cotton fioc e <strong>alcol isopropilico</strong>. <strong>Non immergere la batteria.</strong>",
            "Nella confezione: la batteria 510 Hydout + copri-boccaglio magnetico. La cartuccia 510 e il cavo USB-C <strong>non sono inclusi</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Che cos'è il G Pen Hydout?",
          "choices": [
            "Un vaporizzatore per erba secca",
            "Una batteria per cartucce 510",
            "Un hot knife",
            "Un infusore a gravità"
          ],
          "why": "L'Hydout è una batteria discreta per cartucce 510."
        },
        {
          "q": "Qual è la caratteristica distintiva di discrezione dell'Hydout?",
          "choices": [
            "Un copri-boccaglio magnetico nascosto",
            "Uno schermo pieghevole",
            "Un motore silenzioso",
            "Un rivestimento mimetico"
          ],
          "why": "Dispone di un copri-boccaglio magnetico nascosto per un aspetto discreto."
        },
        {
          "q": "Qual è l'intervallo di voltaggio dell'Hydout?",
          "choices": [
            "1.0V–2.0V",
            "2.4V–3.8V (5 livelli)",
            "3.8V–4.8V",
            "Un unico voltaggio fisso"
          ],
          "why": "L'Hydout offre 5 livelli di temperatura da 2.4V a 3.8V."
        },
        {
          "q": "Qual è la capacità della batteria dell'Hydout?",
          "choices": [
            "200mAh",
            "400mAh",
            "900mAh",
            "1,800mAh"
          ],
          "why": "Ha una batteria ricaricabile da 400mAh."
        },
        {
          "q": "Come si accende o si spegne l'Hydout?",
          "choices": [
            "Premendo il pulsante 5×",
            "Tenendo premuto per 3 secondi",
            "Premendo 2×",
            "Inspirando"
          ],
          "why": "Premere il pulsante 5× per accendere o spegnere l'Hydout."
        },
        {
          "q": "Come si modifica il voltaggio?",
          "choices": [
            "Premendo 3×",
            "Premendo 5×",
            "Tenendo premuto il pulsante",
            "Ruotando il boccaglio"
          ],
          "why": "Premere il pulsante 3× per scorrere i livelli di temperatura."
        },
        {
          "q": "Come si esegue un tiro con l'Hydout?",
          "choices": [
            "Basta inspirare",
            "Tenendo premuto il pulsante durante il tiro",
            "Premendo 2×",
            "Premendo e rilasciando"
          ],
          "why": "Tenere premuto il pulsante per attivare e tirare."
        },
        {
          "q": "Che cosa fa la pressione del pulsante 2×?",
          "choices": [
            "Lo spegne",
            "Avvia un preriscaldamento di 10 secondi a 1.8V",
            "Lo blocca",
            "Niente"
          ],
          "why": "Premere 2× avvia un preriscaldamento di 10 secondi a 1.8V."
        },
        {
          "q": "Dopo quanto tempo l'Hydout si spegne automaticamente?",
          "choices": [
            "2 minuti",
            "10 minuti",
            "30 secondi",
            "1 ora"
          ],
          "why": "L'Hydout si spegne automaticamente dopo 2 minuti di inattività."
        },
        {
          "q": "Qual è il modo corretto di pulire l'Hydout?",
          "choices": [
            "Immergere l'intera batteria nell'alcol",
            "Cotton fioc + alcol isopropilico sul punto di contatto — NON immergere la batteria",
            "Sciacquare sotto l'acqua",
            "Non necessita mai di pulizia"
          ],
          "why": "Utilizzare un cotton fioc con alcol isopropilico sui punti di contatto; non immergere mai la batteria."
        }
      ]
    }
  },
  "products": {
      "Micro II": {
        "description": "Un vaporizzatore per concentrati compatto con tre livelli di calore, flusso d'aria regolabile, display digitale, riscaldamento in ceramica e fino a 120 sessioni per ricarica.",
        "highlights": [
          "Tre livelli di calore: LOW ~295°F, MEDIUM ~340°F, HIGH ~395°F",
          "Riscaldamento in 5 secondi",
          "Modalità Sessione (20 s) + Riscaldamento Manuale (fino a 25 s)",
          "Flusso d'aria regolabile: da aperto a ristretto",
          "Atomizzatore in ceramica da 0.8Ω",
          "Display digitale: temperatura, stato di riscaldamento e batteria",
          "Vibrazione al raggiungimento della temperatura",
          "Batteria da 1,250mAh: fino a 120 sessioni per ricarica",
          "Ricarica rapida USB-C: in meno di 60 minuti",
          "Ricarica pass-through (utilizzabile durante la ricarica)",
          "Spegnimento automatico dopo 10 minuti",
          "Corpo in alluminio anodizzato",
          "Compatibile con Sidecar e adattatore per rig da 14 mm (venduti separatamente)",
          "Utilizzo semplice con un solo pulsante"
        ],
        "fullDescription": [
          "Il G Pen Micro II reinventa l'iconico vaporizzatore per concentrati Micro con più potenza, precisione e controllo, in un design compatto e tascabile.",
          "Alimentato da una batteria ricaricabile da 1,250mAh, il Micro II offre fino a 120 sessioni per ricarica, con ricarica rapida USB-C in meno di 60 minuti. Tre livelli di temperatura ottimizzati — LOW a circa 295°F, MEDIUM a 340°F e HIGH a 395°F — permettono di calibrare la sessione per un gusto morbido, prestazioni equilibrate o una produzione di vapore più densa.",
          "Un atomizzatore in ceramica da 0.8Ω di alta qualità garantisce prestazioni costanti con i concentrati, mentre il flusso d'aria regolabile offre un controllo ancora maggiore su ogni tiro. Scegliete tra la Modalità Sessione da 20 secondi, con riscaldamento automatico, o il Riscaldamento Manuale, con fino a 25 secondi di controllo diretto.",
          "Il display digitale integrato tiene sempre visibili batteria, temperatura e stato di riscaldamento, mentre la vibrazione segnala quando il Micro II ha raggiunto la temperatura. Un resistente corpo in alluminio anodizzato, l'utilizzo con un solo pulsante, la ricarica pass-through e lo spegnimento automatico dopo 10 minuti rendono l'uso quotidiano semplicissimo.",
          "Utilizzate il bocchino in silicone incluso per una configurazione compatta, oppure ampliate l'esperienza con il G Pen Micro II Sidecar e l'adattatore per rig da 14 mm, disponibili separatamente, per sessioni filtrate ad acqua a casa o in movimento.",
          "A più di dieci anni dal microG originale, che ha contribuito a definire la vaporizzazione portatile dei concentrati, il Micro II porta l'esperienza Micro in una nuova generazione, il tutto a $49.95."
        ],
        "box": {
          "contents": [
            "Batteria G Pen Micro II",
            "Serbatoio in ceramica G Pen Micro II",
            "Bocchino in silicone",
            "*Sidecar del Micro II venduto separatamente",
            "*Adattatore per rig da 14 mm del Micro II venduto separatamente"
          ]
        },
        "specs": [
          [
            "Batteria",
            "1,250mAh ricaricabile"
          ],
          [
            "Ricarica",
            "Ricarica rapida USB-C, meno di 60 minuti"
          ],
          [
            "Ricarica pass-through",
            "Sì"
          ],
          [
            "Display",
            "Display digitale in bianco e nero"
          ],
          [
            "Temperatura — LOW",
            "~295°F"
          ],
          [
            "Temperatura — MEDIUM",
            "~340°F"
          ],
          [
            "Temperatura — HIGH",
            "~395°F"
          ],
          [
            "Tolleranza di temperatura",
            "±15–30°F"
          ],
          [
            "Tempo di riscaldamento",
            "5 secondi"
          ],
          [
            "Modalità Sessione",
            "Ciclo di riscaldamento di 20 secondi (riscaldamento iniziale incluso)"
          ],
          [
            "Riscaldamento Manuale",
            "Fino a 25 secondi (riscaldamento iniziale incluso)"
          ],
          [
            "Atomizzatore",
            "Ceramica da 0.8Ω"
          ],
          [
            "Flusso d'aria",
            "Regolabile"
          ],
          [
            "Vibrazione",
            "Sì"
          ],
          [
            "Autonomia della batteria",
            "Fino a 120 sessioni per ricarica"
          ],
          [
            "Spegnimento automatico",
            "10 minuti"
          ],
          [
            "Corpo",
            "Alluminio anodizzato"
          ],
          [
            "Bocchino",
            "Silicone"
          ],
          [
            "Dimensioni del dispositivo",
            "98.6 × 24 × 32 mm"
          ],
          [
            "Peso del dispositivo",
            "86 g"
          ]
        ]
      },
    "Slim 3-Piece Grinder": {
     "description": "Un grinder sottile a 3 pezzi, senza setaccio, con denti micro-arrotondati che separano il fiore con delicatezza per una macinatura uniforme — pensato per abbinarsi a Dash II e Dash+.",
     "highlights": [
      "Denti micro-arrotondati per una macinatura delicata e uniforme",
      "Aiuta a preservare cannabinoidi e terpeni",
      "Design a 3 pezzi senza setaccio: i tricomi restano nel tuo macinato",
      "Interno liscio che riduce attrito e residui",
      "Alluminio anodizzato 6063 di grado aeronautico",
      "La più alta ritenzione di THC dopo la macinatura nei test Orange Photonics",
      "Coperchio magnetico che tiene al sicuro il contenuto",
      "Profilo compatto per la tasca e per il viaggio",
      "Si abbina a G Pen Dash II e Dash+"
     ],
     "fullDescription": [
      "Una grande sessione comincia sempre da una macinatura migliore. Il G Pen Slim 3-Piece Grinder è progettato con innovativi denti micro-arrotondati che separano il fiore con delicatezza per una macinatura uniforme, aiutando al tempo stesso a preservare i cannabinoidi e i terpeni che rendono unica ogni varietà.",
      "A differenza dei grinder tradizionali a denti affilati, la geometria arrotondata dei denti e l'interno liscio dello Slim riducono l'attrito e limitano i residui, così resta più fiore dove deve stare. Il design a 3 pezzi senza setaccio mantiene inoltre i tricomi mescolati al macinato invece di separarli, mentre il profilo compatto è perfetto per la tasca, il viaggio e l'uso quotidiano.",
      "Realizzato in pregiato alluminio anodizzato 6063 di grado aeronautico, il G Pen Slim offre una rotazione fluida, una lunga durata e prestazioni di precisione. Nei test indipendenti condotti da Orange Photonics, l'innovativo design a denti micro-arrotondati ha dimostrato la più alta ritenzione di THC dopo la macinatura tra le diverse tipologie di grinder esaminate.",
      "Studiato per produrre una macinatura uniforme e ideale per la vaporizzazione, il G Pen Slim 3-Piece Grinder si abbina alla perfezione ai vaporizzatori per erbe secche G Pen Dash II e G Pen Dash+, per sfruttare al meglio ogni caricamento con una macinatura omogenea ed efficiente, ottimizzata per un vapore ricco di aroma.",
      "Progettato con intelligenza. Migliore a ogni giro."
     ]
    },
    "Dash II": {
      "description": "La nuova evoluzione del bestseller Dash: un vaporizzatore per erba secca tascabile, migliorato su tutta la linea con riscaldamento più rapido, flusso d'aria ottimizzato e controllo della temperatura più preciso.",
      "highlights": [
        "Vaporizzatore per erba secca tascabile",
        "Riscaldamento in 30 secondi",
        "Controllo preciso della temperatura",
        "Display OLED",
        "Camera in ceramica da 0,4g migliorata (caricamento più semplice)",
        "Pick Tool",
        "Batteria da 1.100mAh",
        "Ricarica pass-through USB-C (utilizzabile durante la ricarica)"
      ],
      "warranty": "Garanzia limitata di 6 mesi, estesa a 1 anno con la registrazione",
      "fullDescription": [
        "La nuova evoluzione del nostro vaporizzatore più venduto, il Dash: migliorato su tutta la linea e ora a soli $49.95.",
        "Il G Pen Dash II è un vaporizzatore per erba secca tascabile con controllo preciso della temperatura, display OLED e una camera in ceramica da 0,4g migliorata, progettata per prestazioni superiori e un caricamento più semplice. Alimentato da una batteria da 1.100mAh potenziata e a lunga durata, Dash II offre sessioni fluide e affidabili con riscaldamento in 30 secondi e ricarica pass-through USB-C.",
        "Più controllo. Caricamento più semplice. Prestazioni migliori."
      ],
      "box": {
        "contents": [
          "Vaporizzatore per erbe secche G Pen Dash II",
          "Strumento di caricamento integrato",
          "Copribocchino in silicone",
          "*Cavo di ricarica USB-C non incluso"
        ]
      }
    },
    "510 Original — Retro": {
      "description": "L'edizione Retro Collection della 510 Original unisce una raffinata finitura traslucida vintage alle stesse prestazioni ultraportatili con attivazione a tiro, ispirate alla batteria originale G Pen del 2012.",
      "highlights": [
        "Finitura retro traslucida",
        "Attivazione a tiro",
        "Tre voltaggi preimpostati (3.2 / 3.6 / 3.8V)",
        "Modalità preriscaldamento 1.8V per 10 secondi",
        "Batteria da 400mAh",
        "Ricarica pass-through USB-C (utilizzabile durante la ricarica)",
        "Display digitale",
        "24 × 21.1 × 56.7 mm"
      ],
      "warranty": "Garanzia limitata — consultare le condizioni",
      "fullDescription": [
        "Original. Upgraded. Retro.",
        "Un ritorno alle origini, con una raffinata finitura retro.",
        "La G Pen 510 Original della Retro Collection unisce un design trasparente nostalgico a una colorazione traslucida intensa e distintiva. Ispirata alla nostra primissima batteria 510 del 2012, questa edizione migliorata conserva la semplicità e l'affidabilità dell'originale, perfezionandola per le sessioni moderne, ovunque ci si trovi.",
        "Con soli 24 × 21.1 × 56.7 mm, la 510 Original è la batteria G Pen più piccola mai realizzata: talmente compatta da accompagnare ogni giornata senza il minimo ingombro. L'attivazione a tiro rende l'utilizzo semplice e senza pulsanti, mentre l'interfaccia a pulsante singolo consente di gestire tre voltaggi preimpostati (3.2/3.6/3.8V), una modalità di preriscaldamento da 1.8V per 10 secondi e il display digitale.",
        "Una batteria da 400 mAh con ricarica pass-through USB-C mantiene il dispositivo sempre pronto, anche mentre è collegato alla presa. Con il suo guscio retro traslucido e prestazioni 510 potenziate, questa batteria tascabile offre una perfetta sintesi di stile vintage e funzionalità quotidiana.",
        "Semplice. Affidabile. Iconica. L'originale è tornato.",
        "*Cartuccia 510 non inclusa",
        "**Caricatore USB-C non incluso"
      ],
      "box": {
        "contents": [
          "Batteria G Pen 510 Original",
          "*Caricatore USB C non incluso",
          "*Cartuccia 510 non inclusa"
        ]
      }
    },
    "Melt Hot Knife": {
      "description": "Il G Pen Melt è il più piccolo hot knife sul mercato: uno strumento da dab compatto con punta in ceramica per prelevare e dosare i concentrati in modo rapido, pulito e senza sbavature.",
      "highlights": [
        "Il più piccolo hot knife sul mercato",
        "Punta in ceramica a riscaldamento rapido",
        "Ricarica pass-through USB-C (utilizzabile durante la ricarica)",
        "Elegante corpo in alluminio",
        "Ultracompatto: 3.94 × 0.5 × 0.25 in",
        "Prelievi e dosaggi senza sbavature",
        "Ideale per tasca e kit da viaggio",
        "Compatibile con rig, Micro+, Hyer"
      ],
      "warranty": "Garanzia limitata — consultare le condizioni",
      "fullDescription": [
        "Ecco il nuovo G Pen Melt Hot Knife: il più piccolo hot knife sul mercato e il modo più rapido e pulito per preparare i propri concentrati. Con appena 3.94 pollici di altezza, 0.5 pollici di larghezza e 0.25 pollici di profondità, Melt è ultracompatto, ultraportatile e pensato per sparire in qualsiasi tasca o kit da viaggio.",
        "Progettato per prelievi senza sbavature e dosaggi fluidi e controllati, Melt rende semplicissime anche le situazioni più appiccicose. La punta in ceramica a riscaldamento rapido raggiunge subito la temperatura per trasferimenti sempre perfetti. Niente strumenti appiccicosi. Niente disastri con il reclaim. Nessuna incertezza.",
        "E ora, con la ricarica pass-through USB-C, si può continuare a usare Melt anche mentre è collegato alla presa: perché l'unica cosa peggiore di uno strumento da dab scarico è aspettare che si ricarichi.",
        "Con il suo elegante corpo in alluminio, la porta USB-C universale e l'inconfondibile silhouette G Pen, Melt diventa l'essenziale di ogni giorno: che si tratti di caricare un rig, ricaricare un G Pen Micro+ o preparare il proprio G Pen Hyer.",
        "Dimensioni ridotte. Grande potenza. Zero sbavature. Sempre pronto."
      ],
      "box": {
        "contents": [
          "G Pen Melt Hot Knife",
          "Cappuccio protettivo da viaggio",
          "*Cavo di ricarica USB C non incluso"
        ]
      }
    },
    "Connect": {
      "description": "Un vaporizzatore per concentrati senza torcia che trasforma qualsiasi water pipe con attacco vetro-vetro nel rig da dab definitivo, senza torcia né nail esposto.",
      "highlights": [
        "Riscaldamento in ceramica senza torcia — nessuna fiamma libera",
        "Riscaldamento in 5 secondi per vapore denso e immediato",
        "Include adattatori in vetro da 10mm, 14mm e 18mm",
        "Flusso d'aria inverso brevettato per una vaporizzazione uniforme",
        "Tre impostazioni di temperatura + modalità tiro prolungato"
      ],
      "warranty": "Garanzia limitata di 1 anno",
      "fullDescription": [
        "La migliore alternativa senza torcia ai rig tradizionali. Il G Pen Connect è un rivoluzionario vaporizzatore per concentrati da abbinare alle water pipe che elimina la necessità di torcia e nail esposto. Questo vaporizzatore per concentrati a riscaldamento rapido raggiunge la temperatura ottimale in cinque secondi, offrendo una qualità del vapore premium senza alcuna complicazione.",
        "Perché scegliere il G Pen Connect?",
        "Tecnologia senza torcia: un vaporizzatore da dab con riscaldamento in ceramica, sicuro e pratico – nessuna fiamma libera",
        "Riscaldamento in 5 secondi: attivazione rapida per una produzione di vapore immediata e ad alta densità",
        "Compatibilità universale: include adattatori in vetro da 10mm, 14mm e 18mm per qualsiasi water pipe con attacco vetro-vetro",
        "Flusso d'aria inverso brevettato: garantisce una vaporizzazione uniforme ed efficiente dei concentrati",
        "Tre impostazioni di temperatura: per personalizzare l'esperienza in base al tipo di concentrato e alle preferenze di gusto",
        "Modalità tiro prolungato: per sessioni più lunghe e più intense",
        "Potente batteria da 850 mAh: supporta più sessioni consecutive con ricarica pass-through",
        "Rilascio del carb a molla: controllo istantaneo del flusso d'aria per svuotare la camera senza sforzo",
        "Qualità costruttiva premium: alimentato da un elemento riscaldante in ceramica che preserva il sapore del concentrato e offre tiri fluidi e potenti in abbinamento alla propria water pipe preferita. L'aggancio magnetico a scatto garantisce un montaggio rapido e immediato, ogni volta.",
        "Portatile e pronto al viaggio: nonostante le prestazioni elevate, il G Pen Connect è abbastanza compatto da portare ovunque. Ogni kit include una custodia da viaggio in canapa per riporlo con facilità.",
        "Il kit completo include: dispositivo G Pen Connect, adattatori in vetro da 10mm/14mm/18mm, custodia da viaggio in canapa, cavo di ricarica USB e manuale d'uso.",
        "Pronti a fare l'upgrade dal rig tradizionale? Scoprite le collaborazioni in edizione limitata Cookies x G Pen Connect e Dr. Greenthumb's x G Pen Connect.",
        "Tecnologia brevettata:",
        "US 10,004,264 B2",
        "US 10,021,909 B2",
        "US 10,188,145 B2",
        "US 10,321,721 B2",
        "US 10,327,470 B2",
        "*Questo prodotto non è destinato all'uso con tabacco, e-liquid contenenti nicotina o qualsiasi nicotina sintetica o sostituto della nicotina.",
        "\"@context\": \"https://schema.org\","
      ]
    },
    "510 Original": {
      "description": "La batteria G Pen più piccola ed economica di sempre: la 510 Original reinterpreta la primissima batteria Grenco del 2012 con prestazioni moderne, ultraportatili e ad attivazione a tiro per cartucce 510.",
      "highlights": [
        "La batteria G Pen più piccola di sempre",
        "Attivazione a tiro — basta inspirare",
        "Tre voltaggi preimpostati (3.2 / 3.6 / 3.8V)",
        "Modalità preriscaldamento 1.8V per 10 secondi",
        "Batteria da 400mAh",
        "Ricarica pass-through USB-C (utilizzabile durante la ricarica)",
        "Display digitale",
        "24 × 21.1 × 56.7 mm"
      ],
      "warranty": "Garanzia limitata — consultare le condizioni",
      "fullDescription": [
        "Un ritorno alle origini, con qualcosa in più.",
        "La G Pen 510 Original chiude il cerchio: prende ispirazione dalla nostra primissima batteria del 2012 e la reinterpreta per l'oggi. È la batteria G Pen più piccola mai realizzata (24 × 21.1 × 56.7 mm), progettata per essere ultraportatile e semplicissima da usare, senza rinunce sul fronte delle prestazioni.",
        "Grazie all'attivazione a tiro, la 510 Original rende ogni sessione immediata: basta inspirare. Per un controllo ancora maggiore, l'interfaccia a pulsante singolo permette di scorrere tra tre voltaggi preimpostati (3.2/3.6/3.8V), attivare la modalità di preriscaldamento da 1.8V per 10 secondi e tenere tutto sotto controllo sul display digitale. Una batteria da 400 mAh abbinata alla ricarica pass-through USB-C consente di ricaricare e utilizzare il dispositivo allo stesso tempo, senza rallentamenti.",
        "A soli $12.95, è anche la batteria G Pen più conveniente di sempre: la prova che la tecnologia premium non deve per forza avere un prezzo premium.",
        "Semplice. Affidabile. Iconica. L'originale è tornato.",
        "*Cartuccia 510 non inclusa",
        "** Caricatore USB C non incluso"
      ],
      "box": {
        "contents": [
          "Batteria G Pen 510 Original",
          "*Caricatore USB C non incluso",
          "*Cartuccia 510 non inclusa"
        ]
      }
    },
    "Hydout": {
      "description": "Il G Pen Hydout è una batteria per cartucce 510 compatta e discreta, con copri-boccaglio magnetico nascosto, voltaggio regolabile e display LED per sessioni fluide, personalizzabili e sempre riservate.",
      "highlights": [
        "Copri-boccaglio magnetico nascosto",
        "5 impostazioni di calore (2.4V – 3.8V)",
        "Modalità preriscaldamento 1.8V",
        "Batteria ricaricabile da 400mAh",
        "Display LED luminoso",
        "Ricarica USB-C",
        "Compatibile con cartucce 510 fino a 2g",
        "90 × 37.5 × 18.5 mm"
      ],
      "warranty": "Garanzia limitata — consultare le condizioni",
      "fullDescription": [
        "Alla ricerca della migliore batteria per cartucce 510 per sessioni discrete ovunque ci si trovi? Ecco la G Pen Hydout 510 Cartridge Battery: una batteria compatta e nascosta per cartucce 510 che offre prestazioni di alto livello senza dare nell'occhio.",
        "Questo concentrato di potenza in formato tascabile è dotato di un copri-boccaglio magnetico nascosto che mantiene la cartuccia discreta e protetta dalla luce (sì, aiuta a preservare la qualità dell'olio), di una batteria da 400mAh, di voltaggio regolabile e di un display LED luminoso per il pieno controllo su ogni tiro. Compatibile con la maggior parte delle cartucce con filettatura 510 fino a 2g, Hydout è perfetta per sessioni fluide e personalizzabili, ovunque ci si trovi."
      ],
      "box": {
        "contents": [
          "1x Batteria per cartucce 510 G Pen Hydout",
          "1x Copribocchino magnetico",
          "Cartuccia 510 non inclusa",
          "Cavo di ricarica USB-C non incluso"
        ]
      }
    },
    "Hydout — Retro": {
      "description": "L'edizione Retro della G Pen Hydout porta una finitura traslucida trasparente di ispirazione anni '90 sulla batteria per cartucce 510 più discreta, aggiungendo l'attivazione a tiro al voltaggio variabile e alla ricarica USB-C.",
      "highlights": [
        "Finitura trasparente di ispirazione anni '90",
        "Attivazione a tiro",
        "Voltaggio variabile regolabile",
        "Modalità preriscaldamento 1.8V",
        "Batteria ricaricabile da 400mAh",
        "Ricarica pass-through USB-C (utilizzabile durante la ricarica)",
        "Compatibile con la maggior parte delle cartucce 510",
        "Copri-boccaglio magnetico nascosto"
      ],
      "warranty": "Garanzia limitata — consultare le condizioni",
      "fullDescription": [
        "La G Pen Hydout Retro unisce un'elegante finitura traslucida trasparente di ispirazione anni '90 all'ingegneria raffinata della batteria 510 più discreta di G Pen. Il suo guscio magnetico avvolge la cartuccia proteggendola dall'usura quotidiana e mantenendo il setup visivamente pulito ed essenziale.",
        "Progettata per la massima versatilità, la Hydout offre impostazioni di voltaggio variabile per un controllo del calore personalizzato e una funzione di preriscaldamento da 1.8V per scaldare i concentrati più densi prima dell'uso. Questa edizione Retro aggiunge inoltre l'attivazione a tiro, per tiri completamente privi di pulsanti, e la ricarica pass-through USB-C, che mantiene il dispositivo pronto all'uso anche mentre è collegato alla presa.",
        "Con la ricarica rapida USB-C, un alloggiamento per cartuccia aderente e privo di vibrazioni e la compatibilità con la maggior parte delle cartucce 510, la Hydout Retro offre prestazioni moderne sotto un guscio traslucido dal fascino nostalgico.",
        "*Cartuccia 510 non inclusa",
        "**Caricatore USB-C non incluso"
      ],
      "box": {
        "contents": [
          "Batteria con filettatura 510 G Pen Hydout",
          "Bocchino magnetico",
          "*Cavo di ricarica USB-C non incluso",
          "*Cartuccia 510 non inclusa"
        ]
      }
    },
    "Dash+": {
      "description": "Il G Pen Dash+ è un vaporizzatore portatile per erba secca di nuova generazione che utilizza un riscaldamento ibrido a convezione e conduzione in una camera in titanio per raggiungere la temperatura di vaporizzazione in circa 20 secondi.",
      "highlights": [
        "Riscaldamento ibrido a convezione + conduzione",
        "Camera di riscaldamento in titanio",
        "Riscaldamento in ~20 secondi",
        "Batteria ricaricabile Li-ion da 1.800mAh",
        "Ricarica USB-C",
        "Display LED a colori",
        "Feedback aptico, interfaccia a 3 pulsanti",
        "Scocca in lega di zinco"
      ],
      "warranty": "Garanzia limitata — consultare le condizioni",
      "fullDescription": [
        "Il G Pen Dash+ è un vaporizzatore compatto per erba secca progettato per sessioni rapide, ricche di sapore e personalizzabili. Grazie al riscaldamento ibrido a convezione e conduzione in una camera interamente in titanio, raggiunge la temperatura in appena 20 secondi per un vapore fluido e costante.",
        "I doppi canali di aspirazione dell'aria pulita e il boccaglio magnetico con percorso d'aria a spirale in ceramica massimizzano il flusso d'aria e il sapore. Il display LED a colori, i comandi a tre pulsanti, il feedback aptico e la regolazione precisa della temperatura rendono semplice personalizzare ogni sessione.",
        "Realizzato con un corpo resistente in lega di zinco e alimentato da una batteria ricaricabile da 1.800mAh con ricarica USB-C, il G Pen Dash+ offre prestazioni affidabili in un design elegante e portatile, pensato per l'uso quotidiano.",
        "*Questo prodotto non è destinato all'uso con tabacco, e-liquid contenenti nicotina o qualsiasi nicotina sintetica o sostituto della nicotina."
      ],
      "box": {
        "contents": [
          "Vaporizzatore Dash+",
          "Guaina in silicone per bocchino Dash+",
          "Strumento di caricamento con portachiavi",
          "Cavo di ricarica USB-C"
        ]
      }
    },
    "Hyer": {
      "description": "Un e-nail portatile a doppio uso per concentrati o erba secca, da abbinare a qualsiasi water pipe con attacco vetro-vetro, costruito attorno a un elemento riscaldante interamente in quarzo.",
      "highlights": [
        "Doppio uso: concentrati o erba secca",
        "Elemento riscaldante interamente in quarzo",
        "Si abbina a qualsiasi pezzo con attacco vetro-vetro",
        "Design e-nail portatile"
      ],
      "warranty": "Garanzia limitata di 2 anni",
      "fullDescription": [
        "Il G Pen Hyer®️ è un e-nail portatile a doppio uso, dal design intuitivo, che funziona con concentrati o erba secca e si abbina a qualsiasi water pipe con attacco vetro-vetro. Realizzato con materiali della massima qualità, tra cui un elemento riscaldante interamente in quarzo, il G Pen Hyer integra una tecnologia di riscaldamento intelligente con temperatura costante in uscita, per offrire sapore e produzione di vapore ai vertici della categoria.",
        "Dotato di una batteria ricaricabile agli ioni di litio da 6.000mAh con ricarica rapida pass-through via USB-C, in una scocca leggera e resistente in alluminio anodizzato, il G Pen Hyer ridefinisce i limiti di potenza e portabilità. Grazie a un semplice funzionamento a tre pulsanti e a un'interfaccia utente a cinque LED, il G Pen Hyer consente configurazione e attivazione immediate, offrendo al contempo un'esperienza senza compromessi.",
        "Un cavo di alimentazione intrecciato premium con resistenti attacchi magnetici a scatto collega la batteria a un alloggiamento leggero in alluminio anodizzato, nel quale il G Pen Hyer Quartz Tank per concentrati o il Dry Herb Tank* possono essere avvitati e rimossi con facilità. Il Concentrates Tank è riscaldato da un elemento riscaldante in acciaio inox stampato su misura e presenta una camera interamente in quarzo con up-stem interno che garantisce la massima superficie di riscaldamento, un flusso d'aria efficiente e una vaporizzazione ottimale dei concentrati.",
        "L'elemento finale che completa le prestazioni superiori del G Pen Hyer Quartz Tank per concentrati è il Concentrates Tank Cap: ad aggancio magnetico e realizzato in alluminio anodizzato con rivestimento interno in ceramica e doppio foro per il flusso d'aria, per una funzionalità rotativa fluida. L'utensile per la cera in acciaio inox incluso può inoltre essere fissato sulla parte superiore o laterale del tank cap per averlo sempre a portata di mano.",
        "Ogni kit G Pen Hyer Vaporizer include un adattatore in vetro maschio da 14mm (adattatori in vetro da 10mm e 18mm venduti separatamente). Tutti i componenti del kit sono ordinatamente riposti in una custodia da viaggio in canapa inclusa, con tasca in rete per accessori aggiuntivi.",
        "*G Pen Hyer Dry Herb Tank venduto separatamente.",
        "﻿*L'indice di durabilità del G Pen Hyer Quartz Tank prevede un minimo di 200 cicli di alimentazione. Si consiglia di sostituire il tank una volta raggiunto tale numero di cicli per prestazioni ottimali.",
        "*Questo prodotto non è destinato all'uso con tabacco, e-liquid contenenti nicotina o qualsiasi nicotina sintetica o sostituto della nicotina."
      ]
    },
    "Roam": {
      "description": "Un e-rig portatile all-in-one che offre la vaporizzazione di concentrati con filtrazione ad acqua ovunque ci si trovi, con hydrotube in vetro borosilicato antirovesciamento e tank interamente in quarzo.",
      "highlights": [
        "Filtrazione ad acqua integrata in vetro borosilicato",
        "Tank interamente in quarzo",
        "Potente batteria da 1.300mAh",
        "E-rig all-in-one autonomo"
      ],
      "warranty": "Garanzia limitata di 1 anno",
      "fullDescription": [
        "Ecco il G Pen Roam, un vaporizzatore portatile all-in-one dal design intuitivo, pensato per offrire la vaporizzazione di concentrati con filtrazione ad acqua ovunque ci si trovi. Grazie all'hydrotube in vetro borosilicato autonomo e antirovesciamento, al tank interamente in quarzo e alla potente batteria agli ioni di litio da 1.300mAh, il G Pen Roam raggiunge la temperatura in pochi secondi dall'attivazione per offrire tiri fluidi e ricchi di sapore, senza sforzo.",
        "Il G Pen Roam si adatta alle preferenze di sapore e calore di ciascun utente grazie al controllo digitale della temperatura e al display LED, con un intervallo da 400° a 800°+F (204° - 427°+C), oltre a una funzione di feedback aptico che segnala quando il dispositivo è pronto all'uso. Progettato con particolare attenzione alla portabilità discreta, il Roam è racchiuso in un guscio leggero ma resistente in lega di alluminio che protegge integralmente il tank in quarzo e il tubo dell'acqua in vetro. La tecnologia pass-through consente di utilizzare il dispositivo mentre è collegato alla presa, e tutte le parti a contatto con il percorso del vapore possono essere smontate e pulite con facilità.",
        "Ogni kit completo G Pen Roam viene fornito di serie in una custodia da viaggio in canapa, con spazio per due barattoli di concentrati e una tasca per gli accessori, tra cui un cavo di ricarica micro USB e il G Pen Tool per il caricamento dei concentrati.",
        "*Questo prodotto non è destinato all'uso con tabacco, e-liquid contenenti nicotina o qualsiasi nicotina sintetica o sostituto della nicotina."
      ]
    },
    "Dash": {
      "description": "Il G Pen Dash originale: un vaporizzatore per erba secca compatto e leggero, progettato per sessioni semplici ovunque ci si trovi.",
      "highlights": [
        "Vaporizzatore per erba secca compatto",
        "Semplice funzionamento a un pulsante",
        "Design tascabile"
      ],
      "warranty": "Garanzia limitata di 2 anni"
    },
    "Elite II": {
      "description": "Un vaporizzatore premium per erba secca a convezione totale, che offre sapore puro e vapore denso con un controllo preciso della temperatura.",
      "highlights": [
        "Riscaldamento a convezione totale",
        "Controllo preciso della temperatura",
        "Camera in ceramica ad ampia capacità"
      ],
      "warranty": "Garanzia limitata di 2 anni"
    }
  }
};
