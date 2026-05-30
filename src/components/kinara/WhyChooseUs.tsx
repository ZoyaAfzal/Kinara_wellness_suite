import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import c1 from "@/assets/clinic-1.jpg";
import c2 from "@/assets/clinic-2.jpg";
import c3 from "@/assets/clinic-3.jpg";
import s1 from "@/assets/service-1.jpg";
import s2 from "@/assets/service-2.jpg";

const features = [
  "Personalized Treatment Plans",
  "Evidence-Based Techniques",
  "State-of-the-Art Equipment",
  "Multilingual Care Team",
];

const faqs = [
  { q: "What conditions do you treat?", a: "From chronic back pain and sports injuries to post-surgical recovery, posture issues, and age-related mobility loss - if it slows you down, we can help." },
  { q: "How long does a session last?", a: "Initial assessments run 60 minutes. Follow-up sessions are typically 45 minutes, tailored to your protocol." },
  { q: "Do I need a referral?", a: "No referral is required. You can book directly with our team and we'll coordinate with your physician when needed." },
  { q: "Is physiotherapy covered by insurance?", a: "Most major insurers in Pakistan cover physiotherapy. We'll verify your benefits before your first appointment." },
];

const strip = [c1, s1, c2, s2, c3, c1, s1, c2];

export function WhyChooseUs() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-cream py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl lg:text-5xl text-slate leading-tight"
          >
            Why Choose <br /> Kinara Clinic?
          </motion.h2>
          <p className="mt-6 text-slate/70 max-w-md">
            We pair clinical precision with the kind of warmth that makes recovery
            feel less like a chore and more like a return home.
          </p>
          <ul className="mt-10 space-y-4">
            {features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-center gap-4"
              >
                <span className="size-9 rounded-full bg-teal/15 grid place-items-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <motion.path
                      d="M5 12.5l4.5 4.5L19 7"
                      stroke="oklch(0.52 0.07 195)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.12 }}
                    />
                  </svg>
                </span>
                <span className="text-slate font-medium">{f}</span>
              </motion.li>
            ))}
          </ul>
          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-teal text-cream px-6 py-3 font-medium hover:bg-teal-dark transition">
            Explore Our Approach
          </button>

          <div className="mt-14">
            <h3 className="text-xs uppercase tracking-[0.25em] text-amber-dark mb-4">FAQ</h3>
            <div className="divide-y divide-slate/10 border-y border-slate/10">
              {faqs.map((f, i) => (
                <div key={f.q} className={`py-4 ${open === i ? "border-l-2 border-teal pl-4" : "pl-4"}`}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-slate">{f.q}</span>
                    <ChevronDown
                      className={`size-5 text-amber transition-transform ${open === i ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-slate/70 text-sm leading-relaxed">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Auto-scrolling image strip */}
        <div className="relative overflow-hidden rounded-3xl h-[560px] lg:sticky lg:top-28 bg-cream-dark">
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 flex gap-4 p-4">
            <ScrollVertical imgs={strip.slice(0, 4)} reverse={false} />
            <ScrollVertical imgs={strip.slice(2, 6)} reverse={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollVertical({ imgs, reverse }: { imgs: string[]; reverse: boolean }) {
  return (
    <div className="flex-1 overflow-hidden">
      <motion.div
        animate={{ y: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-4"
      >
        {[...imgs, ...imgs].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            loading="lazy"
            className="w-full h-56 object-cover rounded-2xl hover:scale-105 hover:ring-2 hover:ring-teal transition"
          />
        ))}
      </motion.div>
    </div>
  );
}