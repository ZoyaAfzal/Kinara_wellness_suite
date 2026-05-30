import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "Pain Management", date: "", note: "" });

  return (
    <section id="book" className="bg-teal text-cream py-28 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-teal-light/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 size-[500px] rounded-full bg-amber/20 blur-3xl" />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl lg:text-5xl text-white"
        >
          Book Your Recovery Session
        </motion.h2>
        <p className="mt-4 text-cream/80">Choose a time that works for you. We'll confirm within 24 hours.</p>

        <div className="mt-12 rounded-3xl bg-teal-dark/40 backdrop-blur border border-white/15 p-6 md:p-10 text-left">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 flex flex-col items-center text-center"
              >
                <div className="size-16 rounded-full bg-amber grid place-items-center">
                  <Check className="size-8 text-slate" strokeWidth={3} />
                </div>
                <h3 className="font-display text-3xl text-white mt-6">You're booked.</h3>
                <p className="mt-2 text-cream/80">We'll contact you within 24 hours to confirm.</p>
              </motion.div>
            ) : (
              <motion.div key="form" exit={{ opacity: 0 }} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Input placeholder="Phone Number" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-xl bg-teal-dark/40 border border-white/20 text-white px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber"
                  >
                    {["Pain Management", "Post-Surgery Recovery", "Sports Rehab", "Geriatric Care", "Postural Correction"].map(
                      (s) => (
                        <option key={s} value={s} className="bg-slate">
                          {s}
                        </option>
                      )
                    )}
                  </select>
                  <Input type="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} />
                </div>
                <textarea
                  placeholder="Tell us about your condition"
                  rows={4}
                  value={form.note}
                  onChange={(e) => setForm({ ...form, note: e.target.value })}
                  className="w-full rounded-xl bg-teal-dark/40 border border-white/20 text-white placeholder:text-white/40 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber"
                />
                <button
                  onClick={() => setSent(true)}
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-amber text-slate py-4 font-semibold hover:bg-amber-light transition"
                >
                  Confirm Appointment
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
}: {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl bg-teal-dark/40 border border-white/20 text-white placeholder:text-white/40 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-amber"
    />
  );
}