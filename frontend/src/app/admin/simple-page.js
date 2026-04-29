'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SimpleAdminDashboard() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem 0', minHeight: '100vh', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Header */}
          <div style={{ background: 'white', borderRadius: '16px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F3D0C', marginBottom: '0.5rem' }}>
              Admin Dashboard
            </h1>
            <p style={{ color: '#7A7A6E', fontSize: '1.1rem' }}>
              Welcome back, Admin! Manage your platform from here.
            </p>
          </div>

          {/* Stats Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1F3D0C' }}>1,234</div>
              <div style={{ color: '#7A7A6E', fontSize: '0.875rem' }}>Total Users</div>
            </div>
            
            <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1F3D0C' }}>567</div>
              <div style={{ color: '#7A7A6E', fontSize: '0.875rem' }}>Enrollments</div>
            </div>
            
            <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💬</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1F3D0C' }}>89</div>
              <div style={{ color: '#7A7A6E', fontSize: '0.875rem' }}>Community Posts</div>
            </div>
            
            <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</div>
              <div style={{ fontSize: '2rem', fontWeight: '700', color: '#1F3D0C' }}>$12,345</div>
              <div style={{ color: '#7A7A6E', fontSize: '0.875rem' }}>Revenue</div>
            </div>
          </div>

          {/* Admin Features Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            
            {/* User Management */}
            <Link href="/admin/users" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '1px solid #E4DDD3' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👥</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>User Management</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>Manage users, roles, and permissions</p>
              </div>
            </Link>

            {/* Programs */}
            <Link href="/admin/programs" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '1px solid #E4DDD3' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📚</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>Programs</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>Create and manage wellness programs</p>
              </div>
            </Link>

            {/* Community Management */}
            <Link href="/admin/community" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '2px solid #C8943A' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💬</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>Community Management ⭐</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>Moderate forums, manage groups & discussions</p>
                <div style={{ background: '#C8943A', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600', display: 'inline-block', marginTop: '0.5rem' }}>
                  5 new posts
                </div>
              </div>
            </Link>

            {/* Blog Posts */}
            <Link href="/admin/blogs" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '1px solid #E4DDD3' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📝</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>Blog Posts</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>Create and manage blog content</p>
              </div>
            </Link>

            {/* Media Library */}
            <Link href="/admin/images" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '1px solid #E4DDD3' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🖼️</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>Media Library</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>Upload and manage images & assets</p>
              </div>
            </Link>

            {/* Enrollments */}
            <Link href="/admin/enrollments" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '1px solid #E4DDD3' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>Enrollments</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>Track program enrollments and progress</p>
              </div>
            </Link>

            {/* Contacts & Leads */}
            <Link href="/admin/contacts" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '1px solid #E4DDD3' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📧</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>Contacts & Leads</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>Manage customer inquiries and leads</p>
              </div>
            </Link>

            {/* Email Campaigns */}
            <Link href="/admin/emails" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '1px solid #E4DDD3' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📬</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>Email Campaigns</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>Send targeted email campaigns</p>
              </div>
            </Link>

            {/* Analytics */}
            <Link href="/admin/analytics" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '1px solid #E4DDD3' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>Analytics</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>View platform performance metrics</p>
              </div>
            </Link>

            {/* System Settings */}
            <Link href="/admin/settings" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '1px solid #E4DDD3' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚙️</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>System Settings</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>Configure platform settings and preferences</p>
              </div>
            </Link>

            {/* Backups & Export */}
            <Link href="/admin/backups" style={{ textDecoration: 'none' }}>
              <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', cursor: 'pointer', transition: 'transform 0.3s ease', border: '1px solid #E4DDD3' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💾</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '0.5rem' }}>Backups & Export</h3>
                <p style={{ color: '#7A7A6E', fontSize: '0.9rem' }}>Manage data backups and exports</p>
              </div>
            </Link>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}