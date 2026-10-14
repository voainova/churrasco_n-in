import { motion } from "framer-motion";
import { Sparkles, Users, Target } from "lucide-react";
import { ASSETS } from "../lib/constants";

const stats = [
  { icon: Sparkles, label: "Ambiente Premium", desc: "Estrutura cuidada em cada detalhe para você." },
  { icon: Users, label: "Conexões Reais", desc: "Negócios que nascem de aperto de mão." },
  { icon: Target, label: "Conteúdo Aplicável", desc: "Estratégias para usar já na segunda-feira." },
];

export default function SocialProofSection() {
  return (
    <section className="gradient-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl sm:text-4xl text-center text-white mb-4"
        >
          Veja o que aconteceu na <span className="text-gold">última edição</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A Edição 2025 mostrou o poder de juntar as pessoas certas no mesmo lugar.
        </motion.p>

        {/* Grid: vídeo em destaque + fotos laterais */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 rounded-2xl overflow-hidden border border-[#d4a574]/30 shadow-[0_0_30px_rgba(212,165,116,0.15)]"
          >
            <video
              className="w-full h-full object-cover aspect-video"
              src={ASSETS.video}
              controls
              muted
              loop
              playsInline
              poster={ASSETS.foto3}
            />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
            {[ASSETS.foto1, ASSETS.foto2].map((foto, i) => (
              <motion.div
                key={foto}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
                viewport={{ once: true }}
                className="gallery-item rounded-2xl overflow-hidden border border-[#d4a574]/20"
              >
                <img src={foto} alt={`Foto da edição 2025 ${i + 1}`} className="w-full h-full object-cover aspect-video lg:aspect-auto" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              viewport={{ once: true }}
              className="immersion-card rounded-2xl p-6 text-center"
            >
              <s.icon className="w-8 h-8 text-[#f4c984] mx-auto mb-3" />
              <h3 className="font-display font-bold text-xl text-white mb-2">{s.label}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
