import FeaturedInsights from "@/components/FeaturedInsights";
import Method from "@/components/Method";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: pageMetadata.insights.title,
  description: pageMetadata.insights.description,
  keywords: pageMetadata.insights.keywords,
  url: pageMetadata.insights.url,
});

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
