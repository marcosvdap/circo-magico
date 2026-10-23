import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './index.css';

export default function Header() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [dropOpen,    setDropOpen]    = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* fecha dropdown ao clicar fora */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* fecha tudo ao trocar de rota */
  useEffect(() => { setMenuOpen(false); setDropOpen(false); }, [location]);

  const espetaculosActive =
    location.pathname === '/espetaculos' || location.pathname === '/numeros';

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <NavLink to="/" className="header__logo">
        <span className="header__logo-symbol">✦</span>
        <span className="header__logo-text">Vértice</span>
        <span className="header__logo-symbol">✦</span>
      </NavLink>

      <button
        className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>

        <NavLink
          to="/"
          end
          className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
        >
          Home
        </NavLink>

        {/* Dropdown Espetáculos */}
        <div
          className={`header__drop-wrap ${espetaculosActive ? 'header__drop-wrap--active' : ''}`}
          ref={dropRef}
        >
          <button
            className={`header__link header__link--drop ${dropOpen ? 'header__link--drop-open' : ''} ${espetaculosActive ? 'header__link--active' : ''}`}
            onClick={() => setDropOpen(!dropOpen)}
          >
            Espetáculos
            <svg className="header__caret" viewBox="0 0 10 6" fill="none">
              <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          <div className={`header__dropdown ${dropOpen ? 'header__dropdown--open' : ''}`}>
            <NavLink
              to="/espetaculos"
              className={({ isActive }) =>
                `header__drop-item ${isActive ? 'header__drop-item--active' : ''}`
              }
            >
              <span className="header__drop-icon">✦</span>
              <div>
                <p className="header__drop-label">Espetáculos Completos</p>
                <p className="header__drop-desc">Shows e produções de grande porte</p>
              </div>
            </NavLink>
            <NavLink
              to="/numeros"
              className={({ isActive }) =>
                `header__drop-item ${isActive ? 'header__drop-item--active' : ''}`
              }
            >
              <span className="header__drop-icon">★</span>
              <div>
                <p className="header__drop-label">Números</p>
                <p className="header__drop-desc">Acrobacia, mágica, fogo e mais</p>
              </div>
            </NavLink>
          </div>
        </div>

        <NavLink
          to="/servicos"
          className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
        >
          Serviços
        </NavLink>

        <NavLink
          to="/quem-somos"
          className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
        >
          Quem Somos
        </NavLink>

        <NavLink
          to="/contato"
          className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
        >
          Contato
        </NavLink>

      </nav>
    </header>
  );
}
