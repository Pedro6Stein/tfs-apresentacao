import { motion } from 'framer-motion';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function DominiosEDMAPO() {
  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col justify-center p-32">
      <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">06 / Domínios de Governança (1/2)</p>
      <h1 className="text-6xl font-bold text-white mb-16">EDM & APO na Prática</h1>
      <div className="grid grid-cols-2 gap-12">
        <motion.div whileHover={{ y: -10 }} className="bg-cardGlass border-l-4 border-l-googleBlue p-10 rounded-2xl transition-transform">
          <h2 className="text-4xl font-bold text-white mb-6">EDM <span className="text-2xl text-gray-400 font-normal">(Avaliar, Direcionar, Monitorar)</span></h2>
          <ul className="space-y-4 text-2xl text-gray-300">
            <li><strong className="text-neonBlue">EDM02:</strong> Validação de funcionalidades (ISO 38500).</li>
            <li><strong className="text-neonBlue">EDM04:</strong> Alocação rentável de infraestrutura.</li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ y: -10 }} className="bg-cardGlass border-l-4 border-l-neonBlue p-10 rounded-2xl transition-transform">
          <h2 className="text-4xl font-bold text-white mb-6">APO <span className="text-2xl text-gray-400 font-normal">(Alinhar, Planejar, Organizar)</span></h2>
          <ul className="space-y-4 text-2xl text-gray-300">
            <li><strong className="text-neonBlue">APO06:</strong> Estimativas com "Story Points".</li>
            <li><strong className="text-neonBlue">APO11:</strong> Definição de Pronto (DoD) com código limpo.</li>
            <li><strong className="text-neonBlue">APO13:</strong> MFA e permissões rigorosas.</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}