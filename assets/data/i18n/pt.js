/* =============================================================================
   PORTUGUESE (pt) LANGUAGE PACK
   -----------------------------------------------------------------------------
   Loaded on demand — only when a visitor selects this language, so English
   visitors download none of it. Editing this file is the ONLY thing needed to
   revise the Portuguese; no code changes.

     ui        UI chrome, keyed by the ENGLISH source string. A missing key
               simply falls back to English.
     training  Courses + quizzes, mirroring PORTAL_TRAINING.
     products  Product prose: description / highlights / warranty / fullDescription.

   Neutral/international Portuguese (Acordo Ortográfico de 1990), "você" register.

   RULES
   - Product names, brand names, SKUs, UPCs, filenames, units and prices are
     never translated.
   - Quiz choices MUST stay in the same ORDER as the English source: the correct
     answer is an index stored on the English data and reused as-is.
   - Keep inline <strong> tags balanced, and keep {placeholder} tokens intact.
   ========================================================================== */
window.PORTAL_I18N = window.PORTAL_I18N || {};
window.PORTAL_I18N.pt = {
  "ui": {
    "{m} lessons · {q}-question quiz · ~{min} min": "{m} aulas · Quiz de {q} perguntas · ~{min} min",
    "Concentrate Accessories": "Acessórios para concentrados",
    "Dry Herb Accessories": "Acessórios para erva seca",
    "Dry-herb devices & accessories": "Dispositivos e acessórios para erva seca",
    "Grinder": "Grinder",
    "This folder has {n} files. Downloading them one at a time can take several minutes and your browser may block it. Open the full Dropbox download instead?": "Esta pasta tem {n} arquivos. Baixá-los um a um pode levar vários minutos e seu navegador pode bloquear. Prefere abrir o download completo do Dropbox?",
    "{n} downloads starting — allow multiple if your browser asks, or use “Download all”.": "Iniciando {n} downloads — permita vários se o navegador perguntar, ou use “Baixar tudo”.",
    "Add your store name, mailing address and email so we can ship your order": "Informe o nome da loja, o endereço de entrega e o e-mail para podermos enviar seu pedido",
    "Enter a valid email address": "Informe um endereço de e-mail válido",
    "Add your name and email so we can reply": "Informe seu nome e e-mail para podermos responder",
    "Click a video to watch it, and download it or open it on YouTube where available.": "Clique em um vídeo para assistir e baixe-o ou abra-o no YouTube quando disponível.",
    "document": "documento",
    "documents": "documentos",
    "item": "item",
    "items": "itens",
    "These assets are provided for approved partner, press, and retail use. Please don't alter logos or product imagery. Need something specific or a different format? Use “Request an asset.”": "Estes materiais são disponibilizados para uso aprovado por parceiros, imprensa e varejo. Não altere os logotipos nem as imagens de produto. Precisa de algo específico ou de outro formato? Use “Solicitar um material”.",
    "Brand Documents": "Documentos da marca",
    "Dry Herb Vaporizer": "Vaporizador de erva seca",
    "510 Cartridge Battery": "Bateria para cartuchos 510",
    "Electric Hot Knife": "Hot knife elétrica",
    "Concentrate Vaporizer": "Vaporizador de concentrados",
    "Become a {name} Product Specialist": "Torne-se Especialista de Produto {name}",
    "You’re a certified {name} Specialist": "Você tem a certificação de Especialista {name}",
    "Watch the videos, learn the product, and pass a short quiz to get certified.": "Assista aos vídeos, conheça o produto e passe em um Quiz rápido para obter a certificação.",
    "Certificate earned {date} · review the course or retake anytime": "Certificado obtido em {date} · revise o curso ou refaça o Quiz quando quiser",
    "Start training →": "Iniciar treinamento →",
    "Back to {name}": "Voltar para {name}",
    "Product Specialist Training": "Treinamento de Especialista de Produto",
    "{v} videos · {m} lessons · {q}-question quiz · ~{min} min": "{v} vídeos · {m} aulas · Quiz de {q} perguntas · ~{min} min",
    "Watch the how-to-use and cleaning videos — click a video to play it in the large viewer, or download it.": "Assista aos vídeos de uso e limpeza — clique em um vídeo para reproduzi-lo no visualizador grande ou baixá-lo.",
    "Answer all {q} questions. Score {p}% or higher to earn your certificate.": "Responda a todas as {q} perguntas. Obtenha {p}% ou mais para conquistar seu certificado.",
    "Question {n} of {total}": "Pergunta {n} de {total}",
    "{a} / {b} answered": "{a} / {b} respondidas",
    "Please answer all {q} questions first": "Responda primeiro a todas as {q} perguntas",
    "Correct": "Correto",
    "Incorrect": "Incorreto",
    "Not quite — you need {p}% to certify.": "Quase lá — você precisa de {p}% para se certificar.",
    "Review the explanations above, then try again.": "Revise as explicações acima e tente novamente.",
    "Enter your name to generate your Product Specialist certificate.": "Digite seu nome para gerar seu certificado de Especialista de Produto.",
    "Your Name": "Seu nome",
    "Full name": "Nome completo",
    "G Pen · Product Specialist Program": "G Pen · Programa de Especialista de Produto",
    "Certificate of Completion": "Certificado de Conclusão",
    "This certifies that": "Certificamos que",
    "has successfully completed the Product Specialist training and demonstrated expert product knowledge of the": "concluiu com sucesso o treinamento de Especialista de Produto e demonstrou conhecimento especializado sobre o",
    "Date Issued": "Data de emissão",
    "Authorized By": "Autorizado por",
    "Certificate ID": "ID do certificado",
    "Print certificate": "Imprimir certificado",
    "Download image": "Baixar imagem",
    "Email my certification": "Enviar minha certificação por e-mail",
    "G PEN · PRODUCT SPECIALIST PROGRAM": "G PEN · PROGRAMA DE ESPECIALISTA DE PRODUTO",
    "has successfully completed the Product Specialist training": "concluiu com sucesso o treinamento de Especialista de Produto",
    "and demonstrated expert product knowledge of the": "e demonstrou conhecimento especializado sobre o",
    "Product Name": "Nome do produto",
    "Product SKU": "SKU do produto",
    "Product UPC": "UPC do produto",
    "Retail POP Display SKU": "SKU do expositor POP de loja",
    "Retail POP Display UPC": "UPC do expositor POP de loja",
    "Product Dimensions": "Dimensões do produto",
    "Unit Weight": "Peso unitário",
    "Ships In Retail POP Display": "Enviado em expositor POP de loja",
    "Units Per POP Display": "Unidades por expositor POP",
    "Units Per Master Case": "Unidades por caixa master",
    "Case Weight": "Peso da caixa",
    "Case Dimensions": "Dimensões da caixa",
    "HTS (Harmonized Tariff Schedule) Code": "Código HTS (Harmonized Tariff Schedule)",
    "Dry Herb Vape": "Vaporizador de erva seca",
    "510 Battery": "Bateria 510",
    "Concentrate Hot Knife": "Hot Knife para Concentrados",
    "Dry Herb": "Erva Seca",
    "Accessory": "Acessório",
    "E-Nail": "E-Nail",
    "E-Rig": "E-Rig",
    "Brand": "Marca",
    "Product photos": "Fotos de produto",
    "Lifestyle Photos": "Fotos de Lifestyle",
    "Social Videos": "Vídeos para Redes Sociais",
    "TV Screen Videos": "Vídeos para Telas de TV",
    "Documents": "Documentos",
    "Product Photos": "Fotos de Produto",
    "Web Banners": "Banners para Web",
    "E-Comm Render Photos": "Fotos de Render para E-Commerce",
    "Misc": "Diversos",
    "Our customer service team has been with us since day one — with over 15 years of hands-on experience with our devices. They know these products inside and out, and they’d be happy to walk you through anything or go over any additional questions you might have. We love to chat all things cannabis and vaporizers with you.": "Nossa equipe de atendimento ao cliente está com a gente desde o primeiro dia — com mais de 15 anos de experiência prática com nossos dispositivos. Eles conhecem esses produtos a fundo e vão adorar explicar o que for preciso ou esclarecer qualquer dúvida adicional. A gente adora conversar sobre cannabis e vaporizadores com você.",
    "(optional)": "(opcional)",
    "123 Main St, City, State ZIP": "Rua Principal, 123, Cidade, Estado, CEP",
    "Add each store you'd like listed on our official locator, then send your request. Have more than one location? Use <strong>Add another store</strong> to include them all.": "Adicione cada loja que você quer que apareça em nosso localizador oficial e depois envie sua solicitação. Tem mais de uma loja? Use <strong>Adicionar outra loja</strong> para incluir todas.",
    "Additional Products": "Produtos Adicionais",
    "Address": "Endereço",
    "All": "Todos",
    "Assets": "Materiais",
    "Browse all {n} logo files →": "Ver todos os {n} arquivos de logo →",
    "Carry G Pen? Request to be added to our official store locator so customers can find your shop.": "Vende G Pen? Solicite a inclusão em nosso localizador oficial de lojas para que os clientes encontrem seu ponto de venda.",
    "Clear": "Limpar",
    "Click a preview to enlarge it.": "Clique em uma pré-visualização para ampliá-la.",
    "Click preview to enlarge": "Clique na pré-visualização para ampliar",
    "Close viewer": "Fechar visualizador",
    "Contact us": "Fale conosco",
    "Decrease": "Diminuir",
    "Downloaded": "Baixado",
    "Downloading {n} files…": "Baixando {n} arquivos…",
    "Email Address": "Endereço de e-mail",
    "Enlarge": "Ampliar",
    "Fields shown as <strong>—</strong> are still to be confirmed.": "Os campos exibidos como <strong>—</strong> ainda serão confirmados.",
    "Formats": "Formatos",
    "Increase": "Aumentar",
    "Loading catalog…": "Carregando catálogo…",
    "Mailing Address": "Endereço de correspondência",
    "New": "Novo",
    "Next": "Próximo",
    "No": "Não",
    "No matches for": "Nenhum resultado para",
    "Official {brand} logos — black, white &amp; various versions. For approved partner, press &amp; retail use; please don’t alter, recolor, or distort the marks.": "Logos oficiais de {brand} — versões em preto, branco &amp; outras. Uso aprovado para parceiros, imprensa &amp; pontos de venda; por favor, não altere, não mude as cores nem distorça as marcas.",
    "Open": "Abrir",
    "Order Marketing Materials": "Solicitar Materiais de Marketing",
    "Order Materials": "Solicitar Materiais",
    "Orderable in-store marketing materials will be listed here soon. In the meantime, reach out and we’ll let you know what’s available.": "Os materiais de marketing para ponto de venda disponíveis para pedido serão listados aqui em breve. Enquanto isso, entre em contato e informaremos o que está disponível.",
    "Phone": "Telefone",
    "Popular searches": "Pesquisas populares",
    "Preparing {n} files as a .zip…": "Preparando {n} arquivos em .zip…",
    "Press <kbd>/</kbd> to search from anywhere · <kbd>Enter</kbd> opens the top result": "Pressione <kbd>/</kbd> para pesquisar de qualquer lugar · <kbd>Enter</kbd> abre o primeiro resultado",
    "Quantity for": "Quantidade para",
    "Remove this store": "Remover esta loja",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} will show here as they’re added — order what you need for your shop.": "Displays de loja, pôsteres, sinalizadores de prateleira e outros materiais de ponto de venda da {brand} aparecerão aqui conforme forem adicionados — peça o que precisar para a sua loja.",
    "Retail displays, posters, shelf talkers and other in-store materials for {brand} — order what you need for your shop.": "Displays de loja, pôsteres, sinalizadores de prateleira e outros materiais de ponto de venda da {brand} — peça o que precisar para a sua loja.",
    "Retailers": "Revendedores",
    "Select all": "Selecionar tudo",
    "Set a quantity for each item, add your store details, then send your request.": "Defina a quantidade de cada item, adicione os dados da sua loja e envie a sua solicitação.",
    "Showing the top {n} of {total} files — add a word to narrow it down.": "Mostrando os {n} principais de {total} arquivos — adicione uma palavra para refinar a busca.",
    "Store": "Loja",
    "Store Name": "Nome da Loja",
    "Store name": "Nome da loja",
    "Street, City, State, ZIP": "Rua, Cidade, Estado, CEP",
    "Submit Request": "Enviar Solicitação",
    "Try a product name (Dash), a file type (PNG, MP4), a category (lifestyle, packaging), or “catalog”.": "Tente um nome de produto (Dash), um tipo de arquivo (PNG, MP4), uma categoria (estilo de vida, embalagem) ou “catálogo”.",
    "View all →": "Ver tudo →",
    "Website": "Site",
    "Yes": "Sim",
    "Your contact info": "Suas informações de contato",
    "Your details": "Seus dados",
    "You’ll confirm and send from your email app.": "Você vai confirmar e enviar pelo seu app de e-mail.",
    "assets": "materiais",
    "available": "disponíveis",
    "colorways": "variações de cor",
    "files": "arquivos",
    "file": "arquivo",
    "logo files": "arquivos de logotipo",
    "selected": "selecionados",
    "stores": "lojas",
    "material": "material",
    "materials": "materiais",
    "{n} older {brand} products we no longer sell — assets kept for partners who still need them.": "{n} produtos {brand} antigos que não vendemos mais — materiais mantidos para parceiros que ainda precisam deles.",
    "Click to watch": "Clique para assistir",
    "Description copied": "Descrição copiada",
    "Copy": "Copiar",
    "product": "produto",
    "products": "produtos",
    "result": "resultado",
    "results": "resultados",
    "510 Batteries": "Baterias 510",
    "510-thread cartridge batteries": "Baterias para cartuchos de rosca 510",
    "Dry Herb Vaporizers": "Vaporizadores de Erva Seca",
    "Portable dry-herb devices": "Dispositivos portáteis para erva seca",
    "Concentrate": "Concentrado",
    "Concentrate tools & accessories": "Ferramentas e acessórios para concentrados",
    "More products": "Mais produtos",
    "Catalogs & Brand Documents": "Catálogos e Documentos de Marca",
    "Logos & assets": "Logos e materiais",
    "Official Brand & Product Assets": "Materiais Oficiais de Marca e Produto",
    "Wholesale & press asset requests welcome. Assets update as new products launch.": "Solicitações de materiais por revendedores e imprensa são bem-vindas. Os materiais são atualizados conforme novos produtos são lançados.",
    "Catalogs": "Catálogos",
    "Logos &amp; assets": "Logos &amp; materiais",
    "Request an asset": "Solicitar um material",
    "Request an asset →": "Solicitar um material →",
    "Official Brand &amp; Product Assets": "Materiais Oficiais de Marca &amp; Produto",
    "Everything you need, in one place.": "Tudo o que você precisa, em um só lugar.",
    "Search products, files, formats…": "Buscar produtos, arquivos, formatos…",
    "Search all assets": "Buscar em todos os materiais",
    "Featured": "Destaques",
    "Logos and Brand Assets": "Logos e Materiais de Marca",
    "Catalogs &amp; Brand Documents": "Catálogos &amp; Documentos de Marca",
    "Questions about a product?": "Dúvidas sobre um produto?",
    "Talk to our team.": "Fale com nossa equipe.",
    "Mon–Fri · 10:00 AM – 6:00 PM EST": "Seg–Sex · 10:00 – 18:00 EST",
    "Wholesale &amp; press asset requests welcome. Assets update as new products launch.": "Solicitações de materiais por revendedores &amp; imprensa são bem-vindas. Os materiais são atualizados conforme novos produtos são lançados.",
    "Browse G Pen by category": "Explore a G Pen por categoria",
    "Search results": "Resultados da busca",
    "Follow G Pen On Socials": "Siga a G Pen nas redes sociais",
    "Official accounts": "Contas oficiais",
    " Copy link": " Copiar link",
    " Download": " Baixar",
    "Add another store": "Adicionar outra loja",
    "Add at least one store's details first": "Adicione primeiro os dados de pelo menos uma loja",
    "At least one store is required": "É obrigatório informar pelo menos uma loja",
    "Back to library": "Voltar à biblioteca",
    "Brand &amp; Style Guide": "Guia de Marca &amp; Estilo",
    "Catalog not found": "Catálogo não encontrado",
    "Certified": "Certificado",
    "Certified! 🎓": "Certificado! 🎓",
    "Collection Colorways": "Variações de cor da coleção",
    "Colors": "Cores",
    "Connect storage to enable downloads": "Conecte o armazenamento para poder baixar os materiais",
    "Copy failed": "Falha ao copiar",
    "Copy folder link": "Copiar link da pasta",
    "Copy link": "Copiar link",
    "Couldn’t build the zip": "Não foi possível criar o zip",
    "Couldn’t load the zipper — try again": "Não foi possível carregar o compactador — tente novamente",
    "Couldn’t render that page": "Não foi possível renderizar essa página",
    "Document coming soon": "Documento em breve",
    "Download": "Baixar",
    "Download PDF": "Baixar PDF",
    "Download all": "Baixar tudo",
    "Download all logos": "Baixar todos os logotipos",
    "Download assets by category": "Baixar materiais por categoria",
    "Download coming soon": "Download em breve",
    "Download folder": "Baixar pasta",
    "Download logo files": "Baixar arquivos de logotipo",
    "Download logos": "Baixar logotipos",
    "Download selected": "Baixar selecionados",
    "Download video": "Baixar vídeo",
    "Downloadable file coming soon — Dropbox link on the way": "Arquivo para download em breve — link do Dropbox a caminho",
    "Enter your name for the certificate": "Digite seu nome para o certificado",
    "Get Certified": "Obter certificação",
    "Get My Certificate": "Obter meu certificado",
    "Get your store on our Store Locator": "Inclua sua loja no nosso Localizador de Lojas",
    "Highlights": "Destaques",
    "How to use videos": "Vídeos de como usar",
    "In-Store Marketing Materials": "Materiais de Marketing para Loja",
    "Learn": "Aprender",
    "Logos": "Logotipos",
    "Matching files &amp; assets": "Arquivos &amp; materiais correspondentes",
    "No link yet": "Ainda sem link",
    "No shareable link for this folder yet": "Ainda não há link compartilhável para esta pasta",
    "Official Product Description": "Descrição Oficial do Produto",
    "Opening Dropbox download…": "Abrindo o download do Dropbox…",
    "Order materials": "Pedir materiais",
    "Packaging": "Embalagem",
    "Prev": "Anterior",
    "Product FAQs": "Perguntas frequentes sobre o produto",
    "Product Manual": "Manual do Produto",
    "Remove": "Remover",
    "Request materials": "Solicitar materiais",
    "Request this asset": "Solicitar este material",
    "Request to be listed": "Solicitar inclusão no Localizador de Lojas",
    "Retry quiz": "Refazer o quiz",
    "SKU details": "Detalhes do SKU",
    "Select at least one asset first": "Selecione pelo menos um material primeiro",
    "Set a quantity for at least one item first": "Defina uma quantidade para pelo menos um item primeiro",
    "Share": "Compartilhar",
    "Store Locator Request": "Solicitação de Inclusão no Localizador de Lojas",
    "Submit Answers": "Enviar respostas",
    "Typography": "Tipografia",
    "Use “Download all” to get these from Dropbox": "Use “Baixar tudo” para obter esses arquivos no Dropbox",
    "View on site": "Ver no site",
    "Viewer is taking too long — downloading instead": "O visualizador está demorando muito — baixando o arquivo",
    "Watch": "Assistir",
    "What’s In the Box?": "O que vem na caixa?",
    "You passed!": "Você passou!",
    "YouTube": "YouTube",
    "AUTHORIZED BY": "AUTORIZADO POR",
    "Assets are coming soon — check back shortly.": "Os materiais chegam em breve — volte mais tarde.",
    "B2B Resources": "Recursos B2B",
    "Blue": "Azul",
    "Body": "Corpo de texto",
    "CERTIFICATE ID": "ID DO CERTIFICADO",
    "CERTIFIED · PRODUCT SPECIALIST": "CERTIFICADO · ESPECIALISTA DE PRODUTO",
    "Catalog": "Catálogo",
    "Catalog link copied": "Link do catálogo copiado",
    "Clear all": "Limpar tudo",
    "DATE ISSUED": "DATA DE EMISSÃO",
    "Display / Headlines": "Display / Títulos",
    "Green": "Verde",
    "How-to video": "Vídeo tutorial",
    "In-store marketing": "Marketing em loja",
    "Link copied": "Link copiado",
    "MSRP": "Preço sugerido",
    "Master carton": "Caixa master",
    "Open in": "Abrir em",
    "Pink": "Rosa",
    "Purple": "Roxo",
    "Red": "Vermelho",
    "Regional Catalogs": "Catálogos regionais",
    "Retail POP display": "Expositor POP",
    "Share view": "Compartilhar visualização",
    "Ships in POP display": "Enviado em expositor POP",
    "Ships in a retail-ready POP display — one retail box shown per colorway. See SKU details for inner-pack &amp; master-carton quantities.": "Enviado em expositor POP pronto para o ponto de venda — é mostrada uma caixa individual por variante de cor. Consulte os detalhes do SKU para as quantidades de inner-pack &amp; caixa master.",
    "Ships in a retail-ready POP display — see SKU details for inner-pack &amp; master-carton quantities.": "Enviado em expositor POP pronto para o ponto de venda — consulte os detalhes do SKU para as quantidades de inner-pack &amp; caixa master.",
    "Ships in single retail boxes — no POP display. See SKU details for master-carton quantities.": "Enviado em caixas individuais — sem expositor POP. Consulte os detalhes do SKU para as quantidades de caixa master.",
    "Single Retail Packaging": "Embalagem individual",
    "Swipe to see more folders": "Deslize para ver mais pastas",
    "View link copied": "Link da visualização copiado",
    "View {brand} assets": "Ver materiais da {brand}",
    "Warranty": "Garantia",
    "What’s in the box": "O que vem na caixa",
    "tap to copy": "toque para copiar",
    "updated": "atualizado",
    "videos": "vídeos",
    "{brand} specific in-store materials.": "Materiais em loja específicos da {brand}.",
    "{n}-Pack Retail POP Display": "Expositor POP de {n} unidades",
    "SKU": "SKU",
    "Order": "Solicitar",
    "Order marketing materials": "Solicitar materiais de marketing",
    "Printed in-store materials (posters, shelf talkers, displays) for this product will appear here as they’re added.": "Os materiais impressos para loja (cartazes, shelf talkers, expositores) deste produto aparecerão aqui à medida que forem adicionados.",
    "Training": "Treinamento",
    "Additional G Pen Products": "Outros produtos G Pen"
  },
  "training": {
    "Slim 3-Piece Grinder": {
     "tagline": "Conheça o G Pen Slim 3-Piece Grinder e depois faça o quiz para se tornar um Especialista de Produto certificado.",
     "minutes": 6,
     "passPct": 80,
     "modules": [
      {
       "title": "Visão geral do produto",
       "points": [
        "O G Pen Slim é um <strong>grinder de 3 peças</strong> para flor — não é um vaporizador.",
        "A função dele é entregar uma <strong>moagem uniforme</strong>, ideal para vaporização.",
        "Compacto o suficiente para <strong>bolso, viagem e uso no dia a dia</strong>.",
        "Preço sugerido: <strong>$19.95</strong>."
       ]
      },
      {
       "title": "O que o torna diferente",
       "points": [
        "<strong>Dentes microarredondados</strong> — e não os dentes afiados de um grinder tradicional — separam a flor com delicadeza.",
        "Essa ação mais suave ajuda a <strong>preservar canabinoides e terpenos</strong>, responsáveis pela potência e pelo sabor de cada variedade.",
        "A geometria arredondada dos dentes somada ao <strong>interior liso</strong> reduz o atrito e minimiza o acúmulo, então sobra menos flor presa no grinder.",
        "Ele é <strong>sem peneira</strong>: o design de 3 peças não tem tela para kief, então os <strong>tricomas continuam misturados ao material moído</strong> em vez de serem separados."
       ]
      },
      {
       "title": "Construção e testes independentes",
       "points": [
        "Usinado em <strong>alumínio anodizado 6063 de grau aeronáutico</strong> premium, para giro suave e durabilidade.",
        "Testado de forma independente pela <strong>Orange Photonics</strong>.",
        "Nesses testes, o design de dentes microarredondados apresentou a <strong>maior retenção de THC após a moagem</strong> entre os modelos de grinder avaliados."
       ]
      },
      {
       "title": "Como vender",
       "points": [
        "Combina com os vaporizadores de ervas secas <strong>G Pen Dash II</strong> e <strong>G Pen Dash+</strong>.",
        "Uma moagem uniforme significa um carregamento mais eficiente e melhor produção de vapor — um complemento fácil de vender junto com qualquer aparelho de ervas secas.",
        "Frase de posicionamento: <strong>Mais inteligente por design. Melhor a cada giro.</strong>"
       ]
      }
     ],
     "quiz": [
      {
       "q": "O que é o G Pen Slim 3-Piece Grinder?",
       "choices": [
        "Um vaporizador de ervas secas",
        "Um grinder para flor",
        "Uma bateria 510",
        "Uma ferramenta de dab para concentrados"
       ],
       "answer": 1,
       "why": "O Slim é um grinder de 3 peças — ele prepara a flor, não a vaporiza."
      },
      {
       "q": "Que tipo de dentes o Slim usa?",
       "choices": [
        "Dentes afiados tradicionais",
        "Dentes microarredondados",
        "Lâminas serrilhadas",
        "Mós de cerâmica"
       ],
       "answer": 1,
       "why": "Os dentes microarredondados separam a flor com delicadeza, diferentemente de um grinder tradicional de dentes afiados."
      },
      {
       "q": "Por que o design de dentes arredondados faz diferença?",
       "choices": [
        "Ele mói mais rápido do que qualquer outro design",
        "Ele ajuda a preservar canabinoides e terpenos",
        "Ele permite moer concentrados",
        "Ele elimina a necessidade de limpar o grinder"
       ],
       "answer": 1,
       "why": "A separação mais suave ajuda a preservar os canabinoides e terpenos que tornam cada variedade única."
      },
      {
       "q": "O que significa “sem peneira” neste grinder?",
       "choices": [
        "Ele não tem tampa",
        "Não há tela para kief, então os tricomas continuam misturados ao seu material moído",
        "Ele não pode ser desmontado",
        "Ele só funciona com flor seca"
       ],
       "answer": 1,
       "why": "O design de 3 peças sem peneira mantém os tricomas no material moído em vez de peneirá-los para uma câmara separada."
      },
      {
       "q": "Quantas peças o Slim tem?",
       "choices": [
        "2",
        "3",
        "4",
        "5"
       ],
       "answer": 1,
       "why": "É um grinder de 3 peças."
      },
      {
       "q": "De que material o Slim é feito?",
       "choices": [
        "Aço inoxidável",
        "Alumínio anodizado 6063 de grau aeronáutico",
        "Bioplástico de cânhamo",
        "Titânio anodizado"
       ],
       "answer": 1,
       "why": "O alumínio anodizado 6063 de grau aeronáutico premium garante giro suave e durabilidade de longo prazo."
      },
      {
       "q": "Quem testou de forma independente o design dos dentes do Slim?",
       "choices": [
        "Orange Photonics",
        "Santa Cruz Shredder",
        "SGS",
        "Underwriters Laboratories"
       ],
       "answer": 0,
       "why": "A Orange Photonics conduziu os testes independentes."
      },
      {
       "q": "O que esses testes independentes mostraram?",
       "choices": [
        "O tempo de moagem mais rápido",
        "A maior retenção de THC após a moagem entre os modelos de grinder avaliados",
        "O menor preço por grama",
        "O funcionamento mais silencioso"
       ],
       "answer": 1,
       "why": "O design de dentes microarredondados demonstrou a maior retenção de THC após a moagem entre os diversos modelos de grinder testados."
      },
      {
       "q": "Com quais aparelhos o Slim foi pensado para combinar?",
       "choices": [
        "Hydout e 510 Original",
        "Dash II e Dash+",
        "Melt e Connect",
        "Micro+ e Hyer"
       ],
       "answer": 1,
       "why": "Ele foi feito para acompanhar os vaporizadores de ervas secas G Pen Dash II e G Pen Dash+."
      },
      {
       "q": "Qual é o preço sugerido do G Pen Slim 3-Piece Grinder?",
       "choices": [
        "$14.95",
        "$19.95",
        "$29.95",
        "$49.95"
       ],
       "answer": 1,
       "why": "O Slim 3-Piece Grinder é vendido por $19.95."
      }
     ]
    },
    "Dash II": {
      "tagline": "Conheça o G Pen Dash II a fundo e depois passe no quiz para obter a certificação de Especialista de Produto.",
      "minutes": 8,
      "passPct": 80,
      "modules": [
        {
          "title": "Visão Geral do Produto",
          "points": [
            "O Dash II é um <strong>vaporizador de ervas secas</strong> de bolso — a próxima evolução do G Pen Dash, campeão de vendas.",
            "Ele é <strong>apenas para ervas secas</strong> — não é compatível com concentrados, óleos ou cartuchos 510.",
            "Usa um sistema de aquecimento por <strong>condução</strong>, com vapor consistente e aquecimento em cerca de 30 segundos.",
            "Preço sugerido de <strong>$49.95</strong>."
          ]
        },
        {
          "title": "Especificações Principais",
          "points": [
            "Câmara de aquecimento <strong>cerâmica de 0.4g</strong> — maior que a do Dash original e mais fácil de encher.",
            "Bateria de <strong>1,100mAh</strong>.",
            "Carregamento <strong>USB-C</strong> com <strong>pass-through</strong> — o aparelho pode ser usado enquanto está conectado.",
            "<strong>Display OLED</strong> mostra a temperatura e o nível de bateria em tempo real.",
            "<strong>Controle de temperatura ajustável</strong> e preciso.",
            "Dimensões <strong>97 × 35 × 21 mm</strong>, peso <strong>59.5 g</strong>.",
            "<strong>Ferramenta de enchimento</strong> integrada para encher e limpar."
          ]
        },
        {
          "title": "Como Usar",
          "points": [
            "<strong>Carregue</strong> com qualquer carregador USB-C.",
            "<strong>Encher:</strong> retire a piteira, encha totalmente a câmara com material seco e compacte levemente com a ferramenta de enchimento — <strong>não compacte demais</strong>.",
            "<strong>Ligar:</strong> mantenha o botão pressionado por <strong>3 segundos</strong>.",
            "Use <strong>– / +</strong> para ajustar a temperatura da sessão.",
            "<strong>Iniciar uma sessão:</strong> pressione o botão <strong>2× (em até 2 segundos)</strong>. Pressione <strong>2×</strong> novamente para cancelar a qualquer momento.",
            "Inale pela piteira — <strong>inalações longas e contínuas</strong> dão os melhores resultados.",
            "Pressione o botão <strong>5×</strong> para abrir o menu de configurações do aparelho."
          ]
        },
        {
          "title": "Como Limpar e Fazer Manutenção",
          "points": [
            "<strong>Depois de cada uso:</strong> limpe a tela filtrante da piteira e a câmara com a ferramenta de enchimento incluída.",
            "<strong>Limpeza profunda:</strong> retire o inserto da piteira e limpe com <strong>Álcool Isopropílico</strong>.",
            "Sempre deixe todas as peças <strong>secarem completamente</strong> antes de remontar."
          ]
        },
        {
          "title": "Garantia e Registro",
          "points": [
            "Acompanha garantia limitada de <strong>6 meses</strong>.",
            "Registrar o aparelho em <strong>gpen.com/register</strong> acrescenta mais 6 meses — uma garantia limitada completa de <strong>1 ano</strong>.",
            "<strong>Na caixa:</strong> aparelho Dash II, ferramenta de enchimento integrada, capa de silicone para a piteira. <strong>O cabo de carregamento USB-C NÃO está incluído.</strong>"
          ]
        },
        {
          "title": "Melhorias em Relação ao Dash Original",
          "points": [
            "Preço sugerido menor ($49.95), <strong>controle de temperatura</strong> ajustável e <strong>display OLED</strong>.",
            "Câmara maior de <strong>0.4g</strong> e bateria mais potente de <strong>1,100mAh</strong>.",
            "Carregamento moderno <strong>USB-C</strong> com pass-through e um design de câmara atualizado."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Qual material o G Pen Dash II foi feito para vaporizar?",
          "choices": [
            "Apenas ervas secas",
            "Concentrados e óleos",
            "Cartuchos 510",
            "Qualquer uma das opções acima"
          ],
          "answer": 0,
          "why": "O Dash II é um vaporizador exclusivamente de ervas secas — não é compatível com concentrados, óleos ou cartuchos 510."
        },
        {
          "q": "Qual é o tamanho da câmara de aquecimento do Dash II?",
          "choices": [
            "0.2g",
            "0.4g cerâmica",
            "1.0g",
            "Ele não tem câmara"
          ],
          "answer": 1,
          "why": "O Dash II tem uma câmara cerâmica aprimorada de 0.4g — maior que a do Dash original e mais fácil de encher."
        },
        {
          "q": "Que tipo de sistema de aquecimento o Dash II usa?",
          "choices": [
            "Convecção",
            "Condução",
            "Indução",
            "Chama aberta"
          ],
          "answer": 1,
          "why": "Ele usa um sistema de aquecimento por condução, com aquecimento de cerca de 30 segundos."
        },
        {
          "q": "Aproximadamente quanto tempo o Dash II leva para aquecer?",
          "choices": [
            "5 segundos",
            "30 segundos",
            "2 minutos",
            "5 minutos"
          ],
          "answer": 1,
          "why": "O aquecimento leva aproximadamente 30 segundos."
        },
        {
          "q": "Qual é a capacidade da bateria do Dash II?",
          "choices": [
            "650mAh",
            "900mAh",
            "1,100mAh",
            "2,200mAh"
          ],
          "answer": 2,
          "why": "O Dash II é alimentado por uma bateria de 1,100mAh — uma melhoria em relação ao Dash original."
        },
        {
          "q": "Qual afirmação sobre o carregamento do Dash II é VERDADEIRA?",
          "choices": [
            "Ele usa Micro-USB",
            "Ele carrega via USB-C e suporta pass-through (uso enquanto está conectado)",
            "Ele carrega apenas sem fio",
            "Ele não pode ser usado enquanto carrega"
          ],
          "answer": 1,
          "why": "O Dash II carrega via USB-C e suporta carregamento pass-through, então pode ser usado enquanto está conectado."
        },
        {
          "q": "Como você liga o Dash II?",
          "choices": [
            "Pressionar o botão uma vez",
            "Manter o botão pressionado por 3 segundos",
            "Pressionar o botão 5 vezes",
            "Deslizar o interruptor de energia"
          ],
          "answer": 1,
          "why": "Mantenha o botão pressionado por 3 segundos para ligar."
        },
        {
          "q": "Depois de ajustar a temperatura, como você INICIA uma sessão?",
          "choices": [
            "Pressionar o botão 2× em até 2 segundos",
            "Manter pressionado por 10 segundos",
            "Soprar na piteira",
            "A sessão começa automaticamente"
          ],
          "answer": 0,
          "why": "Pressione o botão 2× (em até 2 segundos) para iniciar uma sessão; pressione 2× novamente para cancelar."
        },
        {
          "q": "Para uma limpeza PROFUNDA, o que você deve usar no inserto da piteira removido?",
          "choices": [
            "Água e sabão",
            "Álcool Isopropílico",
            "Vinagre",
            "Apenas passar um pano seco"
          ],
          "answer": 1,
          "why": "Para uma limpeza profunda, retire o inserto da piteira e limpe com Álcool Isopropílico, depois deixe secar completamente antes de remontar."
        },
        {
          "q": "Como funciona a garantia do Dash II?",
          "choices": [
            "Sem garantia",
            "Garantia vitalícia",
            "6 meses limitada, estendida para 1 ano se você registrar o aparelho",
            "Apenas 30 dias para devolução"
          ],
          "answer": 2,
          "why": "É uma garantia limitada de 6 meses; registrar em gpen.com/register acrescenta mais 6 meses, totalizando um ano."
        },
        {
          "q": "Qual é o preço sugerido do Dash II?",
          "choices": [
            "$29.95",
            "$49.95",
            "$79.95",
            "$99.95"
          ],
          "answer": 1,
          "why": "O Dash II foi lançado com um preço sugerido menor, de $49.95."
        },
        {
          "q": "Qual item NÃO está incluído na caixa?",
          "choices": [
            "O aparelho Dash II",
            "Ferramenta de enchimento integrada",
            "Capa de silicone para a piteira",
            "Um cabo de carregamento USB-C"
          ],
          "answer": 3,
          "why": "O cabo de carregamento USB-C não está incluído — qualquer carregador USB-C pode ser usado."
        }
      ]
    },
    "Dash+": {
      "tagline": "Domine o G Pen Dash+ e depois passe no quiz para se tornar um Especialista de Produto certificado.",
      "minutes": 8,
      "passPct": 80,
      "modules": [
        {
          "title": "Visão Geral do Produto",
          "points": [
            "O Dash+ é um <strong>vaporizador de erva seca</strong> compacto e portátil — a evolução ampliada do G Pen Dash, nosso maior sucesso de vendas.",
            "Utiliza aquecimento <strong>híbrido por convecção + condução</strong> para sessões rápidas, saborosas e uniformes.",
            "Apenas para <strong>erva seca</strong>. Preço sugerido: <strong>$99.95</strong>."
          ]
        },
        {
          "title": "Especificações Principais",
          "points": [
            "Câmara de aquecimento inteiramente em <strong>titânio</strong>.",
            "Atinge a temperatura de vaporização em apenas <strong>20 segundos</strong>.",
            "Bateria recarregável de íon de lítio de <strong>1,800mAh</strong> com carregamento <strong>USB-C</strong>.",
            "<strong>Visor LED colorido</strong> com controle preciso de temperatura.",
            "<strong>Retorno háptico</strong> e uma interface intuitiva de <strong>3 botões</strong>.",
            "Corpo resistente em <strong>liga de zinco</strong>."
          ]
        },
        {
          "title": "Como Usar",
          "points": [
            "<strong>Encher:</strong> remova a piteira, encha a câmara com erva seca moída e recoloque a piteira.",
            "<strong>Ligar/desligar:</strong> mantenha o botão de energia pressionado por <strong>3 segundos</strong>.",
            "<strong>Ajuste a temperatura</strong> com os botões esquerdo (–) e direito (+).",
            "<strong>Iniciar ou cancelar uma sessão:</strong> pressione o botão de energia <strong>2× em até 2 segundos</strong>. O aparelho vibra e o cronômetro da sessão começa assim que a temperatura é atingida.",
            "Quando o cronômetro da sessão termina, o aquecimento desliga automaticamente; o aparelho desliga após cerca de 1 minuto de inatividade em modo de espera.",
            "Pressione o botão de energia <strong>5×</strong> para abrir o menu de Configurações (cronômetro da sessão, °F/°C, brilho, retorno háptico)."
          ]
        },
        {
          "title": "O Que Vem na Caixa",
          "points": [
            "Vaporizador G Pen Dash+, capa de silicone para a piteira, ferramenta de enchimento com chaveiro e um <strong>cabo de carregamento USB-C</strong> (incluído).",
            "Registre seu aparelho em <strong>gpen.com/register</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "Que tipo de aquecimento o Dash+ utiliza?",
          "choices": [
            "Somente condução",
            "Híbrido por convecção + condução",
            "Chama aberta",
            "Indução"
          ],
          "answer": 1,
          "why": "O Dash+ utiliza aquecimento híbrido por convecção + condução para sessões rápidas, uniformes e saborosas."
        },
        {
          "q": "De que material é feita a câmara de aquecimento do Dash+?",
          "choices": [
            "Plástico",
            "Titânio",
            "Vidro",
            "Aço inoxidável"
          ],
          "answer": 1,
          "why": "Ele conta com uma câmara de aquecimento inteiramente em titânio."
        },
        {
          "q": "Aproximadamente quanto tempo o Dash+ leva para atingir a temperatura?",
          "choices": [
            "20 segundos",
            "2 minutos",
            "5 segundos",
            "45 segundos"
          ],
          "answer": 0,
          "why": "O Dash+ atinge a temperatura de vaporização em apenas 20 segundos."
        },
        {
          "q": "Qual é a capacidade da bateria do Dash+?",
          "choices": [
            "650mAh",
            "1,100mAh",
            "1,800mAh",
            "3,000mAh"
          ],
          "answer": 2,
          "why": "Ele é alimentado por uma bateria recarregável de íon de lítio de 1,800mAh."
        },
        {
          "q": "Como você liga o Dash+?",
          "choices": [
            "Toque uma vez",
            "Mantenha o botão de energia pressionado por 3 segundos",
            "Toque 5 vezes",
            "Agite o aparelho"
          ],
          "answer": 1,
          "why": "Mantenha o botão de energia pressionado por 3 segundos para ligar ou desligar."
        },
        {
          "q": "Depois de ajustar a temperatura, como você INICIA uma sessão?",
          "choices": [
            "Pressione o botão de energia 2× em até 2 segundos",
            "Mantenha pressionado por 10 segundos",
            "Sopre no aparelho",
            "Ela começa sozinha"
          ],
          "answer": 0,
          "why": "Pressione o botão de energia 2× em até 2 segundos para iniciar (ou cancelar) uma sessão."
        },
        {
          "q": "Como você abre o menu de Configurações?",
          "choices": [
            "Pressione o botão de energia 5×",
            "Mantenha os dois botões laterais pressionados",
            "Toque uma vez",
            "Conecte o cabo USB-C"
          ],
          "answer": 0,
          "why": "Pressione o botão de energia 5× para entrar no menu de Configurações (cronômetro, °F/°C, brilho, retorno háptico)."
        },
        {
          "q": "Que tipo de visor o Dash+ possui?",
          "choices": [
            "Nenhum visor",
            "OLED monocromático",
            "LED colorido",
            "E-ink"
          ],
          "answer": 2,
          "why": "O Dash+ possui um visor LED colorido."
        },
        {
          "q": "Qual é o preço sugerido do Dash+?",
          "choices": [
            "$49.95",
            "$99.95",
            "$149.95",
            "$79.95"
          ],
          "answer": 1,
          "why": "O preço sugerido do Dash+ é $99.95."
        },
        {
          "q": "De que material é feito o corpo do Dash+?",
          "choices": [
            "Liga de zinco",
            "Silicone",
            "Madeira",
            "Fibra de carbono"
          ],
          "answer": 0,
          "why": "O Dash+ tem um corpo resistente em liga de zinco."
        }
      ]
    },
    "Melt Hot Knife": {
      "tagline": "Aprenda sobre o G Pen Melt e depois passe no quiz para se tornar um Especialista de Produto certificado.",
      "minutes": 6,
      "passPct": 80,
      "modules": [
        {
          "title": "Visão Geral do Produto",
          "points": [
            "O Melt é a <strong>menor hot knife do mercado</strong> — uma <strong>ferramenta de dab</strong> elétrica com ponta de cerâmica para concentrados.",
            "Projetado para raspar e aplicar concentrado de forma rápida, limpa e <strong>sem sujeira</strong>.",
            "Preço sugerido <strong>$19.95</strong>."
          ]
        },
        {
          "title": "Especificações Principais",
          "points": [
            "<strong>Ponta de cerâmica de aquecimento rápido</strong>.",
            "<strong>Carregamento USB-C pass-through</strong> — pode ser usado enquanto está carregando.",
            "Corpo elegante em <strong>alumínio</strong>.",
            "Ultracompacto: <strong>3.94 × 0.5 × 0.25 in</strong>, ideal para bolso &amp; kit de viagem.",
            "Combina com rigs e com o G Pen Micro+ / Hyer."
          ]
        },
        {
          "title": "Como Usar",
          "points": [
            "<strong>Ligar:</strong> pressione o botão <strong>5×</strong>.",
            "<strong>Aquecer:</strong> <strong>segure</strong> o botão para iniciar o aquecimento — ele aquece por no máximo <strong>5 segundos</strong> por acionamento.",
            "Use a ponta de cerâmica quente para raspar ou aplicar seu concentrado.",
            "Pode ser operado <strong>enquanto está carregando</strong> (sempre pronto para uso).",
            "O dispositivo desliga automaticamente após <strong>10 minutos</strong> de inatividade; o LED pisca <strong>8 vezes</strong> quando precisa ser carregado."
          ]
        },
        {
          "title": "O Que Vem na Caixa",
          "points": [
            "G Pen Melt Hot Knife e uma tampa protetora para transporte.",
            "<strong>O cabo de carregamento USB-C NÃO está incluído</strong> — qualquer carregador USB-C funciona."
          ]
        }
      ],
      "quiz": [
        {
          "q": "O que é o G Pen Melt?",
          "choices": [
            "Um vaporizador de erva seca",
            "Uma hot knife elétrica (ferramenta de dab) para concentrados",
            "Uma bateria 510",
            "Um cachimbo de água"
          ],
          "answer": 1,
          "why": "O Melt é uma hot knife elétrica com ponta de cerâmica para raspar e aplicar concentrados."
        },
        {
          "q": "O Melt é divulgado como o menor produto do mercado em qual categoria?",
          "choices": [
            "vaporizador",
            "hot knife",
            "bateria",
            "rig"
          ],
          "answer": 1,
          "why": "Ele é a menor hot knife do mercado."
        },
        {
          "q": "De que material é feita a ponta aquecida do Melt?",
          "choices": [
            "Cerâmica",
            "Titânio",
            "Quartzo",
            "Aço"
          ],
          "answer": 0,
          "why": "O Melt tem uma ponta de cerâmica de aquecimento rápido."
        },
        {
          "q": "Como você INICIA o aquecimento do Melt?",
          "choices": [
            "Toque uma vez",
            "Segure o botão",
            "Pressione 5×",
            "Ele aquece automaticamente"
          ],
          "answer": 1,
          "why": "Depois de ligar o aparelho, segure o botão para iniciar o aquecimento."
        },
        {
          "q": "Qual é o tempo máximo de aquecimento por acionamento?",
          "choices": [
            "5 segundos",
            "30 segundos",
            "2 minutos",
            "10 segundos"
          ],
          "answer": 0,
          "why": "O dispositivo aquece por no máximo 5 segundos por acionamento."
        },
        {
          "q": "O Melt pode ser usado enquanto está carregando?",
          "choices": [
            "Não",
            "Sim — USB-C pass-through",
            "Somente em uma base especial",
            "Somente quando estiver com carga total"
          ],
          "answer": 1,
          "why": "Sim — ele tem carregamento USB-C pass-through e pode ser operado enquanto está carregando."
        },
        {
          "q": "Depois de quanto tempo de inatividade o Melt desliga automaticamente?",
          "choices": [
            "1 minuto",
            "10 minutos",
            "1 hora",
            "Ele nunca desliga"
          ],
          "answer": 1,
          "why": "Ele desliga automaticamente após 10 minutos de inatividade."
        },
        {
          "q": "Como você liga o Melt?",
          "choices": [
            "Pressione o botão 5×",
            "Segure por 3 segundos",
            "Toque uma vez",
            "Gire a tampa"
          ],
          "answer": 0,
          "why": "Pressione o botão 5× para ligar o Melt."
        },
        {
          "q": "Como o Melt sinaliza que precisa ser carregado?",
          "choices": [
            "Ele emite um bipe",
            "O LED pisca 8 vezes",
            "Ele fica quente",
            "Nada"
          ],
          "answer": 1,
          "why": "O botão de LED pisca 8 vezes quando é hora de carregar."
        },
        {
          "q": "Qual é o preço sugerido do Melt?",
          "choices": [
            "$12.95",
            "$19.95",
            "$49.95",
            "$99.95"
          ],
          "answer": 1,
          "why": "O preço sugerido do Melt é $19.95."
        }
      ]
    },
    "Hydout": {
      "tagline": "Conheça o G Pen Hydout e depois passe no quiz para se tornar um Especialista de Produto certificado.",
      "minutes": 7,
      "passPct": 80,
      "modules": [
        {
          "title": "Visão Geral do Produto",
          "points": [
            "O Hydout é uma <strong>bateria discreta para cartuchos 510</strong>, compacta e com <strong>tampa magnética oculta da piteira</strong>.",
            "Voltagem ajustável e visor LED para sessões suaves, personalizáveis e discretas.",
            "Preço sugerido <strong>$19.95</strong>."
          ]
        },
        {
          "title": "Especificações Principais",
          "points": [
            "<strong>5 níveis de calor</strong> de <strong>2.4V a 3.8V</strong>.",
            "Modo de pré-aquecimento de 10 segundos a <strong>1.8V</strong>.",
            "Bateria recarregável de <strong>400mAh</strong>, carregamento <strong>USB-C</strong>.",
            "<strong>Visor LED</strong> brilhante.",
            "Compatível com <strong>cartuchos 510 de até 2g</strong>.",
            "Dimensões: <strong>90 × 37.5 × 18.5 mm</strong>."
          ]
        },
        {
          "title": "Como Usar",
          "points": [
            "<strong>Instalar:</strong> remova a piteira, rosqueie um cartucho 510 e recoloque a piteira.",
            "<strong>Ligar/desligar:</strong> clique no botão <strong>5×</strong>.",
            "<strong>Ajustar a voltagem:</strong> clique <strong>3×</strong> para alternar entre os níveis de calor.",
            "<strong>Pré-aquecimento:</strong> clique <strong>2×</strong> para um pré-aquecimento de 10 segundos a 1.8V.",
            "<strong>Tragar:</strong> <strong>mantenha</strong> o botão pressionado para ativar e tragar.",
            "Desligamento automático após <strong>2 minutos</strong> de inatividade."
          ]
        },
        {
          "title": "Cuidados &amp; O Que Vem na Caixa",
          "points": [
            "Limpe a piteira e a conexão entre bateria e cartucho com um cotonete e <strong>Álcool Isopropílico</strong>. <strong>Não mergulhe a bateria.</strong>",
            "Na caixa: a bateria 510 Hydout + tampa magnética da piteira. O cartucho 510 e o cabo USB-C <strong>não estão incluídos</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "O que é o G Pen Hydout?",
          "choices": [
            "Um vaporizador de erva seca",
            "Uma bateria para cartuchos 510",
            "Uma faca quente",
            "Um infusor por gravidade"
          ],
          "answer": 1,
          "why": "O Hydout é uma bateria discreta para cartuchos 510."
        },
        {
          "q": "Qual é o recurso discreto característico do Hydout?",
          "choices": [
            "Uma tampa magnética oculta da piteira",
            "Uma tela dobrável",
            "Um motor silencioso",
            "Um revestimento camuflado"
          ],
          "answer": 0,
          "why": "Ele tem uma tampa magnética oculta da piteira para um visual discreto."
        },
        {
          "q": "Qual é a faixa de voltagem do Hydout?",
          "choices": [
            "1.0V–2.0V",
            "2.4V–3.8V (5 níveis)",
            "3.8V–4.8V",
            "Uma única voltagem fixa"
          ],
          "answer": 1,
          "why": "O Hydout oferece 5 níveis de calor de 2.4V a 3.8V."
        },
        {
          "q": "Qual é a capacidade da bateria do Hydout?",
          "choices": [
            "200mAh",
            "400mAh",
            "900mAh",
            "1,800mAh"
          ],
          "answer": 1,
          "why": "Ele tem uma bateria recarregável de 400mAh."
        },
        {
          "q": "Como ligar ou desligar o Hydout?",
          "choices": [
            "Clique no botão 5×",
            "Mantenha pressionado por 3 segundos",
            "Clique 2×",
            "Inspire"
          ],
          "answer": 0,
          "why": "Clique no botão 5× para ligar ou desligar o Hydout."
        },
        {
          "q": "Como mudar a voltagem?",
          "choices": [
            "Clique 3×",
            "Clique 5×",
            "Mantenha o botão pressionado",
            "Gire a piteira"
          ],
          "answer": 0,
          "why": "Clique no botão 3× para alternar entre os níveis de calor."
        },
        {
          "q": "Como dar uma tragada no Hydout?",
          "choices": [
            "Basta inalar",
            "Mantenha o botão pressionado enquanto inala",
            "Clique 2×",
            "Pressione e solte"
          ],
          "answer": 1,
          "why": "Mantenha o botão pressionado para ativar e tragar."
        },
        {
          "q": "O que acontece ao clicar no botão 2×?",
          "choices": [
            "Desliga o aparelho",
            "Inicia um pré-aquecimento de 10 segundos a 1.8V",
            "Bloqueia o aparelho",
            "Nada"
          ],
          "answer": 1,
          "why": "Clicar 2× inicia um pré-aquecimento de 10 segundos a 1.8V."
        },
        {
          "q": "Em quanto tempo o Hydout desliga automaticamente?",
          "choices": [
            "2 minutos",
            "10 minutos",
            "30 segundos",
            "1 hora"
          ],
          "answer": 0,
          "why": "O Hydout desliga automaticamente após 2 minutos de inatividade."
        },
        {
          "q": "Qual é a forma correta de limpar o Hydout?",
          "choices": [
            "Mergulhar a bateria inteira em álcool",
            "Cotonete + Álcool Isopropílico na conexão — NÃO mergulhe a bateria",
            "Enxaguar em água corrente",
            "Nunca precisa de limpeza"
          ],
          "answer": 1,
          "why": "Use um cotonete com Álcool Isopropílico nos pontos de conexão; nunca mergulhe a bateria."
        }
      ]
    },
    "510 Original": {
      "tagline": "Conheça o G Pen 510 Original e depois passe no quiz para se tornar um Especialista de Produto certificado.",
      "minutes": 6,
      "passPct": 80,
      "modules": [
        {
          "title": "Visão Geral do Produto",
          "points": [
            "O 510 Original é a <strong>menor e mais acessível bateria G Pen de todos os tempos</strong> — uma releitura moderna da primeira bateria da Grenco, de 2012.",
            "Uma <strong>bateria para cartuchos 510</strong> ultraportátil com <strong>ativação por inalação</strong>.",
            "Preço sugerido: <strong>$12.95</strong>."
          ]
        },
        {
          "title": "Especificações Principais",
          "points": [
            "<strong>Ativação por inalação</strong> — basta inalar (ou manter o botão pressionado).",
            "<strong>Três voltagens predefinidas: 3.2 / 3.6 / 3.8V</strong>.",
            "Modo de pré-aquecimento de <strong>1.8V</strong> por 10 segundos.",
            "Bateria de <strong>400mAh</strong> com carregamento <strong>USB-C pass-through</strong>.",
            "<strong>Visor</strong> digital.",
            "Dimensões: <strong>24 × 21.1 × 56.7 mm</strong>."
          ]
        },
        {
          "title": "Como Usar",
          "points": [
            "<strong>Instalar:</strong> rosqueie um cartucho 510.",
            "<strong>Ligar/desligar:</strong> clique no botão <strong>5×</strong>.",
            "<strong>Ajustar a voltagem:</strong> clique <strong>3×</strong> para alternar entre 3.2 / 3.6 / 3.8V.",
            "<strong>Pré-aquecimento:</strong> clique <strong>2×</strong> para um pré-aquecimento de 10 segundos a 1.8V.",
            "<strong>Tragada:</strong> basta <strong>inalar</strong> (ativação por inalação) — ou manter o botão pressionado.",
            "Desligamento automático após <strong>10 minutos</strong> de inatividade."
          ]
        },
        {
          "title": "Cuidados &amp; O Que Vem na Caixa",
          "points": [
            "Limpe a conexão entre a bateria e o cartucho com um cotonete e <strong>álcool isopropílico</strong>. <strong>Não mergulhe a bateria em líquido.</strong>",
            "Na caixa: a bateria 510 Original. O carregador USB-C e o cartucho 510 <strong>não estão incluídos</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "O que há de notável no 510 Original?",
          "choices": [
            "É a maior bateria G Pen",
            "É a menor e mais acessível bateria G Pen de todos os tempos (uma releitura da original de 2012)",
            "É um vaporizador de erva seca",
            "Funciona apenas com cartuchos G Pen"
          ],
          "answer": 1,
          "why": "É a menor e mais acessível bateria G Pen de todos os tempos — uma releitura moderna da primeira bateria da Grenco, de 2012."
        },
        {
          "q": "Como você ativa uma tragada no 510 Original?",
          "choices": [
            "Inalando (a ativação é por inalação) — ou mantendo o botão pressionado",
            "Clicando 5×",
            "Não funciona sem tocar na tela",
            "Girando o cartucho"
          ],
          "answer": 0,
          "why": "O 510 Original tem ativação por inalação — basta inalar ou manter o botão pressionado."
        },
        {
          "q": "Quais são as três voltagens predefinidas?",
          "choices": [
            "2.4 / 3.0 / 3.6V",
            "3.2 / 3.6 / 3.8V",
            "1.8 / 2.4 / 3.0V",
            "3.8 / 4.2 / 4.8V"
          ],
          "answer": 1,
          "why": "Ele tem três voltagens predefinidas: 3.2, 3.6 e 3.8V."
        },
        {
          "q": "Qual é a capacidade da bateria do 510 Original?",
          "choices": [
            "150mAh",
            "400mAh",
            "900mAh",
            "1,100mAh"
          ],
          "answer": 1,
          "why": "Ele tem uma bateria de 400mAh com carregamento USB-C pass-through."
        },
        {
          "q": "Como você liga ou desliga o 510 Original?",
          "choices": [
            "Clicando no botão 5×",
            "Mantendo pressionado por 3 segundos",
            "Clicando 3×",
            "Soprando"
          ],
          "answer": 0,
          "why": "Clique no botão 5× para ligar ou desligar."
        },
        {
          "q": "Como você altera a voltagem?",
          "choices": [
            "Clicando 3×",
            "Clicando 5×",
            "Mantendo o botão pressionado",
            "Apertando mais o cartucho"
          ],
          "answer": 0,
          "why": "Clique no botão 3× para alternar entre 3.2 / 3.6 / 3.8V."
        },
        {
          "q": "O que acontece ao clicar 2×?",
          "choices": [
            "Desliga o aparelho",
            "Inicia um pré-aquecimento de 10 segundos a 1.8V",
            "Bloqueia a bateria",
            "Nada"
          ],
          "answer": 1,
          "why": "Clicar 2× inicia um pré-aquecimento de 10 segundos a 1.8V."
        },
        {
          "q": "Depois de quanto tempo o 510 Original desliga automaticamente?",
          "choices": [
            "2 minutos",
            "10 minutos",
            "30 segundos",
            "1 hora"
          ],
          "answer": 1,
          "why": "Ele desliga automaticamente após 10 minutos de inatividade."
        },
        {
          "q": "Como o 510 Original é carregado?",
          "choices": [
            "Micro-USB",
            "USB-C pass-through",
            "Somente sem fio",
            "Baterias substituíveis"
          ],
          "answer": 1,
          "why": "Ele é carregado via USB-C e é compatível com carregamento pass-through."
        },
        {
          "q": "Qual é o preço sugerido do 510 Original?",
          "choices": [
            "$12.95",
            "$19.95",
            "$49.95",
            "$9.95"
          ],
          "answer": 0,
          "why": "Por $12.95, é a bateria G Pen mais acessível de todos os tempos."
        }
      ]
    },
    "Hydout — Retro": {
      "tagline": "Aprenda sobre o G Pen Hydout e depois passe no quiz para se tornar um Especialista de Produto certificado.",
      "minutes": 7,
      "passPct": 80,
      "modules": [
        {
          "title": "Visão Geral do Produto",
          "points": [
            "O Hydout é uma <strong>bateria compacta e discreta para cartuchos 510</strong> com <strong>tampa magnética oculta da piteira</strong>.",
            "Voltagem ajustável e visor LED para sessões suaves, personalizáveis e discretas.",
            "Preço sugerido: <strong>$19.95</strong>."
          ]
        },
        {
          "title": "Especificações Principais",
          "points": [
            "<strong>5 níveis de temperatura</strong> de <strong>2.4V a 3.8V</strong>.",
            "Modo de pré-aquecimento de <strong>1.8V</strong> por 10 segundos.",
            "Bateria recarregável de <strong>400mAh</strong>, carregamento <strong>USB-C</strong>.",
            "<strong>Visor LED</strong> brilhante.",
            "Compatível com <strong>cartuchos 510 de até 2g</strong>.",
            "Dimensões: <strong>90 × 37.5 × 18.5 mm</strong>."
          ]
        },
        {
          "title": "Como Usar",
          "points": [
            "<strong>Instalar:</strong> remova a piteira, rosqueie um cartucho 510 e recoloque a piteira.",
            "<strong>Ligar/desligar:</strong> clique no botão <strong>5×</strong>.",
            "<strong>Ajustar a voltagem:</strong> clique <strong>3×</strong> para alternar entre os níveis de temperatura.",
            "<strong>Pré-aquecimento:</strong> clique <strong>2×</strong> para um pré-aquecimento de 10 segundos a 1.8V.",
            "<strong>Inalar:</strong> <strong>mantenha</strong> o botão pressionado para ativar e inalar.",
            "Desligamento automático após <strong>2 minutos</strong> de inatividade."
          ]
        },
        {
          "title": "Cuidados &amp; O Que Vem na Caixa",
          "points": [
            "Limpe a piteira e a conexão entre a bateria e o cartucho com um cotonete e <strong>Álcool Isopropílico</strong>. <strong>Não mergulhe a bateria.</strong>",
            "Na caixa: a bateria 510 Hydout + tampa magnética da piteira. O cartucho 510 e o cabo USB-C <strong>não estão incluídos</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "O que é o G Pen Hydout?",
          "choices": [
            "Um vaporizador de erva seca",
            "Uma bateria para cartuchos 510",
            "Uma faca quente",
            "Um infusor de gravidade"
          ],
          "answer": 1,
          "why": "O Hydout é uma bateria discreta para cartuchos 510."
        },
        {
          "q": "Qual é o recurso de discrição característico do Hydout?",
          "choices": [
            "Uma tampa magnética oculta da piteira",
            "Uma tela dobrável",
            "Um motor silencioso",
            "Um revestimento camuflado"
          ],
          "answer": 0,
          "why": "Ele tem uma tampa magnética oculta da piteira para um visual discreto."
        },
        {
          "q": "Qual é a faixa de voltagem do Hydout?",
          "choices": [
            "1.0V–2.0V",
            "2.4V–3.8V (5 níveis)",
            "3.8V–4.8V",
            "Uma única voltagem fixa"
          ],
          "answer": 1,
          "why": "O Hydout oferece 5 níveis de temperatura de 2.4V a 3.8V."
        },
        {
          "q": "Qual é a capacidade da bateria do Hydout?",
          "choices": [
            "200mAh",
            "400mAh",
            "900mAh",
            "1,800mAh"
          ],
          "answer": 1,
          "why": "Ele tem uma bateria recarregável de 400mAh."
        },
        {
          "q": "Como ligar ou desligar o Hydout?",
          "choices": [
            "Clique no botão 5×",
            "Mantenha pressionado por 3 segundos",
            "Clique 2×",
            "Inspire"
          ],
          "answer": 0,
          "why": "Clique no botão 5× para ligar ou desligar o Hydout."
        },
        {
          "q": "Como mudar a voltagem?",
          "choices": [
            "Clique 3×",
            "Clique 5×",
            "Mantenha o botão pressionado",
            "Gire a piteira"
          ],
          "answer": 0,
          "why": "Clique no botão 3× para alternar entre os níveis de temperatura."
        },
        {
          "q": "Como dar uma tragada no Hydout?",
          "choices": [
            "Basta inalar",
            "Mantenha o botão pressionado enquanto inala",
            "Clique 2×",
            "Pressione e solte"
          ],
          "answer": 1,
          "why": "Mantenha o botão pressionado para ativar e inalar."
        },
        {
          "q": "O que acontece ao clicar no botão 2×?",
          "choices": [
            "Desliga o aparelho",
            "Inicia um pré-aquecimento de 10 segundos a 1.8V",
            "Bloqueia o aparelho",
            "Nada"
          ],
          "answer": 1,
          "why": "Clicar 2× inicia um pré-aquecimento de 10 segundos a 1.8V."
        },
        {
          "q": "Em quanto tempo o Hydout desliga automaticamente?",
          "choices": [
            "2 minutos",
            "10 minutos",
            "30 segundos",
            "1 hora"
          ],
          "answer": 0,
          "why": "O Hydout desliga automaticamente após 2 minutos de inatividade."
        },
        {
          "q": "Qual é a forma correta de limpar o Hydout?",
          "choices": [
            "Mergulhar a bateria inteira em álcool",
            "Cotonete + Álcool Isopropílico na conexão — NÃO mergulhe a bateria",
            "Enxaguar em água corrente",
            "Nunca precisa de limpeza"
          ],
          "answer": 1,
          "why": "Use um cotonete com Álcool Isopropílico nos pontos de contato; nunca mergulhe a bateria."
        }
      ]
    },
    "510 Original — Retro": {
      "tagline": "Conheça o G Pen 510 Original e depois passe no quiz para obter a certificação de Especialista de Produto.",
      "minutes": 6,
      "passPct": 80,
      "modules": [
        {
          "title": "Visão geral do produto",
          "points": [
            "O 510 Original é a <strong>menor e mais acessível bateria G Pen de todos os tempos</strong> — uma releitura moderna da primeira bateria da Grenco, de 2012.",
            "Uma <strong>bateria para cartuchos 510</strong> ultraportátil com <strong>ativação por inalação</strong>.",
            "Preço sugerido: <strong>$12.95</strong>."
          ]
        },
        {
          "title": "Especificações principais",
          "points": [
            "<strong>Ativação por inalação</strong> — basta inspirar (ou manter o botão pressionado).",
            "<strong>Três voltagens predefinidas: 3.2 / 3.6 / 3.8V</strong>.",
            "Modo de pré-aquecimento de 10 segundos a <strong>1.8V</strong>.",
            "Bateria de <strong>400mAh</strong> com carregamento <strong>USB-C pass-through</strong>.",
            "<strong>Visor</strong> digital.",
            "Dimensões: <strong>24 × 21.1 × 56.7 mm</strong>."
          ]
        },
        {
          "title": "Como usar",
          "points": [
            "<strong>Instalar:</strong> rosqueie um cartucho 510.",
            "<strong>Ligar/desligar:</strong> clique no botão <strong>5×</strong>.",
            "<strong>Ajustar a voltagem:</strong> clique <strong>3×</strong> para alternar entre 3.2 / 3.6 / 3.8V.",
            "<strong>Pré-aquecimento:</strong> clique <strong>2×</strong> para um pré-aquecimento de 10 segundos a 1.8V.",
            "<strong>Inalar:</strong> basta <strong>inspirar</strong> (ativação por inalação) — ou manter o botão pressionado.",
            "Desligamento automático após <strong>10 minutos</strong> de inatividade."
          ]
        },
        {
          "title": "Cuidados &amp; O que vem na caixa",
          "points": [
            "Limpe a conexão entre a bateria e o cartucho com um cotonete e <strong>álcool isopropílico</strong>. <strong>Não mergulhe a bateria em líquido.</strong>",
            "Na caixa: a bateria 510 Original. O carregador USB-C e o cartucho 510 <strong>não estão incluídos</strong>."
          ]
        }
      ],
      "quiz": [
        {
          "q": "O que há de notável no 510 Original?",
          "choices": [
            "É a maior bateria G Pen",
            "É a menor e mais acessível bateria G Pen de todos os tempos (uma releitura da original de 2012)",
            "É um vaporizador de ervas secas",
            "Funciona apenas com cartuchos G Pen"
          ],
          "answer": 1,
          "why": "É a menor e mais acessível bateria G Pen de todos os tempos — uma releitura moderna da primeira bateria da Grenco, de 2012."
        },
        {
          "q": "Como acionar uma tragada no 510 Original?",
          "choices": [
            "Inspirando (a ativação é por inalação) — ou mantendo o botão pressionado",
            "Clicando 5×",
            "Não funciona sem tocar na tela",
            "Girando o cartucho"
          ],
          "answer": 0,
          "why": "O 510 Original tem ativação por inalação — basta inspirar ou manter o botão pressionado."
        },
        {
          "q": "Quais são as três voltagens predefinidas?",
          "choices": [
            "2.4 / 3.0 / 3.6V",
            "3.2 / 3.6 / 3.8V",
            "1.8 / 2.4 / 3.0V",
            "3.8 / 4.2 / 4.8V"
          ],
          "answer": 1,
          "why": "Ele tem três voltagens predefinidas: 3.2, 3.6 e 3.8V."
        },
        {
          "q": "Qual é a capacidade da bateria do 510 Original?",
          "choices": [
            "150mAh",
            "400mAh",
            "900mAh",
            "1,100mAh"
          ],
          "answer": 1,
          "why": "Ele tem uma bateria de 400mAh com carregamento USB-C pass-through."
        },
        {
          "q": "Como ligar ou desligar o 510 Original?",
          "choices": [
            "Clicar no botão 5×",
            "Manter pressionado por 3 segundos",
            "Clicar 3×",
            "Soprar"
          ],
          "answer": 0,
          "why": "Clique no botão 5× para ligar ou desligar."
        },
        {
          "q": "Como mudar a voltagem?",
          "choices": [
            "Clicar 3×",
            "Clicar 5×",
            "Manter o botão pressionado",
            "Apertar mais o cartucho"
          ],
          "answer": 0,
          "why": "Clique no botão 3× para alternar entre 3.2 / 3.6 / 3.8V."
        },
        {
          "q": "O que acontece ao clicar 2×?",
          "choices": [
            "Desliga o aparelho",
            "Inicia um pré-aquecimento de 10 segundos a 1.8V",
            "Bloqueia a bateria",
            "Nada"
          ],
          "answer": 1,
          "why": "Clicar 2× inicia um pré-aquecimento de 10 segundos a 1.8V."
        },
        {
          "q": "Em quanto tempo o 510 Original desliga automaticamente?",
          "choices": [
            "2 minutos",
            "10 minutos",
            "30 segundos",
            "1 hora"
          ],
          "answer": 1,
          "why": "Ele desliga automaticamente após 10 minutos de inatividade."
        },
        {
          "q": "Como o 510 Original é carregado?",
          "choices": [
            "Micro-USB",
            "USB-C pass-through",
            "Apenas sem fio",
            "Baterias substituíveis"
          ],
          "answer": 1,
          "why": "Ele é carregado via USB-C e é compatível com carregamento pass-through."
        },
        {
          "q": "Qual é o preço sugerido do 510 Original?",
          "choices": [
            "$12.95",
            "$19.95",
            "$49.95",
            "$9.95"
          ],
          "answer": 0,
          "why": "Por $12.95, é a bateria G Pen mais acessível de todos os tempos."
        }
      ]
    }
  },
  "products": {
    "Slim 3-Piece Grinder": {
     "description": "Um grinder de 3 peças fino e sem peneira, com dentes microarredondados que separam a flor com delicadeza e entregam uma moagem uniforme — feito para acompanhar o Dash II e o Dash+.",
     "highlights": [
      "Dentes microarredondados para uma moagem suave e uniforme",
      "Ajuda a preservar canabinoides e terpenos",
      "Design de 3 peças sem peneira mantém os tricomas no seu material",
      "Interior liso reduz o atrito e o acúmulo",
      "Alumínio anodizado 6063 de grau aeronáutico",
      "Maior retenção de THC após a moagem nos testes da Orange Photonics",
      "Tampa magnética mantém o conteúdo seguro",
      "Perfil compacto para levar no bolso e em viagens",
      "Combina com o G Pen Dash II e o Dash+"
     ],
     "fullDescription": [
      "Toda boa sessão começa com uma moagem melhor. O G Pen Slim 3-Piece Grinder foi desenvolvido com dentes microarredondados inovadores, que separam a flor com delicadeza para uma moagem uniforme e ajudam a preservar os canabinoides e terpenos que tornam cada variedade única.",
      "Diferentemente dos grinders tradicionais de dentes afiados, a geometria arredondada dos dentes do Slim e seu interior liso reduzem o atrito e minimizam o acúmulo, mantendo mais da sua flor onde ela deve estar. O design de 3 peças sem peneira também deixa os tricomas misturados ao material moído, em vez de separá-los, enquanto o perfil compacto é perfeito para o bolso, para viagens e para o uso no dia a dia.",
      "Fabricado em alumínio anodizado 6063 de grau aeronáutico premium, o G Pen Slim oferece giro suave, durabilidade de longo prazo e desempenho preciso. Em testes independentes da Orange Photonics, o inovador design de dentes microarredondados demonstrou a maior retenção de THC após a moagem entre os diversos modelos de grinder avaliados.",
      "Projetado para produzir uma moagem uniforme e ideal para vaporização, o G Pen Slim 3-Piece Grinder combina perfeitamente com os vaporizadores de ervas secas G Pen Dash II e G Pen Dash+, ajudando você a aproveitar ao máximo cada carga com uma moagem homogênea e eficiente, otimizada para um vapor cheio de sabor.",
      "Mais inteligente por design. Melhor a cada giro."
     ]
    },
    "Dash II": {
      "description": "A próxima evolução do Dash, o campeão de vendas — um vaporizador de erva seca de bolso aprimorado em todos os aspectos, com aquecimento mais rápido, fluxo de ar otimizado e controle de temperatura refinado.",
      "warranty": "Garantia limitada de 6 meses, estendida para 1 ano mediante registro",
      "fullDescription": [
        "A próxima evolução do Dash, nosso vaporizador campeão de vendas — aprimorado em todos os aspectos e agora por apenas $49.95.",
        "O G Pen Dash II é um vaporizador de erva seca de bolso com controle preciso de temperatura, display OLED e uma câmara cerâmica de 0.4g aprimorada, projetada para melhor desempenho e enchimento mais fácil. Equipado com uma bateria aprimorada de 1,100mAh e maior duração, o Dash II entrega sessões suaves e confiáveis, com aquecimento em 30 segundos e carregamento pass-through via USB-C.",
        "Mais controle. Enchimento mais fácil. Melhor desempenho."
      ],
      "highlights": [
        "Vaporizador de erva seca de bolso",
        "Aquecimento em 30 segundos",
        "Controle preciso de temperatura",
        "Display OLED",
        "Câmara cerâmica de 0.4g aprimorada (enchimento mais fácil)",
        "Ferramenta de enchimento",
        "Bateria de 1,100mAh",
        "Carregamento pass-through USB-C"
      ],
      "box": {
        "contents": [
          "Vaporizador de erva seca G Pen Dash II",
          "Ferramenta de enchimento integrada",
          "Capa de silicone para a piteira",
          "*Cabo de carregamento USB-C não incluído"
        ]
      }
    },
    "510 Original — Retro": {
      "description": "A edição Retro Collection do 510 Original une um acabamento translúcido vintage e suave ao mesmo desempenho 510 ultraportátil e com ativação por inalação, inspirado na primeira bateria da G Pen, de 2012.",
      "warranty": "Garantia limitada — consulte a política",
      "fullDescription": [
        "Original. Aprimorado. Retro.",
        "De volta ao ponto de partida—com um acabamento retro suave.",
        "O G Pen 510 Original da Retro Collection combina o design transparente nostálgico com uma cor translúcida intensa e marcante. Inspirada na nossa primeira bateria 510, de 2012, esta edição aprimorada mantém o original simples e confiável, refinando-o para sessões modernas em qualquer lugar.",
        "Com apenas 24 × 21.1 × 56.7 mm, a menor bateria G Pen já produzida, o 510 Original é compacto o suficiente para acompanhar você sem esforço no dia a dia. A ativação por inalação torna o uso fácil e dispensa botões durante a sessão, enquanto a interface de botão único dá a você controle sobre três voltagens predefinidas (3.2/3.6/3.8V), o modo de pré-aquecimento de 1.8V por 10 segundos e o visor digital.",
        "A bateria de 400 mAh com carregamento pass-through USB-C ajuda a manter o dispositivo pronto sempre que você precisar, mesmo enquanto ele estiver carregando. Com a carcaça retro translúcida e o desempenho 510 aprimorado, esta bateria de bolso entrega uma mistura equilibrada de estilo vintage e função para o dia a dia.",
        "Simples. Confiável. Um ícone. O original está de volta.",
        "*Cartucho 510 não incluído",
        "**Carregador USB-C não incluído"
      ],
      "highlights": [
        "Acabamento retro translúcido",
        "Ativação por inalação",
        "Três voltagens predefinidas (3.2 / 3.6 / 3.8V)",
        "Modo de pré-aquecimento 1.8V por 10 segundos",
        "Bateria de 400mAh",
        "Carregamento pass-through USB-C",
        "Visor digital",
        "24 × 21.1 × 56.7 mm"
      ],
      "box": {
        "contents": [
          "Bateria G Pen 510 Original",
          "*Carregador USB C não incluído",
          "*Cartucho 510 não incluído"
        ]
      }
    },
    "Melt Hot Knife": {
      "description": "O G Pen Melt é o menor hot knife do mercado — uma ferramenta de dab compacta, com ponta de cerâmica, para recolher e transferir concentrados de forma rápida, limpa e sem sujeira.",
      "warranty": "Garantia limitada — consulte a política",
      "fullDescription": [
        "Conheça o novíssimo G Pen Melt Hot Knife — o menor hot knife do mercado e a maneira mais rápida e limpa de preparar seus concentrados. Com apenas 3.94 in de altura, 0.5 in de largura e 0.25 in de profundidade, o Melt é ultracompacto, ultraportátil e feito para desaparecer em qualquer bolso ou kit de viagem.",
        "Projetado para recolher o material sem sujeira e liberar gotas suaves e controladas, o Melt torna as situações mais pegajosas fáceis como manteiga. A ponta de cerâmica de aquecimento rápido fica pronta em instantes para transferências perfeitas sempre. Sem ferramentas grudentas. Sem desastres de reclaim. Sem complicação.",
        "E agora, com carregamento pass-through USB-C, você pode continuar usando o Melt mesmo enquanto ele está conectado — porque a única coisa pior do que uma ferramenta de dab sem bateria é ficar esperando ela carregar.",
        "Com corpo de alumínio elegante, porta USB-C universal e a silhueta característica da G Pen, o Melt é seu novo essencial do dia a dia — seja para encher um rig, reabastecer um G Pen Micro+ ou preparar seu G Pen Hyer.",
        "Tamanho pequeno. Potência de sobra. Zero sujeira. Sempre pronto."
      ],
      "highlights": [
        "O menor hot knife do mercado",
        "Ponta de cerâmica de aquecimento rápido",
        "Carregamento pass-through USB-C",
        "Corpo de alumínio elegante",
        "Ultracompacto: 3.94 × 0.5 × 0.25 in",
        "Recolhe e transfere sem sujeira",
        "Ideal para bolso e kit de viagem",
        "Compatível com rigs, Micro+, Hyer"
      ],
      "box": {
        "contents": [
          "G Pen Melt Hot Knife",
          "Tampa de proteção para viagem",
          "*Cabo de carregamento USB C não incluído"
        ]
      }
    },
    "Connect": {
      "description": "Um vaporizador de concentrados sem maçarico que transforma qualquer cachimbo de água com conexão vidro-vidro no dab rig definitivo — sem maçarico nem prego exposto.",
      "warranty": "Garantia limitada de 1 ano",
      "fullDescription": [
        "O melhor vaporizador de dab sem maçarico, a alternativa ideal aos rigs tradicionais. O G Pen Connect é um vaporizador de concentrados revolucionário para cachimbos de água que elimina a necessidade de maçarico e de prego exposto. Com aquecimento rápido, atinge a temperatura ideal em cinco segundos e entrega vapor de qualidade premium sem complicação.",
        "Motivos para escolher o G Pen Connect",
        "Tecnologia sem maçarico: vaporizador de dab com aquecimento cerâmico, seguro e prático – sem chamas abertas",
        "Aquecimento em 5 segundos: ativação rápida para produção imediata de vapor denso",
        "Compatibilidade universal: inclui adaptadores de vidro de 10mm, 14mm e 18mm para qualquer cachimbo de água com conexão vidro-vidro",
        "Fluxo de ar reverso patenteado: garante uma vaporização uniforme e eficiente dos concentrados",
        "Três níveis de temperatura: personalize sua experiência conforme o tipo de concentrado e sua preferência de sabor",
        "Modo de inalação prolongada: para sessões mais longas e potentes",
        "Bateria potente de 850 mAh: suporta várias sessões seguidas, com carregamento pass-through",
        "Carburador com mola: ajuste instantâneo do fluxo de ar para limpar a câmara sem esforço",
        "Qualidade de construção premium: equipado com um elemento de aquecimento cerâmico que preserva o sabor do concentrado e proporciona inalações suaves e potentes quando combinado com o seu cachimbo de água preferido. A conexão magnética de encaixe garante uma montagem rápida e sem esforço todas as vezes.",
        "Portátil e pronto para viagem: apesar do desempenho potente, o G Pen Connect é compacto o suficiente para levar com você. Todos os kits incluem uma bolsa de viagem de cânhamo para guardar o produto com facilidade.",
        "O kit completo inclui: dispositivo G Pen Connect, adaptadores de vidro de 10mm/14mm/18mm, bolsa de viagem de cânhamo, cabo de carregamento USB e manual do usuário.",
        "Quer substituir seu rig tradicional? Conheça as colaborações de edição limitada Cookies x G Pen Connect e Dr. Greenthumb's x G Pen Connect.",
        "Tecnologia patenteada:",
        "US 10,004,264 B2",
        "US 10,021,909 B2",
        "US 10,188,145 B2",
        "US 10,321,721 B2",
        "US 10,327,470 B2",
        "*Este produto não se destina ao uso com tabaco, e-liquids com nicotina, nem com qualquer nicotina sintética ou substituto de nicotina.",
        "\"@context\": \"https://schema.org\","
      ],
      "highlights": [
        "Aquecimento cerâmico sem maçarico — sem chamas abertas",
        "Aquecimento em 5 segundos para vapor denso imediato",
        "Inclui adaptadores de vidro de 10mm, 14mm e 18mm",
        "Fluxo de ar reverso patenteado para vaporização uniforme",
        "Três níveis de temperatura + modo de inalação prolongada"
      ]
    },
    "510 Original": {
      "description": "A menor e mais acessível bateria G Pen de todos os tempos, a 510 Original reinventa a primeiríssima bateria da Grenco, de 2012, com desempenho moderno, ativação por inalação e formato ultraportátil para cartuchos 510.",
      "warranty": "Garantia limitada — consulte a política",
      "fullDescription": [
        "De volta ao ponto de partida—agora com melhorias.",
        "A G Pen 510 Original fecha o ciclo: inspirada na nossa primeira bateria, de 2012, e totalmente repaginada para os dias de hoje. É a menor bateria G Pen já produzida (24 × 21.1 × 56.7 mm), ultraportátil e simples de usar, sem abrir mão do desempenho.",
        "Com ativação por inalação, a 510 Original deixa cada sessão descomplicada: basta inalar e pronto. Para mais controle, a interface de botão único permite alternar entre três voltagens predefinidas (3.2/3.6/3.8V), ativar o modo de pré-aquecimento de 1.8V por 10 segundos e acompanhar tudo no visor digital. A bateria de 400 mAh com carregamento pass-through por USB-C permite que você carregue e use o aparelho ao mesmo tempo, sem perder o ritmo.",
        "Por apenas $12.95, é também a bateria G Pen mais acessível já lançada—a prova de que tecnologia premium não precisa vir com preço premium.",
        "Simples. Confiável. Inconfundível. A original está de volta.",
        "*Cartucho 510 não incluído",
        "** Carregador USB C não incluído"
      ],
      "highlights": [
        "A menor bateria G Pen de todos os tempos",
        "Ativação por inalação — basta inalar e pronto",
        "Três voltagens predefinidas (3.2 / 3.6 / 3.8V)",
        "Pré-aquecimento de 1.8V por 10 segundos",
        "Bateria de 400mAh",
        "Carregamento pass-through por USB-C",
        "Visor digital",
        "24 × 21.1 × 56.7 mm"
      ],
      "box": {
        "contents": [
          "Bateria G Pen 510 Original",
          "*Carregador USB C não incluído",
          "*Cartucho 510 não incluído"
        ]
      }
    },
    "Hydout": {
      "description": "A G Pen Hydout é uma bateria compacta e discreta para cartuchos 510, com tampa magnética oculta para a piteira, voltagem ajustável e visor LED para sessões suaves e personalizáveis sem chamar atenção.",
      "warranty": "Garantia limitada — consulte a política",
      "fullDescription": [
        "Procurando a melhor bateria para cartuchos 510 para sessões discretas em qualquer lugar? Conheça a Bateria para Cartuchos 510 G Pen Hydout — uma bateria de vape compacta e camuflada para cartuchos 510 que entrega desempenho de verdade sem entregar o seu jogo.",
        "Pequena no tamanho e grande no desempenho, ela traz uma tampa magnética oculta para a piteira, que mantém o cartucho discreto e protegido da luz (sim, isso ajuda a preservar a qualidade do óleo), bateria de 400mAh, voltagem ajustável e um visor LED de alto brilho para você ter domínio total sobre cada tragada. Compatível com a maioria dos cartuchos de rosca 510 de até 2g, a Hydout é perfeita para sessões suaves e personalizáveis—onde quer que você esteja."
      ],
      "highlights": [
        "Tampa magnética oculta para a piteira",
        "5 níveis de temperatura (2.4V – 3.8V)",
        "Modo de pré-aquecimento de 1.8V",
        "Bateria recarregável de 400mAh",
        "Visor LED de alto brilho",
        "Carregamento USB-C",
        "Aceita cartuchos 510 de até 2g",
        "90 × 37.5 × 18.5 mm"
      ],
      "box": {
        "contents": [
          "1x Bateria para Cartuchos 510 G Pen Hydout",
          "1x Tampa Magnética para a Piteira",
          "Cartucho 510 não incluído",
          "Cabo de carregamento USB-C não incluído"
        ]
      }
    },
    "Hydout — Retro": {
      "description": "A edição Retro da G Pen Hydout dá à discreta bateria para cartuchos 510 um acabamento translúcido inspirado nos anos 90, que deixa o interior à vista, e acrescenta a ativação por inalação à voltagem variável e ao carregamento USB-C.",
      "warranty": "Garantia limitada — consulte a política",
      "fullDescription": [
        "A G Pen Hydout Retro combina um elegante acabamento translúcido inspirado nos anos 90, que deixa o interior à vista, com a engenharia refinada por trás da bateria 510 mais discreta da G Pen. Sua carcaça magnética envolve o cartucho para protegê-lo do desgaste do dia a dia, mantendo seu conjunto visualmente limpo e minimalista.",
        "Projetada para ser versátil, a Hydout inclui configurações de voltagem variável para um controle de calor personalizado e uma função de pré-aquecimento de 1.8V que aquece concentrados mais densos antes do uso. Esta edição Retro também acrescenta a ativação por inalação, que deixa cada tragada totalmente livre de botões, e o carregamento pass-through USB-C, que mantém o dispositivo pronto para uso mesmo enquanto está conectado à tomada.",
        "Com carregamento USB-C rápido, uma câmara de cartucho justa e sem folgas, e compatibilidade com a maioria dos cartuchos 510, a Hydout Retro entrega desempenho moderno sob sua carcaça translúcida nostálgica.",
        "*Cartucho 510 não incluído",
        "**Carregador USB-C não incluído"
      ],
      "highlights": [
        "Acabamento translúcido inspirado nos anos 90",
        "Ativação por inalação",
        "Voltagem variável ajustável",
        "Modo de pré-aquecimento 1.8V",
        "Bateria recarregável de 400mAh",
        "Carregamento pass-through USB-C",
        "Compatível com a maioria dos cartuchos 510",
        "Tampa magnética oculta para a piteira"
      ],
      "box": {
        "contents": [
          "Bateria G Pen Hydout com rosca 510",
          "Piteira magnética",
          "*Cabo de carregamento USB-C não incluído",
          "*Cartucho 510 não incluído"
        ]
      }
    },
    "Dash+": {
      "description": "O G Pen Dash+ é um vaporizador portátil de erva seca de nova geração, com aquecimento híbrido por convecção e condução em câmara de titânio, atingindo a temperatura de vaporização em cerca de 20 segundos.",
      "warranty": "Garantia limitada — consulte a política",
      "fullDescription": [
        "O G Pen Dash+ é um vaporizador de erva seca compacto, criado para sessões rápidas, saborosas e personalizáveis. Com aquecimento híbrido por convecção e condução em câmara totalmente de titânio, atinge a temperatura em apenas 20 segundos, gerando vapor suave e uniforme.",
        "Os dois canais de entrada de ar limpo e a piteira magnética com percurso de ar espiralado em cerâmica ajudam a maximizar o fluxo de ar e o sabor. O visor LED colorido, a interface de três botões, o retorno tátil e o ajuste preciso de temperatura facilitam a personalização de cada sessão.",
        "Com corpo resistente em liga de zinco e bateria recarregável de 1,800mAh com carregamento USB-C, o G Pen Dash+ garante desempenho consistente em um design elegante e portátil, feito para o uso diário.",
        "*Este produto não deve ser usado com tabaco, e-líquidos com nicotina, nem com qualquer nicotina sintética ou substituto de nicotina."
      ],
      "highlights": [
        "Aquecimento híbrido por convecção + condução",
        "Câmara de aquecimento em titânio",
        "Aquece em ~20 segundos",
        "Bateria recarregável de íon-lítio de 1,800mAh",
        "Carregamento USB-C",
        "Visor LED colorido",
        "Retorno tátil, interface de 3 botões",
        "Carcaça em liga de zinco"
      ],
      "box": {
        "contents": [
          "Vaporizador Dash+",
          "Capa de silicone para piteira Dash+",
          "Ferramenta de enchimento com chaveiro",
          "Cabo de carregamento USB-C"
        ]
      }
    },
    "Hyer": {
      "description": "E-nail portátil de uso duplo para concentrados ou erva seca, compatível com qualquer cachimbo de água vidro-vidro e com elemento de aquecimento totalmente em quartzo.",
      "warranty": "Garantia limitada de 2 anos",
      "fullDescription": [
        "O G Pen Hyer®️ é um e-nail portátil de uso duplo e design intuitivo, que funciona com concentrados ou erva seca e se acopla a qualquer cachimbo de água com encaixe vidro-vidro. Fabricado com materiais da mais alta qualidade, incluindo um elemento de aquecimento totalmente em quartzo, o G Pen Hyer conta com tecnologia de aquecimento inteligente e saída de temperatura constante para entregar sabor e produção de vapor de primeira linha.",
        "Com bateria recarregável de íon-lítio de 6,000mAh e carregamento rápido e pass-through via USB-C, em uma carcaça de alumínio anodizado leve e resistente, o G Pen Hyer redefine os limites de potência e portabilidade. Com operação simples de três botões e interface de cinco LEDs, o G Pen Hyer garante configuração e ativação fáceis, entregando uma experiência sem concessões.",
        "Um cabo de alimentação trançado premium, com conexões magnéticas de encaixe resistentes, liga a bateria a um compartimento de tanque em alumínio anodizado leve, no qual o Tanque de Quartzo G Pen Hyer para Concentrados ou o Tanque para Erva Seca* pode ser rosqueado e removido com facilidade. O Tanque para Concentrados é aquecido por um elemento de aquecimento em aço inoxidável estampado sob medida e conta com câmara totalmente em quartzo e haste interna, oferecendo a máxima área de superfície para aquecimento, fluxo de ar eficiente e uma vaporização ideal dos concentrados.",
        "O componente final no desempenho superior do Tanque de Quartzo G Pen Hyer para Concentrados é a tampa do Tanque para Concentrados: de encaixe magnético e feita em alumínio anodizado, com revestimento cerâmico integrado e dois orifícios de fluxo de ar para um funcionamento rotativo suave. A ferramenta para cera em aço inoxidável inclusa também pode ser fixada no topo ou na lateral da tampa do tanque, facilitando a colocação e o acesso.",
        "Cada kit do vaporizador G Pen Hyer acompanha um adaptador de vidro macho de 14mm (adaptadores de vidro de 10mm e 18mm vendidos separadamente). Todos os componentes do kit vêm cuidadosamente organizados em um estojo de viagem em cânhamo incluso, com bolso de malha para acessórios adicionais.",
        "*Tanque para Erva Seca G Pen Hyer vendido separadamente.",
        "﻿*O índice de durabilidade do Tanque de Quartzo G Pen Hyer é de no mínimo 200 ciclos de energia. Recomenda-se substituir o tanque assim que esse número de ciclos for atingido, para um desempenho ideal.",
        "*Este produto não deve ser usado com tabaco, e-líquidos com nicotina, nem com qualquer nicotina sintética ou substituto de nicotina."
      ],
      "highlights": [
        "Uso duplo: concentrados ou erva seca",
        "Elemento de aquecimento totalmente em quartzo",
        "Compatível com qualquer cachimbo de água vidro-vidro",
        "Design de e-nail portátil"
      ]
    },
    "Roam": {
      "description": "Um e-rig portátil tudo-em-um que proporciona vaporização de concentrados com filtragem por água em qualquer lugar, com hydrotube de vidro borossilicato resistente a derramamentos e tanque totalmente em quartzo.",
      "warranty": "Garantia limitada de 1 ano",
      "fullDescription": [
        "Apresentamos o G Pen Roam, um vaporizador portátil tudo-em-um projetado de forma intuitiva para oferecer vaporização de concentrados com filtragem por água em qualquer lugar. Com hydrotube de vidro borossilicato autônomo e resistente a derramamentos, tanque totalmente em quartzo e potente bateria de íon-lítio de 1,300mAh, o G Pen Roam atinge a temperatura em segundos após a ativação para proporcionar tragadas suaves e saborosas com toda a facilidade.",
        "O G Pen Roam se adapta às preferências de sabor e de calor de cada usuário por meio do controle digital de temperatura e do display LED, com faixa de 400° - 800°+F (204° - 427°+C), além do recurso de feedback tátil que indica quando o dispositivo está pronto para uso. Desenvolvido com atenção rigorosa à portabilidade discreta, o Roam é revestido por uma carcaça em liga de alumínio leve, porém resistente, que protege integralmente o tanque de quartzo e o tubo de água de vidro. A tecnologia passthrough permite usar o dispositivo enquanto ele está conectado à tomada, e todas as peças em contato com o trajeto do vapor podem ser desmontadas e limpas com facilidade.",
        "Cada kit completo do G Pen Roam já vem em um estojo de viagem de cânhamo, com espaço para dois potes de concentrado e um bolso para acessórios, que incluem um cabo de carregamento micro USB e a G Pen Tool para o enchimento dos concentrados.",
        "*Este produto não deve ser usado com tabaco, e-liquids que contenham nicotina ou qualquer nicotina sintética ou substituto de nicotina."
      ],
      "highlights": [
        "Filtragem por água integrada em vidro borossilicato",
        "Tanque totalmente em quartzo",
        "Potente bateria de 1,300mAh",
        "E-rig tudo-em-um e autônomo"
      ]
    },
    "Dash": {
      "description": "O G Pen Dash original — um vaporizador de erva seca compacto e leve, criado para sessões simples em qualquer lugar.",
      "warranty": "Garantia limitada de 2 anos",
      "highlights": [
        "Vaporizador de erva seca compacto",
        "Operação simples com um botão",
        "Design que cabe no bolso"
      ]
    },
    "Elite II": {
      "description": "Vaporizador premium de erva seca por convecção total, que oferece sabor puro e vapor denso com controle preciso de temperatura.",
      "warranty": "Garantia limitada de 2 anos",
      "highlights": [
        "Aquecimento por convecção total",
        "Controle preciso de temperatura",
        "Câmara cerâmica de grande capacidade"
      ]
    }
  }
};
