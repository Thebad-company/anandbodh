"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Icon } from "@/components/Icons";
import Link from "next/link";
import { getCommunityGroups } from "@/lib/communityApi";

export default function CommunityGroupsPage() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    loadGroups();
  }, []);

  async function loadGroups() {
    try {
      setLoading(true);
      const { data } = await getCommunityGroups();
      if (data) {
        setGroups(data);
      }
    } catch (error) {
      console.error('Error loading groups:', error);
    } finally {
      setLoading(false);
    }
  }

  const categories = [
    { id: 'all', name: 'All Groups', icon: '🌟' },
    { id: 'wellness', name: 'Wellness', icon: '🧘' },
    { id: 'nutrition', name: 'Nutrition', icon: '🥗' },
    { id: 'meditation', name: 'Meditation', icon: '🕯️' },
    { id: 'fitness', name: 'Fitness', icon: '💪' },
    { id: 'support', name: 'Support', icon: '🤝' }
  ];

  const filteredGroups = selectedCategory === 'all' 
    ? groups 
    : groups.filter(group => group.category === selectedCategory);

  return (
    <>
      <Navbar />
      <main className="groups-page">
        <section className="groups-hero">
          <div className="container">
            <div className="groups-header">
              <div>
                <h1>Community Groups</h1>
                <p>Join specialized groups based on your wellness interests and connect with like-minded members</p>
              </div>
              <Link href="/community" className="btn btn-outline">
                <Icon name="ArrowLeft" size={20} />
                Back to Community
              </Link>
            </div>
          </div>
        </section>

        <section className="groups-content">
          <div className="container">
            {/* Category Filter */}
            <div className="category-filter">
              <h3>Browse by Category</h3>
              <div className="category-buttons">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Groups Grid */}
            {loading ? (
              <div className="loading-state">
                <Icon name="Loader" size={32} className="loading-spinner" />
                <p>Loading community groups...</p>
              </div>
            ) : (
              <div className="groups-grid">
                {filteredGroups.length > 0 ? (
                  filteredGroups.map(group => (
                    <div key={group.id} className="group-card">
                      <div className="group-header">
                        <div 
                          className="group-icon"
                          style={{ background: group.background_color || '#f0f7e8' }}
                        >
                          {group.icon || '🏘️'}
                        </div>
                        <div className="group-info">
                          <h3>{group.name}</h3>
                          <div className="group-meta">
                            <span className="member-count">
                              <Icon name="Users" size={16} />
                              {group.current_member_count || 0} members
                            </span>
                            <span className="group-category">
                              {categories.find(cat => cat.id === group.category)?.icon || '📂'} 
                              {group.category || 'General'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="group-description">
                        <p>{group.description || 'A community group for wellness enthusiasts.'}</p>
                      </div>

                      <div className="group-stats">
                        <div className="stat">
                          <Icon name="MessageSquare" size={16} />
                          <span>Active discussions</span>
                        </div>
                        <div className="stat">
                          <Icon name="Calendar" size={16} />
                          <span>Regular events</span>
                        </div>
                      </div>

                      <div className="group-actions">
                        <button className="btn btn-primary btn-sm">
                          Join Group
                        </button>
                        <Link href={`/groups/${group.id}`} className="btn btn-outline btn-sm">
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-state">
                    <Icon name="Users" size={64} className="empty-icon" />
                    <h3>No Groups Found</h3>
                    <p>
                      {selectedCategory === 'all' 
                        ? 'No community groups are available yet. Check back soon!'
                        : `No groups found in the ${categories.find(cat => cat.id === selectedCategory)?.name} category.`
                      }
                    </p>
                    <button 
                      className="btn btn-outline"
                      onClick={() => setSelectedCategory('all')}
                    >
                      View All Groups
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Create Group CTA */}
            <div className="create-group-cta">
              <div className="cta-content">
                <Icon name="Plus" size={32} className="cta-icon" />
                <div>
                  <h3>Want to start your own group?</h3>
                  <p>Create a community group around your specific wellness interests</p>
                </div>
                <button className="btn btn-primary">
                  Request New Group
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}