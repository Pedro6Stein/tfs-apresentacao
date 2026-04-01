import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  exit: { opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.4 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15, delayChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function DominiosEDMAPO() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="w-full h-full flex flex-col justify-center p-32">
      
      <motion.div variants={itemVariants}>
        <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">06 / Domínios de Governança (1/2)</p>
        <h1 className="text-6xl font-bold text-white mb-16">EDM & APO na Prática</h1>
      </motion.div>

      <div className="grid grid-cols-2 gap-16">
        {/* Cartão EDM */}
        <motion.div variants={cardVariants} className="bg-cardGlass border-l-4 border-l-googleBlue p-12 rounded-3xl shadow-2xl backdrop-blur-md relative overflow-hidden group hover:bg-white/[0.02] transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-googleBlue/10 blur-3xl -mr-10 -mt-10 rounded-full"></div>
          
          <h2 className="text-5xl font-bold text-white mb-8 flex flex-col gap-2">
            EDM 
            <span className="text-2xl text-gray-400 font-medium tracking-wide">(Avaliar, Direcionar, Monitorar)</span>
          </h2>
          
          <ul className="space-y-6">
            <motion.li variants={itemVariants} className="flex items-start gap-4 text-2xl text-gray-300">
              <ChevronRight className="w-8 h-8 text-googleBlue shrink-0 mt-1" />
              <span><strong className="text-white">EDM02:</strong> Validação de funcionalidades (ISO 38500).</span>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start gap-4 text-2xl text-gray-300">
              <ChevronRight className="w-8 h-8 text-googleBlue shrink-0 mt-1" />
              <span><strong className="text-white">EDM04:</strong> Alocação rentável de infraestrutura.</span>
            </motion.li>
          </ul>
        </motion.div>

        {/* Cartão APO */}
        <motion.div variants={cardVariants} className="bg-cardGlass border-l-4 border-l-neonBlue p-12 rounded-3xl shadow-2xl backdrop-blur-md relative overflow-hidden group hover:bg-white/[0.02] transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-neonBlue/10 blur-3xl -mr-10 -mt-10 rounded-full"></div>

          <h2 className="text-5xl font-bold text-white mb-8 flex flex-col gap-2">
            APO 
            <span className="text-2xl text-gray-400 font-medium tracking-wide">(Alinhar, Planejar, Organizar)</span>
          </h2>
          
          <ul className="space-y-6">
            <motion.li variants={itemVariants} className="flex items-start gap-4 text-2xl text-gray-300">
              <ChevronRight className="w-8 h-8 text-neonBlue shrink-0 mt-1" />
              <span><strong className="text-white">APO06:</strong> Estimativas precisas com "Story Points".</span>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start gap-4 text-2xl text-gray-300">
              <ChevronRight className="w-8 h-8 text-neonBlue shrink-0 mt-1" />
              <span><strong className="text-white">APO11:</strong> Definição de Pronto (DoD) com código limpo.</span>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-start gap-4 text-2xl text-gray-300">
              <ChevronRight className="w-8 h-8 text-neonBlue shrink-0 mt-1" />
              <span><strong className="text-white">APO13:</strong> MFA e permissões rigorosas de segurança.</span>
            </motion.li>
          </ul>
        </motion.div>
      </div>

    </motion.div>
  );
}