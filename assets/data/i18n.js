/* =============================================================================
   SPANISH (es) CONTENT — portal-wide language toggle
   -----------------------------------------------------------------------------
   Everything a Spanish visitor reads lives here. Editing this file is the ONLY
   thing needed to revise the Spanish — no code changes.

     PORTAL_I18N.es.ui   UI chrome, keyed by the ENGLISH source string. Any string
                         missing here simply falls back to English.
     PORTAL_TRAINING_ES  Training courses + quizzes, mirroring PORTAL_TRAINING.
     PORTAL_PRODUCT_ES   Product prose (description / highlights / warranty).

   RULES
   - Product names, SKUs, UPCs, filenames, units and prices are never translated.
   - Quiz choices MUST stay in the same ORDER as the English source: the correct
     answer is stored as an index on the English data and is reused as-is.
   - Keep inline <strong> tags balanced and around the equivalent Spanish words.
   ========================================================================== */

window.PORTAL_TRAINING_ES = {
  "Melt Hot Knife": {
    "tagline": "Aprenda sobre el G Pen Melt y luego apruebe el cuestionario para certificarse como Especialista de Producto.",
    "modules": [
      {
        "title": "Descripción General del Producto",
        "points": [
          "El Melt es el <strong>cuchillo caliente más pequeño del mercado</strong> — una <strong>herramienta para dabs</strong> eléctrica con punta de cerámica para concentrados.",
          "Diseñado para recoger y depositar de forma rápida, limpia y <strong>sin desorden</strong>.",
          "PVP sugerido <strong>$24.95</strong>."
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
          "$24.95",
          "$49.95",
          "$99.95"
        ],
        "why": "El PVP sugerido del Melt es $24.95."
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
          "PVP sugerido: <strong>$24.95</strong>."
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
          "$24.95",
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
          "PVP sugerido <strong>$24.95</strong>."
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
          "$24.95",
          "$49.95",
          "$9.95"
        ],
        "why": "A $12.95, es la batería G Pen más económica jamás creada."
      }
    ]
  }
};

window.PORTAL_PRODUCT_ES = {
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
    "warranty": "Garantía limitada de 6 meses, extendida a 1 año si se registra"
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
    "warranty": "Garantía limitada — consulte la política"
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
    "warranty": "Garantía limitada — consulte la política"
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
    "warranty": "Garantía limitada de 1 año"
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
    "warranty": "Garantía limitada — consulte la política"
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
    "warranty": "Garantía limitada — consulte la política"
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
    "warranty": "Garantía limitada — consulte la política"
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
    "warranty": "Garantía limitada — consulte la política"
  },
  "Hyer": {
    "description": "Un e-nail portátil de doble uso para concentrados o hierba seca que se acopla a cualquier pieza de agua con conexión de vidrio a vidrio, construido en torno a un elemento de calentamiento de cuarzo completo.",
    "highlights": [
      "Doble uso: concentrados o hierba seca",
      "Elemento de calentamiento de cuarzo completo",
      "Se acopla a cualquier pieza de vidrio a vidrio",
      "Diseño de e-nail portátil"
    ],
    "warranty": "Garantía limitada de 2 años"
  },
  "Roam": {
    "description": "Un e-rig portátil todo en uno que ofrece vaporización de concentrados con filtración de agua en cualquier lugar, con un hidrotubo de vidrio borosilicato resistente a derrames y un tanque de cuarzo completo.",
    "highlights": [
      "Filtración de agua integrada en vidrio borosilicato",
      "Tanque de cuarzo completo",
      "Potente batería de 1,300mAh",
      "E-rig todo en uno y autónomo"
    ],
    "warranty": "Garantía limitada de 1 año"
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
};

/* UI chrome, keyed by the ENGLISH source string exactly as it appears in app.js.
   Anything missing here renders in English (safe fallback), so it is always OK
   to add keys incrementally. Two keys intentionally keep a leading space —
   they sit next to an icon in the markup. */
window.PORTAL_I18N = {
  es: {
    ui: {
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
      "Click to watch": "Haga clic para ver",
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
      "Download image": "Descargar imagen",
      "Download logo files": "Descargar archivos de logo",
      "Download logos": "Descargar logos",
      "Download selected": "Descargar seleccionados",
      "Download video": "Descargar video",
      "Downloadable file coming soon — Dropbox link on the way": "Archivo descargable próximamente — el enlace de Dropbox está en camino",
      "Email my certification": "Enviar mi certificación por correo",
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
      "Print certificate": "Imprimir certificado",
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
      "YouTube": "YouTube"
    }
  }
};
