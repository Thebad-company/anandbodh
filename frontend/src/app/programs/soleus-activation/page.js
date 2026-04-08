import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsBanner from "@/components/StatsBanner";
import OutcomesGrid from "@/components/OutcomesGrid";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Soleus Activation Program | Anandbodh™",
  description: "Master the revolutionary Soleus Activation technique. 20 minutes daily to reverse metabolic disorders.",
};

export default function SoleusActivationPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-image">
          <Image
            src="/heroes/hero-soleus-activation.png"
            alt="Soleus Activation Program"
            width={1920}
            height={1080}
            priority
            className="hero-image-full"
          />
          <div className="page-hero-overlay">
            <div className="container">
              <h1>Soleus Activation Program</h1>
              <p>20 minutes daily to reverse metabolic disorders and boost vitality</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="program-intro">
              <h2>What is Soleus Activation?</h2>
              <p>
                The Soleus muscle, located in your calf, is a metabolic powerhouse. When activated correctly, 
                it can increase your metabolic rate by up to 6x, reduce blood sugar by 50%, and transform your 
                energy levels in just 20 minutes daily.
              </p>
              <p>
                Based on the groundbreaking iScience August 2022 study, Soleus Activation is the most efficient 
                way to reverse Type 2 Diabetes, manage weight, and achieve lasting vitality.
              </p>
            </div>
          </div>
        </section>

        <StatsBanner />

        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Program Benefits</h2>
            <OutcomesGrid />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="program-details">
              <h2>How It Works</h2>
              <div className="steps-grid">
                <div className="step-card">
                  <div className="step-number">1</div>
                  <h3>Learn the Technique</h3>
                  <p>Master the proper Soleus Activation form with expert guidance and video tutorials.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">2</div>
                  <h3>Practice Daily</h3>
                  <p>Dedicate just 20 minutes each day to activate your Soleus muscle and boost metabolism.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">3</div>
                  <h3>Track Progress</h3>
                  <p>Monitor your blood sugar, energy levels, and weight loss with our tracking tools.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">4</div>
                  <h3>Transform Your Life</h3>
                  <p>Experience sustained energy, better health markers, and renewed vitality.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="program-faq">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-grid">
                <div className="faq-item">
                  <h4>How long does it take to see results?</h4>
                  <p>Most participants notice improved energy within 3-5 days and significant metabolic changes within 2-3 weeks.</p>
                </div>
                <div className="faq-item">
                  <h4>Is it suitable for all ages?</h4>
                  <p>Yes, Soleus Activation is safe for ages 12 and above. Always consult with a healthcare provider if you have specific health concerns.</p>
                </div>
                <div className="faq-item">
                  <h4>Do I need any equipment?</h4>
                  <p>No equipment needed. You can practice Soleus Activation anywhere, anytime.</p>
                </div>
                <div className="faq-item">
                  <h4>Can it help with Type 2 Diabetes?</h4>
                  <p>Yes, the iScience study showed 50% blood sugar reduction and 62% less insulin required with consistent practice.</p>
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