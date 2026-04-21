import { Icon } from "./Primitives";

export function Visit() {
  return (
    <section className="kh-visit" id="visit">
      <div className="kh-visit__inner">
        <header className="kh-sec">
          <div className="kh-sec__eyebrow">Planea tu visita</div>
          <div className="kh-sec__row">
            <span className="kh-sec__jp">ご来店</span>
            <span className="kh-sec__latin">Visitar</span>
            <span className="kh-sec__rule" />
          </div>
        </header>

        <div className="kh-visit__grid">
          <div className="kh-visit__map-side">
            <div className="kh-visit__map-paper">
              <div className="kh-visit__map-grid" />
              <div className="kh-visit__map-blocks" />
              <div className="kh-visit__map-roads" />
              <div className="kh-visit__map-compass">
                <svg viewBox="0 0 52 52">
                  <circle
                    cx="26"
                    cy="26"
                    r="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M26 10 L28 26 L26 42 L24 26 Z"
                    fill="currentColor"
                  />
                </svg>
                <span style={{ position: "absolute", top: 4 }}>北</span>
              </div>
              <div className="kh-visit__map-pin">
                <span className="kh-visit__map-pin-dot" />
                <span className="kh-visit__map-pin-label">
                  此の花亭 · Konohanatei
                </span>
              </div>
            </div>
            <div className="kh-visit__map-legend">
              <div className="kh-visit__map-legend-addr">
                <strong>Plaza Pedregal · Planta Alta</strong>
                <br />
                Anillo Periférico 4268, Jardines del Pedregal
              </div>
              <a href="#" className="kh-visit__map-link">
                Cómo llegar <Icon name="arrow-right" size={12} />
              </a>
            </div>
          </div>

          <div className="kh-visit__info">
            <div className="kh-visit__card">
              <div className="kh-visit__card-label">
                <span className="kh-rule-shoyu" /> Horario · 営業時間
              </div>
              <dl className="kh-visit__hours">
                <div className="kh-visit__hours-row">
                  <dt>
                    Martes – Domingo
                    <small>火曜 – 日曜</small>
                  </dt>
                  <dd>1:00 – 9:00 p.m.</dd>
                </div>
                <div className="kh-visit__hours-row">
                  <dt>
                    Última orden
                    <small>ラストオーダー</small>
                  </dt>
                  <dd>7:30 p.m.</dd>
                </div>
                <div className="kh-visit__hours-row kh-visit__hours-row--off">
                  <dt>
                    Lunes
                    <small>月曜</small>
                  </dt>
                  <dd>定休日</dd>
                </div>
              </dl>
            </div>

            <div className="kh-visit__card">
              <div className="kh-visit__card-label">
                <span className="kh-rule-shoyu" /> Reservas · ご予約
              </div>
              <a href="tel:5556035404" className="kh-visit__phone">
                5603 5404
              </a>
              <p className="kh-visit__note">
                Para grupos de 5 o más, por favor llámenos el día anterior. Los
                teishoku y postres del día cambian con la estación — pregunte
                existencia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
