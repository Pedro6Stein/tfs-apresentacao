import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import PalcoApresentacao from './components/PalcoApresentacao';

import Capa from './slides/01_Capa';
import CasoNegocio from './slides/02_CasoNegocio';
import Expectativas from './slides/03_Expectativas';
import Estrategia from './slides/04_Estrategia';
import Conformidade from './slides/05_Conformidade';
import Implementacao from './slides/06_Implementacao';
import DominiosEDMAPO from './slides/07_DominiosEDMAPO';
import DominiosBAIDSSMEA from './slides/08_DominiosBAIDSSMEA';
import TabelaRACI from './slides/09_TabelaRACI';
import CascataObjetivos from './slides/10_CascataObjetivos';
import Encerramento from './slides/11_Encerramento';

export default function App() {
  const [slideAtual, setSlideAtual] = useState(0);

  // Aqui você coloca os slides na ordem da apresentação
  const slides = [
    <Capa key="0" />,
    <CasoNegocio key="1" />,
    <Expectativas key="2" />,
    <Estrategia key="3" />,
    <Conformidade key="4" />,
    <Implementacao key="5" />,
    <DominiosEDMAPO key="6" />,
    <DominiosBAIDSSMEA key="7" />,
    <TabelaRACI key="8" />,
    <CascataObjetivos key="9" />,
    <Encerramento key="10" />
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        setSlideAtual((prev) => Math.min(prev + 1, totalSlides - 1));
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setSlideAtual((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  return (
    <PalcoApresentacao>
      <AnimatePresence mode="wait">
        {slides[slideAtual]}
      </AnimatePresence>

      <div className="absolute bottom-10 left-0 w-full flex justify-center items-center gap-6 px-20 z-50">
        <div className="flex gap-3 bg-cardGlass px-6 py-3 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
          {slides.map((_, idx) => (
            <div 
              key={idx}
              onClick={() => setSlideAtual(idx)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-500 ${
                slideAtual === idx 
                  ? 'w-8 bg-neonBlue shadow-[0_0_10px_#00E5FF]' 
                  : 'w-2 bg-white/20 hover:bg-white/50'
              }`} 
            />
          ))}
        </div>
      </div>
    </PalcoApresentacao>
  );
}