import { Fragment } from "react";
import { Button } from "./Primitives";

type RailItem = { img: string; jp: string; lt: string };

const RAIL_ITEMS: readonly RailItem[] = [
  { img: "/assets/food/tonkatsu.png", jp: "トンカツ", lt: "Tonkatsu" },
  { img: "/assets/food/katsu-curry.png", jp: "カツカレー", lt: "Katsu curry" },
  { img: "/assets/food/konohana-roll.png", jp: "此の花巻き", lt: "Konohana roll" },
  { img: "/assets/food/niku-udon.png", jp: "肉うどん", lt: "Niku udon" },
  { img: "/assets/food/karaage.png", jp: "鶏のからあげ", lt: "Karaage" },
  { img: "/assets/food/agedashi-tofu.png", jp: "揚げ出し豆腐", lt: "Agedashi tofu" },
  { img: "/assets/food/chawan-mushi.png", jp: "茶碗蒸し", lt: "Chawan mushi" },
  { img: "/assets/food/yakisakana.png", jp: "鮭の塩焼き", lt: "Yakisakana" },
] as const;

type HeroProps = {
  onReserve: () => void;
  onViewMenu: () => void;
};

export function Hero({ onReserve, onViewMenu }: HeroProps) {
  return (
    <section className="kh-hero" id="top">
      <div className="kh-hero__inner">
        <div className="kh-hero__content">
          <h1 className="kh-hero__jp">此の花亭</h1>
          <p className="kh-hero__latin">
            <em>Comida japonesa,</em>
            <br />
            hecha en casa.
          </p>
          <p className="kh-hero__lead">
            Un pequeño café-restaurante familiar que sirve <em>donburi</em>,{" "}
            <em>udon</em>, <em>curry</em>, tonkatsu, sushi y teishoku caseros —
            como los haría una madre en Tokio, a precios de todos los días.
          </p>

          <dl className="kh-hero__meta">
            <div className="kh-hero__meta-block">
              <dt className="k">Horario</dt>
              <dd className="v">Mar–Dom · 1 – 9 p.m.</dd>
            </div>
          </dl>

          <div className="kh-hero__cta">
            <Button variant="primary" size="lg" onClick={onReserve}>
              Reservar una mesa
            </Button>
            <Button variant="ghost" size="lg" onClick={onViewMenu}>
              Ver el menú
            </Button>
          </div>
        </div>

        <figure className="kh-hero__figure">
          <img
            src="/assets/hanko.svg"
            alt=""
            className="kh-hero__seal"
            aria-hidden="true"
          />
          <div className="kh-hero__photo">
            <img
              src="/assets/food/unadon.png"
              alt="Unadon — anguila sobre arroz al vapor"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <figcaption className="kh-hero__caption">
            <span className="kh-hero__cap-jp">うな丼</span>
            <span className="kh-hero__cap-latin">Unadon</span>
            <span className="kh-hero__cap-desc">
              Anguila en salsa suavemente dulce de soya sobre arroz blanco al
              vapor.
            </span>
          </figcaption>
        </figure>
      </div>
      <HeroRail />
    </section>
  );
}

function HeroRail() {
  return (
    <div className="kh-hero__rail" aria-hidden="true">
      <div className="kh-hero__rail-track">
        {[...RAIL_ITEMS, ...RAIL_ITEMS].map((item, i) => (
          <Fragment key={`${item.jp}-${i}`}>
            <div className="kh-hero__rail-item">
              <img src={item.img} alt="" loading="lazy" decoding="async" />
              <div>
                <div className="jp">{item.jp}</div>
                <div className="lt">{item.lt}</div>
              </div>
            </div>
            <span className="kh-hero__rail-sep" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
