import { motion } from 'framer-motion';
import { LayoutDashboard, CalendarClock, Users } from 'lucide-react';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Expectativas() {
  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col justify-center p-32">
      <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">02 / Expectativas</p>
      <h1 className="text-7xl font-bold text-white mb-16">Necessidades das Partes Interessadas</h1>
      
      <div className="grid grid-cols-3 gap-10">
        <motion.div whileHover={{ y: -10 }} className="bg-cardGlass border border-white/10 p-12 rounded-3xl backdrop-blur-md transition-transform cursor-default">
          <LayoutDashboard className="w-16 h-16 text-neonBlue mb-8" />
          <h3 className="text-4xl font-bold text-white mb-4">Transparência</h3>
          <p className="text-2xl text-gray-400">Dashboard centralizado para visualização de status em tempo real.</p>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} className="bg-cardGlass border border-white/10 p-12 rounded-3xl backdrop-blur-md transition-transform cursor-default">
          <CalendarClock className="w-16 h-16 text-neonBlue mb-8" />
          <h3 className="text-4xl font-bold text-white mb-4">Previsibilidade</h3>
          <p className="text-2xl text-gray-400">Garantir entregas nas datas combinadas para gerar confiança no mercado regional.</p>
        </motion.div>

        <motion.div whileHover={{ y: -10 }} className="bg-cardGlass border border-white/10 p-12 rounded-3xl backdrop-blur-md transition-transform cursor-default">
          <Users className="w-16 h-16 text-neonBlue mb-8" />
          <h3 className="text-4xl font-bold text-white mb-4">Responsabilidade</h3>
          <p className="text-2xl text-gray-400">Fim do "isso não era comigo" através da definição de donos para cada módulo.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}