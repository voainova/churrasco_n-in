export default function Edicao2025Section() {
  return (
    <section className="gradient-dark py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase">Edição 2025</span>
          <h2 className="font-display text-4xl md:text-5xl font-black mt-4 mb-6">
            Reviva os <span className="text-gold">melhores momentos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            O que aconteceu no último Churrasco da Inovação e Negócios e por que você não pode ficar de fora desta edição.
          </p>
          <div className="divider-gold w-32 mx-auto my-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vídeo */}
          <div className="rounded-2xl overflow-hidden border border-yellow-900/30 shadow-2xl">
            <div className="relative aspect-video bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                <source src="/assets/video_churras.MOV" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>

          {/* Galeria de Fotos */}
          <div className="grid grid-cols-2 gap-4">
            <div className="gallery-item rounded-2xl overflow-hidden border border-yellow-900/30 shadow-2xl">
              <img src="/assets/foto2.jpg" className="w-full h-full object-cover aspect-square" alt="Networking 2025" />
            </div>
            <div className="gallery-item rounded-2xl overflow-hidden border border-yellow-900/30 shadow-2xl">
              <img src="/assets/foto1.jpg" className="w-full h-full object-cover aspect-square" alt="Palestra 2025" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="stat-card rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-gold font-display mb-2">60+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Participantes</div>
          </div>
          <div className="stat-card rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-gold font-display mb-2">4h</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">De Experiência</div>
          </div>
          <div className="stat-card rounded-2xl p-6 text-center">
            <div className="text-4xl font-black text-gold font-display mb-2">100%</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Aprovação</div>
          </div>
        </div>
      </div>
    </section>
  );
}
