import { motion } from 'framer-motion';
import { Target, Activity, Compass, Lightbulb } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  exit: { opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.4 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Estrategia() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="w-full h-full flex flex-col justify-center p-32">
      <div className="grid grid-cols-2 gap-20 items-center h-full">
        
        {/* Coluna de Texto */}
        <div className="flex flex-col justify-center">
          <motion.p variants={itemVariants} className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">
            03 / Direcionamento
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-7xl font-bold text-white mb-16 leading-tight">
            Estratégia e Metas Corporativas
          </motion.h1>
          
          <motion.div variants={itemVariants} className="space-y-12">
            <motion.div whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }} className="flex items-start gap-6 transition-all p-6 rounded-2xl border border-transparent hover:border-white/10">
              <div className="p-4 bg-googleBlue/10 rounded-xl">
                <Target className="w-10 h-10 text-googleBlue shrink-0" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-3">Escalabilidade e Manutenção</h3>
                <p className="text-2xl text-gray-400 leading-relaxed">Utilização de boas práticas de engenharia de software para alta eficiência operacional.</p>
              </div>
            </motion.div>
            
            <motion.div whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }} className="flex items-start gap-6 transition-all p-6 rounded-2xl border border-transparent hover:border-white/10">
              <div className="p-4 bg-neonBlue/10 rounded-xl">
                <Activity className="w-10 h-10 text-neonBlue shrink-0" />
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-3">Inovação e Agilidade</h3>
                <p className="text-2xl text-gray-400 leading-relaxed">Foco na agilidade de mercado, inovação de produtos e geração de valor contínuo.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Coluna Visual (Substitui a imagem que não existia) */}
        <motion.div variants={itemVariants} className="h-full flex items-center justify-center relative">
          <div className="relative w-96 h-96 flex items-center justify-center">
            {/* Anéis animados de fundo */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-white/20"
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-neonBlue/30"
            />
            
            {/* Centro brilhante */}
            <div className="relative z-10 p-12 bg-cardGlass rounded-full backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(0,229,255,0.2)]">
              <Compass className="w-24 h-24 text-white" />
            </div>

            {/* Ícones flutuantes */}
            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-10 right-10 p-4 bg-bgDeep rounded-2xl border border-white/10 shadow-lg text-neonBlue">
              <Lightbulb size={32} />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}