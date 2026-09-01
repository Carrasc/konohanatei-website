type Meal = {
  img: string;
  jp: string;
  name: string;
  desc: string;
  price: number;
  featured?: boolean;
};
type Filling = { name: string; img: string };

const SANDOS: Meal[] = [
  {
    img: "/assets/food/breakfast/tamago-sando.webp",
    jp: "卵サンド",
    name: "Tamago sando",
    desc: "Huevo duro y mayonesa japonesa, acompañado de ensalada fresca.",
    price: 109,
  },
  {
    img: "/assets/food/breakfast/torikatsu-sando.webp",
    jp: "鶏かつサンド",
    name: "Torikatsu sando",
    desc: "Filete de pollo empanizado con verdura fresca.",
    price: 119,
  },
  {
    img: "/assets/food/breakfast/katsu-sando.webp",
    jp: "かつサンド",
    name: "Katsu sando",
    desc: "Filete de puerco empanizado con verdura fresca.",
    price: 119,
  },
  {
    img: "/assets/food/breakfast/tsuna-sando.webp",
    jp: "ツナサンド",
    name: "Tsuna sando",
    desc: "Atún con mayonesa y verdura fresca.",
    price: 109,
  },
];

const TEISHOKU: Meal[] = [
  {
    img: "/assets/food/breakfast/yakisakana-teishoku.webp",
    jp: "焼き魚定食",
    name: "Yakisakana teishoku",
    desc: "Salmón asado, arroz al vapor, sopa de miso y un kobachi.",
    price: 199,
  },
  {
    img: "/assets/food/breakfast/tonkatsu-teishoku.webp",
    jp: "とんかつ定食",
    name: "Tonkatsu teishoku",
    desc: "Lomo de puerco empanizado, arroz, sopa de miso y acompañamiento.",
    price: 209,
  },
  {
    img: "/assets/food/breakfast/torikatsu-teishoku.webp",
    jp: "鶏かつ定食",
    name: "Torikatsu teishoku",
    desc: "Muslo de pollo empanizado, arroz, sopa de miso y acompañamiento.",
    price: 209,
  },
];

const ONIGIRI_FILLINGS: Filling[] = [
  { name: "Salmón", img: "/assets/food/breakfast/onigiri-salmon.webp" },
  { name: "Umeboshi", img: "/assets/food/breakfast/onigiri-umeboshi.webp" },
  { name: "Queso Filadelfia", img: "/assets/food/breakfast/onigiri-queso.webp" },
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
              src="/assets/food/breakfast/onigiri.webp"
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

    </section>
  );
}
