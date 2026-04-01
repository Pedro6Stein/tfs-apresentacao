import { useEffect, useState, useRef } from 'react';

export default function PalcoApresentacao({ children }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      const baseWidth = 1920; // Resolução Full HD padrão de TV
      const baseHeight = 1080;
      
      // Calcula o zoom necessário para caber na tela sem quebrar nada
      const scaleX = innerWidth / baseWidth;
      const scaleY = innerHeight / baseHeight;
      setScale(Math.min(scaleX, scaleY)); 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Roda na primeira renderização

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // Fundo preto total para o que "sobrar" da tela (Letterbox)
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <div 
        ref={containerRef}
        style={{ 
          width: 1920, 
          height: 1080, 
          transform: `scale(${scale})`,
          transformOrigin: 'center center' 
        }}
        className="relative bg-bgDeep shadow-2xl overflow-hidden flex items-center justify-center"
      >
        {/* Fundo com efeito de grade sutil para dar o ar "tecnológico" */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(0,229,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        
        {/* Onde os slides vão aparecer */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}