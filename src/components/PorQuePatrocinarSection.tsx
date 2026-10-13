export default function PorQuePatrocinarSection() {
  const reasons = [
    {
      icon: '🎯',
      title: 'Público Qualificado',
      description: '80 empresários da Grande Florianópolis, com poder de decisão e buscando ativamente por novos parceiros, soluções e oportunidades.',
    },
    {
      icon: '🎤',
      title: 'Palco com Credibilidade',
      description: 'Formato de entrevista conduzida por MC profissional — sua marca é apresentada com conteúdo e credibilidade, não como comercial de TV.',
    },
    {
      icon: '🤝',
      title: 'Networking Real',
      description: '3h30 de convivência em ambiente premium, com churrasco gourmet pelo Chef Rodrigo — o cenário perfeito para fechar negócios de forma natural.',
    },
    {
      icon: '📱',
      title: 'Visibilidade Digital',
      description: 'Sua marca em todas as artes, posts dedicados no Instagram do Núcleo, telão do evento e menções pelo MC durante toda a noite.',
    },
    {
      icon: '🚀',
      title: 'Bônus Imersão',
      description: 'Ingressos para a Imersão da Inovação e Negócios — um evento complementar com profissionais renomados em 5 pilares do crescimento empresarial.',
    },
    {
      icon: '🏆',
      title: 'Associação de Marca',
      description: 'Sua empresa associada à AEMFLO/CDL São José e ao Núcleo de Inovação e Negócios — referência em empreendedorismo na região.',
    },
  ];

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Por que patrocinar</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-4">
            Seu negócio merece <span className="text-gold">estar na sala certa</span>
          </h2>
          <div className="divider-gold w-32 mx-auto my-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="stat-card rounded-2xl p-8">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
