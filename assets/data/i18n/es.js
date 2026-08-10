/* =============================================================================
   SPANISH (es) LANGUAGE PACK
   -----------------------------------------------------------------------------
   Loaded on demand — only when a visitor selects this language, so English
   visitors download none of it. Editing this file is the ONLY thing needed to
   revise the Spanish; no code changes.

     ui        UI chrome, keyed by the ENGLISH source string. A missing key
               simply falls back to English.
     training  Courses + quizzes, mirroring PORTAL_TRAINING.
     products  Product prose: description / highlights / warranty / fullDescription.

   RULES
   - Product names, brand names, SKUs, UPCs, filenames, units and prices are
     never translated.
   - Quiz choices MUST stay in the same ORDER as the English source: the correct
     answer is an index stored on the English data and reused as-is.
   - Keep inline <strong> tags balanced, and keep {placeholder} tokens intact.
   ========================================================================== */
window.PORTAL_I18N = window.PORTAL_I18N || {};
window.PORTAL_I18N.es = {
  "ui": {
    "{m} lessons · {q}-question quiz · ~{min} min": "{m} lecciones · Cuestionario de {q} preguntas · ~{min} min",
    "Concentrate Accessories": "Accesorios para concentrados",
    "Dry Herb Accessories": "Accesorios para hierba seca",
    "Dry-herb devices & accessories": "Dispositivos y accesorios para hierba seca",
    "Grinder": "Grinder",
    "This folder has {n} files. Downloading them one at a time can take several minutes and your browser may block it. Open the full Dropbox download instead?": "Esta carpeta tiene {n} archivos. Descargarlos de uno en uno puede tardar varios minutos y su navegador podría bloquearlo. ¿Prefiere abrir la descarga completa de Dropbox?",
    "{n} downloads starting — allow multiple if your browser asks, or use “Download all”.": "Iniciando {n} descargas: permita varias si su navegador lo pregunta, o use «Descargar todo».",
    "Add your store name, mailing address and email so we can ship your order": "Añada el nombre de su tienda, la dirección de envío y el correo electrónico para poder enviarle el pedido",
    "Enter a valid email address": "Introduzca una dirección de correo electrónico válida",
    "Add your name and email so we can reply": "Añada su nombre y correo electrónico para que podamos responderle",
    "Click a video to watch it, and download it or open it on YouTube where available.": "Haga clic en un vídeo para verlo, y descárguelo o ábralo en YouTube cuando esté disponible.",
    "document": "documento",
    "documents": "documentos",
    "item": "artículo",
    "items": "artículos",
    "These assets are provided for approved partner, press, and retail use. Please don't alter logos or product imagery. Need something specific or a different format? Use “Request an asset.”": "Estos recursos se ofrecen para uso autorizado de socios, prensa y puntos de venta. No modifique los logotipos ni las imágenes de producto. ¿Necesita algo concreto o en otro formato? Use “Solicitar un recurso”.",
    "Brand Documents": "Documentos de marca",
    "Dry Herb Vaporizer": "Vaporizador de hierba seca",
    "510 Cartridge Battery": "Batería para cartuchos 510",
    "Electric Hot Knife": "Cuchilla caliente eléctrica",
    "Concentrate Vaporizer": "Vaporizador de concentrados",
    "Become a {name} Product Specialist": "Conviértase en Especialista de Producto de {name}",
    "You’re a certified {name} Specialist": "Usted es Especialista certificado de {name}",
    "Watch the videos, learn the product, and pass a short quiz to get certified.": "Vea los videos, conozca el producto y apruebe un breve cuestionario para certificarse.",
    "Certificate earned {date} · review the course or retake anytime": "Certificado obtenido el {date} · repase el curso o repítalo cuando quiera",
    "Start training →": "Comenzar capacitación →",
    "Back to {name}": "Volver a {name}",
    "Product Specialist Training": "Capacitación de Especialista de Producto",
    "{v} videos · {m} lessons · {q}-question quiz · ~{min} min": "{v} videos · {m} lecciones · cuestionario de {q} preguntas · ~{min} min",
    "Watch the how-to-use and cleaning videos — click a video to play it in the large viewer, or download it.": "Vea los videos de uso y limpieza — haga clic en un video para reproducirlo en el visor grande, o descárguelo.",
    "Answer all {q} questions. Score {p}% or higher to earn your certificate.": "Responda las {q} preguntas. Obtenga {p}% o más para conseguir su certificado.",
    "Question {n} of {total}": "Pregunta {n} de {total}",
    "{a} / {b} answered": "{a} / {b} respondidas",
    "Please answer all {q} questions first": "Primero responda las {q} preguntas",
    "Correct": "Correcto",
    "Incorrect": "Incorrecto",
    "Not quite — you need {p}% to certify.": "Casi — necesita {p}% para certificarse.",
    "Review the explanations above, then try again.": "Repase las explicaciones de arriba e inténtelo de nuevo.",
    "Enter your name to generate your Product Specialist certificate.": "Escriba su nombre para generar su certificado de Especialista de Producto.",
    "Your Name": "Su Nombre",
    "Full name": "Nombre completo",
    "G Pen · Product Specialist Program": "G Pen · Programa de Especialista de Producto",
    "Certificate of Completion": "Certificado de Finalización",
    "This certifies that": "Se certifica que",
    "has successfully completed the Product Specialist training and demonstrated expert product knowledge of the": "ha completado exitosamente la capacitación de Especialista de Producto y ha demostrado conocimiento experto del producto",
    "Date Issued": "Fecha de emisión",
    "Authorized By": "Autorizado por",
    "Certificate ID": "ID del certificado",
    "Print certificate": "Imprimir certificado",
    "Download image": "Descargar imagen",
    "Email my certification": "Enviar mi certificación por correo",
    "G PEN · PRODUCT SPECIALIST PROGRAM": "G PEN · PROGRAMA DE ESPECIALISTA DE PRODUCTO",
    "has successfully completed the Product Specialist training": "ha completado exitosamente la capacitación de Especialista de Producto",
    "and demonstrated expert product knowledge of the": "y ha demostrado conocimiento experto del producto",
    "Product Name": "Nombre del producto",
    "Product SKU": "SKU del producto",
    "Product UPC": "UPC del producto",
    "Retail POP Display SKU": "SKU del exhibidor POP",
    "Retail POP Display UPC": "UPC del exhibidor POP",
    "Product Dimensions": "Dimensiones del producto",
    "Unit Weight": "Peso por unidad",
    "Ships In Retail POP Display": "Se envía en exhibidor POP",
    "Units Per POP Display": "Unidades por exhibidor POP",
    "Units Per Master Case": "Unidades por caja máster",
    "Case Weight": "Peso de la caja",
    "Case Dimensions": "Dimensiones de la caja",
    "HTS (Harmonized Tariff Schedule) Code": "Código HTS (Sistema Armonizado de Aranceles)",
    "Dry Herb Vape": "Vaporizador de hierba seca",
    "510 Battery": "Batería 510",
    "Concentrate Hot Knife": "Cuchillo caliente para concentrados",
    "Dry Herb": "Hierba seca",
    "Accessory": "Accesorio",
    "E-Nail": "E-Nail",
    "E-Rig": "E-Rig",
    "Brand": "Marca",
    "Product photos": "Fotos de producto",
    "Lifestyle Photos": "Fotos de lifestyle",
    "Social Videos": "Videos para redes",
    "TV Screen Videos": "Videos para pantalla",
    "Documents": "Documentos",
    "Product Photos": "Fotos de producto",
    "Web Banners": "Banners web",
    "E-Comm Render Photos": "Renders para e-commerce",
    "Misc": "Varios",
    "Our customer service team has been with us since day one — with over 15 years of hands-on experience with our devices. They know these products inside and out, and they’d be happy to walk you through anything or go over any additional questions you might have. We love to chat all things cannabis and vaporizers with you.": "Nuestro equipo de atención al cliente nos acompaña desde el primer día, con más de 15 años de experiencia práctica con nuestros dispositivos. Conocen estos productos a fondo y estarán encantados de explicarle lo que necesite o resolver cualquier duda adicional. Nos encanta conversar sobre todo lo relacionado con el cannabis y los vaporizadores.",
    "(optional)": "(opcional)",
    "123 Main St, City, State ZIP": "Calle 123, Ciudad, Estado, C.P.",
    "Add each store you'd like listed on our official locator, then send your request. Have more than one location? Use <strong>Add another store</strong> to include them all.": "Agregue cada tienda que desee incluir en nuestro localizador oficial y luego envíe su solicitud. ¿Tiene más de una ubicación? Use <strong>Agregar otra tienda</strong> para incluirlas todas.",
    "Additional Products": "Productos Adicionales",
    "Address": "Dirección",
    "All": "Todos",
    "Assets": "Recursos",
    "Browse all {n} logo files →": "Ver los {n} archivos de logo →",
    "Carry G Pen? Request to be added to our official store locator so customers can find your shop.": "¿Vende G Pen? Solicite aparecer en nuestro localizador oficial de tiendas para que los clientes encuentren su negocio.",
    "Clear": "Limpiar",
    "Click a preview to enlarge it.": "Haga clic en una vista previa para ampliarla.",
    "Click preview to enlarge": "Haga clic para ampliar",
    "Close viewer": "Cerrar el visor",
    "Contact us": "Contáctenos",
    "Decrease": "Disminuir",
    "Downloaded": "Se descargaron",
    "Downloading {n} files…": "Descargando {n} archivos…",
    "Email Address": "Correo electrónico",
    "Enlarge": "Ampliar",
    "Fields shown as <strong>—</strong> are still to be confirmed.": "Los campos que aparecen como <strong>—</strong> están por confirmar.",
    "Formats": "Formatos",
    "Increase": "Aumentar",
    "Loading catalog…": "Cargando el catálogo…",
    "Mailing Address": "Dirección postal",
    "New": "Nuevo",
    "Next": "Siguiente",
    "No": "No",
    "No matches for": "Sin resultados para",
    "Official {brand} logos — black, white &amp; various versions. For approved partner, press &amp; retail use; please don’t alter, recolor, or distort the marks.": "Logos oficiales de {brand} — negro, blanco y varias versiones. Para uso autorizado de socios, prensa y puntos de venta; por favor no altere, recoloree ni distorsione las marcas.",
    "Open": "Abrir",
    "Order Marketing Materials": "Solicitar Materiales de Marketing",
    "Order Materials": "Solicitar materiales",
    "Orderable in-store marketing materials will be listed here soon. In the meantime, reach out and we’ll let you know what’s available.": "Los materiales de marketing para tienda disponibles para pedido aparecerán aquí pronto. Mientras tanto, escríbanos y le informaremos qué hay disponible.",
    "Phone": "Teléfono",
    "Popular searches": "Búsquedas frecuentes",
    "Preparing {n} files as a .zip…": "Preparando {n} archivos en un .zip…",
    "Press <kbd>/</kbd> to search from anywhere · <kbd>Enter</kbd> opens the top result": "Presione <kbd>/</kbd> para buscar desde cualquier lugar · <kbd>Enter</kbd> abre el primer resultado",
    "Quantity for": "Cantidad de",
    "Remove this store": "Eliminar esta tienda",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} will show here as they’re added — order what you need for your shop.": "Los exhibidores, pósteres, shelf talkers y otros materiales para tienda de {brand} aparecerán aquí a medida que se agreguen — solicite lo que necesite para su negocio.",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} — order what you need for your shop.": "Exhibidores, pósteres, shelf talkers y otros materiales para tienda de {brand} — solicite lo que necesite para su negocio.",
    "Retailers": "Puntos de venta",
    "Select all": "Seleccionar todo",
    "Set a quantity for each item, add your store details, then send your request.": "Indique una cantidad para cada artículo, agregue los datos de su tienda y envíe su solicitud.",
    "Showing the top {n} of {total} files — add a word to narrow it down.": "Mostrando los {n} archivos más relevantes de {total} — agregue una palabra para acotar la búsqueda.",
    "Store": "Tienda",
    "Store Name": "Nombre de la tienda",
    "Store name": "Nombre de la tienda",
    "Street, City, State, ZIP": "Calle, Ciudad, Estado, C.P.",
    "Submit Request": "Enviar solicitud",
    "Try a product name (Dash), a file type (PNG, MP4), a category (lifestyle, packaging), or “catalog”.": "Pruebe con el nombre de un producto (Dash), un tipo de archivo (PNG, MP4), una categoría (lifestyle, empaque) o “catálogo”.",
    "View all →": "Ver todos →",
    "Website": "Sitio web",
    "Yes": "Sí",
    "Your contact info": "Sus datos de contacto",
    "Your details": "Sus datos",
    "You’ll confirm and send from your email app.": "Usted confirmará y enviará desde su aplicación de correo.",
    "assets": "recursos",
    "available": "disponibles",
    "colorways": "colores",
    "files": "archivos",
    "file": "archivo",
    "logo files": "archivos de logo",
    "selected": "seleccionados",
    "stores": "tiendas",
    "material": "material",
    "materials": "materiales",
    "{n} older {brand} products we no longer sell — assets kept for partners who still need them.": "{n} productos {brand} anteriores que ya no vendemos — mantenemos los recursos para los socios que aún los necesitan.",
    "Click to watch": "Haga clic para ver",
    "Description copied": "Descripción copiada",
    "Copy": "Copiar",
    "product": "producto",
    "products": "productos",
    "result": "resultado",
    "results": "resultados",
    "510 Batteries": "Baterías 510",
    "510-thread cartridge batteries": "Baterías para cartuchos de rosca 510",
    "Dry Herb Vaporizers": "Vaporizadores de Hierba Seca",
    "Portable dry-herb devices": "Dispositivos portátiles de hierba seca",
    "Concentrate": "Concentrados",
    "Concentrate tools & accessories": "Herramientas y accesorios para concentrados",
    "More products": "Más productos",
    "Catalogs & Brand Documents": "Catálogos y Documentos de Marca",
    "Logos & assets": "Logos y recursos",
    "Official Brand & Product Assets": "Recursos Oficiales de Marca y Producto",
    "Wholesale & press asset requests welcome. Assets update as new products launch.": "Aceptamos solicitudes de recursos para mayoristas y prensa. Los recursos se actualizan a medida que se lanzan nuevos productos.",
    "Catalogs": "Catálogos",
    "Logos &amp; assets": "Logos y recursos",
    "Request an asset": "Solicitar un recurso",
    "Request an asset →": "Solicitar un recurso →",
    "Official Brand &amp; Product Assets": "Recursos Oficiales de Marca y Producto",
    "Everything you need, in one place.": "Todo lo que necesita, en un solo lugar.",
    "Search products, files, formats…": "Buscar productos, archivos, formatos…",
    "Search all assets": "Buscar en todos los recursos",
    "Featured": "Destacados",
    "Logos and Brand Assets": "Logos y Recursos de Marca",
    "Catalogs &amp; Brand Documents": "Catálogos y Documentos de Marca",
    "Questions about a product?": "¿Preguntas sobre un producto?",
    "Talk to our team.": "Hable con nuestro equipo.",
    "Mon–Fri · 10:00 AM – 6:00 PM EST": "Lun–Vie · 10:00 AM – 6:00 PM EST",
    "Wholesale &amp; press asset requests welcome. Assets update as new products launch.": "Aceptamos solicitudes de recursos para mayoristas y prensa. Los recursos se actualizan a medida que se lanzan nuevos productos.",
    "Browse G Pen by category": "Explorar G Pen por categoría",
    "Search results": "Resultados de búsqueda",
    "Follow G Pen On Socials": "Siga a G Pen en redes sociales",
    "Official accounts": "Cuentas oficiales",
    " Copy link": " Copiar enlace",
    " Download": " Descargar",
    "Add another store": "Agregar otra tienda",
    "Add at least one store's details first": "Primero agregue los datos de al menos una tienda",
    "At least one store is required": "Se requiere al menos una tienda",
    "Back to library": "Volver a la biblioteca",
    "Brand &amp; Style Guide": "Guía de Marca y Estilo",
    "Catalog not found": "Catálogo no encontrado",
    "Certified": "Certificado",
    "Certified! 🎓": "¡Certificado! 🎓",
    "Collection Colorways": "Colores de la Colección",
    "Colors": "Colores",
    "Connect storage to enable downloads": "Conecte el almacenamiento para habilitar las descargas",
    "Copy failed": "No se pudo copiar",
    "Copy folder link": "Copiar enlace de la carpeta",
    "Copy link": "Copiar enlace",
    "Couldn’t build the zip": "No se pudo crear el .zip",
    "Couldn’t load the zipper — try again": "No se pudo cargar el compresor — inténtelo de nuevo",
    "Couldn’t render that page": "No se pudo mostrar esa página",
    "Document coming soon": "Documento próximamente",
    "Download": "Descargar",
    "Download PDF": "Descargar PDF",
    "Download all": "Descargar todo",
    "Download all logos": "Descargar todos los logos",
    "Download assets by category": "Descargar recursos por categoría",
    "Download coming soon": "Descarga próximamente",
    "Download folder": "Descargar carpeta",
    "Download logo files": "Descargar archivos de logo",
    "Download logos": "Descargar logos",
    "Download selected": "Descargar seleccionados",
    "Download video": "Descargar video",
    "Downloadable file coming soon — Dropbox link on the way": "Archivo descargable próximamente — el enlace de Dropbox está en camino",
    "Enter your name for the certificate": "Escriba su nombre para el certificado",
    "Get Certified": "Obtener Certificación",
    "Get My Certificate": "Obtener mi certificado",
    "Get your store on our Store Locator": "Agregue su tienda a nuestro Localizador de Tiendas",
    "Highlights": "Aspectos Destacados",
    "How to use videos": "Videos de uso",
    "In-Store Marketing Materials": "Materiales de Marketing para Tienda",
    "Learn": "Aprender",
    "Logos": "Logos",
    "Matching files &amp; assets": "Archivos y recursos coincidentes",
    "No link yet": "Aún no hay enlace",
    "No shareable link for this folder yet": "Aún no hay un enlace para compartir esta carpeta",
    "Official Product Description": "Descripción Oficial del Producto",
    "Opening Dropbox download…": "Abriendo la descarga de Dropbox…",
    "Order materials": "Solicitar materiales",
    "Packaging": "Empaque",
    "Prev": "Anterior",
    "Product FAQs": "Preguntas Frecuentes",
    "Product Manual": "Manual del Producto",
    "Remove": "Eliminar",
    "Request materials": "Solicitar materiales",
    "Request this asset": "Solicitar este recurso",
    "Request to be listed": "Solicitar aparecer en el localizador",
    "Retry quiz": "Repetir cuestionario",
    "SKU details": "Detalles de SKU",
    "Select at least one asset first": "Primero seleccione al menos un recurso",
    "Set a quantity for at least one item first": "Primero indique una cantidad para al menos un artículo",
    "Share": "Compartir",
    "Store Locator Request": "Solicitud para el Localizador de Tiendas",
    "Submit Answers": "Enviar respuestas",
    "Typography": "Tipografía",
    "Use “Download all” to get these from Dropbox": "Use “Descargar todo” para obtenerlos desde Dropbox",
    "View on site": "Ver en el sitio",
    "Viewer is taking too long — downloading instead": "El visor está tardando demasiado — se descargará en su lugar",
    "Watch": "Ver",
    "What’s In the Box?": "¿Qué Incluye la Caja?",
    "You passed!": "¡Aprobó!",
    "YouTube": "YouTube",
    "AUTHORIZED BY": "AUTORIZADO POR",
    "Assets are coming soon — check back shortly.": "Los recursos estarán disponibles muy pronto — vuelva a consultar en breve.",
    "B2B Resources": "Recursos B2B",
    "Blue": "Azul",
    "Body": "Texto",
    "CERTIFICATE ID": "ID DEL CERTIFICADO",
    "CERTIFIED · PRODUCT SPECIALIST": "CERTIFICADO · ESPECIALISTA DE PRODUCTO",
    "Catalog": "Catálogo",
    "Catalog link copied": "Enlace del catálogo copiado",
    "Clear all": "Borrar todo",
    "DATE ISSUED": "FECHA DE EMISIÓN",
    "Display / Headlines": "Display / Titulares",
    "Green": "Verde",
    "How-to video": "Video instructivo",
    "In-store marketing": "Marketing en tienda",
    "Link copied": "Enlace copiado",
    "MSRP": "PVPR",
    "Master carton": "Caja máster",
    "Open in": "Abrir en",
    "Pink": "Rosa",
    "Purple": "Morado",
    "Red": "Rojo",
    "Regional Catalogs": "Catálogos regionales",
    "Retail POP display": "Exhibidor POP para tienda",
    "Share view": "Compartir vista",
    "Ships in POP display": "Se envía en exhibidor POP",
    "Ships in a retail-ready POP display — one retail box shown per colorway. See SKU details for inner-pack &amp; master-carton quantities.": "Se envía en un exhibidor POP listo para tienda — se muestra una caja de venta por color. Consulte los detalles de SKU para conocer las cantidades por paquete interior &amp; caja máster.",
    "Ships in a retail-ready POP display — see SKU details for inner-pack &amp; master-carton quantities.": "Se envía en un exhibidor POP listo para tienda — consulte los detalles de SKU para conocer las cantidades por paquete interior &amp; caja máster.",
    "Ships in single retail boxes — no POP display. See SKU details for master-carton quantities.": "Se envía en cajas de venta individuales — sin exhibidor POP. Consulte los detalles de SKU para conocer las cantidades por caja máster.",
    "Single Retail Packaging": "Empaque individual de venta",
    "Swipe to see more folders": "Deslice para ver más carpetas",
    "View link copied": "Enlace de la vista copiado",
    "View {brand} assets": "Ver recursos de {brand}",
    "Warranty": "Garantía",
    "What’s in the box": "Contenido de la caja",
    "tap to copy": "toque para copiar",
    "updated": "actualizado",
    "videos": "videos",
    "{brand} specific in-store materials.": "Materiales en tienda específicos de {brand}.",
    "{n}-Pack Retail POP Display": "Exhibidor POP de {n} unidades",
    "SKU": "SKU",
    "Order": "Pedir",
    "Order marketing materials": "Pedir materiales de marketing",
    "Printed in-store materials (posters, shelf talkers, displays) for this product will appear here as they’re added.": "Los materiales impresos para tienda (pósteres, shelf talkers, exhibidores) de este producto aparecerán aquí a medida que se agreguen.",
    "Training": "Capacitación",
    "Additional G Pen Products": "Otros productos G Pen"
  },
  "training": {
    "Slim 3-Piece Grinder": {
     "tagline": "Conozca a fondo el G Pen Slim 3-Piece Grinder y apruebe el cuestionario para certificarse como Especialista de Producto.",
     "minutes": 6,
     "passPct": 80,
     "modules": [
      {
       "title": "Visión general del producto",
       "points": [
        "El G Pen Slim es un <strong>grinder de 3 piezas</strong> para flor, no un vaporizador.",
        "Su función es lograr una <strong>molienda uniforme</strong>, ideal para la vaporización.",
        "Lo bastante compacto para <strong>el bolsillo, los viajes y el uso diario</strong>.",
        "Precio recomendado: <strong>$19.95</strong>."
       ]
      },
      {
       "title": "Qué lo hace diferente",
       "points": [
        "<strong>Dientes micro-redondeados</strong> —no los dientes afilados de un grinder tradicional— separan la flor con suavidad.",
        "Esa acción más delicada ayuda a <strong>preservar los cannabinoides y terpenos</strong>, responsables de la potencia y el sabor de cada variedad.",
        "La geometría redondeada de los dientes y un <strong>interior liso</strong> reducen la fricción y minimizan la acumulación, de modo que se desaprovecha menos flor.",
        "<strong>No lleva tamiz</strong>: al ser un diseño de 3 piezas, no incorpora tamiz de kief, así que <strong>los tricomas permanecen mezclados con el material molido</strong> en lugar de separarse por tamizado."
       ]
      },
      {
       "title": "Construcción y pruebas independientes",
       "points": [
        "Mecanizado en <strong>aluminio anodizado 6063 de grado aeronáutico</strong> de primera calidad, para un giro suave y una gran durabilidad a lo largo del tiempo.",
        "Sometido a pruebas independientes por parte de <strong>Orange Photonics</strong>.",
        "En esas pruebas, el diseño de dientes micro-redondeados registró la <strong>mayor retención de THC tras la molienda</strong> entre los tipos de grinder analizados."
       ]
      },
      {
       "title": "Cómo venderlo",
       "points": [
        "Combina con los vaporizadores de hierba seca <strong>G Pen Dash II</strong> y <strong>G Pen Dash+</strong>.",
        "Una molienda pareja significa una carga más eficiente y una mejor producción de vapor: un complemento fácil de sumar a cualquier dispositivo de hierba seca.",
        "Frase de posicionamiento: <strong>Más inteligente por diseño. Mejor con cada giro.</strong>"
       ]
      }
     ],
     "quiz": [
      {
       "q": "¿Qué es el G Pen Slim 3-Piece Grinder?",
       "choices": [
        "Un vaporizador de hierba seca",
        "Un grinder para flor",
        "Una batería 510",
        "Una herramienta de dab para concentrados"
       ],
       "answer": 1,
       "why": "El Slim es un grinder de 3 piezas: prepara la flor, no la vaporiza."
      },
      {
       "q": "¿Qué tipo de dientes utiliza el Slim?",
       "choices": [
        "Dientes afilados tradicionales",
        "Dientes micro-redondeados",
        "Cuchillas dentadas",
        "Muelas de cerámica"
       ],
       "answer": 1,
       "why": "Los dientes micro-redondeados separan la flor con suavidad, a diferencia de un grinder tradicional de dientes afilados."
      },
      {
       "q": "¿Por qué es importante el diseño de dientes redondeados?",
       "choices": [
        "Muele más rápido que cualquier otro diseño",
        "Ayuda a preservar los cannabinoides y terpenos",
        "Permite moler concentrados",
        "Elimina la necesidad de limpiar el grinder"
       ],
       "answer": 1,
       "why": "La separación más delicada ayuda a preservar los cannabinoides y terpenos que hacen única a cada variedad."
      },
      {
       "q": "¿Qué significa que este grinder sea «sin tamiz»?",
       "choices": [
        "Que no tiene tapa",
        "Que no lleva tamiz de kief, así que los tricomas permanecen mezclados con el material molido",
        "Que no se puede desarmar",
        "Que solo funciona con flor seca"
       ],
       "answer": 1,
       "why": "Un diseño de 3 piezas sin tamiz mantiene los tricomas dentro del material molido en lugar de tamizarlos hacia una cámara aparte."
      },
      {
       "q": "¿De cuántas piezas consta el Slim?",
       "choices": [
        "2",
        "3",
        "4",
        "5"
       ],
       "answer": 1,
       "why": "Es un grinder de 3 piezas."
      },
      {
       "q": "¿Con qué material está fabricado el Slim?",
       "choices": [
        "Acero inoxidable",
        "Aluminio anodizado 6063 de grado aeronáutico",
        "Bioplástico de cáñamo",
        "Titanio anodizado"
       ],
       "answer": 1,
       "why": "El aluminio anodizado 6063 de grado aeronáutico de primera calidad ofrece un giro suave y una durabilidad prolongada."
      },
      {
       "q": "¿Quién realizó las pruebas independientes del diseño de dientes del Slim?",
       "choices": [
        "Orange Photonics",
        "Santa Cruz Shredder",
        "SGS",
        "Underwriters Laboratories"
       ],
       "answer": 0,
       "why": "Orange Photonics llevó a cabo las pruebas independientes."
      },
      {
       "q": "¿Qué demostraron esas pruebas independientes?",
       "choices": [
        "El tiempo de molienda más rápido",
        "La mayor retención de THC tras la molienda entre los tipos de grinder analizados",
        "El precio por gramo más bajo",
        "El funcionamiento más silencioso"
       ],
       "answer": 1,
       "why": "El diseño de dientes micro-redondeados demostró la mayor retención de THC tras la molienda entre los distintos tipos de grinder analizados."
      },
      {
       "q": "¿Con qué dispositivos está pensado para combinarse el Slim?",
       "choices": [
        "Hydout y 510 Original",
        "Dash II y Dash+",
        "Melt y Connect",
        "Micro+ y Hyer"
       ],
       "answer": 1,
       "why": "Está diseñado para combinarse con los vaporizadores de hierba seca G Pen Dash II y G Pen Dash+."
      },
      {
       "q": "¿Cuál es el precio recomendado del G Pen Slim 3-Piece Grinder?",
       "choices": [
        "$14.95",
        "$19.95",
        "$29.95",
        "$49.95"
       ],
       "answer": 1,
       "why": "El Slim 3-Piece Grinder se vende a $19.95."
      }
     ]
    },
    "Melt Hot Knife": {
      "tagline": "Aprenda sobre el G Pen Melt y luego apruebe el cuestionario para certificarse como Especialista de Producto.",
      "modules": [
        {
          "title": "Descripción General del Producto",
          "points": [
            "El Melt es el <strong>cuchillo caliente más pequeño del mercado</strong> — una <strong>herramienta para dabs</strong> eléctrica con punta de cerámica para concentrados.",
            "Diseñado para recoger y depositar de forma rápida, limpia y <strong>sin desorden</strong>.",
            "PVP sugerido <strong>$19.95</strong>."
          ]
        },
        {
          "title": "Especificaciones Clave",
          "points": [
            "<strong>Punta de cerámica de calentamiento rápido</strong>.",
            "<strong>Carga simultánea USB-C</strong> — se puede usar mientras se carga.",
            "Cuerpo elegante de <strong>aluminio</strong>.",
            "Ultracompacto: <strong>3.94 × 0.5 × 0.25 in</strong>, ideal para el bolsillo y kits de viaje.",
            "Se combina con rigs y con el G Pen Micro+ / Hyer."
          ]
        },
        {
          "title": "Cómo Usarlo",
          "points": [
            "<strong>Encendido:</strong> presione el botón <strong>5×</strong>.",
            "<strong>Calentamiento:</strong> <strong>mantenga presionado</strong> el botón para iniciar el calentamiento — calienta por un máximo de <strong>5 segundos</strong> por cada pulsación.",
            "Use la punta de cerámica caliente para recoger o depositar su concentrado.",
            "Se puede operar <strong>mientras se carga</strong> (siempre listo).",
            "El dispositivo se apaga automáticamente tras <strong>10 minutos</strong> de inactividad; el LED parpadea <strong>8 veces</strong> cuando necesita carga."
          ]
        },
        {
          "title": "Contenido de la Caja",
          "points": [
            "G Pen Melt Hot Knife y una tapa protectora de viaje.",
            "<strong>NO se incluye un cable de carga USB-C</strong> — funciona con cualquier cargador USB-C."
          ]
        }
      ],
      "quiz": [
        {
          "q": "¿Qué es el G Pen Melt?",
          "choices": [
            "Un vaporizador de hierba seca",
            "Un cuchillo caliente eléctrico (herramienta para dabs) para concentrados",
            "Una batería 510",
            "Una pipa de agua"
          ],
          "why": "El Melt es un cuchillo caliente eléctrico con punta de cerámica para recoger y depositar concentrados."
        },
        {
          "q": "El Melt se promociona como el ___ más pequeño del mercado.",
          "choices": [
            "vaporizador",
            "cuchillo caliente",
            "batería",
            "rig"
          ],
          "why": "Es el cuchillo caliente más pequeño del mercado."
        },
        {
          "q": "¿De qué material está hecha la punta calentada del Melt?",
          "choices": [
            "Cerámica",
            "Titanio",
            "Cuarzo",
            "Acero"
          ],
          "why": "El Melt tiene una punta de cerámica de calentamiento rápido."
        },
        {
          "q": "¿Cómo se INICIA el calentamiento del Melt?",
          "choices": [
            "Se toca una vez",
            "Se mantiene presionado el botón",
            "Se presiona 5×",
            "Calienta automáticamente"
          ],
          "why": "Después de encenderlo, mantenga presionado el botón para iniciar el calentamiento."
        },
        {
          "q": "¿Cuál es el tiempo máximo de calentamiento por cada pulsación?",
          "choices": [
            "5 segundos",
            "30 segundos",
            "2 minutos",
            "10 segundos"
          ],
          "why": "El dispositivo calienta por un máximo de 5 segundos por cada pulsación."
        },
        {
          "q": "¿Se puede usar el Melt mientras se está cargando?",
          "choices": [
            "No",
            "Sí — carga simultánea USB-C",
            "Solo en una base especial",
            "Solo cuando está lleno"
          ],
          "why": "Sí — admite carga simultánea USB-C y se puede operar mientras se carga."
        },
        {
          "q": "¿Cuánto tiempo pasa hasta que el Melt se apaga automáticamente por inactividad?",
          "choices": [
            "1 minuto",
            "10 minutos",
            "1 hora",
            "Nunca lo hace"
          ],
          "why": "Se apaga automáticamente tras 10 minutos de inactividad."
        },
        {
          "q": "¿Cómo se enciende el Melt?",
          "choices": [
            "Se presiona el botón 5×",
            "Se mantiene presionado por 3 segundos",
            "Se toca una vez",
            "Se gira la tapa"
          ],
          "why": "Presione el botón 5× para encender el Melt."
        },
        {
          "q": "¿Cómo indica el Melt que necesita carga?",
          "choices": [
            "Emite un pitido",
            "El LED parpadea 8 veces",
            "Se calienta",
            "Nada"
          ],
          "why": "El botón LED parpadea 8 veces cuando es momento de cargarlo."
        },
        {
          "q": "¿Cuál es el PVP sugerido del Melt?",
          "choices": [
            "$12.95",
            "$19.95",
            "$49.95",
            "$99.95"
          ],
          "why": "El PVP sugerido del Melt es $19.95."
        }
      ]
    },
    "Hydout": {
      "tagline": "Aprenda sobre el G Pen Hydout y luego apruebe el cuestionario para convertirse en Especialista de Producto certificado.",
      "modules": [
        {
          "title": "Descripción general del producto",
          "points": [
            "El Hydout es una <strong>batería para cartucho 510 discreta</strong> y compacta, con una <strong>cubierta magnética oculta para la boquilla</strong>.",
            "Voltaje ajustable y pantalla LED para sesiones suaves, personalizables y discretas.",
            "PVP sugerido: <strong>$19.95</strong>."
          ]
        },
        {
          "title": "Especificaciones clave",
          "points": [
            "<strong>5 niveles de calor</strong> de <strong>2.4V a 3.8V</strong>.",
            "Modo de precalentamiento de 10 segundos a <strong>1.8V</strong>.",
            "Batería recargable de <strong>400mAh</strong>, carga <strong>USB-C</strong>.",
            "<strong>Pantalla LED</strong> brillante.",
            "Compatible con <strong>cartuchos 510 de hasta 2g</strong>.",
            "Dimensiones: <strong>90 × 37.5 × 18.5 mm</strong>."
          ]
        },
        {
          "title": "Modo de uso",
          "points": [
            "<strong>Cargar:</strong> retire la boquilla, enrosque un cartucho 510 y vuelva a colocar la boquilla.",
            "<strong>Encender/apagar:</strong> presione el botón <strong>5×</strong>.",
            "<strong>Ajustar el voltaje:</strong> presione <strong>3×</strong> para recorrer los niveles de calor.",
            "<strong>Precalentamiento:</strong> presione <strong>2×</strong> para un precalentamiento de 10 segundos a 1.8V.",
            "<strong>Inhalar:</strong> <strong>mantenga presionado</strong> el botón para activar e inhale.",
            "Apagado automático tras <strong>2 minutos</strong> de inactividad."
          ]
        },
        {
          "title": "Cuidado y contenido de la caja",
          "points": [
            "Limpie la boquilla y la conexión entre la batería y el cartucho con un hisopo de algodón y <strong>alcohol isopropílico</strong>. <strong>No sumerja la batería.</strong>",
            "En la caja: la batería 510 Hydout + cubierta magnética para la boquilla. El cartucho 510 y el cable USB-C <strong>no están incluidos</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "¿Qué es el G Pen Hydout?",
          "choices": [
            "Un vaporizador de hierba seca",
            "Una batería para cartucho 510",
            "Un cuchillo caliente",
            "Un infusor de gravedad"
          ],
          "why": "El Hydout es una batería para cartucho 510 discreta."
        },
        {
          "q": "¿Cuál es la característica distintiva de discreción del Hydout?",
          "choices": [
            "Una cubierta magnética oculta para la boquilla",
            "Una pantalla plegable",
            "Un motor silencioso",
            "Un recubrimiento de camuflaje"
          ],
          "why": "Tiene una cubierta magnética oculta para la boquilla que le da una apariencia discreta."
        },
        {
          "q": "¿Cuál es el rango de voltaje del Hydout?",
          "choices": [
            "1.0V–2.0V",
            "2.4V–3.8V (5 niveles)",
            "3.8V–4.8V",
            "Un único voltaje fijo"
          ],
          "why": "El Hydout ofrece 5 niveles de calor de 2.4V a 3.8V."
        },
        {
          "q": "¿Cuál es la capacidad de la batería del Hydout?",
          "choices": [
            "200mAh",
            "400mAh",
            "900mAh",
            "1,800mAh"
          ],
          "why": "Tiene una batería recargable de 400mAh."
        },
        {
          "q": "¿Cómo se enciende o apaga el Hydout?",
          "choices": [
            "Presionando el botón 5×",
            "Manteniéndolo presionado 3 segundos",
            "Presionando 2×",
            "Inhalando"
          ],
          "why": "Presione el botón 5× para encender o apagar el Hydout."
        },
        {
          "q": "¿Cómo se cambia el voltaje?",
          "choices": [
            "Presionando 3×",
            "Presionando 5×",
            "Manteniendo presionado el botón",
            "Girando la boquilla"
          ],
          "why": "Presione el botón 3× para recorrer los niveles de calor."
        },
        {
          "q": "¿Cómo se inhala con el Hydout?",
          "choices": [
            "Solo inhalando",
            "Manteniendo presionado el botón mientras se inhala",
            "Presionando 2×",
            "Presionando y soltando"
          ],
          "why": "Mantenga presionado el botón para activar e inhale."
        },
        {
          "q": "¿Qué hace presionar el botón 2×?",
          "choices": [
            "Lo apaga",
            "Inicia un precalentamiento de 10 segundos a 1.8V",
            "Lo bloquea",
            "Nada"
          ],
          "why": "Presionar 2× inicia un precalentamiento de 10 segundos a 1.8V."
        },
        {
          "q": "¿Cuánto tiempo pasa antes de que el Hydout se apague automáticamente?",
          "choices": [
            "2 minutos",
            "10 minutos",
            "30 segundos",
            "1 hora"
          ],
          "why": "El Hydout se apaga automáticamente tras 2 minutos de inactividad."
        },
        {
          "q": "¿Cuál es la forma correcta de limpiar el Hydout?",
          "choices": [
            "Sumergir toda la batería en alcohol",
            "Hisopo de algodón + alcohol isopropílico en la conexión — NO sumerja la batería",
            "Enjuagarlo bajo el agua",
            "Nunca necesita limpieza"
          ],
          "why": "Use un hisopo de algodón con alcohol isopropílico en los puntos de conexión; nunca sumerja la batería."
        }
      ]
    },
    "510 Original": {
      "tagline": "Aprenda sobre el G Pen 510 Original y luego apruebe el cuestionario para convertirse en Especialista de Producto certificado.",
      "modules": [
        {
          "title": "Descripción general del producto",
          "points": [
            "El 510 Original es la <strong>batería G Pen más pequeña y económica jamás creada</strong> — una versión moderna de la primera batería de Grenco, de 2012.",
            "Una <strong>batería para cartucho 510</strong> ultraportátil con <strong>activación por inhalación</strong>.",
            "PVP sugerido <strong>$12.95</strong>."
          ]
        },
        {
          "title": "Especificaciones clave",
          "points": [
            "<strong>Activada por inhalación</strong> — solo hay que inhalar (o mantener presionado el botón).",
            "<strong>Tres voltajes preestablecidos: 3.2 / 3.6 / 3.8V</strong>.",
            "Modo de precalentamiento de 10 segundos a <strong>1.8V</strong>.",
            "Batería de <strong>400mAh</strong> con <strong>carga simultánea (se puede usar mientras se carga) por USB-C</strong>.",
            "<strong>Pantalla</strong> digital.",
            "Dimensiones: <strong>24 × 21.1 × 56.7 mm</strong>."
          ]
        },
        {
          "title": "Cómo usarlo",
          "points": [
            "<strong>Carga del cartucho:</strong> enrosque un cartucho 510.",
            "<strong>Encendido/apagado:</strong> presione el botón <strong>5×</strong>.",
            "<strong>Ajuste del voltaje:</strong> presione <strong>3×</strong> para alternar entre 3.2 / 3.6 / 3.8V.",
            "<strong>Precalentamiento:</strong> presione <strong>2×</strong> para un precalentamiento de 10 segundos a 1.8V.",
            "<strong>Inhalación:</strong> simplemente <strong>inhale</strong> (activado por inhalación) — o mantenga presionado el botón.",
            "Apagado automático tras <strong>10 minutos</strong> de inactividad."
          ]
        },
        {
          "title": "Cuidado &amp; Contenido de la caja",
          "points": [
            "Limpie la conexión entre la batería y el cartucho con un hisopo de algodón y <strong>alcohol isopropílico</strong>. <strong>No sumerja la batería.</strong>",
            "En la caja: la batería 510 Original. El cargador USB-C y el cartucho 510 <strong>no están incluidos</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "¿Qué tiene de destacable el 510 Original?",
          "choices": [
            "Es la batería G Pen más grande",
            "Es la batería G Pen más pequeña y económica jamás creada (una versión de la original de 2012)",
            "Es un vaporizador de hierba seca",
            "Solo funciona con cartuchos G Pen"
          ],
          "why": "Es la batería G Pen más pequeña y económica jamás creada — una versión moderna de la primera batería de Grenco, de 2012."
        },
        {
          "q": "¿Cómo se activa una inhalación en el 510 Original?",
          "choices": [
            "Inhalando (está activado por inhalación) — o manteniendo presionado el botón",
            "Presionando 5×",
            "No funciona sin tocar la pantalla",
            "Girando el cartucho"
          ],
          "why": "El 510 Original está activado por inhalación — solo hay que inhalar, o mantener presionado el botón."
        },
        {
          "q": "¿Cuáles son los tres voltajes preestablecidos?",
          "choices": [
            "2.4 / 3.0 / 3.6V",
            "3.2 / 3.6 / 3.8V",
            "1.8 / 2.4 / 3.0V",
            "3.8 / 4.2 / 4.8V"
          ],
          "why": "Tiene tres voltajes preestablecidos: 3.2, 3.6 y 3.8V."
        },
        {
          "q": "¿Cuál es la capacidad de la batería del 510 Original?",
          "choices": [
            "150mAh",
            "400mAh",
            "900mAh",
            "1,100mAh"
          ],
          "why": "Tiene una batería de 400mAh con carga simultánea (se puede usar mientras se carga) por USB-C."
        },
        {
          "q": "¿Cómo se enciende o apaga el 510 Original?",
          "choices": [
            "Presionando el botón 5×",
            "Manteniéndolo presionado 3 segundos",
            "Presionando 3×",
            "Exhalando"
          ],
          "why": "Presione el botón 5× para encenderlo o apagarlo."
        },
        {
          "q": "¿Cómo se cambia el voltaje?",
          "choices": [
            "Presionando 3×",
            "Presionando 5×",
            "Manteniendo presionado el botón",
            "Enroscando el cartucho más fuerte"
          ],
          "why": "Presione el botón 3× para alternar entre 3.2 / 3.6 / 3.8V."
        },
        {
          "q": "¿Qué hace presionar 2×?",
          "choices": [
            "Lo apaga",
            "Inicia un precalentamiento de 10 segundos a 1.8V",
            "Bloquea la batería",
            "Nada"
          ],
          "why": "Presionar 2× inicia un precalentamiento de 10 segundos a 1.8V."
        },
        {
          "q": "¿Cuánto tiempo pasa antes de que el 510 Original se apague automáticamente?",
          "choices": [
            "2 minutos",
            "10 minutos",
            "30 segundos",
            "1 hora"
          ],
          "why": "Se apaga automáticamente tras 10 minutos de inactividad."
        },
        {
          "q": "¿Cómo se carga el 510 Original?",
          "choices": [
            "Micro-USB",
            "Carga simultánea (se puede usar mientras se carga) por USB-C",
            "Solo de forma inalámbrica",
            "Baterías reemplazables"
          ],
          "why": "Se carga por USB-C y admite carga simultánea (se puede usar mientras se carga)."
        },
        {
          "q": "¿Cuál es el PVP sugerido del 510 Original?",
          "choices": [
            "$12.95",
            "$19.95",
            "$49.95",
            "$9.95"
          ],
          "why": "Con $12.95, es la batería G Pen más económica jamás creada."
        }
      ]
    },
    "Dash+": {
      "tagline": "Domine el G Pen Dash+ y luego apruebe el cuestionario para convertirse en Especialista de Producto certificado.",
      "modules": [
        {
          "title": "Descripción General del Producto",
          "points": [
            "El Dash+ es un <strong>vaporizador de hierba seca</strong> compacto y portátil — la evolución en tamaño grande del exitoso G Pen Dash.",
            "Utiliza calentamiento <strong>híbrido de convección + conducción</strong> para sesiones rápidas, sabrosas y uniformes.",
            "Para <strong>solo hierba seca</strong>. PVP sugerido <strong>$99.95</strong>."
          ]
        },
        {
          "title": "Especificaciones Clave",
          "points": [
            "Cámara de calentamiento completamente de <strong>titanio</strong>.",
            "Alcanza la temperatura de vaporización en tan solo <strong>20 segundos</strong>.",
            "Batería recargable de iones de litio de <strong>1,800mAh</strong> con carga <strong>USB-C</strong>.",
            "<strong>Pantalla LED a todo color</strong> con control preciso de temperatura.",
            "<strong>Respuesta háptica</strong> e interfaz intuitiva de <strong>3 botones</strong>.",
            "Cuerpo duradero de <strong>aleación de zinc</strong>."
          ]
        },
        {
          "title": "Cómo Usarlo",
          "points": [
            "<strong>Cargar:</strong> retire la boquilla, cargue la cámara con hierba seca molida y vuelva a colocar la boquilla.",
            "<strong>Encendido/apagado:</strong> mantenga presionado el botón de encendido durante <strong>3 segundos</strong>.",
            "<strong>Ajuste la temperatura</strong> con los botones izquierdo (–) y derecho (+).",
            "<strong>Iniciar o cancelar una sesión:</strong> presione el botón de encendido <strong>2× en menos de 2 segundos</strong>. El dispositivo vibra y el temporizador de la sesión comienza una vez que se alcanza la temperatura.",
            "Cuando el temporizador de la sesión termina, el calentamiento se apaga automáticamente; el dispositivo se apaga después de aproximadamente 1 minuto de inactividad en espera.",
            "Presione el botón de encendido <strong>5×</strong> para abrir el menú de Ajustes (temporizador de sesión, °F/°C, brillo, hápticos)."
          ]
        },
        {
          "title": "Qué Incluye la Caja",
          "points": [
            "Vaporizador G Pen Dash+, funda de silicona para la boquilla, herramienta de carga con llavero y un <strong>cable de carga USB-C</strong> (incluido).",
            "Registre su dispositivo en <strong>gpen.com/register</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "¿Qué tipo de calentamiento utiliza el Dash+?",
          "choices": [
            "Solo conducción",
            "Híbrido de convección + conducción",
            "Llama abierta",
            "Inducción"
          ],
          "why": "El Dash+ utiliza calentamiento híbrido de convección + conducción para sesiones rápidas, uniformes y sabrosas."
        },
        {
          "q": "¿De qué material está hecha la cámara de calentamiento del Dash+?",
          "choices": [
            "Plástico",
            "Titanio",
            "Vidrio",
            "Acero inoxidable"
          ],
          "why": "Cuenta con una cámara de calentamiento completamente de titanio."
        },
        {
          "q": "¿Aproximadamente cuánto tarda el Dash+ en alcanzar la temperatura?",
          "choices": [
            "20 segundos",
            "2 minutos",
            "5 segundos",
            "45 segundos"
          ],
          "why": "El Dash+ alcanza la temperatura de vaporización en tan solo 20 segundos."
        },
        {
          "q": "¿Cuál es la capacidad de la batería del Dash+?",
          "choices": [
            "650mAh",
            "1,100mAh",
            "1,800mAh",
            "3,000mAh"
          ],
          "why": "Funciona con una batería recargable de iones de litio de 1,800mAh."
        },
        {
          "q": "¿Cómo se enciende el Dash+?",
          "choices": [
            "Tocar una vez",
            "Mantener presionado el botón de encendido durante 3 segundos",
            "Tocar 5 veces",
            "Agitarlo"
          ],
          "why": "Mantenga presionado el botón de encendido durante 3 segundos para encender o apagar."
        },
        {
          "q": "Después de ajustar la temperatura, ¿cómo se INICIA una sesión?",
          "choices": [
            "Presionar el botón de encendido 2× en menos de 2 segundos",
            "Mantener presionado durante 10 segundos",
            "Soplar dentro del dispositivo",
            "Se inicia por sí sola"
          ],
          "why": "Presione el botón de encendido 2× en menos de 2 segundos para iniciar (o cancelar) una sesión."
        },
        {
          "q": "¿Cómo se abre el menú de Ajustes?",
          "choices": [
            "Presionar el botón de encendido 5×",
            "Mantener presionados ambos botones laterales",
            "Tocar una vez",
            "Conectar el USB-C"
          ],
          "why": "Presione el botón de encendido 5× para entrar al menú de Ajustes (temporizador, °F/°C, brillo, hápticos)."
        },
        {
          "q": "¿Qué tipo de pantalla tiene el Dash+?",
          "choices": [
            "Sin pantalla",
            "OLED monocromática",
            "LED a todo color",
            "Tinta electrónica"
          ],
          "why": "El Dash+ tiene una pantalla LED a todo color."
        },
        {
          "q": "¿Cuál es el PVP sugerido del Dash+?",
          "choices": [
            "$49.95",
            "$99.95",
            "$149.95",
            "$79.95"
          ],
          "why": "El PVP sugerido del Dash+ es $99.95."
        },
        {
          "q": "¿De qué material está hecho el cuerpo del Dash+?",
          "choices": [
            "Aleación de zinc",
            "Silicona",
            "Madera",
            "Fibra de carbono"
          ],
          "why": "El Dash+ tiene un cuerpo duradero de aleación de zinc."
        }
      ]
    },
    "Hydout — Retro": {
      "tagline": "Conozca el G Pen Hydout y luego apruebe el cuestionario para convertirse en Especialista de Producto certificado.",
      "modules": [
        {
          "title": "Descripción General del Producto",
          "points": [
            "El Hydout es una <strong>batería para cartucho 510 discreta</strong> y compacta, con una <strong>cubierta magnética oculta para la boquilla</strong>.",
            "Voltaje ajustable más una pantalla LED para sesiones suaves, personalizables y discretas.",
            "PVP sugerido <strong>$19.95</strong>."
          ]
        },
        {
          "title": "Especificaciones Clave",
          "points": [
            "<strong>5 niveles de calor</strong> de <strong>2.4V a 3.8V</strong>.",
            "Modo de precalentamiento de 10 segundos a <strong>1.8V</strong>.",
            "Batería recargable de <strong>400mAh</strong>, carga <strong>USB-C</strong>.",
            "<strong>Pantalla LED</strong> brillante.",
            "Compatible con <strong>cartuchos 510 de hasta 2g</strong>.",
            "Dimensiones: <strong>90 × 37.5 × 18.5 mm</strong>."
          ]
        },
        {
          "title": "Modo de Uso",
          "points": [
            "<strong>Carga del cartucho:</strong> retire la boquilla, enrosque un cartucho 510 y vuelva a colocar la boquilla.",
            "<strong>Encendido/apagado:</strong> presione el botón <strong>5×</strong>.",
            "<strong>Ajuste del voltaje:</strong> presione <strong>3×</strong> para alternar entre los niveles de calor.",
            "<strong>Precalentamiento:</strong> presione <strong>2×</strong> para un precalentamiento de 10 segundos a 1.8V.",
            "<strong>Inhalación:</strong> <strong>mantenga presionado</strong> el botón para activar e inhalar.",
            "Apagado automático tras <strong>2 minutos</strong> de inactividad."
          ]
        },
        {
          "title": "Cuidado &amp; Contenido de la Caja",
          "points": [
            "Limpie la boquilla y la conexión entre la batería y el cartucho con un hisopo de algodón y <strong>Alcohol Isopropílico</strong>. <strong>No sumerja la batería.</strong>",
            "En la caja: la batería 510 Hydout + la cubierta magnética para la boquilla. El cartucho 510 y el cable USB-C <strong>no están incluidos</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "¿Qué es el G Pen Hydout?",
          "choices": [
            "Un vaporizador de hierba seca",
            "Una batería para cartucho 510",
            "Un cuchillo caliente",
            "Un infusor de gravedad"
          ],
          "why": "El Hydout es una batería discreta para cartucho 510."
        },
        {
          "q": "¿Cuál es la característica discreta distintiva del Hydout?",
          "choices": [
            "Una cubierta magnética oculta para la boquilla",
            "Una pantalla plegable",
            "Un motor silencioso",
            "Un revestimiento de camuflaje"
          ],
          "why": "Tiene una cubierta magnética oculta para la boquilla que le da un aspecto discreto."
        },
        {
          "q": "¿Cuál es el rango de voltaje del Hydout?",
          "choices": [
            "1.0V–2.0V",
            "2.4V–3.8V (5 niveles)",
            "3.8V–4.8V",
            "Un único voltaje fijo"
          ],
          "why": "El Hydout ofrece 5 niveles de calor de 2.4V a 3.8V."
        },
        {
          "q": "¿Cuál es la capacidad de la batería del Hydout?",
          "choices": [
            "200mAh",
            "400mAh",
            "900mAh",
            "1,800mAh"
          ],
          "why": "Tiene una batería recargable de 400mAh."
        },
        {
          "q": "¿Cómo se enciende o se apaga el Hydout?",
          "choices": [
            "Presionando el botón 5×",
            "Manteniéndolo presionado 3 segundos",
            "Presionando 2×",
            "Inhalando"
          ],
          "why": "Presione el botón 5× para encender o apagar el Hydout."
        },
        {
          "q": "¿Cómo se cambia el voltaje?",
          "choices": [
            "Presionando 3×",
            "Presionando 5×",
            "Manteniendo presionado el botón",
            "Girando la boquilla"
          ],
          "why": "Presione el botón 3× para alternar entre los niveles de calor."
        },
        {
          "q": "¿Cómo se inhala con el Hydout?",
          "choices": [
            "Solo inhalando",
            "Manteniendo presionado el botón mientras se inhala",
            "Presionando 2×",
            "Presionando y soltando"
          ],
          "why": "Mantenga presionado el botón para activar e inhalar."
        },
        {
          "q": "¿Qué hace presionar el botón 2×?",
          "choices": [
            "Lo apaga",
            "Inicia un precalentamiento de 10 segundos a 1.8V",
            "Lo bloquea",
            "Nada"
          ],
          "why": "Presionar 2× inicia un precalentamiento de 10 segundos a 1.8V."
        },
        {
          "q": "¿Cuánto tiempo pasa hasta que el Hydout se apaga automáticamente?",
          "choices": [
            "2 minutos",
            "10 minutos",
            "30 segundos",
            "1 hora"
          ],
          "why": "El Hydout se apaga automáticamente tras 2 minutos de inactividad."
        },
        {
          "q": "¿Cuál es la forma correcta de limpiar el Hydout?",
          "choices": [
            "Sumergir toda la batería en alcohol",
            "Hisopo de algodón + Alcohol Isopropílico en la conexión — NO sumerja la batería",
            "Enjuagarlo con agua",
            "Nunca necesita limpieza"
          ],
          "why": "Use un hisopo de algodón con Alcohol Isopropílico en los puntos de conexión; nunca sumerja la batería."
        }
      ]
    },
    "Dash II": {
      "tagline": "Conozca el G Pen Dash II a fondo y luego apruebe el cuestionario para convertirse en Especialista de Producto certificado.",
      "modules": [
        {
          "title": "Descripción General del Producto",
          "points": [
            "El Dash II es un <strong>vaporizador de hierba seca</strong> de bolsillo — la siguiente evolución del exitoso G Pen Dash.",
            "Es <strong>solo para hierba seca</strong> — no es compatible con concentrados, aceites ni cartuchos 510.",
            "Utiliza un sistema de calentamiento por <strong>conducción</strong> para un vapor confiable y un calentamiento de ~30 segundos.",
            "PVP sugerido: <strong>$49.95</strong>."
          ]
        },
        {
          "title": "Especificaciones Clave",
          "points": [
            "Cámara de calentamiento de <strong>cerámica de 0.4g</strong> — más grande que la del Dash original y más fácil de cargar.",
            "Batería de <strong>1,100mAh</strong>.",
            "Carga por <strong>USB-C</strong> con <strong>carga simultánea</strong> — se puede usar mientras está conectado.",
            "La <strong>pantalla OLED</strong> muestra la temperatura y el nivel de batería en tiempo real.",
            "<strong>Control de temperatura ajustable</strong> y preciso.",
            "Dimensiones <strong>97 × 35 × 21 mm</strong>, peso <strong>59.5 g</strong>.",
            "<strong>Herramienta de púa</strong> integrada para cargar y limpiar."
          ]
        },
        {
          "title": "Cómo Usarlo",
          "points": [
            "<strong>Cargue</strong> el dispositivo con cualquier cargador USB-C.",
            "<strong>Cargue el material:</strong> retire la boquilla, llene por completo la cámara con material seco y compacte ligeramente con la herramienta de púa — <strong>no lo compacte en exceso</strong>.",
            "<strong>Encendido:</strong> mantenga presionado el botón durante <strong>3 segundos</strong>.",
            "Use <strong>– / +</strong> para ajustar la temperatura de la sesión.",
            "<strong>Inicie una sesión:</strong> presione el botón <strong>2× (en menos de 2 segundos)</strong>. Presione <strong>2×</strong> de nuevo para cancelar en cualquier momento.",
            "Inhale desde la boquilla — las <strong>inhalaciones largas y sostenidas</strong> dan los mejores resultados.",
            "Presione el botón <strong>5×</strong> para abrir el menú de configuración del dispositivo."
          ]
        },
        {
          "title": "Cómo Limpiarlo y Mantenerlo",
          "points": [
            "<strong>Después de cada uso:</strong> limpie la rejilla del filtro de la boquilla y el recipiente con la herramienta de púa incluida.",
            "<strong>Limpieza profunda:</strong> retire el inserto de la boquilla y límpielo con <strong>alcohol isopropílico</strong>.",
            "Deje siempre que todas las piezas <strong>se sequen por completo</strong> antes de volver a armarlas."
          ]
        },
        {
          "title": "Garantía y Registro",
          "points": [
            "Respaldado por una garantía limitada de <strong>6 meses</strong>.",
            "Registrar el dispositivo en <strong>gpen.com/register</strong> añade otros 6 meses — una garantía limitada completa de <strong>1 año</strong>.",
            "<strong>En la caja:</strong> dispositivo Dash II, herramienta de carga (púa) integrada, funda de silicona para la boquilla. <strong>NO se incluye cable de carga USB-C.</strong>"
          ]
        },
        {
          "title": "Mejoras Frente al Dash Original",
          "points": [
            "PVP sugerido más bajo ($49.95), <strong>control de temperatura</strong> ajustable y <strong>pantalla OLED</strong>.",
            "Cámara más grande de <strong>0.4g</strong> y batería más potente de <strong>1,100mAh</strong>.",
            "Carga moderna por <strong>USB-C</strong> con carga simultánea, y un diseño de cámara actualizado."
          ]
        }
      ],
      "quiz": [
        {
          "q": "¿Qué material está diseñado para vaporizar el G Pen Dash II?",
          "choices": [
            "Solo hierba seca",
            "Concentrados y aceites",
            "Cartuchos 510",
            "Cualquiera de los anteriores"
          ],
          "why": "El Dash II es un vaporizador únicamente de hierba seca — no es compatible con concentrados, aceites ni cartuchos 510."
        },
        {
          "q": "¿De qué tamaño es la cámara de calentamiento del Dash II?",
          "choices": [
            "0.2g",
            "0.4g de cerámica",
            "1.0g",
            "No tiene cámara"
          ],
          "why": "El Dash II tiene una cámara de cerámica mejorada de 0.4g — más grande que la del Dash original y más fácil de cargar."
        },
        {
          "q": "¿Qué tipo de sistema de calentamiento utiliza el Dash II?",
          "choices": [
            "Convección",
            "Conducción",
            "Inducción",
            "Llama abierta"
          ],
          "why": "Utiliza un sistema de calentamiento por conducción, con un calentamiento de aproximadamente 30 segundos."
        },
        {
          "q": "¿Aproximadamente cuánto tarda el Dash II en calentarse?",
          "choices": [
            "5 segundos",
            "30 segundos",
            "2 minutos",
            "5 minutos"
          ],
          "why": "El calentamiento toma aproximadamente 30 segundos."
        },
        {
          "q": "¿Cuál es la capacidad de la batería del Dash II?",
          "choices": [
            "650mAh",
            "900mAh",
            "1,100mAh",
            "2,200mAh"
          ],
          "why": "El Dash II funciona con una batería de 1,100mAh — una mejora respecto al Dash original."
        },
        {
          "q": "¿Cuál afirmación sobre la carga del Dash II es VERDADERA?",
          "choices": [
            "Usa Micro-USB",
            "Se carga por USB-C y admite carga simultánea (se puede usar mientras está conectado)",
            "Se carga únicamente de forma inalámbrica",
            "No se puede usar mientras se carga"
          ],
          "why": "El Dash II se carga por USB-C y admite carga simultánea, por lo que se puede usar mientras está conectado."
        },
        {
          "q": "¿Cómo se enciende el Dash II?",
          "choices": [
            "Presionando el botón una vez",
            "Manteniendo presionado el botón durante 3 segundos",
            "Presionando el botón 5 veces",
            "Deslizando el interruptor de encendido"
          ],
          "why": "Mantenga presionado el botón durante 3 segundos para encenderlo."
        },
        {
          "q": "Después de ajustar la temperatura, ¿cómo se INICIA una sesión?",
          "choices": [
            "Presionando el botón 2× en menos de 2 segundos",
            "Manteniéndolo presionado durante 10 segundos",
            "Soplando en la boquilla",
            "Se inicia automáticamente"
          ],
          "why": "Presione el botón 2× (en menos de 2 segundos) para iniciar una sesión; presione 2× de nuevo para cancelar."
        },
        {
          "q": "Para una limpieza PROFUNDA, ¿qué se debe usar en el inserto de la boquilla retirado?",
          "choices": [
            "Agua y jabón",
            "Alcohol isopropílico",
            "Vinagre",
            "Solo secarlo con un paño"
          ],
          "why": "Para una limpieza profunda, retire el inserto de la boquilla y límpielo con alcohol isopropílico; luego déjelo secar por completo antes de volver a armarlo."
        },
        {
          "q": "¿Cómo funciona la garantía del Dash II?",
          "choices": [
            "Sin garantía",
            "Garantía de por vida",
            "Limitada de 6 meses, extendida a 1 año si se registra el dispositivo",
            "Solo devoluciones por 30 días"
          ],
          "why": "Es una garantía limitada de 6 meses; registrarse en gpen.com/register añade 6 meses más para un año completo."
        },
        {
          "q": "¿Cuál es el PVP sugerido del Dash II?",
          "choices": [
            "$29.95",
            "$49.95",
            "$79.95",
            "$99.95"
          ],
          "why": "El Dash II se lanzó con un PVP sugerido más bajo de $49.95."
        },
        {
          "q": "¿Cuál artículo NO se incluye en la caja?",
          "choices": [
            "El dispositivo Dash II",
            "Herramienta de púa/carga integrada",
            "Funda de silicona para la boquilla",
            "Un cable de carga USB-C"
          ],
          "why": "No se incluye cable de carga USB-C — se puede usar cualquier cargador USB-C."
        }
      ]
    },
    "510 Original — Retro": {
      "tagline": "Conozca el G Pen 510 Original y luego apruebe el cuestionario para convertirse en Especialista de Producto certificado.",
      "modules": [
        {
          "title": "Descripción General del Producto",
          "points": [
            "El 510 Original es la <strong>batería G Pen más pequeña y más económica jamás creada</strong> — una versión moderna de la primerísima batería de Grenco de 2012.",
            "Una <strong>batería para cartucho 510</strong> ultraportátil con <strong>activación por inhalación</strong>.",
            "PVP sugerido: <strong>$12.95</strong>."
          ]
        },
        {
          "title": "Especificaciones Clave",
          "points": [
            "<strong>Activado por inhalación</strong> — solo hay que inhalar (o mantener presionado el botón).",
            "<strong>Tres voltajes preestablecidos: 3.2 / 3.6 / 3.8V</strong>.",
            "Modo de precalentamiento de <strong>1.8V</strong> durante 10 segundos.",
            "Batería de <strong>400mAh</strong> con <strong>carga simultánea (se puede usar mientras se carga) por USB-C</strong>.",
            "<strong>Pantalla</strong> digital.",
            "Dimensiones: <strong>24 × 21.1 × 56.7 mm</strong>."
          ]
        },
        {
          "title": "Modo de Uso",
          "points": [
            "<strong>Cargar:</strong> enrosque un cartucho 510.",
            "<strong>Encender/apagar:</strong> presione el botón <strong>5×</strong>.",
            "<strong>Ajustar el voltaje:</strong> presione <strong>3×</strong> para alternar entre 3.2 / 3.6 / 3.8V.",
            "<strong>Precalentamiento:</strong> presione <strong>2×</strong> para un precalentamiento de 1.8V durante 10 segundos.",
            "<strong>Inhalar:</strong> simplemente <strong>inhale</strong> (activado por inhalación) — o mantenga presionado el botón.",
            "Apagado automático tras <strong>10 minutos</strong> de inactividad."
          ]
        },
        {
          "title": "Cuidado &amp; Contenido de la Caja",
          "points": [
            "Limpie la conexión entre la batería y el cartucho con un hisopo de algodón y <strong>alcohol isopropílico</strong>. <strong>No sumerja la batería.</strong>",
            "En la caja: la batería 510 Original. El cargador USB-C y el cartucho 510 <strong>no están incluidos</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "¿Qué tiene de notable el 510 Original?",
          "choices": [
            "Es la batería G Pen más grande",
            "Es la batería G Pen más pequeña y más económica jamás creada (una versión de la original de 2012)",
            "Es un vaporizador de hierba seca",
            "Solo funciona con cartuchos G Pen"
          ],
          "why": "Es la batería G Pen más pequeña y económica jamás creada — una versión moderna de la primera batería de Grenco de 2012."
        },
        {
          "q": "¿Cómo se activa una inhalación en el 510 Original?",
          "choices": [
            "Inhalando (está activado por inhalación) — o manteniendo presionado el botón",
            "Presionando 5×",
            "No funciona sin tocar la pantalla",
            "Girando el cartucho"
          ],
          "why": "El 510 Original está activado por inhalación — solo hay que inhalar, o mantener presionado el botón."
        },
        {
          "q": "¿Cuáles son los tres voltajes preestablecidos?",
          "choices": [
            "2.4 / 3.0 / 3.6V",
            "3.2 / 3.6 / 3.8V",
            "1.8 / 2.4 / 3.0V",
            "3.8 / 4.2 / 4.8V"
          ],
          "why": "Tiene tres voltajes preestablecidos: 3.2, 3.6 y 3.8V."
        },
        {
          "q": "¿Cuál es la capacidad de la batería del 510 Original?",
          "choices": [
            "150mAh",
            "400mAh",
            "900mAh",
            "1,100mAh"
          ],
          "why": "Tiene una batería de 400mAh con carga simultánea (se puede usar mientras se carga) por USB-C."
        },
        {
          "q": "¿Cómo se enciende o apaga el 510 Original?",
          "choices": [
            "Presionando el botón 5×",
            "Manteniéndolo presionado 3 segundos",
            "Presionando 3×",
            "Exhalando"
          ],
          "why": "Presione el botón 5× para encenderlo o apagarlo."
        },
        {
          "q": "¿Cómo se cambia el voltaje?",
          "choices": [
            "Presionando 3×",
            "Presionando 5×",
            "Manteniendo presionado el botón",
            "Enroscando el cartucho más fuerte"
          ],
          "why": "Presione el botón 3× para alternar entre 3.2 / 3.6 / 3.8V."
        },
        {
          "q": "¿Qué hace presionar 2×?",
          "choices": [
            "Lo apaga",
            "Inicia un precalentamiento de 1.8V durante 10 segundos",
            "Bloquea la batería",
            "Nada"
          ],
          "why": "Presionar 2× inicia un precalentamiento de 1.8V durante 10 segundos."
        },
        {
          "q": "¿Cuánto tiempo pasa hasta que el 510 Original se apaga automáticamente?",
          "choices": [
            "2 minutos",
            "10 minutos",
            "30 segundos",
            "1 hora"
          ],
          "why": "Se apaga automáticamente tras 10 minutos de inactividad."
        },
        {
          "q": "¿Cómo se carga el 510 Original?",
          "choices": [
            "Micro-USB",
            "Carga simultánea (se puede usar mientras se carga) por USB-C",
            "Solo de forma inalámbrica",
            "Baterías reemplazables"
          ],
          "why": "Se carga por USB-C y admite carga simultánea (se puede usar mientras se carga)."
        },
        {
          "q": "¿Cuál es el PVP sugerido del 510 Original?",
          "choices": [
            "$12.95",
            "$19.95",
            "$49.95",
            "$9.95"
          ],
          "why": "A $12.95, es la batería G Pen más económica jamás creada."
        }
      ]
    }
  },
  "products": {
    "Slim 3-Piece Grinder": {
     "description": "Un grinder de 3 piezas, delgado y sin tamiz, con dientes micro-redondeados que separan la flor con suavidad para lograr una molienda uniforme: creado para combinar con el Dash II y el Dash+.",
     "highlights": [
      "Dientes micro-redondeados para una molienda suave y pareja",
      "Ayuda a preservar los cannabinoides y terpenos",
      "Diseño de 3 piezas sin tamiz: los tricomas se quedan en su material",
      "Interior liso que reduce la fricción y la acumulación",
      "Aluminio anodizado 6063 de grado aeronáutico",
      "La mayor retención de THC tras la molienda en las pruebas de Orange Photonics",
      "Tapa magnética que mantiene el contenido seguro",
      "Perfil compacto para el bolsillo y los viajes",
      "Combina con el G Pen Dash II y el Dash+"
     ],
     "fullDescription": [
      "Toda gran sesión empieza con una mejor molienda. El G Pen Slim 3-Piece Grinder está diseñado con innovadores dientes micro-redondeados que separan la flor con suavidad hasta lograr una molienda uniforme, al tiempo que ayudan a preservar los cannabinoides y terpenos que hacen única a cada variedad.",
      "A diferencia de los grinders tradicionales de dientes afilados, la geometría redondeada de los dientes del Slim y su interior liso reducen la fricción y minimizan la acumulación, para que más flor se quede donde corresponde. El diseño de 3 piezas sin tamiz también mantiene los tricomas mezclados con el material molido en lugar de separarlos por tamizado, y su perfil compacto resulta perfecto para el bolsillo, los viajes y el uso diario.",
      "Elaborado en aluminio anodizado 6063 de grado aeronáutico de primera calidad, el G Pen Slim ofrece un giro suave, una durabilidad prolongada y un rendimiento de precisión. Respaldado por las pruebas independientes de Orange Photonics, su innovador diseño de dientes micro-redondeados demostró la mayor retención de THC tras la molienda entre los distintos tipos de grinder analizados.",
      "Concebido para producir una molienda uniforme e ideal para la vaporización, el G Pen Slim 3-Piece Grinder combina a la perfección con los vaporizadores de hierba seca G Pen Dash II y G Pen Dash+, y le ayuda a aprovechar al máximo cada carga con una molienda pareja y eficiente, optimizada para una producción de vapor llena de sabor.",
      "Más inteligente por diseño. Mejor con cada giro."
     ]
    },
    "Dash II": {
      "description": "La siguiente evolución del Dash más vendido: un vaporizador de hierba seca de bolsillo mejorado en todos los aspectos, con calentamiento más rápido, mejor flujo de aire y control de temperatura más preciso.",
      "highlights": [
        "Vaporizador de hierba seca de bolsillo",
        "Calentamiento en 30 segundos",
        "Control de temperatura preciso",
        "Pantalla OLED",
        "Cámara de cerámica de 0.4 g mejorada (carga más fácil)",
        "Herramienta de pinza (Pick Tool)",
        "Batería de 1,100mAh",
        "Carga simultánea USB-C (se puede usar mientras se carga)"
      ],
      "warranty": "Garantía limitada de 6 meses, extendida a 1 año si se registra",
      "fullDescription": [
        "La nueva evolución de nuestro vaporizador Dash, el más vendido: mejorado en todos los aspectos y ahora por solo $49.95.",
        "El G Pen Dash II es un vaporizador de hierba seca de bolsillo con control preciso de temperatura, pantalla OLED y una cámara de cerámica de 0.4g mejorada, diseñada para ofrecer mejor rendimiento y una carga más fácil. Impulsado por una batería de 1,100mAh de mayor duración, el Dash II brinda sesiones suaves y confiables, con calentamiento en 30 segundos y carga simultánea por USB-C.",
        "Más control. Carga más fácil. Mejor rendimiento."
      ],
      "box": {
        "contents": [
          "Vaporizador de hierba seca G Pen Dash II",
          "Herramienta de carga integrada",
          "Funda de silicona para boquilla",
          "*Cable de carga USB-C no incluido"
        ]
      }
    },
    "510 Original — Retro": {
      "description": "La edición de la Colección Retro del 510 Original combina un suave acabado translúcido vintage con el mismo rendimiento 510 ultraportátil y activado por inhalación, inspirado en la batería original de G Pen de 2012.",
      "highlights": [
        "Acabado retro translúcido",
        "Activación por inhalación",
        "Tres voltajes preestablecidos (3.2 / 3.6 / 3.8V)",
        "Modo de precalentamiento de 1.8V por 10 segundos",
        "Batería de 400mAh",
        "Carga simultánea USB-C (se puede usar mientras se carga)",
        "Pantalla digital",
        "24 × 21.1 × 56.7 mm"
      ],
      "warranty": "Garantía limitada — consulte la política",
      "fullDescription": [
        "Original. Renovado. Retro.",
        "De vuelta al origen, ahora con un acabado retro impecable.",
        "El G Pen 510 Original de la Colección Retro combina el diseño transparente de siempre con un intenso color translúcido que no pasa desapercibido. Inspirada en nuestra primera batería 510 de 2012, esta edición renovada conserva la sencillez y fiabilidad del original, perfeccionadas para las sesiones de hoy, esté donde esté.",
        "Con apenas 24 × 21.1 × 56.7 mm, es la batería G Pen más pequeña jamás fabricada: tan compacta que se integra sin esfuerzo en su día a día. El sistema activado por inhalación hace que su uso sea sencillo y sin botones, mientras que la interfaz de un solo botón le da control sobre tres niveles de voltaje preconfigurados (3.2/3.6/3.8V), un modo de precalentamiento de 1.8V durante 10 segundos y la pantalla digital.",
        "Su batería de 400 mAh con carga simultánea por USB-C mantiene el dispositivo listo cuando usted lo está, incluso mientras se carga. Con su carcasa retro translúcida y el rendimiento 510 mejorado, esta batería de bolsillo ofrece la mezcla perfecta entre estilo vintage y funcionalidad diaria.",
        "Simple. Fiable. Icónica. El original ha vuelto.",
        "*Cartucho 510 no incluido",
        "**Cargador USB-C no incluido"
      ],
      "box": {
        "contents": [
          "Batería G Pen 510 Original",
          "*Cargador USB C no incluido",
          "*Cartucho 510 no incluido"
        ]
      }
    },
    "Melt Hot Knife": {
      "description": "El G Pen Melt es el cuchillo caliente más pequeño del mercado: una herramienta de dab compacta con punta de cerámica para recoger y depositar concentrados de forma rápida, limpia y sin desorden.",
      "highlights": [
        "El cuchillo caliente más pequeño del mercado",
        "Punta de cerámica de calentamiento rápido",
        "Carga simultánea USB-C (se puede usar mientras se carga)",
        "Elegante cuerpo de aluminio",
        "Ultracompacto: 3.94 × 0.5 × 0.25 in",
        "Recolección y depósito sin desorden",
        "Ideal para el bolsillo y el kit de viaje",
        "Compatible con rigs, Micro+ y Hyer"
      ],
      "warranty": "Garantía limitada — consulte la política",
      "fullDescription": [
        "Le presentamos el nuevo G Pen Melt Hot Knife: el cuchillo caliente más pequeño del mercado y la forma más rápida y limpia de preparar sus concentrados. Con apenas 3.94 pulgadas de alto, 0.5 pulgadas de ancho y 0.25 pulgadas de profundidad, Melt es ultracompacto, ultraportátil y está hecho para desaparecer en cualquier bolsillo o kit de viaje.",
        "Diseñado para recoger sin ensuciar y depositar con precisión, Melt convierte las situaciones más pegajosas en algo increíblemente sencillo. Su punta de cerámica de calentamiento rápido alcanza la temperatura al instante para lograr transferencias perfectas siempre. Sin herramientas pegajosas. Sin desastres de reclaim. Sin torpezas.",
        "Y ahora, con carga simultánea por USB-C, puede seguir usando Melt incluso mientras está conectado, porque lo único peor que una herramienta de dab sin batería es tener que esperar a que se cargue.",
        "Con su elegante cuerpo de aluminio, su puerto universal USB-C y la inconfundible silueta de G Pen, Melt es su nuevo imprescindible diario: ya sea para cargar un rig, rellenar un G Pen Micro+ o preparar su G Pen Hyer.",
        "Tamaño mínimo. Potencia máxima. Cero desorden. Siempre listo."
      ],
      "box": {
        "contents": [
          "G Pen Melt Hot Knife",
          "Tapa protectora de viaje",
          "*Cable de carga USB C no incluido"
        ]
      }
    },
    "Connect": {
      "description": "Un vaporizador de concentrados sin soplete que convierte cualquier pipa de agua con conexión de vidrio a vidrio en el rig de dab definitivo, sin necesidad de soplete ni de un nail expuesto.",
      "highlights": [
        "Calentamiento de cerámica sin soplete — sin llamas abiertas",
        "Calentamiento en 5 segundos para un vapor denso e inmediato",
        "Incluye adaptadores de vidrio de 10mm, 14mm y 18mm",
        "Flujo de aire inverso patentado para una vaporización uniforme",
        "Tres ajustes de temperatura + modo de inhalación prolongada"
      ],
      "warranty": "Garantía limitada de 1 año",
      "fullDescription": [
        "La mejor alternativa sin soplete a los rigs tradicionales. El G Pen Connect es un vaporizador de concentrados revolucionario para pipas de agua que elimina la necesidad de un soplete y de un nail expuesto. Este vaporizador de concentrados de calentamiento rápido alcanza la temperatura óptima en cinco segundos y ofrece vapor de calidad premium sin complicaciones.",
        "¿Por qué elegir el G Pen Connect?",
        "Tecnología sin soplete: un vaporizador de concentrados con calentamiento de cerámica, seguro y práctico, sin llamas abiertas.",
        "Calentamiento en 5 segundos: activación inmediata para producir vapor denso al instante.",
        "Compatibilidad universal: incluye adaptadores de vidrio de 10 mm, 14 mm y 18 mm para cualquier pieza de agua con conexión de vidrio a vidrio.",
        "Flujo de aire inverso patentado: garantiza una vaporización uniforme y eficiente de los concentrados.",
        "Tres niveles de temperatura: personalice su experiencia según el tipo de concentrado y sus preferencias de sabor.",
        "Modo de inhalación extendida: para sesiones más largas y potentes.",
        "Potente batería de 850 mAh: soporta varias sesiones seguidas y admite carga simultánea.",
        "Liberación de carburador con resorte: control instantáneo del flujo de aire para despejar la cámara sin esfuerzo.",
        "Calidad de construcción premium: impulsado por un elemento de calentamiento de cerámica que preserva el sabor del concentrado y ofrece inhalaciones suaves y potentes al combinarlo con su pieza de agua favorita. La conexión magnética de encaje instantáneo garantiza una preparación rápida y sin esfuerzo en todo momento.",
        "Portátil y listo para viajar: a pesar de su potencia, el G Pen Connect es lo suficientemente compacto para llevarlo a donde sea. Cada kit incluye una bolsa de cáñamo para transportarlo y guardarlo con facilidad.",
        "El kit completo incluye: dispositivo G Pen Connect, adaptadores de vidrio de 10 mm, 14 mm y 18 mm, bolsa de viaje de cáñamo, cable de carga USB y manual de usuario.",
        "¿Listo para dejar atrás su rig tradicional? Descubra nuestras colaboraciones de edición limitada Cookies x G Pen Connect y Dr. Greenthumb's x G Pen Connect.",
        "Tecnología patentada:",
        "US 10,004,264 B2",
        "US 10,021,909 B2",
        "US 10,188,145 B2",
        "US 10,321,721 B2",
        "US 10,327,470 B2",
        "*Este producto no está diseñado para usarse con tabaco, e-líquidos con nicotina, ni con ninguna nicotina sintética o sustituto de nicotina.",
        "\"@context\": \"https://schema.org\","
      ]
    },
    "510 Original": {
      "description": "La batería G Pen más pequeña y accesible hasta la fecha, el 510 Original reinventa la primera batería de Grenco de 2012 con un rendimiento moderno, ultraportátil y activado por inhalación para cartuchos 510.",
      "highlights": [
        "La batería G Pen más pequeña jamás creada",
        "Activación por inhalación — solo inhale y listo",
        "Tres voltajes preestablecidos (3.2 / 3.6 / 3.8V)",
        "Modo de precalentamiento de 1.8V por 10 segundos",
        "Batería de 400mAh",
        "Carga simultánea USB-C (se puede usar mientras se carga)",
        "Pantalla digital",
        "24 × 21.1 × 56.7 mm"
      ],
      "warranty": "Garantía limitada — consulte la política",
      "fullDescription": [
        "Volver al origen, con mejoras.",
        "La G Pen 510 Original cierra el círculo: se inspira en nuestra primera batería de 2012 y la reinventa para hoy. Es la batería G Pen más pequeña jamás creada (24 × 21.1 × 56.7 mm), ultraportátil y sencilla de usar, sin ceder un ápice en rendimiento.",
        "Con activación por inhalación, la 510 Original hace que cada sesión sea inmediata: solo inhale y listo. Para mayor control, su interfaz de un solo botón permite alternar entre tres niveles de voltaje preestablecidos (3.2/3.6/3.8V), activar un modo de precalentamiento de 1.8V durante 10 segundos y seguirlo todo en la pantalla digital. Su batería de 400 mAh, junto con la carga simultánea por USB-C, permite cargarla y usarla al mismo tiempo, sin pausas.",
        "Con un precio de apenas $12.95, es además la batería G Pen más accesible hasta la fecha: la prueba de que la tecnología premium no tiene por qué costar una fortuna.",
        "Simple. Confiable. Icónica. El original ha vuelto.",
        "*No incluye cartucho 510",
        "** No incluye cargador USB C"
      ],
      "box": {
        "contents": [
          "Batería G Pen 510 Original",
          "*Cargador USB C no incluido",
          "*Cartucho 510 no incluido"
        ]
      }
    },
    "Hydout": {
      "description": "El G Pen Hydout es una batería para cartuchos 510 compacta y discreta, con cubierta magnética oculta para la boquilla, voltaje ajustable y pantalla LED, para sesiones suaves, personalizables y de bajo perfil.",
      "highlights": [
        "Cubierta magnética oculta para la boquilla",
        "5 ajustes de calor (2.4V – 3.8V)",
        "Modo de precalentamiento de 1.8V",
        "Batería recargable de 400mAh",
        "Pantalla LED brillante",
        "Carga USB-C",
        "Compatible con cartuchos 510 de hasta 2g",
        "90 × 37.5 × 18.5 mm"
      ],
      "warranty": "Garantía limitada — consulte la política",
      "fullDescription": [
        "¿Busca la mejor batería para cartucho 510 en sesiones discretas donde quiera que vaya? Le presentamos la G Pen Hydout 510 Cartridge Battery: una batería compacta y disimulada para cartuchos 510 que ofrece un rendimiento serio sin llamar la atención.",
        "Esta potencia de bolsillo incorpora una tapa magnética oculta para la boquilla que mantiene el cartucho discreto y protegido de la luz (sí, ayuda a preservar la calidad del aceite), una batería de 400mAh, voltaje ajustable y una pantalla LED brillante para controlar cada calada al detalle. Compatible con la mayoría de los cartuchos de rosca 510 de hasta 2g, la Hydout es ideal para sesiones suaves y personalizables, esté donde esté."
      ],
      "box": {
        "contents": [
          "1x batería para cartucho 510 G Pen Hydout",
          "1x cubierta magnética para boquilla",
          "Cartucho 510 no incluido",
          "Cable de carga USB-C no incluido"
        ]
      }
    },
    "Hydout — Retro": {
      "description": "La edición Retro del G Pen Hydout aporta un acabado translúcido y transparente inspirado en los años 90 a esta discreta batería para cartuchos 510, sumando activación por inhalación junto con voltaje variable y carga USB-C.",
      "highlights": [
        "Acabado transparente inspirado en los años 90",
        "Activación por inhalación",
        "Voltaje variable ajustable",
        "Modo de precalentamiento de 1.8V",
        "Batería recargable de 400mAh",
        "Carga simultánea USB-C (se puede usar mientras se carga)",
        "Compatible con la mayoría de los cartuchos 510",
        "Cubierta magnética oculta para la boquilla"
      ],
      "warranty": "Garantía limitada — consulte la política",
      "fullDescription": [
        "El G Pen Hydout Retro combina un elegante acabado translúcido de inspiración noventera con la ingeniería refinada que respalda la batería 510 más discreta de G Pen. Su carcasa magnética envuelve el cartucho para protegerlo del uso diario y mantener un conjunto visualmente limpio y minimalista.",
        "Pensado para la versatilidad, el Hydout incluye voltaje variable para un control de calor personalizado y una función de precalentamiento de 1.8V que ablanda los concentrados más densos antes de usarlos. Esta edición Retro suma además activación por inhalación, para caladas totalmente libres de botones, y carga simultánea por USB-C, que mantiene el dispositivo listo para usar incluso mientras está conectado.",
        "Con carga rápida USB-C, una cámara de cartucho ajustada y sin holguras, y compatibilidad con la mayoría de los cartuchos 510, el Hydout Retro ofrece rendimiento moderno bajo una carcasa translúcida llena de nostalgia.",
        "*Cartucho 510 no incluido",
        "**Cargador USB-C no incluido"
      ],
      "box": {
        "contents": [
          "Batería de rosca 510 G Pen Hydout",
          "Boquilla magnética",
          "*Cable de carga USB-C no incluido",
          "*Cartucho 510 no incluido"
        ]
      }
    },
    "Dash+": {
      "description": "El G Pen Dash+ es un vaporizador portátil de hierba seca de última generación que utiliza calentamiento híbrido por convección y conducción en una cámara de titanio para alcanzar temperaturas de vaporización en unos 20 segundos.",
      "highlights": [
        "Calentamiento híbrido por convección + conducción",
        "Cámara de calentamiento de titanio",
        "Se calienta en ~20 segundos",
        "Batería recargable de iones de litio de 1,800mAh",
        "Carga USB-C",
        "Pantalla LED a todo color",
        "Respuesta háptica, interfaz de 3 botones",
        "Carcasa de aleación de zinc"
      ],
      "warranty": "Garantía limitada — consulte la política",
      "fullDescription": [
        "El G Pen Dash+ es un vaporizador compacto de hierba seca diseñado para sesiones rápidas, sabrosas y a la medida de cada usuario. Con calentamiento híbrido de convección y conducción en una cámara de titanio íntegro, alcanza la temperatura en tan solo 20 segundos para un vapor suave y constante.",
        "Los dos canales de entrada de aire limpio y la boquilla magnética con recorrido de aire en espiral de cerámica maximizan el flujo de aire y el sabor. Una pantalla LED a todo color, controles de tres botones, respuesta háptica y un ajuste preciso de temperatura permiten personalizar cada sesión sin complicaciones.",
        "Con un cuerpo resistente de aleación de zinc y una batería recargable de 1,800mAh con carga USB-C, el G Pen Dash+ ofrece un rendimiento confiable en un diseño elegante y portátil, hecho para el día a día.",
        "*Este producto no está destinado al uso con tabaco, e-líquidos con nicotina, ni con nicotina sintética o sustitutos de la nicotina."
      ],
      "box": {
        "contents": [
          "Vaporizador Dash+",
          "Funda de silicona para boquilla Dash+",
          "Herramienta de carga con llavero",
          "Cable de carga USB-C"
        ]
      }
    },
    "Hyer": {
      "description": "Un e-nail portátil de doble uso para concentrados o hierba seca que se acopla a cualquier pieza de agua con conexión de vidrio a vidrio, construido en torno a un elemento de calentamiento de cuarzo completo.",
      "highlights": [
        "Doble uso: concentrados o hierba seca",
        "Elemento de calentamiento de cuarzo completo",
        "Se acopla a cualquier pieza de vidrio a vidrio",
        "Diseño de e-nail portátil"
      ],
      "warranty": "Garantía limitada de 2 años",
      "fullDescription": [
        "El G Pen Hyer®️ es un enail portátil de diseño intuitivo y doble uso, compatible con concentrados o hierba seca, que se acopla a cualquier pieza de agua con conexión de vidrio a vidrio. Fabricado con materiales de la más alta calidad, incluido un elemento calefactor de cuarzo íntegro, el G Pen Hyer incorpora tecnología de calentamiento inteligente con temperatura constante para ofrecer un sabor y una producción de vapor de primer nivel.",
        "Con una batería recargable de iones de litio de 6,000mAh y carga simultánea rápida por USB-C, alojada en una carcasa de aluminio anodizado ligera y resistente, el G Pen Hyer redefine los límites de la potencia y la portabilidad. Su sencillo manejo de tres botones y su interfaz de cinco LED hacen que la configuración y la activación sean muy simples, sin ceder un ápice en la experiencia.",
        "Un cable de alimentación trenzado de primera calidad, con resistentes conexiones magnéticas de encaje, une la batería a un alojamiento de tanque de aluminio anodizado y ligero, en el que el Tanque de Cuarzo para Concentrados o el Tanque de Hierba Seca* del G Pen Hyer se enroscan y desenroscan con total facilidad. El Tanque para Concentrados se calienta mediante un elemento calefactor de acero inoxidable troquelado a medida y cuenta con una cámara de cuarzo íntegro y un tubo ascendente interno que aportan la máxima superficie de calentamiento, un flujo de aire eficiente y una vaporización óptima de los concentrados.",
        "La pieza que completa el rendimiento superior del Tanque de Cuarzo para Concentrados del G Pen Hyer es la Tapa del Tanque para Concentrados: de acople magnético y aluminio anodizado, con revestimiento interior de cerámica y doble orificio de flujo de aire para un funcionamiento giratorio suave. La herramienta para cera de acero inoxidable incluida también puede fijarse en la parte superior o lateral de la tapa, siempre a mano y lista para usar.",
        "Cada kit del Vaporizador G Pen Hyer incluye un adaptador de vidrio macho de 14mm (adaptadores de vidrio de 10mm y 18mm se venden por separado). Todos los componentes del kit vienen perfectamente organizados en un estuche de viaje de cáñamo, con bolsillo de malla para accesorios adicionales.",
        "*El Tanque de Hierba Seca del G Pen Hyer se vende por separado.",
        "﻿*El índice de durabilidad del Tanque de Cuarzo del G Pen Hyer es de un mínimo de 200 ciclos de carga. Se recomienda reemplazar el tanque al alcanzar esta cantidad de ciclos para mantener un rendimiento óptimo.",
        "*Este producto no debe utilizarse con tabaco, e-líquidos con nicotina, ni con nicotina sintética o sustitutos de la nicotina."
      ]
    },
    "Roam": {
      "description": "Un e-rig portátil todo en uno que ofrece vaporización de concentrados con filtración de agua en cualquier lugar, con un hidrotubo de vidrio borosilicato resistente a derrames y un tanque de cuarzo completo.",
      "highlights": [
        "Filtración de agua integrada en vidrio borosilicato",
        "Tanque de cuarzo completo",
        "Potente batería de 1,300mAh",
        "E-rig todo en uno y autónomo"
      ],
      "warranty": "Garantía limitada de 1 año",
      "fullDescription": [
        "Le presentamos el G Pen Roam, un vaporizador portátil todo en uno diseñado de forma intuitiva para ofrecer vaporización de concentrados con filtración de agua en cualquier lugar. Con un hidrotubo de vidrio borosilicato autónomo y resistente a derrames, un tanque totalmente de cuarzo y una potente batería de iones de litio de 1,300mAh, el G Pen Roam alcanza la temperatura en segundos para brindar caladas suaves y llenas de sabor sin ningún esfuerzo.",
        "El G Pen Roam se adapta a las preferencias de sabor y temperatura de cada persona gracias a su control digital de temperatura y pantalla LED con un rango de 400° - 800°+F (204° - 427°+C), además de una función de respuesta háptica que avisa cuando el dispositivo está listo para usarse. Diseñado con una atención rigurosa a la portabilidad discreta, el Roam viene protegido por una carcasa de aleación de aluminio ligera pero resistente que resguarda por completo el tanque de cuarzo y el tubo de agua de vidrio. La tecnología de carga simultánea permite usar el dispositivo mientras está conectado, y todas las piezas en contacto con el recorrido del vapor se desmontan y se limpian con facilidad.",
        "Cada kit completo del G Pen Roam incluye de serie un estuche de viaje de cáñamo, con espacio para dos frascos de concentrados y un bolsillo para accesorios, entre ellos un cable de carga micro USB y la G Pen Tool para cargar los concentrados.",
        "*Este producto no está destinado al uso con tabaco, e-líquidos con nicotina, ni con ninguna nicotina sintética o sustituto de nicotina."
      ]
    },
    "Dash": {
      "description": "El G Pen Dash original: un vaporizador de hierba seca compacto y ligero, diseñado para sesiones sencillas en cualquier lugar.",
      "highlights": [
        "Vaporizador de hierba seca compacto",
        "Operación sencilla con un solo botón",
        "Diseño de bolsillo"
      ],
      "warranty": "Garantía limitada de 2 años"
    },
    "Elite II": {
      "description": "Un vaporizador de hierba seca premium de convección completa que ofrece sabor puro y vapor denso con control de temperatura de precisión.",
      "highlights": [
        "Calentamiento por convección completa",
        "Control de temperatura de precisión",
        "Cámara de cerámica de gran capacidad"
      ],
      "warranty": "Garantía limitada de 2 años"
    }
  }
};
