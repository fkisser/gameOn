let products = JSON.parse(localStorage.getItem("products")) || [
  {
    "id": 1,
    "title": "Portátil HP Pavilion",
    "description": "Potente portátil con procesador Intel Core i7, 16GB de RAM y disco SSD de 512GB. Ideal para tareas exigentes y gaming.",
    "category": "Notebooks",
    "price": 1099.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_931895-MLA52543653517_112022-F.webp"
  },
  {
    "id": 2,
    "title": "Monitor LG Ultrawide",
    "description": "Monitor ultrapanorámico de 34 pulgadas con resolución QHD y tecnología IPS. Perfecto para productividad y entretenimiento.",
    "category": "Monitores",
    "price": 499.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_861623-MLA51804851792_102022-F.webp"
  },
  {
    "id": 3,
    "title": "Impresora multifunción Canon",
    "description": "Impresora, escáner y copiadora en un solo dispositivo. Velocidad de impresión de 30 páginas por minuto y conectividad Wi-Fi.",
    "category": "Impresoras",
    "price": 189.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_971857-MLA48463363043_122021-F.webp"
  },
  {
    "id": 4,
    "title": "Teclado mecánico Razer",
    "description": "Teclado gaming con interruptores mecánicos, retroiluminación RGB personalizable y reposamuñecas ergonómico.",
    "category": "Teclados",
    "price": 129.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_976907-MLA50895822354_072022-F.webp"
  },
  {
    "id": 5,
    "title": "Disco duro externo Seagate",
    "description": "Almacena tus archivos con seguridad en este disco duro externo de 2TB con conexión USB 3.0. Compatible con PC y Mac.",
    "category": "Almacenamiento",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_851322-MLA52701224790_122022-F.webp"
  },
  {
    "id": 6,
    "title": "Cámara web Logitech C920",
    "description": "Cámara web de alta definición con resolución Full HD 1080p y micrófonos duales incorporados. Ideal para videoconferencias.",
    "category": "Webcams",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_990278-MLA52218300956_102022-F.webp"
  },
  {
    "id": 7,
    "title": "Mouse inalámbrico Microsoft",
    "description": "Mouse ergonómico con tecnología inalámbrica y seguimiento preciso. Funciona con pilas AA y tiene una duración de batería de hasta 12 meses.",
    "category": "Mouse",
    "price": 24.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_781844-MLA32146296838_092019-F.webp"
  },
  {
    "id": 8,
    "title": "Altavoces Bluetooth JBL",
    "description": "Altavoces Notebooks con conectividad Bluetooth y batería recargable. Ofrecen un sonido potente y de alta calidad.",
    "category": "Audio",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_912142-MLA51457763140_092022-F.webp"
  },
  {
    "id": 9,
    "title": "Router Wi-Fi TP-Link",
    "description": "Router inalámbrico de doble banda con velocidades de hasta 1200Mbps. Ideal para hogares con múltiples dispositivos conectados.",
    "category": "Redes",
    "price": 49.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_720845-MLA47604256413_092021-F.webp"
  },
  {
    "id": 10,
    "title": "Tableta gráfica Wacom",
    "description": "Tableta gráfica con lápiz sensible a la presión y área activa de 10x6 pulgadas. Perfecta para diseño gráfico y dibujo digital.",
    "category": "Tabletas",
    "price": 149.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_703767-MLA40187105336_122019-F.webp"
  },
  {
    "id": 11,
    "title": "Disco duro SSD Samsung",
    "description": "Unidad de estado sólido de 1TB con velocidad de transferencia de datos ultrarrápida. Mejora el rendimiento de tu computadora.",
    "category": "Almacenamiento",
    "price": 129.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_636214-MLA40251750485_122019-F.webp"
  },
  {
    "id": 12,
    "title": "Laptop Lenovo ThinkPad",
    "description": "Laptop empresarial con procesador Intel Core i5, 8GB de RAM y pantalla de 14 pulgadas. Diseño resistente y teclado retroiluminado.",
    "category": "Notebooks",
    "price": 899.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_683601-MLU69344205666_052023-F.webp"
  },
  {
    "id": 13,
    "title": "Monitor Dell 4K",
    "description": "Monitor de 27 pulgadas con resolución 4K y tecnología HDR. Colores vívidos y detalles nítidos para una experiencia visual impresionante.",
    "category": "Monitores",
    "price": 799.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_900159-MLA51372391816_092022-F.webp"
  },
  {
    "id": 14,
    "title": "Impresora láser Brother",
    "description": "Impresora láser monocromática con conectividad Ethernet y capacidad para imprimir hasta 30 páginas por minuto.",
    "category": "Impresoras",
    "price": 199.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_635310-MLA32484418985_102019-F.webp"
  },
  {
    "id": 15,
    "title": "Teclado inalámbrico Apple",
    "description": "Teclado delgado y compacto con tecnología inalámbrica Bluetooth. Diseño elegante y batería recargable de larga duración.",
    "category": "Teclados",
    "price": 99.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_961885-MLA69431718532_052023-F.webp"
  },
  {
    "id": 16,
    "title": "Disco duro externo Western Digital",
    "description": "Disco duro portátil de 4TB con conectividad USB 3.0. Almacena tus archivos de forma segura y transporta tus datos fácilmente.",
    "category": "Almacenamiento",
    "price": 129.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_963749-MLA47690672422_092021-F.webp"
  },
  {
    "id": 17,
    "title": "Altavoces Logitech G560",
    "description": "Sistema de altavoces 2.1 con potencia de 200W y certificación THX. Sonido envolvente y graves profundos para disfrutar de tus películas y juegos.",
    "category": "Audio",
    "price": 149.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_722050-MLA32701625916_102019-F.webp"
  },
  {
    "id": 18,
    "title": "Mouse gaming Corsair",
    "description": "Mouse para gaming con sensor óptico de alta precisión y retroiluminación personalizable. Diseño ergonómico para mayor comodidad.",
    "category": "Mouse",
    "price": 69.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_777913-MLA48956178421_012022-F.webp"
  },
  {
    "id": 19,
    "title": "Router Wi-Fi ASUS",
    "description": "Router de doble banda con tecnología Wi-Fi 6 y velocidades de hasta 3000Mbps. Ideal para hogares con múltiples dispositivos conectados.",
    "category": "Redes",
    "price": 159.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_864277-MLA48416203586_122021-F.webp"
  },
  {
    "id": 20,
    "title": "Tableta gráfica Huion",
    "description": "Tableta gráfica con pantalla de 15.6 pulgadas y lápiz sin batería. Permite dibujar directamente en la pantalla con gran precisión.",
    "category": "Tabletas",
    "price": 299.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_965015-MLA51145693323_082022-F.webp"
  },
  {
    "id": 21,
    "title": "Laptop Acer Swift",
    "description": "Laptop ultradelgada con procesador Intel Core i7, 16GB de RAM y SSD de 1TB. Pantalla de 14 pulgadas y batería de larga duración.",
    "category": "Notebooks",
    "price": 1299.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_607556-MLA49536203811_032022-F.webp"
  },
  {
    "id": 22,
    "title": "Monitor Samsung Curvo",
    "description": "Monitor curvo de 32 pulgadas con resolución QHD y tecnología AMD FreeSync. Amplio campo de visión y colores vibrantes.",
    "category": "Monitores",
    "price": 599.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_948288-MLU69492988231_052023-F.webp"
  },
  {
    "id": 23,
    "title": "Impresora multifunción Epson",
    "description": "Impresora, escáner y copiadora con conectividad Wi-Fi y velocidad de impresión de hasta 15 páginas por minuto.",
    "category": "Impresoras",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_920222-MLA45506566377_042021-F.webp"
  },
  {
    "id": 24,
    "title": "Teclado mecánico Corsair",
    "description": "Teclado gaming con interruptores mecánicos Cherry MX y retroiluminación RGB. Teclas programables y reposamuñecas desmontable.",
    "category": "Teclados",
    "price": 149.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_805775-MLA46516796524_062021-F.webp"
  },
  {
    "id": 25,
    "title": "Disco duro externo LaCie",
    "description": "Disco duro portátil resistente con capacidad de 2TB y conexión Thunderbolt. Protección contra caídas, polvo y agua.",
    "category": "Almacenamiento",
    "price": 199.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_981221-MLA42224316213_062020-F.webp"
  },
  {
    "id": 26,
    "title": "Altavoces Bose SoundLink",
    "description": "Altavoces Bluetooth Notebooks con sonido de alta calidad. Batería recargable de larga duración y resistencia al agua.",
    "category": "Audio",
    "price": 199.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_873123-MLA53270387604_012023-F.webp"
  },
  {
    "id": 27,
    "title": "Mouse inalámbrico Logitech MX Master",
    "description": "Mouse inalámbrico con seguimiento láser de alta precisión y rueda de desplazamiento adaptable. Compatible con varios dispositivos.",
    "category": "Mouse",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_945737-MLA50896130021_072022-F.webp"
  },
  {
    "id": 28,
    "title": "Router Wi-Fi D-Link",
    "description": "Router de doble banda con tecnología MU-MIMO y velocidades de hasta 3200Mbps. Conexión segura y estable en todo el hogar.",
    "category": "Redes",
    "price": 99.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_972825-MLA54840219072_042023-F.webp"
  },
  {
    "id": 29,
    "title": "Tableta gráfica XP-Pen",
    "description": "Tableta gráfica con lápiz sin batería y sensibilidad a la presión de 8192 niveles. Superficie de dibujo de gran tamaño y alta precisión.",
    "category": "Tabletas",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_724670-MLA32384425734_102019-F.webp"
  },
  {
    "id": 30,
    "title": "Laptop Dell XPS",
    "description": "Laptop ultradelgada con pantalla táctil de 13.3 pulgadas, procesador Intel Core i5, 8GB de RAM y SSD de 256GB.",
    "category": "Notebooks",
    "price": 1199.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_892154-MLA44998674140_022021-F.webp"
  },
  {
    "id": 31,
    "title": "Monitor LG 4K Ultrawide",
    "description": "Monitor ultrapanorámico de 34 pulgadas con resolución 4K y tecnología IPS. Amplio espacio de trabajo y colores precisos.",
    "category": "Monitores",
    "price": 899.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_825786-MLA52445480836_112022-F.webp"
  },
  {
    "id": 32,
    "title": "Impresora fotográfica Canon Selphy",
    "description": "Impresora portátil para fotos de 4x6 pulgadas con tecnología de sublimación de tinta. Impresiones rápidas y de alta calidad.",
    "category": "Impresoras",
    "price": 99.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_664074-MLA53304898114_012023-F.webp"
  },
  {
    "id": 33,
    "title": "Teclado retroiluminado Razer Huntsman",
    "description": "Teclado gaming con interruptores ópticos y retroiluminación personalizable. Diseño duradero y resistente a derrames.",
    "category": "Teclados",
    "price": 149.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_825122-MLA43713003001_102020-F.webp"
  },
  {
    "id": 34,
    "title": "Disco duro externo Toshiba Canvio",
    "description": "Disco duro portátil de 1TB con conectividad USB 3.0. Diseño compacto y resistente para llevar tus archivos contigo.",
    "category": "Almacenamiento",
    "price": 59.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_666214-MLA54950120963_042023-F.webp"
  },
  {
    "id": 35,
    "title": "Altavoces Harman Kardon",
    "description": "Altavoces estéreo con sonido envolvente y tecnología Bluetooth. Diseño elegante y calidad de audio excepcional.",
    "category": "Audio",
    "price": 149.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_642272-MLA47953547030_102021-F.webp"
  },
  {
    "id": 36,
    "title": "Mouse gaming Razer DeathAdder",
    "description": "Mouse ergonómico para gaming con sensor óptico de 6400 DPI y retroiluminación RGB. Botones programables y gran precisión.",
    "category": "Mouse",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_737543-MLA47215972219_082021-F.webp"
  },
  {
    "id": 37,
    "title": "Router Wi-Fi Netgear",
    "description": "Router de triple banda con tecnología Wi-Fi 6 y velocidades de hasta 6000Mbps. Cobertura amplia y rendimiento óptimo.",
    "category": "Redes",
    "price": 249.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_757609-MLA50808160215_072022-F.webp"
  },
  {
    "id": 38,
    "title": "Tableta gráfica GAOMON",
    "description": "Tableta gráfica con área activa de 10x6.25 pulgadas y lápiz sin batería. Compatible con varios programas de diseño.",
    "category": "Tabletas",
    "price": 59.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_764557-MLA32376800257_092019-F.webp"
  },
  {
    "id": 39,
    "title": "Laptop HP Pavilion",
    "description": "Laptop con pantalla de 15.6 pulgadas, procesador Intel Core i5, 12GB de RAM y disco duro de 1TB. Ideal para tareas diarias.",
    "category": "Notebooks",
    "price": 699.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_931895-MLA52543653517_112022-F.webp"
  },
  {
    "id": 40,
    "title": "Monitor BenQ Gaming",
    "description": "Monitor de 24 pulgadas con frecuencia de actualización de 144Hz y tiempo de respuesta de 1ms. Imágenes fluidas y sin desenfoque.",
    "category": "Monitores",
    "price": 299.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_760924-MLA43299956052_082020-F.webp"
  },
  {
    "id": 41,
    "title": "Impresora láser HP LaserJet",
    "description": "Impresora láser monocromática de alta velocidad y conectividad USB. Ideal para entornos de oficina con gran volumen de impresión.",
    "category": "Impresoras",
    "price": 299.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_864559-MLA48404761459_122021-F.webp"
  },
  {
    "id": 42,
    "title": "Teclado mecánico SteelSeries",
    "description": "Teclado gaming con interruptores mecánicos y retroiluminación RGB. Teclas programables y reposamuñecas ergonómico.",
    "category": "Teclados",
    "price": 129.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_705301-MLA48699001679_122021-F.webp"
  },
  {
    "id": 43,
    "title": "Disco duro externo Seagate Backup Plus",
    "description": "Disco duro portátil de 2TB con conexión USB 3.0. Realiza copias de seguridad de tus archivos de forma fácil y rápida.",
    "category": "Almacenamiento",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_632480-MLA40285935987_122019-F.webp"
  },
  {
    "id": 44,
    "title": "Altavoces Sony SRS-XB13",
    "description": "Altavoces Notebooks con tecnología Extra Bass y resistencia al agua. Conexión Bluetooth y batería de larga duración.",
    "category": "Audio",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_716155-MLA49506976900_032022-F.webp"
  },
  {
    "id": 45,
    "title": "Mouse inalámbrico Microsoft Arc",
    "description": "Mouse inalámbrico de diseño elegante y ergonómico. Conexión Bluetooth y seguimiento preciso en diferentes superficies.",
    "category": "Mouse",
    "price": 49.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_826298-MLA46383502197_062021-F.webp"
  },
  {
    "id": 46,
    "title": "Access Point Wi-Fi TP-Link",
    "description": "Access Point de doble banda con tecnología Wi-Fi 5 y velocidades de hasta 1750Mbps. Cobertura amplia y conexión estable.",
    "category": "Redes",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_871664-MLA46739399642_072021-F.webp"
  },
  {
    "id": 47,
    "title": "Tableta gráfica Wacom Intuos",
    "description": "Tableta gráfica con lápiz sensible a la presión y área de dibujo de 8.5x5.3 pulgadas. Incluye software creativo adicional.",
    "category": "Tabletas",
    "price": 79.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_958164-MLA46881729105_072021-F.webp"
  },
  {
    "id": 48,
    "title": "Laptop Lenovo ThinkPad",
    "description": "Laptop empresarial con pantalla de 15.6 pulgadas, procesador Intel Core i7, 16GB de RAM y SSD de 512GB. Seguridad avanzada.",
    "category": "Notebooks",
    "price": 1499.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_746438-MLA49656807060_042022-F.webp"
  },
  {
    "id": 49,
    "title": "Monitor Dell UltraSharp",
    "description": "Monitor de 27 pulgadas con resolución QHD y tecnología IPS. Colores precisos y ángulos de visión amplios.",
    "category": "Monitores",
    "price": 499.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_738555-MLA48984133517_012022-F.webp"
  },
  {
    "id": 50,
    "title": "Impresora multifunción Brother Business",
    "description": "Impresora multifunción con impresión, escaneo y copiado. Conexión inalámbrica y velocidad de impresión rápida.",
    "category": "Impresoras",
    "price": 129.99,
    "quantity": 0,
    "url": "https://http2.mlstatic.com/D_NQ_NP_2X_626713-MLA45754003303_042021-F.webp"
  }
];