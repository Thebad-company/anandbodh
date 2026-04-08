"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { supabase } from "@/lib/supabase";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (err) {
      console.error('Failed to fetch blog posts:', err);
      // Fallback to empty array if fetch fails
      setBlogPosts([]);
    } finally {
      setLoading(false);
    }
  };
  const categories = [
    "All Posts",
    ...new Set(blogPosts.map(post => post.category).filter(Boolean))
  ];

  const filteredPosts = activeCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="blog-page">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="container">
            <div className="blog-hero-content">
              <span className="section-label">Knowledge Base</span>
              <h1>Blog & Articles</h1>
              <p>
                Evidence-based wellness insights, ancient wisdom, and modern science.
                <br />
                Curated for your journey to lasting health and vitality.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="blog-categories">
          <div className="container">
            <div className="categories-scroll">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="blog-grid-section">
          <div className="container">
            {loading ? (
              <p style={{ textAlign: 'center', padding: '2rem' }}>Loading blog posts...</p>
            ) : blogPosts.length === 0 ? (
              <p style={{ textAlign: 'center', padding: '2rem' }}>No blog posts published yet.</p>
            ) : (
              <div className="blog-grid">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    <div className="blog-card-image">
                      <div className="blog-card-emoji">📝</div>
                      <span className="blog-card-category">{post.category || 'General'}</span>
                    </div>
                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>Read</span>
                      </div>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt || post.content.substring(0, 150)}...</p>
                      <Link href={`/blog/${post.slug}`} className="blog-card-link">
                        Read Article →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="blog-newsletter">
          <div className="container">
            <div className="newsletter-card">
              <div className="newsletter-icon">
                <Icon name="Mail" size={40} />
              </div>
              <h2>Stay Updated with Wellness Insights</h2>
              <p>
                Get weekly articles, research updates, and exclusive wellness tips
                delivered to your inbox.
              </p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
              <p className="newsletter-privacy">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
