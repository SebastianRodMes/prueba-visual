import React from 'react';
import './PortfolioSection.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Explosión Floral',
    tag: 'Mural de Interior',
    desc: 'Diseño fluido con paletas cálidas, adaptado a espacios corporativos que buscan inspirar creatividad y energía diaria.',
    img: '/imgs/mural1.png',
  },
  {
    id: 2,
    title: 'Trazo Urbano',
    tag: 'Ilustración Digital',
    desc: 'Digitalización de conceptos para marcas modernas que necesitan conectar con un público joven y dinámico.',
    img: '/imgs/mural2.png',
  },
  {
    id: 3,
    title: 'Rotulación Custom',
    tag: 'Vidrieras y Pizarras',
    desc: 'Tipografía hecha a mano con precisión milimétrica, ideal para destacar promociones en cafeterías y restaurantes.',
    img: '/imgs/mural3.png',
  },
  {
    id: 4,
    title: 'Geometría Natural',
    tag: 'Mural de Exterior',
    desc: 'Intervención de gran escala en fachada combinando formas geométricas abstractas con vegetación circundante.',
    img: '/imgs/mural4.png',
  }
];

// PortfolioSection — Immersive Vertical Gallery
const PortfolioSection = ({ onFormClick }) => (
  <section id="portafolio" className="portfolio" aria-labelledby="portfolio-title">
    <div className="portfolio__top">
      <div>
        <h2 className="portfolio__title" id="portfolio-title">
          Nuestro Trabajo
        </h2>
        <span className="portfolio__subtitle">Obras que transforman espacios</span>
      </div>
    </div>

    <div className="portfolio__gallery">
      {PROJECTS.map((p, index) => (
        <article className={`portfolio-item ${index % 2 !== 0 ? 'portfolio-item--reversed' : ''}`} key={p.id}>
          <div className="portfolio-item__img-wrapper">
            <img src={p.img} alt={`Proyecto: ${p.title}`} className="portfolio-item__img" />
            <div className="portfolio-item__overlay"></div>
          </div>
          
          <div className="portfolio-item__content">
            <span className="portfolio-item__tag">{p.tag}</span>
            <h3 className="portfolio-item__name">{p.title}</h3>
            <p className="portfolio-item__desc">{p.desc}</p>
            
            <button className="portfolio-item__btn" onClick={onFormClick}>
              Cotizar una idea similar <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default PortfolioSection;
