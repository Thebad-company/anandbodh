import Programs from "@/components/Programs";
import Method from "@/components/Method";
import OutcomesGrid from "@/components/OutcomesGrid";
import StatsBanner from "@/components/StatsBanner";
import SoleusDeepDive from "@/components/SoleusDeepDive";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateMetadata, pageMetadata, generateBreadcrumbSchema } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: pageMetadata.programs.title,
  description: pageMetadata.programs.description,
  keywords: pageMetadata.programs.keywords,
  url: pageMetadata.programs.url,
  image: "https://anandbodh.com/og-programs.jpg",
  type: "website",
});

export default function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Wellness Programs</h1>
            <p>Evidence-based tools to reverse lifestyle disorders and increase your healthspan</p>
          </div>
        </section>
        
        <Programs />
        <Method />
        <OutcomesGrid />
        <StatsBanner />
        <SoleusDeepDive />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}