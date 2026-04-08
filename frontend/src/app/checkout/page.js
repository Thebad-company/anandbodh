'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { api } from '@/lib/api';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StripePaymentForm from '@/components/StripePaymentForm';
import { Icon } from '@/components/Icons';

export default function CheckoutPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const programId = searchParams.get('programId');
  const stripe = useStripe();
  const elements = useElements();
  
  const [program, setProgram] = useState(null);
  const [loadingProgram, setLoadingProgram] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (programId) {
      fetchProgram();
    }
  }, [programId]);

  const fetchProgram = async () => {
    try {
      const response = await api.getProgram(programId);
      setProgram(response);
    } catch (err) {
      setError('Failed to load program');
    } finally {
      setLoadingProgram(false);
    }
  };

  const handlePaymentSuccess = (enrollment) => {
    router.push(`/order-confirmation/${enrollment.id}`);
  };

  const handlePaymentError = (errorMsg) => {
    setError(errorMsg);
  };

  if (loading || loadingProgram) {
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

  if (!user || !program) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <div className="checkout-container">
              <h1>Checkout</h1>

              <div className="checkout-grid">
                <div className="checkout-form">
                  <h2>Payment Details</h2>

                  {error && <div className="error-message">{error}</div>}

                  {stripe && elements && (
                    <StripePaymentForm
                      programId={programId}
                      programPrice={program.price}
                      onSuccess={handlePaymentSuccess}
                      onError={handlePaymentError}
                    />
                  )}
                </div>

                <div className="checkout-summary">
                  <h2>Order Summary</h2>

                  <div className="summary-item">
                    <span>{program.name}</span>
                    <span>${program.price}</span>
                  </div>

                  <div className="summary-divider"></div>

                  <div className="summary-total">
                    <span>Total</span>
                    <span className="total-amount">${program.price}</span>
                  </div>

                  <div className="program-details">
                    <h3>Program Details</h3>
                    <ul>
                      <li>
                        <Icon name="Calendar" size={16} style={{ marginRight: "8px" }} />
                        Duration: {program.duration_days} days
                      </li>
                      <li>
                        <Icon name="Users" size={16} style={{ marginRight: "8px" }} />
                        Max Participants: {program.max_participants}
                      </li>
                      <li>
                        <Icon name="Book" size={16} style={{ marginRight: "8px" }} />
                        {program.description}
                      </li>
                    </ul>
                  </div>

                  <Link href={`/programs/${program.slug}`} className="btn btn-outline">
                    Back to Program
                  </Link>
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
