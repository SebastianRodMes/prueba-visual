import React, { useState } from 'react';
import Navbar            from './components/Navbar';
import HeroSection       from './components/HeroSection';
import BenefitsSection   from './components/BenefitsSection';
import PortfolioSection  from './components/PortfolioSection';
import TiposSection      from './components/TiposSection';
import CotizacionSection from './components/CotizacionSection';
import RequisitosSection from './components/RequisitosSection';
import Footer            from './components/Footer';
import WhatsAppFloat     from './components/WhatsAppFloat';
import QuoteModal        from './components/QuoteModal';

// Root page — composes all Kalova sections in the required order per kalova-ux-ui skill:
// Navbar → Hero → Benefits → Portfolio → Tipos → Cotización → Requisitos → Footer → WhatsAppFloat
export const KalovaLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal  = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* 1. Sticky navbar */}
      <Navbar onCotizarClick={openModal} />

      <main>
        {/* 2. Hero — blobs, title, CTAs, Instagram card */}
        <HeroSection onCotizarClick={openModal} />

        {/* 3. Benefits — yellow header, 4-card grid */}
        <BenefitsSection />

        {/* 4. Portfolio — Bento grid with real images */}
        <PortfolioSection />

        {/* 5. Tipos — Vinil (orange), Mixtos (magenta), Pintura (teal) */}
        <TiposSection />

        {/* 6. Cotización — yellow bg, 6 steps, WhatsApp + form CTAs */}
        <CotizacionSection onFormClick={openModal} />

        {/* 7. Requisitos — tabbed Vinil/Mixto vs Pintura */}
        <RequisitosSection />
      </main>

      {/* 8. Footer — dark bg, gradient top border */}
      <Footer />

      {/* 9. WhatsApp FAB — fixed bottom-right, pulse animation */}
      <WhatsAppFloat />

      {/* Quote modal — renders over everything */}
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
