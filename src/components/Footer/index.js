import { NavLink } from 'react-router-dom';
import './index.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__logo">✦ Vértice ✦</p>
          <p className="footer__tagline">
            "O espetáculo nunca para"
          </p>
        </div>

        <nav className="footer__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/espetaculos">Espetáculos</NavLink>
          <NavLink to="/numeros">Números</NavLink>
          <NavLink to="/servicos">Serviços</NavLink>
          <NavLink to="/quem-somos">Quem Somos</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>

        <div className="footer__contact">
          <p>contato@granespetaculo.com.br</p>
          <p>+55 (62) 9 9999-9999</p>
          <p>Goiânia — GO, Brasil</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__divider">
          <span /><span className="footer__star">★</span><span />
        </div>
        <p>© {new Date().getFullYear()} Vértice — Circo, Performances & Eventos. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
