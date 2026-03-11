import React, { useState } from 'react';
import './Navbar.css';

// Navbar — always yellow, Caveat font, teal uppercase links (matches reference image)
const Navbar = ({ onCotizarClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar" role="banner">
        <nav className="navbar__inner" aria-label="Navegación principal">

          {/* Desktop links — centered layout as in reference */}
          <ul className="navbar__links">
            <li><a href="#murales"    className="navbar__link">Murales</a></li>
            <li><a href="#tipos"      className="navbar__link">Tipos</a></li>
            <li><a href="#cotizacion" className="navbar__link">Cotización</a></li>
            <li><a href="#requisitos" className="navbar__link">Requisitos</a></li>
            <li><a href="#portafolio" className="navbar__link">Proyectos</a></li>
          </ul>

          {/* Hamburger icon (right side, teal bars as in reference) */}
          <button
            id="nav-burger-btn"
            className="navbar__burger-wrap"
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <div className={`navbar__burger-icon ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

        </nav>
      </header>

      {/* Mobile overlay */}
      <div className={`navbar__mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <a href="#murales"    className="navbar__mobile-link" onClick={close}>Murales</a>
        <a href="#tipos"      className="navbar__mobile-link" onClick={close}>Tipos</a>
        <a href="#cotizacion" className="navbar__mobile-link" onClick={close}>Cotización</a>
        <a href="#requisitos" className="navbar__mobile-link" onClick={close}>Requisitos</a>
        <a href="#portafolio" className="navbar__mobile-link" onClick={close}>Proyectos</a>
        <button
          className="navbar__mobile-cta"
          onClick={() => { onCotizarClick(); close(); }}
        >
          Cotizar Ahora
        </button>
      </div>
    </>
  );
};

export default Navbar;
