import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export const metadata = {
  title: "Healing Groups | Anandbodh™ – The Happy Life",
  description: "Join specialized healing groups focused on specific health conditions and wellness goals. Connect with members who share your journey.",
};

export default function GroupsPage() {
  const groups = [
    {
      name: "जागृति – Wake Up Life",
      description: "Discover your purpose and awaken to your full potential through the 7-pillar framework.",
      members: 1245,
      posts: 3456,
      icon: "🌅",
      color: "#FFB84D",
      active: "Very Active",
    },
    {
      name: "उत्कर्ष – Thrive@Work",
      description: "Workplace wellness, stress management, and professional growth strategies.",
      members: 892,
      posts: 2134,
      icon: "💼",
      color: "#6B9ED2",
      active: "Active",
    },
    {
      name: "आयुर्वेद – Āyurveda Longevity",
      description: "Ancient wisdom for modern living. Dosha balance, herbs, and Ayurvedic lifestyle.",
      members: 2156,
      posts: 5678,
      icon: "🌿",
      color: "#87D068",
      active: "Very Active",
    },
    {
      name: "कायाकल्पम् – Lifestyle Disorders Reversal",
      description: "Reverse diabetes, hypertension, thyroid issues through holistic protocols.",
      members: 1834,
      posts: 4892,
      icon: "🧘",
      color: "#9B8AC4",
      active: "Very Active",
    },
    {
      name: "ध्यानम् – Dhyan Meditation",
      description: "Meditation techniques, mindfulness practices, and spiritual growth.",
      members: 1567,
      posts: 3789,
      icon: "🕉️",
      color: "#E08A8A",
      active: "Active",
    },
    {
      name: "Heart Health Warriors",
      description: "Support for cardiovascular health, blood pressure management, and heart wellness.",
      members: 945,
      posts: 2345,
      icon: "❤️",
      color: "#E74C3C",
      active: "Active",
    },
    {
      name: "Diabetes Freedom",
      description: "Blood sugar management, insulin sensitivity, and metabolic health optimization.",
      members: 1678,
      posts: 4123,
      icon: "🩸",
      color: "#3498DB",
      active: "Very Active",
    },
    {
      name: "Thyroid Balance",
      description: "Support for thyroid health, hormone balance, and energy restoration.",
      members: 823,
      posts: 1956,
      icon: "🦋",
      color: "#9B59B6",
      active: "Active",
    },
    {
      name: "Weight Wellness",
      description: "Healthy weight management through metabolic optimization and lifestyle changes.",
      members: 1234,
      posts: 3012,
      icon: "⚖️",
      color: "#16A085",
      active: "Active",
    },
    {
      name: "Sleep & Energy",
      description: "Improve sleep quality, boost energy levels, and overcome fatigue.",
      members: 1089,
      posts: 2567,
      icon: "😴",
      color: "#34495E",
      active: "Active",
    },
    {
      name: "Women's Wellness",
      description: "PCOS, hormonal balance, menopause support, and women's health topics.",
      members: 1456,
      posts: 3678,
      icon: "🌸",
      color: "#E91E63",
      active: "Very Active",
    },
    {
      name: "Senior Vitality",
      description: "Wellness for 50+. Longevity, mobility, cognitive health, and aging gracefully.",
      members: 678,
      posts: 1456,
      icon: "🌟",
      color: "#FF9800",
      active: "Active",
    },
  ];

  const featuredGroups = groups.slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="groups-page">
        <section className="page-hero">
          <div className="container">
            <h1>Healing Groups</h1>
            <p>Join specialized communities focused on your specific health goals. Connect, share, and heal together.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {/* Stats */}
            <div className="groups-stats">
              <div className="group-stat">
                <span className="stat-value">12</span>
                <span className="stat-label">Active Groups</span>
              </div>
              <div className="group-stat">
                <span className="stat-value">15,601</span>
                <span className="stat-label">Total Members</span>
              </div>
              <div className="group-stat">
                <span className="stat-value">39,086</span>
                <span className="stat-label">Total Posts</span>
              </div>
            </div>

            {/* Featured Groups */}
            <div className="featured-groups">
              <h2>Featured Groups</h2>
              <div className="featured-grid">
                {featuredGroups.map((group, i) => (
                  <div key={i} className="featured-group-card" style={{ "--group-color": group.color }}>
                    <div className="group-badge">{group.active}</div>
                    <div className="group-icon-large">{group.icon}</div>
                    <h3>{group.name}</h3>
                    <p>{group.description}</p>
                    <div className="group-meta">
                      <span>
                        <Icon name="Users" size={16} style={{ marginRight: "4px" }} />
                        {group.members} members
                      </span>
                      <span>
                        <Icon name="Message" size={16} style={{ marginRight: "4px" }} />
                        {group.posts} posts
                      </span>
                    </div>
                    <Link href="/groups" className="btn btn-primary btn-block">
                      Join Group
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* All Groups */}
            <div className="all-groups">
              <h2>All Healing Groups</h2>
              <div className="groups-grid">
                {groups.map((group, i) => (
                  <div key={i} className="group-card">
                    <div className="group-header">
                      <div className="group-icon" style={{ background: group.color }}>
                        {group.icon}
                      </div>
                      <div className="group-activity-badge" data-active={group.active}>
                        {group.active}
                      </div>
                    </div>
                    <h3>{group.name}</h3>
                    <p>{group.description}</p>
                    <div className="group-stats-row">
                      <span>
                        <Icon name="Users" size={16} style={{ marginRight: "4px" }} />
                        {group.members}
                      </span>
                      <span>
                        <Icon name="Message" size={16} style={{ marginRight: "4px" }} />
                        {group.posts}
                      </span>
                    </div>
                    <Link href="/groups" className="group-join-btn">
                      Join Group →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Join Groups */}
            <div className="why-join-section">
              <h2>Why Join Healing Groups?</h2>
              <div className="why-join-grid">
                <div className="why-join-card">
                  <div className="why-icon">
                    <Icon name="Users" size={32} />
                  </div>
                  <h3>Shared Experience</h3>
                  <p>Connect with others who understand your journey and challenges.</p>
                </div>
                <div className="why-join-card">
                  <div className="why-icon">
                    <Icon name="Lightbulb" size={32} />
                  </div>
                  <h3>Practical Tips</h3>
                  <p>Learn what works from members who've been there.</p>
                </div>
                <div className="why-join-card">
                  <div className="why-icon">
                    <Icon name="Zap" size={32} />
                  </div>
                  <h3>Focused Support</h3>
                  <p>Get specific guidance for your health condition or goal.</p>
                </div>
                <div className="why-join-card">
                  <div className="why-icon">
                    <Icon name="Chart" size={32} />
                  </div>
                  <h3>Track Progress</h3>
                  <p>Share milestones and celebrate wins together.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="groups-cta">
              <h2>Ready to Join a Healing Community?</h2>
              <p>Start connecting with members who share your wellness goals.</p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
