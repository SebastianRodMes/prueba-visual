import React, { useState } from 'react';
import './CotizacionSection.css';

// Stars for cotizacion (matching reference image positions)
const STARS = [
  { top: '12%', left: '8%',   size: '1.2rem', color: '#F5E02A', delay: '0s'   },
  { top: '10%', left: '14%',  size: '1.8rem', color: '#F5E02A', delay: '0.5s' },
  { top: '20%', right: '6%',  size: '1rem',   color: '#E8197A', delay: '1s'   },
  { top: '50%', right: '5%',  size: '1.3rem', color: '#F5E02A', delay: '0.7s' },
  { bottom: '15%', left: '5%', size: '2rem',  color: '#E8197A', delay: '0.3s' },
  { bottom: '10%', left: '14%',size: '1.2rem', color: '#F5E02A', delay: '1.2s'},
  { bottom: '8%', right: '12%', size: '1rem', color: '#F5E02A', delay: '0.9s' },
];

// Real content from the reference image
const STEPS = [
  {
    name: '1. Ubicación:',
    desc: 'Provincia / Cantón / Distrito',
    hasStar: false,
  },
  {
    name: '2. Dimensiones de pared:',
    desc: 'Ancho Total X Alto Total (si tiene 2 alturas, ambas la más baja y la más alta)',
    hasStar: false,
  },
  {
    name: '3. Acabado de pared',
    desc: 'Material de pared, tipo de acabado y color',
    hasStar: false,
  },
  {
    name: '4. Fotos del espacio o video corto',
    desc: 'Sobre todo de la pared a tratar o del espacio general para considerar detalles',
    hasStar: true,
  },
  {
    name: '5. Referencias',
    desc: 'Ideas, paleta de color o referencias que se deseen realizar.',
    hasStar: false,
  },
  {
    name: '6. Mes de instalación a convenirte',
    desc: '',
    hasStar: false,
  },
];

// CotizacionSection — Interactive vertical layout
const CotizacionSection = ({ onFormClick }) => {
  return (
    <section id="cotizacion" className="cotizacion" aria-labelledby="cot-title">
      <div className="cotizacion__header">
        <h2 className="cotizacion__header-title" id="cot-title">Para realizar tu cotización...</h2>
        <p className="cotizacion__intro">Asegúrate de tener a mano la siguiente información:</p>
      </div>

      <div className="cotizacion__steps-grid">
        {STEPS.map((s, i) => (
          <div className="cotizacion__step-card" key={i}>
            <div className="cotizacion__step-indicator">{i + 1}</div>
            <div className="cotizacion__step-content">
              <h3 className="cotizacion__step-name">{s.name.replace(/^\d+\.\s*/, '')}</h3>
              {s.desc && <p className="cotizacion__step-desc">{s.desc}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="cotizacion__cta-wrapper visible">
        <h3 className="cotizacion__cta-title">¿Tienes toda la información lista?</h3>
        <button 
          className="cotizacion__cta-btn" 
          onClick={onFormClick}
        >
          ¡Deseo Cotizar Ya!
        </button>
      </div>
    </section>
  );
};

export default CotizacionSection;
