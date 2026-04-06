"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Icon } from "@/components/Icons";
import Link from "next/link";

export default function DashboardPage() {
  const [user] = useState({
    name: "Welcome",
    email: "member@anandbodh.com",
    memberSince: "March 2025",
  });

  const stats = [
    { label: "Programs Enrolled", value: "3", icon: "Book", color: "#6B9ED2" },
    { label: "Days Active", value: "45", icon: "Calendar", color: "#5DAF8A" },
    { label: "Sessions Completed", value: "28", icon: "Check", color: "#E08A8A" },
    { label: "Community Posts", value: "12", icon: "Message", color: "#9B8AC4" },
  ];

  const programs = [
    {
      name: "Soleus Activation Series",
      progress: 65,
      nextSession: "Session 27: Advanced Techniques",
      link: "/programs/soleus-activation",
    },
    {
      name: "Dhyan Meditation",
      progress: 40,
      nextSession: "Session 12: Loving-Kindness Practice",
      link: "/programs/meditation",
    },
    {
      name: "Ayurveda Longevity",
      progress: 25,
      nextSession: "Session 8: Dosha Balancing Foods",
      link: "/programs/ayurveda",
    },
  ];

  const recentActivity = [
    { type: "session", text: "Completed Soleus Shakti Session", time: "2 hours ago" },
    { type: "post", text: "Posted in Healing Groups", time: "5 hours ago" },
    { type: "achievement", text: "Earned 30-Day Streak Badge", time: "1 day ago" },
    { type: "session", text: "Completed Meditation Session", time: "2 days ago" },
  ];

  const upcomingEvents = [
    { title: "Expert Q&A: Dr. Rajni Samota", date: "March 20, 2025", time: "6:00 PM IST" },
    { title: "Community Meditation Circle", date: "March 22, 2025", time: "7:00 AM IST" },
    { title: "Ayurveda Workshop", date: "March 25, 2025", time: "5:00 PM IST" },
  ];

  return (
    <>
      <Navbar />
      <main className="dashboard-page">
        <section className="dashboard-hero">
          <div className="container">
            <div className="dashboard-header">
              <div className="user-info">
                <div className="user-avatar">{user.avatar}</div>
                <div>
                  <h1>Welcome back, {user.name}!</h1>
                  <p>Member since {user.memberSince}</p>
                </div>
              </div>
              <Link href="/programs" className="btn btn-primary">
                Browse Programs
              </Link>
            </div>
          </div>
        </section>

        <section className="dashboard-content">
          <div className="container">
            {/* Stats Grid */}
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-card" style={{ "--stat-color": stat.color }}>
                  <Icon name={stat.icon} size={32} className="stat-icon" />
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="dashboard-grid">
              {/* My Programs */}
              <div className="dashboard-section">
                <h2>My Programs</h2>
                <div className="programs-list">
                  {programs.map((program, i) => (
                    <div key={i} className="program-item">
                      <div className="program-header">
                        <h3>{program.name}</h3>
                        <span className="program-progress-text">{program.progress}%</span>
                      </div>
                      <div className="progress-bar">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${program.progress}%` }}
                        ></div>
                      </div>
                      <p className="program-next">{program.nextSession}</p>
                      <Link href={program.link} className="program-continue">
                        Continue →
                      </Link>
                    </div>
                  ))}
                </div>
                <Link href="/programs" className="view-all-link">
                  View All Programs →
                </Link>
              </div>

              {/* Recent Activity */}
              <div className="dashboard-section">
                <h2>Recent Activity</h2>
                <div className="activity-list">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="activity-item">
                      <div className={`activity-icon activity-${activity.type}`}>
                        {activity.type === "session" && <Icon name="Check" size={20} />}
                        {activity.type === "post" && <Icon name="Message" size={20} />}
                        {activity.type === "achievement" && <Icon name="Award" size={20} />}
                      </div>
                      <div className="activity-content">
                        <p>{activity.text}</p>
                        <span className="activity-time">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="dashboard-section">
              <h2>Upcoming Events</h2>
              <div className="events-grid">
                {upcomingEvents.map((event, i) => (
                  <div key={i} className="event-card">
                    <Icon name="Calendar" size={32} className="event-icon" />
                    <h3>{event.title}</h3>
                    <p className="event-date">{event.date}</p>
                    <p className="event-time">{event.time}</p>
                    <button className="btn btn-outline btn-sm">Add to Calendar</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="dashboard-section">
              <h2>Quick Actions</h2>
              <div className="quick-actions-grid">
                <Link href="/community" className="action-card">
                  <Icon name="Users" size={32} className="action-icon" />
                  <h3>Join Community</h3>
                  <p>Connect with members</p>
                </Link>
                <Link href="/blog" className="action-card">
                  <Icon name="Book" size={32} className="action-icon" />
                  <h3>Read Articles</h3>
                  <p>Latest wellness insights</p>
                </Link>
                <Link href="/experts" className="action-card">
                  <Icon name="User" size={32} className="action-icon" />
                  <h3>Book Consultation</h3>
                  <p>Talk to an expert</p>
                </Link>
                <Link href="/contact" className="action-card">
                  <Icon name="Message" size={32} className="action-icon" />
                  <h3>Get Support</h3>
                  <p>We're here to help</p>
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
