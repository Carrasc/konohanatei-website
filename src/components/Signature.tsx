type SigItem = {
  num: string;
  img: string;
  jp: string;
  name: string;
  qty: string;
  price: number;
};

const ITEMS: SigItem[] = [
  {
    num: "01",
    img: "/assets/food/tonkatsu.png",
    jp: "トンカツ",
    name: "Tonkatsu",
    qty: "teishoku",
    price: 150,
  },
  {
    num: "02",
    img: "/assets/food/katsu-curry.png",
    jp: "カツカレー",
    name: "Katsu curry",
    qty: "con arroz",
    price: 180,
  },
  {
    num: "03",
    img: "/assets/food/niku-udon.png",
    jp: "肉うどん",
    name: "Niku udon",
    qty: "caldo dashi",
    price: 150,
  },
  {
    num: "04",
    img: "/assets/food/konohana-roll.png",
    jp: "此の花巻き",
    name: "Konohana roll",
    qty: "10 piezas",
    price: 100,
  },
  {
    num: "05",
    img: "/assets/food/karaage.png",
    jp: "からあげ",
    name: "Karaage",
    qty: "teishoku",
    price: 150,
  },
];

export function Signature() {
  return (
    <section className="kh-signature">
      <div className="kh-signature__grid">
        <div className="kh-signature__intro">
          <h3>看板料理</h3>
          <span className="latin">Los que más piden</span>
          <p>
            Los cinco platos que salen de la cocina todos los días — desde el
            primer servicio de la tarde hasta la última orden.
          </p>
          <div className="kh-date">
            martes · 21 abril · temporada de primavera
          </div>
        </div>
        <div className="kh-signature__rail">
          {ITEMS.map((it) => (
            <article key={it.num} className="kh-sig-card">
              <div className="kh-sig-card__photo">
                <img src={it.img} alt="" />
                <span className="kh-sig-card__num">{it.num}</span>
              </div>
              <div className="kh-sig-card__jp">{it.jp}</div>
              <div className="kh-sig-card__name">{it.name}</div>
              <div className="kh-sig-card__foot">
                <span>{it.qty}</span>
                <span className="kh-leader" />
                <span className="kh-sig-card__price">
                  $ {it.price.toFixed(2)}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
