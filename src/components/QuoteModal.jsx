import React from 'react';
import './QuoteModal.css';

// QuoteModal — glassmorphic, dark header with blobs, accessible form
const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onClose} aria-hidden="true"></div>

      <div className="modal">
        {/* Animated Background Blobs */}
        <div className="modal__blobs" aria-hidden="true">
          <div className="modal__blob modal__blob--1"></div>
          <div className="modal__blob modal__blob--2"></div>
          <div className="modal__blob modal__blob--3"></div>
          <div className="modal__blob modal__blob--4"></div>
        </div>

        {/* Content wrapper with glassmorphism */}
        <div className="modal__content-wrapper">
          {/* Header */}
          <div className="modal__head">
            {/* Animated Logo */}
            <div className="modal__logo-wrapper">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/texastrailerscrweb.firebasestorage.app/o/logokalovasolo.png?alt=media&token=e6e25d72-3797-4cf4-b1aa-936e1957011f" 
                alt="Kalova" 
                className="modal__animated-logo" 
              />
            </div>
            <div className="modal__head-inner">
              <div>
                <h2 className="modal__title" id="modal-title">
                  Tu Visión.<br /><span>Nuestro Lienzo.</span>
                </h2>
                <p className="modal__subtitle">Detalla tu idea a continuación.</p>
              </div>
              <button
                id="modal-close-btn"
                className="modal__close"
                onClick={onClose}
                aria-label="Cerrar formulario"
              >
                ×
              </button>
            </div>
          </div>

        {/* Form */}
        <form
          className="modal__body"
          onSubmit={e => { e.preventDefault(); onClose(); }}
          noValidate
        >
          <div className="modal__grid">
            <div className="modal__field">
              <label className="modal__label" htmlFor="name">Tu Nombre</label>
              <input
                id="name"
                type="text"
                className="modal__input"
                placeholder="Ej. Camila Quirós"
                autoComplete="name"
              />
            </div>
            <div className="modal__field">
              <label className="modal__label" htmlFor="ubicacion">Ubicación</label>
              <select id="ubicacion" className="modal__select" defaultValue="">
                <option value="" disabled>Selecciona Provincia</option>
                <option value="san-jose">San José</option>
                <option value="alajuela">Alajuela</option>
                <option value="cartago">Cartago</option>
                <option value="heredia">Heredia</option>
                <option value="guanacaste">Guanacaste</option>
                <option value="puntarenas">Puntarenas</option>
                <option value="limon">Limón</option>
              </select>
            </div>
            <div className="modal__field modal__field--full">
              <label className="modal__label" htmlFor="idea">La Idea (Concepto y Dimensiones)</label>
              <textarea
                id="idea"
                className="modal__textarea"
                rows={4}
                placeholder="Describe la textura del muro, medidas aprox, y qué colores imaginas..."
              ></textarea>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="modal__foot">
          <button id="modal-cancel-btn" className="modal__cancel" onClick={onClose}>
            Cancelar
          </button>
          <button id="modal-submit-btn" className="modal__submit" type="submit">
            Enviar Solicitud
          </button>
        </div>
        </div> {/* End of .modal__content-wrapper */}
      </div>
    </div>
  );
};

export default QuoteModal;
