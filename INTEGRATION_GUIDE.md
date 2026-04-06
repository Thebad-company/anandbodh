# 🔗 Frontend-Backend Integration Guide

## Overview

This guide shows how to integrate your Next.js frontend with the custom CRM backend.

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (Next.js)                    │
│  - Pages, Components, UI                                │
│  - Client-side state management                         │
│  - API calls via axios                                  │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/REST
                     ↓
┌─────────────────────────────────────────────────────────┐
│                  Backend (Express.js)                    │
│  - API routes                                           │
│  - Authentication                                       │
│  - Business logic                                       │
└────────────────────┬────────────────────────────────────┘
                     │ SQL
                     ↓
┌─────────────────────────────────────────────────────────┐
│              Database (PostgreSQL)                       │
│  - Users, Programs, Enrollments, Contacts, etc.        │
└─────────────────────────────────────────────────────────┘
```

## Step 1: Setup API Client

Create `src/lib/api.js`:

```javascript
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to all requests
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

## Step 2: Create Authentication Context

Create `src/context/AuthContext.js`:

```javascript
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/lib/api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      verifyToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      const response = await api.get('/auth/verify');
      setUser(response.data.user);
    } catch (error) {
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
    return response.data;
  };

  const register = async (data) => {
    const response = await api.post('/auth/register', data);
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
    return response.data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

## Step 3: Create Login Page

Create `src/app/login/page.js`:

```javascript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login to Anandbodh</h1>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p>
          Don't have an account? <Link href="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
}
```

## Step 4: Create Register Page

Create `src/app/register/page.js`:

```javascript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { register } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(formData);
      router.push('/dashboard');
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Join Anandbodh</h1>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <p>
          Already have an account? <Link href="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}
```

## Step 5: Create User Dashboard

Create `src/app/user-dashboard/page.js`:

```javascript
'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/api';
import Link from 'next/link';

export default function UserDashboard() {
  const { user, loading } = useAuth();
  const [enrollments, setEnrollments] = useState([]);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    if (user) {
      fetchEnrollments();
    }
  }, [user]);

  const fetchEnrollments = async () => {
    try {
      const response = await api.get('/users/enrollments');
      setEnrollments(response.data.enrollments);
    } catch (error) {
      console.error('Failed to fetch enrollments:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please login first</div>;

  return (
    <div className="dashboard">
      <h1>Welcome, {user.firstName}!</h1>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Active Enrollments</h3>
          <p className="stat-number">{enrollments.length}</p>
        </div>
      </div>

      <div className="enrollments-section">
        <h2>Your Programs</h2>
        {enrollments.length > 0 ? (
          <div className="enrollments-grid">
            {enrollments.map((enrollment) => (
              <div key={enrollment.id} className="enrollment-card">
                <h3>{enrollment.program_name}</h3>
                <p>Progress: {enrollment.progress_percentage}%</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${enrollment.progress_percentage}%` }}
                  />
                </div>
                <p>Status: {enrollment.status}</p>
                <Link href={`/programs/${enrollment.slug}`}>
                  Continue →
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No active enrollments. <Link href="/programs">Browse programs</Link></p>
        )}
      </div>
    </div>
  );
}
```

## Step 6: Update Layout with Auth Provider

Update `src/app/layout.js`:

```javascript
import { AuthProvider } from '@/context/AuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
```

## Step 7: Update Environment Variables

Update `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

For production:

```
NEXT_PUBLIC_API_URL=https://api.anandbodh.com/api
```

## Step 8: Add Protected Routes

Create `src/middleware.js`:

```javascript
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // Protected routes
  const protectedRoutes = ['/user-dashboard', '/profile', '/enrollments'];

  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/user-dashboard/:path*', '/profile/:path*', '/enrollments/:path*'],
};
```

## Step 9: Add Enrollment Feature

Update `src/app/programs/[slug]/page.js`:

```javascript
'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import api from '@/lib/api';

export default function ProgramPage({ params }) {
  const { user } = useAuth();
  const [enrolling, setEnrolling] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  const handleEnroll = async (programId) => {
    if (!user) {
      window.location.href = '/login';
      return;
    }

    setEnrolling(true);
    try {
      await api.post('/enrollments', { programId });
      setEnrolled(true);
      alert('Successfully enrolled!');
    } catch (error) {
      alert(error.response?.data?.error || 'Enrollment failed');
    } finally {
      setEnrolling(false);
    }
  };

  return (
    <div>
      {/* Program content */}
      <button
        onClick={() => handleEnroll(programId)}
        disabled={enrolling || enrolled}
      >
        {enrolled ? 'Already Enrolled' : enrolling ? 'Enrolling...' : 'Enroll Now'}
      </button>
    </div>
  );
}
```

## Step 10: Install Dependencies

```bash
npm install axios
```

## Testing

### Test Registration

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123",
    "firstName": "Test",
    "lastName": "User"
  }'
```

### Test Login

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

### Test Protected Route

```bash
curl -X GET http://localhost:5000/api/users/profile \
  -H "Authorization: Bearer <token>"
```

## Deployment

### Frontend (Vercel)

```bash
vercel deploy
```

### Backend (Heroku)

```bash
git push heroku main
```

## Troubleshooting

### CORS Error

Add to backend `server.js`:

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
```

### Token Not Persisting

Use cookies instead of localStorage:

```javascript
// In login response
res.cookie('token', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'strict'
});
```

### API Not Responding

1. Check backend is running: `npm run dev`
2. Check database connection
3. Check environment variables
4. Check CORS configuration

---

**Status:** ✅ Ready to integrate  
**Last Updated:** April 6, 2026
