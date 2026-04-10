import Community from "@/components/Community";
import ForumsActivity from "@/components/ForumsActivity";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: pageMetadata.community.title,
  description: pageMetadata.community.description,
  keywords: pageMetadata.community.keywords,
  url: pageMetadata.community.url,
});

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
