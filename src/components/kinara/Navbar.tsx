import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X, Calendar } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#book" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 80));

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-teal origin-left z-[60]"
      />
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-slate/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-cream">
            <SpineLogo />
            <span className="font-display text-2xl tracking-wider">KINARA</span>
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-cream/80 hover:text-cream transition group"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-teal-light origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>
          <a
            href="#book"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-amber text-slate px-5 py-2.5 text-sm font-semibold hover:scale-[1.04] transition-transform"
          >
            <Calendar className="size-4" />
            Book Appointment
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-cream p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden bg-slate border-t border-white/10 px-6 py-6 flex flex-col gap-4"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setOpen(false)}
                className="text-cream/80 text-lg"
              >
                {l.label}
              </motion.a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber text-slate px-5 py-3 text-sm font-semibold"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}

function SpineLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M6 26C10 22 14 22 16 18C18 14 22 14 26 10"
        stroke="oklch(0.65 0.085 195)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="8" cy="24" r="2" fill="oklch(0.78 0.14 75)" />
      <circle cx="24" cy="12" r="2" fill="oklch(0.78 0.14 75)" />
    </svg>
  );
}