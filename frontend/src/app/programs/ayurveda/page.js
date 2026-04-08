import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Ayurveda Longevity Program | Anandbodh™",
  description: "Discover ancient Ayurvedic wisdom for modern wellness. Balance your doshas and achieve lasting health.",
};

export default function AyurvedaPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-image">
          <Image
            src="/heroes/hero-ayurveda-program.png"
            alt="Ayurveda Longevity Program"
            width={1920}
            height={1080}
            priority
            className="hero-image-full"
          />
          <div className="page-hero-overlay">
            <div className="container">
              <h1>Ayurveda Longevity Program</h1>
              <p>Ancient wisdom for modern wellness and lasting vitality</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="program-intro">
              <h2>The Science of Life</h2>
              <p>
                Ayurveda, meaning "science of life," is a 5,000-year-old system of medicine that views health 
                as a balance of three doshas: Vata, Pitta, and Kapha. Our program helps you understand your unique 
                constitution and achieve optimal health through diet, lifestyle, and herbal protocols.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="doshas-section">
              <h2>Understanding Your Doshas</h2>
              <div className="doshas-grid">
                <div className="dosha-card vata">
                  <h3>
                    <Icon name="Leaf" size={20} style={{ marginRight: "8px" }} />
                    Vata
                  </h3>
                  <p><strong>Element:</strong> Air & Space</p>
                  <p><strong>Qualities:</strong> Light, dry, mobile, creative</p>
                  <p><strong>Balance:</strong> Warm, grounding foods and routines</p>
                </div>
                <div className="dosha-card pitta">
                  <h3>
                    <Icon name="Zap" size={20} style={{ marginRight: "8px" }} />
                    Pitta
                  </h3>
                  <p><strong>Element:</strong> Fire & Water</p>
                  <p><strong>Qualities:</strong> Hot, sharp, intense, transformative</p>
                  <p><strong>Balance:</strong> Cooling foods and calming practices</p>
                </div>
                <div className="dosha-card kapha">
                  <h3>
                    <Icon name="Leaf" size={20} style={{ marginRight: "8px" }} />
                    Kapha
                  </h3>
                  <p><strong>Element:</strong> Water & Earth</p>
                  <p><strong>Qualities:</strong> Heavy, stable, nurturing, grounded</p>
                  <p><strong>Balance:</strong> Stimulating foods and active practices</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="ayurveda-practices">
              <h2>Ayurvedic Practices</h2>
              <div className="practices-grid">
                <div className="practice-card">
                  <h3>
                    <Icon name="Utensils" size={20} style={{ marginRight: "8px" }} />
                    Nutrition
                  </h3>
                  <p>Learn dosha-specific diets that nourish your unique constitution and prevent disease.</p>
                </div>
                <div className="practice-card">
                  <h3>
                    <Icon name="Leaf" size={20} style={{ marginRight: "8px" }} />
                    Herbal Medicine
                  </h3>
                  <p>Discover powerful herbs and formulations for healing and prevention.</p>
                </div>
                <div className="practice-card">
                  <h3>
                    <Icon name="Meditation" size={20} style={{ marginRight: "8px" }} />
                    Abhyanga (Oil Massage)
                  </h3>
                  <p>Experience the healing power of therapeutic oil massage for rejuvenation.</p>
                </div>
                <div className="practice-card">
                  <h3>
                    <Icon name="Meditation" size={20} style={{ marginRight: "8px" }} />
                    Yoga & Movement
                  </h3>
                  <p>Practice dosha-balancing yoga sequences and movement therapies.</p>
                </div>
                <div className="practice-card">
                  <h3>
                    <Icon name="Clock" size={20} style={{ marginRight: "8px" }} />
                    Daily Routines
                  </h3>
                  <p>Establish Dinacharya (daily routines) aligned with natural rhythms.</p>
                </div>
                <div className="practice-card">
                  <h3>
                    <Icon name="Calendar" size={20} style={{ marginRight: "8px" }} />
                    Seasonal Living
                  </h3>
                  <p>Adapt your lifestyle to seasonal changes for optimal health.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="ayurveda-conditions">
              <h2>Conditions We Address</h2>
              <div className="conditions-list">
                <div className="condition-item">
                  <span className="condition-icon">
                    <Icon name="Heart" size={20} />
                  </span>
                  <span>Digestive disorders</span>
                </div>
                <div className="condition-item">
                  <span className="condition-icon">
                    <Icon name="Clock" size={20} />
                  </span>
                  <span>Sleep issues</span>
                </div>
                <div className="condition-item">
                  <span className="condition-icon">
                    <Icon name="Brain" size={20} />
                  </span>
                  <span>Anxiety & stress</span>
                </div>
                <div className="condition-item">
                  <span className="condition-icon">
                    <Icon name="Lightbulb" size={20} />
                  </span>
                  <span>Weight management</span>
                </div>
                <div className="condition-item">
                  <span className="condition-icon">
                    <Icon name="Zap" size={20} />
                  </span>
                  <span>Inflammation</span>
                </div>
                <div className="condition-item">
                  <span className="condition-icon">
                    <Icon name="Zap" size={20} />
                  </span>
                  <span>Low energy</span>
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