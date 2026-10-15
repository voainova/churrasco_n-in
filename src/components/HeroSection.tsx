export default function HeroSection() {
  return (
    <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-amber-900/40 via-orange-900/30 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="inline-block mb-6">
              <span className="badge-exclusive px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase">
                Proposta Exclusiva de Patrocínio
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="text-gold">Churrasco</span>
              <br />
              <span className="text-white">da Inovação</span>
              <br />
              <span className="text-white">&amp; Negócios</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              O evento de aniversário do{' '}
              <strong className="text-gold">Núcleo de Inovação e Negócios da AEMFLO/CDL São José</strong>. Uma noite exclusiva com um{' '}
              <strong className="text-gold">Painel de Alto Nível</strong>, networking qualificado e um churrasco gourmet assinado pelo{' '}
              <strong className="text-gold">Chef Rodrigo</strong>.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-black font-bold">
                  📅
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Data</div>
                  <div className="font-bold">05 de Novembro, 2026</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-black font-bold">
                  ⏰
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Horário</div>
                  <div className="font-bold">19h00</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-black font-bold">
                  📍
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Local</div>
                  <div className="font-bold">AEMFLO / CDL-SJ</div>
                </div>
              </div>
            </div>
          </div>
          <div className="fade-in relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-yellow-900/50 shadow-2xl">
              <img src="/assets/Arte_feed.jpeg" className="w-full h-full object-cover" alt="Churrasco da Inovação e Negócios" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur border border-yellow-900/50 rounded-xl p-4 shadow-2xl">
              <div className="text-gold text-3xl font-black font-display">80</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Empresários Qualificados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
