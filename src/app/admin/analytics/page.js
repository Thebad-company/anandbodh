'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminAnalyticsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchAnalytics();
    }
  }, [user]);

  const fetchAnalytics = async () => {
    try {
      const response = await api.getDashboard();
      setStats(response.stats);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoadingData(false);
    }
  };

  if (loading || loadingData) {
    return (
      <>
        <Navbar />
        <main>
          <section className="section">
            <div className="container">
              <p>Loading...</p>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <h1>Analytics Dashboard</h1>

            {stats && (
              <div className="analytics-grid">
                <div className="analytics-card">
                  <h3>Total Users</h3>
                  <div className="analytics-value">{stats.totalUsers}</div>
                  <p className="analytics-change">+12% from last month</p>
                </div>
                <div className="analytics-card">
                  <h3>Active Enrollments</h3>
                  <div className="analytics-value">{stats.totalEnrollments}</div>
                  <p className="analytics-change">+8% from last month</p>
                </div>
                <div className="analytics-card">
                  <h3>Total Revenue</h3>
                  <div className="analytics-value">${stats.totalRevenue}</div>
                  <p className="analytics-change">+25% from last month</p>
                </div>
                <div className="analytics-card">
                  <h3>Conversion Rate</h3>
                  <div className="analytics-value">3.2%</div>
                  <p className="analytics-change">+0.5% from last month</p>
                </div>
              </div>
            )}

            <div className="analytics-section">
              <h2>Recent Activity</h2>
              <div className="activity-list">
                <div className="activity-item">
                  <span className="activity-icon">✓</span>
                  <div className="activity-content">
                    <p>New user registration</p>
                    <small>2 hours ago</small>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">💳</span>
                  <div className="activity-content">
                    <p>Payment received</p>
                    <small>4 hours ago</small>
                  </div>
                </div>
                <div className="activity-item">
                  <span className="activity-icon">📧</span>
                  <div className="activity-content">
                    <p>Email campaign sent</p>
                    <small>1 day ago</small>
                  </div>
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
