import Community from "@/components/Community";
import ForumsActivity from "@/components/ForumsActivity";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Community | Anandbodh™ – Join The Happy Life",
  description: "Connect with like-minded individuals on their wellness journey. Join our active community of 10,000+ members.",
};

export default function CommunityPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>The Happy Life Community</h1>
            <p>Connect, learn, and grow with 10,000+ members on their wellness journey</p>
          </div>
        </section>
        
        <Community />
        <ForumsActivity />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}