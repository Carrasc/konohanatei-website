import { Fragment } from "react";
import { Button } from "./Primitives";

type RailItem = { img: string; jp: string; lt: string };

const RAIL_ITEMS: RailItem[] = [
  { img: "/assets/food/tonkatsu.png", jp: "トンカツ", lt: "Tonkatsu" },
  { img: "/assets/food/katsu-curry.png", jp: "カツカレー", lt: "Katsu curry" },
  {
    img: "/assets/food/konohana-roll.png",
    jp: "此の花巻き",
    lt: "Konohana roll",
  },
  { img: "/assets/food/niku-udon.png", jp: "肉うどん", lt: "Niku udon" },
  { img: "/assets/food/karaage.png", jp: "鶏のからあげ", lt: "Karaage" },
  {
    img: "/assets/food/agedashi-tofu.png",
    jp: "揚げ出し豆腐",
    lt: "Agedashi tofu",
  },
  { img: "/assets/food/chawan-mushi.png", jp: "茶碗蒸し", lt: "Chawan mushi" },
  { img: "/assets/food/yakisakana.png", jp: "鮭の塩焼き", lt: "Yakisakana" },
];

export function Hero({
  onReserve,
  onViewMenu,
}: {
  onReserve: () => void;
  onViewMenu: () => void;
}) {
  const railLoop = [...RAIL_ITEMS, ...RAIL_ITEMS];
  return (
    <section className="kh-hero" id="top">
      <div className="kh-hero__eyebrow">
        <span className="kh-rule-shoyu" />
        <span className="kh-eyebrow">
          Plaza Pedregal · Jardines del Pedregal · CDMX
        </span>
      </div>
      <div className="kh-hero__grid">
        <div className="kh-hero__left">
          <h1 className="kh-hero__jp">此の花亭</h1>
          <h2 className="kh-hero__latin">
            <em>Comida japonesa,</em>
            <br />
            hecha en casa.
          </h2>
          <p className="kh-hero__lead">
            Un pequeño café-restaurante familiar que sirve <em>donburi</em>,{" "}
            <em>udon</em>,<em> curry</em>, tonkatsu, sushi y teishoku caseros —
            como los haría una madre en Tokio, a precios de todos los días.
          </p>
          <div className="kh-hero__meta">
            <div className="kh-hero__meta-block">
              <span className="k">Horario</span>
              <span className="v">Mar–Dom · 1 – 9 p.m.</span>
            </div>
            <div className="kh-hero__meta-block">
              <span className="k">月曜</span>
              <span className="v jp">定休 · Cerrado lunes</span>
            </div>
            <div className="kh-hero__meta-block">
              <span className="k">Reservas</span>
              <span className="v">Tel. 5603 5404</span>
            </div>
          </div>
          <div className="kh-hero__cta">
            <Button variant="primary" size="lg" onClick={onReserve}>
              Reservar una mesa
            </Button>
            <Button variant="ghost" size="lg" onClick={onViewMenu}>
              Ver el menú
            </Button>
          </div>
        </div>

        <div className="kh-hero__right">
          <img
            src="/assets/hanko.svg"
            alt=""
            className="kh-hero__seal"
          />
          <div className="kh-hero__ticket">定食 · teishoku</div>
          <div className="kh-hero__photo">
            <img
              src="/assets/food/unadon.png"
              alt="Unadon — anguila sobre arroz al vapor"
            />
          </div>
          <div className="kh-hero__caption">
            <span className="kh-hero__cap-jp">うな丼</span>
            <span className="kh-hero__cap-latin">Unadon</span>
            <span className="kh-hero__cap-desc">
              Anguila en salsa suavemente dulce de soya sobre arroz blanco al
              vapor.
            </span>
          </div>
        </div>
      </div>

      <div className="kh-hero__rail" aria-hidden="true">
        <div className="kh-hero__rail-track">
          {railLoop.map((it, i) => (
            <Fragment key={i}>
              <div className="kh-hero__rail-item">
                <img src={it.img} alt="" />
                <div>
                  <div className="jp">{it.jp}</div>
                  <div className="lt">{it.lt}</div>
                </div>
              </div>
              <span className="kh-hero__rail-sep" />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
