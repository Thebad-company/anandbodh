'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminEmailsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user?.role === 'admin') {
      setLoadingData(false);
    }
  }, [user]);

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
            <div className="admin-header">
              <h1>Email Campaigns</h1>
              <button className="btn btn-primary">+ New Campaign</button>
            </div>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Campaign</th>
                    <th>Recipients</th>
                    <th>Status</th>
                    <th>Opens</th>
                    <th>Clicks</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Weekly Newsletter</td>
                    <td>1,250</td>
                    <td><span className="badge badge-completed">Sent</span></td>
                    <td>450 (36%)</td>
                    <td>120 (9.6%)</td>
                    <td>
                      <button className="btn-small">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
