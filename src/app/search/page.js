"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const allContent = [
    // Programs
    { type: "Program", title: "Soleus Activation", slug: "/programs/soleus-activation", description: "Activate your soleus muscle for metabolic health" },
    { type: "Program", title: "Dhyan Meditation", slug: "/programs/meditation", description: "Transform your mind through guided meditation" },
    { type: "Program", title: "Ayurveda Longevity", slug: "/programs/ayurveda", description: "Ancient wisdom for modern wellness" },
    { type: "Program", title: "Thrive@Work", slug: "/programs/thrive-at-work", description: "Wellness in the workplace" },
    { type: "Program", title: "Wake Up Life", slug: "/programs/wake-up-life", description: "Transform your daily routine" },

    // Blog Posts
    { type: "Blog", title: "Meditation as Medicine", slug: "/blog/meditation-as-medicine", description: "The science of stillness and its healing power" },
    { type: "Blog", title: "The Science of Stress", slug: "/blog/stress-science", description: "How chronic stress affects your health" },
    { type: "Blog", title: "Emotional Detox", slug: "/blog/emotional-detox", description: "Healing beyond the physical body" },
    { type: "Blog", title: "Ayurveda for Balance", slug: "/blog/ayurveda-balance", description: "Living in tune with your constitution" },
    { type: "Blog", title: "The Soleus Muscle", slug: "/blog/soleus-muscle", description: "Your body's hidden metabolic powerhouse" },
    { type: "Blog", title: "Divyanubhuti Dhyan", slug: "/blog/divyanubhuti-dhyan", description: "The meditation that changes everything" },
    { type: "Blog", title: "Reversing Disorders", slug: "/blog/reversing-disorders", description: "The root cause approach to healing" },
    { type: "Blog", title: "Movement as Medicine", slug: "/blog/movement-exercise", description: "Transform your health through exercise" },
    { type: "Blog", title: "Sleep Quality", slug: "/blog/sleep-quality", description: "Your foundation for optimal health" },
    { type: "Blog", title: "Nutrition as Medicine", slug: "/blog/nutrition-wellness", description: "Fuel your body with purpose" },

    // Pages
    { type: "Page", title: "About Us", slug: "/about", description: "Learn about our mission and team" },
    { type: "Page", title: "Experts", slug: "/experts", description: "Meet our wellness experts" },
    { type: "Page", title: "Community", slug: "/community", description: "Join our wellness community" },
    { type: "Page", title: "Forums", slug: "/forums", description: "Discuss wellness with others" },
    { type: "Page", title: "Groups", slug: "/groups", description: "Join healing groups" },
    { type: "Page", title: "FAQ", slug: "/faq", description: "Frequently asked questions" },
    { type: "Page", title: "Testimonials", slug: "/testimonials", description: "Success stories from our community" },
    { type: "Page", title: "Success Stories", slug: "/success-stories", description: "Real transformations" },
    { type: "Page", title: "Pricing", slug: "/pricing", description: "Our program pricing" },
    { type: "Page", title: "Contact", slug: "/contact", description: "Get in touch with us" },
    { type: "Page", title: "Careers", slug: "/careers", description: "Join our team" },
    { type: "Page", title: "Newsletter", slug: "/newsletter", description: "Subscribe to wellness insights" },
    { type: "Page", title: "Research", slug: "/research", description: "Science behind our programs" },
    { type: "Page", title: "Dashboard", slug: "/dashboard", description: "Your wellness dashboard" },
  ];

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return allContent.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query)
    ).slice(0, 20);
  }, [searchQuery]);

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero-image">
          <div className="page-hero-overlay">
            <div className="container">
              <h1>Search Anandbodh</h1>
              <p>Find wellness content and resources</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="search-container">
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search programs, blog posts, pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  autoFocus
                />
                <span className="search-icon">
                  <Icon name="Lightbulb" size={20} />
                </span>
              </div>

              {searchQuery.trim() && (
                <div className="search-results">
                  <p className="results-count">
                    Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                  </p>

                  {searchResults.length > 0 ? (
                    <div className="results-list">
                      {searchResults.map((result, idx) => (
                        <Link key={idx} href={result.slug} className="result-item">
                          <div className="result-type">{result.type}</div>
                          <div className="result-content">
                            <h3>{result.title}</h3>
                            <p>{result.description}</p>
                          </div>
                          <span className="result-arrow">→</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="no-results">
                      <p>No results found for "{searchQuery}"</p>
                      <p>Try searching for programs, blog topics, or page names</p>
                    </div>
                  )}
                </div>
              )}

              {!searchQuery.trim() && (
                <div className="search-suggestions">
                  <h3>Popular Searches</h3>
                  <div className="suggestions-grid">
                    <Link href="/programs/soleus-activation" className="suggestion-card">
                      <span>
                        <Icon name="Dumbbell" size={24} />
                      </span>
                      <p>Soleus Activation</p>
                    </Link>
                    <Link href="/programs/meditation" className="suggestion-card">
                      <span>
                        <Icon name="Meditation" size={24} />
                      </span>
                      <p>Meditation</p>
                    </Link>
                    <Link href="/blog" className="suggestion-card">
                      <span>
                        <Icon name="Book" size={24} />
                      </span>
                      <p>Blog Articles</p>
                    </Link>
                    <Link href="/programs/ayurveda" className="suggestion-card">
                      <span>
                        <Icon name="Leaf" size={24} />
                      </span>
                      <p>Ayurveda</p>
                    </Link>
                    <Link href="/community" className="suggestion-card">
                      <span>
                        <Icon name="Users" size={24} />
                      </span>
                      <p>Community</p>
                    </Link>
                    <Link href="/experts" className="suggestion-card">
                      <span>
                        <Icon name="User" size={24} />
                      </span>
                      <p>Experts</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
