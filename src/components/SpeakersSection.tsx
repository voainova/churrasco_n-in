import { motion } from "framer-motion";
import { Mic, ChefHat } from "lucide-react";

const speakers = [
  {
    icon: Mic,
    name: "Fernando Atalaia",
    role: "Estrategista de Ecossistema Empresarial",
    desc: "Foco em vendas e conexões estratégicas: Fernando conduz uma palestra de alto nível sobre Ecossistema Empresarial e como transformar contatos em receita.",
  },
  {
    icon: ChefHat,
    name: "Chef Rodrigo",
    role: "Experiência Gourmet",
    desc: "Foco em cortes selecionados e dinâmica de serviço sem filas. Um churrasco premium assinado por quem entende de hospitalidade.",
  },
];

export default function SpeakersSection() {
  return (
    <section className="gradient-dark py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl sm:text-4xl text-center text-white mb-14"
        >
          Quem Vai <span className="text-gold">Transformar Sua Noite</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              viewport={{ once: true }}
              className="immersion-card rounded-2xl p-8 sm:p-10 flex flex-col gap-5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full gradient-gold">
                  <s.icon className="w-7 h-7 text-[#1a0f0a]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">{s.name}</h3>
                  <p className="text-[#f4c984] font-semibold">{s.role}</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
