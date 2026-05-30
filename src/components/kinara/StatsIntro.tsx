import { motion, useInView, useMotionValue, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.floor(v)),
    });
    return controls.stop;
  }, [inView, to, mv]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const ribbonItems = [
  "Pain Management",
  "Sports Rehabilitation",
  "Post-Surgery Recovery",
  "Geriatric Physiotherapy",
  "Spinal Alignment",
  "Postural Correction",
];

export function StatsIntro() {
  return (
    <section id="about" className="bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-display text-teal leading-none" style={{ fontSize: "clamp(6rem,14vw,11rem)" }}>
            <Counter to={12} />k
          </div>
          <div className="mt-4 text-slate/60 text-lg">+ Satisfied Clients across Pakistan</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="inline-block text-amber-dark text-xs uppercase tracking-[0.25em] mb-4">
            About Kinara
          </span>
          <h2 className="font-display text-4xl lg:text-5xl text-slate leading-tight">
            Expert Physiotherapy <br /> Tailored for You
          </h2>
          <p className="mt-6 text-slate/70 leading-relaxed">
            From elite athletes to grandparents recovering from surgery, we craft
            evidence-based recovery plans that meet you exactly where you are,
            and move you toward where you want to be.
          </p>
          <a href="#services" className="group mt-8 inline-flex items-center gap-2 text-teal font-medium">
            Learn More
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Marquee ribbon */}
      <div className="relative bg-teal text-cream py-6 overflow-hidden border-y border-teal-dark/20">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...ribbonItems, ...ribbonItems, ...ribbonItems].map((it, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-display text-2xl">{it}</span>
              <span className="text-amber text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}