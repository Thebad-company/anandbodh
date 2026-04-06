import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Wake Up Life Program | Anandbodh™",
  description: "Discover your true potential. The WakeUp Score Assessment reveals your unique wellness path.",
};

export default function WakeUpLifePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-image">
          <Image
            src="/heroes/hero-wake-up-life.png"
            alt="Wake Up Life Program"
            width={1920}
            height={1080}
            priority
            className="hero-image-full"
          />
          <div className="page-hero-overlay">
            <div className="container">
              <h1>Wake Up Life Program</h1>
              <p>Discover your unique wellness path with the WakeUp Score Assessment</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="program-intro">
              <h2>Awaken to Your Potential</h2>
              <p>
                The WakeUp Score Assessment is your personalized roadmap to wellness. It evaluates your unique 
                constitution, stress patterns, lifestyle habits, and true purpose to create a customized wellness 
                journey designed specifically for you.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="assessment-process">
              <h2>How It Works</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-icon">
                    <Icon name="Book" size={32} />
                  </div>
                  <h3>Take the Assessment</h3>
                  <p>Answer comprehensive questions about your health, lifestyle, and goals.</p>
                </div>
                <div className="process-step">
                  <div className="step-icon">
                    <Icon name="Lightbulb" size={32} />
                  </div>
                  <h3>Get Your Score</h3>
                  <p>Receive your personalized WakeUp Score and detailed analysis.</p>
                </div>
                <div className="process-step">
                  <div className="step-icon">
                    <Icon name="Zap" size={32} />
                  </div>
                  <h3>Personalized Plan</h3>
                  <p>Get a customized wellness plan tailored to your unique needs.</p>
                </div>
                <div className="process-step">
                  <div className="step-icon">
                    <Icon name="Rocket" size={32} />
                  </div>
                  <h3>Start Your Journey</h3>
                  <p>Begin your transformation with expert guidance and community support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="score-insights">
              <h2>What Your WakeUp Score Reveals</h2>
              <div className="insights-grid">
                <div className="insight-card">
                  <h3>
                    <Icon name="Brain" size={20} style={{ marginRight: "8px" }} />
                    Your Constitution
                  </h3>
                  <p>Understand your unique mind-body type and how it affects your health.</p>
                </div>
                <div className="insight-card">
                  <h3>
                    <Icon name="Heart" size={20} style={{ marginRight: "8px" }} />
                    Stress Patterns
                  </h3>
                  <p>Identify how chronic stress manifests in your life and body.</p>
                </div>
                <div className="insight-card">
                  <h3>
                    <Icon name="Chart" size={20} style={{ marginRight: "8px" }} />
                    Health Status
                  </h3>
                  <p>Get insights into your current health markers and risk factors.</p>
                </div>
                <div className="insight-card">
                  <h3>
                    <Icon name="Lightbulb" size={20} style={{ marginRight: "8px" }} />
                    Life Purpose
                  </h3>
                  <p>Discover your true purpose and align it with your wellness goals.</p>
                </div>
                <div className="insight-card">
                  <h3>
                    <Icon name="Rocket" size={20} style={{ marginRight: "8px" }} />
                    Strengths
                  </h3>
                  <p>Identify your natural strengths and how to leverage them.</p>
                </div>
                <div className="insight-card">
                  <h3>
                    <Icon name="Leaf" size={20} style={{ marginRight: "8px" }} />
                    Wellness Path
                  </h3>
                  <p>Get a personalized roadmap for your wellness transformation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="score-benefits">
              <h2>Benefits of the WakeUp Score</h2>
              <ul className="benefits-list">
                <li>
                  <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                  Personalized wellness recommendations
                </li>
                <li>
                  <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                  Understand your unique health profile
                </li>
                <li>
                  <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                  Identify root causes of health issues
                </li>
                <li>
                  <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                  Get a clear action plan for transformation
                </li>
                <li>
                  <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                  Track your progress over time
                </li>
                <li>
                  <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                  Access expert guidance based on your score
                </li>
                <li>
                  <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                  Join a community with similar wellness goals
                </li>
                <li>
                  <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                  Achieve sustainable health transformation
                </li>
              </ul>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}