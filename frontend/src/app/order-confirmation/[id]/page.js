'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OrderConfirmationPage({ params }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [enrollment, setEnrollment] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (params.id) {
      fetchEnrollment();
    }
  }, [params.id]);

  const fetchEnrollment = async () => {
    try {
      const response = await api.getEnrollment(params.id);
      setEnrollment(response);
    } catch (error) {
      console.error('Failed to fetch enrollment:', error);
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

  if (!user || !enrollment) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <div className="confirmation-container">
              <div className="confirmation-success">
                <div className="success-icon">✓</div>
                <h1>Enrollment Confirmed!</h1>
                <p>Welcome to {enrollment.program_name}</p>
              </div>

              <div className="confirmation-details">
                <div className="detail-card">
                  <h2>Enrollment Details</h2>
                  <div className="detail-row">
                    <span>Program</span>
                    <strong>{enrollment.program_name}</strong>
                  </div>
                  <div className="detail-row">
                    <span>Enrollment ID</span>
                    <strong>{enrollment.id}</strong>
                  </div>
                  <div className="detail-row">
                    <span>Status</span>
                    <strong className="status-active">{enrollment.status}</strong>
                  </div>
                  <div className="detail-row">
                    <span>Start Date</span>
                    <strong>{new Date(enrollment.start_date).toLocaleDateString()}</strong>
                  </div>
                  <div className="detail-row">
                    <span>Payment Status</span>
                    <strong className="status-completed">{enrollment.payment_status}</strong>
                  </div>
                </div>

                <div className="detail-card">
                  <h2>What's Next?</h2>
                  <ul className="next-steps">
                    <li>✓ Check your email for program details</li>
                    <li>✓ Access your dashboard to start learning</li>
                    <li>✓ Join our community for support</li>
                    <li>✓ Track your progress regularly</li>
                  </ul>
                </div>
              </div>

              <div className="confirmation-actions">
                <Link href="/user-dashboard" className="btn btn-primary">
                  Go to Dashboard
                </Link>
                <Link href={`/programs/${enrollment.slug}`} className="btn btn-outline">
                  View Program
                </Link>
              </div>

              <div className="confirmation-footer">
                <p>
                  Questions? <Link href="/contact">Contact us</Link> or check our <Link href="/faq">FAQ</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
