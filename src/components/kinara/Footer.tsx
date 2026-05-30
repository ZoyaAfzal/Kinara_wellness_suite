import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Youtube, ArrowRight } from "lucide-react";

const cols = [
  { title: "Useful Links", items: ["Home", "About", "Blog", "Contact"] },
  { title: "Utility Pages", items: ["404 Page", "License", "Style Guide", "Change-Log"] },
  { title: "Services", items: ["Pain Management", "Sports Rehab", "Post-Surgery", "Geriatric"] },
];

export function Footer() {
  return (
    <footer className="bg-slate text-cream pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr] gap-12">
          <div>
            <div className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M6 26C10 22 14 22 16 18C18 14 22 14 26 10" stroke="oklch(0.65 0.085 195)" strokeWidth="2.4" strokeLinecap="round" />
                <circle cx="8" cy="24" r="2" fill="oklch(0.78 0.14 75)" />
                <circle cx="24" cy="12" r="2" fill="oklch(0.78 0.14 75)" />
              </svg>
              <span className="font-display text-2xl tracking-wider">KINARA</span>
            </div>
            <p className="mt-5 text-cream/60 text-sm max-w-xs">
              Expert physiotherapy & chiropractic care, built around your body and your story.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4 }}
                  className="size-10 rounded-full bg-cream/5 border border-white/10 grid place-items-center text-cream/70 hover:text-teal-light hover:border-teal/40 transition"
                >
                  <Icon className="size-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-cream font-display text-lg mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.items.map((it) => (
                  <li key={it}>
                    <a href="#" className="relative inline-block text-cream/60 hover:text-teal-light transition group text-sm">
                      {it}
                      <span className="absolute left-0 -bottom-0.5 h-px w-full bg-teal-light origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-cream font-display text-lg mb-4">Newsletter</h4>
            <p className="text-cream/60 text-sm mb-4">Recovery tips, stretches and clinic updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="you@email.com"
                className="flex-1 bg-cream/5 border border-white/10 rounded-l-full px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-teal"
              />
              <button className="bg-amber text-slate px-4 rounded-r-full hover:bg-amber-light transition">
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex justify-end items-center text-xs text-cream/40">
          <a 
            href="https://axistechgroup.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-amber transition-colors"
          >
            Powered by AxisTechGroup
          </a>
        </div>
      </div>
    </footer>
  );
}