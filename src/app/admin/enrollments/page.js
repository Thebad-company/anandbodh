'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminEnrollmentsPage() {
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
            <h1>Enrollment Management</h1>
            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Program</th>
                    <th>Status</th>
                    <th>Progress</th>
                    <th>Payment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John Doe</td>
                    <td>Soleus Activation</td>
                    <td><span className="badge badge-active">Active</span></td>
                    <td>45%</td>
                    <td><span className="badge badge-completed">Completed</span></td>
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
