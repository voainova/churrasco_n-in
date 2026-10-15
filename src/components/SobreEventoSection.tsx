export default function SobreEventoSection() {
  return (
    <section className="bg-black py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">O Evento</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-4 mb-6">
            Uma noite que <span className="text-gold">transforma conexões</span> em oportunidades
          </h2>
          <div className="divider-gold w-32 mx-auto my-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="stat-card rounded-2xl p-8 text-center">
            <div className="text-5xl font-black text-gold font-display mb-2">80</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Participantes</div>
            <div className="text-gray-500 text-xs mt-2">Empresários qualificados da Grande Florianópolis</div>
          </div>
          <div className="stat-card rounded-2xl p-8 text-center">
            <div className="text-5xl font-black text-gold font-display mb-2">3h30</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">De Evento</div>
            <div className="text-gray-500 text-xs mt-2">Painel + Networking + Churrasco Gourmet</div>
          </div>
          <div className="stat-card rounded-2xl p-8 text-center">
            <div className="text-5xl font-black text-gold font-display mb-2">1</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Aniversário</div>
            <div className="text-gray-500 text-xs mt-2">Celebração do Núcleo de Inovação e Negócios</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-3xl font-bold mb-6">
              O que é o <span className="text-gold">Núcleo de Inovação e Negócios?</span>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Somos um grupo seleto de <strong>empresários</strong> da Grande Florianópolis, vinculados à AEMFLO/CDL São
              José, que acreditam no poder da <strong>inovação, do networking estratégico e da colaboração</strong> para
              impulsionar seus negócios.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Ao longo do ano, promovemos encontros, capacitações e eventos que geram conexões reais, cases de sucesso e
              oportunidades de negócio entre os membros.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-yellow-900/20 border border-yellow-900/30 rounded-full text-sm text-yellow-200">
                Inovação
              </span>
              <span className="px-4 py-2 bg-yellow-900/20 border border-yellow-900/30 rounded-full text-sm text-yellow-200">
                Vendas
              </span>
              <span className="px-4 py-2 bg-yellow-900/20 border border-yellow-900/30 rounded-full text-sm text-yellow-200">
                Networking
              </span>
              <span className="px-4 py-2 bg-yellow-900/20 border border-yellow-900/30 rounded-full text-sm text-yellow-200">
                Gestão
              </span>
              <span className="px-4 py-2 bg-yellow-900/20 border border-yellow-900/30 rounded-full text-sm text-yellow-200">
                Liderança
              </span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-yellow-900/30 shadow-2xl">
            <img src="/assets/foto3.jpg" className="w-full h-96 object-cover" alt="Grupo Núcleo de Inovação e Negócios" />
          </div>
        </div>
      </div>
    </section>
  );
}
