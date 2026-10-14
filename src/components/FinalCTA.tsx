import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BUY_URL } from "../lib/constants";

export default function FinalCTA() {
  return (
    <section className="gradient-hero py-20 sm:py-28 relative overflow-hidden">
      {/* Brilho decorativo */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-[#d4a574]/20 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl sm:text-5xl text-white mb-4"
        >
          Não deixe para depois.{" "}
          <span className="text-gold">As vagas estão voando.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-300 mb-10"
        >
          05 de Novembro de 2026 • 19h00 • AEMFLO / CDL São José-SC • R$ 84,00
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center justify-center gap-3 rounded-full px-10 sm:px-16 py-6 text-xl sm:text-3xl font-black text-[#1a0f0a] hover:scale-105 transition-transform shadow-[0_0_60px_rgba(212,165,116,0.6)] w-full sm:w-auto"
          >
            Garantir meu ingresso por R$ 84,00
            <ArrowRight className="w-7 h-7" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
