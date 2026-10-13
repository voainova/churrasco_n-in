export default function CotasSection() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Cotas de Patrocínio</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-4 mb-6">
            Escolha o tamanho da <span className="text-gold">sua presença</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada cota foi desenhada para oferecer visibilidade estratégica, conexão qualificada e benefícios exclusivos que vão muito além do evento.
          </p>
          <div className="divider-gold w-32 mx-auto my-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* MASTER */}
          <div className="card-master rounded-2xl p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="badge-exclusive px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase">
                Destaque
              </span>
            </div>
            <div className="text-center mb-6 pt-4">
              <div className="text-6xl mb-2">🥇</div>
              <h3 className="font-display text-2xl font-black text-gold">MASTER</h3>
              <div className="text-4xl font-black mt-4 text-white">R$ 3.000</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">1 cota disponível</div>
            </div>
            <div className="divider-gold mb-4"></div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-gold">✓</span><span>Entrevista de <strong>7 min</strong> no palco</span></li>
              <li className="flex gap-2"><span className="text-gold">✓</span><span>Mesa em <strong>local premium</strong></span></li>
              <li className="flex gap-2"><span className="text-gold">✓</span><span>1 brinde no <strong>Press Kit</strong> (80 pax)</span></li>
              <li className="flex gap-2"><span className="text-gold">✓</span><span>Logo em <strong>destaque</strong> em todas as artes</span></li>
              <li className="flex gap-2"><span className="text-gold">✓</span><span><strong>10 ingressos</strong> para o Churrasco</span></li>
              <li className="flex gap-2"><span className="text-gold">✓</span><span><strong>10 ingressos</strong> para a Imersão</span></li>
              <li className="flex gap-2"><span className="text-gold">✓</span><span>3 menções pelo MC</span></li>
              <li className="flex gap-2"><span className="text-gold">✓</span><span>3 posts dedicados no Instagram</span></li>
            </ul>
          </div>

          {/* PRATA */}
          <div className="card-prata rounded-2xl p-6">
            <div className="text-center mb-6">
              <div className="text-6xl mb-2">🥈</div>
              <h3 className="font-display text-2xl font-black text-gray-300">PRATA</h3>
              <div className="text-4xl font-black mt-4 text-white">R$ 2.000</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Até 3 cotas</div>
            </div>
            <div className="divider-gold mb-4"></div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-gray-300">✓</span><span>Entrevista de <strong>4 min</strong> no palco</span></li>
              <li className="flex gap-2"><span className="text-gray-300">✓</span><span>Mesa em <strong>boa localização</strong></span></li>
              <li className="flex gap-2"><span className="text-gray-300">✓</span><span>1 material no <strong>Press Kit</strong></span></li>
              <li className="flex gap-2"><span className="text-gray-300">✓</span><span>Logo nas artes e telão</span></li>
              <li className="flex gap-2"><span className="text-gray-300">✓</span><span><strong>5 ingressos</strong> para o Churrasco</span></li>
              <li className="flex gap-2"><span className="text-gray-300">✓</span><span><strong>5 ingressos</strong> para a Imersão</span></li>
              <li className="flex gap-2"><span className="text-gray-300">✓</span><span>2 menções pelo MC</span></li>
              <li className="flex gap-2"><span className="text-gray-300">✓</span><span>1 post dedicado no Instagram</span></li>
            </ul>
          </div>

          {/* BRONZE */}
          <div className="card-bronze rounded-2xl p-6">
            <div className="text-center mb-6">
              <div className="text-6xl mb-2">🥉</div>
              <h3 className="font-display text-2xl font-black" style={{ color: '#b87333' }}>BRONZE</h3>
              <div className="text-4xl font-black mt-4 text-white">R$ 1.000</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Até 5 cotas</div>
            </div>
            <div className="divider-gold mb-4"></div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span style={{ color: '#b87333' }}>✓</span><span>Participação no <strong>Painel Relâmpago</strong></span></li>
              <li className="flex gap-2"><span style={{ color: '#b87333' }}>✓</span><span>Mesa em área de circulação</span></li>
              <li className="flex gap-2"><span style={{ color: '#b87333' }}>✓</span><span>1 material gráfico no Press Kit</span></li>
              <li className="flex gap-2"><span style={{ color: '#b87333' }}>✓</span><span>Logo na arte coletiva</span></li>
              <li className="flex gap-2"><span style={{ color: '#b87333' }}>✓</span><span><strong>3 ingressos</strong> para o Churrasco</span></li>
              <li className="flex gap-2"><span style={{ color: '#b87333' }}>✓</span><span><strong>3 ingressos</strong> para a Imersão</span></li>
              <li className="flex gap-2"><span style={{ color: '#b87333' }}>✓</span><span>1 menção pelo MC</span></li>
            </ul>
          </div>

          {/* APOIO NUCLEADOS */}
          <div className="card-apoio rounded-2xl p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase" style={{ background: '#4a7c59', color: 'white' }}>
                Exclusivo
              </span>
            </div>
            <div className="text-center mb-6 pt-4">
              <div className="text-6xl mb-2">🤝</div>
              <h3 className="font-display text-2xl font-black" style={{ color: '#4a7c59' }}>APOIO</h3>
              <div className="text-xs text-gray-400 uppercase tracking-wider">Para Nucleados</div>
              <div className="text-4xl font-black mt-4 text-white">R$ 500</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Vagas limitadas</div>
            </div>
            <div className="divider-gold mb-4"></div>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span style={{ color: '#4a7c59' }}>✓</span><span>Mesa em área de circulação</span></li>
              <li className="flex gap-2"><span style={{ color: '#4a7c59' }}>✓</span><span>Logo na arte coletiva</span></li>
              <li className="flex gap-2"><span style={{ color: '#4a7c59' }}>✓</span><span><strong>1 ingresso</strong> para o Churrasco</span></li>
              <li className="flex gap-2"><span style={{ color: '#4a7c59' }}>✓</span><span><strong>1 ingresso</strong> para a Imersão</span></li>
              <li className="flex gap-2"><span style={{ color: '#4a7c59' }}>✓</span><span>Condição especial de nucleado</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">💳 <strong className="text-white">Condições especiais para nucleados.</strong></p>
        </div>
      </div>
    </section>
  );
}
