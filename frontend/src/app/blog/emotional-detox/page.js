import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Emotional Detox: Healing Beyond the Physical Body | Anandbodh™",
  description: "Emotions get stored in our tissues. Learn how to release trapped emotional energy and create space for true healing and transformation.",
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
                <Icon name="Heart" size={16} style={{ marginRight: "4px" }} />
                Emotional Health
              </span>
              <span className="blog-post-date">March 8, 2025</span>
              <span className="blog-post-read-time">9 min read</span>
            </div>
            <h1 style={{ marginBottom: "1rem" }}>Emotional Detox: Healing Beyond the Physical Body</h1>
            <p className="blog-post-excerpt" style={{ marginBottom: "2rem" }}>
              Emotions get stored in our tissues. Learn how to release trapped emotional energy and create space for true healing and transformation.
            </p>
            <div className="blog-post-body">
              <div className="blog-post-image-hero">
                <Image
                  src="/blog/blog-emotional-detox.png"
                  alt="Emotional Detox"
                  width={1200}
                  height={630}
                  priority
                  className="blog-hero-image"
                />
              </div>

              <h2>The Body Keeps the Score</h2>
              <p>
                "Issues get stored in our tissues" — this ancient wisdom is now backed by modern science. Unprocessed emotions don't just disappear; they become embedded in our physical body, creating tension, pain, and disease.
              </p>

              <h2>Where Emotions Hide in the Body</h2>
              <p>
                Research in psychosomatic medicine reveals specific patterns:
              </p>
              <ul>
                <li><strong>Anger:</strong> Stored in the liver, jaw, and shoulders</li>
                <li><strong>Grief:</strong> Held in the lungs and chest</li>
                <li><strong>Fear:</strong> Trapped in the kidneys and lower back</li>
                <li><strong>Anxiety:</strong> Manifests in the stomach and digestive system</li>
                <li><strong>Shame:</strong> Settles in the hips and pelvis</li>
              </ul>

              <div className="blog-callout">
                <div className="callout-icon">💡</div>
                <div className="callout-content">
                  <strong>Key Insight:</strong> Chronic pain that doesn't respond to physical treatment often has an emotional component that needs addressing.
                </div>
              </div>

              <h2>The Science of Emotional Storage</h2>
              <p>
                When you experience intense emotion without full expression or processing, your nervous system stores that energy as:
              </p>
              <ul>
                <li><strong>Muscle tension</strong> — creating chronic pain and restricted movement</li>
                <li><strong>Fascia restrictions</strong> — limiting flexibility and circulation</li>
                <li><strong>Altered breathing patterns</strong> — reducing oxygen and energy</li>
                <li><strong>Hormonal imbalances</strong> — affecting mood and metabolism</li>
              </ul>

              <h2>Signs You Need an Emotional Detox</h2>
              <ol>
                <li>Chronic pain without clear physical cause</li>
                <li>Recurring digestive issues</li>
                <li>Unexplained fatigue or low energy</li>
                <li>Difficulty expressing emotions</li>
                <li>Feeling "stuck" in life patterns</li>
                <li>Tension that doesn't release with massage or stretching</li>
              </ol>

              <h2>How to Release Stored Emotions</h2>
              
              <h3>1. Somatic Practices</h3>
              <p>
                Body-based techniques that help release trapped energy:
              </p>
              <ul>
                <li>Yoga (especially hip openers and heart openers)</li>
                <li>Breathwork (Pranayama)</li>
                <li>Dance and movement therapy</li>
                <li>Soleus Activation (releases deep cellular tension)</li>
              </ul>

              <h3>2. Meditation and Mindfulness</h3>
              <p>
                Create space to observe and process emotions without judgment. Our Divyanubhuti Dhyan practice is specifically designed for emotional release.
              </p>

              <h3>3. Expressive Therapies</h3>
              <p>
                Give emotions a voice through:
              </p>
              <ul>
                <li>Journaling</li>
                <li>Art or music</li>
                <li>Talking with trusted friends or therapists</li>
                <li>Sound healing (chanting, humming)</li>
              </ul>

              <div className="blog-quote">
                <blockquote>
                  "The emotion that can be expressed can be healed. The emotion that is suppressed becomes disease."
                </blockquote>
                <cite>— Ancient Ayurvedic Wisdom</cite>
              </div>

              <h2>The Emotional Detox Process</h2>
              <p>
                Releasing stored emotions isn't always comfortable, but it's profoundly healing:
              </p>
              <ol>
                <li><strong>Awareness:</strong> Notice where you hold tension</li>
                <li><strong>Permission:</strong> Allow emotions to surface without judgment</li>
                <li><strong>Expression:</strong> Release through movement, breath, or voice</li>
                <li><strong>Integration:</strong> Process the experience and extract wisdom</li>
                <li><strong>Renewal:</strong> Fill the space with positive energy and intention</li>
              </ol>

              <div className="blog-callout blog-callout-success">
                <div className="callout-icon">
                  <Icon name="Star" size={24} />
                </div>
                <div className="callout-content">
                  <strong>What to Expect:</strong> You might experience temporary emotional intensity, fatigue, or physical sensations as energy releases. This is normal and part of the healing process.
                </div>
              </div>

              <h2>Creating Emotional Resilience</h2>
              <p>
                Beyond detox, build practices that prevent emotional accumulation:
              </p>
              <ul>
                <li>Daily check-ins with your emotional state</li>
                <li>Regular movement and breathwork</li>
                <li>Healthy boundaries in relationships</li>
                <li>Community support and connection</li>
                <li>Ayurvedic practices for emotional balance</li>
              </ul>

              <div className="blog-post-cta">
                <h3>Ready for Deep Emotional Healing?</h3>
                <p>Join our holistic programs that address body, mind, and emotional health.</p>
                <Link href="/programs" className="btn btn-primary">
                  Start Your Journey →
                </Link>
              </div>
            </div>

            <aside className="blog-post-sidebar">
              <div className="sidebar-card">
                <h4>Related Articles</h4>
                <ul className="related-posts">
                  <li><Link href="/blog/meditation-as-medicine">Meditation as Medicine</Link></li>
                  <li><Link href="/blog/stress-science">The Science of Stress</Link></li>
                  <li><Link href="/blog/ayurveda-balance">Ayurveda & Balance</Link></li>
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
