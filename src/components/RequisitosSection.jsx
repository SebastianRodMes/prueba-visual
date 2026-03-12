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

// RequisitosSection — Advanced Glassmorphism UI
const RequisitosSection = () => (
  <section id="requisitos" className="requisitos" aria-labelledby="req-title">
    {/* Header flotante transparente */}
    <div className="requisitos__header">
      <h2 className="requisitos__header-title" id="req-title">Requisitos Mínimos</h2>
      <p className="requisitos__intro">
        Para asegurar un acabado premium, tu espacio debe cumplir con:
      </p>
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
      <div className="requisitos__cards-grid">
        
        {/* Card 1: Vinil / Mixto */}
        <article className="req-card req-card--vinil">
          <div className="req-card__head">
            <h3 className="req-card__title">Si tu mural es de<br/><span>Vinil o Mixto</span></h3>
          </div>
          <div className="req-card__content">
            <ul className="req-card__list">
              <li>Tu pared debe ser <strong>100% lisa</strong>, sin granulos ni textura.</li>
              <li>Debe estar completamente <strong>libre de humedad</strong>.</li>
              <li>Superficie limpia: libre de <strong>polvo, grasa y suciedad</strong>.</li>
              <li>Pintura base <strong>no debe ser de aceite</strong>.</li>
              <li>La base <strong>no debe ser siliconizada</strong> (textura polvoza).</li>
              <li>La estructura general debe estar <strong>en perfecto estado</strong>.</li>
            </ul>
          </div>
        </article>

        {/* Card 2: Pintura / Mixto */}
        <article className="req-card req-card--pintura">
          <div className="req-card__head">
            <h3 className="req-card__title">Si tu mural es de<br/><span>Pintura o Mixto</span></h3>
          </div>
          <div className="req-card__content">
            <ul className="req-card__list">
              <li>Superficie e interior 100% <strong>libre de humedad</strong>.</li>
              <li>Estructura de la pared <strong>en perfecto estado</strong> mecánico.</li>
              <li>Deberás <strong>indicar si está en exteriores</strong> (para prever selladores).</li>
              <li>La base <strong>no debe ser pintura en aceite</strong> (indicar particularidades de la pintura actual).</li>
            </ul>
          </div>
        </article>

      </div>

      {/* WhatsApp CTA */}
      <div className="requisitos__cta-wrapper">
        <a
          id="requisitos-wa-btn"
          href="https://wa.me/50672799927?text=Hola,%20mi%20pared%20cumple%20con%20los%20requisitos%20y%20quiero%20crear%20magia%20juntos"
          target="_blank"
          rel="noreferrer"
          className="requisitos__wa-btn"
          aria-label="Confirmar requisitos por WhatsApp al +506 7279 9927"
        >
          ¡Mi pared cumple con todo!
        </a>
      </div>
    </div>
  </section>
);

export default RequisitosSection;
