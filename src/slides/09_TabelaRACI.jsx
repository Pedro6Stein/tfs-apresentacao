import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Briefcase, CheckCircle2, MessageSquare, Info, ChevronRight, HelpCircle } from 'lucide-react';

// Mapeamento de significados para ajudar o apresentador e o público
const roleMap = {
  AS: { nome: "Analista de Sistemas", desc: "Quem executa a tarefa técnica (Põe a mão na massa)." },
  CEO: { nome: "Diretor Executivo", desc: "Quem tem o poder de decisão e aprovação final." },
  GTI: { nome: "Gerente de TI", desc: "Quem coordena os recursos e garante o alinhamento." },
  AN: { nome: "Analista de Negócio", desc: "Quem é consultado sobre os requisitos do cliente." },
  UN: { nome: "Usuário de Negócio", desc: "Quem utiliza o sistema e fornece feedback final." }
};

const raciData = [
  { id: 1, proc: "Entrega de Benefícios", r: "AS", a: "CEO", c: "GTI", i: "AN", dica: "Alinhamento das soluções Java/NextJS com o valor comercial e necessidades de mercado." },
  { id: 2, proc: "Otimização de Recursos", r: "CEO", a: "GTI", c: "AN", i: "AS", dica: "Maximização da eficiência operacional através de infraestrutura escalável e alocação rentável." },
  { id: 3, proc: "Gestão de Orçamento e Custos", r: "GTI", a: "CEO", c: "AS", i: "AN", dica: "Monitoramento rigoroso de custos de desenvolvimento e infraestrutura via Story Points no Jira." },
  { id: 4, proc: "Inovação Gerenciada", r: "GTI", a: "AS", c: "CEO", i: "AN", dica: "Validação de novas tecnologias em ambiente Sandbox para mitigação de obsolescência técnica." },
  { id: 5, proc: "Terceiros Gerenciados", r: "GTI", a: "CEO", c: "AN", i: "AS", dica: "Supervisão de performance e conformidade de SLAs de provedores Cloud e APIs externas." },
  { id: 6, proc: "Qualidade Gerenciada", r: "AS", a: "GTI", c: "GTI", i: "AN", dica: "Instituição do Definition of Done (DoD) para garantia de sustentabilidade e limpeza do código." },
  { id: 7, proc: "Segurança Gerenciada", r: "GTI", a: "AS", c: "AN", i: "CEO", dica: "Proteção do capital intelectual e dados sensíveis através de controles RBAC e autenticação MFA." },
  { id: 8, proc: "Soluções e Construção", r: "AS", a: "GTI", c: "AS", i: "AN", dica: "Ciclo de construção rastreável com integração nativa entre commits padronizados e tarefas do Jira." },
  { id: 9, proc: "Conhecimento Gerenciado", r: "GTI", a: "UN", c: "AS", i: "AN", dica: "Retenção de inteligência corporativa via documentação técnica centralizada em Wiki/Confluence." },
  { id: 10, proc: "Configuração Gerenciada", r: "AS", a: "GTI", c: "AN", i: "CEO", dica: "Preservação da integridade ambiental através de versionamento rigoroso e aplicação de Git Flow." },
  { id: 11, proc: "Serviços de Segurança", r: "GTI", a: "AN", c: "AS", i: "CEO", dica: "Blindagem ativa de APIs com Spring Security e gestão de registros (logs) de acesso sistêmico." },
  { id: 12, proc: "Operações Gerenciadas", r: "AS", a: "GTI", c: "AN", i: "CEO", dica: "Manutenção da disponibilidade (uptime) e execução de rotinas preventivas de backup de dados." },
  { id: 13, proc: "Desempenho e Conformidade", r: "GTI", a: "AN", c: "AS", i: "CEO", dica: "Avaliação de produtividade real e identificação de gargalos via métricas de Lead Time em Dashboards." },
  { id: 14, proc: "Regulações Externas", r: "GTI", a: "AN", c: "CEO", i: "AS", dica: "Assegurar conformidade contínua com as diretrizes da LGPD, ISO 27001 e normas do BACEN." }
];

