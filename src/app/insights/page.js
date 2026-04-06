import FeaturedInsights from "@/components/FeaturedInsights";
import Method from "@/components/Method";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Insights | Anandbodh™ – Wellness Knowledge Base",
  description: "Explore our comprehensive knowledge base on wellness, Ayurveda, meditation, and lifestyle disorder reversal.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Wellness Insights</h1>
            <p>Evidence-based knowledge to guide your wellness journey</p>
          </div>
        </section>
        
        <FeaturedInsights />
        <Method />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}