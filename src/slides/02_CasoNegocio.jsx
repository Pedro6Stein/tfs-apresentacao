import { motion } from 'framer-motion';
import { Zap, ShieldCheck } from 'lucide-react'; // Adicionando ícones para dar um aspeto premium
import imgTech from '../assets/fundo-tech.png';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  exit: { opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.4 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, filter: "blur(5px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
};

export default function CasoNegocio() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="w-full h-full flex flex-col justify-center p-32">
      <div className="grid grid-cols-2 gap-20 items-center h-full">
        
        {/* Coluna de Texto */}
        <div className="flex flex-col justify-center">
          <motion.p variants={itemVariants} className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">
            01 / Apresentação
          </motion.p>
          
          <motion.h1 variants={itemVariants} className="text-6xl font-bold text-white mb-8 leading-tight">
            O Ecossistema da<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-googleBlue">
              Three Frog System
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-2xl text-gray-300 leading-relaxed mb-10">
            A TFS utiliza o ecossistema <strong className="text-white">Java e NextJS</strong> para garantir segurança e integridade. 
            O nosso foco é a melhoria contínua e a otimização de processos manuais de todos os ramos do mercado, aplicando infraestrutura de dados robusta e interfaces modernas.
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-6">
            {/* Card 1 */}
            <motion.div whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }} className="flex items-start gap-4 p-6 rounded-2xl bg-cardGlass border border-white/5 backdrop-blur-md transition-all cursor-default shadow-lg">
              <div className="p-3 bg-neonBlue/10 rounded-lg text-neonBlue">
                <Zap size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Otimização</h3>
                <p className="text-xl text-gray-400">Automatização de fluxos manuais para escalabilidade.</p>
              </div>
            </motion.div>
            
            {/* Card 2 */}
            <motion.div whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.08)" }} className="flex items-start gap-4 p-6 rounded-2xl bg-cardGlass border border-white/5 backdrop-blur-md transition-all cursor-default shadow-lg">
              <div className="p-3 bg-googleBlue/10 rounded-lg text-googleBlue">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Integridade</h3>
                <p className="text-xl text-gray-400">Foco absoluto na segurança da informação manipulada.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Coluna da Imagem */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="h-[700px] rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,229,255,0.1)] relative"
        >
          <img src={imgTech} alt="Tecnologia" className="object-cover w-full h-full opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-tr from-bgDeep via-transparent to-neonBlue/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-bgDeep via-transparent to-transparent"></div>
        </motion.div>

      </div>
    </motion.div>
  );
}