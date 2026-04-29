"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Icon } from "@/components/Icons";
import Link from "next/link";

export default function CommunityEventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('upcoming');

  useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    try {
      setLoading(true);
      // Sample events data - replace with actual API call when database is connected
      const sampleEvents = [
        {
          id: 1,
          title: "Expert Q&A: Dr. Rajni Samota",
          description: "Join our wellness expert for an interactive session on Ayurvedic healing and modern wellness practices.",
          date: "2025-03-20",
          time: "6:00 PM IST",
          type: "expert-session",
          attendees: 45,
          maxAttendees: 100,
          status: "upcoming",
          host: "Dr. Rajni Samota",
          category: "expert-qa"
        },
        {
          id: 2,
          title: "Community Meditation Circle",
          description: "Start your day with guided meditation and connect with fellow practitioners in our virtual circle.",
          date: "2025-03-22",
          time: "7:00 AM IST",
          type: "meditation",
          attendees: 28,
          maxAttendees: 50,
          status: "upcoming",
          host: "Meditation Team",
          category: "meditation"
        },
        {
          id: 3,
          title: "Ayurveda Workshop: Dosha Balancing",
          description: "Learn practical techniques for balancing your dosha through diet, lifestyle, and mindful practices.",
          date: "2025-03-25",
          time: "5:00 PM IST",
          type: "workshop",
          attendees: 67,
          maxAttendees: 80,
          status: "upcoming",
          host: "Ayurveda Experts",
          category: "ayurveda"
        },
        {
          id: 4,
          title: "Soleus Activation Masterclass",
          description: "Deep dive into the science and practice of soleus muscle activation for metabolic health.",
          date: "2025-03-18",
          time: "4:00 PM IST",
          type: "masterclass",
          attendees: 89,
          maxAttendees: 100,
          status: "completed",
          host: "Fitness Team",
          category: "fitness"
        }
      ];
      
      setEvents(sampleEvents);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setLoading(false);
    }
  }

  const eventTypes = [
    { id: 'upcoming', name: 'Upcoming Events', icon: '📅' },
    { id: 'expert-session', name: 'Expert Sessions', icon: '👨‍⚕️' },
    { id: 'meditation', name: 'Meditation', icon: '🧘' },
    { id: 'workshop', name: 'Workshops', icon: '🎯' },
    { id: 'masterclass', name: 'Masterclasses', icon: '🎓' }
  ];

  const filteredEvents = selectedFilter === 'upcoming' 
    ? events.filter(event => event.status === 'upcoming')
    : events.filter(event => event.type === selectedFilter || event.category === selectedFilter);

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  function getEventIcon(type) {
    const icons = {
      'expert-session': '👨‍⚕️',
      'meditation': '🧘',
      'workshop': '🎯',
      'masterclass': '🎓',
      'community': '👥'
    };
    return icons[type] || '📅';
  }

  function getEventColor(type) {
    const colors = {
      'expert-session': '#6B9ED2',
      'meditation': '#9B8AC4',
      'workshop': '#5DAF8A',
      'masterclass': '#E08A8A',
      'community': '#C8943A'
    };
    return colors[type] || '#C8943A';
  }

  return (
    <>
      <Navbar />
      <main className="events-page">
        <section className="events-hero">
          <div className="container">
            <div className="events-header">
              <div>
                <h1>Community Events</h1>
                <p>Join live sessions, workshops, and expert Q&As to deepen your wellness journey</p>
              </div>
              <Link href="/community" className="btn btn-outline">
                <Icon name="ArrowLeft" size={20} />
                Back to Community
              </Link>
            </div>
          </div>
        </section>

        <section className="events-content">
          <div className="container">
            {/* Event Type Filter */}
            <div className="event-filter">
              <h3>Browse Events</h3>
              <div className="filter-buttons">
                {eventTypes.map(type => (
                  <button
                    key={type.id}
                    className={`filter-btn ${selectedFilter === type.id ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(type.id)}
                  >
                    <span className="filter-icon">{type.icon}</span>
                    {type.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Events Grid */}
            {loading ? (
              <div className="loading-state">
                <Icon name="Loader" size={32} className="loading-spinner" />
                <p>Loading community events...</p>
              </div>
            ) : (
              <div className="events-grid">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map(event => (
                    <div key={event.id} className="event-card">
                      <div className="event-header">
                        <div 
                          className="event-type-badge"
                          style={{ background: getEventColor(event.type) }}
                        >
                          {getEventIcon(event.type)} {event.type.replace('-', ' ')}
                        </div>
                        <div className={`event-status ${event.status}`}>
                          {event.status}
                        </div>
                      </div>

                      <div className="event-content">
                        <h3>{event.title}</h3>
                        <p className="event-description">{event.description}</p>
                        
                        <div className="event-details">
                          <div className="event-detail">
                            <Icon name="Calendar" size={16} />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="event-detail">
                            <Icon name="Clock" size={16} />
                            <span>{event.time}</span>
                          </div>
                          <div className="event-detail">
                            <Icon name="User" size={16} />
                            <span>Hosted by {event.host}</span>
                          </div>
                        </div>

                        <div className="event-attendance">
                          <div className="attendance-bar">
                            <div 
                              className="attendance-fill"
                              style={{ 
                                width: `${(event.attendees / event.maxAttendees) * 100}%`,
                                background: getEventColor(event.type)
                              }}
                            ></div>
                          </div>
                          <span className="attendance-text">
                            {event.attendees} / {event.maxAttendees} attendees
                          </span>
                        </div>
                      </div>

                      <div className="event-actions">
                        {event.status === 'upcoming' ? (
                          <>
                            <button className="btn btn-primary btn-sm">
                              Register Now
                            </button>
                            <button className="btn btn-outline btn-sm">
                              Add to Calendar
                            </button>
                          </>
                        ) : (
                          <>
                            <button className="btn btn-outline btn-sm">
                              View Recording
                            </button>
                            <button className="btn btn-outline btn-sm">
                              Download Resources
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="empty-state">
                    <Icon name="Calendar" size={64} className="empty-icon" />
                    <h3>No Events Found</h3>
                    <p>
                      {selectedFilter === 'upcoming' 
                        ? 'No upcoming events scheduled. Check back soon for new sessions!'
                        : `No events found for ${eventTypes.find(type => type.id === selectedFilter)?.name}.`
                      }
                    </p>
                    <button 
                      className="btn btn-outline"
                      onClick={() => setSelectedFilter('upcoming')}
                    >
                      View Upcoming Events
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Event Request CTA */}
            <div className="event-request-cta">
              <div className="cta-content">
                <Icon name="MessageSquare" size={32} className="cta-icon" />
                <div>
                  <h3>Have an event idea?</h3>
                  <p>Suggest topics for future workshops, expert sessions, or community gatherings</p>
                </div>
                <button className="btn btn-primary">
                  Suggest Event
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