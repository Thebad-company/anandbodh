import SoleusDeepDive from "@/components/SoleusDeepDive";
import StatsBanner from "@/components/StatsBanner";
import OutcomesGrid from "@/components/OutcomesGrid";
import Method from "@/components/Method";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Soleus Activation | Anandbodh™ – Revolutionary Wellness Protocol",
  description: "Discover the science-backed Soleus Activation protocol that reduces blood sugar by 50% and increases metabolic rate by 6x.",
};

export default function SoleusPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Soleus Activation Protocol</h1>
            <p>Revolutionary wellness technique backed by iScience research</p>
          </div>
        </section>
        
        <StatsBanner />
        <SoleusDeepDive />
        <OutcomesGrid />
        <Method />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}