'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function EnrollButton({ programId, programPrice, className = '' }) {
  const { user } = useAuth();
  const router = useRouter();

  const handleEnroll = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    router.push(`/checkout?programId=${programId}`);
  };

  return (
    <button onClick={handleEnroll} className={`btn btn-primary ${className}`}>
      Enroll Now →
    </button>
  );
}
