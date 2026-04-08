import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Meditation as Medicine: The Science of Stillness | Anandbodh™",
  description: "How regular meditation creates measurable changes in brain structure, cortisol levels, and immune response — backed by decades of clinical research.",
};

export default function BlogPost() {
  return (
    <>
      <Navbar />
      <main className="blog-post-page">
        {/* Content */}
        <article className="blog-post-content">
          <div className="container">
            <div className="blog-post-meta" style={{ marginBottom: "2rem" }}>
              <span className="blog-post-category">🧠 Mental Wellness</span>
              <span className="blog-post-date">March 15, 2025</span>
              <span className="blog-post-read-time">8 min read</span>
            </div>
            <h1 style={{ marginBottom: "1rem" }}>Meditation as Medicine: The Science of Stillness</h1>
            <p className="blog-post-excerpt" style={{ marginBottom: "2rem" }}>
              How regular meditation creates measurable changes in brain structure, cortisol levels, and immune response — backed by decades of clinical research.
            </p>
            <div className="blog-post-author" style={{ marginBottom: "2rem" }}>
              <div className="author-avatar">👨‍⚕️</div>
              <div className="author-info">
                <strong>Dr. Rajni Samota</strong>
                <span>Wellness Expert & Meditation Teacher</span>
              </div>
            </div>
            <div className="blog-post-body">
              <div className="blog-post-image-hero">
                <Image
                  src="/blog/blog-meditation-medicine.png"
                  alt="Meditation as Medicine"
                  width={1200}
                  height={630}
                  priority
                  className="blog-hero-image"
                />
              </div>

              <h2>The Ancient Practice Meets Modern Science</h2>
              <p>
                For thousands of years, meditation has been practiced across cultures as a path to inner peace and spiritual awakening. Today, modern neuroscience is revealing what ancient practitioners have always known: meditation is not just a spiritual practice — it's a powerful medicine for the mind and body.
              </p>

              <h2>What Happens in Your Brain During Meditation</h2>
              <p>
                When you meditate, your brain undergoes remarkable changes. Functional MRI studies show that regular meditation practice:
              </p>
              <ul>
                <li><strong>Increases gray matter density</strong> in the hippocampus (memory and learning center)</li>
                <li><strong>Reduces activity</strong> in the amygdala (fear and stress response center)</li>
                <li><strong>Strengthens the prefrontal cortex</strong> (decision-making and emotional regulation)</li>
                <li><strong>Enhances connectivity</strong> between different brain regions</li>
              </ul>

              <div className="blog-callout">
                <div className="callout-icon">💡</div>
                <div className="callout-content">
                  <strong>Key Finding:</strong> Just 8 weeks of daily meditation practice can produce measurable changes in brain structure, according to a Harvard study published in Psychiatry Research.
                </div>
              </div>

              <h2>The Stress-Reduction Mechanism</h2>
              <p>
                Chronic stress is the root cause of most lifestyle disorders. Meditation directly addresses this by:
              </p>
              <ol>
                <li><strong>Lowering cortisol levels</strong> — the primary stress hormone</li>
                <li><strong>Activating the parasympathetic nervous system</strong> — your body's "rest and digest" mode</li>
                <li><strong>Reducing inflammatory markers</strong> — linked to heart disease, diabetes, and autoimmune conditions</li>
                <li><strong>Improving heart rate variability</strong> — a key indicator of stress resilience</li>
              </ol>

              <h2>Clinical Evidence: What the Research Shows</h2>
              <p>
                Decades of peer-reviewed research have documented meditation's therapeutic effects:
              </p>
              <ul>
                <li><strong>Depression:</strong> Meditation is as effective as antidepressants for preventing relapse (JAMA Internal Medicine)</li>
                <li><strong>Anxiety:</strong> Mindfulness meditation reduces anxiety symptoms by 60% (Journal of Clinical Psychology)</li>
                <li><strong>Chronic Pain:</strong> Regular practice reduces pain intensity by 40% (Journal of Neuroscience)</li>
                <li><strong>Immune Function:</strong> Meditators show increased antibody production and stronger immune response</li>
              </ul>

              <h2>Types of Meditation and Their Benefits</h2>
              
              <h3>1. Mindfulness Meditation</h3>
              <p>
                Focuses on present-moment awareness. Best for reducing anxiety, improving focus, and managing chronic pain.
              </p>

              <h3>2. Loving-Kindness Meditation (Metta)</h3>
              <p>
                Cultivates compassion for self and others. Reduces negative emotions, increases positive feelings, and improves social connections.
              </p>

              <h3>3. Transcendental Meditation</h3>
              <p>
                Uses a mantra for deep relaxation. Effective for lowering blood pressure, reducing PTSD symptoms, and improving cardiovascular health.
              </p>

              <h3>4. Divyanubhuti Dhyan (Anandbodh Method)</h3>
              <p>
                Our signature resonance-based meditation combines ancient yogic techniques with modern understanding of neuroplasticity. It creates sustained tranquility and relieves chronic pain through deep cellular relaxation.
              </p>

              <div className="blog-quote">
                <blockquote>
                  "Meditation is not about stopping thoughts, but recognizing that we are more than our thoughts and our feelings."
                </blockquote>
                <cite>— Arianna Huffington</cite>
              </div>

              <h2>How to Start Your Meditation Practice</h2>
              <p>
                You don't need special equipment or hours of free time. Here's how to begin:
              </p>
              <ol>
                <li><strong>Start small:</strong> Begin with just 5 minutes daily</li>
                <li><strong>Choose a quiet space:</strong> Find a comfortable, distraction-free environment</li>
                <li><strong>Focus on your breath:</strong> Use breath as an anchor for attention</li>
                <li><strong>Be patient:</strong> Your mind will wander — that's normal and part of the practice</li>
                <li><strong>Stay consistent:</strong> Daily practice matters more than duration</li>
              </ol>

              <h2>Common Obstacles and How to Overcome Them</h2>
              
              <h3>"I can't quiet my mind"</h3>
              <p>
                This is the most common misconception. Meditation isn't about having a blank mind — it's about observing thoughts without getting caught up in them. Every time you notice your mind wandering and bring it back, you're strengthening your meditation muscle.
              </p>

              <h3>"I don't have time"</h3>
              <p>
                Even 5 minutes makes a difference. Consider it an investment: meditation improves focus and productivity, giving you more effective time throughout your day.
              </p>

              <h3>"I fall asleep"</h3>
              <p>
                This often means you're sleep-deprived. Your body is taking what it needs. Try meditating at different times of day, or practice with eyes slightly open.
              </p>

              <div className="blog-callout blog-callout-success">
                <div className="callout-icon">
                  <Icon name="Star" size={24} />
                </div>
                <div className="callout-content">
                  <strong>Pro Tip:</strong> Join our Dhyan Meditation program for guided sessions, expert support, and a community of practitioners. Learn the techniques that create lasting transformation.
                </div>
              </div>

              <h2>The Bottom Line</h2>
              <p>
                Meditation is no longer just a spiritual practice — it's evidence-based medicine. The research is clear: regular meditation practice creates measurable improvements in brain structure, stress hormones, immune function, and overall well-being.
              </p>
              <p>
                Whether you're dealing with chronic stress, anxiety, pain, or simply seeking greater peace and clarity, meditation offers a scientifically validated path to healing. The best part? The only side effects are positive ones.
              </p>

              <div className="blog-post-cta">
                <h3>Ready to Experience the Benefits?</h3>
                <p>Join our Dhyan Meditation program and learn from expert teachers.</p>
                <Link href="/programs/meditation" className="btn btn-primary">
                  Explore Meditation Program →
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="blog-post-sidebar">
              <div className="sidebar-card">
                <h4>Related Articles</h4>
                <ul className="related-posts">
                  <li>
                    <Link href="/blog/stress-science">The Science of Stress</Link>
                  </li>
                  <li>
                    <Link href="/blog/emotional-detox">Emotional Detox</Link>
                  </li>
                  <li>
                    <Link href="/blog/divyanubhuti-dhyan">Divyanubhuti Dhyan</Link>
                  </li>
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Share This Article</h4>
                <div className="share-buttons">
                  <button className="share-btn">📘 Facebook</button>
                  <button className="share-btn">🐦 Twitter</button>
                  <button className="share-btn">💼 LinkedIn</button>
                  <button className="share-btn">📧 Email</button>
                </div>
              </div>

              <div className="sidebar-card sidebar-cta">
                <div className="sidebar-cta-icon">📬</div>
                <h4>Get Weekly Insights</h4>
                <p>Subscribe to our newsletter for wellness tips and research updates.</p>
                <input type="email" placeholder="Your email" className="sidebar-input" />
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
