import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Activity, Server, Target, Code, ShieldCheck } from 'lucide-react';

// Os dados vieram da sua documentação oficial (Cópia de Estrutura - apresentação - GTI .docx)
const dominiosData = [
  {
    id: "edm02",
    titulo: "EDM02",
    subtitulo: "Validação de Funcionalidades",
    categoria: "EDM (Avaliar, Direcionar, Monitorar)",
    corTexto: "text-googleBlue",
    corBg: "bg-googleBlue/10",
    corBorda: "border-googleBlue/40",
    icone: Activity,
    conteudo: "Foco na entrega de valor. Validamos se as funcionalidades implementadas no ecossistema Java e NextJS estão perfeitamente alinhadas com as necessidades de transparência e previsibilidade dos stakeholders, baseando-nos nos princípios da ISO 38500."
  },
  {
    id: "edm04",
    titulo: "EDM04",
    subtitulo: "Otimização de Recursos",
    categoria: "EDM (Avaliar, Direcionar, Monitorar)",
    corTexto: "text-googleBlue",
    corBg: "bg-googleBlue/10",
    corBorda: "border-googleBlue/40",
    icone: Server,
    conteudo: "Garantia de que a infraestrutura em nuvem e os recursos da TFS são alocados de forma rentável e escalável, suportando o alto volume de dados sem desperdício financeiro."
  },
  {
    id: "apo06",
    titulo: "APO06",
    subtitulo: "Gestão de Custos e Estimativas",
    categoria: "APO (Alinhar, Planejar, Organizar)",
    corTexto: "text-neonBlue",
    corBg: "bg-neonBlue/10",
    corBorda: "border-neonBlue/40",
    icone: Target,
    conteudo: "Utilização rigorosa de 'Story Points' no Jira. Isso garante previsibilidade nas entregas (sprints) e permite que a diretoria tenha clareza sobre o esforço e custo de cada novo módulo desenvolvido."
  },
  {
    id: "apo11",
    titulo: "APO11",
    subtitulo: "Qualidade e Definition of Done",
    categoria: "APO (Alinhar, Planejar, Organizar)",
    corTexto: "text-neonBlue",
    corBg: "bg-neonBlue/10",
    corBorda: "border-neonBlue/40",
    icone: Code,
    conteudo: "Implementação de um rigoroso Definition of Done (DoD). Nenhum código avança sem Code Review obrigatório, garantindo código limpo, testável e fácil manutenção."
  },
  {
    id: "apo13",
    titulo: "APO13",
    subtitulo: "Segurança da Informação",
    categoria: "APO (Alinhar, Planejar, Organizar)",
    corTexto: "text-neonBlue",
    corBg: "bg-neonBlue/10",
    corBorda: "border-neonBlue/40",
    icone: ShieldCheck,
    conteudo: "Adoção de MFA (Múltiplos Fatores de Autenticação) e permissões de acesso baseadas em funções (RBAC). Fundamental para garantir a conformidade com a LGPD e diretrizes do BACEN."
  }
];

export default function DominiosEDMAPO() {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <div className="w-full h-full flex flex-col justify-center p-32 relative">
      
      {/* Cabeçalho do Slide */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
        <p className="text-neonBlue text-2xl font-semibold tracking-widest mb-4 uppercase">06 / Governança</p>
        <h1 className="text-6xl font-bold text-white">Domínios EDM & APO</h1>
        <p className="text-xl text-gray-400 mt-4">Clique nos domínios para expandir os detalhes da implementação na TFS.</p>
      </motion.div>

      {/* Grid de Cartões (Pequenos) */}
      <div className="flex flex-wrap gap-6 mt-8">
        {dominiosData.map((item) => {
          const Icone = item.icone;
          return (
            <motion.div
              layoutId={`card-${item.id}`}
              key={item.id}
              onClick={() => setSelecionado(item)}
              className={`flex-1 min-w-[300px] cursor-pointer bg-cardGlass border ${item.corBorda} p-8 rounded-3xl hover:bg-white/5 transition-colors shadow-lg`}
            >
              <motion.div layoutId={`icone-${item.id}`} className={`w-16 h-16 rounded-2xl ${item.corBg} ${item.corTexto} flex items-center justify-center mb-6`}>
                <Icone size={32} />
              </motion.div>
              <motion.h2 layoutId={`titulo-${item.id}`} className="text-3xl font-bold text-white mb-2">{item.titulo}</motion.h2>
              <motion.p layoutId={`subtitulo-${item.id}`} className="text-xl text-gray-400">{item.subtitulo}</motion.p>
            </motion.div>
          );
        })}
      </div>

      {/* MODAL EXPANSIVO (Aparece quando há um item selecionado) */}
      <AnimatePresence>
        {selecionado && (
          <>
            {/* Fundo escuro desfocado (Backdrop) */}
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

                {/* Texto de detalhe que entra com um fade suave */}
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