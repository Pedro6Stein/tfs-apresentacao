import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  const [touchStart, setTouchStart] = useState(null);

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

  // Controle de Teclado
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

  // Controle de Swipe (Mobile/Tablet)
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const distance = touchStart - e.changedTouches[0].clientX;
    if (distance > 50) setSlideAtual((prev) => Math.min(prev + 1, totalSlides - 1)); // Swipe Esquerda (Avança)
    if (distance < -50) setSlideAtual((prev) => Math.max(prev - 1, 0)); // Swipe Direita (Volta)
    setTouchStart(null);
  };

  return (
    <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <PalcoApresentacao>
        {/* AnimatePresence + motion.div garante a animação global */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slideAtual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {slides[slideAtual]}
          </motion.div>
        </AnimatePresence>

        {/* Paginação */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center items-center z-50 pointer-events-none">
          <div className="flex gap-3 bg-cardGlass px-6 py-3 rounded-full border border-white/10 backdrop-blur-md shadow-lg pointer-events-auto">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setSlideAtual(idx)}
                aria-label={`Ir para slide ${idx + 1}`}
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
    </div>
  );
}