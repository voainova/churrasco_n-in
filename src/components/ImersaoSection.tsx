export default function ImersaoSection() {
  return (
    <section className="gradient-dark py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="badge-exclusive px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase inline-block">
            Bônus Exclusivo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-6 mb-6">
            Patrocine o Churrasco.
            <br />
            <span className="text-gold">Ganhe a Imersão.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Todas as cotas de patrocínio incluem ingressos para um evento exclusivo e complementar.
          </p>
        </div>

        <div className="immersion-card rounded-3xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="font-display text-3xl md:text-4xl font-black mb-4">
                <span className="text-gold">Imersão da</span>
                <br />
                <span className="text-white">Inovação e Negócios</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Um evento completo com <strong className="text-white">profissionais renomados</strong> em cinco pilares
                fundamentais para o crescimento do seu negócio. Uma experiência transformadora para você e sua equipe.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-2 bg-yellow-900/30 border border-yellow-900/50 rounded-lg text-sm">💡 Inovação</span>
                <span className="px-3 py-2 bg-yellow-900/30 border border-yellow-900/50 rounded-lg text-sm">📈 Vendas</span>
                <span className="px-3 py-2 bg-yellow-900/30 border border-yellow-900/50 rounded-lg text-sm">💰 Finanças</span>
                <span className="px-3 py-2 bg-yellow-900/30 border border-yellow-900/50 rounded-lg text-sm">🎯 Gestão</span>
                <span className="px-3 py-2 bg-yellow-900/30 border border-yellow-900/50 rounded-lg text-sm">👑 Lideranças</span>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 bg-black/50 rounded-xl border border-yellow-900/30">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🥇</span>
                    <span className="font-bold">Cota MASTER</span>
                  </div>
                  <div className="text-gold font-black text-xl">10 ingressos</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/50 rounded-xl border border-gray-700/30">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🥈</span>
                    <span className="font-bold">Cota PRATA</span>
                  </div>
                  <div className="text-gray-300 font-black text-xl">5 ingressos</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/50 rounded-xl border border-orange-900/30">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🥉</span>
                    <span className="font-bold">Cota BRONZE</span>
                  </div>
                  <div className="font-black text-xl" style={{ color: '#b87333' }}>3 ingressos</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/50 rounded-xl border border-green-900/30">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🤝</span>
                    <span className="font-bold">Cota APOIO</span>
                  </div>
                  <div className="font-black text-xl" style={{ color: '#4a7c59' }}>1 ingresso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