export default function TabelaRACI() {
  const [selecionado, setSelecionado] = useState(null);

  const getRoleStyle = (role) => {
    switch(role) {
      case 'AS': return "text-neonBlue bg-neonBlue/10 border-neonBlue/30";
      case 'CEO': return "text-yellow-500 bg-yellow-500/10 border-yellow-500/30";
      case 'GTI': return "text-purple-400 bg-purple-400/10 border-purple-400/30";
      case 'AN': return "text-googleBlue bg-google-400/10 border-googleBlue/30";
      case 'UN': return "text-green-400 bg-green-400/10 border-green-400/30";
      default: return "text-gray-400 bg-white/5 border-white/10";
    }
  };

  const springTransition = { type: "spring", stiffness: 400, damping: 40 };

  return (
    <div className="w-full h-full flex flex-col justify-center p-16 relative">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <p className="text-neonBlue text-xl font-semibold tracking-widest mb-1 uppercase">08 / Governança e Papéis</p>
        <h1 className="text-5xl font-bold text-white flex items-center gap-3">
          <ShieldCheck size={40} className="text-neonBlue" /> Matriz RACI: Governança TFS
        </h1>
      </motion.div>

      {/* Tabela Interativa */}
      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar bg-cardGlass/40 border border-white/10 rounded-3xl p-6 shadow-2xl">
        <div className="grid grid-cols-12 gap-4 mb-4 px-4 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] sticky top-0 bg-[#050B14] py-2 z-10 border-b border-white/5">
          <div className="col-span-4">Processo de Governança</div>
          <div className="col-span-2 text-center">Responsável (R)</div>
          <div className="col-span-2 text-center">Aprovador (A)</div>
          <div className="col-span-2 text-center">Consultado (C)</div>
          <div className="col-span-2 text-center">Informado (I)</div>
        </div>

        <div className="space-y-2">
          {raciData.map((item) => (
            <motion.div
              layoutId={`row-${item.id}`}
              key={item.id}
              onClick={() => setSelecionado(item)}
              whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.05)" }}
              className="grid grid-cols-12 gap-4 items-center p-3 bg-white/[0.02] border border-white/5 rounded-xl cursor-pointer will-change-transform transition-colors"
            >
              <div className="col-span-4 flex items-center gap-2">
                <ChevronRight size={16} className="text-neonBlue opacity-50" />
                <span className="text-lg font-bold text-white/90 truncate">{item.proc}</span>
              </div>
              {[item.r, item.a, item.c, item.i].map((role, i) => (
                <div key={i} className="col-span-2 flex justify-center">
                  <span className={`w-10 h-7 flex items-center justify-center rounded-md border font-black text-xs ${getRoleStyle(role)}`}>
                    {role || "-"}
                  </span>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Legenda Dinâmica de Apoio */}
      <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10 grid grid-cols-5 gap-4">
        {Object.entries(roleMap).map(([key, value]) => (
          <div key={key} className="flex flex-col">
            <span className={`text-xs font-black uppercase mb-1 ${getRoleStyle(key).split(' ')[0]}`}>{key}: {value.nome}</span>
            <span className="text-[10px] text-gray-500 leading-tight italic">{value.desc}</span>
          </div>
        ))}
      </div>

      {/* Modal Inteligente para o Wilson */}
      <AnimatePresence>
        {selecionado && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelecionado(null)} className="absolute inset-0 bg-black/80 backdrop-blur-md z-40 rounded-3xl" />
            <div className="absolute inset-0 flex items-center justify-center z-50 p-20 pointer-events-none">
              <motion.div 
                layoutId={`row-${selecionado.id}`} 
                transition={springTransition}
                className="bg-bgDeep border border-white/20 p-12 rounded-[40px] shadow-2xl max-w-4xl w-full pointer-events-auto relative overflow-hidden"
              >
                <button onClick={() => setSelecionado(null)} className="absolute top-8 right-8 p-3 bg-white/5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"><X size={28}/></button>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-neonBlue/10 rounded-2xl text-neonBlue shadow-[0_0_20px_rgba(0,229,255,0.2)]"><HelpCircle size={40}/></div>
                  <h2 className="text-4xl font-black text-white leading-tight">{selecionado.proc}</h2>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-10">
                   {/* Papéis Detalhados no Modal */}
                   {['r', 'a', 'c', 'i'].map((type) => (
                     selecionado[type] && (
                        <div key={type} className="p-5 bg-white/5 rounded-2xl border border-white/10">
                          <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">
                            {type === 'r' ? 'Responsável' : type === 'a' ? 'Aprovador' : type === 'c' ? 'Consultado' : 'Informado'}
                          </p>
                          <div className={`inline-block px-3 py-1 rounded-lg font-black text-sm mb-2 ${getRoleStyle(selecionado[type])}`}>
                            {selecionado[type]} - {roleMap[selecionado[type]].nome}
                          </div>
                          <p className="text-xs text-gray-400 italic leading-relaxed">{roleMap[selecionado[type]].desc}</p>
                        </div>
                     )
                   ))}
                </div>

                {/* A "COLA" PARA O WILSON */}
                <div className="p-6 bg-neonBlue/5 border border-neonBlue/20 rounded-2xl">
                  <p className="text-xs font-black text-neonBlue uppercase mb-2 flex items-center gap-2 tracking-tighter">
                    <HelpCircle size={14} /> Resumo:
                  </p>
                  <p className="text-2xl text-white font-medium italic">"{selecionado.dica}"</p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}