'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function UserDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [enrollments, setEnrollments] = useState([]);
  const [stats, setStats] = useState(null);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchEnrollments();
    }
  }, [user]);

  const fetchEnrollments = async () => {
    try {
      const response = await api.getEnrollments();
      setEnrollments(response.enrollments || []);
      
      const activeCount = response.enrollments?.filter(e => e.status === 'active').length || 0;
      const completedCount = response.enrollments?.filter(e => e.status === 'completed').length || 0;
      const avgProgress = response.enrollments?.length > 0 
        ? Math.round(response.enrollments.reduce((sum, e) => sum + (e.progress_percentage || 0), 0) / response.enrollments.length)
        : 0;

      setStats({
        activePrograms: activeCount,
        completedPrograms: completedCount,
        averageProgress: avgProgress,
        totalEnrollments: response.enrollments?.length || 0,
      });
    } catch (error) {
      console.error('Failed to fetch enrollments:', error);
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

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <div className="dashboard-header">
              <h1>Welcome, {user.firstName}! 👋</h1>
              <p>Track your wellness journey</p>
            </div>

            {stats && (
              <div className="dashboard-stats">
                <div className="stat-card">
                  <div className="stat-number">{stats.activePrograms}</div>
                  <div className="stat-label">Active Programs</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{stats.completedPrograms}</div>
                  <div className="stat-label">Completed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{stats.averageProgress}%</div>
                  <div className="stat-label">Avg Progress</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">{stats.totalEnrollments}</div>
                  <div className="stat-label">Total Enrollments</div>
                </div>
              </div>
            )}

            <div className="dashboard-section">
              <div className="section-header">
                <h2>Your Programs</h2>
                <Link href="/programs" className="btn btn-outline">
                  Browse More →
                </Link>
              </div>

              {enrollments.length > 0 ? (
                <div className="enrollments-grid">
                  {enrollments.map((enrollment) => (
                    <div key={enrollment.id} className="enrollment-card">
                      <div className="enrollment-header">
                        <h3>{enrollment.program_name}</h3>
                        <span className={`status-badge status-${enrollment.status}`}>
                          {enrollment.status}
                        </span>
                      </div>

                      <div className="progress-section">
                        <div className="progress-label">
                          <span>Progress</span>
                          <span className="progress-percent">{enrollment.progress_percentage}%</span>
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: `${enrollment.progress_percentage}%` }}
                          />
                        </div>
                      </div>

                      <div className="enrollment-meta">
                        <span>📅 Started: {new Date(enrollment.start_date).toLocaleDateString()}</span>
                        <span>💰 {enrollment.payment_status}</span>
                      </div>

                      <div className="enrollment-actions">
                        <Link href={`/programs/${enrollment.slug}`} className="btn btn-primary">
                          Continue →
                        </Link>
                        {enrollment.status === 'active' && (
                          <button className="btn btn-outline">Update Progress</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <p>You haven't enrolled in any programs yet.</p>
                  <Link href="/programs" className="btn btn-primary">
                    Explore Programs →
                  </Link>
                </div>
              )}
            </div>

            <div className="dashboard-actions">
              <Link href="/user-profile" className="action-card">
                <span className="action-icon">👤</span>
                <h3>My Profile</h3>
                <p>View and edit your profile</p>
              </Link>
              <Link href="/user-settings" className="action-card">
                <span className="action-icon">⚙️</span>
                <h3>Settings</h3>
                <p>Manage your account settings</p>
              </Link>
              <Link href="/my-certificates" className="action-card">
                <span className="action-icon">🏆</span>
                <h3>Certificates</h3>
                <p>View your earned certificates</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
