import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogClose } from "@/components/ui/dialog";
import s1 from "@/assets/service-1.jpg";
import s2 from "@/assets/service-2.jpg";
import s3 from "@/assets/service-3.jpg";
import c1 from "@/assets/clinic-1.jpg";
import c2 from "@/assets/clinic-2.jpg";
import c3 from "@/assets/clinic-3.jpg";

const services = [
  { 
    title: "Pain Management", 
    desc: "Evidence-based protocols to reduce chronic and acute pain without dependence on medication.", 
    detailedDesc: "Our comprehensive pain management approach combines manual therapy, specialized exercises, and education to help you understand and manage your symptoms. We focus on long-term relief and functional improvement.",
    benefits: ["Chronic pain relief", "Improved mobility", "Non-invasive techniques", "Personalized recovery plans"],
    img: s2 
  },
  { 
    title: "Post-Surgery Recovery", 
    desc: "Guided rehabilitation that gets you safely back to full function after orthopedic surgery.", 
    detailedDesc: "Recovering from surgery requires a careful, phased approach. We work closely with your surgeon's protocols to ensure you regain strength, range of motion, and confidence in your body.",
    benefits: ["Post-orthopedic care", "Scar tissue management", "Strength restoration", "Functional training"],
    img: c1 
  },
  { 
    title: "Sports Rehabilitation", 
    desc: "Performance-driven recovery for athletes returning from injury, stronger than before.", 
    detailedDesc: "Whether you're a professional athlete or a weekend warrior, we help you return to your sport safely and with better performance. We analyze your movement patterns to prevent future injuries.",
    benefits: ["Injury prevention", "Performance optimization", "Gait analysis", "Sport-specific drills"],
    img: s1 
  },
  { 
    title: "Geriatric Physiotherapy", 
    desc: "Gentle, balance-focused care that helps older adults stay mobile, confident and independent.", 
    detailedDesc: "Aging shouldn't mean losing independence. Our geriatric care focuses on balance, fall prevention, and maintaining the strength needed for daily activities and a high quality of life.",
    benefits: ["Fall prevention", "Balance training", "Arthritis management", "Mobility support"],
    img: s3 
  },
  { 
    title: "Postural Correction Therapy", 
    desc: "Fix the root cause of neck, shoulder and back pain with structured postural rehab.", 
    detailedDesc: "Modern lifestyles often lead to postural imbalances. We identify these issues and provide targeted exercises and ergonomic advice to correct your alignment and reduce strain-related pain.",
    benefits: ["Ergonomic assessment", "Alignment correction", "Muscle balance", "Spine health"],
    img: c2 
  },
  { 
    title: "Workplace Injury Rehabilitation", 
    desc: "Targeted programs for desk strain, repetitive injuries and on-site trauma.", 
    detailedDesc: "Work-related injuries can impact your career and life. We specialize in treating RSI, carpal tunnel, and back strain, while providing strategies to make your workspace more supportive.",
    benefits: ["RSI treatment", "Ergonomic advice", "Rapid return to work", "Stress management"],
    img: c3 
  },
];

export function Services() {
  return (
    <section id="services" className="bg-slate text-cream py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="text-amber text-xs uppercase tracking-[0.25em]">Physiotherapy Services</span>
          <h2 className="mt-4 font-display text-4xl lg:text-6xl text-white leading-tight">
            Expert Care Tailored to <br className="hidden md:block" /> Your Recovery Needs
          </h2>
        </motion.div>

        <div className="mt-16 space-y-6">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group relative grid md:grid-cols-[1fr_280px] gap-6 items-center rounded-3xl bg-cream/[0.04] border border-white/10 hover:bg-teal/15 hover:border-l-4 hover:border-l-amber transition-all p-6 md:p-8 overflow-hidden ${
                i % 2 === 1 ? "md:[&>img]:order-first" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="text-amber/70 text-xs font-mono mb-3">0{i + 1}</div>
                <h3 className="font-display text-3xl text-white group-hover:text-amber transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-cream/70 max-w-xl">{s.desc}</p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="mt-5 inline-flex items-center gap-2 text-teal-muted group-hover:text-amber transition-colors">
                      Read more
                      <ArrowRight className="size-4 group-hover:translate-x-2 transition-transform" />
                    </button>
                  </DialogTrigger>
                  <DialogContent 
                    className="sm:max-w-2xl bg-slate text-cream border-white/10 max-h-[90vh] overflow-y-auto"
                    onCloseAutoFocus={(e) => e.preventDefault()}
                  >
                    <DialogHeader>
                      <DialogTitle className="font-display text-3xl text-white">{s.title}</DialogTitle>
                      <DialogDescription className="text-teal-muted mt-2">
                        Professional Physiotherapy Services at Kinara
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6 space-y-6">
                      <div className="rounded-2xl overflow-hidden h-64">
                        <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-lg leading-relaxed text-cream/80">
                        {s.detailedDesc}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {s.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="size-4 text-amber" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-white/10 flex justify-end">
                        <DialogClose asChild>
                          <a 
                            href="#book" 
                            className="bg-amber text-slate px-6 py-2.5 rounded-full font-semibold hover:bg-amber-light transition"
                          >
                            Book an Appointment
                          </a>
                        </DialogClose>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className={`relative h-44 md:h-48 rounded-2xl overflow-hidden ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}