export type MenuItem = {
  photo?: string;
  jp: string;
  name: string;
  desc?: string;
  qty?: string;
  note?: string;
  price: number;
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
  teishoku: {
    jp: "定食",
    latin: "Teishoku",
    intro:
      "Un paquete completo: entremés, sopa o udon chico, arroz blanco, el guisado que elijas y postre de la casa.",
    format: "cards",
    items: [
      {
        photo: "/assets/food/hamburger-steak.png",
        jp: "ハンバーグ",
        name: "Hamburguesa japonesa",
        desc: "Jugosa carne molida de res a la plancha en salsa demi-glace de la casa.",
        price: 150,
        tag: "定食",
      },
      {
        photo: "/assets/food/tonkatsu.png",
        jp: "トンカツ",
        name: "Tonkatsu",
        desc: "Lomo de puerco empanizado con panko, capeado crujiente.",
        price: 150,
        tag: "定食",
      },
      {
        photo: "/assets/food/karaage.png",
        jp: "鶏のからあげ",
        name: "Karaage",
        desc: "Cortes de muslo de pollo envueltos en harina y fritos al momento.",
        price: 150,
        tag: "定食",
      },
      {
        photo: "/assets/food/yakisakana.png",
        jp: "鮭の塩焼き",
        name: "Yakisakana",
        desc: "Salmón asado con un toque de sal.",
        price: 150,
        tag: "定食",
      },
      {
        photo: "/assets/food/shogayaki.png",
        jp: "生姜焼き",
        name: "Shogayaki",
        desc: "Lomo de puerco en salsa de jengibre y soya, asadas muy suaves.",
        price: 165,
        tag: "定食",
      },
      {
        photo: "/assets/food/tori-namban.png",
        jp: "チキン南蛮",
        name: "Tori namban",
        desc: "Pollo frito con salsa dulce-ácida y mayonesa de huevo cocido.",
        price: 160,
        tag: "定食",
      },
    ],
    note: {
      jp: "定食パッケージ",
      title: "Convierte cualquier plato en teishoku",
      body: "Añade sopa de miso o udon chico, arroz, entremés del día y postre.",
      price: "+$ 70.00",
      priceLabel: "Añadir",
    },
  },
  sushi: {
    jp: "すし",
    latin: "Sushi",
    intro: "Arroz, vinagre de arroz y nori. Rollos hechos a mano, por la tarde.",
    format: "rows",
    items: [
      {
        jp: "此の花巻き",
        name: "Konohana roll",
        qty: "10 piezas",
        desc: "Rollo de arroz con pepino, aguacate, masago (hueva de pescado) y queso Filadelfia.",
        price: 100,
      },
      {
        jp: "カリフォルニア巻き",
        name: "California roll",
        qty: "10 piezas",
        desc: "Rollo de arroz con pepino, aguacate, salmón y queso Filadelfia.",
        price: 135,
      },
      {
        jp: "かっぱ巻き",
        name: "Kappamaki",
        qty: "10 piezas",
        desc: "Rollo de arroz con pepino cubierto de nori (alga marina salada).",
        price: 80,
      },
      {
        jp: "太巻き",
        name: "Futomaki",
        qty: "10 piezas",
        desc: "Rollo de arroz con anguila, huevo, pepino, espinacas y kampyo envuelto de nori.",
        price: 150,
      },
      {
        jp: "いなり",
        name: "Inari",
        qty: "3 piezas",
        desc: "Sushi con jengibre envuelto en una capa de tofu frito.",
        price: 50,
      },
      {
        jp: "サーモン刺身",
        name: "Sashimi de salmón",
        qty: "6 piezas",
        desc: "Láminas delgadas de salmón fresco, servidas con wasabi y salsa de soya.",
        price: 150,
      },
      {
        jp: "まぐろ手巻き",
        name: "Temaki de atún",
        qty: "1 pieza",
        desc: "Cono de nori relleno de atún, pepino y arroz.",
        price: 65,
      },
    ],
  },
  curry: {
    jp: "カレー",
    latin: "Curry",
    intro:
      "Arroz con salsa tipo adobo de especias y verduras, cocinado a fuego lento. Añade +$70 para paquete teishoku.",
    format: "cards",
    items: [
      {
        photo: "/assets/food/katsu-curry.png",
        jp: "カツカレー",
        name: "Curry con tonkatsu",
        desc: "Curry de la casa con lomo de puerco empanizado.",
        price: 180,
      },
      {
        photo: "/assets/food/korokke.png",
        jp: "コロッケカレー",
        name: "Curry con korokke",
        desc: "Curry y croqueta de papa con carne molida.",
        price: 200,
      },
      {
        photo: "/assets/food/hamburger-steak.png",
        jp: "ハンバーグカレー",
        name: "Curry con hamburguesa",
        desc: "Arroz con salsa tipo adobo con carne de res estilo hamburguesa.",
        price: 200,
      },
    ],
  },
  udon: {
    jp: "うどん",
    latin: "Sopa y fideos",
    intro:
      "Caldo dashi (de pescado y alga marina kombu) hecho cada mañana, pasta de harina cortada en casa.",
    format: "rows",
    items: [
      {
        jp: "うどん",
        name: "Udon sencillo",
        desc: "Pasta de harina en caldo dashi con wakame, cebollín y tenkasu (migajas de tempura).",
        price: 100,
      },
      {
        jp: "カレーうどん",
        name: "Curry udon",
        desc: "Pasta de harina en caldo dashi con curry suave.",
        price: 120,
      },
      {
        jp: "肉うどん",
        name: "Niku udon",
        desc: "Pasta de harina en caldo dashi con res guisada en soya dulce.",
        price: 150,
      },
      {
        jp: "山かけうどん",
        name: "Yamakake udon",
        desc: "Pasta de harina en caldo dashi con papa yuca (yama-imo) rallada.",
        price: 185,
      },
      {
        jp: "天ぷらうどん",
        name: "Tempura udon",
        desc: "Pasta de harina en caldo dashi con tempura de camarón y verduras.",
        price: 200,
      },
      {
        jp: "揚げもちうどん",
        name: "Ague mochi udon",
        desc: "Pasta de harina en caldo dashi con mochi (pasta de arroz) frito.",
        price: 250,
      },
    ],
  },
  arroz: {
    jp: "ご飯物",
    latin: "Donburi",
    intro: "Donburi — una sola pieza de arroz, bien cuidada.",
    format: "cards",
    items: [
      {
        photo: "/assets/food/katsu-don.png",
        jp: "カツ丼",
        name: "Katsu-don",
        desc: "Lomo de puerco empanizado bañado de huevo sobre una cama de arroz al vapor.",
        price: 120,
      },
      {
        photo: "/assets/food/unadon.png",
        jp: "うな丼",
        name: "Unadon",
        desc: "Anguila en una salsa suavemente dulce de soya sobre arroz blanco.",
        price: 250,
        tag: "推",
      },
      {
        photo: "/assets/food/gohan.png",
        jp: "オムライス",
        name: "Omurais",
        desc: "Arroz frito con catsup, pollo y verduras envuelto con una capa de huevo.",
        price: 120,
      },
    ],
  },
  botanas: {
    jp: "箸休め",
    latin: "Botanas",
    intro: "Platos chicos para empezar o para acompañar.",
    format: "rows",
    items: [
      {
        jp: "揚げ出し豆腐",
        name: "Agedashi tofu",
        desc: "Tofu (queso de soya) frito con caldo \"dashi\" (caldo de pescado y alga marina \"kombu\").",
        price: 70,
      },
      {
        jp: "えびフライ",
        name: "Ebi fry",
        qty: "4 piezas",
        desc: "Camarón empanizado con panko y frito.",
        price: 120,
      },
      {
        jp: "餃子",
        name: "Gyoza",
        qty: "6 piezas",
        desc: "Empanaditas de puerco y verduras, a la plancha y al vapor.",
        price: 90,
      },
      {
        jp: "春巻き",
        name: "Harumaki",
        qty: "4 piezas",
        desc: "Rollo primavera con carne de puerco y verduras.",
        price: 85,
      },
      {
        jp: "いかリング",
        name: "Ika ring",
        desc: "Anillos de calamar empanizado.",
        price: 95,
      },
      {
        jp: "白和え",
        name: "Shiroae",
        desc: "Verduras asadas muy suaves mezcladas con pasta de tofu y sésamo.",
        price: 65,
      },
      {
        jp: "豚おろしポン酢",
        name: "Buta oroshi ponzu",
        desc: "Puerco a la plancha con rábano rallado y un toque de vinagre ponzu.",
        price: 130,
      },
      {
        jp: "酢の物",
        name: "Sunomono",
        desc: "Pepino y wakame en vinagre suave de arroz.",
        price: 55,
      },
    ],
  },
  postres: {
    jp: "デザート",
    latin: "Postres de casa",
    intro: "Caseros, del día. Pregunte por los sabores.",
    format: "rows",
    items: [
      { jp: "チョコレートケーキ", name: "Pastel de chocolate", price: 65 },
      { jp: "チーズケーキ", name: "Pastel de queso", price: 60 },
      { jp: "洋梨タルト", name: "Tarta de pera", price: 60 },
      { jp: "コーヒーゼリー", name: "Gelatina de café con helado", price: 60 },
      {
        jp: "アイスクリーム",
        name: "Helado",
        desc: "Vainilla o chocolate.",
        price: 55,
      },
      {
        jp: "みかんゼリー",
        name: "Gelatina de mikan",
        desc: "Agar-agar con naranja.",
        price: 35,
      },
      { jp: "抹茶ロールケーキ", name: "Rollo de matcha con crema", price: 55 },
    ],
  },
};

export const MENU_TABS: [string, string, string][] = [
  ["teishoku", "定食", "Teishoku"],
  ["sushi", "すし", "Sushi"],
  ["curry", "カレー", "Curry"],
  ["udon", "うどん", "Udon"],
  ["arroz", "ご飯物", "Donburi"],
  ["botanas", "箸休め", "Botanas"],
  ["postres", "デザート", "Postres"],
];
