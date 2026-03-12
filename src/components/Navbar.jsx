import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
            <li><NavLink to="/"           className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>Murales</NavLink></li>
            <li><NavLink to="/tipos"      className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>Tipos</NavLink></li>
            <li><NavLink to="/cotizacion" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>Cotización</NavLink></li>
            <li><NavLink to="/requisitos" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>Requisitos</NavLink></li>
            <li><NavLink to="/portafolio" className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}>Proyectos</NavLink></li>
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
        <NavLink to="/"           className="navbar__mobile-link" onClick={close}>Murales</NavLink>
        <NavLink to="/tipos"      className="navbar__mobile-link" onClick={close}>Tipos</NavLink>
        <NavLink to="/cotizacion" className="navbar__mobile-link" onClick={close}>Cotización</NavLink>
        <NavLink to="/requisitos" className="navbar__mobile-link" onClick={close}>Requisitos</NavLink>
        <NavLink to="/portafolio" className="navbar__mobile-link" onClick={close}>Proyectos</NavLink>
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
