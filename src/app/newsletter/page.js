import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Newsletter – Anandbodh™",
  description: "Subscribe to our wellness newsletter for weekly insights, research updates, and exclusive tips.",
};

export default function NewsletterPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-image">
          <div className="page-hero-overlay">
            <div className="container">
              <h1>Wellness Insights Weekly</h1>
              <p>Evidence-based wellness delivered to your inbox</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="newsletter-page-content">
              <div className="newsletter-intro">
                <h2>Stay Connected to Your Wellness Journey</h2>
                <p>
                  Join thousands of people transforming their health through evidence-based wellness. 
                  Our weekly newsletter brings you the latest research, practical tips, and exclusive 
                  insights from our team of experts.
                </p>
              </div>

              <div className="newsletter-benefits">
                <h3>What You'll Get</h3>
                <div className="benefits-list">
                  <div className="benefit">
                    <span className="benefit-icon">
                      <Icon name="Book" size={32} />
                    </span>
                    <div>
                      <h4>Weekly Articles</h4>
                      <p>Deep-dive wellness insights backed by science</p>
                    </div>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">
                      <Icon name="Brain" size={32} />
                    </span>
                    <div>
                      <h4>Research Updates</h4>
                      <p>Latest findings in wellness and longevity</p>
                    </div>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">
                      <Icon name="Lightbulb" size={32} />
                    </span>
                    <div>
                      <h4>Practical Tips</h4>
                      <p>Actionable strategies you can implement today</p>
                    </div>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">
                      <Icon name="Star" size={32} />
                    </span>
                    <div>
                      <h4>Exclusive Offers</h4>
                      <p>Special discounts and early access for subscribers</p>
                    </div>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">
                      <Icon name="Users" size={32} />
                    </span>
                    <div>
                      <h4>Community Access</h4>
                      <p>Connect with others on their wellness journey</p>
                    </div>
                  </div>
                  <div className="benefit">
                    <span className="benefit-icon">
                      <Icon name="Star" size={32} />
                    </span>
                    <div>
                      <h4>Expert Insights</h4>
                      <p>Direct wisdom from our team of wellness experts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="newsletter-signup-large">
              <h2>Subscribe Today</h2>
              <p>Join our community of wellness enthusiasts</p>
              <form className="newsletter-form-large">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <select className="form-input" defaultValue="">
                    <option value="">Select Your Interest</option>
                    <option value="meditation">Meditation & Mindfulness</option>
                    <option value="nutrition">Nutrition & Diet</option>
                    <option value="fitness">Fitness & Movement</option>
                    <option value="ayurveda">Ayurveda</option>
                    <option value="all">All Topics</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Subscribe Now
                </button>
                <p className="form-privacy">
                  We respect your privacy. Unsubscribe anytime. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="newsletter-testimonials">
              <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>What Our Subscribers Say</h2>
              <div className="testimonials-grid">
                <div className="testimonial-card">
                  <p>
                    "The newsletter has completely changed how I think about wellness. The articles 
                    are well-researched and practical. I've already implemented several tips!"
                  </p>
                  <div className="testimonial-author">
                    <strong>Priya M.</strong>
                    <span>Subscriber since 2025</span>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p>
                    "I love getting insights from the experts. The weekly emails keep me motivated 
                    and informed about my wellness journey."
                  </p>
                  <div className="testimonial-author">
                    <strong>Rajesh K.</strong>
                    <span>Subscriber since 2025</span>
                  </div>
                </div>
                <div className="testimonial-card">
                  <p>
                    "Finally, a newsletter that's not trying to sell me something. Just pure, 
                    evidence-based wellness information. Highly recommend!"
                  </p>
                  <div className="testimonial-author">
                    <strong>Ananya S.</strong>
                    <span>Subscriber since 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="newsletter-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-items">
                <div className="faq-item">
                  <h4>How often will I receive emails?</h4>
                  <p>
                    We send one email per week, typically on Wednesday mornings. You can adjust 
                    frequency in your preferences.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>Can I unsubscribe anytime?</h4>
                  <p>
                    Absolutely. Every email includes an unsubscribe link. No questions asked, 
                    no hard feelings.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>Will you share my email?</h4>
                  <p>
                    Never. We take privacy seriously. Your email is only used to send you our 
                    newsletter.
                  </p>
                </div>
                <div className="faq-item">
                  <h4>What if I miss an issue?</h4>
                  <p>
                    All past newsletters are available on our blog. You can browse and read 
                    anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="newsletter-cta">
              <h2>Ready to Transform Your Health?</h2>
              <p>
                Subscribe to our newsletter and start your wellness journey with expert guidance 
                and evidence-based insights.
              </p>
              <Link href="#newsletter-form" className="btn btn-primary">
                Subscribe Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
