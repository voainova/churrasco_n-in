import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight, Flame } from "lucide-react";
import { ASSETS, BUY_URL } from "../lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Vídeo de fundo */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={ASSETS.video}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Overlay escuro para legibilidade */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge de escassez com pulso */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex animate-pulse items-center gap-2 rounded-full border border-[#f4c984]/50 bg-[#1a0f0a]/80 px-5 py-2 text-sm sm:text-base font-bold text-[#f4c984] mb-8"
        >
          <Flame className="w-4 h-4" />
          🔥 Apenas 80 Vagas Disponíveis
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6"
        >
          Conecte-se, Aprenda e Venda Mais no{" "}
          <span className="text-gold">Evento de Aniversário do Núcleo de Inovação</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10"
        >
          Uma noite exclusiva com palestra estratégica de alto nível, networking
          qualificado e um churrasco gourmet assinado pelo Chef Rodrigo.
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="stat-card flex items-center gap-3 rounded-xl px-5 py-3 text-white">
            <Calendar className="w-5 h-5 text-[#f4c984]" />
            <span className="font-semibold">📅 05/Nov/2026</span>
          </div>
          <div className="stat-card flex items-center gap-3 rounded-xl px-5 py-3 text-white">
            <Clock className="w-5 h-5 text-[#f4c984]" />
            <span className="font-semibold">⏰ 19h00</span>
          </div>
          <div className="stat-card flex items-center gap-3 rounded-xl px-5 py-3 text-white">
            <MapPin className="w-5 h-5 text-[#f4c984]" />
            <span className="font-semibold">📍 AEMFLO/CDL-SJ</span>
          </div>
        </motion.div>

        {/* CTA Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center justify-center gap-3 rounded-full px-8 sm:px-12 py-5 text-lg sm:text-2xl font-black text-[#1a0f0a] hover:scale-105 transition-transform shadow-[0_0_40px_rgba(212,165,116,0.5)]"
          >
            Garantir meu ingresso por R$ 84,00
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
