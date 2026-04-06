"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const blogPosts = [
    {
      category: "Mental Wellness",
      title: "Meditation as Medicine: The Science of Stillness",
      excerpt: "How regular meditation creates measurable changes in brain structure, cortisol levels, and immune response — backed by decades of clinical research.",
      date: "March 15, 2025",
      readTime: "8 min read",
      image: "🧘",
      slug: "meditation-as-medicine",
    },
    {
      category: "Metabolic Health",
      title: "The Science of Stress: How Chronic Stress Alters Brain and Body",
      excerpt: "Chronic stress rewires the brain, disrupts hormones, and directly causes lifestyle disorders. Understanding this is the first step to reversal.",
      date: "March 12, 2025",
      readTime: "10 min read",
      image: "🧬",
      slug: "stress-science",
    },
    {
      category: "Ayurveda",
      title: "Living In Tune: How Dosha Balance Creates Life Balance",
      excerpt: "Each person has a unique constitutional blueprint (Prakriti). When your dosha is in balance, disease cannot take root — and vitality becomes your natural state.",
      date: "March 10, 2025",
      readTime: "12 min read",
      image: "☯️",
      slug: "ayurveda-balance",
    },
    {
      category: "Emotional Health",
      title: "Emotional Detox: Healing Beyond the Physical Body",
      excerpt: "Emotions get stored in our tissues. Learn how to release trapped emotional energy and create space for true healing and transformation.",
      date: "March 8, 2025",
      readTime: "9 min read",
      image: "💚",
      slug: "emotional-detox",
    },
    {
      category: "Medical Insights",
      title: "When Disease Becomes Cure: A Medical View on Acute Illness",
      excerpt: "Not all illness is bad. Acute conditions can be the body's way of purging toxins and resetting systems. A paradigm shift in understanding health.",
      date: "March 5, 2025",
      readTime: "11 min read",
      image: "🩺",
      slug: "disease-as-cure",
    },
    {
      category: "Energy & Vitality",
      title: "Inner Energy, Outer Health: The Secret Path to Healing",
      excerpt: "Your body's energy channels (Nadis) determine your health. Learn how to activate, balance, and optimize your vital energy for lasting wellness.",
      date: "March 3, 2025",
      readTime: "7 min read",
      image: "✨",
      slug: "inner-energy",
    },
    {
      category: "Soleus Science",
      title: "The Soleus Muscle: Your Body's Hidden Metabolic Powerhouse",
      excerpt: "Discover why this small postural muscle can reduce blood sugar by 50%, burn 6× more calories, and revolutionize metabolic health.",
      date: "March 1, 2025",
      readTime: "10 min read",
      image: "💪",
      slug: "soleus-muscle",
    },
    {
      category: "Meditation",
      title: "Divyanubhuti Dhyan: The Meditation That Changes Everything",
      excerpt: "Experience the divine through resonance-based meditation. A practice that builds patience, relieves chronic pain, and creates sustained tranquility.",
      date: "February 28, 2025",
      readTime: "8 min read",
      image: "🕉️",
      slug: "divyanubhuti-dhyan",
    },
    {
      category: "Lifestyle",
      title: "Reversing Lifestyle Disorders: The Root Cause Approach",
      excerpt: "Diabetes, hypertension, thyroid issues — these aren't diseases to manage, they're conditions to reverse. Here's how we address the root causes.",
      date: "February 25, 2025",
      readTime: "13 min read",
      image: "🌱",
      slug: "reversing-disorders",
    },
    {
      category: "Movement",
      title: "Movement as Medicine: Transform Your Health Through Exercise",
      excerpt: "The human body is designed for movement. Discover how regular, varied movement prevents disease, improves mood, and extends your healthspan.",
      date: "April 5, 2026",
      readTime: "9 min read",
      image: "💪",
      slug: "movement-exercise",
    },
    {
      category: "Sleep",
      title: "The Science of Quality Sleep: Your Foundation for Health",
      excerpt: "Sleep is not a luxury—it's a biological necessity. Learn evidence-based techniques to improve sleep quality and transform your health.",
      date: "April 4, 2026",
      readTime: "8 min read",
      image: "😴",
      slug: "sleep-quality",
    },
    {
      category: "Nutrition",
      title: "Nutrition as Medicine: Fuel Your Body with Purpose",
      excerpt: "What you eat directly impacts your energy, mood, immunity, and longevity. Discover evidence-based nutrition principles for optimal wellness.",
      date: "April 3, 2026",
      readTime: "10 min read",
      image: "🥗",
      slug: "nutrition-wellness",
    },
  ];

  const categories = [
    "All Posts",
    "Mental Wellness",
    "Metabolic Health",
    "Ayurveda",
    "Meditation",
    "Lifestyle",
    "Movement",
    "Sleep",
    "Nutrition",
  ];

  const filteredPosts = activeCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category.includes(activeCategory));

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
            <div className="blog-grid">
              {filteredPosts.map((post, i) => (
                <article key={i} className="blog-card">
                  <div className="blog-card-image">
                    <div className="blog-card-emoji">{post.image}</div>
                    <span className="blog-card-category">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="blog-card-link">
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
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
