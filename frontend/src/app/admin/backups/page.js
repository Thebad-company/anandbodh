'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminBackupsPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [backups, setBackups] = useState([
    { id: 1, name: 'Full Backup - April 29, 2026', size: '2.4 GB', date: '2026-04-29', type: 'Full', status: 'Completed' },
    { id: 2, name: 'Database Backup - April 28, 2026', size: '156 MB', date: '2026-04-28', type: 'Database', status: 'Completed' },
    { id: 3, name: 'Media Backup - April 27, 2026', size: '1.8 GB', date: '2026-04-27', type: 'Media', status: 'Completed' },
  ]);

  // Temporarily disabled for testing - remove this comment and uncomment below for production
  // useEffect(() => {
  //   if (!loading && (!user || user.role !== 'admin')) {
  //     router.push('/');
  //   }
  // }, [user, loading, router]);

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

  const handleCreateBackup = (type) => {
    const newBackup = {
      id: backups.length + 1,
      name: `${type} Backup - ${new Date().toLocaleDateString()}`,
      size: 'Processing...',
      date: new Date().toISOString().split('T')[0],
      type: type,
      status: 'In Progress'
    };
    setBackups([newBackup, ...backups]);
    
    // Simulate backup completion
    setTimeout(() => {
      setBackups(prev => prev.map(backup => 
        backup.id === newBackup.id 
          ? { ...backup, size: type === 'Full' ? '2.5 GB' : type === 'Database' ? '160 MB' : '1.9 GB', status: 'Completed' }
          : backup
      ));
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="admin-section" style={{ padding: '2rem 0', minHeight: '100vh', background: '#f8fafc' }}>
          <div className="admin-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
            <div className="admin-header" style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: '700', color: '#1F3D0C', marginBottom: '0.5rem' }}>Backups & Export</h1>
              <p style={{ color: '#7A7A6E', fontSize: '1.1rem' }}>Manage data backups and exports</p>
            </div>

            {/* Backup Actions */}
            <div className="backup-actions" style={{ background: 'white', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #E4DDD3' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '1.5rem' }}>Create New Backup</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => handleCreateBackup('Full')}
                  style={{ background: '#1F3D0C', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>📦</span> Full Backup
                </button>
                <button 
                  onClick={() => handleCreateBackup('Database')}
                  style={{ background: '#C8943A', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>🗄️</span> Database Only
                </button>
                <button 
                  onClick={() => handleCreateBackup('Media')}
                  style={{ background: '#4A7A25', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', border: 'none', fontWeight: '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span>🖼️</span> Media Files
                </button>
              </div>
            </div>

            {/* Export Options */}
            <div className="export-options" style={{ background: 'white', borderRadius: '12px', padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #E4DDD3' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '1.5rem' }}>Export Data</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div style={{ padding: '1.5rem', border: '1px solid #E4DDD3', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>👥</div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1F3D0C' }}>Users Data</h4>
                  <p style={{ fontSize: '0.875rem', color: '#7A7A6E', marginBottom: '1rem' }}>Export all user profiles and data</p>
                  <button style={{ background: '#E4DDD3', color: '#1F3D0C', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', fontWeight: '500', cursor: 'pointer', width: '100%' }}>Export CSV</button>
                </div>
                
                <div style={{ padding: '1.5rem', border: '1px solid #E4DDD3', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1F3D0C' }}>Blog Posts</h4>
                  <p style={{ fontSize: '0.875rem', color: '#7A7A6E', marginBottom: '1rem' }}>Export all blog content</p>
                  <button style={{ background: '#E4DDD3', color: '#1F3D0C', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', fontWeight: '500', cursor: 'pointer', width: '100%' }}>Export JSON</button>
                </div>
                
                <div style={{ padding: '1.5rem', border: '1px solid #E4DDD3', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💬</div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1F3D0C' }}>Community Data</h4>
                  <p style={{ fontSize: '0.875rem', color: '#7A7A6E', marginBottom: '1rem' }}>Export forum posts and discussions</p>
                  <button style={{ background: '#E4DDD3', color: '#1F3D0C', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', fontWeight: '500', cursor: 'pointer', width: '100%' }}>Export CSV</button>
                </div>
                
                <div style={{ padding: '1.5rem', border: '1px solid #E4DDD3', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1F3D0C' }}>Analytics</h4>
                  <p style={{ fontSize: '0.875rem', color: '#7A7A6E', marginBottom: '1rem' }}>Export usage statistics</p>
                  <button style={{ background: '#E4DDD3', color: '#1F3D0C', padding: '0.5rem 1rem', borderRadius: '6px', border: 'none', fontWeight: '500', cursor: 'pointer', width: '100%' }}>Export Excel</button>
                </div>
              </div>
            </div>

            {/* Backup History */}
            <div className="backup-history" style={{ background: 'white', borderRadius: '12px', padding: '2rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #E4DDD3' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1F3D0C', marginBottom: '1.5rem' }}>Backup History</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #E4DDD3' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1F3D0C' }}>Name</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1F3D0C' }}>Type</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1F3D0C' }}>Size</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1F3D0C' }}>Date</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1F3D0C' }}>Status</th>
                      <th style={{ padding: '1rem', textAlign: 'left', fontWeight: '600', color: '#1F3D0C' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {backups.map((backup) => (
                      <tr key={backup.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '1rem', color: '#3D3D37' }}>{backup.name}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{ 
                            padding: '0.25rem 0.75rem', 
                            borderRadius: '20px', 
                            fontSize: '0.75rem', 
                            fontWeight: '600',
                            background: backup.type === 'Full' ? '#EBF2E3' : backup.type === 'Database' ? '#FBF4E6' : '#F0EEF9',
                            color: backup.type === 'Full' ? '#1F3D0C' : backup.type === 'Database' ? '#C8943A' : '#4A7A25'
                          }}>
                            {backup.type}
                          </span>
                        </td>
                        <td style={{ padding: '1rem', color: '#3D3D37' }}>{backup.size}</td>
                        <td style={{ padding: '1rem', color: '#7A7A6E' }}>{backup.date}</td>
                        <td style={{ padding: '1rem' }}>
                          <span style={{ 
                            padding: '0.25rem 0.75rem', 
                            borderRadius: '20px', 
                            fontSize: '0.75rem', 
                            fontWeight: '600',
                            background: backup.status === 'Completed' ? '#EBF2E3' : '#FBF4E6',
                            color: backup.status === 'Completed' ? '#1F3D0C' : '#C8943A'
                          }}>
                            {backup.status}
                          </span>
                        </td>
                        <td style={{ padding: '1rem' }}>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', borderRadius: '6px', border: '1px solid #C8943A', background: 'white', color: '#C8943A', cursor: 'pointer' }}>
                              Download
                            </button>
                            <button style={{ padding: '0.5rem 1rem', fontSize: '0.875rem', borderRadius: '6px', border: '1px solid #ef4444', background: 'white', color: '#ef4444', cursor: 'pointer' }}>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}