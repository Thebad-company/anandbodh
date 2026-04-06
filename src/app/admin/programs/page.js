'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminProgramsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [programs, setPrograms] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchPrograms();
    }
  }, [user]);

  const fetchPrograms = async () => {
    try {
      const response = await api.getPrograms();
      setPrograms(response.programs || []);
    } catch (error) {
      console.error('Failed to fetch programs:', error);
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
              <h1>Program Management</h1>
              <button className="btn btn-primary">+ New Program</button>
            </div>

            <div className="admin-table-container">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Duration</th>
                    <th>Participants</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {programs.map((program) => (
                    <tr key={program.id}>
                      <td>{program.name}</td>
                      <td>${program.price}</td>
                      <td>{program.duration_days} days</td>
                      <td>{program.max_participants}</td>
                      <td><span className="badge badge-active">{program.status}</span></td>
                      <td>
                        <button className="btn-small">Edit</button>
                        <button className="btn-small btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))}
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
