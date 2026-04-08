import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Thrive@Work Program | Anandbodh™",
  description: "Transform your workplace wellness. Reduce stress, boost productivity, and achieve work-life balance.",
};

export default function ThriveAtWorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-image">
          <Image
            src="/heroes/hero-thrive-work.png"
            alt="Thrive@Work Program"
            width={1920}
            height={1080}
            priority
            className="hero-image-full"
          />
          <div className="page-hero-overlay">
            <div className="container">
              <h1>Thrive@Work Program</h1>
              <p>Transform your workplace wellness and achieve sustainable success</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="program-intro">
              <h2>Wellness at Work</h2>
              <p>
                Modern work environments create chronic stress that impacts productivity, health, and happiness. 
                Thrive@Work combines evidence-based wellness practices with workplace strategies to help you excel 
                professionally while maintaining optimal health.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="work-benefits">
              <h2>Benefits for You</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Chart" size={32} />
                  </div>
                  <h3>Increased Productivity</h3>
                  <p>Boost focus and efficiency with stress-free work practices.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Meditation" size={32} />
                  </div>
                  <h3>Reduced Stress</h3>
                  <p>Master techniques to manage workplace pressure effectively.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Lightbulb" size={32} />
                  </div>
                  <h3>Work-Life Balance</h3>
                  <p>Create healthy boundaries and maintain personal wellness.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Users" size={32} />
                  </div>
                  <h3>Better Relationships</h3>
                  <p>Improve communication and collaboration with colleagues.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Zap" size={32} />
                  </div>
                  <h3>Energy & Vitality</h3>
                  <p>Maintain all-day energy and mental clarity.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Rocket" size={32} />
                  </div>
                  <h3>Career Growth</h3>
                  <p>Perform at your best and achieve professional goals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="work-modules">
              <h2>Program Modules</h2>
              <div className="modules-grid">
                <div className="module-card">
                  <div className="module-number">1</div>
                  <h3>Stress Management</h3>
                  <p>Learn proven techniques to manage workplace stress and anxiety.</p>
                </div>
                <div className="module-card">
                  <div className="module-number">2</div>
                  <h3>Mindfulness at Work</h3>
                  <p>Practice meditation and mindfulness during your workday.</p>
                </div>
                <div className="module-card">
                  <div className="module-number">3</div>
                  <h3>Energy Management</h3>
                  <p>Optimize your energy levels throughout the day.</p>
                </div>
                <div className="module-card">
                  <div className="module-number">4</div>
                  <h3>Healthy Habits</h3>
                  <p>Build sustainable wellness habits that fit your schedule.</p>
                </div>
                <div className="module-card">
                  <div className="module-number">5</div>
                  <h3>Leadership Wellness</h3>
                  <p>Lead by example and inspire your team's wellness.</p>
                </div>
                <div className="module-card">
                  <div className="module-number">6</div>
                  <h3>Work-Life Integration</h3>
                  <p>Create harmony between professional and personal life.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}