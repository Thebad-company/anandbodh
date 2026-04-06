import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Sitemap | Anandbodh™ – Complete Website Navigation",
  description: "Browse all pages and content on the Anandbodh wellness platform. Find programs, blog posts, resources, and more.",
};

export default function SitemapPage() {
  const sections = [
    {
      title: "Main Pages",
      icon: "home",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Programs",
      icon: "book",
      links: [
        { label: "All Programs", href: "/programs" },
        { label: "Soleus Activation Series", href: "/programs/soleus-activation" },
        { label: "Dhyan Meditation", href: "/programs/meditation" },
        { label: "Ayurveda Longevity", href: "/programs/ayurveda" },
        { label: "Thrive@Work", href: "/programs/thrive-at-work" },
        { label: "Wake Up Life", href: "/programs/wake-up-life" },
      ],
    },
    {
      title: "Blog & Content",
      icon: "article",
      links: [
        { label: "Blog Home", href: "/blog" },
        { label: "Meditation as Medicine", href: "/blog/meditation-as-medicine" },
        { label: "The Science of Stress", href: "/blog/stress-science" },
        { label: "Emotional Detox", href: "/blog/emotional-detox" },
        { label: "Ayurveda & Balance", href: "/blog/ayurveda-balance" },
        { label: "The Soleus Muscle", href: "/blog/soleus-muscle" },
        { label: "Divyanubhuti Dhyan", href: "/blog/divyanubhuti-dhyan" },
        { label: "Reversing Disorders", href: "/blog/reversing-disorders" },
      ],
    },
    {
      title: "Community",
      icon: "users",
      links: [
        { label: "Community Hub", href: "/community" },
        { label: "Forums", href: "/forums" },
        { label: "Groups", href: "/groups" },
        { label: "Success Stories", href: "/success-stories" },
        { label: "Testimonials", href: "/testimonials" },
      ],
    },
    {
      title: "Resources",
      icon: "lightbulb",
      links: [
        { label: "Insights & Knowledge", href: "/insights" },
        { label: "Research & Science", href: "/research" },
        { label: "FAQ", href: "/faq" },
        { label: "Our Experts", href: "/experts" },
        { label: "Dashboard", href: "/dashboard" },
      ],
    },
    {
      title: "Pricing & Plans",
      icon: "chart",
      links: [
        { label: "Pricing Plans", href: "/pricing" },
      ],
    },
    {
      title: "Legal & Info",
      icon: "lock",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <h1>Website Sitemap</h1>
            <p>Complete navigation guide to all Anandbodh content and resources</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sitemap-intro">
              <h2>Explore Our Platform</h2>
              <p>
                Welcome to the Anandbodh wellness ecosystem. Below you'll find all our pages, programs, 
                blog content, and resources organized by category. Click any link to explore.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sitemap-grid">
              {sections.map((section, idx) => (
                <div key={idx} className="sitemap-section">
                  <div className="sitemap-section-header">
                    <span className="sitemap-icon">
                      <Icon name={
                        section.title === "Main Pages" ? "Lightbulb" :
                        section.title === "Programs" ? "Book" :
                        section.title === "Blog & Content" ? "Book" :
                        section.title === "Community" ? "Users" :
                        section.title === "Resources" ? "Lightbulb" :
                        section.title === "Pricing & Plans" ? "Chart" :
                        "Lock"
                      } size={24} />
                    </span>
                    <h3>{section.title}</h3>
                  </div>
                  <ul className="sitemap-links">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link href={link.href} className="sitemap-link">
                          {link.label}
                          <span className="sitemap-arrow">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="sitemap-stats">
              <h2>Platform Overview</h2>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">35+</div>
                  <p>Pages & Routes</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">7</div>
                  <p>Blog Articles</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">5</div>
                  <p>Wellness Programs</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">6</div>
                  <p>Expert Profiles</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">10,000+</div>
                  <p>Community Members</p>
                </div>
                <div className="stat-card">
                  <div className="stat-number">24/7</div>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sitemap-features">
              <h2>What You'll Find Here</h2>
              <div className="features-grid">
                <div className="feature-card">
                  <span className="feature-icon">
                    <Icon name="Book" size={32} />
                  </span>
                  <h4>Evidence-Based Programs</h4>
                  <p>Scientifically-backed wellness programs designed for transformation</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">
                    <Icon name="Lightbulb" size={32} />
                  </span>
                  <h4>Educational Content</h4>
                  <p>In-depth blog articles and research on wellness topics</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">
                    <Icon name="Users" size={32} />
                  </span>
                  <h4>Thriving Community</h4>
                  <p>Connect with thousands of members on their wellness journey</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">
                    <Icon name="User" size={32} />
                  </span>
                  <h4>Expert Guidance</h4>
                  <p>Learn from world-class wellness experts and practitioners</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">
                    <Icon name="Chart" size={32} />
                  </span>
                  <h4>Success Stories</h4>
                  <p>Real transformations from real people like you</p>
                </div>
                <div className="feature-card">
                  <span className="feature-icon">
                    <Icon name="Brain" size={32} />
                  </span>
                  <h4>Research & Science</h4>
                  <p>Backed by clinical studies and scientific evidence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="sitemap-cta">
              <h2>Ready to Start Your Wellness Journey?</h2>
              <p>
                Whether you're looking to reverse lifestyle disorders, reduce stress, or achieve optimal health,
                Anandbodh has the programs and community support you need.
              </p>
              <div className="sitemap-cta-buttons">
                <Link href="/programs" className="btn btn-primary">
                  Explore Programs
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Get Started
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
