import { motion } from "framer-motion";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import { BUY_URL } from "../lib/constants";

const included = [
  "Palestra exclusiva com Fernando Atalaia",
  "Jantar completo (Churrasco Gourmet pelo Chef Rodrigo)",
  "Bebidas não alcoólicas",
  "Networking qualificado com 80 empresários",
  "Material de apoio",
];

export default function OfferSection() {
  return (
    <section id="oferta" className="bg-[#0f0805] py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="card-master rounded-3xl p-8 sm:p-12 text-center"
        >
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-2">
            Garanta Sua <span className="text-gold">Vaga</span>
          </h2>
          <p className="text-gray-300 mb-8">Tudo o que você precisa em uma única noite.</p>

          {/* Preço em destaque */}
          <div className="mb-8">
            <p className="text-gray-300 text-lg mb-1">Valor do Ingresso:</p>
            <p className="font-display font-black text-5xl sm:text-6xl text-gold">R$ 84,00</p>
          </div>

          {/* Lista do que está incluso */}
          <ul className="text-left space-y-3 mb-8 max-w-md mx-auto">
            {included.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-gray-200"
              >
                <Check className="w-5 h-5 shrink-0 text-[#f4c984]" />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Aviso de escassez */}
          <div className="flex items-center justify-center gap-2 rounded-xl border border-[#f4c984]/40 bg-[#1a0f0a] px-4 py-3 mb-8">
            <AlertTriangle className="w-5 h-5 shrink-0 text-[#f4c984]" />
            <p className="text-sm sm:text-base font-semibold text-[#f4c984]">
              ⚠️ Atenção: Estritamente limitado a 80 participantes. Vendas por ordem de confirmação.
            </p>
          </div>

          {/* CTA Secundário */}
          <a
            href={BUY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center justify-center gap-3 rounded-full px-8 sm:px-12 py-5 text-lg sm:text-2xl font-black text-[#1a0f0a] hover:scale-105 transition-transform shadow-[0_0_40px_rgba(212,165,116,0.5)] w-full"
          >
            Garantir meu ingresso por R$ 84,00
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
