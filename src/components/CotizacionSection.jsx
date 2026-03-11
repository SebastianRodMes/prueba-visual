import React from 'react';
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

// CotizacionSection — matches reference: yellow header, white body, centered steps, stars
const CotizacionSection = ({ onFormClick }) => (
  <section id="cotizacion" className="cotizacion" aria-labelledby="cot-title">
    {/* Yellow header strip */}
    <div className="cotizacion__header-strip">
      <h2 className="cotizacion__header-title" id="cot-title">Cotización</h2>
    </div>

    {/* Scattered stars */}
    {STARS.map((s, i) => (
      <i
        key={i}
        className="cotizacion__star"
        aria-hidden="true"
        style={{
          top: s.top, left: s.left, right: s.right, bottom: s.bottom,
          fontSize: s.size, color: s.color, animationDelay: s.delay,
        }}
      >★</i>
    ))}

    <div className="cotizacion__body">
      <p className="cotizacion__intro">
        Para realizar tu cotización<br />
        necesitamos la siguiente información:
      </p>

      <div className="cotizacion__steps">
        {STEPS.map((s, i) => (
          <div className="cotizacion__step" key={i}>
            <p className="cotizacion__step-name">{s.name}</p>
            {s.desc && <p className="cotizacion__step-desc">{s.desc}</p>}
            {s.hasStar && <i className="cotizacion__star-divider" aria-hidden="true">★</i>}
          </div>
        ))}
      </div>

      {/* WhatsApp CTA — matches reference */}
      <a
        id="cotizacion-wa-btn"
        href="https://wa.me/50672799927?text=Hola,%20quiero%20cotizar%20un%20mural"
        target="_blank"
        rel="noreferrer"
        className="cotizacion__wa"
        aria-label="Enviar información por WhatsApp al 7279 99 27"
      >
        <span className="cotizacion__wa-row">
          Envíala al WhatsApp 7279 99 27
        </span>
      </a>
    </div>
  </section>
);

export default CotizacionSection;
