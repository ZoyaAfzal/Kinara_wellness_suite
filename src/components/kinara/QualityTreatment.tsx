import { motion } from "motion/react";
import { Award, ShieldCheck } from "lucide-react";
import treatmentImg from "@/assets/treatment.jpg";

export function QualityTreatment() {
  return (
    <section className="bg-cream py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl lg:text-5xl text-slate text-center max-w-3xl mx-auto"
        >
          Committed to Providing Top Quality Treatment
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:auto-rows-[220px]">
          <Cell delay={0} className="md:col-span-1">
            <div className="font-display text-6xl text-slate group-hover:text-amber transition-colors">10+</div>
            <div className="mt-2 text-sm uppercase tracking-widest text-slate/60">Years Experience</div>
          </Cell>
          <Cell delay={0.1} className="md:col-span-1 md:row-span-2 !p-0 overflow-hidden">
            <img
              src={treatmentImg}
              alt="Chiropractic treatment"
              loading="lazy"
              width={1200}
              height={1400}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </Cell>
          <Cell delay={0.2} className="md:col-span-1 bg-teal text-cream">
            <div className="font-display text-3xl">Proven Recovery Plans</div>
            <div className="mt-3 text-cream/70 text-sm">Designed around your body, your goals, and your timeline.</div>
          </Cell>
          <Cell delay={0.3}>
            <Award className="size-8 text-teal" />
            <div className="mt-3 font-display text-2xl text-slate">Certified Therapists</div>
            <div className="text-sm text-slate/60 mt-1">DPT, MSc & ICF-licensed practitioners.</div>
          </Cell>
          <Cell delay={0.4} className="bg-slate text-cream">
            <ShieldCheck className="size-7 text-amber" />
            <div className="mt-3 font-display text-6xl group-hover:text-amber transition-colors">98%</div>
            <div className="text-xs uppercase tracking-widest text-cream/60 mt-1">Success Rate</div>
          </Cell>
        </div>
      </div>
    </section>
  );
}

function Cell({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6 }}
      className={`group relative rounded-3xl bg-cream-dark p-7 border border-transparent hover:border-teal/40 hover:shadow-xl transition-all ${className}`}
    >
      {children}
    </motion.div>
  );
}