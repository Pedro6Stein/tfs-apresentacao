import { motion } from 'framer-motion';

export default function FundoVivo() {
  // Criamos um array de partículas com posições, tamanhos e atrasos aleatórios
  const particulas = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    tamanho: Math.random() * 4 + 2, // bolinhas entre 2px e 6px
    x: Math.random() * 100, // posição horizontal (%)
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 10, // sobem devagar (10 a 25s)
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Luzes de fundo pulsantes */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.2, 1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-neonBlue/10 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.3, 1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-googleBlue/10 blur-[120px] rounded-full"
      />

      {/* Partículas flutuantes estilo "dados subindo" */}
      {particulas.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "110vh", x: `${p.x}vw`, opacity: 0 }}
          animate={{ y: "-10vh", opacity: [0, 0.8, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className="absolute bg-white rounded-full shadow-[0_0_10px_#00E5FF]"
          style={{ width: p.tamanho, height: p.tamanho }}
        />
      ))}

      {/* Letreiro Tecnológico (Marquee) passando lentamente ao fundo */}
      <div className="absolute bottom-10 left-0 w-full overflow-hidden opacity-5 rotate-[-2deg] scale-110">
        <motion.div 
          animate={{ x: [0, -2000] }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-8xl font-black text-white uppercase tracking-[0.2em]"
        >
          COBIT 2019 • LGPD • GOVERNANÇA DE TI • SCALABILITY • COBIT 2019 • LGPD
        </motion.div>
      </div>
    </div>
  );
}