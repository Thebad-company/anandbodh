# 🚀 Supabase Migration Guide

## Why Supabase?

### Advantages Over Custom Express Backend
| Feature | Custom Backend | Supabase |
|---------|---|---|
| Database | PostgreSQL | PostgreSQL ✅ |
| Authentication | Manual JWT | Built-in Auth ✅ |
| REST API | Manual endpoints | Auto-generated ✅ |
| Real-time | Need Socket.io | Built-in ✅ |
| File Storage | Manual setup | Built-in ✅ |
| Serverless Functions | Need setup | Built-in ✅ |
| Row-level Security | Manual | Built-in ✅ |
| Deployment | Manual | Managed ✅ |
| Cost | Server costs | Free tier + pay-as-you-go ✅ |
| Maintenance | Full responsibility | Managed ✅ |

---

## Step 1: Create Supabase Project

### 1. Go to Supabase
- Visit https://supabase.com
- Click "Start your project"
- Sign up with email or GitHub

### 2. Create New Project
- Click "New Project"
- Enter project name: `anandbodh`
- Choose region: (closest to your users)
- Set database password
- Click "Create new project"

### 3. Wait for Setup
- Project will be created (takes ~2 minutes)
- You'll get database credentials

---

## Step 2: Setup Database Schema

### 1. Go to SQL Editor
- In Supabase dashboard
- Click "SQL Editor"
- Click "New Query"

### 2. Create Tables

```sql
-- Users table (Supabase auth handles this, but we need profile data)
CREATE TABLE public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  phone VARCHAR(20),
  role VARCHAR(50) DEFAULT 'member',
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Programs table
CREATE TABLE public.programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  duration_days INTEGER,
  max_participants INTEGER,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enrollments table
CREATE TABLE public.enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  program_id UUID NOT NULL REFERENCES public.programs(id) ON DELETE CASCADE,
  status VARCHAR(50) DEFAULT 'active',
  progress_percentage INTEGER DEFAULT 0,
  start_date TIMESTAMP DEFAULT NOW(),
  end_date TIMESTAMP,
  payment_status VARCHAR(50) DEFAULT 'pending',
  payment_intent_id VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Contacts table
CREATE TABLE public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  phone VARCHAR(20),
  message TEXT,
  source VARCHAR(100),
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Email campaigns table
CREATE TABLE public.email_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  content TEXT,
  recipient_count INTEGER DEFAULT 0,
  sent_count INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Analytics events table
CREATE TABLE public.analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  event_type VARCHAR(100),
  event_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- User profiles: users can read their own, admins can read all
CREATE POLICY "Users can read own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can read all profiles" ON public.user_profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Programs: anyone can read, only admins can write
CREATE POLICY "Anyone can read programs" ON public.programs
  FOR SELECT USING (true);

CREATE POLICY "Only admins can insert programs" ON public.programs
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Enrollments: users can read their own, admins can read all
CREATE POLICY "Users can read own enrollments" ON public.enrollments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can read all enrollments" ON public.enrollments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Contacts: anyone can insert, admins can read
CREATE POLICY "Anyone can create contacts" ON public.contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can read contacts" ON public.contacts
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

### 3. Run Query
- Click "Run"
- Tables will be created

---

## Step 3: Get Supabase Credentials

### 1. Go to Settings
- Click "Settings" (bottom left)
- Click "API"

### 2. Copy Keys
- Copy `Project URL`
- Copy `anon` key (public key)
- Copy `service_role` key (secret key)

### 3. Add to Environment
Create `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

## Step 4: Update Frontend

### 1. Install Supabase Client
```bash
npm install @supabase/supabase-js
```

### 2. Create Supabase Client
Create `src/lib/supabase.js`:
```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 3. Update Auth Context
Update `src/context/AuthContext.js` to use Supabase auth:
```javascript
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser(session.user);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser(session.user);
        } else {
          setUser(null);
        }
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  const register = async (email, password, firstName, lastName) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      },
    });

    if (error) throw error;
    return data;
  };

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

