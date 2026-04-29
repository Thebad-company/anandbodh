import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ForumsList from "@/components/ForumsList";
import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: "Community Forums - Anandbodh",
  description: "Join discussions, share experiences, and connect with wellness enthusiasts in our community forums.",
  keywords: ["community", "forums", "wellness discussions", "ayurveda", "health community"],
  url: "/forums",
});

export default function ForumsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Community Forums</h1>
            <p>Join the conversation and connect with others on their wellness journey</p>
          </div>
        </section>
        
        <ForumsList />
      </main>
      <Footer />
    </>
  );
}