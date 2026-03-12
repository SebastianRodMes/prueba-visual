import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import MuralesPage from './pages/MuralesPage';
import TiposPage from './pages/TiposPage';
import CotizacionPage from './pages/CotizacionPage';
import RequisitosPage from './pages/RequisitosPage';
import ProyectosPage from './pages/ProyectosPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MuralesPage />} />
          <Route path="tipos" element={<TiposPage />} />
          <Route path="cotizacion" element={<CotizacionPage />} />
          <Route path="requisitos" element={<RequisitosPage />} />
          <Route path="portafolio" element={<ProyectosPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
