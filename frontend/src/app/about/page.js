import Hero from "@/components/Hero";
import Method from "@/components/Method";
import StatsBanner from "@/components/StatsBanner";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us | Anandbodh™ – The Happy Life",
  description: "Learn about our evidence-based approach to wellness, combining Physical, Mental, Emotional & Spiritual health into one integrated system.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Method />
        <StatsBanner />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}