import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="relative bg-cream-dark">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-slate" style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)" }} />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <h2 className="font-display text-4xl lg:text-6xl text-slate leading-tight">
          Ready to Start <br /> Your Recovery?
        </h2>

        <div className="flex justify-center lg:justify-end">
          <motion.a
            href="#book"
            whileHover={{ scale: 1.08 }}
            className="relative size-56 rounded-full bg-teal text-cream grid place-items-center group"
          >
            <svg className="absolute inset-0 animate-spin-slow" viewBox="0 0 200 200">
              <defs>
                <path id="circle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
              </defs>
              <text fontSize="13" letterSpacing="3" fill="oklch(0.88 0.045 190)" fontFamily="var(--font-sans)">
                <textPath href="#circle">
                  CONTACT US · GET IN TOUCH · BOOK NOW · KINARA ·
                </textPath>
              </text>
            </svg>
            <div className="size-20 rounded-full bg-amber grid place-items-center text-slate group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight className="size-8" />
            </div>
          </motion.a>
        </div>
      </div>

      <div className="relative bg-slate">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-14">
          <motion.a
            href="#book"
            whileHover={{ scale: 1.02 }}
            className="block text-center rounded-full bg-amber text-slate py-6 font-display text-2xl md:text-3xl shadow-[0_20px_60px_-20px_oklch(0.78_0.14_75/0.5)]"
          >
            Book Free Consultation Today →
          </motion.a>
        </div>
      </div>
    </section>
  );
}