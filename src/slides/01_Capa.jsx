import { motion } from 'framer-motion';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Capa() {
  const integrantes = [
    "Enzo Corcetti", "Pedro Stein", 
    "Murilo Grigoletto", "Wilson Tucci", 
    "Lucas Policene"
  ];

  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col items-center justify-center text-center p-20 relative">
      <motion.p 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="text-neonBlue text-2xl tracking-[0.3em] uppercase mb-6 font-bold"
      >
        Governança Corporativa de TI
      </motion.p>
      
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
        className="text-8xl font-black text-white mb-12 drop-shadow-2xl"
      >
        Three Frog System (TFS)
      </motion.h1>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="bg-cardGlass border border-white/10 p-10 rounded-[32px] backdrop-blur-2xl shadow-2xl w-full max-w-4xl"
      >
        <p className="text-gray-400 uppercase text-sm mb-6 tracking-widest">Equipe de Projeto</p>
        <div className="grid grid-cols-3 gap-6">
          {integrantes.map((nome, i) => (
            <motion.p 
              key={i}
              whileHover={{ scale: 1.1, color: "#00E5FF" }}
              className="text-2xl font-semibold text-white transition-colors cursor-default"
            >
              {nome}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}