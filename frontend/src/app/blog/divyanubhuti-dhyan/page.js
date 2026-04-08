import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Divyanubhuti Dhyan: The Meditation That Changes Everything | Anandbodh™",
  description: "Experience the divine through resonance-based meditation. A practice that builds patience, relieves chronic pain, and creates sustained tranquility.",
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
                <Icon name="Meditation" size={16} style={{ marginRight: "4px" }} />
                Meditation
              </span>
              <span className="blog-post-date">February 28, 2025</span>
              <span className="blog-post-read-time">8 min read</span>
            </div>
            <h1 style={{ marginBottom: "1rem" }}>Divyanubhuti Dhyan: The Meditation That Changes Everything</h1>
            <p className="blog-post-excerpt" style={{ marginBottom: "2rem" }}>
              Experience the divine through resonance-based meditation. A practice that builds patience, relieves chronic pain, and creates sustained tranquility.
            </p>
            <div className="blog-post-body">
              <div className="blog-post-image-hero">
                <Image
                  src="/blog/blog-divyanubhuti-dhyan.png"
                  alt="Divyanubhuti Dhyan"
                  width={1200}
                  height={630}
                  priority
                  className="blog-hero-image"
                />
              </div>

              <h2>What Is Divyanubhuti?</h2>
              <p>
                Divyanubhuti (दिव्यानुभूति) translates to "Divine Experience" — a state of profound peace and connection that transcends ordinary consciousness. This isn't just relaxation; it's a fundamental shift in how you experience reality.
              </p>

              <h2>The Science of Resonance</h2>
              <p>
                Divyanubhuti Dhyan uses specific sound frequencies and breathing patterns to create resonance in your body and mind. This resonance:
              </p>
              <ul>
                <li>Synchronizes brainwaves to theta state (deep meditation)</li>
                <li>Activates the vagus nerve (parasympathetic response)</li>
                <li>Releases endorphins and serotonin</li>
                <li>Reduces cortisol and inflammatory markers</li>
              </ul>

              <h2>The Three Pillars of Practice</h2>
              
              <h3>1. Pranayama (Breath Control)</h3>
              <p>
                Specific breathing patterns that prepare the nervous system for deep meditation. We use Kapalbhati (skull-shining breath) to clear energy channels.
              </p>

              <h3>2. Mantra (Sound Vibration)</h3>
              <p>
                The "Om" sound creates vibrations that resonate through your entire body, from cellular level to consciousness itself.
              </p>

              <h3>3. Dhyana (Meditation)</h3>
              <p>
                Sustained awareness that allows you to witness thoughts without attachment, creating space for the divine experience to emerge.
              </p>

              <div className="blog-callout">
                <div className="callout-icon">💫</div>
                <div className="callout-content">
                  <strong>Key Insight:</strong> Divyanubhuti isn't something you do — it's something that happens when you create the right conditions.
                </div>
              </div>

              <h2>Benefits of Regular Practice</h2>
              <ul>
                <li><strong>Chronic Pain Relief:</strong> 40-60% reduction in pain intensity</li>
                <li><strong>Emotional Stability:</strong> Better mood regulation and resilience</li>
                <li><strong>Mental Clarity:</strong> Improved focus and decision-making</li>
                <li><strong>Spiritual Growth:</strong> Deeper sense of purpose and connection</li>
                <li><strong>Physical Health:</strong> Lower blood pressure, better immunity</li>
              </ul>

              <h2>How to Practice</h2>
              <ol>
                <li>Find a quiet space where you won't be disturbed</li>
                <li>Sit comfortably with spine straight</li>
                <li>Begin with 5 minutes of Kapalbhati breathing</li>
                <li>Chant "Om" 21 times, feeling the vibration</li>
                <li>Sit in silence, observing your inner experience</li>
                <li>Practice for 20-30 minutes daily</li>
              </ol>

              <div className="blog-quote">
                <blockquote>
                  "In the stillness of meditation, you don't find yourself — you remember who you've always been."
                </blockquote>
                <cite>— Ancient Yogic Wisdom</cite>
              </div>

              <div className="blog-post-cta">
                <h3>Learn Divyanubhuti Dhyan</h3>
                <p>Join our Dhyan Meditation program for guided practice and expert support.</p>
                <Link href="/programs/meditation" className="btn btn-primary">
                  Start Meditation Program →
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
