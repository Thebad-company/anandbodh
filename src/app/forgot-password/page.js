'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="auth-section">
          <div className="container">
            <div className="auth-card">
              {!submitted ? (
                <>
                  <h1>Reset Password</h1>
                  <p>Enter your email to receive a password reset link</p>

                  <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                  </form>

                  <p className="auth-footer">
                    Remember your password? <Link href="/login">Login here</Link>
                  </p>
                </>
              ) : (
                <>
                  <div className="success-icon" style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    ✓
                  </div>
                  <h1>Check Your Email</h1>
                  <p>We've sent a password reset link to {email}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    If you don't see the email, check your spam folder.
                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline"
                    style={{ width: '100%', marginTop: '1rem' }}
                  >
                    Try Another Email
                  </button>

                  <p className="auth-footer">
                    <Link href="/login">Back to Login</Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
