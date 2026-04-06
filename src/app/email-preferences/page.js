'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EmailPreferencesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [preferences, setPreferences] = useState({
    marketing: true,
    updates: true,
    newsletter: true,
    promotions: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleToggle = (key) => {
    setPreferences({
      ...preferences,
      [key]: !preferences[key],
    });
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
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
            <div className="email-preferences-form">
              <h1>Email Preferences</h1>

              {saved && <div className="success-message">Preferences saved!</div>}

              <div className="settings-section">
                <h2>Email Communications</h2>
                <div className="settings-group">
                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Marketing Emails</h3>
                      <p>Receive promotional offers and updates</p>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={() => handleToggle('marketing')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Program Updates</h3>
                      <p>Get updates about your enrolled programs</p>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={preferences.updates}
                        onChange={() => handleToggle('updates')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Weekly Newsletter</h3>
                      <p>Receive our weekly wellness newsletter</p>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={preferences.newsletter}
                        onChange={() => handleToggle('newsletter')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>

                  <div className="setting-item">
                    <div className="setting-info">
                      <h3>Special Promotions</h3>
                      <p>Exclusive deals and limited-time offers</p>
                    </div>
                    <label className="toggle">
                      <input
                        type="checkbox"
                        checked={preferences.promotions}
                        onChange={() => handleToggle('promotions')}
                      />
                      <span className="toggle-slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <button onClick={handleSave} className="btn btn-primary">
                Save Preferences
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
