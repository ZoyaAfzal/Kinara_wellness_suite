import { motion } from "motion/react";
import { Calendar, ArrowRight, User, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogClose } from "@/components/ui/dialog";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/blog-3.jpg";
import b4 from "@/assets/blog-4.jpg";

const posts = [
  { 
    title: "Best Exercises to Relieve Chronic Back Pain", 
    tag: "Tips & Tricks", 
    date: "April 27, 2026", 
    img: b1,
    readTime: "5 min read",
    author: "Dr. Aisha Noor",
    content: "Chronic back pain affects millions, but the right movement can be the best medicine. Focus on core stability and gentle stretching. Exercises like the 'Cat-Cow' stretch, 'Bird-Dog', and 'Pelvic Tilts' are excellent starting points for improving spinal mobility and reducing tension. Remember, consistency is key to long-term relief."
  },
  { 
    title: "How Physiotherapy Helps in Sports Injury Recovery", 
    tag: "Tips & Tricks", 
    date: "April 27, 2026", 
    img: b2,
    readTime: "6 min read",
    author: "Dr. Hamza Raza",
    content: "Sports injuries require a specialized approach to ensure athletes return to peak performance. Physiotherapy doesn't just treat the injury; it addresses the underlying biomechanical issues. Through progressive loading, functional training, and manual therapy, we help athletes build resilience and prevent future setbacks."
  },
  { 
    title: "Simple Stretches to Improve Flexibility", 
    tag: "Tips & Tricks", 
    date: "April 27, 2026", 
    img: b3, 
    readTime: "4 min read",
    author: "Dr. Sara Malik",
    content: "Flexibility is a cornerstone of physical health. Incorporating dynamic stretching into your morning routine can significantly improve your range of motion and reduce the risk of muscle strains. Focus on major muscle groups: hamstrings, hip flexors, and shoulders to maintain a supple, pain-free body."
  },
  { 
    title: "Common Causes of Joint Pain & How to Treat Them", 
    tag: "Sports Therapy", 
    date: "April 27, 2026", 
    img: b4,
    readTime: "7 min read",
    author: "Dr. Aisha Noor",
    content: "Joint pain can stem from inflammation, overuse, or structural issues. Early intervention through physiotherapy is crucial. We use evidence-based modalities like joint mobilization, strengthening exercises, and lifestyle modifications to manage arthritis and other joint-related conditions effectively."
  },
];

export function Blog() {
  return (
    <section id="blog" className="bg-cream py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-amber-dark text-xs uppercase tracking-[0.25em]">Journal</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl text-slate">Insights from our therapists</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <span className="inline-block bg-teal/10 text-teal text-xs rounded-full px-3 py-1">{p.tag}</span>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate/50">
                  <Calendar className="size-3.5" />
                  {p.date}
                </div>
                <h3 className="mt-3 font-display text-lg text-slate leading-snug group-hover:text-teal transition-colors">
                  {p.title}
                </h3>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="mt-4 inline-flex items-center gap-1.5 text-teal text-sm font-medium">
                      Read more
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 transition" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl bg-cream text-slate border-slate/10 max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="bg-teal/10 text-teal text-xs rounded-full px-3 py-1 font-medium">{p.tag}</span>
                        <div className="flex items-center gap-1.5 text-xs text-slate/50">
                          <Clock className="size-3.5" />
                          {p.readTime}
                        </div>
                      </div>
                      <DialogTitle className="font-display text-3xl text-slate leading-tight">{p.title}</DialogTitle>
                      <DialogDescription className="hidden">Detailed article insight</DialogDescription>
                    </DialogHeader>
                    
                    <div className="mt-6 space-y-6">
                      <div className="rounded-2xl overflow-hidden aspect-video">
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      
                      <div className="flex items-center gap-4 py-4 border-y border-slate/10">
                        <div className="size-10 rounded-full bg-slate-light grid place-items-center">
                          <User className="size-5 text-teal" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold">{p.author}</div>
                          <div className="text-xs text-slate/50">Senior Therapist · {p.date}</div>
                        </div>
                      </div>

                      <div className="text-lg leading-relaxed text-slate/80">
                        <p>{p.content}</p>
                        <p className="mt-4">Our therapists are dedicated to providing the latest evidence-based insights to help you maintain your health between sessions. If you're experiencing pain, we recommend booking a personalized consultation to address your specific needs.</p>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <DialogClose asChild>
                          <button className="bg-slate text-cream px-6 py-2.5 rounded-full font-semibold hover:bg-teal transition">
                            Close Article
                          </button>
                        </DialogClose>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}