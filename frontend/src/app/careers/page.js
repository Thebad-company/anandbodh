import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { generateMetadata, pageMetadata } from "@/lib/seoMetadata";

export const metadata = generateMetadata({
  title: pageMetadata.careers.title,
  description: pageMetadata.careers.description,
  keywords: pageMetadata.careers.keywords,
  url: pageMetadata.careers.url,
});

export default function CareersPage() {
  const openPositions = [
    {
      title: "Wellness Coach",
      department: "Programs",
      location: "Remote",
      type: "Full-time",
      description: "Guide members through wellness programs and provide personalized support.",
    },
    {
      title: "Content Creator",
      department: "Content",
      location: "Jaipur, India",
      type: "Full-time",
      description: "Create engaging wellness content, blog posts, and educational materials.",
    },
    {
      title: "Community Manager",
      department: "Community",
      location: "Remote",
      type: "Full-time",
      description: "Build and nurture our thriving wellness community.",
    },
    {
      title: "Full Stack Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      description: "Build and maintain our wellness platform and tools.",
    },
    {
      title: "Ayurveda Specialist",
      department: "Programs",
      location: "Jaipur, India",
      type: "Full-time",
      description: "Develop and teach Ayurvedic wellness programs.",
    },
    {
      title: "Customer Success Manager",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      description: "Ensure member satisfaction and program success.",
    },
  ];

  const values = [
    {
      icon: "growth",
      title: "Holistic Growth",
      description: "We believe in growing together - professionally and personally.",
    },
    {
      icon: "heart",
      title: "Compassion First",
      description: "Everything we do is guided by compassion for our members and team.",
    },
    {
      icon: "brain",
      title: "Evidence-Based",
      description: "We back everything with science and real results.",
    },
    {
      icon: "users",
      title: "Community",
      description: "We're building a movement, not just a company.",
    },
    {
      icon: "star",
      title: "Excellence",
      description: "We pursue excellence in everything we create.",
    },
    {
      icon: "globe",
      title: "Impact",
      description: "We measure success by the lives we transform.",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-image">
          <div className="page-hero-overlay">
            <div className="container">
              <h1>Join Our Wellness Movement</h1>
              <p>Help us transform lives through evidence-based wellness</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="careers-intro">
              <h2>Why Join Anandbodh?</h2>
              <p>
                We're not just building a company—we're building a movement to help millions 
                reverse lifestyle disorders and achieve optimal health. If you're passionate about 
                wellness and want to make a real impact, we'd love to have you on our team.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Our Values</h2>
            <div className="values-grid">
              {values.map((value, idx) => (
                <div key={idx} className="value-card">
                  <span className="value-icon">
                    <Icon 
                      name={
                        value.title === "Holistic Growth" ? "TrendingUp" :
                        value.title === "Compassion First" ? "Heart" :
                        value.title === "Evidence-Based" ? "Brain" :
                        value.title === "Community" ? "Users" :
                        value.title === "Excellence" ? "Star" :
                        "Globe"
                      }
                      size={40}
                    />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>Open Positions</h2>
            <div className="positions-grid">
              {openPositions.map((position, idx) => (
                <div key={idx} className="position-card">
                  <div className="position-header">
                    <h3>{position.title}</h3>
                    <span className="position-type">{position.type}</span>
                  </div>
                  <div className="position-meta">
                    <span className="position-dept">
                      <Icon name="Book" size={16} style={{ marginRight: "4px" }} />
                      {position.department}
                    </span>
                    <span className="position-loc">
                      <Icon name="Globe" size={16} style={{ marginRight: "4px" }} />
                      {position.location}
                    </span>
                  </div>
                  <p className="position-desc">{position.description}</p>
                  <Link href="/contact" className="position-apply">
                    Apply Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="careers-benefits">
              <h2>What We Offer</h2>
              <div className="benefits-grid">
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <Icon name="Chart" size={32} />
                  </span>
                  <h4>Competitive Compensation</h4>
                  <p>Market-competitive salaries and benefits</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <Icon name="Heart" size={32} />
                  </span>
                  <h4>Health & Wellness</h4>
                  <p>Comprehensive health insurance and wellness programs</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <Icon name="Lightbulb" size={32} />
                  </span>
                  <h4>Flexible Work</h4>
                  <p>Remote work options and flexible schedules</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <Icon name="Book" size={32} />
                  </span>
                  <h4>Learning & Development</h4>
                  <p>Continuous learning opportunities and training</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <Icon name="Rocket" size={32} />
                  </span>
                  <h4>Growth Opportunities</h4>
                  <p>Clear career progression and advancement paths</p>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">
                    <Icon name="Star" size={32} />
                  </span>
                  <h4>Impact</h4>
                  <p>Make a real difference in people's lives</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="careers-culture">
              <h2>Our Culture</h2>
              <div className="culture-content">
                <div className="culture-text">
                  <h3>We're Building Something Special</h3>
                  <p>
                    At Anandbodh, we believe that work should be meaningful. Our team is composed 
                    of passionate individuals who are committed to transforming lives through wellness.
                  </p>
                  <p>
                    We foster a culture of collaboration, continuous learning, and mutual support. 
                    Whether you're working remotely or in our Jaipur office, you'll be part of a 
                    community that values your contributions and supports your growth.
                  </p>
                  <ul className="culture-list">
                    <li>
                      <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                      Collaborative and supportive team environment
                    </li>
                    <li>
                      <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                      Opportunities to learn from wellness experts
                    </li>
                    <li>
                      <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                      Access to all our wellness programs
                    </li>
                    <li>
                      <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                      Regular team events and celebrations
                    </li>
                    <li>
                      <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                      Voice in company decisions
                    </li>
                    <li>
                      <Icon name="Check" size={16} style={{ marginRight: "8px" }} />
                      Work-life balance and wellness focus
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="careers-cta">
              <h2>Ready to Make an Impact?</h2>
              <p>
                If you're passionate about wellness and want to be part of a movement that's 
                transforming lives, we'd love to hear from you.
              </p>
              <div className="careers-cta-buttons">
                <Link href="/contact" className="btn btn-primary">
                  Apply Now
                </Link>
                <Link href="/" className="btn btn-outline">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
