import { motion } from 'framer-motion';
import imgFatec from '../assets/FatecLogo.png';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Encerramento() {
  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col items-center justify-center text-center p-20">
      {/* <img src={imgFatec} alt="FATEC" className="h-32 mb-16" /> ficou feioana*/}
      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }}
        className="text-8xl font-black text-white mb-8 drop-shadow-2xl"
      >
        Muito Obrigado.
      </motion.h1>
      <p className="text-3xl text-gray-400 mb-16">Abertos para sessão de perguntas e discussões.</p>
      <div className="flex gap-4">
        <span className="px-6 py-2 rounded-full border border-white/20 text-gray-400 text-lg hover:bg-white/10 transition-colors cursor-default">Tecnologia</span>
        <span className="px-6 py-2 rounded-full border border-white/20 text-gray-400 text-lg hover:bg-white/10 transition-colors cursor-default">Governança</span>
        <span className="px-6 py-2 rounded-full border border-white/20 text-gray-400 text-lg hover:bg-white/10 transition-colors cursor-default">COBIT 2019</span>
      </div>
    </motion.div>
  );
}