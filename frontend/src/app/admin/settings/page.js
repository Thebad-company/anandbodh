'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminSettingsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Temporarily disabled for testing - remove this comment and uncomment below for production
  // useEffect(() => {
  //   if (!loading && (!user || user.role !== 'admin')) {
  //     router.push('/');
  //   }
  // }, [user, loading, router]);

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

  return (
    <>
      <Navbar />
      <main>
        <section className="admin-section" style={{ padding: '2rem 0', minHeight: '100vh', background: '#f8fafc' }}>
          <div className="admin-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
            <div className="admin-header" style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F3D0C', marginBottom: '0.5rem' }}>System Settings</h1>
              <p style={{ color: '#7A7A6E', fontSize: '1.1rem' }}>Configure platform settings and preferences</p>
            </div>

            <div className="settings-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {/* General Settings */}
              <div className="settings-card" style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #E4DDD3' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '1rem' }}>General Settings</h3>
                <div className="setting-item" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', color: '#3D3D37' }}>Site Name</label>
                  <input type="text" defaultValue="AnandBodh" style={{ width: '100%', padding: '0.75rem', border: '1px solid #E4DDD3', borderRadius: '8px', fontSize: '1rem' }} />
                </div>
                <div className="setting-item" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', color: '#3D3D37' }}>Site Description</label>
                  <textarea defaultValue="Reverse Lifestyle Disorders" style={{ width: '100%', padding: '0.75rem', border: '1px solid #E4DDD3', borderRadius: '8px', fontSize: '1rem', minHeight: '80px', resize: 'vertical' }}></textarea>
                </div>
                <button style={{ background: '#C8943A', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', fontWeight: '500', cursor: 'pointer' }}>Save Changes</button>
              </div>

              {/* Email Settings */}
              <div className="settings-card" style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #E4DDD3' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '1rem' }}>Email Settings</h3>
                <div className="setting-item" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', color: '#3D3D37' }}>SMTP Server</label>
                  <input type="text" placeholder="smtp.gmail.com" style={{ width: '100%', padding: '0.75rem', border: '1px solid #E4DDD3', borderRadius: '8px', fontSize: '1rem' }} />
                </div>
                <div className="setting-item" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', color: '#3D3D37' }}>From Email</label>
                  <input type="email" placeholder="noreply@anandbodh.com" style={{ width: '100%', padding: '0.75rem', border: '1px solid #E4DDD3', borderRadius: '8px', fontSize: '1rem' }} />
                </div>
                <button style={{ background: '#C8943A', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', fontWeight: '500', cursor: 'pointer' }}>Save Changes</button>
              </div>

              {/* Security Settings */}
              <div className="settings-card" style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #E4DDD3' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '1rem' }}>Security Settings</h3>
                <div className="setting-item" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
                    <span style={{ fontWeight: '500', color: '#3D3D37' }}>Require email verification</span>
                  </label>
                </div>
                <div className="setting-item" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input type="checkbox" defaultChecked style={{ width: '18px', height: '18px' }} />
                    <span style={{ fontWeight: '500', color: '#3D3D37' }}>Enable two-factor authentication</span>
                  </label>
                </div>
                <button style={{ background: '#C8943A', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', fontWeight: '500', cursor: 'pointer' }}>Save Changes</button>
              </div>

              {/* Payment Settings */}
              <div className="settings-card" style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #E4DDD3' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '1rem' }}>Payment Settings</h3>
                <div className="setting-item" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', color: '#3D3D37' }}>Currency</label>
                  <select style={{ width: '100%', padding: '0.75rem', border: '1px solid #E4DDD3', borderRadius: '8px', fontSize: '1rem' }}>
                    <option value="USD">USD - US Dollar</option>
                    <option value="INR">INR - Indian Rupee</option>
                    <option value="EUR">EUR - Euro</option>
                  </select>
                </div>
                <div className="setting-item" style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '0.5rem', color: '#3D3D37' }}>Stripe Public Key</label>
                  <input type="text" placeholder="pk_test_..." style={{ width: '100%', padding: '0.75rem', border: '1px solid #E4DDD3', borderRadius: '8px', fontSize: '1rem' }} />
                </div>
                <button style={{ background: '#C8943A', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', fontWeight: '500', cursor: 'pointer' }}>Save Changes</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}