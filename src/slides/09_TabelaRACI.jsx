import { motion } from 'framer-motion';

const animacaoBase = {
  initial: { opacity: 0, x: 50, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -50, filter: "blur(10px)" },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function TabelaRACI() {
  return (
    <motion.div {...animacaoBase} className="w-full h-full flex flex-col justify-center p-32">
      <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">08 / Papéis e Responsabilidades</p>
      <h1 className="text-6xl font-bold text-white mb-12">Matriz RACI Resumida</h1>
      <div className="bg-bgDeep/80 border border-white/10 rounded-3xl overflow-hidden w-full">
        <table className="w-full text-left text-2xl">
          <thead className="bg-white/5 text-neonBlue">
            <tr>
              <th className="p-6 font-bold border-b border-white/10">Objetivo (Domínio)</th>
              <th className="p-6 font-bold border-b border-white/10 text-center">Responsável (R)</th>
              <th className="p-6 font-bold border-b border-white/10 text-center">Aprovador (A)</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-6 border-b border-white/5">Entrega de Benefícios</td>
              <td className="p-6 border-b border-white/5 text-center"><span className="bg-neonBlue/20 text-neonBlue px-4 py-1 rounded-full">AS</span></td>
              <td className="p-6 border-b border-white/5 text-center"><span className="bg-yellow-500/20 text-yellow-500 px-4 py-1 rounded-full">CEO</span></td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-6 border-b border-white/5">Otimização de Recursos</td>
              <td className="p-6 border-b border-white/5 text-center"><span className="bg-yellow-500/20 text-yellow-500 px-4 py-1 rounded-full">CEO</span></td>
              <td className="p-6 border-b border-white/5 text-center"><span className="bg-purple-500/20 text-purple-400 px-4 py-1 rounded-full">GTI</span></td>
            </tr>
            <tr className="hover:bg-white/5 transition-colors">
              <td className="p-6 border-b border-white/5">Segurança Gerenciada</td>
              <td className="p-6 border-b border-white/5 text-center"><span className="bg-purple-500/20 text-purple-400 px-4 py-1 rounded-full">GTI</span></td>
              <td className="p-6 border-b border-white/5 text-center"><span className="bg-neonBlue/20 text-neonBlue px-4 py-1 rounded-full">AS</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-gray-500 mt-6 text-xl text-center">Legenda: AS (Analista Sist.) | CEO (Diretor) | GTI (Gerente TI)</p>
    </motion.div>
  );
}