### 4. Update API Client
Update `src/lib/api.js` to use Supabase:
```javascript
import { supabase } from './supabase';

export const api = {
  // Programs
  getPrograms: async () => {
    const { data, error } = await supabase
      .from('programs')
      .select('*');
    if (error) throw error;
    return data;
  },

  getProgram: async (id) => {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  // Enrollments
  createEnrollment: async (userId, programId) => {
    const { data, error } = await supabase
      .from('enrollments')
      .insert([
        {
          user_id: userId,
          program_id: programId,
          status: 'active',
        },
      ])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  getEnrollments: async (userId) => {
    const { data, error } = await supabase
      .from('enrollments')
      .select('*')
      .eq('user_id', userId);
    if (error) throw error;
    return data;
  },

  // Contacts
  createContact: async (contactData) => {
    const { data, error } = await supabase
      .from('contacts')
      .insert([contactData])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  // Analytics
  logEvent: async (eventType, eventData) => {
    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase
      .from('analytics_events')
      .insert([
        {
          user_id: user?.id,
          event_type: eventType,
          event_data: eventData,
        },
      ]);
    if (error) throw error;
  },
};
```

---

## Step 5: Update Login/Register Pages

### Update Login Page
```javascript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      router.push('/user-dashboard');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="auth-section">
          <div className="container">
            <div className="auth-card">
              <h1>Welcome Back</h1>
              <p>Login to your Anandbodh account</p>

              {error && <div className="error-message">{error}</div>}

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

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                  />
                </div>

                <Link href="/forgot-password" className="forgot-link">
                  Forgot password?
                </Link>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </form>

              <p className="auth-footer">
                Don't have an account? <Link href="/register">Register here</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

### Update Register Page
```javascript
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      await register(
        formData.email,
        formData.password,
        formData.firstName,
        formData.lastName
      );
      router.push('/user-dashboard');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="auth-section">
          <div className="container">
            <div className="auth-card">
              <h1>Join Anandbodh</h1>
              <p>Start your wellness journey today</p>

              {error && <div className="error-message">{error}</div>}

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? 'Creating account...' : 'Create Account'}
                </button>
              </form>

              <p className="auth-footer">
                Already have an account? <Link href="/login">Login here</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

---

## Step 6: Setup Stripe with Supabase

### 1. Create Supabase Function for Payments
In Supabase dashboard:
- Click "Functions"
- Click "Create a new function"
- Name: `create-payment-intent`

```javascript
import Stripe from 'stripe';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY'));

Deno.serve(async (req) => {
  const { programId, amount } = await req.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: 'usd',
    metadata: { programId },
  });

  return new Response(
    JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    { headers: { 'Content-Type': 'application/json' } }
  );
});
```

### 2. Deploy Function
- Click "Deploy"
- Add environment variable: `STRIPE_SECRET_KEY`

---

## Step 7: Deployment

### Deploy to Vercel
```bash
vercel deploy --prod
```

### Environment Variables on Vercel
Add to Vercel project settings:
```
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
NEXT_PUBLIC_STRIPE_KEY=your-stripe-key
STRIPE_SECRET_KEY=your-stripe-secret
```

---

## Benefits of Supabase

✅ **No server management** - Fully managed  
✅ **Real-time capabilities** - Built-in  
✅ **Authentication** - Built-in with multiple providers  
✅ **File storage** - For images, videos  
✅ **Serverless functions** - For custom logic  
✅ **Row-level security** - Built-in  
✅ **Auto-generated API** - No need to write endpoints  
✅ **Scalable** - Handles growth automatically  
✅ **Cost-effective** - Free tier + pay-as-you-go  

---

## Migration Checklist

- [ ] Create Supabase project
- [ ] Create database tables
- [ ] Get API credentials
- [ ] Update `.env.local`
- [ ] Install `@supabase/supabase-js`
- [ ] Create `src/lib/supabase.js`
- [ ] Update `AuthContext.js`
- [ ] Update `src/lib/api.js`
- [ ] Update login page
- [ ] Update register page
- [ ] Test authentication
- [ ] Test enrollment
- [ ] Test payment
- [ ] Deploy to Vercel
- [ ] Test in production

---

**Status:** Ready to migrate  
**Estimated Time:** 2-3 hours  
**Benefit:** Faster development, less maintenance

