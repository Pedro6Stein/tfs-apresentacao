import { motion } from 'framer-motion';

// Variantes para orquestrar a cascata de elementos
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  },
  exit: { opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.4 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(5px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Capa() {
  const integrantes = [
    "Enzo Corcetti", "Pedro Stein", 
    "Murilo Grigoletto", "Wilson Tucci", 
    "Lucas Policene"
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="w-full h-full flex flex-col items-center justify-center text-center p-20 relative"
    >
      <motion.p variants={itemVariants} className="text-neonBlue text-2xl tracking-[0.3em] uppercase mb-6 font-bold">
        Governança Corporativa de TI
      </motion.p>
      
      <motion.h1 variants={itemVariants} className="text-8xl font-black text-white mb-12 drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]">
        Three Frog System (TFS)
      </motion.h1>

      <motion.div variants={itemVariants} className="bg-cardGlass border border-white/10 p-10 rounded-[32px] backdrop-blur-2xl shadow-2xl w-full max-w-4xl">
        <p className="text-gray-400 uppercase text-sm mb-6 tracking-widest">Equipe de Projeto</p>
        
        {/* Substituição do Grid por Flex para centralizar perfeitamente os 5 nomes */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {integrantes.map((nome, i) => (
            <motion.p 
              key={i}
              whileHover={{ scale: 1.05, color: "#00E5FF" }}
              className="text-2xl font-semibold text-white/90 hover:text-white transition-colors cursor-default"
            >
              {nome}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}