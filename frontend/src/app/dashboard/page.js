"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Icon } from "@/components/Icons";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [userProfile, setUserProfile] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [profileLoading, setProfileLoading] = useState(true);

  const getNameFromEmail = (email) => {
    if (!email) return "User";
    const namePart = email.split("@")[0];
    return namePart
      .split(/[._-]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const stats = [
    { label: "Programs Enrolled", value: enrollments.length.toString(), icon: "Book", color: "#6B9ED2" },
    { label: "Days Active", value: userProfile ? Math.floor((new Date() - new Date(userProfile.created_at)) / (1000 * 60 * 60 * 24)).toString() : "0", icon: "Calendar", color: "#5DAF8A" },
    { label: "Sessions Completed", value: "0", icon: "Check", color: "#E08A8A" },
    { label: "Community Posts", value: "0", icon: "Message", color: "#9B8AC4" },
  ];

  useEffect(() => {
    if (loading) return;

    if (!user) {
      router.push("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        // Fetch user profile
        const { data: profile, error: profileError } = await supabase
          .from("user_profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (profileError && profileError.code !== 'PGRST116') {
          console.error("Profile error:", profileError);
        }
        if (profile) {
          setUserProfile(profile);
        }

        // Fetch enrollments
        const { data: enrollmentsData, error: enrollmentsError } = await supabase
          .from("enrollments")
          .select("*, programs(*)")
          .eq("user_id", user.id);

        if (enrollmentsError) {
          console.error("Enrollments error:", enrollmentsError);
        } else {
          setEnrollments(enrollmentsData || []);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setProfileLoading(false);
      }
    };

    fetchUserData();
  }, [user, loading, router]);

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
                <div className="user-avatar">{getNameFromEmail(user?.email)?.[0] || "U"}</div>
                <div>
                  <h1>Welcome back, {getNameFromEmail(user?.email)}!</h1>
                  <p>Member since {userProfile?.created_at ? new Date(userProfile.created_at).toLocaleDateString() : "Recently"}</p>
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
                  {enrollments.length > 0 ? (
                    enrollments.map((enrollment, i) => (
                      <div key={i} className="program-item">
                        <div className="program-header">
                          <h3>{enrollment.programs?.name || "Program"}</h3>
                          <span className="program-progress-text">{enrollment.progress_percentage}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${enrollment.progress_percentage}%` }}
                          ></div>
                        </div>
                        <p className="program-next">Status: {enrollment.status}</p>
                        <Link href={`/programs/${enrollment.programs?.slug}`} className="program-continue">
                          Continue →
                        </Link>
                      </div>
                    ))
                  ) : (
                    <p>No programs enrolled yet. <Link href="/programs">Browse programs</Link></p>
                  )}
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
                  <h3>Community Hub</h3>
                  <p>Join discussions & groups</p>
                </Link>
                <Link href="/forums" className="action-card">
                  <Icon name="Message" size={32} className="action-icon" />
                  <h3>Forum Discussions</h3>
                  <p>Share & learn together</p>
                </Link>
                {userProfile?.role === 'admin' && (
                  <Link href="/admin/community" className="action-card admin-card">
                    <Icon name="Settings" size={32} className="action-icon" />
                    <h3>Manage Community</h3>
                    <p>Admin community tools</p>
                  </Link>
                )}
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

            {/* Community Management */}
            <div className="dashboard-section">
              <h2>Community Management</h2>
              <div className="community-management-grid">
                <Link href="/forums" className="community-card">
                  <Icon name="MessageSquare" size={32} className="community-icon" />
                  <div className="community-content">
                    <h3>Forum Discussions</h3>
                    <p>Start or join conversations with the community</p>
                    <div className="community-stats">
                      <span>💬 Active discussions</span>
                      <span>👥 Connect with members</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/community/groups" className="community-card">
                  <Icon name="Users" size={32} className="community-icon" />
                  <div className="community-content">
                    <h3>Community Groups</h3>
                    <p>Join specialized groups based on your interests</p>
                    <div className="community-stats">
                      <span>🏘️ Interest-based groups</span>
                      <span>🤝 Find your tribe</span>
                    </div>
                  </div>
                </Link>

                <Link href="/community/events" className="community-card">
                  <Icon name="Calendar" size={32} className="community-icon" />
                  <div className="community-content">
                    <h3>Community Events</h3>
                    <p>Participate in live sessions and workshops</p>
                    <div className="community-stats">
                      <span>📅 Upcoming events</span>
                      <span>🎯 Expert sessions</span>
                    </div>
                  </div>
                </Link>

                {userProfile?.role === 'admin' && (
                  <Link href="/admin/community" className="community-card admin-community-card">
                    <Icon name="Shield" size={32} className="community-icon" />
                    <div className="community-content">
                      <h3>Admin Controls</h3>
                      <p>Manage community settings, moderate content</p>
                      <div className="community-stats">
                        <span>⚙️ Community settings</span>
                        <span>🛡️ Moderation tools</span>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>

            {/* User Details */}
            <div className="dashboard-section">
              <h2>Your Details</h2>
              <div className="user-details-card">
                <div className="detail-row">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">{userProfile?.email || user?.email}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">First Name:</span>
                  <span className="detail-value">{userProfile?.first_name || "Not set"}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Last Name:</span>
                  <span className="detail-value">{userProfile?.last_name || "Not set"}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{userProfile?.phone || "Not set"}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Role:</span>
                  <span className="detail-value">{userProfile?.role || "member"}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value">{userProfile?.status || "active"}</span>
                </div>
                <Link href="/user-settings" className="btn btn-outline btn-sm" style={{ marginTop: "1rem" }}>
                  Edit Profile
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
