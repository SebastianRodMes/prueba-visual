import React from 'react';
import './BenefitsSection.css';

// SVG icon components for benefit cards (no emoji as content icons)
const IconBrush = () => (
  <svg className="benefit-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);
const IconStar = () => (
  <svg className="benefit-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);
const IconMap = () => (
  <svg className="benefit-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconHeart = () => (
  <svg className="benefit-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const BENEFITS = [
  {
    Icon: IconBrush,
    name: 'Diseño a medida',
    desc: 'Cada proyecto parte de tu visión. Adaptamos estilo, colores y concepto a tu espacio único.',
  },
  {
    Icon: IconStar,
    name: 'Materiales premium',
    desc: 'Utilizamos vinilos de alta durabilidad, pinturas acrílicas y productos resistentes a la intemperie.',
  },
  {
    Icon: IconMap,
    name: 'Cobertura nacional',
    desc: 'Trabajamos en todas las provincias de Costa Rica. ¡Llegamos hasta donde estás!',
  },
  {
    Icon: IconHeart,
    name: 'Arte con propósito',
    desc: 'Transformamos paredes en experiencias visuales que inspiran, conectan y emocionan.',
  },
];

// BenefitsSection — yellow banner header, orange badge, 4-card benefit grid
const BenefitsSection = () => (
  <section id="murales" className="benefits" aria-labelledby="benefits-title">
    {/* Yellow banner header strip */}
    <div className="benefits__header">
      <span className="benefits__badge">¿Por qué elegirnos?</span>
      <h2 className="benefits__title" id="benefits-title">Nuestros Beneficios</h2>
    </div>

    <div className="benefits__grid">
      {BENEFITS.map(({ Icon, name, desc }) => (
        <article className="benefit-card" key={name}>
          <Icon />
          <h3 className="benefit-card__name">{name}</h3>
          <p className="benefit-card__desc">{desc}</p>
        </article>
      ))}
    </div>
  </section>
);

export default BenefitsSection;
