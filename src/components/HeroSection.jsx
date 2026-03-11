import React from 'react';
import './HeroSection.css';

// Stars config — matching reference images (yellow & magenta ★ scattered)
const STARS = [
  { top: '12%',  left: '40%',  size: '1.4rem', color: '#F5E02A',  delay: '0s'   },
  { top: '8%',   left: '48%',  size: '2rem',   color: '#F5E02A',  delay: '0.6s' },
  { top: '18%',  left: '55%',  size: '1rem',   color: '#E8197A',  delay: '1.2s' },
  { top: '30%',  right: '8%',  size: '1.5rem', color: '#F5E02A',  delay: '0.4s' },
  { top: '55%',  left: '42%',  size: '1.2rem', color: '#E8197A',  delay: '1.8s' },
  { bottom: '22%', left: '35%', size: '1.8rem', color: '#F5E02A', delay: '0.9s' },
  { bottom: '10%', left: '18%', size: '1.3rem', color: '#E8197A', delay: '0.2s' },
  { bottom: '15%', right: '30%', size: '1rem',  color: '#F5E02A', delay: '1.4s' },
];

// HeroSection — reference style: solid blobs + "MURALES Y DISEÑO / by KALOVA"
const HeroSection = ({ onCotizarClick }) => (
  <section id="inicio" className="hero" aria-label="Hero principal">

    {/* Solid morphing blobs — magenta, teal, orange, yellow */}
    <div className="hero__blob hero__blob--magenta" aria-hidden="true"></div>
    <div className="hero__blob hero__blob--teal"    aria-hidden="true"></div>
    <div className="hero__blob hero__blob--orange"  aria-hidden="true"></div>
    <div className="hero__blob hero__blob--yellow"  aria-hidden="true"></div>
    <div className="hero__blob hero__blob--teal2"   aria-hidden="true"></div>

    {/* Scattered ★ stars (yellow & magenta) */}
    {STARS.map((s, i) => (
      <i
        key={i}
        className="hero__star"
        aria-hidden="true"
        style={{
          top: s.top,
          left: s.left,
          right: s.right,
          bottom: s.bottom,
          fontSize: s.size,
          color: s.color,
          animationDelay: s.delay,
        }}
      >★</i>
    ))}

    {/* Brand identity — left-aligned (matches reference) */}
    <div className="hero__content">
      {/* Line 1: MURALES Y DISEÑO in teal Caveat */}
      <h1 className="hero__line1">Murales y Diseño</h1>

      {/* Line 2: "by" script + KALOVA magenta with heart ♥ */}
      <div className="hero__line2" aria-label="by Kalova">
        <span className="hero__by">by</span>
        <span className="hero__brand">
          KAL
          <span className="hero__heart" aria-hidden="true">
            {/* Heart SVG replacing the "O" */}
            <svg width="0.6em" height="0.6em" viewBox="0 0 24 24" fill="var(--color-orange)" stroke="var(--color-orange)" strokeWidth="0.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </span>
          VA
        </span>
      </div>

      {/* Contact info */}
      <div className="hero__contact">
        <a
          href="tel:+50672799927"
          className="hero__contact-row"
          aria-label="Teléfono 7279-99-27"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          TEL 7279-99-27
        </a>
        <a
          href="https://instagram.com/muralesydiseno_by_kalova"
          target="_blank"
          rel="noreferrer"
          className="hero__contact-row"
          aria-label="Instagram muralesydiseno_by_kalova"
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
          muralesydiseno_by_kalova
        </a>
      </div>

      {/* CTAs */}
      <div className="hero__ctas">
        <button
          id="hero-cotizar-btn"
          className="hero__btn hero__btn--primary"
          onClick={onCotizarClick}
        >
          Cotiza tu mural
        </button>
        <a href="#portafolio" className="hero__btn hero__btn--secondary">
          Ver proyectos
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
