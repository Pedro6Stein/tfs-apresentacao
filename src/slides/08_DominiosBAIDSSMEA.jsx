import { motion } from 'framer-motion';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function DominiosBAIDSSMEA() {
  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col justify-center p-32">
      <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">07 / Domínios de Governança (2/2)</p>
      <h1 className="text-6xl font-bold text-white mb-16">Construção, Operação e Monitorização</h1>
      <div className="grid grid-cols-3 gap-10">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-cardGlass border-t-4 border-t-purple-400 p-10 rounded-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">BAI <span className="block text-xl text-gray-400 font-normal mt-2">Construir</span></h2>
          <p className="text-xl text-gray-300"><strong>BAI03/10:</strong> Commits vinculados ao Jira e Git Flow centralizado no GitHub/GitLab.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-cardGlass border-t-4 border-t-orange-400 p-10 rounded-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">DSS <span className="block text-xl text-gray-400 font-normal mt-2">Suportar</span></h2>
          <p className="text-xl text-gray-300"><strong>DSS01/05:</strong> Uptime, backups (ITIL v4) e Spring Security com logs.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-cardGlass border-t-4 border-t-green-400 p-10 rounded-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">MEA <span className="block text-xl text-gray-400 font-normal mt-2">Avaliar</span></h2>
          <p className="text-xl text-gray-300"><strong>MEA01/03:</strong> Dashboards Lead Time e auditorias semestrais LGPD.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}