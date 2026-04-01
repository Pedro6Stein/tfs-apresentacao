import { motion } from 'framer-motion';
import { Target, Activity } from 'lucide-react';
// import imgStakeholder from '../assets/StackHOLDER.png';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Estrategia() {
  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col justify-center p-32">
      <div className="grid grid-cols-5 gap-16 items-center h-full">
        <div className="col-span-3">
          <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">03 / Direcionamento</p>
          <h1 className="text-7xl font-bold text-white mb-10 leading-tight">Estratégia e Metas Corporativas</h1>
          <div className="space-y-12">
            <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 transition-transform">
              <Target className="w-12 h-12 text-googleBlue shrink-0 mt-2" />
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">Escalabilidade e Manutenção</h3>
                <p className="text-2xl text-gray-400">Utilização de boas práticas de engenharia de software para alta eficiência operacional.</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ x: 10 }} className="flex items-start gap-6 transition-transform">
              <Activity className="w-12 h-12 text-googleBlue shrink-0 mt-2" />
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">Inovação e Agilidade</h3>
                <p className="text-2xl text-gray-400">Foco na agilidade de mercado, inovação de produtos e geração de valor contínuo.</p>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div whileHover={{ scale: 1.02 }} className="col-span-2 h-full flex items-center">
           {/* kkkk nem existe essa imagem<img src={imgStakeholder} alt="Stakeholders" className="rounded-3xl border border-white/10 shadow-2xl opacity-90 object-contain w-full" /> */}
        </motion.div>
      </div>
    </motion.div>
  );
}