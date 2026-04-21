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
    tag: "本日のランチ · Comida del día",
    img: "/assets/food/shogayaki.png",
    jp: "生姜焼き",
    name: "Shogayaki",
    desc: "Lomo de puerco en salsa de jengibre y soya, con arroz y miso.",
    price: 165,
  },
  {
    tag: "季節限定 · De temporada",
    img: "/assets/food/sanma.png",
    jp: "秋刀魚",
    name: "Sanma asado",
    desc: "Pescado de otoño a la parrilla con rábano rallado. Pregunte existencia.",
    price: 180,
  },
  {
    tag: "家のおすすめ · De la casa",
    img: "/assets/food/okonomiyaki.png",
    jp: "お好み焼き",
    name: "Okonomiyaki",
    desc: "Tortita de col con carne de puerco, bonito y salsa okonomi.",
    price: 145,
  },
];

export function DelDia() {
  return (
    <section className="kh-deldia">
      <div className="kh-deldia__wave" aria-hidden="true" />
      <div className="kh-deldia__inner">
        <div className="kh-deldia__head">
          <div className="kh-deldia__title">
            <span className="jp">今日のお品書き</span>
            <span className="lt">Hoy en la carta</span>
          </div>
          <p className="kh-deldia__note">
            Los teishoku y postres del día cambian con la estación y la mano del
            mercado — pregunte existencia al llegar.
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
