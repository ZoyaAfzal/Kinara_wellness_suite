import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles, Calendar } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const headline = ["Heal.", "Strengthen.", "Thrive."];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate text-cream pt-28 pb-24"
    >
      {/* Blobs */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-teal/15 blur-[120px] pointer-events-none"
          style={{
            width: 480,
            height: 480,
            top: `${[5, 40, 60, 20][i]}%`,
            left: `${[-10, 70, 20, 50][i]}%`,
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8 + i, repeat: Infinity, delay: i * 1.2 }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ghost watermark */}
      <div className="absolute inset-x-0 bottom-[-4vw] text-center pointer-events-none select-none">
        <span className="font-display text-[20vw] leading-none text-white/[0.03]">
          KINARA
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-teal-muted"
          >
            <Sparkles className="size-3.5 text-amber" />
            Pakistan's #1 Chiropractic Clinic
          </motion.div>

          <h1 className="mt-8 font-display font-medium text-white leading-[0.95]" style={{ fontSize: "clamp(3.5rem,7vw,6.5rem)" }}>
            {headline.map((word, i) => (
              <motion.span
                key={word}
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {word}
                <motion.span
                  className="inline-block ml-2 text-amber"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }}
                >
                  .
                </motion.span>
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 max-w-lg text-cream/70 text-lg leading-relaxed"
          >
            Expert physiotherapy & chiropractic solutions to restore your mobility
            and improve your quality of life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full bg-amber text-slate px-7 py-4 font-semibold hover:bg-amber-light transition"
            >
              Schedule Consultation
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Dialog>
              <DialogTrigger asChild>
                <button className="inline-flex items-center gap-2 rounded-full border border-teal-light/60 text-white px-7 py-4 font-medium hover:bg-teal/20 transition">
                  <Play className="size-4 fill-white" />
                  Watch Our Story
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden bg-slate border border-white/10 ring-0">
                <div className="aspect-video w-full flex flex-col items-center justify-center text-center p-10 bg-gradient-to-br from-slate to-teal-dark/40">
                  <div className="size-20 rounded-full bg-amber/20 grid place-items-center mb-6">
                    <Play className="size-10 text-amber animate-pulse" />
                  </div>
                  <h2 className="font-display text-4xl text-white mb-2">Our Story is Coming Soon</h2>
                  <p className="text-cream/60 max-w-sm">
                    We're currently filming our journey to show you how we've helped thousands heal and thrive. Stay tuned!
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-14 flex flex-wrap items-center gap-8 text-cream/80"
          >
            <Stat number="12k+" label="Satisfied Clients" />
            <span className="hidden sm:block h-10 w-px bg-white/15" />
            <Stat number="10+" label="Years Experience" />
            <span className="hidden sm:block h-10 w-px bg-white/15" />
            <Stat number="98%" label="Recovery Rate" />
          </motion.div>
        </div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden ring-2 ring-teal/40 shadow-2xl">
            <img
              src={heroImg}
              alt="Physiotherapist treating patient"
              width={1280}
              height={1600}
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate/40 via-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-4 bg-cream text-slate rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3"
          >
            <span className="size-2.5 rounded-full bg-amber animate-pulse" />
            <div>
              <div className="font-display text-xl leading-none">500+</div>
              <div className="text-xs text-slate/60 mt-1">Recoveries this month</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -top-4 -right-3 bg-slate-light/90 backdrop-blur border border-teal/30 text-cream rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
          >
            <div className="size-10 rounded-xl bg-teal/30 grid place-items-center">
              <Calendar className="size-5 text-teal-muted" />
            </div>
            <div className="text-xs">
              <div className="text-cream/60">Next slot</div>
              <div className="font-semibold">Today · 4:30 PM</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-white">{number}</div>
      <div className="text-xs uppercase tracking-widest text-cream/60 mt-1">{label}</div>
    </div>
  );
}