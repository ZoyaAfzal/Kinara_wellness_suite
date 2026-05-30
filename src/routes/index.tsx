import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/kinara/Navbar";
import { Hero } from "@/components/kinara/Hero";
import { StatsIntro } from "@/components/kinara/StatsIntro";
import { QualityTreatment } from "@/components/kinara/QualityTreatment";
import { Services } from "@/components/kinara/Services";
import { WhyChooseUs } from "@/components/kinara/WhyChooseUs";
import { Testimonials } from "@/components/kinara/Testimonials";
import { Team } from "@/components/kinara/Team";
import { Booking } from "@/components/kinara/Booking";
import { Blog } from "@/components/kinara/Blog";
import { CTABanner } from "@/components/kinara/CTABanner";
import { Footer } from "@/components/kinara/Footer";
import { ScrollTop } from "@/components/kinara/ScrollTop";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kinara — Premium Physiotherapy & Chiropractic Clinic" },
      { name: "description", content: "Expert physiotherapy & chiropractic care that restores mobility, eases pain and helps you thrive." },
      { property: "og:title", content: "Kinara — Premium Physiotherapy & Chiropractic" },
      { property: "og:description", content: "Personalised, evidence-based recovery from Pakistan's #1 chiropractic clinic." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream text-slate overflow-x-clip">
      <Navbar />
      <Hero />
      <StatsIntro />
      <QualityTreatment />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <Booking />
      <Blog />
      <CTABanner />
      <Footer />
      <ScrollTop />
    </main>
  );
}
