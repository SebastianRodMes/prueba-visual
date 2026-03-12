import React from 'react';
import { useOutletContext } from 'react-router-dom';
import HeroSection       from '../components/HeroSection';
import BenefitsSection   from '../components/BenefitsSection';

const MuralesPage = () => {
  const { onCotizarClick } = useOutletContext();

  return (
    <>
      <HeroSection onCotizarClick={onCotizarClick} />
      <BenefitsSection />
    </>
  );
};

export default MuralesPage;
