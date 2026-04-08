import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export const metadata = {
  title: "Testimonials | Anandbodh™ – Member Success Stories",
  description: "Read inspiring testimonials from members who transformed their health and lives.",
};

export default function TestimonialsPage() {
  const allTestimonials = [
    {
      avatar: "B",
      name: "Bryan Arnoldy",
      location: "Entrepreneur, Scoot Inc.",
      text: "Perfect place to grow and learn from true experts. The programs are thoughtfully designed and the community support is unlike anything I have experienced before. I wholeheartedly recommend it.",
      rating: 5,
    },
    {
      avatar: "J",
      name: "Joshua William",
      location: "Data Science, Google",
      text: "I'm closer than ever to achieving my wellness goals. The structured programs are perfect for those without time for traditional education — science-backed and incredibly effective.",
      rating: 5,
    },
    {
      avatar: "S",
      name: "Sushmita S.",
      location: "Content Creator",
      text: "The integration of Ayurveda and modern science is what sets Anandbodh apart. I've felt a significant shift in my energy levels and mental clarity since joining.",
      rating: 5,
    },
    {
      avatar: "P",
      name: "Priya Sharma",
      location: "Consultant, Delhi",
      text: "After years of struggling with stress and low energy, Anandbodh gave me back my life. The Soleus Activation protocol is a game-changer!",
      rating: 5,
    },
    {
      avatar: "R",
      name: "Rajesh Kumar",
      location: "Business Owner, Mumbai",
      text: "The meditation program helped me manage my anxiety and improve my focus at work. My productivity has increased by 40% in just 3 months.",
      rating: 5,
    },
    {
      avatar: "A",
      name: "Ananya Patel",
      location: "Fitness Enthusiast, Bangalore",
      text: "I've tried many wellness programs, but Anandbodh is the only one that addresses the root cause of health issues. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Member Testimonials</h1>
            <p>Real stories from real people who transformed their health and lives</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="testimonials-intro">
              <h2>What Our Members Say</h2>
              <p>
                These are genuine testimonials from members who have experienced real transformations 
                through our evidence-based wellness programs and supportive community.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="all-testimonials-grid">
              {allTestimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card-large">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">{testimonial.avatar}</div>
                    <div className="testimonial-info">
                      <h3>{testimonial.name}</h3>
                      <p className="testimonial-location">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="testimonial-rating">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                  
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="testimonial-stats">
              <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Community Impact</h2>
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-number">10,000+</div>
                  <p>Active Members</p>
                </div>
                <div className="stat-box">
                  <div className="stat-number">95%</div>
                  <p>Satisfaction Rate</p>
                </div>
                <div className="stat-box">
                  <div className="stat-number">50%</div>
                  <p>Avg Blood Sugar Reduction</p>
                </div>
                <div className="stat-box">
                  <div className="stat-number">4.9/5</div>
                  <p>Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Testimonials />
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}