type DelDiaItem = {
  tag: string;
  img: string;
  jp: string;
  name: string;
  desc: string;
  price: number;
};

const ITEMS: DelDiaItem[] = [
  {
    tag: "一番人気 · N.º 1",
    img: "/assets/food/gyoza.png",
    jp: "ギョウザ",
    name: "Gyoza",
    desc: "Ocho empanaditas asadas muy suaves, rellenas de carne molida de res.",
    price: 180,
  },
  {
    tag: "二番人気 · N.º 2",
    img: "/assets/food/katsu-curry.png",
    jp: "カツカレー",
    name: "Curry con tonkatsu",
    desc: "Curry de la casa con lomo de puerco empanizado.",
    price: 300,
  },
  {
    tag: "三番人気 · N.º 3",
    img: "/assets/food/yakisakana.png",
    jp: "鮭の塩焼き",
    name: "Yakisakana",
    desc: "Salmón asado con un toque de sal.",
    price: 200,
  },
];

export function DelDia() {
  return (
    <section className="kh-deldia">
      <div className="kh-deldia__wave" aria-hidden="true" />
      <div className="kh-deldia__inner">
        <div className="kh-deldia__head">
          <div className="kh-deldia__title">
            <span className="jp">人気のお品書き</span>
            <span className="lt">Los más pedidos</span>
          </div>
          <p className="kh-deldia__note">
            Los platillos que más salen de la cocina — los favoritos de quienes
            nos visitan, día tras día.
          </p>
        </div>
        <div className="kh-deldia__grid">
          {ITEMS.map((it) => (
            <article key={it.name} className="kh-deldia-card">
              <div className="kh-deldia-card__photo">
                <img src={it.img} alt="" />
              </div>
              <div className="kh-deldia-card__body">
                <div className="kh-deldia-card__tag">{it.tag}</div>
                <div className="kh-deldia-card__jp">{it.jp}</div>
                <div className="kh-deldia-card__name">{it.name}</div>
                <div className="kh-deldia-card__desc">{it.desc}</div>
                <div className="kh-deldia-card__foot">
                  <span className="kh-leader" />
                  <span className="kh-deldia-card__price">
                    $ {it.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
