import React from 'react';
import { useOutletContext } from 'react-router-dom';
import CotizacionSection from '../components/CotizacionSection';

const CotizacionPage = () => {
  const { onCotizarClick } = useOutletContext();

  return (
    <>
      <CotizacionSection onFormClick={onCotizarClick} />
    </>
  );
};

export default CotizacionPage;
