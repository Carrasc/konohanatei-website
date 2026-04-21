export function About() {
  return (
    <section className="kh-about" id="about">
      <div className="kh-about__grid">
        <div className="kh-about__photo kh-about__photo--a">
          <img src="/assets/food/chawan-mushi.png" alt="" />
        </div>
        <div className="kh-about__text">
          <span className="kh-eyebrow">
            Desde 2004 · Jardines del Pedregal
          </span>
          <h2>
            Una cocina pequeña,
            <br />
            familiar, sin prisas.
          </h2>
          <p>
            Konohanatei es un café-restaurante de comida japonesa casera. Hacemos la comida que
            comeríamos en casa: <em>dashi</em> que se cuela con calma, croquetas
            hechas a mano, un curry que lleva horas en la olla, un tazón de udon
            para un día frío.
          </p>
          <p>
            Nuestros precios son de todos los días porque creemos que la comida
            japonesa de cocina casera no tiene que ser un lujo. Pasa, come con
            calma — <em>gochisousama</em>.
          </p>
          <div className="kh-about__jp">
            家庭の味を、そのまま。
            <br />
            家族で営む、小さな日本食堂です。
          </div>
          <img
            src="/assets/hanko-sumi.svg"
            alt=""
            className="kh-about__seal"
          />
        </div>
        <div className="kh-about__photo kh-about__photo--b">
          <img src="/assets/food/misoshiru.png" alt="" />
        </div>
      </div>
    </section>
  );
}
