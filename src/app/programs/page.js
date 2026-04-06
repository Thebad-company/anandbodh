import Programs from "@/components/Programs";
import Method from "@/components/Method";
import OutcomesGrid from "@/components/OutcomesGrid";
import StatsBanner from "@/components/StatsBanner";
import SoleusDeepDive from "@/components/SoleusDeepDive";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Programs | Anandbodh™ – Evidence-Based Wellness",
  description: "Discover our comprehensive wellness programs including Soleus Activation, Ayurvedic protocols, and meditation techniques.",
};

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