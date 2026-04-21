import { Icon } from "./Primitives";

export function Footer() {
  return (
    <footer className="kh-footer">
      <div className="kh-footer__inner">
        <div className="kh-footer__brand">
          <div className="kh-footer__brand-mark">
            <img src="/assets/hanko.svg" alt="" />
            <span className="w">
              <span className="jp">此の花亭</span>
              <span className="lt">Konohanatei</span>
            </span>
          </div>
          <p>
            Café y restaurante japonés en Jardines del Pedregal. Cocina casera,
            servicio sin prisas, precios de todos los días.
          </p>
          <div className="kh-footer__social">
            <a href="#" aria-label="Instagram">
              <Icon name="instagram" size={16} />
            </a>
            <a href="#" aria-label="Facebook">
              <Icon name="facebook" size={16} />
            </a>
            <a href="mailto:hola@konohanatei.mx" aria-label="Email">
              <Icon name="mail" size={16} />
            </a>
          </div>
        </div>

        <div className="kh-footer__col">
          <h4>Dirección</h4>
          <p>
            Anillo Periférico No. 4268
            <br />
            Col. Jardines del Pedregal
            <br />
            Coyoacán, CDMX
            <br />
            Plaza Pedregal · Planta Alta
          </p>
        </div>

        <div className="kh-footer__col">
          <h4>Horario</h4>
          <p>
            Martes – Domingo
            <br />
            1:00 p.m. – 9:00 p.m.
            <br />
            Última orden 7:30 p.m.
            <br />
            <em>月曜定休</em> · Lunes cerrado
          </p>
        </div>

        <div className="kh-footer__col">
          <h4>Contacto</h4>
          <a href="tel:5556035404">Tel. 5603 5404</a>
          <a href="mailto:hola@konohanatei.mx">hola@konohanatei.mx</a>
          <p
            style={{
              marginTop: 12,
              fontSize: 12,
              color: "var(--kh-ink-mute)",
            }}
          >
            Reservaciones para grupos de 5 o más, por favor el día anterior.
          </p>
        </div>
      </div>

      <div className="kh-footer__end">
        <span>
          © 2025 Konohanatei · Café &amp; Restaurante Japonés · Desde 2004
        </span>
        <span className="kh-footer__end-jp">
          此の花亭 · 家庭の味を、そのまま。
        </span>
      </div>
    </footer>
  );
}
