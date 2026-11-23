export default function ProgramacaoSection() {
  const timelineItems = [
    {
      time: '19h00',
      title: 'Recepção e Feira de Negócios',
      description: 'Chegada, credenciamento e primeiro contato com os expositores e empresários.',
      tags: [],
    },
    {
      time: '19h15',
      title: 'Abertura Oficial e Celebração de Aniversário do Núcleo',
      description: 'Momento de celebração do aniversário do Núcleo de Inovação.',
      tags: [],
    },
    {
      time: '19h45',
      title: 'Painel: Empresas Inovadoras, Grandes Resultados Reais',
      description: 'Cases reais de empresários de sucesso. Pergunte, interaja e se conecte.',
      tags: [],
    },
    {
      time: '20h30',
      title: 'Apresentação de cases de Sucesso',
      description: 'Momento exclusivo para conhecer histórias e resultados de empresas da região.',
      tags: [],
    },
    {
      time: '20h45',
      title: '🥩 Churrasco Gourmet pelo Chef Rodrigo + Open Networking',
      description: 'Experiência gastronômica premium com continuidade do networking.',
      tags: [],
    },
  ];

  return (
    <section className="gradient-dark py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Programação</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-4">
            Uma experiência <span className="text-gold">cuidadosamente desenhada</span>
          </h2>
          <div className="divider-gold w-32 mx-auto my-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="timeline-dot"></div>
                  {index < timelineItems.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-gold font-bold text-sm tracking-widest uppercase">{item.time}</div>
                  <h3 className="font-display text-2xl font-bold mt-2 mb-2">{item.title}</h3>
                  <p className="text-gray-400 whitespace-pre-line">{item.description}</p>
                  {item.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={`px-3 py-1 ${tag.color} rounded text-xs`}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-yellow-900/50 bg-black/40">
            <img
              src="/assets/Arte_feed_palestrantes.jpeg"
              className="w-full object-cover"
              alt="Palestrantes do Talk Show 2027: O Ano da Inovação na Grande Florianópolis"
            />
            <div className="p-6 md:p-8">
              <span className="text-gold text-sm font-bold tracking-widest uppercase">Talk Show exclusivo</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">
                2027: O Ano da Inovação na Grande Florianópolis
              </h3>
              <p className="text-gray-300 mt-4">Uma conversa rara e sem filtros com:</p>
              <ul className="text-gray-400 mt-2 space-y-1">
                <li>🎙️ Luan Tavares (Vice-Presidente AEMFLO)</li>
                <li>🎙️ Marcio Cavalcanti (Diretor de Inovação)</li>
                <li>🎙️ Macson Vieira (Coordenador do Núcleo de Inovação e Negócios)</li>
              </ul>
              <p className="text-gray-300 font-bold mt-6">O que você vai descobrir:</p>
              <ul className="text-gray-400 mt-2 space-y-2">
                <li>✅ As tendências de mercado que vão definir os próximos anos.</li>
                <li>✅ Como o associativismo está criando estratégias para aumentar sua produtividade e vendas.</li>
                <li>
                  ✅ Ações práticas para você conquistar mais resultados e, consequentemente, mais tempo de qualidade
                  para sua família.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
