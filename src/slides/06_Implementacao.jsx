import { motion } from 'framer-motion';
import imgKanban from '../assets/fluxo-kanban.png';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Implementacao() {
  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col justify-center p-32">
      <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">05 / Execução</p>
      <h1 className="text-7xl font-bold text-white mb-12">Roteiro de Adoção: Sprints & Fluxo</h1>
      <div className="grid grid-cols-5 gap-12 items-center">
        <div className="col-span-2 space-y-8">
          <p className="text-3xl text-gray-300 leading-relaxed">
            Adoção estruturada através de Sprints. O Jira atua como fonte de verdade para rastreabilidade de todas as tarefas.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-cardGlass p-8 rounded-2xl border border-white/10">
            <h4 className="text-2xl font-bold text-neonBlue mb-4">Prática Obrigatória:</h4>
            <p className="text-xl text-gray-300">Nenhum código vai para o branch principal sem aprovação em <strong>Code Review</strong>.</p>
          </motion.div>
        </div>
        <motion.div whileHover={{ scale: 1.02 }} className="col-span-3">
          <img src={imgKanban} alt="Fluxo Jira" className="rounded-3xl border border-white/10 shadow-2xl w-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}