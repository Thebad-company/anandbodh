import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import FinalCTA from "@/components/FinalCTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Reversing Lifestyle Disorders: The Root Cause Approach | Anandbodh™",
  description: "Diabetes, hypertension, thyroid issues — these aren't diseases to manage, they're conditions to reverse. Here's how we address the root causes.",
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
                Lifestyle
              </span>
              <span className="blog-post-date">February 25, 2025</span>
              <span className="blog-post-read-time">13 min read</span>
            </div>
            <h1 style={{ marginBottom: "1rem" }}>Reversing Lifestyle Disorders: The Root Cause Approach</h1>
            <p className="blog-post-excerpt" style={{ marginBottom: "2rem" }}>
              Diabetes, hypertension, thyroid issues — these aren't diseases to manage, they're conditions to reverse. Here's how we address the root causes.
            </p>
            <div className="blog-post-body">
              <div className="blog-post-image-hero">
                <Image
                  src="/blog/blog-reversing-disorders.png"
                  alt="Reversing Lifestyle Disorders"
                  width={1200}
                  height={630}
                  priority
                  className="blog-hero-image"
                />
              </div>

              <h2>The Problem with "Disease Management"</h2>
              <p>
                Modern medicine excels at managing symptoms. You have high blood sugar? Take this pill. High blood pressure? Here's another. Thyroid issues? Lifetime medication.
              </p>
              <p>
                But what if we're asking the wrong question? Instead of "How do we manage this disease?" we should ask: "Why did this happen in the first place?"
              </p>

              <h2>The Root Cause: Chronic Stress</h2>
              <p>
                75-90% of lifestyle disorders share a common root: chronic stress. Not just mental stress, but:
              </p>
              <ul>
                <li><strong>Physical stress:</strong> Poor diet, lack of movement, toxins</li>
                <li><strong>Mental stress:</strong> Anxiety, worry, overwhelm</li>
                <li><strong>Emotional stress:</strong> Unprocessed trauma, suppressed emotions</li>
                <li><strong>Spiritual stress:</strong> Lack of purpose, disconnection</li>
              </ul>

              <div className="blog-callout">
                <div className="callout-icon">⚠️</div>
                <div className="callout-content">
                  <strong>Critical Understanding:</strong> Lifestyle disorders aren't genetic inevitabilities — they're the body's response to chronic stress and imbalance.
                </div>
              </div>

              <h2>The Anandbodh Reversal Protocol</h2>
              
              <h3>1. Metabolic Optimization</h3>
              <p>
                <strong>Soleus Activation</strong> directly addresses metabolic dysfunction:
              </p>
              <ul>
                <li>Reduces blood sugar by 50%</li>
                <li>Improves insulin sensitivity</li>
                <li>Increases metabolic rate</li>
                <li>Burns fat efficiently</li>
              </ul>

              <h3>2. Stress Reduction</h3>
              <p>
                <strong>Divyanubhuti Dhyan</strong> resets your stress response:
              </p>
              <ul>
                <li>Lowers cortisol levels</li>
                <li>Activates parasympathetic nervous system</li>
                <li>Reduces inflammation</li>
                <li>Improves sleep quality</li>
              </ul>

              <h3>3. Constitutional Balance</h3>
              <p>
                <strong>Ayurvedic Protocols</strong> restore your natural equilibrium:
              </p>
              <ul>
                <li>Personalized diet for your dosha</li>
                <li>Herbal support for specific conditions</li>
                <li>Lifestyle adjustments for long-term health</li>
                <li>Seasonal practices for prevention</li>
              </ul>

              <h2>Conditions We Successfully Reverse</h2>
              
              <h3>Type 2 Diabetes</h3>
              <p>
                Through Soleus Activation and metabolic optimization, members typically see:
              </p>
              <ul>
                <li>50% reduction in blood sugar within 6 weeks</li>
                <li>60% decrease in insulin requirements</li>
                <li>Improved HbA1c levels</li>
                <li>Many achieve medication-free status</li>
              </ul>

              <h3>Hypertension</h3>
              <p>
                Stress reduction and lifestyle changes lead to:
              </p>
              <ul>
                <li>Significant blood pressure reduction</li>
                <li>Improved cardiovascular health</li>
                <li>Reduced medication dependence</li>
                <li>Better overall vitality</li>
              </ul>

              <h3>Thyroid Disorders</h3>
              <p>
                Addressing stress and hormonal balance results in:
              </p>
              <ul>
                <li>Normalized thyroid function</li>
                <li>Improved energy levels</li>
                <li>Better weight management</li>
                <li>Enhanced mood and cognition</li>
              </ul>

              <div className="blog-quote">
                <blockquote>
                  "The doctor of the future will give no medicine, but will instruct his patients in care of the human frame, in diet, and in the cause and prevention of disease."
                </blockquote>
                <cite>— Thomas Edison</cite>
              </div>

              <h2>The Reversal Timeline</h2>
              <p>
                While everyone's journey is unique, most members experience:
              </p>
              <ul>
                <li><strong>Week 1:</strong> Improved energy and sleep</li>
                <li><strong>Weeks 2-4:</strong> Measurable health improvements</li>
                <li><strong>Months 2-3:</strong> Significant symptom reduction</li>
                <li><strong>Months 4-6:</strong> Potential medication reduction (with doctor supervision)</li>
                <li><strong>6+ months:</strong> Sustained health transformation</li>
              </ul>

              <h2>Why This Works When Other Approaches Fail</h2>
              <ol>
                <li><strong>Addresses root causes</strong> instead of just symptoms</li>
                <li><strong>Holistic approach</strong> treating body, mind, and spirit</li>
                <li><strong>Personalized protocols</strong> based on your unique constitution</li>
                <li><strong>Evidence-based</strong> backed by clinical research</li>
                <li><strong>Sustainable</strong> lifestyle changes, not quick fixes</li>
              </ol>

              <div className="blog-callout blog-callout-success">
                <div className="callout-icon">
                  <Icon name="Star" size={24} />
                </div>
                <div className="callout-content">
                  <strong>Important Note:</strong> Always work with your healthcare provider when making changes to medications. Our protocols complement medical care, not replace it.
                </div>
              </div>

              <div className="blog-post-cta">
                <h3>Ready to Reverse Your Condition?</h3>
                <p>Join our comprehensive programs designed for lasting health transformation.</p>
                <Link href="/programs" className="btn btn-primary">
                  Explore Programs →
                </Link>
              </div>
            </div>

            <aside className="blog-post-sidebar">
              <div className="sidebar-card">
                <h4>Related Articles</h4>
                <ul className="related-posts">
                  <li><Link href="/blog/stress-science">The Science of Stress</Link></li>
                  <li><Link href="/blog/soleus-muscle">The Soleus Muscle</Link></li>
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
