import { motion } from 'framer-motion';
import imgTech from '../assets/fundo-tech.png';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function CasoNegocio() {
  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col justify-center p-32">
      <div className="grid grid-cols-2 gap-20 items-center h-full">
        <div>
          <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">01 / Apresentação</p>
          <h1 className="text-6xl font-bold text-white mb-8 leading-tight">O Ecossistema da<br />Three Frog System</h1>
          
          <p className="text-2xl text-gray-300 leading-relaxed mb-10">
            A TFS utiliza o ecossistema <strong>Java e NextJS</strong> para garantir segurança e integridade. 
            O nosso foco é a melhoria contínua e a otimização de processos manuais de todos os ramos do mercado, aplicando infraestrutura de dados robusta e interfaces modernas.
          </p>

          <div className="space-y-4">
            <motion.div whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }} className="p-4 rounded-xl border border-white/5 transition-colors cursor-default">
              <h3 className="text-2xl font-bold text-neonBlue">Otimização</h3>
              <p className="text-xl text-gray-400">Automatização de fluxos manuais para escalabilidade.</p>
            </motion.div>
            <motion.div whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }} className="p-4 rounded-xl border border-white/5 transition-colors cursor-default">
              <h3 className="text-2xl font-bold text-googleBlue">Integridade</h3>
              <p className="text-xl text-gray-400">Foco absoluto na segurança da informação manipulada.</p>
            </motion.div>
          </div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="h-150 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
        >
          <img src={imgTech} alt="Tecnologia" className="object-cover w-full h-full opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-bgDeep via-transparent to-transparent"></div>
        </motion.div>
      </div>
    </motion.div>
  );
}