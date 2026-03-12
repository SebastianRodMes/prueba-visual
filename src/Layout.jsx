import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar            from './components/Navbar';
import Footer            from './components/Footer';
import WhatsAppFloat     from './components/WhatsAppFloat';
import QuoteModal        from './components/QuoteModal';

const Layout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal  = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar onCotizarClick={openModal} />
      
      <main>
        {/* Child routes render here */}
        <Outlet context={{ onCotizarClick: openModal }} />
      </main>

      <Footer />
      <WhatsAppFloat />
      <QuoteModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Layout;
