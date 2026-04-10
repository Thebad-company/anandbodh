import Hero from "@/components/Hero";
import Method from "@/components/Method";
import StatsBanner from "@/components/StatsBanner";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: pageMetadata.about.title,
  description: pageMetadata.about.description,
  keywords: pageMetadata.about.keywords,
  url: pageMetadata.about.url,
});

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
