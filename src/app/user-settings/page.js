'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function UserSettingsPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    weeklyDigest: true,
    courseUpdates: true,
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleToggle = (key) => {
    setSettings({
      ...settings,
      [key]: !settings[key],
    });
  };

  const handleLogout = () => {
    logout();
    router.push('/');
  };

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

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <div className="settings-container">
              <h1>Account Settings</h1>

              <div className="settings-section">
                <h2>Notifications</h2>
                <div className="settings-group">
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Email Notifications</h3>
                      <p>Receive updates via email</p>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={() => handleToggle('emailNotifications')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>SMS Notifications</h3>
                      <p>Receive updates via SMS</p>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={settings.smsNotifications}
                        onChange={() => handleToggle('smsNotifications')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Weekly Digest</h3>
                      <p>Get a weekly summary of your progress</p>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={settings.weeklyDigest}
                        onChange={() => handleToggle('weeklyDigest')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Course Updates</h3>
                      <p>Get notified about new courses</p>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={settings.courseUpdates}
                        onChange={() => handleToggle('courseUpdates')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="settings-section">
                <h2>Account</h2>
                <div className="settings-group">
                  <Link href="/user-profile" className="settings-link">
                    <span>Edit Profile</span>
                    <span>→</span>
                  </Link>
                  <Link href="/change-password" className="settings-link">
                    <span>Change Password</span>
                    <span>→</span>
                  </Link>
                  <Link href="/email-preferences" className="settings-link">
                    <span>Email Preferences</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="settings-section danger-zone">
                <h2>Danger Zone</h2>
                <div className="settings-group">
                  <button onClick={handleLogout} className="btn btn-danger">
                    Logout
                  </button>
                  <button className="btn btn-danger-outline">
                    Delete Account
                  </button>
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
