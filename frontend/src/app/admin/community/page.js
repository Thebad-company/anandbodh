'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommunityManagement from "@/components/admin/CommunityManagement";

export default function AdminCommunityPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

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

  // Temporarily disabled for testing - remove this comment and uncomment below for production
  // if (!user || user.role !== 'admin') {
  //   return null;
  // }

  return (
    <>
      <Navbar />
      <main>
        <section className="section">
          <div className="container">
            <CommunityManagement />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}