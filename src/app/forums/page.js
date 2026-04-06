import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Community Forums | Anandbodh™ – The Happy Life",
  description: "Join discussions on wellness, meditation, Ayurveda, and lifestyle transformation. Connect with thousands of members on their healing journey.",
};

export default function ForumsPage() {
  const forumCategories = [
    {
      name: "Getting Started",
      description: "New to Anandbodh? Start here for introductions and guidance.",
      topics: 245,
      posts: 1823,
      icon: "🌱",
      color: "#5DAF8A",
    },
    {
      name: "Soleus Activation",
      description: "Discuss techniques, share results, and ask questions about Soleus practice.",
      topics: 389,
      posts: 3156,
      icon: "🦵",
      color: "#6B9ED2",
    },
    {
      name: "Meditation & Mindfulness",
      description: "Share meditation experiences, techniques, and insights.",
      topics: 512,
      posts: 4287,
      icon: "🧘",
      color: "#9B8AC4",
    },
    {
      name: "Ayurveda & Nutrition",
      description: "Discuss doshas, herbs, recipes, and Ayurvedic lifestyle practices.",
      topics: 428,
      posts: 3542,
      icon: "🌿",
      color: "#87D068",
    },
    {
      name: "Success Stories",
      description: "Celebrate wins, share transformations, and inspire others.",
      topics: 156,
      posts: 892,
      icon: "🎉",
      color: "#FFB84D",
    },
    {
      name: "Health Conditions",
      description: "Support for specific conditions: diabetes, thyroid, heart health, etc.",
      topics: 334,
      posts: 2678,
      icon: "💊",
      color: "#E08A8A",
    },
  ];

  const recentTopics = [
    {
      title: "How I Reduced My Blood Sugar by 45% in 6 Weeks",
      author: "Priya M.",
      category: "Success Stories",
      replies: 23,
      views: 456,
      time: "2 hours ago",
    },
    {
      title: "Best Time of Day for Soleus Practice?",
      author: "Rahul K.",
      category: "Soleus Activation",
      replies: 15,
      views: 234,
      time: "4 hours ago",
    },
    {
      title: "Vata Dosha Balancing Foods - Your Favorites?",
      author: "Anjali S.",
      category: "Ayurveda & Nutrition",
      replies: 31,
      views: 567,
      time: "6 hours ago",
    },
    {
      title: "Meditation for Chronic Pain - What Works?",
      author: "David L.",
      category: "Meditation & Mindfulness",
      replies: 18,
      views: 389,
      time: "8 hours ago",
    },
    {
      title: "New Member Introduction - Hello from Mumbai!",
      author: "Sneha P.",
      category: "Getting Started",
      replies: 12,
      views: 145,
      time: "10 hours ago",
    },
  ];

  const popularTags = [
    "diabetes", "meditation", "soleus", "ayurveda", "stress-relief",
    "weight-loss", "thyroid", "blood-pressure", "sleep", "energy"
  ];

  return (
    <>
      <Navbar />
      <main className="forums-page">
        <section className="page-hero">
          <div className="container">
            <h1>Community Forums</h1>
            <p>Join thousands of members sharing their wellness journey. Ask questions, share experiences, and grow together.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="forums-header">
              <div className="forums-stats">
                <div className="forum-stat">
                  <span className="stat-value">10,234</span>
                  <span className="stat-label">Members</span>
                </div>
                <div className="forum-stat">
                  <span className="stat-value">2,064</span>
                  <span className="stat-label">Topics</span>
                </div>
                <div className="forum-stat">
                  <span className="stat-value">16,378</span>
                  <span className="stat-label">Posts</span>
                </div>
              </div>
              <Link href="/contact" className="btn btn-primary">
                Join Community
              </Link>
            </div>

            {/* Forum Categories */}
            <div className="forum-categories">
              <h2>Forum Categories</h2>
              <div className="categories-grid">
                {forumCategories.map((category, i) => (
                  <div key={i} className="forum-category-card" style={{ "--category-color": category.color }}>
                    <div className="category-icon">{category.icon}</div>
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <div className="category-stats">
                      <span>{category.topics} topics</span>
                      <span>•</span>
                      <span>{category.posts} posts</span>
                    </div>
                    <Link href="/forums" className="category-link">
                      Browse →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Topics */}
            <div className="recent-topics">
              <h2>Recent Discussions</h2>
              <div className="topics-list">
                {recentTopics.map((topic, i) => (
                  <div key={i} className="topic-item">
                    <div className="topic-main">
                      <h3>{topic.title}</h3>
                      <div className="topic-meta">
                        <span className="topic-author">by {topic.author}</span>
                        <span>in</span>
                        <span className="topic-category">{topic.category}</span>
                        <span>•</span>
                        <span className="topic-time">{topic.time}</span>
                      </div>
                    </div>
                    <div className="topic-stats">
                      <div className="topic-stat">
                        <span className="stat-icon">💬</span>
                        <span>{topic.replies}</span>
                      </div>
                      <div className="topic-stat">
                        <span className="stat-icon">👁️</span>
                        <span>{topic.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="topics-footer">
                <Link href="/forums" className="btn btn-outline">
                  View All Topics
                </Link>
              </div>
            </div>

            {/* Popular Tags */}
            <div className="popular-tags-section">
              <h2>Popular Tags</h2>
              <div className="tags-cloud">
                {popularTags.map((tag, i) => (
                  <Link key={i} href="/forums" className="tag-item">
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Forum Guidelines */}
            <div className="forum-guidelines">
              <h2>Community Guidelines</h2>
              <div className="guidelines-grid">
                <div className="guideline-item">
                  <div className="guideline-icon">🤝</div>
                  <h3>Be Respectful</h3>
                  <p>Treat all members with kindness and respect. We're all on a healing journey.</p>
                </div>
                <div className="guideline-item">
                  <div className="guideline-icon">💡</div>
                  <h3>Share Knowledge</h3>
                  <p>Your experience can help others. Share what works for you.</p>
                </div>
                <div className="guideline-item">
                  <div className="guideline-icon">🩺</div>
                  <h3>Not Medical Advice</h3>
                  <p>Always consult healthcare professionals for medical decisions.</p>
                </div>
                <div className="guideline-item">
                  <div className="guideline-icon">🌟</div>
                  <h3>Stay Positive</h3>
                  <p>Focus on solutions and support. Keep discussions constructive.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
