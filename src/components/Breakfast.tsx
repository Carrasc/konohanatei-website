type Meal = {
  img: string;
  jp: string;
  name: string;
  desc: string;
  price: number;
  featured?: boolean;
};
type LineItem = { name: string; price: number; note?: string };
type Filling = { name: string; img: string };

const SANDOS: Meal[] = [
  {
    img: "/assets/food/breakfast/tamago-sando.jpg",
    jp: "卵サンド",
    name: "Tamago sando",
    desc: "Huevo duro y mayonesa japonesa, acompañado de ensalada fresca.",
    price: 109,
  },
  {
    img: "/assets/food/breakfast/torikatsu-sando.jpg",
    jp: "鶏かつサンド",
    name: "Torikatsu sando",
    desc: "Filete de pollo empanizado con verdura fresca.",
    price: 119,
  },
  {
    img: "/assets/food/breakfast/katsu-sando.jpg",
    jp: "かつサンド",
    name: "Katsu sando",
    desc: "Filete de puerco empanizado con verdura fresca.",
    price: 119,
  },
  {
    img: "/assets/food/breakfast/tsuna-sando.jpg",
    jp: "ツナサンド",
    name: "Tsuna sando",
    desc: "Atún con mayonesa y verdura fresca.",
    price: 109,
  },
];

const TEISHOKU: Meal[] = [
  {
    img: "/assets/food/breakfast/yakisakana-teishoku.jpg",
    jp: "焼き魚定食",
    name: "Yakisakana teishoku",
    desc: "Salmón asado, arroz al vapor, sopa de miso y un kobachi.",
    price: 199,
  },
  {
    img: "/assets/food/breakfast/tonkatsu-teishoku.jpg",
    jp: "とんかつ定食",
    name: "Tonkatsu teishoku",
    desc: "Lomo de puerco empanizado, arroz, sopa de miso y acompañamiento.",
    price: 209,
  },
  {
    img: "/assets/food/breakfast/torikatsu-teishoku.jpg",
    jp: "鶏かつ定食",
    name: "Torikatsu teishoku",
    desc: "Muslo de pollo empanizado, arroz, sopa de miso y acompañamiento.",
    price: 209,
  },
];

const ONIGIRI_FILLINGS: Filling[] = [
  { name: "Salmón", img: "/assets/food/breakfast/onigiri-salmon.jpg" },
  { name: "Umeboshi", img: "/assets/food/breakfast/onigiri-umeboshi.jpg" },
  { name: "Queso Filadelfia", img: "/assets/food/breakfast/onigiri-queso.jpg" },
];

const BEBIDAS: LineItem[] = [
  { name: "Expresso", price: 50 },
  { name: "Americano", price: 50 },
  { name: "Latte", price: 60 },
  { name: "Capuchino", price: 60 },
  { name: "Té de bolsita", price: 50 },
  { name: "Té verde en tetera chica", price: 60 },
  { name: "Té verde frío", price: 50 },
  { name: "Proteína Whey", price: 80, note: "Matcha +20" },
  { name: "Jugo de naranja", price: 60 },
  { name: "Jugo de toronja", price: 60 },
  { name: "Jugo verde", price: 55 },
  { name: "Calpis", price: 55 },
  { name: "Refresco", price: 45 },
  { name: "Agua natural o mineral", price: 40 },
];

const POSTRES: LineItem[] = [
  { name: "Tarta de pera", price: 70 },
  { name: "Gelatina de café con helado", price: 70 },
  { name: "Pastel de queso", price: 70 },
  { name: "Chiffon cake", price: 55 },
];

function MealCard({ img, jp, name, desc, price, featured }: Meal) {
  return (
    <article className={`kh-meal${featured ? " kh-meal--featured" : ""}`}>
      {featured && <div className="kh-meal__tag">ふわっふわ</div>}
      <div className="kh-meal__photo">
        <img src={img} alt="" loading="lazy" />
      </div>
      <div className="kh-meal__body">
        <div className="kh-meal__jp">{jp}</div>
        <h4 className="kh-meal__name">{name}</h4>
        <p className="kh-meal__desc">{desc}</p>
        <div className="kh-meal__foot">
          <span className="kh-leader" />
          <span className="kh-meal__price">$ {price.toFixed(2)}</span>
        </div>
      </div>
    </article>
  );
}

