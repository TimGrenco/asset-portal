/* =============================================================================
   POLISH (pl) LANGUAGE PACK
   -----------------------------------------------------------------------------
   Loaded on demand — only when a visitor selects this language, so English
   visitors download none of it. Editing this file is the ONLY thing needed to
   revise the Polish; no code changes.

     ui        UI chrome, keyed by the ENGLISH source string. A missing key
               simply falls back to English. "<key>|one" / "<key>|few" are
               count forms picked by Intl.PluralRules (see trn() in app.js).
     products  Product prose: description / highlights / warranty /
               fullDescription / box / specs. Array lengths must match the
               English, or that field stays in English.
   VOICE  Plain imperatives ("Pobierz", "Wybierz"), as in most Polish software.
          "Assets" = materiały, files = pliki, POP display = ekspozytor POP,
          MSRP = Sugerowana cena. Quotes „…”.
   COUNTS Polish has three count forms: "1 plik", "2 pliki", "5 plików". The plain
          key holds the "many" form (0, 5–21, 25…); "|few" (2–4, 22–24…) and
          "|one" are picked by trn(). Strings with {n} use "Pliki: {n}" phrasing
          so they read right for any count.
   RULES
   - Product names, brand names, SKUs, UPCs, filenames, units and prices are
     never translated.
   - Keep inline <strong> tags balanced, and keep {placeholder} tokens intact.
   ========================================================================== */
