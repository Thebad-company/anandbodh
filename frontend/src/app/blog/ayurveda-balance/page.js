import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Living In Tune: How Dosha Balance Creates Life Balance | Anandbodh™",
  description: "Each person has a unique constitutional blueprint (Prakriti). When your dosha is in balance, disease cannot take root — and vitality becomes your natural state.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="blog-post-page">
        <article className="blog-post-content">
          <div className="container">
            <div className="blog-post-meta" style={{ marginBottom: "2rem" }}>
              <span className="blog-post-category">
                <Icon name="Leaf" size={16} style={{ marginRight: "4px" }} />
                Ayurveda
              </span>
              <span className="blog-post-date">March 10, 2025</span>
              <span className="blog-post-read-time">12 min read</span>
            </div>
            <h1 style={{ marginBottom: "1rem" }}>Living In Tune: How Dosha Balance Creates Life Balance</h1>
            <p className="blog-post-excerpt" style={{ marginBottom: "2rem" }}>
              Each person has a unique constitutional blueprint (Prakriti). When your dosha is in balance, disease cannot take root — and vitality becomes your natural state.
            </p>
            <div className="blog-post-body">
              <div className="blog-post-image-hero">
                <Image
                  src="/blog/blog-ayurveda-balance.png"
                  alt="Living In Tune"
                  width={1200}
                  height={630}
                  priority
                  className="blog-hero-image"
                />
              </div>

              <h2>Understanding Your Unique Constitution</h2>
              <p>
                In Ayurveda, health isn't one-size-fits-all. Your Prakriti — your unique constitutional blueprint — determines what foods nourish you, what activities energize you, and what lifestyle choices support your wellbeing.
              </p>

              <h2>The Three Doshas Explained</h2>
              
              <h3>Vata: The Energy of Movement</h3>
              <p>
                Composed of air and space elements, Vata governs all movement in the body — from breathing to circulation to nerve impulses.
              </p>
              <ul>
                <li><strong>Physical traits:</strong> Thin build, dry skin, cold hands/feet</li>
                <li><strong>Mental traits:</strong> Creative, quick-thinking, enthusiastic</li>
                <li><strong>When balanced:</strong> Energetic, creative, flexible</li>
                <li><strong>When imbalanced:</strong> Anxious, scattered, insomnia, constipation</li>
              </ul>

              <h3>Pitta: The Energy of Transformation</h3>
              <p>
                Composed of fire and water, Pitta governs digestion, metabolism, and transformation at all levels.
              </p>
              <ul>
                <li><strong>Physical traits:</strong> Medium build, warm body, strong appetite</li>
                <li><strong>Mental traits:</strong> Intelligent, focused, ambitious</li>
                <li><strong>When balanced:</strong> Sharp mind, strong digestion, radiant skin</li>
                <li><strong>When imbalanced:</strong> Irritable, inflammatory conditions, acid reflux</li>
              </ul>

              <h3>Kapha: The Energy of Structure</h3>
              <p>
                Composed of earth and water, Kapha provides structure, lubrication, and stability.
              </p>
              <ul>
                <li><strong>Physical traits:</strong> Solid build, smooth skin, strong stamina</li>
                <li><strong>Mental traits:</strong> Calm, patient, compassionate</li>
                <li><strong>When balanced:</strong> Strong immunity, emotional stability, endurance</li>
                <li><strong>When imbalanced:</strong> Weight gain, lethargy, congestion, depression</li>
              </ul>

              <div className="blog-callout">
                <div className="callout-icon">💡</div>
                <div className="callout-content">
                  <strong>Key Insight:</strong> Most people are a combination of two doshas, with one being dominant. Understanding your unique blend is the first step to personalized wellness.
                </div>
              </div>

              <h2>Signs Your Doshas Are Out of Balance</h2>
              <p>
                Modern life tends to aggravate all three doshas, but especially Vata (stress, irregular schedules) and Pitta (competitive pressure, processed foods).
              </p>

              <h2>Balancing Your Doshas Through Lifestyle</h2>
              
              <h3>For Vata Imbalance:</h3>
              <ul>
                <li>Establish regular routines (meals, sleep, exercise)</li>
                <li>Choose warm, cooked, grounding foods</li>
                <li>Practice gentle, grounding yoga</li>
                <li>Use warming oils for self-massage</li>
                <li>Prioritize rest and relaxation</li>
              </ul>

              <h3>For Pitta Imbalance:</h3>
              <ul>
                <li>Avoid excessive heat (spicy foods, hot weather)</li>
                <li>Choose cooling, sweet foods</li>
                <li>Practice moderate, non-competitive exercise</li>
                <li>Cultivate patience and compassion</li>
                <li>Spend time in nature, especially near water</li>
              </ul>

              <h3>For Kapha Imbalance:</h3>
              <ul>
                <li>Engage in vigorous, stimulating exercise</li>
                <li>Choose light, warm, spicy foods</li>
                <li>Wake early and avoid daytime naps</li>
                <li>Seek variety and new experiences</li>
                <li>Practice energizing breathwork</li>
              </ul>

              <div className="blog-quote">
                <blockquote>
                  "When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need."
                </blockquote>
                <cite>— Ancient Ayurvedic Proverb</cite>
              </div>

              <h2>Seasonal Dosha Balance</h2>
              <p>
                Ayurveda recognizes that different seasons aggravate different doshas:
              </p>
              <ul>
                <li><strong>Fall/Early Winter:</strong> Vata season (dry, cold, windy)</li>
                <li><strong>Late Winter/Spring:</strong> Kapha season (cold, wet, heavy)</li>
                <li><strong>Summer:</strong> Pitta season (hot, intense, sharp)</li>
              </ul>

              <div className="blog-post-cta">
                <h3>Discover Your Dosha</h3>
                <p>Take our Ayurveda Longevity program to learn your unique constitution and personalized wellness plan.</p>
                <Link href="/programs/ayurveda" className="btn btn-primary">
                  Explore Ayurveda Program →
                </Link>
              </div>
            </div>

            <aside className="blog-post-sidebar">
              <div className="sidebar-card">
                <h4>Related Articles</h4>
                <ul className="related-posts">
                  <li><Link href="/blog/meditation-as-medicine">Meditation as Medicine</Link></li>
                  <li><Link href="/blog/emotional-detox">Emotional Detox</Link></li>
                  <li><Link href="/blog/stress-science">The Science of Stress</Link></li>
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
