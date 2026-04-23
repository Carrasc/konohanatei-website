import { Button, Icon } from "./Primitives";

export function Header({ onReserve }: { onReserve: () => void }) {
  return (
    <header className="kh-header">
      <div className="kh-header__inner">
        <a className="kh-header__brand" href="#top">
          <img src="/assets/hanko.svg" alt="" className="kh-header__mark" />
          <span className="kh-header__word">
            <span className="kh-header__jp">此の花亭</span>
            <span className="kh-header__latin">Konohanatei</span>
          </span>
        </a>
        <nav className="kh-header__nav">
          <a href="#about">Nosotros</a>
          <a href="#menu">Menú</a>
          <a href="#desayunos">Desayunos</a>
          <a href="#visit">Visitar</a>
        </nav>
        <div className="kh-header__cta">
          <a href="tel:5556035404" className="kh-header__phone">
            <Icon name="phone" size={14} /> 5603 5404
          </a>
          <Button variant="primary" size="sm" onClick={onReserve}>
            Reservar
          </Button>
        </div>
      </div>
    </header>
  );
}
