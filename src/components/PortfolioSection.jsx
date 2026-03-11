import React from 'react';
import './PortfolioSection.css';

// PortfolioSection — Bento grid with 4 card types, uses real /imgs/main.jpg
const PortfolioSection = () => (
  <section id="portafolio" className="portfolio" aria-labelledby="portfolio-title">
    <div className="portfolio__top">
      <h2 className="portfolio__title" id="portfolio-title">
        Nuestro<br />Trabajo
      </h2>
      <span className="portfolio__magic">Descubre la magia</span>
    </div>

    <div className="portfolio__grid">
      {/* Card 1 — Main hero card with real image */}
      <div className="portfolio__card portfolio__card--main">
        <div className="card-bg" aria-hidden="true"></div>
        <div className="card-overlay" aria-hidden="true"></div>
        <div className="card-arrow" aria-hidden="true">↗</div>
        <div className="card-body">
          <span className="card-tag">MURAL INTERIOR</span>
          <h3 className="card-title">Explosión<br /><span>Floral</span></h3>
          <p className="card-desc">
            Diseño fluido adaptado a espacios corporativos que buscan inspirar creatividad.
          </p>
        </div>
      </div>

      {/* Card 2 — Glassmorphism */}
      <div className="portfolio__card portfolio__card--glass">
        <div className="blob-br" aria-hidden="true"></div>
        <div className="card-tag2">ILUSTRACIÓN DIGITAL</div>
        <h3 className="card-title2">Trazos Libres</h3>
        <p className="card-desc2">Digitalización de conceptos para marcas modernas.</p>
      </div>

      {/* Card 3 — Dark */}
      <div className="portfolio__card portfolio__card--dark">
        <div>
          <span className="card-num">01</span>
        </div>
        <div>
          <h3 className="card-title3">Rotulación</h3>
          <p className="card-sub3">Pizarras y Vidrieras.</p>
        </div>
      </div>

      {/* Card 4 — Yellow */}
      <div className="portfolio__card portfolio__card--yellow">
        <svg className="card-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <h3 className="card-title4">Pintura Custom</h3>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
