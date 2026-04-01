import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, Lock } from 'lucide-react';
import imgShield from '../assets/seguranca-escudo.png';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Conformidade() {
  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col justify-center p-32">
      <div className="grid grid-cols-2 gap-20 items-center h-full">
        <motion.div whileHover={{ scale: 1.02 }} className="h-150 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <img src={imgShield} alt="Segurança" className="object-cover w-full h-full opacity-80" />
        </motion.div>
        <div>
          <p className="text-red-400 text-2xl font-semibold tracking-widest mb-4 uppercase">04 / Risco & Conformidade</p>
          <h1 className="text-6xl font-bold text-white mb-10">Cenário de Ameaças e Alta Conformidade</h1>
          <p className="text-2xl text-gray-300 mb-10">
            A organização está propensa a ciberataques e sanções, exigindo uma infraestrutura resiliente e auditável. Os pilares normativos são:
          </p>
          <ul className="space-y-6">
            <motion.li whileHover={{ x: 10, color: "#fff" }} className="flex items-center gap-4 text-3xl text-gray-400 transition-all cursor-default">
              <Lock className="w-8 h-8 text-red-400" /> <strong>LGPD:</strong> Crítica para APIs e dados sensíveis.
            </motion.li>
            <motion.li whileHover={{ x: 10, color: "#fff" }} className="flex items-center gap-4 text-3xl text-gray-400 transition-all cursor-default">
              <ShieldCheck className="w-8 h-8 text-green-400" /> <strong>ISO/IEC 27001:</strong> Resiliência das operações.
            </motion.li>
            <motion.li whileHover={{ x: 10, color: "#fff" }} className="flex items-center gap-4 text-3xl text-gray-400 transition-all cursor-default">
              <CheckCircle className="w-8 h-8 text-neonBlue" /> <strong>BACEN / CVM:</strong> Trilha de auditoria financeira.
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}