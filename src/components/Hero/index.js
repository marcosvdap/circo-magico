import { Link } from 'react-router-dom';
import bgHero from '../../assets/bg-hero.jpg';
import logoVertice from '../../assets/logo-vertice.png';
import './index.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${bgHero})` }} />

      <div className="hero__curtain hero__curtain--left" />
      <div className="hero__curtain hero__curtain--right" />

      <div className="hero__lights">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="hero__light" style={{ '--i': i }} />
        ))}
      </div>

      <div className="hero__content">
        <img
          src={logoVertice}
          alt="Vértice"
          className="hero__logo-img"
        />

        <div className="hero__divider">
          <span />
          <span className="hero__divider-star">★</span>
          <span />
        </div>

        <p className="hero__tagline">
          CIRCO &nbsp;—&nbsp; PERFORMANCES &nbsp;—&nbsp; EVENTOS
        </p>

        <div className="hero__actions">
          <Link to="/espetaculos" className="hero__btn hero__btn--primary">
            Ver Espetáculos
          </Link>
          <Link to="/contato" className="hero__btn hero__btn--outline">
            Contato
          </Link>
        </div>
      </div>

      <div className="hero__rope hero__rope--left" />
      <div className="hero__rope hero__rope--right" />
      <div className="hero__scroll-hint">
        <span />
        <p>Role para explorar</p>
      </div>
    </section>
  );
}
