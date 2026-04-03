import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wrench, LifeBuoy, LineChart } from 'lucide-react';

const dominiosData = [
  {
    id: "bai",
    titulo: "BAI",
    subtitulo: "Construir, Adquirir e Implementar",
    categoria: "BAI03 / BAI10",
    corTexto: "text-purple-400",
    corBg: "bg-purple-400/10",
    corBorda: "border-purple-400/40",
    icone: Wrench,
    conteudo: "Foco no controle rigoroso do código. Utilizamos Git Flow centralizado no GitHub/GitLab, exigindo que todos os commits sejam obrigatoriamente vinculados às tarefas do Jira. Isso garante a rastreabilidade exata de quem construiu o quê, além de manter a gestão do conhecimento sempre atualizada."
  },
  {
    id: "dss",
    titulo: "DSS",
    subtitulo: "Entregar, Dar Suporte e Servir",
    categoria: "DSS01 / DSS05",
    corTexto: "text-orange-400",
    corBg: "bg-orange-400/10",
    corBorda: "border-orange-400/40",
    icone: LifeBuoy,
    conteudo: "Garantia de que a operação não para e é segura. Aplicamos práticas do ITIL v4 para gestão de uptime e backups gerenciados (DSS01). Na camada de segurança, blindamos a API utilizando Spring Security com um registro rigoroso de logs de acesso (DSS05)."
  },
  {
    id: "mea",
    titulo: "MEA",
    subtitulo: "Monitorar, Avaliar e Analisar",
    categoria: "MEA01 / MEA03",
    corTexto: "text-green-400",
    corBg: "bg-green-400/10",
    corBorda: "border-green-400/40",
    icone: LineChart,
    conteudo: "Visibilidade total do desempenho da equipe e do sistema. Implementamos Dashboards em tempo real para acompanhar métricas de engenharia como o Lead Time (MEA01). Além disso, realizamos auditorias semestrais rigorosas para garantir a conformidade contínua com as normas da LGPD (MEA03)."
  }
];

export default function DominiosBAIDSSMEA() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className="w-full h-full flex flex-col justify-center p-32 relative">
      
      {/* Cabeçalho do Slide */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">07 / Governança (2/2)</p>
        <h1 className="text-6xl font-bold text-white">Construção, Operação e Monitorização</h1>
        <p className="text-xl text-gray-400 mt-4">Clique nos domínios para expandir os detalhes técnicos de implementação.</p>
      </motion.div>

      {/* Grid de Cartões (Pequenos) */}
      <div className="grid grid-cols-3 gap-10 mt-8">
        {dominiosData.map((item) => {
          const Icone = item.icone;
          return (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              onClick={() => setSelecionado(item)}
              className={`cursor-pointer bg-cardGlass border ${item.corBorda} p-10 rounded-3xl hover:bg-white/5 transition-colors shadow-lg relative overflow-hidden group`}
            >
              <div className={`absolute top-0 left-0 w-full h-2 ${item.corBg.replace('/10', '')} opacity-50`}></div>
              <motion.div layoutId={`icone-${item.id}`} className={`w-16 h-16 rounded-2xl ${item.corBg} ${item.corTexto} flex items-center justify-center mb-6`}>
                <Icone size={32} />
              </motion.div>
              <motion.h2 layoutId={`titulo-${item.id}`} className="text-4xl font-bold text-white mb-2">{item.titulo}</motion.h2>
              <motion.p layoutId={`subtitulo-${item.id}`} className="text-xl text-gray-400 font-medium">{item.subtitulo}</motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* MODAL EXPANSIVO */}
      <AnimatePresence>
        {selecionado && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelecionado(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md z-40 rounded-3xl"
            />
            
            {/* O Cartão Gigante */}
            <div className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none">
              <motion.div
                layoutId={`card-${selecionado.id}`}
                className={`bg-bgDeep border ${selecionado.corBorda} p-16 rounded-[40px] shadow-[0_0_80px_rgba(0,0,0,0.8)] max-w-4xl w-full pointer-events-auto relative overflow-hidden`}
              >
                {/* Botão Fechar */}
                <button 
                  onClick={() => setSelecionado(null)}
                  className="absolute top-8 right-8 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors"
                >
                  <X size={32} />
                </button>

                <div className="flex items-center gap-8 mb-10">
                  <motion.div layoutId={`icone-${selecionado.id}`} className={`w-24 h-24 rounded-3xl ${selecionado.corBg} ${selecionado.corTexto} flex items-center justify-center`}>
                    {<selecionado.icone size={48} />}
                  </motion.div>
                  <div>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl font-medium tracking-widest uppercase text-gray-400 mb-2">
                      {selecionado.categoria}
                    </motion.p>
                    <motion.h2 layoutId={`titulo-${selecionado.id}`} className="text-6xl font-black text-white">{selecionado.titulo}</motion.h2>
                    <motion.p layoutId={`subtitulo-${selecionado.id}`} className={`text-2xl mt-2 ${selecionado.corTexto} font-medium`}>{selecionado.subtitulo}</motion.p>
                  </div>
                </div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                  exit={{ opacity: 0, transition: { duration: 0.1 } }}
                  className="text-3xl text-gray-300 leading-relaxed"
                >
                  {selecionado.conteudo}
                </motion.p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}