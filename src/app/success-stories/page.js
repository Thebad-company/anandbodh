import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Success Stories | Anandbodh™ – Real Transformations",
  description: "Read inspiring stories of real people who transformed their health and lives through Anandbodh.",
};

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: "Priya Sharma",
      age: 42,
      condition: "Type 2 Diabetes",
      result: "Reversed diabetes in 3 months",
      story: "After 8 years of managing Type 2 Diabetes with medications, I discovered Soleus Activation. Within 3 months, my blood sugar normalized and I reduced my insulin by 60%. The Anandbodh community support made all the difference.",
      image: "/success/success-diabetes-reversal.png",
    },
    {
      name: "Rajesh Kumar",
      age: 38,
      condition: "Chronic Stress & Anxiety",
      result: "Anxiety-free and energized",
      story: "I was constantly stressed and exhausted. The combination of meditation and Soleus Activation transformed my life. I now wake up energized and haven't had an anxiety attack in 6 months.",
      image: "/success/success-stress-relief.png",
    },
    {
      name: "Ananya Patel",
      age: 35,
      condition: "Weight Management",
      result: "Lost 15kg naturally",
      story: "I tried every diet but nothing worked. Anandbodh's holistic approach helped me understand my body better. I lost 15kg naturally and kept it off for over a year.",
      image: "/success/success-weight-wellness.png",
    },
    {
      name: "Vikram Singh",
      age: 55,
      condition: "High Blood Pressure",
      result: "BP normalized without medication",
      story: "My doctor said I'd need blood pressure medication for life. After 2 months with Anandbodh, my BP normalized. I'm now medication-free and feeling younger than ever.",
      image: "/success/success-heart-health.png",
    },
    {
      name: "Deepika Verma",
      age: 28,
      condition: "Thyroid Balance",
      result: "Thyroid levels normalized",
      story: "I suffered from thyroid imbalance for years. The Ayurvedic protocols and lifestyle changes helped me balance my hormones naturally. I now have consistent energy throughout the day.",
      image: "/success/success-thyroid-balance.png",
    },
    {
      name: "Arjun Desai",
      age: 45,
      condition: "Overall Wellness",
      result: "Complete health transformation",
      story: "I was exhausted all the time. Soleus Activation and the holistic approach gave me back my energy and vitality. I now have the stamina to play with my kids and pursue my passions.",
      image: "/success/success-overall-wellness.png",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Success Stories</h1>
            <p>Real transformations from real people on their wellness journey</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="stories-grid">
              {stories.map((story, index) => (
                <div key={index} className="story-card">
                  <div className="story-header">
                    <div className="story-avatar">
                      <Image
                        src={story.image}
                        alt={story.name}
                        width={120}
                        height={120}
                        className="story-photo"
                      />
                    </div>
                    <div className="story-info">
                      <h3>{story.name}</h3>
                      <p className="story-meta">{story.age} years old</p>
                    </div>
                  </div>
                  
                  <div className="story-condition">
                    <span className="condition-badge">{story.condition}</span>
                    <span className="result-badge">{story.result}</span>
                  </div>
                  
                  <p className="story-text">"{story.story}"</p>
                  
                  <div className="story-footer">
                    <span className="story-quote">
                      <Icon name="Star" size={16} style={{ marginRight: "4px" }} />
                      Transformation in progress
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>What Our Community Says</h2>
            <Testimonials />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="stats-showcase">
              <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Community Impact</h2>
              <div className="impact-grid">
                <div className="impact-card">
                  <div className="impact-number">10,000+</div>
                  <p>Active Members</p>
                </div>
                <div className="impact-card">
                  <div className="impact-number">50%</div>
                  <p>Average Blood Sugar Reduction</p>
                </div>
                <div className="impact-card">
                  <div className="impact-number">62%</div>
                  <p>Less Insulin Required</p>
                </div>
                <div className="impact-card">
                  <div className="impact-number">6x</div>
                  <p>More Calories Burned</p>
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