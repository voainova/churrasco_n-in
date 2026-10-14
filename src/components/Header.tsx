import { motion } from "framer-motion";
import { ASSETS, BUY_URL } from "../lib/constants";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#d4a574]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={ASSETS.logoNucleo}
            alt="Logo Núcleo Inovação 2025"
            className="h-10 w-auto object-contain"
          />
          <img
            src={ASSETS.logoCompleta}
            alt="Logo completa Inovação e Negócios"
            className="h-10 w-auto object-contain hidden sm:block"
          />
        </div>

        <a
          href={`${BUY_URL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button inline-flex items-center gap-2 rounded-full px-4 sm:px-6 py-2.5 text-sm sm:text-base font-bold text-[#1a0f0a] hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,165,116,0.35)]"
        >
          Garantir Ingresso
        </a>
      </div>
    </motion.header>
  );
}
