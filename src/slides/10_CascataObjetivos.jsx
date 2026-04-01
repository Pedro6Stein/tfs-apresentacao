import { motion } from 'framer-motion';
import imgCascata from '../assets/cascata-objetivos.png';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function CascataObjetivos() {
  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col justify-center items-center p-20">
      <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase w-full text-left pl-12">09 / Alinhamento</p>
      <h1 className="text-6xl font-bold text-white mb-10 w-full text-left pl-12">Cascata de Objetivos</h1>
      <motion.div whileHover={{ scale: 1.02 }} className="w-[85%] flex justify-center border border-white/10 rounded-3xl overflow-hidden bg-white/5 p-4 shadow-2xl">
         <img src={imgCascata} alt="Cascata de Objetivos" className="max-h-150 object-contain rounded-2xl" />
      </motion.div>
    </motion.div>
  );
}