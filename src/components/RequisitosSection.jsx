import React from 'react';
import './RequisitosSection.css';

const STARS = [
  { top: '12%', left: '8%',   size: '1.2rem', color: '#F5E02A', delay: '0s'   },
  { top: '10%', left: '14%',  size: '1.8rem', color: '#F5E02A', delay: '0.5s' },
  { top: '18%', right: '6%',  size: '1rem',   color: '#E8197A', delay: '1s'   },
  { top: '55%', right: '5%',  size: '1.4rem', color: '#F5E02A', delay: '0.7s' },
  { bottom: '15%', left: '5%', size: '2rem',  color: '#E8197A', delay: '0.3s' },
  { bottom: '10%', left: '15%',size: '1.2rem', color: '#F5E02A',delay: '1.2s' },
  { bottom: '8%', right: '10%',size: '1rem',  color: '#F5E02A', delay: '0.9s' },
];

// RequisitosSection — matches reference: yellow strip, white body, centered Caveat text, stars
const RequisitosSection = () => (
  <section id="requisitos" className="requisitos" aria-labelledby="req-title">
    {/* Yellow header strip */}
    <div className="requisitos__header-strip">
      <h2 className="requisitos__header-title" id="req-title">Requisitos</h2>
    </div>

    {/* Scattered stars */}
    {STARS.map((s, i) => (
      <i
        key={i}
        className="requisitos__star"
        aria-hidden="true"
        style={{
          top: s.top, left: s.left, right: s.right, bottom: s.bottom,
          fontSize: s.size, color: s.color, animationDelay: s.delay,
        }}
      >★</i>
    ))}

    <div className="requisitos__body">
      <p className="requisitos__intro">
        Para realizar tu mural<br />
        ten en cuenta los siguientes puntos
      </p>

      {/* Vinil / Mixto */}
      <p className="requisitos__sub">
        Si haz optado por mural con vinil pegatinas o mixto:
      </p>
      <ul className="requisitos__list">
        <li className="requisitos__item">Tu pared debe ser 100% lisa, sin granulos, grumos o textura.</li>
        <li className="requisitos__item">Libre de humedad</li>
        <li className="requisitos__item">Libre de polvo</li>
        <li className="requisitos__item">Libre de grasa o suciedad</li>
        <li className="requisitos__item">Y en perfecto estado</li>
      </ul>
      <ul className="requisitos__list">
        <li className="requisitos__item">Pintura base &gt; No debe ser base aceite</li>
        <li className="requisitos__item">No debe ser siliconizada (textura polvoza)</li>
      </ul>

      {/* Mixto / Pintura */}
      <p className="requisitos__sub">
        Si haz optado por mural mixto o con pintura:
      </p>
      <ul className="requisitos__list">
        <li className="requisitos__item">Tu pared debe estar libre de humedad</li>
        <li className="requisitos__item">En perfecto estado</li>
        <li className="requisitos__item">Indicar si está en exteriores</li>
        <li className="requisitos__item">Y no ser la base pintura en aceite (indicar alguna particularidad)</li>
      </ul>

      {/* WhatsApp CTA */}
      <a
        id="requisitos-wa-btn"
        href="https://wa.me/50672799927?text=Hola,%20tengo%20los%20requisitos%20listos"
        target="_blank"
        rel="noreferrer"
        className="requisitos__wa"
        aria-label="Enviar información por WhatsApp al 7279 99 27"
      >
        Envíala al WhatsApp 7279 99 27
      </a>
    </div>
  </section>
);

export default RequisitosSection;
