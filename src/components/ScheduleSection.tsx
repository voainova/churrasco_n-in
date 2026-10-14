import { motion } from "framer-motion";

const schedule = [
  { time: "19h00", title: "Recepção e Networking Inicial" },
  { time: "19h15", title: "Abertura Oficial e Celebração de Aniversário" },
  { time: "19h30", title: "Palestra Principal com Fernando Atalaia" },
  { time: "20h30", title: "Churrasco Gourmet pelo Chef Rodrigo + Open Networking" },
];

export default function ScheduleSection() {
  return (
    <section className="bg-[#0f0805] py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display font-black text-3xl sm:text-4xl text-center text-white mb-14"
        >
          <span className="text-gold">Programação</span> da Noite
        </motion.h2>

        {/* Timeline vertical */}
        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a574] via-[#f4c984]/50 to-transparent" />

          <div className="space-y-10">
            {schedule.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Dot dourado animado */}
                <motion.span
                  animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 * i }}
                  className="absolute left-[9px] top-1.5 h-3.5 w-3.5 rounded-full gradient-gold shadow-[0_0_15px_rgba(244,201,132,0.8)]"
                />
                <div className="immersion-card rounded-xl px-6 py-4">
                  <span className="inline-block rounded-full badge-exclusive px-3 py-0.5 text-sm font-bold mb-2">
                    {item.time}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
