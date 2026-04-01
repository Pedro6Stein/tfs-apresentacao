import { motion } from 'framer-motion';
import { Briefcase, UserCheck, CheckCircle2 } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  exit: { opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.4 } }
};

const rowVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95, filter: "blur(5px)" },
  show: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export default function TabelaRACI() {
  // Array de dados para facilitar a manutenção e animação
  const raciData = [
    {
      dominio: "Entrega de Benefícios",
      resp: { sigla: "AS", papel: "Analista de Sistemas", cor: "text-neonBlue", bg: "bg-neonBlue/10", border: "border-neonBlue/30" },
      aprov: { sigla: "CEO", papel: "Diretor Executivo", cor: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" }
    },
    {
      dominio: "Otimização de Recursos",
      resp: { sigla: "CEO", papel: "Diretor Executivo", cor: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/30" },
      aprov: { sigla: "GTI", papel: "Gerente de TI", cor: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" }
    },
    {
      dominio: "Segurança Gerenciada",
      resp: { sigla: "GTI", papel: "Gerente de TI", cor: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/30" },
      aprov: { sigla: "AS", papel: "Analista de Sistemas", cor: "text-neonBlue", bg: "bg-neonBlue/10", border: "border-neonBlue/30" }
    }
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="w-full h-full flex flex-col justify-center p-32">
      
      <motion.div variants={itemVariants}>
        <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">08 / Papéis e Responsabilidades</p>
        <h1 className="text-6xl font-bold text-white mb-16">Matriz RACI Resumida</h1>
      </motion.div>

      {/* Tabela Refatorada com CSS Grid e Cards */}
      <div className="w-full flex flex-col gap-6">
        
        {/* Cabeçalho da "Tabela" */}
        <motion.div variants={itemVariants} className="grid grid-cols-12 gap-6 px-8 py-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm text-2xl font-bold text-gray-400 uppercase tracking-wider">
          <div className="col-span-6">Objetivo (Domínio COBIT)</div>
          <div className="col-span-3 flex items-center justify-center gap-2 text-neonBlue"><Briefcase size={24} /> Responsável (R)</div>
          <div className="col-span-3 flex items-center justify-center gap-2 text-googleBlue"><CheckCircle2 size={24} /> Aprovador (A)</div>
        </motion.div>

        {/* Linhas da Tabela Animadas */}
        {raciData.map((item, index) => (
          <motion.div 
            key={index} 
            variants={rowVariants}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.2)" }}
            className="grid grid-cols-12 gap-6 items-center px-8 py-8 bg-cardGlass rounded-2xl border border-white/5 shadow-lg backdrop-blur-md transition-all cursor-default relative overflow-hidden group"
          >
            {/* Efeito de brilho no hover da linha */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full"></div>

            {/* Domínio */}
            <div className="col-span-6 text-3xl font-bold text-white flex items-center gap-4">
              <div className="w-2 h-10 bg-gradient-to-b from-neonBlue to-googleBlue rounded-full"></div>
              {item.dominio}
            </div>

            {/* Responsável (R) */}
            <div className="col-span-3 flex justify-center">
              <div className={`flex flex-col items-center justify-center w-full max-w-[200px] py-3 rounded-xl border ${item.resp.bg} ${item.resp.border} ${item.resp.cor}`}>
                <span className="text-3xl font-black mb-1">{item.resp.sigla}</span>
                <span className="text-sm font-medium tracking-wide opacity-80">{item.resp.papel}</span>
              </div>
            </div>

            {/* Aprovador (A) */}
            <div className="col-span-3 flex justify-center">
              <div className={`flex flex-col items-center justify-center w-full max-w-[200px] py-3 rounded-xl border ${item.aprov.bg} ${item.aprov.border} ${item.aprov.cor}`}>
                <span className="text-3xl font-black mb-1">{item.aprov.sigla}</span>
                <span className="text-sm font-medium tracking-wide opacity-80">{item.aprov.papel}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}