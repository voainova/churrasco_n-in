import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Posso levar um colega de empresa?",
    a: (
      <>
        Sim! As vagas são individuais, basta que cada um adquira seu ingresso pelo
        link. <strong className="text-[#f4c984]">Dica:</strong> Temos planos de
        patrocínio corporativo que contemplam ingressos em grupo e dão a
        oportunidade de sua equipe ganhar um treinamento completo. Se interessar,
        entre em contato com o Douglas pelo WhatsApp: (48) 99912-8875.
      </>
    ),
  },
  {
    q: "Há opções vegetarianas ou restrições alimentares?",
    a: (
      <>
        Sim, o Chef Rodrigo prepara opções especiais. Basta nos avisar no ato da
        compra ou enviar uma mensagem após a confirmação.
      </>
    ),
  },
  {
    q: "Como funciona o pagamento?",
    a: (
      <>
        O pagamento é processado de forma 100% segura através da plataforma de
        vendas no link de compra.
      </>
    ),
  },
  {
    q: "Tem estacionamento no local?",
    a: (
      <>
        Sim! Há estacionamento gratuito no local, porém com número de vagas
        limitadas. Portanto, é importante chegar cedo para garantir sua vaga.
      </>
    ),
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="gradient-dark py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl sm:text-4xl text-center text-white mb-14"
        >
          Perguntas <span className="text-gold">Frequentes</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="immersion-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-lg text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#f4c984] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-gray-300 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