export function Breakfast() {
  return (
    <section className="kh-breakfast" id="desayunos">
      <header className="kh-breakfast__head">
        <div className="kh-breakfast__eyebrow">朝ごはん · Café</div>
        <h2 className="kh-breakfast__title">
          <em>También</em> tenemos desayunos
        </h2>
        <div className="kh-breakfast__jp">ふわっふわ</div>
        <div className="kh-breakfast__hours">
          <span className="kh-breakfast__hours-kanji">営業</span>
          <span className="kh-breakfast__hours-time">9:00 – 12:30</span>
        </div>
        <p className="kh-breakfast__lead">
          Un desayuno sencillo y cuidado para empezar bien el día — sándwiches
          de pan esponjoso, teishoku tradicionales y café con postres caseros.
        </p>
      </header>

      <div className="kh-breakfast__section">
        <h3 className="kh-breakfast__sub">
          <span className="jp">サンドイッチ</span>
          <span className="latin">Sándwiches</span>
        </h3>
        <div className="kh-breakfast__grid kh-breakfast__grid--4">
          {SANDOS.map((s) => (
            <MealCard key={s.name} {...s} />
          ))}
        </div>
      </div>

      <div className="kh-breakfast__section">
        <h3 className="kh-breakfast__sub">
          <span className="jp">定食</span>
          <span className="latin">Teishoku</span>
        </h3>
        <div className="kh-teishoku-note kh-teishoku-note--plain">
          <div className="kh-teishoku-note__seal">
            <img src="/assets/hanko.svg" alt="" />
          </div>
          <div className="kh-teishoku-note__body">
            <h4>定食 · Qué incluye</h4>
            <p>
              Arroz al vapor, sopa de miso, un kobachi (pequeño acompañamiento)
              y el platillo con la proteína principal.
            </p>
          </div>
        </div>
        <div className="kh-breakfast__grid kh-breakfast__grid--3">
          {TEISHOKU.map((t) => (
            <MealCard key={t.name} {...t} />
          ))}
        </div>
      </div>

      <div className="kh-breakfast__section kh-breakfast__onigiri-wrap">
        <h3 className="kh-breakfast__sub">
          <span className="jp">おにぎり</span>
          <span className="latin">Onigiri</span>
        </h3>
        <div className="kh-onigiri">
          <div className="kh-onigiri__photo">
            <img
              src="/assets/food/breakfast/onigiri.jpg"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="kh-onigiri__body">
            <div className="kh-onigiri__title">
              <span className="jp">2 piezas</span>
              <span className="kh-onigiri__price">$ 95.00</span>
            </div>
            <p className="kh-onigiri__desc">
              Triángulos de arroz blanco al vapor, envueltos en nori, con
              relleno a elegir.
            </p>
            <div className="kh-onigiri__fillings">
              <span className="kh-onigiri__label">Rellenos</span>
              {ONIGIRI_FILLINGS.map((f) => (
                <span key={f.name} className="kh-onigiri__filling">
                  <img src={f.img} alt="" loading="lazy" />
                  {f.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="kh-breakfast__lists">
        <div className="kh-breakfast__list">
          <h3 className="kh-breakfast__sub">
            <span className="jp">お飲み物</span>
            <span className="latin">Bebidas</span>
          </h3>
          <ul className="kh-price-list">
            {BEBIDAS.map((b) => (
              <li key={b.name} className="kh-price-list__item">
                <span className="kh-price-list__name">
                  {b.name}
                  {b.note && (
                    <span className="kh-price-list__note"> · {b.note}</span>
                  )}
                </span>
                <span className="kh-leader" />
                <span className="kh-price-list__price">
                  $ {b.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="kh-breakfast__list">
          <h3 className="kh-breakfast__sub">
            <span className="jp">お菓子</span>
            <span className="latin">Postres</span>
          </h3>
          <ul className="kh-price-list">
            {POSTRES.map((p) => (
              <li key={p.name} className="kh-price-list__item">
                <span className="kh-price-list__name">{p.name}</span>
                <span className="kh-leader" />
                <span className="kh-price-list__price">
                  $ {p.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
