import { motion } from 'framer-motion';
import { KanbanSquare, GitPullRequest, RefreshCw, ShieldCheck } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  exit: { opacity: 0, x: -50, filter: "blur(10px)", transition: { duration: 0.4 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Implementacao() {
  const passos = [
    { icone: KanbanSquare, cor: "text-blue-400", bg: "bg-blue-400/10", titulo: "Gestão Ágil (Jira)", desc: "Uso de Kanban e Sprints para previsibilidade." },
    { icone: GitPullRequest, cor: "text-purple-400", bg: "bg-purple-400/10", titulo: "Code Review", desc: "Revisão obrigatória para garantir o DoD (Definition of Done)." },
    { icone: ShieldCheck, cor: "text-green-400", bg: "bg-green-400/10", titulo: "Conformidade", desc: "Validação contínua (LGPD e ISO 27001)." },
    { icone: RefreshCw, cor: "text-neonBlue", bg: "bg-neonBlue/10", titulo: "Ciclo COBIT", desc: "Implementação guiada pelas 7 fases de melhoria contínua." }
  ];

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit" className="w-full h-full flex flex-col justify-center p-32">
      
      {/* Tags corrigidas! */}
      <motion.p variants={cardVariants} className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">
        05 / Execução
      </motion.p>
      
      <motion.h1 variants={cardVariants} className="text-6xl font-bold text-white mb-16">
        Estratégia de Implementação
      </motion.h1>

      {/* Fluxo de Implementação Horizontal */}
      <div className="grid grid-cols-4 gap-8 relative">
        {/* Linha conectora de fundo */}
        <div className="absolute top-16 left-10 right-10 h-1 bg-gradient-to-r from-blue-400/20 via-green-400/20 to-neonBlue/20 rounded-full hidden md:block z-0"></div>

        {passos.map((passo, index) => {
          const Icone = passo.icone;
          return (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -10, borderColor: "rgba(255,255,255,0.2)" }}
              className="relative z-10 bg-cardGlass border border-white/5 p-8 rounded-3xl shadow-xl backdrop-blur-md flex flex-col items-center text-center transition-all group"
            >
              {/* Efeito de brilho no hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${passo.bg} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              
              <div className={`p-5 rounded-2xl ${passo.bg} ${passo.cor} mb-8 shadow-inner border border-white/5 group-hover:scale-110 transition-transform`}>
                <Icone size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{passo.titulo}</h3>
              <p className="text-xl text-gray-400 leading-relaxed">{passo.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}