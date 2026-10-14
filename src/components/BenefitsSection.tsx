import { motion } from "framer-motion";
import { Users, TrendingUp, UtensilsCrossed } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Networking de Alto Nível",
    desc: "Esteja na mesma sala que 80 empresários e gestores buscando parcerias.",
  },
  {
    icon: TrendingUp,
    title: "Conhecimento que Gera Caixa",
    desc: "Palestra exclusiva com Fernando Atalaia sobre Ecossistema Empresarial e estratégias para aumentar seu faturamento.",
  },
  {
    icon: UtensilsCrossed,
    title: "Experiência Gastronômica Premium",
    desc: "Churrasco gourmet cuidadosamente preparado pelo Chef Rodrigo.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#0f0805] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl sm:text-4xl text-center text-white mb-4"
        >
          O Que Você Vai <span className="text-gold">Viver</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="divider-gold max-w-xs mx-auto mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="immersion-card rounded-2xl p-8 text-center hover:border-[#f4c984]/60 transition-colors"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full gradient-gold shadow-[0_0_25px_rgba(212,165,116,0.4)]">
                <b.icon className="w-8 h-8 text-[#1a0f0a]" />
              </div>
              <h3 className="font-display font-bold text-xl text-white mb-3">{b.title}</h3>
              <p className="text-gray-400 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
