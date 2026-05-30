import { motion } from "motion/react";
import { Linkedin, Instagram, ArrowRight } from "lucide-react";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

const team = [
  { name: "Dr. Aisha Noor", role: "Sports Rehabilitation", img: t1 },
  { name: "Dr. Hamza Raza", role: "Spinal & Chiropractic", img: t2 },
  { name: "Dr. Sara Malik", role: "Geriatric Physiotherapy", img: t3 },
];

export function Team() {
  return (
    <section id="team" className="bg-cream py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-slate leading-tight">
              Our Expert Therapists
            </h2>
            <p className="mt-4 text-slate/70 max-w-md">
              Senior clinicians who actually listen and design programs around your life.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-slate"
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate via-slate/40 to-transparent opacity-80 group-hover:from-teal-dark transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl text-white">{p.name}</h3>
                <div className="text-cream/70 text-sm mt-1">{p.role}</div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1 }}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-5 transition-all duration-500 mt-4 flex gap-3"
                >
                  <Social icon={<Linkedin className="size-4" />} />
                  <Social icon={<Instagram className="size-4" />} />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Social({ icon }: { icon: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.25, rotate: -5 }}
      className="size-9 rounded-full bg-cream/90 text-slate grid place-items-center"
    >
      {icon}
    </motion.button>
  );
}