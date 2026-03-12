import React from 'react';
import './Footer.css';

// Instagram SVG
const IconIG = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
  </svg>
);

// WhatsApp SVG
const IconWA = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.528 5.837L.055 23.516a.5.5 0 00.599.641l5.906-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.673-.524-5.19-1.432l-.373-.22-3.867.957.984-3.769-.242-.385A9.966 9.966 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

// Email SVG
const IconEmail = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// Footer — dark bg, gradient top border, brand/nav/contact columns
const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="footer__inner">
      {/* Brand column */}
      <div className="footer__brand">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/texastrailerscrweb.firebasestorage.app/o/logokalovasolo.png?alt=media&token=e6e25d72-3797-4cf4-b1aa-936e1957011f" 
          alt="Kalova Logo" 
          className="footer__brand-img" 
        />
        <p className="footer__brand-script">Arte que transforma</p>
        <div className="footer__socials">
          <a
            href="https://instagram.com/muralesydiseno_by_kalova"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
            aria-label="Instagram de Kalova"
          >
            <IconIG />
          </a>
          <a
            href="https://wa.me/50600000000"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
            aria-label="WhatsApp de Kalova"
          >
            <IconWA />
          </a>
        </div>
      </div>

      {/* Navigation column */}
      <div>
        <h3 className="footer__col-title">Navegación</h3>
        <ul className="footer__nav">
          <li><a href="#inicio"     className="footer__nav-link">Inicio</a></li>
          <li><a href="#murales"    className="footer__nav-link">Nuestro trabajo</a></li>
          <li><a href="#tipos"      className="footer__nav-link">Tipos de murales</a></li>
          <li><a href="#cotizacion" className="footer__nav-link">Cómo cotizar</a></li>
          <li><a href="#requisitos" className="footer__nav-link">Requisitos</a></li>
        </ul>
      </div>

      {/* Contact column */}
      <div>
        <h3 className="footer__col-title">Contacto</h3>
        <p className="footer__contact-item">
          <IconWA />
          <a href="https://wa.me/50600000000" target="_blank" rel="noreferrer">+506 0000-0000</a>
        </p>
        <p className="footer__contact-item">
          <IconIG />
          <a href="https://instagram.com/muralesydiseno_by_kalova" target="_blank" rel="noreferrer">@muralesydiseno_by_kalova</a>
        </p>
        <p className="footer__contact-item">
          <IconEmail />
          <a href="mailto:info@kalova.cr">info@kalova.cr</a>
        </p>
      </div>
    </div>

    <div className="footer__bottom">
      <p className="footer__copy">
        © {new Date().getFullYear()} <span>Murales y Diseño by Kalova</span>. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
