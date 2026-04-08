'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user?.role === 'admin') {
      // Admin page loaded
    }
  }, [user]);

  if (loading) {
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

  // If not admin, redirect to home
  if (!user || user.role !== 'admin') {
    return null;
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <div className="admin-header">
              <h1>Admin Dashboard</h1>
              <p>Manage your platform</p>
            </div>

            {stats && (
              <div className="admin-stats">
                <div className="stat-card">
                  <div className="stat-label">Total Users</div>
                  <div className="stat-value">{stats.totalUsers || 0}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Active Enrollments</div>
                  <div className="stat-value">{stats.totalEnrollments || 0}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Total Contacts</div>
                  <div className="stat-value">{stats.totalContacts || 0}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Revenue</div>
                  <div className="stat-value">${stats.totalRevenue || 0}</div>
                </div>
              </div>
            )}

            <div className="admin-grid">
              <Link href="/admin/users" className="admin-card">
                <span className="admin-icon">👥</span>
                <h3>User Management</h3>
                <p>Manage users and roles</p>
              </Link>
              <Link href="/admin/programs" className="admin-card">
                <span className="admin-icon">📚</span>
                <h3>Programs</h3>
                <p>Create and manage programs</p>
              </Link>
              <Link href="/admin/blogs" className="admin-card">
                <span className="admin-icon">📖</span>
                <h3>Blog Posts</h3>
                <p>Create and manage blog posts</p>
              </Link>
              <Link href="/admin/images" className="admin-card">
                <span className="admin-icon">🖼️</span>
                <h3>Images</h3>
                <p>Upload and manage images</p>
              </Link>
              <Link href="/admin/enrollments" className="admin-card">
                <span className="admin-icon">📝</span>
                <h3>Enrollments</h3>
                <p>Track program enrollments</p>
              </Link>
              <Link href="/admin/contacts" className="admin-card">
                <span className="admin-icon">📧</span>
                <h3>Contacts</h3>
                <p>Manage leads and contacts</p>
              </Link>
              <Link href="/admin/emails" className="admin-card">
                <span className="admin-icon">✉️</span>
                <h3>Email Campaigns</h3>
                <p>Send email campaigns</p>
              </Link>
              <Link href="/admin/analytics" className="admin-card">
                <span className="admin-icon">📊</span>
                <h3>Analytics</h3>
                <p>View platform analytics</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
