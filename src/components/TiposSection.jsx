import React from 'react';
import './TiposSection.css';

// Icon for each type card header
const IconFilm = () => (
  <svg className="tipo-card__head-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
  </svg>
);
const IconLayers = () => (
  <svg className="tipo-card__head-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);
const IconPaint = () => (
  <svg className="tipo-card__head-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const TIPOS = [
  {
    id: 'vinil',
    img: '/imgs/mural1.png',
    Icon: IconFilm,
    name: 'Vinil',
    desc: 'Gráficos adhesivos de alta resolución para interiores y exteriores. Durabilidad garantizada y colores vibrantes que no destiñen.',
    features: ['Fácil limpieza', 'Resistente a la humedad', 'Personalización total'],
  },
  {
    id: 'mixto',
    img: '/imgs/mural2.png',
    Icon: IconLayers,
    name: 'Mixtos',
    desc: 'La combinación perfecta de vinil y pintura artística. Texturas únicas que fusionan técnicas para un resultado extraordinario.',
    features: ['Texturas tridimensionales', 'Efectos únicos', 'Durabilidad premium'],
  },
  {
    id: 'pintura',
    img: '/imgs/mural3.png',
    Icon: IconPaint,
    name: 'Pintura',
    desc: 'Arte mural pintado a mano por artistas calificados. Desde murales fotorrealistas hasta estilos abstractos y decorativos.',
    features: ['Arte original', 'Pintado a mano', 'Estilos variados'],
  },
];

// TiposSection — 3 cards: Vinil (orange), Mixtos (magenta), Pintura (teal)
const TiposSection = () => (
  <section id="tipos" className="tipos" aria-labelledby="tipos-title">
    <div className="tipos__header">
      <h2 className="tipos__title" id="tipos-title">Tipos de Murales</h2>
    </div>

    <div className="tipos__grid">
      {TIPOS.map(({ id, Icon, name, desc, features, img }) => (
        <article className={`tipo-card tipo-card--${id}`} key={id}>
          <div className="tipo-card__head">
            <Icon />
            <h3 className="tipo-card__head-name">{name}</h3>
          </div>
          <img
            src={img}
            alt={`Ejemplo de mural tipo ${name}`}
            className="tipo-card__img"
          />
          <div className="tipo-card__body">
            <p className="tipo-card__desc">{desc}</p>
            <ul className="tipo-card__features">
              {features.map(f => (
                <li className="tipo-card__feature" key={f}>
                  <span className="tipo-card__feature-dot"></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default TiposSection;
