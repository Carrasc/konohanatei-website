export type MenuItem = {
  photo?: string;
  jp: string;
  name: string;
  desc?: string;
  qty?: string;
  note?: string;
  price: number;
  /** Second size or variant of the same dish, e.g. "media porción". */
  alt?: { label: string; price: number };
  tag?: string;
};

export type MenuSection = {
  jp: string;
  latin: string;
  intro: string;
  format: "cards" | "rows";
  items: MenuItem[];
  note?: {
    jp: string;
    title: string;
    body: string;
    price: string;
    priceLabel: string;
  };
};

export const MENU_DATA: Record<string, MenuSection> = {
  botanas: {
    jp: "箸休め",
    latin: "Botanas",
    intro: "Platos chicos para empezar o para acompañar.",
    format: "rows",
    items: [
      {
        photo: "/assets/food/sunomono.webp",
        jp: "酢の物",
        name: "Sunomono",
        desc: "Ensalada de fideos transparentes de arroz con un toque de vinagre.",
        price: 60,
      },
      {
        photo: "/assets/food/shiroae.webp",
        jp: "和え物",
        name: "Aemono",
        desc: "Ejotes con pasta hecha a base de tofu (queso de soya) y ajonjolí.",
        price: 60,
      },
      {
        jp: "冷やっこ",
        name: "Hiyayakko",
        desc: "Tofu (queso de soya) al natural.",
        price: 95,
      },
      {
        photo: "/assets/food/gyoza.webp",
        jp: "ギョウザ",
        name: "Gyoza",
        qty: "8 piezas",
        desc: "Empanaditas asadas muy suaves, rellenas de carne molida de res.",
        price: 180,
      },
      {
        jp: "春巻き",
        name: "Harumaki",
        qty: "3 piezas",
        desc: "Rollo primavera con carne de puerco y verduras.",
        price: 180,
      },
      {
        jp: "鶏ぎもの唐揚げ",
        name: "Torikimo no karaague",
        desc: "Fritos de mollejas.",
        price: 160,
      },
      {
        photo: "/assets/food/korokke.webp",
        jp: "コロッケ",
        name: "Korokke",
        qty: "4 piezas",
        desc: "Croquetas de papa con carne molida de res.",
        price: 160,
      },
      {
        jp: "フライドポテト",
        name: "Papas a la francesa",
        price: 95,
      },
      {
        photo: "/assets/food/ika-ring.webp",
        jp: "イカリング",
        name: "Ika ring",
        desc: "Aros de calamar empanizados.",
        price: 160,
      },
      {
        photo: "/assets/food/okonomiyaki.webp",
        jp: "お好み焼き",
        name: "Okonomiyaki",
        desc: "Carne de puerco, camarón, calamar, col y verduras combinados en una tortilla de harina tipo hotcake.",
        price: 180,
      },
      {
        jp: "いか醤油焼き",
        name: "Ika shoyuyaki",
        desc: "Calamar asado con salsa suavemente dulce de soya.",
        price: 320,
      },
      {
        photo: "/assets/food/agedashi-tofu.webp",
        jp: "揚げ出し豆腐",
        name: "Agedashi tofu",
        desc: "Tofu (queso de soya) frito con caldo dashi (caldo de pescado y alga marina kombu).",
        price: 180,
      },
      {
        jp: "天ぷら盛り合わせ",
        name: "Tempura",
        desc: "Capeado crujiente de verduras y camarón (2).",
        price: 220,
      },
      {
        photo: "/assets/food/kushiague-queso.webp",
        jp: "チーズ串揚げ",
        name: "Kushiague de queso",
        qty: "3 piezas",
        desc: "Brocheta de queso empanizado.",
        price: 150,
      },
      {
        photo: "/assets/food/edamame.webp",
        jp: "枝豆",
        name: "Edamame",
        desc: "Soya fresca cocida al vapor con una pizca de sal.",
        price: 90,
      },
      {
        jp: "ごま枝豆",
        name: "Goma edamame",
        desc: "Soya fresca cocida al vapor con una pizca de sal, ajonjolí y chile.",
        price: 120,
      },
    ],
  },
  teishoku: {
    jp: "一品料理",
    latin: "Plato fuerte",
    intro:
      "Cada guisado se sirve solo, o conviértelo en paquete teishoku con entremés, arroz, sopa, postre y bebida.",
    format: "cards",
    items: [
      {
        photo: "/assets/food/shogayaki.webp",
        jp: "豚のしょうが焼き",
        name: "Shogayaki",
        desc: "Carne de puerco y col con salsa de soya y jengibre.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/ebi-fry.webp",
        jp: "エビフライ",
        name: "Ebi fry",
        desc: "Camarón empanizado.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/hamburger-steak.webp",
        jp: "ハンバーグ",
        name: "Hamburguesa",
        desc: "Jugosa carne molida de res a la plancha.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/yakisakana.webp",
        jp: "鮭の塩焼き",
        name: "Yakisakana",
        desc: "Salmón asado.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/misodori.webp",
        jp: "みそ鶏",
        name: "Misodori",
        desc: "Cortes de muslo de pollo en pasta miso.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/tonkatsu.webp",
        jp: "トンカツ",
        name: "Tonkatsu",
        desc: "Lomo de puerco empanizado.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/karaage.webp",
        jp: "鶏のからあげ",
        name: "Karaague",
        desc: "Cortes de muslo de pollo envueltos en harina y fritos.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/sakana-fry.webp",
        jp: "魚フライ",
        name: "Sakana fry",
        desc: "Filete de pescado empanizado.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/tori-namban.webp",
        jp: "鶏南蛮",
        name: "Tori namban",
        desc: "Cortes de muslo de pollo frito con verduras, marinados en un aderezo de vinagre.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/sanma.webp",
        jp: "さんまの塩焼き",
        name: "Sanma",
        desc: "Pescado asado con un poco de rayadura de nabo.",
        note: "Pregunte existencia.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/torikatsu.webp",
        jp: "鶏カツ",
        name: "Torikatsu",
        desc: "Muslo de pollo empanizado.",
        price: 200,
        tag: "一品",
      },
      {
        photo: "/assets/food/butaoroshi-ponzu.webp",
        jp: "豚おろしポン酢",
        name: "Butaoroshi ponzu",
        desc: "Carne de puerco frito envinagrado con soya, con rayadura de nabo y jengibre.",
        price: 200,
        tag: "一品",
      },
    ],
    note: {
      jp: "定食",
      title: "Paquete completo",
      body: "El plato fuerte que elijas + entremés (sunomono y shiroae), arroz (inari, konohana roll ó gohan), sopa de miso ó medio udon (+$30), postre y café, té o refresco.",
      price: "$ 350.00",
      priceLabel: "Paquete",
    },
  },
  sushi: {
    jp: "すし",
    latin: "Sushi",
    intro: "Arroz, vinagre de arroz y nori (hoja de alga marina salada). Rollos hechos a mano.",
    format: "rows",
    items: [
      {
        photo: "/assets/food/konohana-roll.webp",
        jp: "此の花巻き",
        name: "Konohana roll",
        qty: "10 piezas",
        desc: "Rollo de arroz con pepino, aguacate, masago (hueva de pescado) y queso Filadelfia.",
        price: 150,
        alt: { label: "medio · 5 piezas", price: 85 },
      },
      {
        jp: "太巻き",
        name: "Futomaki",
        qty: "10 piezas",
        desc: "Rollo de arroz con anguila, huevo, pepino, espinacas y kampyo envuelto de nori.",
        price: 170,
      },
      {
        jp: "カリフォルニア巻き",
        name: "California roll",
        qty: "10 piezas",
        desc: "Rollo de arroz con pepino, aguacate, salmón y queso Filadelfia.",
        price: 160,
      },
      {
        jp: "かっぱ巻き",
        name: "Kappamaki",
        qty: "10 piezas",
        desc: "Rollo de arroz con pepino cubierto de nori.",
        price: 110,
      },
      {
        photo: "/assets/food/inari.webp",
        jp: "いなり",
        name: "Inari",
        qty: "3 piezas",
        desc: "Sushi con jengibre envuelto en una capa de tofu (queso de soya) frito.",
        price: 125,
      },
      {
        jp: "あげもち",
        name: "Aguemochi",
        qty: "2 piezas",
        desc: "Mochi frito en caldo a base de pescado.",
        price: 120,
      },
    ],
  },
  curry: {
    jp: "カレー",
    latin: "Curry",
    intro:
      "Arroz con salsa tipo adobo de especias y verduras, cocinado a fuego lento.",
    format: "cards",
    items: [
      {
        jp: "カレー",
        name: "Curry",
        desc: "Arroz con salsa tipo adobo con especias, carne de res y verduras.",
        price: 200,
      },
      {
        jp: "ハンバーグカレー",
        name: "Curry con hamburguesa",
        desc: "Arroz con salsa tipo adobo con carne de res estilo hamburguesa.",
        price: 300,
      },
      {
        jp: "コロッケカレー",
        name: "Curry con korokke",
        desc: "Curry y croqueta de papa con carne molida.",
        price: 250,
      },
      {
        photo: "/assets/food/katsu-curry.webp",
        jp: "カツカレー",
        name: "Curry con tonkatsu",
        desc: "Curry con lomo de puerco empanizado.",
        price: 300,
      },
    ],
    note: {
      jp: "定食",
      title: "Conviértelo en paquete",
      body: "Añade el paquete teishoku a cualquier curry. No incluye sopa de miso ni sushi.",
      price: "+ $70.00",
      priceLabel: "Añadir",
    },
  },
  udon: {
    jp: "汁物・うどん",
    latin: "Sopa y fideos",
    intro:
      "Caldo dashi (de pescado y alga marina kombu) hecho cada mañana, pasta de harina cortada en casa. Los udon se sirven en tamaño normal o media porción.",
    format: "rows",
    items: [
      {
        photo: "/assets/food/mini-udon.webp",
        jp: "うどん",
        name: "Udon sencillo",
        desc: "Pasta de harina en caldo dashi sencillo con alga marina wakame, cebollín y tenkasu (harina frita).",
        price: 200,
        alt: { label: "media porción", price: 120 },
      },
      {
        jp: "カレーうどん",
        name: "Curry udon",
        desc: "Pasta de harina en caldo dashi con curry.",
        price: 240,
        alt: { label: "media porción", price: 130 },
      },
      {
        photo: "/assets/food/niku-udon.webp",
        jp: "肉うどん",
        name: "Niku udon",
        desc: "Pasta de harina en caldo dashi con res.",
        price: 270,
        alt: { label: "media porción", price: 140 },
      },
      {
        photo: "/assets/food/yamakake-udon.webp",
        jp: "山かけうどん",
        name: "Yamakake udon",
        desc: "Pasta de harina en caldo dashi con papa yuca.",
        price: 240,
        alt: { label: "media porción", price: 130 },
      },
      {
        jp: "天ぷらうどん",
        name: "Tempura udon",
        desc: "Pasta de harina en caldo dashi con tempura de camarón y verduras.",
        price: 340,
      },
      {
        photo: "/assets/food/aguemochi-udon.webp",
        jp: "揚げもちうどん",
        name: "Ague mochi udon",
        desc: "Pasta de harina en caldo dashi con mochi (pasta de arroz) frito.",
        price: 270,
        alt: { label: "media porción", price: 140 },
      },
      {
        photo: "/assets/food/chawan-mushi.webp",
        jp: "茶碗蒸し",
        name: "Chawan-mushi",
        desc: "Sopa de huevo tipo flan.",
        price: 140,
      },
      {
        photo: "/assets/food/misoshiru.webp",
        jp: "味噌汁",
        name: "Misoshiru",
        desc: "Sopa de miso (pasta de soya).",
        price: 60,
      },
      {
        photo: "/assets/food/kids-plate.webp",
        jp: "お子様セット",
        name: "Paquete infantil",
        desc: "Karaague, camarón empanizado, hamburguesa y papas a la francesa, con rollo de sushi (2 piezas) ú onigiri (2 piezas), udon chico, postre y jugo de naranja.",
        note: "Se incluye ensalada chica.",
        price: 220,
      },
    ],
  },
  arroz: {
    jp: "ご飯物",
    latin: "Arroz",
    intro: "Donburi y arroces — una sola pieza, bien cuidada.",
    format: "cards",
    items: [
      {
        photo: "/assets/food/gohan.webp",
        jp: "ご飯",
        name: "Gohan",
        desc: "Arroz blanco al vapor.",
        price: 60,
      },
      {
        jp: "おにぎり",
        name: "Onigiri",
        qty: "2 piezas",
        desc: "Triángulos de arroz blanco al vapor con nori (hoja de alga marina salada).",
        price: 100,
      },
      {
        jp: "焼き飯",
        name: "Yakimeshi",
        desc: "Arroz frito con pollo y verduras.",
        price: 130,
        alt: { label: "mixto", price: 155 },
      },
      {
        jp: "親子丼",
        name: "Oyako-don",
        desc: "Guisado de pollo y huevo sobre una cama de arroz blanco al vapor.",
        price: 200,
      },
      {
        jp: "オムライス",
        name: "Omurais",
        desc: "Arroz frito sazonado con catsup, pollo y verduras envuelto con una capa de huevo.",
        price: 220,
      },
      {
        photo: "/assets/food/katsu-don.webp",
        jp: "カツ丼",
        name: "Katsu-don",
        desc: "Lomo de puerco empanizado bañado de huevo sobre una cama de arroz.",
        price: 250,
      },
      {
        photo: "/assets/food/unadon.webp",
        jp: "うな丼",
        name: "Unadon",
        desc: "Anguila en una salsa suavemente dulce sobre una cama de arroz blanco al vapor.",
        note: "Paquete con misoshiru $460 · con medio udon $500",
        price: 350,
        tag: "推",
      },
    ],
    note: {
      jp: "定食",
      title: "Conviértelo en paquete",
      body: "Añade el paquete teishoku a cualquier plato de arroz — con sopa de miso, ó con medio udon por + $150.00.",
      price: "+ $150.00",
      priceLabel: "Con miso",
    },
  },
  postres: {
    jp: "デザート",
    latin: "Postres de casa",
    intro: "Caseros, del día. Pregunte por los sabores.",
    format: "cards",
    items: [
      {
        photo: "/assets/food/pastel-chocolate.webp",
        jp: "チョコレートケーキ",
        name: "Pastel de chocolate",
        price: 80,
      },
      {
        photo: "/assets/food/rollo-matcha.webp",
        jp: "抹茶ロールケーキ",
        name: "Rollo de matcha con crema",
        price: 80,
      },
      {
        photo: "/assets/food/pastel-queso.webp",
        jp: "チーズケーキ",
        name: "Pastel de queso",
        price: 80,
      },
      {
        photo: "/assets/food/tarta-pera.webp",
        jp: "洋梨タルト",
        name: "Tarta de pera",
        price: 80,
      },
      {
        photo: "/assets/food/gelatina-cafe.webp",
        jp: "コーヒーゼリー",
        name: "Gelatina de café con helado",
        price: 80,
      },
      {
        photo: "/assets/food/mikan-jelly.webp",
        jp: "みかんゼリー",
        name: "Gelatina de agar agar con naranja",
        price: 80,
      },
      {
        jp: "アイスクリーム",
        name: "Helado",
        desc: "Vainilla o chocolate.",
        price: 35,
      },
    ],
  },
  bebidas: {
    jp: "お飲物",
    latin: "Bebidas",
    intro: "Para acompañar: bebidas frías, tés calientes y cervezas.",
    format: "rows",
    items: [
      { jp: "お水", name: "Agua embotellada", price: 40 },
      { jp: "生ジュース", name: "Jugo natural", price: 80 },
      {
        jp: "生オレンジジュース／レモネード",
        name: "Naranjada o limonada natural",
        price: 60,
      },
      {
        jp: "カルピス",
        name: "Calpis",
        desc: "Bebida láctea japonesa, ligeramente dulce y ácida.",
        price: 60,
      },
      { jp: "ソフトドリンク", name: "Refresco y agua mineral", price: 50 },
      { jp: "コーヒー", name: "Café", price: 50 },
      { jp: "冷緑茶", name: "Té verde frío", price: 60 },
      {
        jp: "温緑茶",
        name: "Té verde caliente",
        qty: "tetera chica",
        price: 60,
        alt: { label: "tetera grande", price: 90 },
      },
      {
        jp: "コロナビール",
        name: "Cerveza Corona",
        qty: "lata",
        price: 80,
      },
      {
        jp: "サッポロビール",
        name: "Cerveza Sapporo",
        qty: "botella",
        price: 130,
      },
    ],
  },
};

export const MENU_TABS: [string, string, string][] = [
  ["botanas", "箸休め", "Botanas"],
  ["teishoku", "一品料理", "Plato fuerte"],
  ["sushi", "すし", "Sushi"],
  ["curry", "カレー", "Curry"],
  ["udon", "汁物・うどん", "Sopa y fideos"],
  ["arroz", "ご飯物", "Arroz"],
  ["postres", "デザート", "Postres"],
  ["bebidas", "お飲物", "Bebidas"],
];
