export default function CtaSection() {
  return (
    <section className="gradient-hero py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-amber-900/40 via-transparent to-orange-900/30" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="text-6xl mb-6">🔥</div>
        <h2 className="font-display text-4xl md:text-6xl font-black mb-6">
          <span className="text-white">Garanta sua</span>
          <br />
          <span className="text-gold">vaga no palco</span>
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          As cotas são limitadas e a ordem de confirmação define a posição dos estandes e a sequência das entrevistas.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          <div className="stat-card rounded-2xl p-6 text-left">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Contato</div>
            <div className="font-bold text-lg">Douglas</div>
            <div className="text-gray-400 text-sm">Consultor de Núcleos</div>
            <div className="text-gold text-sm mt-2">(48) 99912-8875</div>
          </div>
          <div className="stat-card rounded-2xl p-6 text-left">
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Evento</div>
            <div className="font-bold text-lg">05 de Novembro, 2026</div>
            <div className="text-gray-400 text-sm">19h00 | AEMFLO / CDL-SJ</div>
            <div className="text-gold text-sm mt-2">Previsão de 80 empresários qualificados</div>
          </div>
        </div>

        <a
          href="https://wa.me/5548999128875"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-block px-10 py-4 rounded-full text-black font-black text-lg tracking-wide uppercase"
        >
          Falar com Douglas →
        </a>

        <p className="text-gray-500 text-sm mt-8">
          *Condições especiais para nucleados. Entre em contato para mais informações.
        </p>
      </div>
    </section>
  );
}
