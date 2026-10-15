export default function ProgramacaoSection() {
  const timelineItems = [
    {
      time: '19h00 – 19h15',
      title: 'Recepção & Exposição dos Patrocinadores',
      description: 'Abertura dos portões, credenciamento e circulação livre pelos estandes dos patrocinadores com networking inicial.',
      tags: [],
    },
    {
      time: '19h15 – 19h45',
      title: 'Abertura & Aniversário do Núcleo',
      description: 'Apresentação institucional "Núcleo em Números" com resultados, cases e visão de futuro.',
      tags: [],
    },
    {
      time: '19h45 – 20h30',
      title: '🎤 Painel Dinâmico dos Patrocinadores',
      description: 'Entrevistas conduzidas pelo MC no palco — formato dinâmico que valoriza sua marca com credibilidade e conteúdo.',
      tags: [],
    },
    {
      time: '20h30 – 20h45',
      title: 'Apresentação das Empresas Patrocinadoras',
      description: 'Momento dedicado às empresas no palco:',
      tags: [
        { label: 'Master: 6 min', color: 'bg-yellow-900/30' },
        { label: 'Prata: 4 min', color: 'bg-gray-700/30' },
        { label: 'Bronze: Painel Relâmpago', color: 'bg-orange-900/30' },
      ],
    },
    {
      time: '20h45 – 22h30',
      title: '🥩 Churrasco Gourmet pelo Chef Rodrigo',
      description: 'Jantar premium, networking livre e circulação pelos estandes.',
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
                  <p className="text-gray-400">{item.description}</p>
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
        </div>
      </div>
    </section>
  );
}
