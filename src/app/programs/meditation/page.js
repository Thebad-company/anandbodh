import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Method from "@/components/Method";
import FinalCTA from "@/components/FinalCTA";
import ProgramCTA from "@/components/ProgramCTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Dhyan Meditation Program | Anandbodh™",
  description: "Master meditation techniques to reduce stress, enhance mental clarity, and achieve inner peace.",
};

export default function MeditationPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-image">
          <Image
            src="/heroes/hero-meditation-program.png"
            alt="Dhyan Meditation Program"
            width={1920}
            height={1080}
            priority
            className="hero-image-full"
          />
          <div className="page-hero-overlay">
            <div className="container">
              <h1>Dhyan Meditation Program</h1>
              <p>Transform your mind and reduce chronic stress through guided meditation</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="program-intro">
              <h2>The Power of Meditation</h2>
              <p>
                Meditation is not just relaxation—it's a scientifically-proven practice that rewires your brain, 
                reduces cortisol levels, and creates lasting peace. Our Dhyan Meditation program combines ancient 
                wisdom with modern neuroscience.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="meditation-benefits">
              <h2>Benefits of Regular Meditation</h2>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Brain" size={32} />
                  </div>
                  <h3>Mental Clarity</h3>
                  <p>Clear mental fog and enhance focus and concentration.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Meditation" size={32} />
                  </div>
                  <h3>Stress Relief</h3>
                  <p>Reduce anxiety and cortisol levels naturally.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Clock" size={32} />
                  </div>
                  <h3>Better Sleep</h3>
                  <p>Improve sleep quality and wake up refreshed.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Heart" size={32} />
                  </div>
                  <h3>Emotional Balance</h3>
                  <p>Develop emotional resilience and inner peace.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Meditation" size={32} />
                  </div>
                  <h3>Body Awareness</h3>
                  <p>Connect deeply with your physical body.</p>
                </div>
                <div className="benefit-card">
                  <div className="benefit-icon">
                    <Icon name="Star" size={32} />
                  </div>
                  <h3>Spiritual Growth</h3>
                  <p>Explore deeper dimensions of consciousness.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="meditation-types">
              <h2>Meditation Techniques We Teach</h2>
              <div className="types-grid">
                <div className="type-card">
                  <h3>
                    <Icon name="Meditation" size={20} style={{ marginRight: "8px" }} />
                    Mantra Meditation
                  </h3>
                  <p>Use sacred sounds and mantras to focus your mind and elevate consciousness.</p>
                </div>
                <div className="type-card">
                  <h3>
                    <Icon name="Leaf" size={20} style={{ marginRight: "8px" }} />
                    Breath Awareness
                  </h3>
                  <p>Master pranayama techniques to control energy and calm the nervous system.</p>
                </div>
                <div className="type-card">
                  <h3>
                    <Icon name="Zap" size={20} style={{ marginRight: "8px" }} />
                    Visualization
                  </h3>
                  <p>Use guided imagery to manifest wellness and positive transformation.</p>
                </div>
                <div className="type-card">
                  <h3>
                    <Icon name="Meditation" size={20} style={{ marginRight: "8px" }} />
                    Body Scan
                  </h3>
                  <p>Develop deep body awareness and release stored tension.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Method />

        <ProgramCTA 
          programId="meditation-program"
          programName="Dhyan Meditation"
          programPrice={99}
          description="Master meditation techniques to reduce stress, enhance mental clarity, and achieve inner peace."
        />

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}