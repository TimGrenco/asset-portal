/* =============================================================================
   FRENCH (fr) LANGUAGE PACK
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
window.PORTAL_I18N.fr = {
  "ui": {
    "Become a {name} Product Specialist": "Devenez Spécialiste Produit {name}",
    "You’re a certified {name} Specialist": "Vous êtes Spécialiste {name} certifié",
    "Watch the videos, learn the product, and pass a short quiz to get certified.": "Regardez les vidéos, apprenez à connaître le produit et réussissez un court quiz pour être certifié.",
    "Certificate earned {date} · review the course or retake anytime": "Certificat obtenu le {date} · revoyez le cours ou repassez-le à tout moment",
    "Start training →": "Commencer la formation →",
    "Back to {name}": "Retour à {name}",
    "Product Specialist Training": "Formation Spécialiste Produit",
    "{v} videos · {m} lessons · {q}-question quiz · ~{min} min": "{v} vidéos · {m} leçons · quiz de {q} questions · ~{min} min",
    "Watch the how-to-use and cleaning videos — click a video to play it in the large viewer, or download it.": "Regardez les vidéos d’utilisation et de nettoyage — cliquez sur une vidéo pour la lire en grand format ou la télécharger.",
    "Answer all {q} questions. Score {p}% or higher to earn your certificate.": "Répondez aux {q} questions. Obtenez {p}% ou plus pour décrocher votre certificat.",
    "Question {n} of {total}": "Question {n} sur {total}",
    "{a} / {b} answered": "{a} / {b} répondues",
    "Please answer all {q} questions first": "Veuillez d’abord répondre aux {q} questions",
    "Correct": "Correct",
    "Incorrect": "Incorrect",
    "Not quite — you need {p}% to certify.": "Pas tout à fait — il vous faut {p}% pour être certifié.",
    "Review the explanations above, then try again.": "Relisez les explications ci-dessus, puis réessayez.",
    "Enter your name to generate your Product Specialist certificate.": "Saisissez votre nom pour générer votre certificat de Spécialiste Produit.",
    "Your Name": "Votre nom",
    "Full name": "Nom complet",
    "G Pen · Product Specialist Program": "G Pen · Programme Spécialiste Produit",
    "Certificate of Completion": "Certificat de réussite",
    "This certifies that": "Le présent document certifie que",
    "has successfully completed the Product Specialist training and demonstrated expert product knowledge of the": "a suivi avec succès la formation Spécialiste Produit et démontré une connaissance experte du produit",
    "Date Issued": "Date de délivrance",
    "Authorized By": "Autorisé par",
    "Certificate ID": "N° de certificat",
    "Print certificate": "Imprimer le certificat",
    "Download image": "Télécharger l’image",
    "Email my certification": "Recevoir ma certification par e-mail",
    "G PEN · PRODUCT SPECIALIST PROGRAM": "G PEN · PROGRAMME SPÉCIALISTE PRODUIT",
    "has successfully completed the Product Specialist training": "a suivi avec succès la formation Spécialiste Produit",
    "and demonstrated expert product knowledge of the": "et démontré une connaissance experte du produit",
    "Product Name": "Nom du produit",
    "Product SKU": "SKU du produit",
    "Product UPC": "UPC du produit",
    "Retail POP Display SKU": "SKU du présentoir POP",
    "Retail POP Display UPC": "UPC du présentoir POP",
    "Product Dimensions": "Dimensions du produit",
    "Unit Weight": "Poids unitaire",
    "Ships In Retail POP Display": "Expédié en présentoir POP",
    "Units Per POP Display": "Unités par présentoir POP",
    "Units Per Master Case": "Unités par carton principal",
    "Case Weight": "Poids du carton",
    "Case Dimensions": "Dimensions du carton",
    "HTS (Harmonized Tariff Schedule) Code": "Code HTS (nomenclature tarifaire harmonisée)",
    "Dry Herb Vape": "Vaporisateur à herbes sèches",
    "510 Battery": "Batterie 510",
    "Concentrate Hot Knife": "Hot knife à concentrés",
    "Dry Herb": "Herbes sèches",
    "Accessory": "Accessoire",
    "E-Nail": "E-Nail",
    "E-Rig": "E-Rig",
    "Brand": "Marque",
    "Product photos": "Photos produit",
    "Lifestyle Photos": "Photos lifestyle",
    "Social Videos": "Vidéos réseaux sociaux",
    "TV Screen Videos": "Vidéos pour écrans TV",
    "Documents": "Documents",
    "Product Photos": "Photos produit",
    "Web Banners": "Bannières web",
    "E-Comm Render Photos": "Rendus e-commerce",
    "Misc": "Divers",
    "Our customer service team has been with us since day one — with over 15 years of hands-on experience with our devices. They know these products inside and out, and they’d be happy to walk you through anything or go over any additional questions you might have. We love to chat all things cannabis and vaporizers with you.": "Notre équipe du service client est avec nous depuis le premier jour — avec plus de 15 ans d’expérience pratique de nos appareils. Elle connaît ces produits sur le bout des doigts et se fera un plaisir de vous accompagner sur n’importe quel sujet ou de répondre à toutes vos questions. Nous adorons échanger avec vous sur tout ce qui touche au cannabis et aux vaporisateurs.",
    "(optional)": "(facultatif)",
    "123 Main St, City, State ZIP": "123 rue Principale, Ville, Région, Code postal",
    "Add each store you'd like listed on our official locator, then send your request. Have more than one location? Use <strong>Add another store</strong> to include them all.": "Ajoutez chaque boutique que vous souhaitez voir figurer sur notre localisateur officiel, puis envoyez votre demande. Vous avez plusieurs points de vente ? Utilisez <strong>Ajouter une autre boutique</strong> pour tous les inclure.",
    "Additional Products": "Produits supplémentaires",
    "Address": "Adresse",
    "All": "Tout",
    "Assets": "Ressources",
    "Browse all {n} logo files →": "Voir les {n} fichiers de logos →",
    "Carry G Pen? Request to be added to our official store locator so customers can find your shop.": "Vous vendez G Pen ? Demandez à figurer sur notre localisateur officiel pour que les clients trouvent votre boutique.",
    "Clear": "Effacer",
    "Click a preview to enlarge it.": "Cliquez sur un aperçu pour l’agrandir.",
    "Click preview to enlarge": "Cliquez sur l’aperçu pour agrandir",
    "Close viewer": "Fermer la visionneuse",
    "Contact us": "Nous contacter",
    "Decrease": "Diminuer",
    "Downloaded": "Téléchargé",
    "Downloading {n} files…": "Téléchargement de {n} fichiers…",
    "Email Address": "Adresse e-mail",
    "Enlarge": "Agrandir",
    "Fields shown as <strong>—</strong> are still to be confirmed.": "Les champs affichés <strong>—</strong> restent à confirmer.",
    "Formats": "Formats",
    "Increase": "Augmenter",
    "Loading catalog…": "Chargement du catalogue…",
    "Mailing Address": "Adresse postale",
    "New": "Nouveau",
    "Next": "Suivant",
    "No": "Non",
    "No matches for": "Aucun résultat pour",
    "Official {brand} logos — black, white &amp; various versions. For approved partner, press &amp; retail use; please don’t alter, recolor, or distort the marks.": "Logos officiels {brand} — noir, blanc &amp; versions diverses. Réservés aux partenaires approuvés, à la presse &amp; au retail ; merci de ne pas modifier, recolorer ni déformer les marques.",
    "Open": "Ouvrir",
    "Order Marketing Materials": "Commander des supports marketing",
    "Order Materials": "Commander des supports",
    "Orderable in-store marketing materials will be listed here soon. In the meantime, reach out and we’ll let you know what’s available.": "Les supports marketing commandables pour le point de vente seront bientôt listés ici. En attendant, contactez-nous et nous vous indiquerons ce qui est disponible.",
    "Phone": "Téléphone",
    "Popular searches": "Recherches populaires",
    "Preparing {n} files as a .zip…": "Préparation de {n} fichiers en .zip…",
    "Press <kbd>/</kbd> to search from anywhere · <kbd>Enter</kbd> opens the top result": "Appuyez sur <kbd>/</kbd> pour rechercher depuis n’importe où · <kbd>Enter</kbd> ouvre le premier résultat",
    "Quantity for": "Quantité pour",
    "Remove this store": "Supprimer cette boutique",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} will show here as they’re added — order what you need for your shop.": "Les présentoirs, affiches, stop-rayons et autres supports en magasin pour {brand} apparaîtront ici au fur et à mesure — commandez ce dont vous avez besoin pour votre boutique.",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} — order what you need for your shop.": "Présentoirs, affiches, stop-rayons et autres supports en magasin pour {brand} — commandez ce dont vous avez besoin pour votre boutique.",
    "Retailers": "Revendeurs",
    "Select all": "Tout sélectionner",
    "Set a quantity for each item, add your store details, then send your request.": "Indiquez une quantité pour chaque article, ajoutez les coordonnées de votre boutique, puis envoyez votre demande.",
    "Showing the top {n} of {total} files — add a word to narrow it down.": "Affichage des {n} premiers fichiers sur {total} — ajoutez un mot pour affiner.",
    "Store": "Boutique",
    "Store Name": "Nom de la boutique",
    "Store name": "Nom de la boutique",
    "Street, City, State, ZIP": "Rue, ville, région, code postal",
    "Submit Request": "Envoyer la demande",
    "Try a product name (Dash), a file type (PNG, MP4), a category (lifestyle, packaging), or “catalog”.": "Essayez un nom de produit (Dash), un type de fichier (PNG, MP4), une catégorie (lifestyle, packaging) ou « catalogue ».",
    "View all →": "Tout voir →",
    "Website": "Site web",
    "Yes": "Oui",
    "Your contact info": "Vos coordonnées",
    "Your details": "Vos informations",
    "You’ll confirm and send from your email app.": "Vous confirmerez et enverrez depuis votre messagerie.",
    "assets": "ressources",
    "available": "disponible",
    "colorways": "coloris",
    "files": "fichiers",
    "file": "fichier",
    "logo files": "fichiers de logos",
    "selected": "sélectionné",
    "stores": "boutiques",
    "material": "support",
    "materials": "supports",
    "{n} older {brand} products we no longer sell — assets kept for partners who still need them.": "{n} anciens produits {brand} que nous ne vendons plus — ressources conservées pour les partenaires qui en ont encore besoin.",
    "Click to watch": "Cliquez pour regarder",
    "Description copied": "Description copiée",
    "Copy": "Copier",
    "product": "produit",
    "products": "produits",
    "result": "résultat",
    "results": "résultats",
    "510 Batteries": "Batteries 510",
    "510-thread cartridge batteries": "Batteries pour cartouches à filetage 510",
    "Dry Herb Vaporizers": "Vaporisateurs à herbes sèches",
    "Portable dry-herb devices": "Appareils portables pour herbes sèches",
    "Concentrate": "Concentré",
    "Concentrate tools & accessories": "Outils & accessoires pour concentrés",
    "More products": "Plus de produits",
    "Catalogs & Brand Documents": "Catalogues & documents de marque",
    "Logos & assets": "Logos & ressources",
    "Official Brand & Product Assets": "Ressources officielles de marque & produit",
    "Wholesale & press asset requests welcome. Assets update as new products launch.": "Demandes de ressources pour le wholesale & la presse bienvenues. Les ressources sont mises à jour au fil des lancements.",
    "Catalogs": "Catalogues",
    "Logos &amp; assets": "Logos &amp; ressources",
    "Request an asset": "Demander une ressource",
    "Request an asset →": "Demander une ressource →",
    "Official Brand &amp; Product Assets": "Ressources officielles de marque &amp; produit",
    "Everything you need, in one place.": "Tout ce dont vous avez besoin, au même endroit.",
    "Search products, files, formats…": "Rechercher produits, fichiers, formats…",
    "Search all assets": "Rechercher dans toutes les ressources",
    "Featured": "À la une",
    "Logos and Brand Assets": "Logos et ressources de marque",
    "Catalogs &amp; Brand Documents": "Catalogues &amp; documents de marque",
    "Questions about a product?": "Des questions sur un produit ?",
    "Talk to our team.": "Parlez à notre équipe.",
    "Mon–Fri · 10:00 AM – 6:00 PM EST": "Lun–Ven · 10h00 – 18h00 EST",
    "Wholesale &amp; press asset requests welcome. Assets update as new products launch.": "Demandes de ressources pour le wholesale &amp; la presse bienvenues. Les ressources sont mises à jour au fil des lancements.",
    "Browse G Pen by category": "Parcourir G Pen par catégorie",
    "Search results": "Résultats de recherche",
    "Follow G Pen On Socials": "Suivez G Pen sur les réseaux",
    "Official accounts": "Comptes officiels",
    " Copy link": " Copier le lien",
    " Download": " Télécharger",
    "Add another store": "Ajouter une autre boutique",
    "Add at least one store's details first": "Renseignez d’abord au moins une boutique",
    "At least one store is required": "Au moins une boutique est requise",
    "Back to library": "Retour à la bibliothèque",
    "Brand &amp; Style Guide": "Charte de marque &amp; style",
    "Catalog not found": "Catalogue introuvable",
    "Certified": "Certifié",
    "Certified! 🎓": "Certifié ! 🎓",
    "Collection Colorways": "Coloris de la collection",
    "Colors": "Couleurs",
    "Connect storage to enable downloads": "Connectez le stockage pour activer les téléchargements",
    "Copy failed": "Échec de la copie",
    "Copy folder link": "Copier le lien du dossier",
    "Copy link": "Copier le lien",
    "Couldn’t build the zip": "Impossible de créer le zip",
    "Couldn’t load the zipper — try again": "Impossible de charger le compresseur — réessayez",
    "Couldn’t render that page": "Impossible d’afficher cette page",
    "Document coming soon": "Document bientôt disponible",
    "Download": "Télécharger",
    "Download PDF": "Télécharger le PDF",
    "Download all": "Tout télécharger",
    "Download all logos": "Télécharger tous les logos",
    "Download assets by category": "Télécharger les ressources par catégorie",
    "Download coming soon": "Téléchargement bientôt disponible",
    "Download folder": "Télécharger le dossier",
    "Download logo files": "Télécharger les fichiers de logos",
    "Download logos": "Télécharger les logos",
    "Download selected": "Télécharger la sélection",
    "Download video": "Télécharger la vidéo",
    "Downloadable file coming soon — Dropbox link on the way": "Fichier téléchargeable bientôt disponible — lien Dropbox à venir",
    "Enter your name for the certificate": "Saisissez votre nom pour le certificat",
    "Get Certified": "Obtenir la certification",
    "Get My Certificate": "Obtenir mon certificat",
    "Get your store on our Store Locator": "Faites figurer votre boutique sur notre localisateur",
    "Highlights": "Points forts",
    "How to use videos": "Vidéos d’utilisation",
    "In-Store Marketing Materials": "Supports marketing en magasin",
    "Learn": "Apprendre",
    "Logos": "Logos",
    "Matching files &amp; assets": "Fichiers &amp; ressources correspondants",
    "No link yet": "Pas encore de lien",
    "No shareable link for this folder yet": "Pas encore de lien partageable pour ce dossier",
    "Official Product Description": "Description officielle du produit",
    "Opening Dropbox download…": "Ouverture du téléchargement Dropbox…",
    "Order materials": "Commander des supports",
    "Packaging": "Packaging",
    "Prev": "Préc.",
    "Product FAQs": "FAQ produit",
    "Product Manual": "Manuel du produit",
    "Remove": "Supprimer",
    "Request materials": "Demander des supports",
    "Request this asset": "Demander cette ressource",
    "Request to be listed": "Demander à être référencé",
    "Retry quiz": "Refaire le quiz",
    "SKU details": "Détails SKU",
    "Select at least one asset first": "Sélectionnez d’abord au moins une ressource",
    "Set a quantity for at least one item first": "Indiquez d’abord une quantité pour au moins un article",
    "Share": "Partager",
    "Store Locator Request": "Demande de référencement au localisateur",
    "Submit Answers": "Envoyer les réponses",
    "Typography": "Typographie",
    "Use “Download all” to get these from Dropbox": "Utilisez « Tout télécharger » pour les récupérer depuis Dropbox",
    "View on site": "Voir sur le site",
    "Viewer is taking too long — downloading instead": "La visionneuse est trop lente — téléchargement à la place",
    "Watch": "Regarder",
    "What’s In the Box?": "Contenu de la boîte",
    "You passed!": "Réussi !",
    "YouTube": "YouTube",
    "AUTHORIZED BY": "AUTORISÉ PAR",
    "Assets are coming soon — check back shortly.": "Les ressources arrivent bientôt — revenez sous peu.",
    "B2B Resources": "Ressources B2B",
    "Blue": "Bleu",
    "Body": "Corps de texte",
    "CERTIFICATE ID": "ID DU CERTIFICAT",
    "CERTIFIED · PRODUCT SPECIALIST": "CERTIFIÉ · SPÉCIALISTE PRODUIT",
    "Catalog": "Catalogue",
    "Catalog link copied": "Lien du catalogue copié",
    "Clear all": "Tout effacer",
    "DATE ISSUED": "DATE D’ÉMISSION",
    "Display / Headlines": "Display / Titres",
    "Green": "Vert",
    "How-to video": "Vidéo tutoriel",
    "In-store marketing": "Marketing en magasin",
    "Link copied": "Lien copié",
    "MSRP": "Prix conseillé",
    "Master carton": "Carton master",
    "Open in": "Ouvrir dans",
    "Pink": "Rose",
    "Purple": "Violet",
    "Red": "Rouge",
    "Regional Catalogs": "Catalogues régionaux",
    "Retail POP display": "Présentoir POP de vente",
    "Share view": "Partager la vue",
    "Ships in POP display": "Livré en présentoir POP",
    "Ships in a retail-ready POP display — one retail box shown per colorway. See SKU details for inner-pack &amp; master-carton quantities.": "Livré en présentoir POP prêt à vendre — une boîte de vente illustrée par coloris. Voir les détails SKU pour les quantités par pack interne &amp; par carton master.",
    "Ships in a retail-ready POP display — see SKU details for inner-pack &amp; master-carton quantities.": "Livré en présentoir POP prêt à vendre — voir les détails SKU pour les quantités par pack interne &amp; par carton master.",
    "Ships in single retail boxes — no POP display. See SKU details for master-carton quantities.": "Livré en boîtes de vente individuelles — sans présentoir POP. Voir les détails SKU pour les quantités par carton master.",
    "Single Retail Packaging": "Emballage de vente individuel",
    "Swipe to see more folders": "Balayez pour voir plus de dossiers",
    "View link copied": "Lien de la vue copié",
    "View {brand} assets": "Voir les ressources {brand}",
    "Warranty": "Garantie",
    "What’s in the box": "Contenu de la boîte",
    "tap to copy": "appuyez pour copier",
    "updated": "mis à jour",
    "videos": "vidéos",
    "{brand} specific in-store materials.": "Supports en magasin spécifiques à {brand}.",
    "{n}-Pack Retail POP Display": "Présentoir POP de vente de {n} unités"
  },
  "training": {
    "Melt Hot Knife": {
      "tagline": "Découvrez le G Pen Melt, puis réussissez le quiz pour devenir Spécialiste Produit certifié.",
      "modules": [
        {
          "title": "Présentation du produit",
          "points": [
            "Le Melt est le <strong>plus petit hot knife du marché</strong> — un <strong>outil à dab</strong> électrique à pointe en céramique pour les concentrés.",
            "Conçu pour prélever et déposer rapidement, proprement et <strong>sans aucune salissure</strong>.",
            "Prix conseillé : <strong>$24.95</strong>."
          ]
        },
        {
          "title": "Caractéristiques clés",
          "points": [
            "<strong>Pointe en céramique à chauffe rapide</strong>.",
            "<strong>Charge pass-through USB-C (utilisable pendant la charge)</strong> — il peut être utilisé pendant la charge.",
            "Corps élégant en <strong>aluminium</strong>.",
            "Ultra-compact : <strong>3.94 × 0.5 × 0.25 in</strong>, idéal pour la poche et le kit de voyage.",
            "Se marie avec les rigs et le G Pen Micro+ / Hyer."
          ]
        },
        {
          "title": "Mode d'emploi",
          "points": [
            "<strong>Mise en marche :</strong> appuyez <strong>5×</strong> sur le bouton.",
            "<strong>Chauffe :</strong> <strong>maintenez</strong> le bouton enfoncé pour lancer la chauffe — elle dure au maximum <strong>5 secondes</strong> par pression.",
            "Utilisez la pointe en céramique chaude pour prélever ou déposer votre concentré.",
            "Il peut être utilisé <strong>pendant la charge</strong> (toujours prêt).",
            "L'appareil s'éteint automatiquement après <strong>10 minutes</strong> d'inactivité ; la LED clignote <strong>8 fois</strong> lorsqu'il a besoin d'être rechargé."
          ]
        },
        {
          "title": "Contenu de la boîte",
          "points": [
            "G Pen Melt Hot Knife et un capuchon de protection pour le transport.",
            "<strong>Un câble de charge USB-C n'est PAS inclus</strong> — n'importe quel chargeur USB-C fonctionne."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Qu'est-ce que le G Pen Melt ?",
          "choices": [
            "Un vaporisateur à herbes sèches",
            "Un hot knife électrique (outil à dab) pour les concentrés",
            "Une batterie 510",
            "Une pipe à eau"
          ],
          "why": "Le Melt est un hot knife électrique à pointe en céramique pour prélever et déposer les concentrés."
        },
        {
          "q": "Le Melt est commercialisé comme le plus petit ___ du marché.",
          "choices": [
            "vaporisateur",
            "hot knife",
            "batterie",
            "rig"
          ],
          "why": "C'est le plus petit hot knife du marché."
        },
        {
          "q": "En quelle matière est la pointe chauffante du Melt ?",
          "choices": [
            "Céramique",
            "Titane",
            "Quartz",
            "Acier"
          ],
          "why": "Le Melt possède une pointe en céramique à chauffe rapide."
        },
        {
          "q": "Comment LANCE-t-on la chauffe du Melt ?",
          "choices": [
            "Une seule pression",
            "Maintenir le bouton enfoncé",
            "Appuyer 5×",
            "Il chauffe automatiquement"
          ],
          "why": "Après la mise en marche, maintenez le bouton enfoncé pour lancer la chauffe."
        },
        {
          "q": "Quelle est la durée de chauffe maximale par pression ?",
          "choices": [
            "5 secondes",
            "30 secondes",
            "2 minutes",
            "10 secondes"
          ],
          "why": "L'appareil chauffe au maximum 5 secondes par pression."
        },
        {
          "q": "Le Melt peut-il être utilisé pendant la charge ?",
          "choices": [
            "Non",
            "Oui — pass-through USB-C",
            "Uniquement sur une station spéciale",
            "Uniquement lorsqu'il est plein"
          ],
          "why": "Oui — il prend en charge le pass-through USB-C et peut être utilisé pendant la charge."
        },
        {
          "q": "Au bout de combien de temps le Melt s'éteint-il automatiquement en cas d'inactivité ?",
          "choices": [
            "1 minute",
            "10 minutes",
            "1 heure",
            "Jamais"
          ],
          "why": "Il s'éteint automatiquement après 10 minutes d'inactivité."
        },
        {
          "q": "Comment met-on le Melt en marche ?",
          "choices": [
            "Appuyer 5× sur le bouton",
            "Maintenir pendant 3 secondes",
            "Une seule pression",
            "Tourner le capuchon"
          ],
          "why": "Appuyez 5× sur le bouton pour allumer le Melt."
        },
        {
          "q": "Comment le Melt signale-t-il qu'il a besoin d'être rechargé ?",
          "choices": [
            "Il émet un bip",
            "La LED clignote 8 fois",
            "Il devient chaud",
            "Rien"
          ],
          "why": "Le bouton LED clignote 8 fois lorsqu'il est temps de recharger."
        },
        {
          "q": "Quel est le prix conseillé du Melt ?",
          "choices": [
            "$12.95",
            "$24.95",
            "$49.95",
            "$99.95"
          ],
          "why": "Le prix conseillé du Melt est de $24.95."
        }
      ]
    },
    "Dash+": {
      "tagline": "Maîtrisez le G Pen Dash+, puis réussissez le quiz pour devenir Spécialiste Produit certifié.",
      "modules": [
        {
          "title": "Présentation du produit",
          "points": [
            "Le Dash+ est un <strong>vaporisateur à herbes sèches</strong> compact et portable — l'évolution grand format du G Pen Dash, notre meilleure vente.",
            "Il utilise un chauffage <strong>hybride convection + conduction</strong> pour des sessions rapides, savoureuses et homogènes.",
            "Pour <strong>herbes sèches uniquement</strong>. Prix conseillé <strong>$99.95</strong>."
          ]
        },
        {
          "title": "Caractéristiques clés",
          "points": [
            "Chambre de chauffe intégralement en <strong>titane</strong>.",
            "Atteint la température de vaporisation en seulement <strong>20 secondes</strong>.",
            "Batterie Li-ion rechargeable <strong>1,800mAh</strong> avec charge <strong>USB-C</strong>.",
            "<strong>Écran LED couleur</strong> avec contrôle précis de la température.",
            "<strong>Retour haptique</strong> et interface intuitive à <strong>3 boutons</strong>.",
            "Corps durable en <strong>alliage de zinc</strong>."
          ]
        },
        {
          "title": "Mode d'emploi",
          "points": [
            "<strong>Chargement :</strong> retirez l'embout buccal, remplissez la chambre d'herbes sèches broyées, puis remettez l'embout buccal en place.",
            "<strong>Allumage/extinction :</strong> maintenez le bouton d'alimentation pendant <strong>3 secondes</strong>.",
            "<strong>Réglez la température</strong> avec les boutons gauche (–) et droit (+).",
            "<strong>Démarrer ou annuler une session :</strong> appuyez <strong>2× en moins de 2 secondes</strong> sur le bouton d'alimentation. L'appareil vibre et le minuteur de session démarre une fois la température atteinte.",
            "À la fin du minuteur de session, le chauffage s'arrête automatiquement ; l'appareil s'éteint après environ 1 minute d'inactivité en veille.",
            "Appuyez <strong>5×</strong> sur le bouton d'alimentation pour ouvrir le menu Réglages (minuteur de session, °F/°C, luminosité, haptique)."
          ]
        },
        {
          "title": "Contenu de la boîte",
          "points": [
            "Vaporisateur G Pen Dash+, manchon en silicone pour l'embout buccal, outil de chargement avec porte-clés et un <strong>câble de charge USB-C</strong> (inclus).",
            "Enregistrez votre appareil sur <strong>gpen.com/register</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Quel type de chauffage le Dash+ utilise-t-il ?",
          "choices": [
            "Conduction uniquement",
            "Hybride convection + conduction",
            "Flamme nue",
            "Induction"
          ],
          "why": "Le Dash+ utilise un chauffage hybride convection + conduction pour des sessions rapides, homogènes et savoureuses."
        },
        {
          "q": "En quelle matière est fabriquée la chambre de chauffe du Dash+ ?",
          "choices": [
            "Plastique",
            "Titane",
            "Verre",
            "Acier inoxydable"
          ],
          "why": "Il est doté d'une chambre de chauffe intégralement en titane."
        },
        {
          "q": "En combien de temps environ le Dash+ atteint-il sa température ?",
          "choices": [
            "20 secondes",
            "2 minutes",
            "5 secondes",
            "45 secondes"
          ],
          "why": "Le Dash+ atteint la température de vaporisation en seulement 20 secondes."
        },
        {
          "q": "Quelle est la capacité de la batterie du Dash+ ?",
          "choices": [
            "650mAh",
            "1,100mAh",
            "1,800mAh",
            "3,000mAh"
          ],
          "why": "Il est alimenté par une batterie Li-ion rechargeable de 1,800mAh."
        },
        {
          "q": "Comment allume-t-on le Dash+ ?",
          "choices": [
            "Un seul appui",
            "Maintenir le bouton d'alimentation pendant 3 secondes",
            "Appuyer 5 fois",
            "Le secouer"
          ],
          "why": "Maintenez le bouton d'alimentation pendant 3 secondes pour allumer ou éteindre l'appareil."
        },
        {
          "q": "Après avoir réglé la température, comment DÉMARRE-t-on une session ?",
          "choices": [
            "Appuyer 2× sur le bouton d'alimentation en moins de 2 secondes",
            "Maintenir pendant 10 secondes",
            "Souffler dedans",
            "Elle démarre toute seule"
          ],
          "why": "Appuyez 2× sur le bouton d'alimentation en moins de 2 secondes pour démarrer (ou annuler) une session."
        },
        {
          "q": "Comment ouvre-t-on le menu Réglages ?",
          "choices": [
            "Appuyer 5× sur le bouton d'alimentation",
            "Maintenir les deux boutons latéraux",
            "Un seul appui",
            "Brancher l'USB-C"
          ],
          "why": "Appuyez 5× sur le bouton d'alimentation pour accéder au menu Réglages (minuteur, °F/°C, luminosité, haptique)."
        },
        {
          "q": "Quel type d'écran le Dash+ possède-t-il ?",
          "choices": [
            "Aucun écran",
            "OLED monochrome",
            "LED couleur",
            "E-ink"
          ],
          "why": "Le Dash+ dispose d'un écran LED couleur."
        },
        {
          "q": "Quel est le prix conseillé du Dash+ ?",
          "choices": [
            "$49.95",
            "$99.95",
            "$149.95",
            "$79.95"
          ],
          "why": "Le prix conseillé du Dash+ est de $99.95."
        },
        {
          "q": "En quelle matière est fabriqué le corps du Dash+ ?",
          "choices": [
            "Alliage de zinc",
            "Silicone",
            "Bois",
            "Fibre de carbone"
          ],
          "why": "Le Dash+ possède un corps durable en alliage de zinc."
        }
      ]
    },
    "Dash II": {
      "tagline": "Apprenez à maîtriser le G Pen Dash II de fond en comble, puis réussissez le quiz pour devenir Spécialiste Produit certifié.",
      "modules": [
        {
          "title": "Présentation du produit",
          "points": [
            "Le Dash II est un <strong>vaporisateur à herbes sèches</strong> de poche — la nouvelle évolution du best-seller G Pen Dash.",
            "Il est conçu pour les <strong>herbes sèches uniquement</strong> — il n'est pas compatible avec les concentrés, les huiles ni les cartouches 510.",
            "Il utilise un système de chauffe par <strong>conduction</strong> pour une vapeur fiable et une montée en température d'environ 30 secondes.",
            "Prix conseillé : <strong>$49.95</strong>."
          ]
        },
        {
          "title": "Caractéristiques clés",
          "points": [
            "Chambre de chauffe en <strong>céramique de 0.4g</strong> — plus grande que celle du Dash original et plus facile à charger.",
            "Batterie de <strong>1,100mAh</strong>.",
            "Charge <strong>USB-C</strong> avec <strong>charge pass-through (utilisable pendant la charge)</strong> — l'appareil peut être utilisé lorsqu'il est branché.",
            "L'<strong>écran OLED</strong> affiche la température et le niveau de batterie en temps réel.",
            "<strong>Contrôle précis et réglable de la température</strong>.",
            "Dimensions <strong>97 × 35 × 21 mm</strong>, poids <strong>59.5 g</strong>.",
            "<strong>Outil pique</strong> intégré pour le chargement et le nettoyage."
          ]
        },
        {
          "title": "Mode d'emploi",
          "points": [
            "<strong>Chargez</strong> l'appareil avec n'importe quel chargeur USB-C.",
            "<strong>Chargement :</strong> retirez l'embout buccal, remplissez complètement la chambre de matière sèche et tassez légèrement avec l'outil pique — <strong>ne tassez pas trop</strong>.",
            "<strong>Mise en marche :</strong> maintenez le bouton enfoncé pendant <strong>3 secondes</strong>.",
            "Utilisez <strong>– / +</strong> pour régler la température de la session.",
            "<strong>Démarrer une session :</strong> appuyez sur le bouton <strong>2× (en moins de 2 secondes)</strong>. Appuyez à nouveau <strong>2×</strong> pour annuler à tout moment.",
            "Inspirez par l'embout buccal — des <strong>inspirations longues et régulières</strong> donnent les meilleurs résultats.",
            "Appuyez <strong>5×</strong> sur le bouton pour ouvrir le menu des réglages de l'appareil."
          ]
        },
        {
          "title": "Nettoyage et entretien",
          "points": [
            "<strong>Après chaque utilisation :</strong> nettoyez le filtre de l'embout buccal et le foyer avec l'outil pique fourni.",
            "<strong>Nettoyage en profondeur :</strong> retirez l'insert de l'embout buccal et nettoyez-le à l'<strong>alcool isopropylique</strong>.",
            "Laissez toujours toutes les pièces <strong>sécher complètement</strong> avant le remontage."
          ]
        },
        {
          "title": "Garantie et enregistrement",
          "points": [
            "Couvert par une garantie limitée de <strong>6 mois</strong>.",
            "L'enregistrement de l'appareil sur <strong>gpen.com/register</strong> ajoute 6 mois supplémentaires — soit une garantie limitée d'<strong>1 an</strong> complète.",
            "<strong>Contenu de la boîte :</strong> appareil Dash II, outil de chargement (pique) intégré, gaine en silicone pour l'embout buccal. <strong>Le câble de charge USB-C n'est PAS inclus.</strong>"
          ]
        },
        {
          "title": "Améliorations par rapport au Dash original",
          "points": [
            "Prix conseillé plus bas ($49.95), <strong>contrôle de la température</strong> réglable et <strong>écran OLED</strong>.",
            "Chambre plus grande de <strong>0.4g</strong> et batterie plus puissante de <strong>1,100mAh</strong>.",
            "Charge <strong>USB-C</strong> moderne avec pass-through et conception de chambre revue."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Quelle matière le G Pen Dash II est-il conçu pour vaporiser ?",
          "choices": [
            "Les herbes sèches uniquement",
            "Les concentrés et les huiles",
            "Les cartouches 510",
            "N'importe laquelle des réponses ci-dessus"
          ],
          "why": "Le Dash II est un vaporisateur à herbes sèches uniquement — il n'est pas compatible avec les concentrés, les huiles ni les cartouches 510."
        },
        {
          "q": "Quelle est la taille de la chambre de chauffe du Dash II ?",
          "choices": [
            "0.2g",
            "0.4g en céramique",
            "1.0g",
            "Il n'a pas de chambre"
          ],
          "why": "Le Dash II dispose d'une chambre en céramique améliorée de 0.4g — plus grande que celle du Dash original et plus facile à charger."
        },
        {
          "q": "Quel type de système de chauffe le Dash II utilise-t-il ?",
          "choices": [
            "Convection",
            "Conduction",
            "Induction",
            "Flamme nue"
          ],
          "why": "Il utilise un système de chauffe par conduction, avec une montée en température d'environ 30 secondes."
        },
        {
          "q": "Combien de temps faut-il environ au Dash II pour chauffer ?",
          "choices": [
            "5 secondes",
            "30 secondes",
            "2 minutes",
            "5 minutes"
          ],
          "why": "La montée en température est d'environ 30 secondes."
        },
        {
          "q": "Quelle est la capacité de la batterie du Dash II ?",
          "choices": [
            "650mAh",
            "900mAh",
            "1,100mAh",
            "2,200mAh"
          ],
          "why": "Le Dash II est alimenté par une batterie de 1,100mAh — une amélioration par rapport au Dash original."
        },
        {
          "q": "Quelle affirmation concernant la charge du Dash II est VRAIE ?",
          "choices": [
            "Il utilise le Micro-USB",
            "Il se charge en USB-C et prend en charge le pass-through (utilisable pendant la charge)",
            "Il se charge uniquement sans fil",
            "Il ne peut pas être utilisé pendant la charge"
          ],
          "why": "Le Dash II se charge en USB-C et prend en charge la charge pass-through, il peut donc être utilisé lorsqu'il est branché."
        },
        {
          "q": "Comment met-on le Dash II en marche ?",
          "choices": [
            "En appuyant une fois sur le bouton",
            "En maintenant le bouton enfoncé pendant 3 secondes",
            "En appuyant 5 fois sur le bouton",
            "En actionnant l'interrupteur coulissant"
          ],
          "why": "Maintenez le bouton enfoncé pendant 3 secondes pour allumer l'appareil."
        },
        {
          "q": "Après avoir réglé la température, comment DÉMARRE-t-on une session ?",
          "choices": [
            "En appuyant 2× sur le bouton en moins de 2 secondes",
            "En maintenant pendant 10 secondes",
            "En soufflant dans l'embout buccal",
            "Elle démarre automatiquement"
          ],
          "why": "Appuyez 2× sur le bouton (en moins de 2 secondes) pour démarrer une session ; appuyez à nouveau 2× pour l'annuler."
        },
        {
          "q": "Pour un nettoyage EN PROFONDEUR, que faut-il utiliser sur l'insert de l'embout buccal retiré ?",
          "choices": [
            "De l'eau et du savon",
            "De l'alcool isopropylique",
            "Du vinaigre",
            "Simplement l'essuyer à sec"
          ],
          "why": "Pour un nettoyage en profondeur, retirez l'insert de l'embout buccal et nettoyez-le à l'alcool isopropylique, puis laissez-le sécher complètement avant le remontage."
        },
        {
          "q": "Comment fonctionne la garantie du Dash II ?",
          "choices": [
            "Aucune garantie",
            "Garantie à vie",
            "Garantie limitée de 6 mois, prolongée à 1 an si vous enregistrez l'appareil",
            "Retours sous 30 jours uniquement"
          ],
          "why": "Il s'agit d'une garantie limitée de 6 mois ; l'enregistrement sur gpen.com/register ajoute 6 mois supplémentaires, soit un an complet."
        },
        {
          "q": "Quel est le prix conseillé du Dash II ?",
          "choices": [
            "$29.95",
            "$49.95",
            "$79.95",
            "$99.95"
          ],
          "why": "Le Dash II a été lancé à un prix conseillé plus bas de $49.95."
        },
        {
          "q": "Quel article n'est PAS inclus dans la boîte ?",
          "choices": [
            "L'appareil Dash II",
            "L'outil pique/de chargement intégré",
            "La gaine en silicone pour l'embout buccal",
            "Un câble de charge USB-C"
          ],
          "why": "Le câble de charge USB-C n'est pas inclus — n'importe quel chargeur USB-C peut être utilisé."
        }
      ]
    },
    "510 Original": {
      "tagline": "Découvrez le G Pen 510 Original, puis réussissez le quiz pour devenir Spécialiste Produit certifié.",
      "modules": [
        {
          "title": "Présentation du produit",
          "points": [
            "Le 510 Original est la <strong>plus petite et la plus abordable des batteries G Pen jamais conçues</strong> — une réinterprétation moderne de la toute première batterie Grenco de 2012.",
            "Une <strong>batterie pour cartouche 510</strong> ultra-portable avec <strong>déclenchement à l'inspiration</strong>.",
            "Prix conseillé : <strong>$12.95</strong>."
          ]
        },
        {
          "title": "Caractéristiques clés",
          "points": [
            "<strong>Déclenchement à l'inspiration</strong> — il suffit d'inhaler (ou de maintenir le bouton enfoncé).",
            "<strong>Trois tensions préréglées : 3.2 / 3.6 / 3.8V</strong>.",
            "Mode préchauffage <strong>1.8V</strong> de 10 secondes.",
            "Batterie <strong>400mAh</strong> avec charge <strong>USB-C pass-through (utilisable pendant la charge)</strong>.",
            "<strong>Écran</strong> numérique.",
            "Dimensions : <strong>24 × 21.1 × 56.7 mm</strong>."
          ]
        },
        {
          "title": "Mode d'emploi",
          "points": [
            "<strong>Chargement :</strong> vissez une cartouche 510.",
            "<strong>Allumage/extinction :</strong> cliquez <strong>5×</strong> sur le bouton.",
            "<strong>Réglage de la tension :</strong> cliquez <strong>3×</strong> pour faire défiler 3.2 / 3.6 / 3.8V.",
            "<strong>Préchauffage :</strong> cliquez <strong>2×</strong> pour un préchauffage de 10 secondes à 1.8V.",
            "<strong>Inhalation :</strong> <strong>inspirez</strong> simplement (déclenchement à l'inspiration) — ou maintenez le bouton enfoncé.",
            "Arrêt automatique après <strong>10 minutes</strong> d'inactivité."
          ]
        },
        {
          "title": "Entretien &amp; contenu de la boîte",
          "points": [
            "Nettoyez la connexion entre la batterie et la cartouche avec un coton-tige et de l'<strong>alcool isopropylique</strong>. <strong>Ne faites pas tremper la batterie.</strong>",
            "Dans la boîte : la batterie 510 Original. Un chargeur USB-C et une cartouche 510 ne sont <strong>pas inclus</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Qu'est-ce qui distingue le 510 Original ?",
          "choices": [
            "C'est la plus grande batterie G Pen",
            "C'est la plus petite et la plus abordable des batteries G Pen jamais conçues (une réinterprétation de l'originale de 2012)",
            "C'est un vaporisateur à herbes sèches",
            "Elle ne fonctionne qu'avec les cartouches G Pen"
          ],
          "why": "C'est la plus petite et la plus abordable des batteries G Pen jamais conçues — une réinterprétation moderne de la première batterie Grenco de 2012."
        },
        {
          "q": "Comment déclenche-t-on une inhalation sur le 510 Original ?",
          "choices": [
            "Inspirez (déclenchement à l'inspiration) — ou maintenez le bouton enfoncé",
            "Cliquez 5×",
            "Elle ne fonctionne pas sans appuyer sur l'écran",
            "Tournez la cartouche"
          ],
          "why": "Le 510 Original fonctionne par déclenchement à l'inspiration — il suffit d'inhaler, ou de maintenir le bouton enfoncé."
        },
        {
          "q": "Quelles sont les trois tensions préréglées ?",
          "choices": [
            "2.4 / 3.0 / 3.6V",
            "3.2 / 3.6 / 3.8V",
            "1.8 / 2.4 / 3.0V",
            "3.8 / 4.2 / 4.8V"
          ],
          "why": "Il propose trois tensions préréglées : 3.2, 3.6 et 3.8V."
        },
        {
          "q": "Quelle est la capacité de la batterie du 510 Original ?",
          "choices": [
            "150mAh",
            "400mAh",
            "900mAh",
            "1,100mAh"
          ],
          "why": "Il est équipé d'une batterie 400mAh avec charge pass-through (utilisable pendant la charge) en USB-C."
        },
        {
          "q": "Comment allume-t-on ou éteint-on le 510 Original ?",
          "choices": [
            "Cliquez 5× sur le bouton",
            "Maintenez pendant 3 secondes",
            "Cliquez 3×",
            "Expirez"
          ],
          "why": "Cliquez 5× sur le bouton pour l'allumer ou l'éteindre."
        },
        {
          "q": "Comment change-t-on la tension ?",
          "choices": [
            "Cliquez 3×",
            "Cliquez 5×",
            "Maintenez le bouton enfoncé",
            "Vissez la cartouche plus fort"
          ],
          "why": "Cliquez 3× sur le bouton pour faire défiler 3.2 / 3.6 / 3.8V."
        },
        {
          "q": "Que fait un double clic (2×) ?",
          "choices": [
            "Il l'éteint",
            "Il lance un préchauffage de 10 secondes à 1.8V",
            "Il verrouille la batterie",
            "Rien"
          ],
          "why": "Cliquer 2× lance un préchauffage de 10 secondes à 1.8V."
        },
        {
          "q": "Au bout de combien de temps le 510 Original s'éteint-il automatiquement ?",
          "choices": [
            "2 minutes",
            "10 minutes",
            "30 secondes",
            "1 heure"
          ],
          "why": "Il s'éteint automatiquement après 10 minutes d'inactivité."
        },
        {
          "q": "Comment se recharge le 510 Original ?",
          "choices": [
            "Micro-USB",
            "USB-C pass-through (utilisable pendant la charge)",
            "Sans fil uniquement",
            "Piles remplaçables"
          ],
          "why": "Il se recharge via USB-C et prend en charge la charge pass-through (utilisable pendant la charge)."
        },
        {
          "q": "Quel est le prix conseillé du 510 Original ?",
          "choices": [
            "$12.95",
            "$24.95",
            "$49.95",
            "$9.95"
          ],
          "why": "À $12.95, c'est la batterie G Pen la plus abordable jamais conçue."
        }
      ]
    },
    "Hydout": {
      "tagline": "Découvrez le G Pen Hydout, puis réussissez le quiz pour devenir Spécialiste Produit certifié.",
      "modules": [
        {
          "title": "Présentation du produit",
          "points": [
            "Le Hydout est une <strong>batterie pour cartouche 510 discrète</strong> et compacte, dotée d'un <strong>cache d'embout buccal magnétique dissimulé</strong>.",
            "Voltage réglable et écran LED pour des sessions douces, personnalisables et discrètes.",
            "Prix conseillé : <strong>$24.95</strong>."
          ]
        },
        {
          "title": "Caractéristiques clés",
          "points": [
            "<strong>5 réglages de chauffe</strong> de <strong>2.4V à 3.8V</strong>.",
            "Mode préchauffage de 10 secondes à <strong>1.8V</strong>.",
            "Batterie rechargeable <strong>400mAh</strong>, charge <strong>USB-C</strong>.",
            "<strong>Écran LED</strong> lumineux.",
            "Compatible avec les <strong>cartouches 510 jusqu'à 2g</strong>.",
            "Dimensions : <strong>90 × 37.5 × 18.5 mm</strong>."
          ]
        },
        {
          "title": "Mode d'emploi",
          "points": [
            "<strong>Chargement :</strong> retirez l'embout buccal, vissez une cartouche 510, puis remettez l'embout buccal en place.",
            "<strong>Allumage/extinction :</strong> cliquez <strong>5×</strong> sur le bouton.",
            "<strong>Réglage du voltage :</strong> cliquez <strong>3×</strong> pour faire défiler les réglages de chauffe.",
            "<strong>Préchauffage :</strong> cliquez <strong>2×</strong> pour un préchauffage de 10 secondes à 1.8V.",
            "<strong>Inhalation :</strong> <strong>maintenez</strong> le bouton enfoncé pour activer et inspirez.",
            "Arrêt automatique après <strong>2 minutes</strong> d'inactivité."
          ]
        },
        {
          "title": "Entretien &amp; contenu de la boîte",
          "points": [
            "Nettoyez l'embout buccal et la connexion batterie/cartouche avec un coton-tige et de l'<strong>alcool isopropylique</strong>. <strong>Ne faites pas tremper la batterie.</strong>",
            "Dans la boîte : la batterie 510 Hydout + le cache d'embout buccal magnétique. Une cartouche 510 et un câble USB-C ne sont <strong>pas inclus</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Qu'est-ce que le G Pen Hydout ?",
          "choices": [
            "Un vaporisateur à herbes sèches",
            "Une batterie pour cartouche 510",
            "Un hot knife",
            "Un infuseur à gravité"
          ],
          "why": "Le Hydout est une batterie pour cartouche 510 discrète."
        },
        {
          "q": "Quelle est la caractéristique de discrétion emblématique du Hydout ?",
          "choices": [
            "Un cache d'embout buccal magnétique dissimulé",
            "Un écran pliant",
            "Un moteur silencieux",
            "Un habillage camouflage"
          ],
          "why": "Il possède un cache d'embout buccal magnétique dissimulé pour un look discret."
        },
        {
          "q": "Quelle est la plage de voltage du Hydout ?",
          "choices": [
            "1.0V–2.0V",
            "2.4V–3.8V (5 réglages)",
            "3.8V–4.8V",
            "Un seul voltage fixe"
          ],
          "why": "Le Hydout propose 5 réglages de chauffe de 2.4V à 3.8V."
        },
        {
          "q": "Quelle est la capacité de la batterie du Hydout ?",
          "choices": [
            "200mAh",
            "400mAh",
            "900mAh",
            "1,800mAh"
          ],
          "why": "Il dispose d'une batterie rechargeable de 400mAh."
        },
        {
          "q": "Comment allume-t-on ou éteint-on le Hydout ?",
          "choices": [
            "Cliquez 5× sur le bouton",
            "Maintenez pendant 3 secondes",
            "Cliquez 2×",
            "Inspirez"
          ],
          "why": "Cliquez 5× sur le bouton pour allumer ou éteindre le Hydout."
        },
        {
          "q": "Comment change-t-on le voltage ?",
          "choices": [
            "Cliquez 3×",
            "Cliquez 5×",
            "Maintenez le bouton enfoncé",
            "Tournez l'embout buccal"
          ],
          "why": "Cliquez 3× sur le bouton pour faire défiler les réglages de chauffe."
        },
        {
          "q": "Comment prend-on une inhalation sur le Hydout ?",
          "choices": [
            "Il suffit d'inspirer",
            "Maintenez le bouton enfoncé pendant l'inhalation",
            "Cliquez 2×",
            "Appuyez puis relâchez"
          ],
          "why": "Maintenez le bouton enfoncé pour activer et inspirez."
        },
        {
          "q": "Que fait un double clic (2×) sur le bouton ?",
          "choices": [
            "L'éteint",
            "Lance un préchauffage de 10 secondes à 1.8V",
            "Le verrouille",
            "Rien"
          ],
          "why": "Cliquer 2× lance un préchauffage de 10 secondes à 1.8V."
        },
        {
          "q": "Au bout de combien de temps le Hydout s'éteint-il automatiquement ?",
          "choices": [
            "2 minutes",
            "10 minutes",
            "30 secondes",
            "1 heure"
          ],
          "why": "Le Hydout s'éteint automatiquement après 2 minutes d'inactivité."
        },
        {
          "q": "Quelle est la bonne façon de nettoyer le Hydout ?",
          "choices": [
            "Faire tremper toute la batterie dans l'alcool",
            "Coton-tige + alcool isopropylique sur la connexion — NE PAS faire tremper la batterie",
            "Rincer sous l'eau",
            "Il n'a jamais besoin d'être nettoyé"
          ],
          "why": "Utilisez un coton-tige avec de l'alcool isopropylique sur les points de connexion ; ne faites jamais tremper la batterie."
        }
      ]
    },
    "Hydout — Retro": {
      "tagline": "Découvrez le G Pen Hydout, puis réussissez le quiz pour devenir Spécialiste Produit certifié.",
      "modules": [
        {
          "title": "Présentation du produit",
          "points": [
            "Le Hydout est une <strong>batterie pour cartouche 510 discrète</strong> et compacte, dotée d'un <strong>cache-embout magnétique dissimulé</strong>.",
            "Voltage réglable et écran LED pour des sessions douces, personnalisables et discrètes.",
            "Prix conseillé : <strong>$24.95</strong>."
          ]
        },
        {
          "title": "Caractéristiques clés",
          "points": [
            "<strong>5 réglages de chauffe</strong> de <strong>2.4V à 3.8V</strong>.",
            "Mode préchauffage de 10 secondes à <strong>1.8V</strong>.",
            "Batterie rechargeable <strong>400mAh</strong>, charge <strong>USB-C</strong>.",
            "<strong>Écran LED</strong> lumineux.",
            "Compatible avec les <strong>cartouches 510 jusqu'à 2g</strong>.",
            "Dimensions : <strong>90 × 37.5 × 18.5 mm</strong>."
          ]
        },
        {
          "title": "Utilisation",
          "points": [
            "<strong>Chargement :</strong> retirez l'embout buccal, vissez une cartouche 510, puis remettez l'embout buccal en place.",
            "<strong>Allumage/extinction :</strong> cliquez <strong>5×</strong> sur le bouton.",
            "<strong>Réglage du voltage :</strong> cliquez <strong>3×</strong> pour faire défiler les réglages de chauffe.",
            "<strong>Préchauffage :</strong> cliquez <strong>2×</strong> pour un préchauffage de 10 secondes à 1.8V.",
            "<strong>Inhalation :</strong> <strong>maintenez</strong> le bouton enfoncé pour activer et inhalez.",
            "Arrêt automatique après <strong>2 minutes</strong> d'inactivité."
          ]
        },
        {
          "title": "Entretien &amp; contenu de la boîte",
          "points": [
            "Nettoyez l'embout buccal et la connexion batterie/cartouche avec un coton-tige et de l'<strong>alcool isopropylique</strong>. <strong>Ne faites pas tremper la batterie.</strong>",
            "Dans la boîte : la batterie 510 Hydout + le cache-embout magnétique. La cartouche 510 et le câble USB-C <strong>ne sont pas inclus</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Qu'est-ce que le G Pen Hydout ?",
          "choices": [
            "Un vaporisateur à herbes sèches",
            "Une batterie pour cartouche 510",
            "Un hot knife",
            "Un infuseur gravitationnel"
          ],
          "why": "Le Hydout est une batterie pour cartouche 510 discrète."
        },
        {
          "q": "Quelle est la caractéristique de discrétion emblématique du Hydout ?",
          "choices": [
            "Un cache-embout magnétique dissimulé",
            "Un écran pliable",
            "Un moteur silencieux",
            "Un habillage camouflage"
          ],
          "why": "Il possède un cache-embout magnétique dissimulé pour un look discret."
        },
        {
          "q": "Quelle est la plage de voltage du Hydout ?",
          "choices": [
            "1.0V–2.0V",
            "2.4V–3.8V (5 réglages)",
            "3.8V–4.8V",
            "Un seul voltage fixe"
          ],
          "why": "Le Hydout propose 5 réglages de chauffe de 2.4V à 3.8V."
        },
        {
          "q": "Quelle est la capacité de la batterie du Hydout ?",
          "choices": [
            "200mAh",
            "400mAh",
            "900mAh",
            "1,800mAh"
          ],
          "why": "Il dispose d'une batterie rechargeable de 400mAh."
        },
        {
          "q": "Comment allume-t-on ou éteint-on le Hydout ?",
          "choices": [
            "Cliquez 5× sur le bouton",
            "Maintenez pendant 3 secondes",
            "Cliquez 2×",
            "Inspirez"
          ],
          "why": "Cliquez 5× sur le bouton pour allumer ou éteindre le Hydout."
        },
        {
          "q": "Comment change-t-on le voltage ?",
          "choices": [
            "Cliquez 3×",
            "Cliquez 5×",
            "Maintenez le bouton enfoncé",
            "Tournez l'embout buccal"
          ],
          "why": "Cliquez 3× sur le bouton pour faire défiler les réglages de chauffe."
        },
        {
          "q": "Comment prend-on une inhalation avec le Hydout ?",
          "choices": [
            "Il suffit d'inspirer",
            "Maintenir le bouton enfoncé pendant l'inhalation",
            "Cliquer 2×",
            "Appuyer puis relâcher"
          ],
          "why": "Maintenez le bouton enfoncé pour activer et inhalez."
        },
        {
          "q": "Que fait un double clic (2×) sur le bouton ?",
          "choices": [
            "L'éteint",
            "Lance un préchauffage de 10 secondes à 1.8V",
            "Le verrouille",
            "Rien"
          ],
          "why": "Cliquer 2× lance un préchauffage de 10 secondes à 1.8V."
        },
        {
          "q": "Au bout de combien de temps le Hydout s'éteint-il automatiquement ?",
          "choices": [
            "2 minutes",
            "10 minutes",
            "30 secondes",
            "1 heure"
          ],
          "why": "Le Hydout s'éteint automatiquement après 2 minutes d'inactivité."
        },
        {
          "q": "Quelle est la bonne façon de nettoyer le Hydout ?",
          "choices": [
            "Faire tremper toute la batterie dans l'alcool",
            "Coton-tige + alcool isopropylique sur la connexion — NE PAS faire tremper la batterie",
            "Rincer sous l'eau",
            "Il n'a jamais besoin d'être nettoyé"
          ],
          "why": "Utilisez un coton-tige avec de l'alcool isopropylique sur les points de connexion ; ne faites jamais tremper la batterie."
        }
      ]
    },
    "510 Original — Retro": {
      "tagline": "Découvrez la G Pen 510 Original, puis réussissez le quiz pour devenir Spécialiste Produit certifié.",
      "modules": [
        {
          "title": "Présentation du produit",
          "points": [
            "La 510 Original est <strong>la batterie G Pen la plus petite et la plus abordable jamais conçue</strong> — une réinterprétation moderne de la toute première batterie Grenco de 2012.",
            "Une <strong>batterie pour cartouche 510</strong> ultra-portable à <strong>déclenchement à l'inspiration</strong>.",
            "Prix conseillé : <strong>$12.95</strong>."
          ]
        },
        {
          "title": "Caractéristiques clés",
          "points": [
            "<strong>Déclenchement à l'inspiration</strong> — il suffit d'inhaler (ou de maintenir le bouton).",
            "<strong>Trois tensions préréglées : 3.2 / 3.6 / 3.8V</strong>.",
            "Mode préchauffage de 10 secondes à <strong>1.8V</strong>.",
            "Batterie <strong>400mAh</strong> avec charge <strong>USB-C pass-through (utilisable pendant la charge)</strong>.",
            "<strong>Écran</strong> numérique.",
            "Dimensions : <strong>24 × 21.1 × 56.7 mm</strong>."
          ]
        },
        {
          "title": "Mode d'emploi",
          "points": [
            "<strong>Chargement :</strong> vissez une cartouche 510.",
            "<strong>Allumage/extinction :</strong> cliquez <strong>5×</strong> sur le bouton.",
            "<strong>Réglage de la tension :</strong> cliquez <strong>3×</strong> pour faire défiler 3.2 / 3.6 / 3.8V.",
            "<strong>Préchauffage :</strong> cliquez <strong>2×</strong> pour un préchauffage de 10 secondes à 1.8V.",
            "<strong>Inhalation :</strong> il suffit d'<strong>inspirer</strong> (déclenchement à l'inspiration) — ou de maintenir le bouton.",
            "Arrêt automatique après <strong>10 minutes</strong> d'inactivité."
          ]
        },
        {
          "title": "Entretien &amp; contenu de la boîte",
          "points": [
            "Nettoyez la connexion batterie/cartouche avec un coton-tige et de l'<strong>alcool isopropylique</strong>. <strong>Ne trempez pas la batterie.</strong>",
            "Dans la boîte : la batterie 510 Original. Un chargeur USB-C et une cartouche 510 <strong>ne sont pas inclus</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Qu'est-ce qui distingue la 510 Original ?",
          "choices": [
            "C'est la plus grande batterie G Pen",
            "C'est la batterie G Pen la plus petite et la plus abordable jamais conçue (une réinterprétation de l'original de 2012)",
            "C'est un vaporisateur à herbes sèches",
            "Elle ne fonctionne qu'avec les cartouches G Pen"
          ],
          "why": "C'est la batterie G Pen la plus petite et la plus abordable jamais conçue — une réinterprétation moderne de la première batterie Grenco de 2012."
        },
        {
          "q": "Comment déclenche-t-on une inhalation sur la 510 Original ?",
          "choices": [
            "Inspirez (déclenchement à l'inspiration) — ou maintenez le bouton",
            "Cliquez 5×",
            "Elle ne fonctionne pas sans toucher l'écran",
            "Tournez la cartouche"
          ],
          "why": "La 510 Original fonctionne par déclenchement à l'inspiration — il suffit d'inhaler, ou de maintenir le bouton."
        },
        {
          "q": "Quelles sont les trois tensions préréglées ?",
          "choices": [
            "2.4 / 3.0 / 3.6V",
            "3.2 / 3.6 / 3.8V",
            "1.8 / 2.4 / 3.0V",
            "3.8 / 4.2 / 4.8V"
          ],
          "why": "Elle propose trois tensions préréglées : 3.2, 3.6 et 3.8V."
        },
        {
          "q": "Quelle est la capacité de la batterie de la 510 Original ?",
          "choices": [
            "150mAh",
            "400mAh",
            "900mAh",
            "1,100mAh"
          ],
          "why": "Elle est équipée d'une batterie 400mAh avec charge USB-C pass-through (utilisable pendant la charge)."
        },
        {
          "q": "Comment allume-t-on ou éteint-on la 510 Original ?",
          "choices": [
            "Cliquez 5× sur le bouton",
            "Maintenez pendant 3 secondes",
            "Cliquez 3×",
            "Expirez"
          ],
          "why": "Cliquez 5× sur le bouton pour l'allumer ou l'éteindre."
        },
        {
          "q": "Comment change-t-on la tension ?",
          "choices": [
            "Cliquez 3×",
            "Cliquez 5×",
            "Maintenez le bouton",
            "Vissez la cartouche plus fort"
          ],
          "why": "Cliquez 3× sur le bouton pour faire défiler 3.2 / 3.6 / 3.8V."
        },
        {
          "q": "Que fait un double clic (2×) ?",
          "choices": [
            "Elle s'éteint",
            "Lance un préchauffage de 10 secondes à 1.8V",
            "Verrouille la batterie",
            "Rien"
          ],
          "why": "Cliquer 2× lance un préchauffage de 10 secondes à 1.8V."
        },
        {
          "q": "Au bout de combien de temps la 510 Original s'éteint-elle automatiquement ?",
          "choices": [
            "2 minutes",
            "10 minutes",
            "30 secondes",
            "1 heure"
          ],
          "why": "Elle s'éteint automatiquement après 10 minutes d'inactivité."
        },
        {
          "q": "Comment se recharge la 510 Original ?",
          "choices": [
            "Micro-USB",
            "USB-C pass-through",
            "Sans fil uniquement",
            "Piles remplaçables"
          ],
          "why": "Elle se recharge via USB-C et prend en charge la charge pass-through (utilisable pendant la charge)."
        },
        {
          "q": "Quel est le prix conseillé de la 510 Original ?",
          "choices": [
            "$12.95",
            "$24.95",
            "$49.95",
            "$9.95"
          ],
          "why": "À $12.95, c'est la batterie G Pen la plus abordable jamais conçue."
        }
      ]
    }
  },
  "products": {
    "Dash II": {
      "description": "La nouvelle évolution du Dash, notre best-seller : un vaporisateur à herbes sèches format poche amélioré sur tous les points, avec une montée en température plus rapide, un flux d'air optimisé et un contrôle de température affiné.",
      "highlights": [
        "Vaporisateur à herbes sèches format poche",
        "Montée en température en 30 secondes",
        "Contrôle précis de la température",
        "Écran OLED",
        "Chambre en céramique 0,4 g améliorée (chargement facilité)",
        "Outil de chargement (Pick Tool)",
        "Batterie 1 100mAh",
        "Charge pass-through USB-C (utilisable pendant la charge)"
      ],
      "warranty": "Garantie limitée de 6 mois, étendue à 1 an en cas d'enregistrement",
      "fullDescription": [
        "La nouvelle évolution de notre vaporisateur best-seller Dash : amélioré sur tous les points, et désormais à seulement $49.95.",
        "Le G Pen Dash II est un vaporisateur à herbes sèches format poche doté d'un contrôle précis de la température, d'un écran OLED et d'une chambre en céramique 0,4 g améliorée, conçue pour de meilleures performances et un chargement plus facile. Animé par une batterie 1 100mAh plus endurante, le Dash II offre des sessions douces et fiables, avec une montée en température en 30 secondes et la charge pass-through USB-C (utilisable pendant la charge).",
        "Plus de contrôle. Un chargement plus facile. De meilleures performances."
      ],
      "box": {
        "contents": [
          "Vaporisateur à herbes sèches G Pen Dash II",
          "Outil de remplissage intégré",
          "Manchon en silicone pour embout buccal",
          "*Câble de charge USB-C non inclus"
        ]
      }
    },
    "510 Original — Retro": {
      "description": "L'édition Retro Collection du 510 Original associe une finition translucide vintage tout en douceur aux mêmes performances 510 ultra-portables à déclenchement à l'inspiration, inspirées de la toute première batterie G Pen de 2012.",
      "highlights": [
        "Finition rétro translucide",
        "Déclenchement à l'inspiration",
        "Trois tensions préréglées (3,2 / 3,6 / 3,8V)",
        "Mode préchauffage 1,8V pendant 10 secondes",
        "Batterie 400mAh",
        "Charge pass-through USB-C (utilisable pendant la charge)",
        "Écran numérique",
        "24 × 21,1 × 56,7 mm"
      ],
      "warranty": "Garantie limitée — voir les conditions",
      "fullDescription": [
        "Original. Amélioré. Retro.",
        "Retour aux origines — avec une finition rétro tout en douceur.",
        "Le G Pen 510 Original Retro Collection marie un design transparent nostalgique à un coloris translucide riche et affirmé. Inspirée de notre toute première batterie 510 de 2012, cette édition améliorée conserve la simplicité et la fiabilité de l'originale tout en l'affinant pour les sessions modernes, où que vous soyez.",
        "Plus petite batterie G Pen jamais conçue, avec seulement 24 × 21,1 × 56,7 mm, la 510 Original se glisse sans effort dans votre quotidien. Le déclenchement à l'inspiration rend l'utilisation simple et sans bouton, tandis que l'interface à bouton unique vous donne la main sur trois tensions préréglées (3,2/3,6/3,8V), un mode préchauffage 1,8V de 10 secondes et l'écran numérique.",
        "Une batterie de 400 mAh avec charge pass-through USB-C (utilisable pendant la charge) garde votre appareil prêt quand vous l'êtes, même branché. Avec sa coque rétro translucide et ses performances 510 optimisées, cette batterie de poche offre un mélange harmonieux de style vintage et d'efficacité au quotidien.",
        "Simple. Fiable. Iconique. L'originale est de retour.",
        "*Cartouche 510 non incluse",
        "**Chargeur USB-C non inclus"
      ],
      "box": {
        "contents": [
          "Batterie G Pen 510 Original",
          "*Chargeur USB-C non inclus",
          "*Cartouche 510 non incluse"
        ]
      }
    },
    "Melt Hot Knife": {
      "description": "Le G Pen Melt est le plus petit hot knife du marché : un outil à dab compact à pointe céramique pour prélever et déposer vos concentrés rapidement, proprement et sans la moindre bavure.",
      "highlights": [
        "Le plus petit hot knife du marché",
        "Pointe céramique à chauffe rapide",
        "Charge pass-through USB-C (utilisable pendant la charge)",
        "Corps en aluminium élégant",
        "Ultra-compact : 3,94 × 0,5 × 0,25 po",
        "Prélèvements et dépôts sans bavure",
        "Idéal pour la poche et le kit de voyage",
        "Compatible rigs, Micro+, Hyer"
      ],
      "warranty": "Garantie limitée — voir les conditions",
      "fullDescription": [
        "Découvrez le tout nouveau G Pen Melt Hot Knife : le plus petit hot knife du marché et la façon la plus rapide et la plus propre de préparer vos concentrés. Avec seulement 3,94 pouces de haut, 0,5 pouce de large et 0,25 pouce de profondeur, le Melt est ultra-compact, ultra-portable et conçu pour disparaître dans n'importe quelle poche ou kit de voyage.",
        "Pensé pour des prélèvements sans bavure et des dépôts précis et maîtrisés, le Melt transforme les manipulations collantes en un jeu d'enfant. Sa pointe céramique à chauffe rapide monte en température instantanément pour des transferts parfaits à chaque fois. Fini les outils poisseux. Fini les catastrophes de reclaim. Fini les gestes hésitants.",
        "Et désormais avec la charge pass-through USB-C (utilisable pendant la charge), vous pouvez continuer à utiliser le Melt même branché — parce que la seule chose pire qu'un outil à dab déchargé, c'est d'attendre qu'il se recharge.",
        "Avec son corps en aluminium élégant, son port USB-C universel et la silhouette G Pen signature, le Melt devient votre indispensable du quotidien — que vous chargiez un rig, remplissiez un G Pen Micro+ ou prépariez votre G Pen Hyer.",
        "Petit format. Grande puissance. Zéro bavure. Toujours prêt."
      ],
      "box": {
        "contents": [
          "G Pen Melt Hot Knife",
          "Capuchon de protection de voyage",
          "*Câble de charge USB-C non inclus"
        ]
      }
    },
    "Connect": {
      "description": "Un vaporisateur à concentrés sans chalumeau qui transforme n'importe quelle pipe à eau verre-sur-verre en rig à dab ultime — sans chalumeau ni nail exposé.",
      "highlights": [
        "Chauffe céramique sans chalumeau — aucune flamme nue",
        "Montée en température en 5 secondes pour une vapeur dense immédiate",
        "Adaptateurs en verre 10mm, 14mm et 18mm inclus",
        "Flux d'air inversé breveté pour une vaporisation homogène",
        "Trois réglages de température + mode inspiration prolongée"
      ],
      "warranty": "Garantie limitée de 1 an",
      "fullDescription": [
        "La meilleure alternative sans chalumeau aux rigs traditionnels. Le G Pen Connect est un vaporisateur à concentrés révolutionnaire pour pipes à eau qui supprime le besoin d'un chalumeau et d'un nail exposé. Ce vaporisateur à concentrés à chauffe rapide atteint sa température optimale en cinq secondes et délivre une qualité de vapeur premium, sans aucune contrainte.",
        "Pourquoi choisir le G Pen Connect ?",
        "Technologie sans chalumeau : un vaporisateur à dab à chauffe céramique sûr et pratique — aucune flamme nue nécessaire",
        "Montée en température en 5 secondes : activation immédiate pour une production de vapeur dense sans attendre",
        "Compatibilité universelle : inclut des adaptateurs en verre 10mm, 14mm et 18mm pour toute pipe à eau verre-sur-verre",
        "Flux d'air inversé breveté : garantit une vaporisation homogène et efficace des concentrés",
        "Trois réglages de température : personnalisez votre expérience selon le type de concentré et vos préférences de saveur",
        "Mode inspiration prolongée : pour des sessions plus longues et plus puissantes",
        "Puissante batterie de 850 mAh : permet plusieurs sessions consécutives, avec charge pass-through (utilisable pendant la charge)",
        "Carb à ressort : contrôle instantané du flux d'air pour vider la chambre sans effort",
        "Fabrication premium : animé par une résistance céramique qui préserve la saveur du concentré et délivre des inspirations douces et puissantes, associé à votre pipe à eau préférée. La connexion magnétique à clipser assure une installation rapide et sans effort à chaque fois.",
        "Portable et prêt à voyager : malgré ses performances, le G Pen Connect reste assez compact pour vous suivre partout. Chaque kit inclut une pochette de voyage en chanvre pour un rangement facile.",
        "Le kit complet comprend : l'appareil G Pen Connect, les adaptateurs en verre 10mm/14mm/18mm, une pochette de voyage en chanvre, un câble de charge USB et le manuel d'utilisation.",
        "Prêt à faire évoluer votre rig traditionnel ? Découvrez nos collaborations en édition limitée Cookies x G Pen Connect et Dr. Greenthumb's x G Pen Connect.",
        "Technologie brevetée :",
        "US 10,004,264 B2",
        "US 10,021,909 B2",
        "US 10,188,145 B2",
        "US 10,321,721 B2",
        "US 10,327,470 B2",
        "*Ce produit n'est pas destiné à être utilisé avec du tabac, des e-liquides contenant de la nicotine, ni avec de la nicotine de synthèse ou tout substitut de nicotine.",
        "\"@context\": \"https://schema.org\","
      ]
    },
    "510 Original": {
      "description": "Batterie G Pen la plus petite et la plus abordable jamais conçue, la 510 Original réinvente la toute première batterie Grenco de 2012 avec des performances modernes, ultra-portables et à déclenchement à l'inspiration, pour cartouches 510.",
      "highlights": [
        "La plus petite batterie G Pen jamais conçue",
        "Déclenchement à l'inspiration — inspirez, c'est parti",
        "Trois tensions préréglées (3,2 / 3,6 / 3,8V)",
        "Mode préchauffage 1,8V pendant 10 secondes",
        "Batterie 400mAh",
        "Charge pass-through USB-C (utilisable pendant la charge)",
        "Écran numérique",
        "24 × 21,1 × 56,7 mm"
      ],
      "warranty": "Garantie limitée — voir les conditions",
      "fullDescription": [
        "Retour aux origines — en mieux.",
        "La G Pen 510 Original boucle la boucle : elle s'inspire de notre toute première batterie de 2012 et la réinvente pour aujourd'hui. C'est la plus petite batterie G Pen jamais conçue (24 × 21,1 × 56,7 mm), pensée pour être ultra-portable et d'une simplicité absolue, sans jamais rogner sur les performances.",
        "Conçue avec le déclenchement à l'inspiration, la 510 Original rend chaque session immédiate : inspirez, c'est parti. Pour plus de contrôle, l'interface à bouton unique vous permet de faire défiler trois tensions préréglées (3,2/3,6/3,8V), d'activer un mode préchauffage 1,8V pendant 10 secondes et de tout suivre sur l'écran numérique. Une batterie de 400 mAh associée à la charge pass-through USB-C (utilisable pendant la charge) vous laisse charger et utiliser l'appareil en même temps, sans ralentir.",
        "À seulement $12.95, c'est aussi la batterie G Pen la plus abordable jamais proposée — la preuve qu'une technologie premium n'exige pas un tarif premium.",
        "Simple. Fiable. Iconique. L'originale est de retour.",
        "*Cartouche 510 non incluse",
        "** Chargeur USB C non inclus"
      ],
      "box": {
        "contents": [
          "Batterie G Pen 510 Original",
          "*Chargeur USB-C non inclus",
          "*Cartouche 510 non incluse"
        ]
      }
    },
    "Hydout": {
      "description": "Le G Pen Hydout est une batterie compacte et discrète pour cartouches 510, dotée d'un cache-embout magnétique dissimulé, d'une tension réglable et d'un écran LED, pour des sessions douces, personnalisables et en toute discrétion.",
      "highlights": [
        "Cache-embout magnétique dissimulé",
        "5 réglages de chauffe (2,4V – 3,8V)",
        "Mode préchauffage 1,8V",
        "Batterie rechargeable 400mAh",
        "Écran LED lumineux",
        "Charge USB-C",
        "Compatible cartouches 510 jusqu'à 2 g",
        "90 × 37,5 × 18,5 mm"
      ],
      "warranty": "Garantie limitée — voir les conditions",
      "fullDescription": [
        "Vous cherchez la meilleure batterie pour cartouches 510 et des sessions discrètes en déplacement ? Découvrez la batterie pour cartouches 510 G Pen Hydout : une batterie compacte et dissimulée pour cartouches 510, qui offre de vraies performances sans jamais vous trahir.",
        "Ce concentré de puissance format poche est doté d'un cache-embout magnétique dissimulé qui garde votre cartouche discrète et à l'abri de la lumière (oui, cela contribue à préserver la qualité de l'huile), d'une batterie 400mAh, d'une tension réglable et d'un écran LED lumineux pour un contrôle total sur chaque bouffée. Compatible avec la plupart des cartouches à filetage 510 jusqu'à 2 g, le Hydout est parfait pour des sessions douces et personnalisables — où que vous soyez."
      ],
      "box": {
        "contents": [
          "1x batterie pour cartouche 510 G Pen Hydout",
          "1x cache magnétique pour embout buccal",
          "Cartouche 510 non incluse",
          "Câble de charge USB-C non inclus"
        ]
      }
    },
    "Hydout — Retro": {
      "description": "L'édition Retro du G Pen Hydout apporte une finition translucide transparente d'inspiration années 90 à la batterie 510 la plus discrète, en y ajoutant le déclenchement à l'inspiration, aux côtés de la tension variable et de la charge USB-C.",
      "highlights": [
        "Finition transparente d'inspiration années 90",
        "Déclenchement à l'inspiration",
        "Tension variable réglable",
        "Mode préchauffage 1,8V",
        "Batterie rechargeable 400mAh",
        "Charge pass-through USB-C (utilisable pendant la charge)",
        "Compatible avec la plupart des cartouches 510",
        "Cache-embout magnétique dissimulé"
      ],
      "warranty": "Garantie limitée — voir les conditions",
      "fullDescription": [
        "Le G Pen Hydout Retro associe une finition translucide transparente d'inspiration années 90 à l'ingénierie soignée de la batterie 510 la plus discrète de G Pen. Sa coque magnétique enveloppe votre cartouche pour la protéger de l'usure quotidienne tout en gardant votre setup visuellement épuré et minimaliste.",
        "Pensé pour la polyvalence, le Hydout intègre des réglages de tension variable pour maîtriser la chauffe et une fonction de préchauffage 1,8V pour réchauffer les concentrés les plus épais avant utilisation. Cette édition Retro ajoute également le déclenchement à l'inspiration, pour des bouffées entièrement sans bouton, ainsi que la charge pass-through USB-C (utilisable pendant la charge), qui garde l'appareil prêt même lorsqu'il est branché.",
        "Avec sa charge USB-C rapide, sa chambre à cartouche parfaitement ajustée et sans jeu, et sa compatibilité avec la plupart des cartouches 510, le Hydout Retro délivre des performances modernes sous une coque translucide nostalgique.",
        "*Cartouche 510 non incluse",
        "**Chargeur USB-C non inclus"
      ],
      "box": {
        "contents": [
          "Batterie à filetage 510 G Pen Hydout",
          "Embout buccal magnétique",
          "*Câble de charge USB-C non inclus",
          "*Cartouche 510 non incluse"
        ]
      }
    },
    "Dash+": {
      "description": "Le G Pen Dash+ est un vaporisateur portable à herbes sèches de nouvelle génération qui associe convection et conduction dans une chambre en titane pour atteindre la température de vaporisation en environ 20 secondes.",
      "highlights": [
        "Chauffe hybride convection + conduction",
        "Chambre de chauffe en titane",
        "Montée en température en ~20 secondes",
        "Batterie Li-ion rechargeable 1 800mAh",
        "Charge USB-C",
        "Écran LED couleur",
        "Retour haptique, interface à 3 boutons",
        "Boîtier en alliage de zinc"
      ],
      "warranty": "Garantie limitée — voir les conditions",
      "fullDescription": [
        "Le G Pen Dash+ est un vaporisateur à herbes sèches compact conçu pour des sessions rapides, savoureuses et personnalisables. Grâce à sa chauffe hybride par convection et conduction dans une chambre entièrement en titane, il atteint sa température en 20 secondes seulement, pour une vapeur douce et régulière.",
        "Deux canaux d'admission d'air pur et un embout buccal magnétique doté d'un conduit d'air en céramique en spirale maximisent le flux d'air et la saveur. Un écran LED couleur, des commandes à trois boutons, le retour haptique et un réglage précis de la température permettent de personnaliser facilement chaque session.",
        "Doté d'un corps robuste en alliage de zinc et alimenté par une batterie rechargeable de 1 800mAh avec charge USB-C, le G Pen Dash+ offre des performances fiables dans un design élégant et portable, pensé pour un usage quotidien.",
        "*Ce produit n'est pas destiné à être utilisé avec du tabac, des e-liquides contenant de la nicotine, ni avec de la nicotine de synthèse ou tout substitut de nicotine."
      ],
      "box": {
        "contents": [
          "Vaporisateur Dash+",
          "Manchon en silicone pour embout buccal Dash+",
          "Outil de remplissage avec porte-clés",
          "Câble de charge USB-C"
        ]
      }
    },
    "Hyer": {
      "description": "Un e-nail portable à double usage, pour concentrés ou herbes sèches, qui s'associe à toute pipe à eau verre-sur-verre et s'articule autour d'une résistance entièrement en quartz.",
      "highlights": [
        "Double usage : concentrés ou herbes sèches",
        "Résistance entièrement en quartz",
        "Compatible avec toute pipe verre-sur-verre",
        "Conception e-nail portable"
      ],
      "warranty": "Garantie limitée de 2 ans",
      "fullDescription": [
        "Le G Pen Hyer®️ est un e-nail portable à double usage, à la conception intuitive, qui fonctionne avec des concentrés ou des herbes sèches et s'associe à toute pipe à eau verre-sur-verre. Fabriqué avec des matériaux de la plus haute qualité, dont une résistance entièrement en quartz, le G Pen Hyer intègre une technologie de chauffe intelligente à température constante pour offrir une saveur et une production de vapeur parmi les meilleures de sa catégorie.",
        "Doté d'une batterie lithium-ion rechargeable de 6 000mAh avec charge rapide pass-through (utilisable pendant la charge) via USB-C, dans un boîtier en aluminium anodisé léger et résistant, le G Pen Hyer redéfinit les limites de la puissance et de la portabilité. Avec son fonctionnement à trois boutons et son interface à cinq LED, le G Pen Hyer se configure et s'active en toute simplicité, sans jamais rien concéder sur l'expérience.",
        "Un câble d'alimentation tressé premium, avec attaches magnétiques à clipser résistantes, relie la batterie à un logement de réservoir léger en aluminium anodisé, dans lequel le G Pen Hyer Quartz Tank pour concentrés ou le Dry Herb Tank* se vissent et se retirent facilement. Le réservoir pour concentrés est chauffé par une résistance en acier inoxydable estampée sur mesure et intègre une chambre entièrement en quartz ainsi qu'une cheminée interne offrant une surface de chauffe maximale, un flux d'air efficace et une vaporisation optimale des concentrés.",
        "Dernier élément clé des performances supérieures du G Pen Hyer Quartz Tank pour concentrés : le capuchon du réservoir, à fixation magnétique, en aluminium anodisé avec revêtement céramique intégré et double orifice d'aération, pour un fonctionnement rotatif tout en douceur. L'outil à cire en acier inoxydable fourni peut également se fixer sur le dessus ou le côté du capuchon, pour un rangement pratique et toujours à portée de main.",
        "Chaque kit vaporisateur G Pen Hyer est livré avec un adaptateur en verre mâle 14mm (adaptateurs 10mm et 18mm vendus séparément). Tous les composants du kit sont soigneusement rangés dans un étui de voyage en chanvre inclus, doté d'une poche en filet pour accessoires supplémentaires.",
        "*G Pen Hyer Dry Herb Tank vendu séparément.",
        "﻿*L'indice de durabilité du G Pen Hyer Quartz Tank est d'au moins 200 cycles de chauffe. Il est recommandé de remplacer votre réservoir une fois ce nombre de cycles atteint, pour des performances optimales.",
        "*Ce produit n'est pas destiné à être utilisé avec du tabac, des e-liquides contenant de la nicotine, ni avec de la nicotine de synthèse ou tout substitut de nicotine."
      ]
    },
    "Roam": {
      "description": "Un e-rig portable tout-en-un offrant une vaporisation de concentrés filtrée à l'eau où que vous soyez, avec un hydrotube en verre borosilicaté anti-fuite et un réservoir entièrement en quartz.",
      "highlights": [
        "Filtration à l'eau intégrée en verre borosilicaté",
        "Réservoir entièrement en quartz",
        "Puissante batterie 1 300mAh",
        "E-rig tout-en-un autonome"
      ],
      "warranty": "Garantie limitée de 1 an",
      "fullDescription": [
        "Découvrez le G Pen Roam, un vaporisateur portable tout-en-un à la conception intuitive, pensé pour offrir une vaporisation de concentrés filtrée à l'eau où que vous soyez. Doté d'un hydrotube autonome en verre borosilicaté anti-fuite, d'un réservoir entièrement en quartz et d'une puissante batterie lithium-ion de 1 300mAh, le G Pen Roam monte en température en quelques secondes après activation pour délivrer des inspirations douces et savoureuses en toute simplicité.",
        "Le G Pen Roam s'adapte aux préférences de saveur et de chauffe de chacun grâce à un contrôle numérique de la température et un écran LED couvrant une plage de 400° - 800°+F (204° - 427°+C), ainsi qu'à un retour haptique qui signale que l'appareil est prêt à l'emploi. Conçu avec un souci constant de portabilité discrète, le Roam est enveloppé dans une coque en alliage d'aluminium légère mais robuste, qui protège intégralement le réservoir en quartz et le tube à eau en verre. La technologie pass-through permet d'utiliser l'appareil pendant la charge, et toutes les pièces en contact avec le circuit de vapeur se démontent et se nettoient facilement.",
        "Chaque kit complet G Pen Roam est livré de série dans un étui de voyage en chanvre, avec de la place pour deux pots à concentrés et une poche pour les accessoires, comprenant un câble de charge micro USB et l'outil G Pen pour le chargement des concentrés.",
        "*Ce produit n'est pas destiné à être utilisé avec du tabac, des e-liquides contenant de la nicotine, ni avec de la nicotine de synthèse ou tout substitut de nicotine."
      ]
    },
    "Dash": {
      "description": "Le G Pen Dash original — un vaporisateur à herbes sèches compact et léger, conçu pour des sessions simples, où que vous soyez.",
      "highlights": [
        "Vaporisateur à herbes sèches compact",
        "Fonctionnement simple à un bouton",
        "Design format poche"
      ],
      "warranty": "Garantie limitée de 2 ans"
    },
    "Elite II": {
      "description": "Un vaporisateur à herbes sèches premium à convection intégrale, offrant une saveur pure et une vapeur dense avec un contrôle précis de la température.",
      "highlights": [
        "Chauffe à convection intégrale",
        "Contrôle précis de la température",
        "Chambre en céramique grande capacité"
      ],
      "warranty": "Garantie limitée de 2 ans"
    }
  }
};