window.PORTAL_I18N = window.PORTAL_I18N || {};
window.PORTAL_I18N.pl = {
  "ui": {
    "N/A": "b.d.",
    "Back to home": "Powrót do strony głównej",
    "Select language": "Wybierz język",
    "Clear search": "Wyczyść wyszukiwanie",
    "Previous": "Poprzedni",
    "Scroll to top": "Przewiń na górę",
    "Grid view": "Widok siatki",
    "List view": "Widok listy",
    "Layout": "Układ",
    "Sort products": "Sortuj produkty",
    "Select {name}": "Zaznacz {name}",
    "Play {name}": "Odtwórz {name}",
    "Enlarge {name}": "Powiększ {name}",
    "Copy link to {name}": "Kopiuj link do {name}",
    "Download {name}": "Pobierz {name}",
    "Watch {name}": "Obejrzyj {name}",
    "Watch on YouTube": "Obejrzyj w YouTube",
    "Share on YouTube": "Udostępnij w YouTube",
    "Close": "Zamknij",
    "Video player": "Odtwarzacz wideo",
    "Asset preview": "Podgląd materiału",
    "Zoom in": "Powiększ",
    "Fit to screen": "Dopasuj do ekranu",
    "Viewer unavailable — downloading instead": "Podgląd niedostępny — trwa pobieranie",
    "Couldn’t open the catalog — downloading instead": "Nie udało się otworzyć katalogu — trwa pobieranie",
    "Filter results by type": "Filtruj wyniki według typu",
    "asset": "materiał",
    "video": "film",
    "Photos": "Zdjęcia",
    "Lifestyle": "Lifestyle",
    "Videos": "Filmy",
    "In-store": "W sklepie",
    "View": "Zobacz",
    "{n} colors": "Kolory: {n}",
    "Copied link to {folder}": "Skopiowano link do folderu {folder}",
    "Concentrate Accessories": "Akcesoria do koncentratów",
    "Dry Herb Accessories": "Akcesoria do suszu",
    "Dry-herb devices & accessories": "Urządzenia i akcesoria do suszu",
    "Grinder": "Młynek",
    "This folder has {n} files. Downloading them one at a time can take several minutes and your browser may block it. Open the full Dropbox download instead?": "Liczba plików w tym folderze: {n}. Pobieranie ich po kolei może potrwać kilka minut, a przeglądarka może je zablokować. Otworzyć zamiast tego pełne pobieranie z Dropboxa?",
    "{n} downloads starting — allow multiple if your browser asks, or use “Download all”.": "Rozpoczynanie pobierania (plików: {n}) — zezwól na pobranie wielu plików, jeśli przeglądarka o to zapyta, lub użyj opcji „Pobierz wszystko”.",
    "Add your store name, mailing address and email so we can ship your order": "Podaj nazwę sklepu, adres do wysyłki i e-mail, abyśmy mogli wysłać zamówienie",
    "Enter a valid email address": "Wpisz prawidłowy adres e-mail",
    "Add your name and email so we can reply": "Podaj imię i nazwisko oraz e-mail, abyśmy mogli odpowiedzieć",
    "Click a video to watch it, and download it or open it on YouTube where available.": "Kliknij film, aby go obejrzeć, a następnie pobierz go lub otwórz w YouTube, jeśli jest dostępny.",
    "document": "dokument",
    "documents": "dokumentów",
    "item": "pozycja",
    "items": "pozycji",
    "These assets are provided for approved partner, press, and retail use. Please don't alter logos or product imagery. Need something specific or a different format? Use “Request an asset.”": "Te materiały są udostępniane zatwierdzonym partnerom, prasie i sprzedawcom. Nie zmieniaj logo ani zdjęć produktów. Potrzebujesz czegoś konkretnego lub innego formatu? Użyj opcji „Poproś o materiał”.",
    "Brand Documents": "Dokumenty marki",
    "Dry Herb Vaporizer": "Waporyzator do suszu",
    "510 Cartridge Battery": "Bateria do kartridży 510",
    "Electric Hot Knife": "Elektryczny hot knife",
    "Concentrate Vaporizer": "Waporyzator do koncentratów",
    "Take the course on G Pen Training — watch the videos, learn the product and pass a short quiz to get certified.": "Ukończ kurs w G Pen Training — obejrzyj filmy, poznaj produkt i zalicz krótki quiz, aby zdobyć certyfikat.",
    "Start training": "Rozpocznij szkolenie",
    "Opens G Pen Training in a new tab": "Otwiera G Pen Training w nowej karcie",
    "How to Use: G Pen Dash II": "Jak używać: G Pen Dash II",
    "How to Use: G Pen 510 Original": "Jak używać: G Pen 510 Original",
    "How to Use: G Pen Hydout": "Jak używać: G Pen Hydout",
    "How to Use: G Pen Dash+": "Jak używać: G Pen Dash+",
    "How to Use: G Pen Micro+": "Jak używać: G Pen Micro+",
    "How to Clean: Dash II": "Jak czyścić: Dash II",
    "How to Clean: G Pen 510 Original": "Jak czyścić: G Pen 510 Original",
    "How to Clean: G Pen Hydout": "Jak czyścić: G Pen Hydout",
    "How to Clean: G Pen Dash+": "Jak czyścić: G Pen Dash+",
    "How to Clean: G Pen Micro+": "Jak czyścić: G Pen Micro+",
    "How to Use: G Pen Melt": "Jak używać: G Pen Melt",
    "How to Clean: G Pen Melt": "Jak czyścić: G Pen Melt",
    "G Pen Connect + Your Favorite Glass": "G Pen Connect + Twoje ulubione szkło",
    "Connect to Favorite Glass": "Podłącz do ulubionego szkła",
    "How To Use Your G Pen Elite II": "Jak używać G Pen Elite II",
    "Using the Elite II": "Korzystanie z Elite II",
    "Products we no longer sell — assets kept here for partners who still need them.": "Produkty, których już nie sprzedajemy — materiały pozostają tu dla partnerów, którzy wciąż ich potrzebują.",
    "Placeholder guide — the official {brand} brand guide will replace this. Colors, type, and logos below reflect current brand usage.": "Tymczasowy przewodnik — zastąpi go oficjalny przewodnik marki {brand}. Kolory, typografia i logo poniżej odpowiadają obecnemu sposobowi używania marki.",
    "No assets match your filters.": "Żadne materiały nie pasują do filtrów.",
    "Request one →": "Poproś o materiał →",
    "{n} more coming from Dropbox": "Kolejne z Dropboxa w drodze: {n}",
    "With vape holder": "Z uchwytem na vape",
    "2.5\" L × 2.5\" W · 25 notes per pad": "2.5\" L × 2.5\" W · 25 karteczek w bloczku",
    "3ft Circular": "Okrągły, 3 ft",
    "How to Use: G Pen Micro II": "Jak używać: G Pen Micro II",
    "How to Clean: G Pen Micro II": "Jak czyścić: G Pen Micro II",
    "How to Use: G Pen Micro II Sidecar": "Jak używać: G Pen Micro II Sidecar",
    "How to Use: G Pen Micro II Rig Adapter": "Jak używać: G Pen Micro II Rig Adapter",
    "Become a {name} Product Specialist": "Zostań specjalistą od produktu {name}",
    "Your Name": "Imię i nazwisko",
    "Full name": "Imię i nazwisko",
    "Product Name": "Nazwa produktu",
    "Product SKU": "SKU produktu",
    "Product UPC": "UPC produktu",
    "Retail POP Display SKU": "SKU ekspozytora POP",
    "Retail POP Display UPC": "UPC ekspozytora POP",
    "Product Dimensions": "Wymiary produktu",
    "Unit Weight": "Waga sztuki",
    "Ships In Retail POP Display": "Wysyłany w ekspozytorze POP",
    "Units Per POP Display": "Sztuk w ekspozytorze POP",
    "Units Per Master Case": "Sztuk w kartonie zbiorczym",
    "Case Weight": "Waga kartonu",
    "Case Dimensions": "Wymiary kartonu",
    "HTS (Harmonized Tariff Schedule) Code": "Kod HTS (Harmonized Tariff Schedule)",
    "Dry Herb Vape": "Vape do suszu",
    "510 Battery": "Bateria 510",
    "Concentrate Hot Knife": "Hot knife do koncentratów",
    "Dry Herb": "Susz",
    "Accessory": "Akcesorium",
    "E-Nail": "E-Nail",
    "E-Rig": "E-Rig",
    "Brand": "Marka",
    "Product photos": "Zdjęcia produktu",
    "Lifestyle Photos": "Zdjęcia lifestyle'owe",
    "Social Videos": "Filmy do mediów społecznościowych",
    "TV Screen Videos": "Filmy na ekrany TV",
    "Documents": "Dokumenty",
    "Product Photos": "Zdjęcia produktu",
    "Web Banners": "Banery internetowe",
    "E-Comm Render Photos": "Rendery do e-commerce",
    "Misc": "Różne",
    "Our customer service team has been with us since day one — with over 15 years of hands-on experience with our devices. They know these products inside and out, and they’d be happy to walk you through anything or go over any additional questions you might have. We love to chat all things cannabis and vaporizers with you.": "Nasz zespół obsługi klienta jest z nami od pierwszego dnia — ma ponad 15 lat praktycznego doświadczenia z naszymi urządzeniami. Zna te produkty od podszewki i chętnie przeprowadzi Cię przez każdy krok lub odpowie na dodatkowe pytania. Uwielbiamy rozmawiać o wszystkim, co dotyczy konopi i waporyzatorów.",
    "(optional)": "(opcjonalnie)",
    "123 Main St, City, State ZIP": "ul. Główna 1, 00-001 Miasto",
    "Add each store you'd like listed on our official locator, then send your request. Have more than one location? Use <strong>Add another store</strong> to include them all.": "Dodaj każdy sklep, który ma się pojawić w naszej oficjalnej wyszukiwarce sklepów, a następnie wyślij prośbę. Masz więcej niż jedną lokalizację? Użyj opcji <strong>Dodaj kolejny sklep</strong>, aby uwzględnić wszystkie.",
    "Additional Products": "Pozostałe produkty",
    "Address": "Adres",
    "All": "Wszystkie",
    "Assets": "Materiały",
    "Browse all {n} logo files →": "Przeglądaj wszystkie pliki z logo ({n}) →",
    "Carry G Pen? Request to be added to our official store locator so customers can find your shop.": "Sprzedajesz G Pen? Poproś o dodanie do naszej oficjalnej wyszukiwarki sklepów, aby klienci mogli Cię znaleźć.",
    "Clear": "Wyczyść",
    "Click a preview to enlarge it.": "Kliknij podgląd, aby go powiększyć.",
    "Click preview to enlarge": "Kliknij, aby powiększyć",
    "Close viewer": "Zamknij podgląd",
    "Contact us": "Kontakt",
    "Decrease": "Zmniejsz",
    "Downloaded": "Pobrano",
    "Downloading {n} files…": "Pobieranie plików: {n}…",
    "Email Address": "Adres e-mail",
    "Enlarge": "Powiększ",
    "Fields shown as <strong>—</strong> are still to be confirmed.": "Pola oznaczone jako <strong>—</strong> czekają jeszcze na potwierdzenie.",
    "Formats": "Formaty",
    "Increase": "Zwiększ",
    "Loading catalog…": "Wczytywanie katalogu…",
    "Mailing Address": "Adres do wysyłki",
    "New": "Nowość",
    "Next": "Dalej",
    "No": "Nie",
    "No matches for": "Brak wyników dla",
    "Official {brand} logos — black, white &amp; various versions. For approved partner, press &amp; retail use; please don’t alter, recolor, or distort the marks.": "Oficjalne logo {brand} — czarne, białe i w innych wersjach. Do użytku zatwierdzonych partnerów, prasy i sprzedawców; nie zmieniaj, nie przebarwiaj ani nie zniekształcaj znaków.",
    "Open": "Otwórz",
    "Order Marketing Materials": "Zamów materiały marketingowe",
    "Order Materials": "Zamów materiały",
    "Orderable in-store marketing materials will be listed here soon. In the meantime, reach out and we’ll let you know what’s available.": "Wkrótce pojawią się tu materiały marketingowe do sklepu, które można zamówić. Do tego czasu skontaktuj się z nami, a powiemy Ci, co jest dostępne.",
    "Phone": "Telefon",
    "Popular searches": "Popularne wyszukiwania",
    "Preparing {n} files as a .zip…": "Przygotowywanie archiwum .zip (plików: {n})…",
    "Press <kbd>/</kbd> to search from anywhere · <kbd>Enter</kbd> opens the top result": "Naciśnij <kbd>/</kbd>, aby wyszukiwać z dowolnego miejsca · <kbd>Enter</kbd> otwiera pierwszy wynik",
    "Quantity for": "Ilość:",
    "Remove this store": "Usuń ten sklep",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} will show here as they’re added — order what you need for your shop.": "Ekspozytory, plakaty, wobblery i inne materiały do sklepu dla {brand} będą pojawiać się tutaj na bieżąco — zamów to, czego potrzebuje Twój sklep.",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} — order what you need for your shop.": "Ekspozytory, plakaty, wobblery i inne materiały do sklepu dla {brand} — zamów to, czego potrzebuje Twój sklep.",
    "Retailers": "Sprzedawcy",
    "Select all": "Zaznacz wszystko",
    "Set a quantity for each item, add your store details, then send your request.": "Ustaw ilość dla każdej pozycji, dodaj dane sklepu i wyślij prośbę.",
    "Showing the top {n} of {total} files — add a word to narrow it down.": "Najlepsze wyniki: {n} z {total} plików — dodaj słowo, aby zawęzić wyszukiwanie.",
    "Store": "Sklep",
    "Store Name": "Nazwa sklepu",
    "Store name": "Nazwa sklepu",
    "Street, City, State, ZIP": "Ulica, kod pocztowy, miasto",
    "Submit Request": "Wyślij prośbę",
    "Try a product name (Dash), a file type (PNG, MP4), a category (lifestyle, packaging), or “catalog”.": "Wpisz nazwę produktu (Dash), typ pliku (PNG, MP4), kategorię (lifestyle, opakowanie) lub „katalog”.",
    "View all →": "Zobacz wszystkie →",
    "Website": "Strona internetowa",
    "Yes": "Tak",
    "Your contact info": "Dane kontaktowe",
    "Your details": "Twoje dane",
    "You’ll confirm and send from your email app.": "Potwierdzisz i wyślesz wiadomość w swojej aplikacji pocztowej.",
    "assets": "materiałów",
    "available": "dostępnych",
    "colorways": "wariantów kolorystycznych",
    "files": "plików",
    "file": "plik",
    "logo files": "plików z logo",
    "selected": "zaznaczonych",
    "stores": "sklepów",
    "material": "materiał",
    "materials": "materiałów",
    "{n} older {brand} products we no longer sell — assets kept for partners who still need them.": "Starsze produkty {brand}, których już nie sprzedajemy ({n}) — materiały pozostają dla partnerów, którzy wciąż ich potrzebują.",
    "Click to watch": "Kliknij, aby obejrzeć",
    "Description copied": "Skopiowano opis",
    "Copy": "Kopiuj",
    "product": "produkt",
    "products": "produktów",
    "result": "wynik",
    "results": "wyników",
    "510 Batteries": "Baterie 510",
    "510-thread cartridge batteries": "Baterie do kartridży z gwintem 510",
    "Dry Herb Vaporizers": "Waporyzatory do suszu",
    "Portable dry-herb devices": "Przenośne urządzenia do suszu",
    "Concentrate": "Koncentraty",
    "Concentrate tools & accessories": "Narzędzia i akcesoria do koncentratów",
    "More products": "Więcej produktów",
    "Catalogs & Brand Documents": "Katalogi i dokumenty marki",
    "Logos & assets": "Logo i materiały",
    "Official Brand & Product Assets": "Oficjalne materiały marki i produktów",
    "Wholesale & press asset requests welcome. Assets update as new products launch.": "Zapraszamy hurtowników i prasę do zgłaszania próśb o materiały. Materiały są aktualizowane wraz z premierami nowych produktów.",
    "Catalogs": "Katalogi",
    "Logos &amp; assets": "Logo i materiały",
    "Request an asset": "Poproś o materiał",
    "Request an asset →": "Poproś o materiał →",
    "Official Brand &amp; Product Assets": "Oficjalne materiały marki i produktów",
    "Everything you need, in one place.": "Wszystko, czego potrzebujesz, w jednym miejscu.",
    "Search products, files, formats…": "Szukaj produktów, plików, formatów…",
    "Search all assets": "Przeszukaj wszystkie materiały",
    "Featured": "Polecane",
    "Logos and Brand Assets": "Logo i materiały marki",
    "Catalogs &amp; Brand Documents": "Katalogi i dokumenty marki",
    "Questions about a product?": "Masz pytania o produkt?",
    "Talk to our team.": "Porozmawiaj z naszym zespołem.",
    "Mon–Fri · 10:00 AM – 6:00 PM EST": "Pon.–pt. · 10:00–18:00 EST",
    "Wholesale &amp; press asset requests welcome. Assets update as new products launch.": "Zapraszamy hurtowników i prasę do zgłaszania próśb o materiały. Materiały są aktualizowane wraz z premierami nowych produktów.",
    "Browse G Pen by category": "Przeglądaj G Pen według kategorii",
    "Search results": "Wyniki wyszukiwania",
    "Follow G Pen On Socials": "Obserwuj G Pen w mediach społecznościowych",
    "Official accounts": "Oficjalne konta",
    " Copy link": " Kopiuj link",
    " Download": " Pobierz",
    "Add another store": "Dodaj kolejny sklep",
    "Add at least one store's details first": "Najpierw dodaj dane co najmniej jednego sklepu",
    "At least one store is required": "Wymagany jest co najmniej jeden sklep",
    "Back to library": "Powrót do biblioteki",
    "Brand &amp; Style Guide": "Przewodnik po marce i stylu",
    "Catalog not found": "Nie znaleziono katalogu",
    "Collection Colorways": "Warianty kolorystyczne kolekcji",
    "Colors": "Kolory",
    "Connect storage to enable downloads": "Połącz magazyn, aby włączyć pobieranie",
    "Copy failed": "Nie udało się skopiować",
    "Copy folder link": "Kopiuj link do folderu",
    "Copy link": "Kopiuj link",
    "Couldn’t build the zip": "Nie udało się utworzyć pliku zip",
    "Couldn’t load the zipper — try again": "Nie udało się wczytać narzędzia zip — spróbuj ponownie",
    "Couldn’t render that page": "Nie udało się wyświetlić tej strony",
    "Document coming soon": "Dokument wkrótce",
    "Download": "Pobierz",
    "Download PDF": "Pobierz PDF",
    "Download all": "Pobierz wszystko",
    "Download all logos": "Pobierz wszystkie logo",
    "Photo / Video Assets": "Materiały foto i wideo",
    "Sales Assets": "Materiały sprzedażowe",
    "Other": "Inne",
    "User Generated Content": "Treści tworzone przez użytkowników",
    "One Sheet": "Karta produktu",
    "Region": "Region",
    "Download coming soon": "Pobieranie wkrótce",
    "Download folder": "Pobierz folder",
    "Download logo files": "Pobierz pliki z logo",
    "Download logos": "Pobierz logo",
    "Download selected": "Pobierz zaznaczone",
    "Download video": "Pobierz film",
    "Downloadable file coming soon — Dropbox link on the way": "Plik do pobrania wkrótce — link do Dropboxa w drodze",
    "Get your store on our Store Locator": "Dodaj swój sklep do naszej wyszukiwarki sklepów",
    "Highlights": "Najważniejsze cechy",
    "How to use videos": "Filmy instruktażowe",
    "In-Store Marketing Materials": "Materiały marketingowe do sklepu",
    "Logos": "Logo",
    "Matching files &amp; assets": "Pasujące pliki i materiały",
    "No link yet": "Brak linku",
    "No shareable link for this folder yet": "Ten folder nie ma jeszcze linku do udostępnienia",
    "Official Product Description": "Oficjalny opis produktu",
    "Opening Dropbox download…": "Otwieranie pobierania z Dropboxa…",
    "Order materials": "Zamów materiały",
    "Packaging": "Opakowanie",
    "Prev": "Poprz.",
    "This video can't be played in the browser.": "Tego filmu nie można odtworzyć w przeglądarce.",
    "Use Download below to save it": "Użyj przycisku Pobierz poniżej, aby go zapisać",
    "Technical specifications": "Specyfikacja techniczna",
    "Product FAQs": "Najczęstsze pytania o produkt",
    "Product Manual": "Instrukcja obsługi",
    "Remove": "Usuń",
    "Request materials": "Poproś o materiały",
    "Request this asset": "Poproś o ten materiał",
    "Request to be listed": "Poproś o dodanie",
    "SKU details": "Szczegóły SKU",
    "Select at least one asset first": "Najpierw zaznacz co najmniej jeden materiał",
    "Set a quantity for at least one item first": "Najpierw ustaw ilość dla co najmniej jednej pozycji",
    "Share": "Udostępnij",
    "Store Locator Request": "Prośba o dodanie do wyszukiwarki sklepów",
    "Typography": "Typografia",
    "Use “Download all” to get these from Dropbox": "Użyj opcji „Pobierz wszystko”, aby pobrać je z Dropboxa",
    "View on site": "Zobacz na stronie",
    "Viewer is taking too long — downloading instead": "Podgląd wczytuje się zbyt długo — trwa pobieranie",
    "Watch": "Obejrzyj",
    "What’s In the Box?": "Co jest w zestawie?",
    "YouTube": "YouTube",
    "Assets are coming soon — check back shortly.": "Materiały pojawią się wkrótce — zajrzyj tu ponownie za jakiś czas.",
    "B2B Resources": "Zasoby B2B",
    "Blue": "Niebieski",
    "Body": "Tekst główny",
    "Catalog": "Katalog",
    "Catalog link copied": "Skopiowano link do katalogu",
    "Clear all": "Wyczyść wszystko",
    "Display / Headlines": "Display / nagłówki",
    "Green": "Zielony",
    "How-to video": "Film instruktażowy",
    "In-store marketing": "Marketing w sklepie",
    "Link copied": "Skopiowano link",
    "MSRP": "Sugerowana cena",
    "Master carton": "Karton zbiorczy",
    "Open in": "Otwórz w",
    "Pink": "Różowy",
    "Purple": "Fioletowy",
    "Red": "Czerwony",
    "Regional Catalogs": "Katalogi regionalne",
    "Retail POP display": "Ekspozytor POP",
    "Share view": "Udostępnij widok",
    "Ships in POP display": "Wysyłany w ekspozytorze POP",
    "Ships in a retail-ready POP display — one retail box shown per colorway. See SKU details for inner-pack &amp; master-carton quantities.": "Wysyłany w gotowym do sprzedaży ekspozytorze POP — na zdjęciu jedno opakowanie detaliczne na każdy wariant kolorystyczny. Ilości w opakowaniu wewnętrznym i kartonie zbiorczym znajdziesz w szczegółach SKU.",
    "Ships in a retail-ready POP display — see SKU details for inner-pack &amp; master-carton quantities.": "Wysyłany w gotowym do sprzedaży ekspozytorze POP — ilości w opakowaniu wewnętrznym i kartonie zbiorczym znajdziesz w szczegółach SKU.",
    "Ships in single retail boxes — no POP display. See SKU details for master-carton quantities.": "Wysyłany w pojedynczych opakowaniach detalicznych — bez ekspozytora POP. Ilości w kartonie zbiorczym znajdziesz w szczegółach SKU.",
    "Single Retail Packaging": "Pojedyncze opakowanie detaliczne",
    "View link copied": "Skopiowano link do widoku",
    "View {brand} assets": "Zobacz materiały {brand}",
    "Warranty": "Gwarancja",
    "What’s in the box": "Zawartość zestawu",
    "tap to copy": "dotknij, aby skopiować",
    "updated": "aktualizacja:",
    "videos": "filmów",
    "{brand} specific in-store materials.": "Materiały do sklepu przeznaczone dla {brand}.",
    "{n}-Pack Retail POP Display": "Ekspozytor POP na {n} szt.",
    "SKU": "SKU",
    "Order": "Zamów",
    "Order marketing materials": "Zamów materiały marketingowe",
    "Printed in-store materials (posters, shelf talkers, displays) for this product will appear here as they’re added.": "Drukowane materiały do sklepu (plakaty, wobblery, ekspozytory) dla tego produktu będą pojawiać się tutaj na bieżąco.",
    "Training": "Szkolenie",
    "Additional G Pen Products": "Pozostałe produkty G Pen",
    "assets|one": "materiał",
    "assets|few": "materiały",
    "files|one": "plik",
    "files|few": "pliki",
    "videos|few": "filmy",
    "documents|few": "dokumenty",
    "items|few": "pozycje",
    "materials|few": "materiały",
    "products|few": "produkty",
    "results|few": "wyniki",
    "logo files|one": "plik z logo",
    "logo files|few": "pliki z logo",
    "stores|few": "sklepy",
    "colorways|few": "warianty kolorystyczne",
    "selected|one": "zaznaczony",
    "selected|few": "zaznaczone",
    "available|one": "dostępny",
    "available|few": "dostępne"
  },
  "products": {
    "Micro II": {
      "description": "Kompaktowy waporyzator do koncentratów z trzema ustawieniami temperatury, regulowanym przepływem powietrza, wyświetlaczem cyfrowym, ceramicznym grzaniem i nawet 120 sesjami na jednym ładowaniu.",
      "highlights": [
        "Trzy ustawienia temperatury — LOW ~295°F, MEDIUM ~340°F, HIGH ~395°F",
        "Nagrzewanie w 5 sekund",
        "Session Mode (20 s) + grzanie ręczne (do 25 s)",
        "Regulowany przepływ powietrza — od otwartego do ograniczonego",
        "Ceramiczny atomizer 0,8 Ω",
        "Wyświetlacz cyfrowy — temperatura, stan grzania, bateria",
        "Wibracja po osiągnięciu temperatury",
        "Bateria 1250 mAh — do 120 sesji na jednym ładowaniu",
        "Szybkie ładowanie USB-C — poniżej 60 minut",
        "Ładowanie przelotowe (pass-through)",
        "Automatyczne wyłączenie po 10 minutach",
        "Korpus z anodowanego aluminium",
        "Kompatybilny z Sidecar i 14 mm Rig Adapter (sprzedawane osobno)",
        "Prosta obsługa jednym przyciskiem"
      ],
      "fullDescription": [
        "G Pen Micro II to nowe wcielenie kultowego waporyzatora do koncentratów Micro — z większą mocą, precyzją i kontrolą w kompaktowej obudowie, która zmieści się w kieszeni.",
        "Micro II zasila akumulator 1250 mAh, który zapewnia do 120 sesji na jednym ładowaniu, a szybkie ładowanie USB-C trwa poniżej 60 minut. Trzy zoptymalizowane ustawienia temperatury — LOW około 295°F, MEDIUM 340°F i HIGH 395°F — pozwalają dopasować sesję do łagodnego smaku, zrównoważonego działania lub gęstszej pary.",
        "Wysokiej klasy ceramiczny atomizer 0,8 Ω zapewnia stabilną pracę z koncentratami, a regulowany przepływ powietrza daje jeszcze większą kontrolę nad każdym zaciągnięciem. Wybierz 20-sekundowy cykl Session Mode z wygodnym automatycznym grzaniem albo grzanie ręczne do 25 sekund z bezpośrednią kontrolą.",
        "Wbudowany wyświetlacz cyfrowy pokazuje na pierwszy rzut oka stan baterii, temperaturę i stan grzania, a wibracja informuje, że Micro II osiągnął temperaturę. Wytrzymały korpus z anodowanego aluminium, prosta obsługa jednym przyciskiem, ładowanie przelotowe i automatyczne wyłączenie po 10 minutach sprawiają, że codzienne użytkowanie nie wymaga wysiłku.",
        "Używaj dołączonego silikonowego ustnika, by zachować kompaktowy zestaw, albo rozszerz możliwości o sprzedawane osobno G Pen Micro II Sidecar i 14 mm Rig Adapter, aby cieszyć się sesjami z filtracją wodną w domu i w podróży.",
        "Ponad dekadę po tym, jak oryginalny microG pomógł zdefiniować przenośną waporyzację koncentratów, Micro II przenosi doświadczenie Micro w nową generację — a wszystko to za $49.95."
      ],
      "box": {
        "contents": [
          "Bateria G Pen Micro II",
          "Ceramiczny zbiornik G Pen Micro II",
          "Silikonowy ustnik",
          "*Micro II Sidecar sprzedawany osobno",
          "*Micro II 14 mm Rig Adapter sprzedawany osobno"
        ]
      },
      "specs": [
        [
          "Bateria",
          "1250 mAh, ładowana"
        ],
        [
          "Ładowanie",
          "Szybkie ładowanie USB-C, poniżej 60 minut"
        ],
        [
          "Ładowanie przelotowe",
          "Tak"
        ],
        [
          "Wyświetlacz",
          "Cyfrowy, czarno-biały"
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
          "Tolerancja temperatury",
          "±15–30°F"
        ],
        [
          "Czas nagrzewania",
          "5 sekund"
        ],
        [
          "Session Mode",
          "20-sekundowy cykl grzania (z nagrzewaniem)"
        ],
        [
          "Grzanie ręczne",
          "Do 25 sekund (z nagrzewaniem)"
        ],
        [
          "Atomizer",
          "Ceramiczny 0,8 Ω"
        ],
        [
          "Przepływ powietrza",
          "Regulowany"
        ],
        [
          "Wibracja",
          "Tak"
        ],
        [
          "Czas pracy baterii",
          "Do 120 sesji na jednym ładowaniu"
        ],
        [
          "Automatyczne wyłączenie",
          "10 minut"
        ],
        [
          "Korpus",
          "Anodowane aluminium"
        ],
        [
          "Ustnik",
          "Silikon"
        ],
        [
          "Wymiary urządzenia",
          "98,6 × 24 × 32 mm"
        ],
        [
          "Waga urządzenia",
          "86 g"
        ]
      ]
    },
    "Slim 3-Piece Grinder": {
      "description": "Smukły, trzyczęściowy młynek bez sitka z mikrozaokrąglonymi zębami, które delikatnie rozdrabniają susz na równą frakcję — zaprojektowany do pracy z Dash II i Dash+.",
      "highlights": [
        "Mikrozaokrąglone zęby zapewniają delikatne, równe mielenie",
        "Pomaga zachować kannabinoidy i terpeny",
        "Trzyczęściowa konstrukcja bez sitka zatrzymuje trichomy w materiale",
        "Gładkie wnętrze zmniejsza tarcie i osadzanie się resztek",
        "Anodowane aluminium lotnicze 6063",
        "Najwyższe zachowanie THC po zmieleniu w testach Orange Photonics",
        "Magnetyczna pokrywka zabezpiecza zawartość",
        "Kompaktowy kształt do kieszeni i w podróż",
        "Pasuje do G Pen Dash II i Dash+"
      ],
      "fullDescription": [
        "Każda udana sesja zaczyna się od lepszego mielenia. G Pen Slim 3-Piece Grinder ma innowacyjne mikrozaokrąglone zęby, które delikatnie rozdrabniają susz na równą frakcję, pomagając zachować kannabinoidy i terpeny, które sprawiają, że każda odmiana jest wyjątkowa.",
        "W przeciwieństwie do tradycyjnych młynków z ostrymi zębami zaokrąglona geometria zębów i gładkie wnętrze Slim zmniejszają tarcie i ograniczają osadzanie się resztek, dzięki czemu więcej suszu zostaje tam, gdzie powinno. Trzyczęściowa konstrukcja bez sitka sprawia też, że trichomy pozostają wymieszane z zmielonym materiałem, zamiast się od niego oddzielać, a kompaktowy kształt idealnie sprawdza się w kieszeni, w podróży i na co dzień.",
        "G Pen Slim, wykonany z wysokiej jakości anodowanego aluminium lotniczego 6063, zapewnia płynny obrót, trwałość i precyzyjne działanie. Niezależne testy Orange Photonics wykazały, że innowacyjna konstrukcja z mikrozaokrąglonymi zębami zapewniła najwyższe zachowanie THC po zmieleniu spośród wielu testowanych typów młynków.",
        "G Pen Slim 3-Piece Grinder został zaprojektowany tak, aby dawać równe mielenie idealne do waporyzacji, i doskonale współpracuje z waporyzatorami do suszu G Pen Dash II i G Pen Dash+, pomagając wydobyć jak najwięcej z każdej porcji dzięki równemu, wydajnemu mieleniu zoptymalizowanemu pod aromatyczną parę.",
        "Mądrzejszy z założenia. Lepszy z każdym obrotem."
      ]
    },
    "Dash II": {
      "description": "Kolejna odsłona bestsellerowego Dash — kieszonkowy waporyzator do suszu ulepszony pod każdym względem: szybsze nagrzewanie, lepszy przepływ powietrza i dopracowana kontrola temperatury.",
      "highlights": [
        "Kieszonkowy waporyzator do suszu",
        "Nagrzewanie w 30 sekund",
        "Precyzyjna kontrola temperatury",
        "Wyświetlacz OLED",
        "Ulepszona ceramiczna komora 0,4 g (łatwiejsze napełnianie)",
        "Narzędzie do napełniania",
        "Bateria 1100 mAh",
        "Ładowanie przelotowe USB-C"
      ],
      "warranty": "6 miesięcy ograniczonej gwarancji, przedłużonej do 1 roku po rejestracji",
      "fullDescription": [
        "Kolejna odsłona naszego bestsellerowego waporyzatora Dash — ulepszona pod każdym względem, teraz w cenie zaledwie $49.95.",
        "G Pen Dash II to kieszonkowy waporyzator do suszu z precyzyjną kontrolą temperatury, wyświetlaczem OLED i ulepszoną ceramiczną komorą 0,4 g, zaprojektowaną z myślą o lepszym działaniu i łatwiejszym napełnianiu. Zasilany ulepszonym, wydajniejszym akumulatorem 1100 mAh, Dash II zapewnia płynne, niezawodne sesje z nagrzewaniem w 30 sekund i ładowaniem przelotowym USB-C.",
        "Więcej kontroli. Łatwiejsze napełnianie. Lepsze działanie."
      ],
      "box": {
        "contents": [
          "Waporyzator do suszu G Pen Dash II",
          "Wbudowane narzędzie do napełniania",
          "Silikonowa nakładka na ustnik",
          "*Kabel do ładowania USB-C nie jest dołączony"
        ]
      }
    },
    "510 Original — Retro": {
      "description": "Edycja Retro Collection modelu 510 Original łączy gładkie, przezroczyste wykończenie w stylu vintage z tą samą aktywowaną wdechem, ultraprzenośną wydajnością 510, inspirowaną pierwszą baterią G Pen z 2012 roku.",
      "highlights": [
        "Przezroczyste wykończenie retro",
        "Aktywacja wdechem",
        "Trzy ustawione napięcia (3,2 / 3,6 / 3,8 V)",
        "Tryb podgrzewania 1,8 V przez 10 sekund",
        "Bateria 400 mAh",
        "Ładowanie przelotowe USB-C",
        "Wyświetlacz cyfrowy",
        "24 × 21,1 × 56,7 mm"
      ],
      "warranty": "Ograniczona gwarancja — zobacz warunki",
      "fullDescription": [
        "Oryginał. Ulepszony. Retro.",
        "Powrót do korzeni — z gładkim wykończeniem retro.",
        "G Pen 510 Original z kolekcji Retro łączy nostalgiczny, przezroczysty design z wyrazistym, transparentnym kolorem. Inspirowana naszą pierwszą baterią 510 z 2012 roku, ta ulepszona edycja zachowuje prostotę i niezawodność oryginału, dopracowując go do współczesnych sesji w biegu.",
        "Jako najmniejsza bateria G Pen w historii — zaledwie 24 × 21,1 × 56,7 mm — 510 Original jest na tyle kompaktowa, że bez trudu wpasuje się w Twój dzień. Aktywacja wdechem sprawia, że obsługa jest prosta i nie wymaga przycisków, a interfejs z jednym przyciskiem daje kontrolę nad trzema ustawionymi napięciami (3,2/3,6/3,8 V), 10-sekundowym trybem podgrzewania 1,8 V i wyświetlaczem cyfrowym.",
        "Bateria 400 mAh z ładowaniem przelotowym USB-C sprawia, że urządzenie jest gotowe wtedy, kiedy Ty, nawet podczas ładowania. Dzięki przezroczystej obudowie retro i ulepszonej wydajności 510 ta kieszonkowa bateria łączy styl vintage z codzienną funkcjonalnością.",
        "Prosta. Niezawodna. Kultowa. Oryginał powraca.",
        "*Kartridż 510 nie jest dołączony",
        "**Ładowarka USB-C nie jest dołączona"
      ],
      "box": {
        "contents": [
          "Bateria G Pen 510 Original",
          "*Ładowarka USB-C nie jest dołączona",
          "*Kartridż 510 nie jest dołączony"
        ]
      }
    },
    "Melt Hot Knife": {
      "description": "G Pen Melt to najmniejszy hot knife na rynku — kompaktowe narzędzie do dabów z ceramiczną końcówką do szybkiego, czystego i bezproblemowego nabierania i dozowania koncentratów.",
      "highlights": [
        "Najmniejszy hot knife na rynku",
        "Szybko nagrzewająca się ceramiczna końcówka",
        "Ładowanie przelotowe USB-C",
        "Smukły korpus z aluminium",
        "Ultrakompaktowy: 3,94 × 0,5 × 0,25 cala",
        "Czyste nabieranie i dozowanie",
        "Zmieści się w kieszeni i w zestawie podróżnym",
        "Współpracuje z rigami, Micro+ i Hyer"
      ],
      "warranty": "Ograniczona gwarancja — zobacz warunki",
      "fullDescription": [
        "Poznaj zupełnie nowy G Pen Melt Hot Knife — najmniejszy hot knife na rynku oraz najszybszy i najczystszy sposób na przygotowanie koncentratów. Melt ma zaledwie 3,94 cala wysokości, 0,5 cala szerokości i 0,25 cala głębokości — jest ultrakompaktowy, ultraprzenośny i zniknie w każdej kieszeni lub zestawie podróżnym.",
        "Melt został zaprojektowany z myślą o czystym nabieraniu oraz płynnym, kontrolowanym dozowaniu, dzięki czemu nawet najbardziej lepkie sytuacje stają się dziecinnie proste. Szybko nagrzewająca się ceramiczna końcówka nagrzewa się błyskawicznie, zapewniając idealne przenoszenie za każdym razem. Żadnych lepkich narzędzi. Żadnych katastrof z reclaimem. Żadnego mocowania się.",
        "A teraz, dzięki ładowaniu przelotowemu USB-C, możesz korzystać z Melt nawet podczas ładowania — bo jedyne, co jest gorsze od rozładowanego narzędzia do dabów, to czekanie, aż się naładuje.",
        "Dzięki smukłemu aluminiowemu korpusowi, uniwersalnemu portowi USB-C i charakterystycznej sylwetce G Pen Melt staje się Twoim nowym niezbędnikiem na co dzień — niezależnie od tego, czy napełniasz riga, uzupełniasz G Pen Micro+, czy przygotowujesz G Pen Hyer.",
        "Mały rozmiar. Duża moc. Zero bałaganu. Zawsze gotowy."
      ],
      "box": {
        "contents": [
          "G Pen Melt Hot Knife",
          "Ochronna nasadka podróżna",
          "*Kabel do ładowania USB-C nie jest dołączony"
        ]
      }
    },
    "Connect": {
      "description": "Waporyzator do koncentratów bez palnika, który zamienia każdą fajkę wodną z połączeniem szkło-szkło w najlepszego riga do dabów — bez palnika i odsłoniętego naila.",
      "highlights": [
        "Ceramiczne grzanie bez palnika — bez otwartego ognia",
        "Nagrzewanie w 5 sekund — natychmiastowa, gęsta para",
        "Szklane adaptery 10 mm, 14 mm i 18 mm w zestawie",
        "Opatentowany odwrócony przepływ powietrza dla równomiernej waporyzacji",
        "Trzy ustawienia temperatury + tryb wydłużonego zaciągnięcia"
      ],
      "warranty": "1 rok ograniczonej gwarancji",
      "fullDescription": [
        "Najlepsza bezpalnikowa alternatywa dla tradycyjnych rigów do dabów. G Pen Connect to rewolucyjny waporyzator do koncentratów do fajek wodnych, który eliminuje potrzebę używania palnika i odsłoniętego naila. Ten szybko nagrzewający się waporyzator osiąga optymalną temperaturę w ciągu pięciu sekund, zapewniając parę najwyższej jakości bez żadnych komplikacji.",
        "Dlaczego warto wybrać G Pen Connect?",
        "Technologia bez palnika: bezpieczne i wygodne ceramiczne grzanie – bez otwartego ognia",
        "Nagrzewanie w 5 sekund: błyskawiczna aktywacja i natychmiastowa, gęsta para",
        "Uniwersalna kompatybilność: adaptery szklane 10 mm, 14 mm i 18 mm w zestawie, pasujące do każdej fajki wodnej z połączeniem szkło-szkło",
        "Opatentowany odwrócony przepływ powietrza: zapewnia równomierną, wydajną waporyzację koncentratów",
        "Trzy ustawienia temperatury: dopasuj doświadczenie do rodzaju koncentratu i preferowanego smaku",
        "Tryb wydłużonego zaciągnięcia: dla dłuższych, mocniejszych sesji",
        "Wydajna bateria 850 mAh: obsługuje wiele sesji z rzędu i ładowanie przelotowe",
        "Sprężynowy zawór carb: natychmiastowa kontrola przepływu powietrza i łatwe opróżnianie komory",
        "Najwyższa jakość wykonania: ceramiczny element grzejny zachowuje smak koncentratu i zapewnia płynne, mocne zaciągnięcia w połączeniu z Twoją ulubioną fajką wodną. Magnetyczne połączenie zatrzaskowe gwarantuje szybki, bezproblemowy montaż za każdym razem.",
        "Przenośny i gotowy do podróży: mimo dużej mocy G Pen Connect jest na tyle kompaktowy, że łatwo go zabrać. Każdy zestaw zawiera konopne etui podróżne do wygodnego przechowywania.",
        "Kompletny zestaw zawiera: urządzenie G Pen Connect, adaptery szklane 10 mm/14 mm/18 mm, konopne etui podróżne, kabel USB do ładowania i instrukcję obsługi.",
        "Chcesz przesiąść się z tradycyjnego riga? Poznaj nasze limitowane kolaboracje Cookies x G Pen Connect i Dr. Greenthumb's x G Pen Connect.",
        "Opatentowana technologia:",
        "US 10,004,264 B2",
        "US 10,021,909 B2",
        "US 10,188,145 B2",
        "US 10,321,721 B2",
        "US 10,327,470 B2",
        "*Ten produkt nie jest przeznaczony do używania z tytoniem, e-liquidami zawierającymi nikotynę ani z jakąkolwiek nikotyną syntetyczną lub jej zamiennikiem.",
        "\"@context\": \"https://schema.org\","
      ]
    },
    "510 Original": {
      "description": "Najmniejsza i najtańsza bateria G Pen w historii. 510 Original na nowo interpretuje pierwszą baterię Grenco z 2012 roku, oferując nowoczesną, aktywowaną wdechem i ultraprzenośną wydajność dla kartridży 510.",
      "highlights": [
        "Najmniejsza bateria G Pen w historii",
        "Aktywacja wdechem — po prostu się zaciągnij",
        "Trzy ustawione napięcia (3,2 / 3,6 / 3,8 V)",
        "Tryb podgrzewania 1,8 V przez 10 sekund",
        "Bateria 400 mAh",
        "Ładowanie przelotowe USB-C",
        "Wyświetlacz cyfrowy",
        "24 × 21,1 × 56,7 mm"
      ],
      "warranty": "Ograniczona gwarancja — zobacz warunki",
      "fullDescription": [
        "Powrót do korzeni — z ulepszeniami.",
        "G Pen 510 Original zamyka koło: czerpie inspirację z naszej pierwszej baterii z 2012 roku i odświeża ją na dzisiejsze czasy. To najmniejsza bateria G Pen w historii (24 × 21,1 × 56,7 mm) — ultraprzenośna i bardzo prosta w użyciu, bez żadnych kompromisów w wydajności.",
        "Dzięki aktywacji wdechem sesje z 510 Original są bezwysiłkowe — po prostu się zaciągnij. Dla większej kontroli interfejs z jednym przyciskiem pozwala przełączać trzy ustawione napięcia (3,2/3,6/3,8 V), włączyć 10-sekundowy tryb podgrzewania 1,8 V i śledzić wszystko na wyświetlaczu cyfrowym. Bateria 400 mAh z ładowaniem przelotowym USB-C pozwala ładować i używać urządzenia jednocześnie, bez zwalniania tempa.",
        "W cenie zaledwie $12.95 to także najtańsza bateria G Pen w historii — dowód na to, że technologia premium nie musi mieć ceny premium.",
        "Prosta. Niezawodna. Kultowa. Oryginał powraca.",
        "*Kartridż 510 nie jest dołączony",
        "** Ładowarka USB-C nie jest dołączona"
      ],
      "box": {
        "contents": [
          "Bateria G Pen 510 Original",
          "*Ładowarka USB-C nie jest dołączona",
          "*Kartridż 510 nie jest dołączony"
        ]
      }
    },
    "Hydout": {
      "description": "G Pen Hydout to kompaktowa, dyskretna bateria do kartridży 510 z ukrytą magnetyczną osłoną ustnika, regulowanym napięciem i wyświetlaczem LED do płynnych, dopasowanych i dyskretnych sesji.",
      "highlights": [
        "Ukryta magnetyczna osłona ustnika",
        "5 ustawień mocy (2,4 V – 3,8 V)",
        "Tryb podgrzewania 1,8 V",
        "Akumulator 400 mAh",
        "Jasny wyświetlacz LED",
        "Ładowanie USB-C",
        "Pasuje do kartridży 510 do 2 g",
        "90 × 37,5 × 18,5 mm"
      ],
      "warranty": "Ograniczona gwarancja — zobacz warunki",
      "fullDescription": [
        "Szukasz najlepszej baterii do kartridży 510 na dyskretne sesje w biegu? Poznaj G Pen Hydout 510 Cartridge Battery — kompaktową, ukrytą baterię do kartridży 510, która zapewnia solidną wydajność bez zwracania na siebie uwagi.",
        "Ta kieszonkowa moc ma ukrytą magnetyczną osłonę ustnika, która zapewnia dyskrecję i chroni kartridż przed światłem (tak, pomaga to zachować jakość olejku), baterię 400 mAh, regulowane napięcie i jasny wyświetlacz LED, dający pełną kontrolę nad każdym zaciągnięciem. Hydout jest kompatybilny z większością kartridży z gwintem 510 do 2 g i idealnie sprawdza się podczas płynnych, dopasowanych sesji — gdziekolwiek jesteś."
      ],
      "box": {
        "contents": [
          "1x G Pen Hydout 510 Cartridge Battery",
          "1x Magnetyczna osłona ustnika",
          "Kartridż 510 nie jest dołączony",
          "Kabel do ładowania USB-C nie jest dołączony"
        ]
      }
    },
    "Hydout — Retro": {
      "description": "Edycja Retro modelu G Pen Hydout nadaje dyskretnej baterii do kartridży 510 przezroczyste wykończenie inspirowane latami 90. i dodaje aktywację wdechem, a także zmienne napięcie i ładowanie USB-C.",
      "highlights": [
        "Przezroczyste wykończenie inspirowane latami 90.",
        "Aktywacja wdechem",
        "Regulowane, zmienne napięcie",
        "Tryb podgrzewania 1,8 V",
        "Akumulator 400 mAh",
        "Ładowanie przelotowe USB-C",
        "Pasuje do większości kartridży 510",
        "Ukryta magnetyczna osłona ustnika"
      ],
      "warranty": "Ograniczona gwarancja — zobacz warunki",
      "fullDescription": [
        "G Pen Hydout Retro łączy eleganckie, przezroczyste wykończenie inspirowane latami 90. z dopracowaną konstrukcją najdyskretniejszej baterii 510 od G Pen. Magnetyczna obudowa otacza kartridż, chroniąc go przed codziennym zużyciem, a cały zestaw pozostaje minimalistyczny i schludny.",
        "Hydout, zaprojektowany z myślą o wszechstronności, oferuje zmienne ustawienia napięcia do precyzyjnej kontroli grzania oraz funkcję podgrzewania 1,8 V, która rozgrzewa gęstsze koncentraty przed użyciem. Edycja Retro dodaje też aktywację wdechem, dzięki której każde zaciągnięcie odbywa się bez przycisków, oraz ładowanie przelotowe USB-C, które sprawia, że urządzenie jest gotowe do użycia nawet podczas ładowania.",
        "Dzięki szybkiemu ładowaniu USB-C, ciasno dopasowanej, niegrzechoczącej komorze na kartridż i kompatybilności z większością kartridży 510 Hydout Retro oferuje nowoczesną wydajność pod nostalgiczną, przezroczystą obudową.",
        "*Kartridż 510 nie jest dołączony",
        "**Ładowarka USB-C nie jest dołączona"
      ],
      "box": {
        "contents": [
          "Bateria G Pen Hydout z gwintem 510",
          "Magnetyczny ustnik",
          "*Kabel do ładowania USB-C nie jest dołączony",
          "*Kartridż 510 nie jest dołączony"
        ]
      }
    },
    "Dash+": {
      "description": "G Pen Dash+ to przenośny waporyzator do suszu nowej generacji z hybrydowym grzaniem konwekcyjno-kondukcyjnym w tytanowej komorze, który osiąga temperaturę waporyzacji w około 20 sekund.",
      "highlights": [
        "Hybrydowe grzanie: konwekcja + kondukcja",
        "Tytanowa komora grzewcza",
        "Nagrzewa się w ~20 sekund",
        "Akumulator litowo-jonowy 1800 mAh",
        "Ładowanie USB-C",
        "Kolorowy wyświetlacz LED",
        "Wibracje, obsługa trzema przyciskami",
        "Obudowa ze stopu cynku"
      ],
      "warranty": "Ograniczona gwarancja — zobacz warunki",
      "fullDescription": [
        "G Pen Dash+ to kompaktowy waporyzator do suszu zaprojektowany z myślą o szybkich, aromatycznych i dopasowanych sesjach. Dzięki hybrydowemu grzaniu konwekcyjno-kondukcyjnemu w całkowicie tytanowej komorze osiąga temperaturę już w 20 sekund, zapewniając płynną, równą parę.",
        "Dwa kanały czystego powietrza i magnetyczny ustnik ze spiralnym ceramicznym kanałem powietrznym pomagają zmaksymalizować przepływ powietrza i smak. Kolorowy wyświetlacz LED, sterowanie trzema przyciskami, wibracje i precyzyjna regulacja temperatury ułatwiają dopasowanie każdej sesji.",
        "G Pen Dash+ ma wytrzymały korpus ze stopu cynku i jest zasilany akumulatorem 1800 mAh z ładowaniem USB-C. Zapewnia niezawodne działanie w smukłej, przenośnej formie stworzonej do codziennego użytku.",
        "*Ten produkt nie jest przeznaczony do używania z tytoniem, e-liquidami zawierającymi nikotynę ani z jakąkolwiek nikotyną syntetyczną lub jej zamiennikiem."
      ],
      "box": {
        "contents": [
          "Waporyzator Dash+",
          "Silikonowa nakładka na ustnik Dash+",
          "Narzędzie do napełniania z brelokiem",
          "Kabel do ładowania USB-C"
        ]
      }
    },
    "Hyer": {
      "description": "Przenośny e-nail do koncentratów i suszu, który współpracuje z każdą fajką wodną z połączeniem szkło-szkło, zbudowany wokół całkowicie kwarcowego elementu grzejnego.",
      "highlights": [
        "Podwójne zastosowanie: koncentraty lub susz",
        "W pełni kwarcowy element grzejny",
        "Pasuje do każdej fajki z połączeniem szkło-szkło",
        "Przenośna konstrukcja e-nail"
      ],
      "warranty": "2 lata ograniczonej gwarancji",
      "fullDescription": [
        "G Pen Hyer®️ to intuicyjnie zaprojektowany, przenośny e-nail o podwójnym zastosowaniu, który działa z koncentratami lub suszem i współpracuje z każdą fajką wodną z połączeniem szkło-szkło. Wykonany z materiałów najwyższej jakości, w tym z całkowicie kwarcowego elementu grzejnego, G Pen Hyer wykorzystuje inteligentną technologię grzania ze stałą temperaturą, zapewniając najlepszy w swojej klasie smak i ilość pary.",
        "Dzięki akumulatorowi litowo-jonowemu 6000 mAh z szybkim ładowaniem przelotowym przez USB-C, zamkniętemu w lekkiej i wytrzymałej obudowie z anodowanego aluminium, G Pen Hyer przesuwa granice mocy i przenośności. Prosta obsługa trzema przyciskami i interfejs z pięcioma diodami LED sprawiają, że G Pen Hyer łatwo przygotować i uruchomić, a doświadczenie pozostaje bezkompromisowe.",
        "Wysokiej jakości pleciony kabel zasilający z wytrzymałymi magnetycznymi złączami zatrzaskowymi łączy baterię z lekką obudową zbiornika z anodowanego aluminium, do której można łatwo wkręcić i wykręcić G Pen Hyer Quartz Tank do koncentratów lub Dry Herb Tank*. Zbiornik do koncentratów jest podgrzewany specjalnie tłoczonym elementem grzejnym ze stali nierdzewnej i ma całkowicie kwarcową komorę z wewnętrznym up-stemem, który zapewnia maksymalną powierzchnię grzania, wydajny przepływ powietrza i optymalną waporyzację koncentratów.",
        "Ostatnim elementem doskonałej wydajności G Pen Hyer Quartz Tank do koncentratów jest pokrywka zbiornika — mocowana magnetycznie, wykonana z anodowanego aluminium, z wbudowaną ceramiczną wkładką i dwoma otworami powietrznymi zapewniającymi płynny, obrotowy mechanizm. Dołączone narzędzie do wosku ze stali nierdzewnej można też przypiąć na górze lub z boku pokrywki, by zawsze było pod ręką.",
        "Każdy zestaw G Pen Hyer zawiera męski adapter szklany 14 mm (adaptery szklane 10 mm i 18 mm sprzedawane osobno). Wszystkie elementy zestawu są starannie zapakowane w dołączone konopne etui podróżne z siateczkową kieszenią na dodatkowe akcesoria.",
        "*G Pen Hyer Dry Herb Tank sprzedawany osobno.",
        "﻿*Wskaźnik trwałości G Pen Hyer Quartz Tank to co najmniej 200 cykli grzania. Dla optymalnego działania zalecamy wymianę zbiornika po osiągnięciu tej liczby cykli.",
        "*Ten produkt nie jest przeznaczony do używania z tytoniem, e-liquidami zawierającymi nikotynę ani z jakąkolwiek nikotyną syntetyczną lub jej zamiennikiem."
      ]
    },
    "Roam": {
      "description": "Przenośny e-rig typu wszystko w jednym, zapewniający waporyzację koncentratów z filtracją wodną w podróży, ze szczelną rurką wodną ze szkła borokrzemowego i całkowicie kwarcowym zbiornikiem.",
      "highlights": [
        "Wbudowana filtracja wodna w szkle borokrzemowym",
        "W pełni kwarcowy zbiornik",
        "Wydajna bateria 1300 mAh",
        "Samodzielny e-rig typu wszystko w jednym"
      ],
      "warranty": "1 rok ograniczonej gwarancji",
      "fullDescription": [
        "Przedstawiamy G Pen Roam — przenośny waporyzator typu wszystko w jednym, intuicyjnie zaprojektowany do waporyzacji koncentratów z filtracją wodną w podróży. Dzięki szczelnej, samodzielnej rurce wodnej ze szkła borokrzemowego, całkowicie kwarcowemu zbiornikowi i wydajnemu akumulatorowi litowo-jonowemu 1300 mAh G Pen Roam nagrzewa się do odpowiedniej temperatury w ciągu kilku sekund od włączenia i bez wysiłku zapewnia płynne, aromatyczne zaciągnięcia.",
        "G Pen Roam dostosowuje się do preferencji smakowych i temperaturowych każdego użytkownika dzięki cyfrowej regulacji temperatury i wyświetlaczowi LED w zakresie od 400° do 800°+F (204° do 427°+C), a wibracja sygnalizuje, że urządzenie jest gotowe do użycia. Roam zaprojektowano z dużą dbałością o dyskretną przenośność — jest zamknięty w lekkiej, ale wytrzymałej obudowie ze stopu aluminium, która w pełni osłania kwarcowy zbiornik i szklaną rurkę wodną. Technologia ładowania przelotowego pozwala używać urządzenia podczas ładowania, a wszystkie części mające kontakt z kanałem pary można łatwo rozłożyć i wyczyścić.",
        "Każdy kompletny zestaw G Pen Roam jest standardowo dostarczany w konopnym etui podróżnym z miejscem na dwa słoiczki z koncentratem i kieszenią na akcesoria, w tym kabel micro USB do ładowania i narzędzie G Pen do nakładania koncentratów.",
        "*Ten produkt nie jest przeznaczony do używania z tytoniem, e-liquidami zawierającymi nikotynę ani z jakąkolwiek nikotyną syntetyczną lub jej zamiennikiem."
      ]
    },
    "Dash": {
      "description": "Oryginalny G Pen Dash — kompaktowy, lekki waporyzator do suszu zaprojektowany do prostych sesji w podróży.",
      "highlights": [
        "Kompaktowy waporyzator do suszu",
        "Prosta obsługa jednym przyciskiem",
        "Kieszonkowa konstrukcja"
      ],
      "warranty": "2 lata ograniczonej gwarancji"
    },
    "Elite II": {
      "description": "Wysokiej klasy waporyzator do suszu z pełną konwekcją, zapewniający czysty smak i gęstą parę przy precyzyjnej kontroli temperatury.",
      "highlights": [
        "Grzanie w pełni konwekcyjne",
        "Precyzyjna kontrola temperatury",
        "Pojemna komora ceramiczna"
      ],
      "warranty": "2 lata ograniczonej gwarancji"
    }
  }
};
