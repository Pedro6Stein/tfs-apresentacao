import { useEffect, useState, useRef } from 'react';
import FundoVivo from './FundoVIvo';

export default function PalcoApresentacao({ children }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      const baseWidth = 1920; 
      const baseHeight = 1080;
      
      const scaleX = innerWidth / baseWidth;
      const scaleY = innerHeight / baseHeight;
      setScale(Math.min(scaleX, scaleY)); 
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <div 
        ref={containerRef}
        style={{ 
          width: 1920, 
          height: 1080, 
          transform: `scale(${scale})`,
          transformOrigin: 'center center' 
        }}
        className="relative bg-bgDeep overflow-hidden flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      >
        {/* 1. Fundo: Grelha Tecnológica */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        {/* 2. Fundo Vivo: Partículas, Luzes e Marquee (Letreiro) */}
        <FundoVivo />
        
        {/* 3. Iluminação/Sombra: Escurece as bordas para focar a atenção no centro (Vignette) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,11,20,0.85)_100%)] pointer-events-none z-0"></div>
        
        {/* 4. Camada Principal: Onde os Slides são renderizados */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}