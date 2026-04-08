'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Icon } from '@/components/Icons';

export default function MyCertificatesPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

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

  const certificates = [
    {
      id: 1,
      title: 'Soleus Activation Certified',
      program: 'Soleus Activation',
      date: 'March 15, 2026',
    },
    {
      id: 2,
      title: 'Meditation Practitioner',
      program: 'Dhyan Meditation',
      date: 'February 28, 2026',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <h1>My Certificates</h1>
            <p className="subtitle">Certificates you've earned</p>

            {certificates.length > 0 ? (
              <div className="my-certificates">
                {certificates.map((cert) => (
                  <div key={cert.id} className="certificate-card">
                    <div className="certificate-icon">
                      <Icon name="Award" size={40} />
                    </div>
                    <h3>{cert.title}</h3>
                    <p>{cert.program}</p>
                    <p className="certificate-date">Earned on {cert.date}</p>
                    <button className="btn btn-primary" style={{ marginTop: '1rem' }}>
                      Download Certificate
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <p>You haven't earned any certificates yet.</p>
                <Link href="/programs" className="btn btn-primary">
                  Explore Programs →
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
