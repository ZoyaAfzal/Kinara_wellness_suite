import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "After two years of chronic back pain, Kinara's team gave me my life back. The level of care is truly world-class, comparable to the best clinics in London.",
    name: "James Anderson",
    role: "Senior Consultant, London, UK",
  },
  {
    quote: "The most thoughtful, personalised rehab I've ever experienced. They treated me like an athlete, not a patient. A hidden gem for anyone visiting from the States.",
    name: "Sarah Jenkins",
    role: "Professional Marathon Runner, New York, US",
  },
  {
    quote: "Post-surgery recovery felt manageable for the first time. I trust them with my mobility, full stop. Their approach is sophisticated and highly effective.",
    name: "Robert Miller",
    role: "Tech Executive, San Francisco, US",
  },
  {
    quote: "Booked a session for persistent neck strain during my business trip. Walked out feeling 10 years younger. Absolutely brilliant expertise.",
    name: "Emma Thompson",
    role: "Journalist, Manchester, UK",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-slate text-cream py-28 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-teal/5 blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center">
          <span className="text-amber text-xs uppercase tracking-[0.25em] font-semibold">Global Patient Stories</span>
          <h2 className="mt-3 font-display text-4xl lg:text-6xl text-white">Trust Across Borders</h2>
        </div>

        <div className="mt-20 relative h-[420px] sm:h-[340px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cream/[0.08] to-transparent border border-white/10 p-8 md:p-14 shadow-2xl backdrop-blur-sm flex flex-col justify-center"
            >
              <div className="absolute top-8 right-10 opacity-20">
                <Quote className="size-20 text-teal rotate-180" />
              </div>
              
              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber text-amber" />
                  ))}
                </div>
                
                <p className="font-display italic text-xl md:text-3xl text-cream/95 leading-relaxed max-w-4xl">
                  "{testimonials[idx].quote}"
                </p>
                
                <div className="mt-10 flex items-center gap-5">
                  <div className="size-16 rounded-2xl bg-gradient-to-tr from-teal to-teal-dark grid place-items-center font-display text-white text-2xl shadow-lg ring-4 ring-white/5">
                    {testimonials[idx].name[0]}
                  </div>
                  <div>
                    <div className="text-white text-xl font-display tracking-wide">{testimonials[idx].name}</div>
                    <div className="text-amber/80 text-sm font-medium uppercase tracking-widest mt-1">{testimonials[idx].role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === idx ? "bg-amber w-12" : "bg-white/20 w-4 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}