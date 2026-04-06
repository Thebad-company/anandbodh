import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "The Science of Stress: How Chronic Stress Alters Brain and Body | Anandbodh™",
  description: "Chronic stress rewires the brain, disrupts hormones, and directly causes lifestyle disorders. Understanding this is the first step to reversal.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="blog-post-page">
        <article className="blog-post-content">
          <div className="container">
            <div className="blog-post-meta" style={{ marginBottom: "2rem" }}>
              <span className="blog-post-category">💗 Metabolic Health</span>
              <span className="blog-post-date">March 12, 2025</span>
              <span className="blog-post-read-time">10 min read</span>
            </div>
            <h1 style={{ marginBottom: "1rem" }}>The Science of Stress: How Chronic Stress Alters Brain and Body</h1>
            <p className="blog-post-excerpt" style={{ marginBottom: "2rem" }}>
              Chronic stress rewires the brain, disrupts hormones, and directly causes lifestyle disorders. Understanding this is the first step to reversal.
            </p>
            <div className="blog-post-body">
              <div className="blog-post-image-hero">
                <Image
                  src="/blog/blog-stress-science.png"
                  alt="The Science of Stress"
                  width={1200}
                  height={630}
                  priority
                  className="blog-hero-image"
                />
              </div>

              <h2>Understanding the Stress Response</h2>
              <p>
                Stress isn't inherently bad. In fact, acute stress — the kind our ancestors experienced when facing a predator — is a survival mechanism. The problem arises when stress becomes chronic, a constant companion in modern life.
              </p>

              <h2>What Happens During Chronic Stress</h2>
              <p>
                When you're under chronic stress, your body remains in a perpetual state of "fight or flight." This triggers a cascade of physiological changes:
              </p>
              <ul>
                <li><strong>Cortisol floods your system</strong> — disrupting metabolism, sleep, and immune function</li>
                <li><strong>Inflammation increases</strong> — creating the foundation for chronic disease</li>
                <li><strong>Blood sugar spikes</strong> — leading to insulin resistance and diabetes</li>
                <li><strong>Blood pressure rises</strong> — damaging cardiovascular health</li>
                <li><strong>Digestion slows</strong> — causing gut issues and nutrient malabsorption</li>
              </ul>

              <div className="blog-callout">
                <div className="callout-icon">⚠️</div>
                <div className="callout-content">
                  <strong>Critical Insight:</strong> Chronic stress is the root cause of 75-90% of all doctor visits, according to the American Institute of Stress.
                </div>
              </div>

              <h2>How Stress Rewires Your Brain</h2>
              <p>
                Prolonged stress literally changes your brain structure:
              </p>
              <ul>
                <li><strong>Shrinks the hippocampus</strong> — impairing memory and learning</li>
                <li><strong>Enlarges the amygdala</strong> — increasing fear and anxiety responses</li>
                <li><strong>Weakens the prefrontal cortex</strong> — reducing decision-making ability</li>
                <li><strong>Disrupts neuroplasticity</strong> — making it harder to form new neural pathways</li>
              </ul>

              <h2>The Stress-Disease Connection</h2>
              <p>
                Research has established clear links between chronic stress and major health conditions:
              </p>
              <ol>
                <li><strong>Type 2 Diabetes:</strong> Stress hormones increase blood sugar and insulin resistance</li>
                <li><strong>Heart Disease:</strong> Chronic inflammation damages blood vessels</li>
                <li><strong>Autoimmune Disorders:</strong> Stress dysregulates immune function</li>
                <li><strong>Thyroid Issues:</strong> Cortisol suppresses thyroid hormone production</li>
                <li><strong>Obesity:</strong> Stress triggers emotional eating and fat storage</li>
              </ol>

              <div className="blog-quote">
                <blockquote>
                  "The greatest weapon against stress is our ability to choose one thought over another."
                </blockquote>
                <cite>— William James</cite>
              </div>

              <h2>Breaking the Stress Cycle</h2>
              <p>
                The good news? You can reverse stress-induced damage through targeted interventions:
              </p>
              <ul>
                <li><strong>Meditation:</strong> Reduces cortisol by 20-30% in just 8 weeks</li>
                <li><strong>Soleus Activation:</strong> Improves metabolic health and stress resilience</li>
                <li><strong>Ayurvedic Practices:</strong> Balances doshas and restores homeostasis</li>
                <li><strong>Community Support:</strong> Social connection is a powerful stress buffer</li>
              </ul>

              <div className="blog-post-cta">
                <h3>Ready to Address Stress at Its Root?</h3>
                <p>Join our comprehensive wellness programs designed to reverse stress-induced damage.</p>
                <Link href="/programs" className="btn btn-primary">
                  Explore Programs →
                </Link>
              </div>
            </div>

            <aside className="blog-post-sidebar">
              <div className="sidebar-card">
                <h4>Related Articles</h4>
                <ul className="related-posts">
                  <li><Link href="/blog/meditation-as-medicine">Meditation as Medicine</Link></li>
                  <li><Link href="/blog/emotional-detox">Emotional Detox</Link></li>
                  <li><Link href="/blog/soleus-muscle">The Soleus Muscle</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
