import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Você é empreendedor/gestor e precisa expandir sua rede de contatos qualificada.",
  "Você quer aprender estratégias práticas de vendas e ecossistema de negócios.",
  "Você valoriza eventos bem organizados, com conteúdo de qualidade e gastronomia premium.",
];

export default function TargetAudienceSection() {
  return (
    <section className="gradient-dark py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl sm:text-4xl text-center text-white mb-14"
        >
          Para Quem É Este <span className="text-gold">Evento?</span>
        </motion.h2>

        <ul className="space-y-6">
          {items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              viewport={{ once: true }}
              className="immersion-card flex items-start gap-4 rounded-xl px-6 py-5"
            >
              <CheckCircle2 className="w-7 h-7 shrink-0 text-[#f4c984]" />
              <span className="text-lg text-gray-200">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
