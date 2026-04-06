# 🚀 Supabase Setup Instructions

## Quick Start (5 minutes)

### 1. Create Supabase Project
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up with email or GitHub
4. Create new project:
   - Name: `anandbodh`
   - Region: Choose closest to your users
   - Password: Create strong password
5. Wait for project creation (~2 minutes)

### 2. Get Credentials
1. Go to Settings → API
2. Copy these values:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

### 3. Setup Environment
Create `.env.local`:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
NEXT_PUBLIC_STRIPE_KEY=pk_test_your-stripe-key
STRIPE_SECRET_KEY=sk_test_your-stripe-secret
```

### 4. Create Database Tables
1. In Supabase dashboard, go to SQL Editor
2. Click "New Query"
3. Copy and paste the SQL below
4. Click "Run"

```sql
-- User Profiles
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

-- Programs
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

-- Enrollments
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

-- Contacts
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

-- Email Campaigns
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

-- Analytics Events
CREATE TABLE public.analytics_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  event_type VARCHAR(100),
  event_data JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- User profiles: users can read own, admins can read all
CREATE POLICY "Users can read own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Admins can read all profiles" ON public.user_profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Programs: anyone can read
CREATE POLICY "Anyone can read programs" ON public.programs
  FOR SELECT USING (true);

-- Enrollments: users can read own, admins can read all
CREATE POLICY "Users can read own enrollments" ON public.enrollments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can read all enrollments" ON public.enrollments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Contacts: anyone can create, admins can read
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

### 5. Seed Sample Data
1. Go to SQL Editor
2. Create new query
3. Paste this SQL:

```sql
-- Insert sample programs
INSERT INTO public.programs (name, slug, description, price, duration_days, max_participants, status)
VALUES
  ('Dhyan Meditation Program', 'meditation', 'Master meditation techniques to reduce stress and achieve inner peace', 99, 30, 100, 'active'),
  ('Soleus Activation Program', 'soleus-activation', 'Activate your soleus muscle for better health and longevity', 99, 30, 100, 'active'),
  ('Ayurveda Wellness Program', 'ayurveda', 'Learn ancient Ayurvedic principles for holistic wellness', 99, 30, 100, 'active'),
  ('Thrive at Work Program', 'thrive-at-work', 'Optimize your performance and well-being at work', 99, 30, 100, 'active'),
  ('Wake Up Life Program', 'wake-up-life', 'Transform your life with our comprehensive wellness program', 99, 30, 100, 'active');
```

### 6. Test Connection
```bash
npm run dev
```

Go to http://localhost:3000/register and try to create an account.

---

## Verify Setup

### Check Tables Created
1. In Supabase dashboard
2. Go to "Table Editor"
3. You should see:
   - user_profiles
   - programs
   - enrollments
   - contacts
   - email_campaigns
   - analytics_events

### Check Sample Data
1. Click "programs" table
2. You should see 5 sample programs

### Test Authentication
1. Go to http://localhost:3000/register
2. Create test account
3. Check Supabase Auth section for new user

---

## Troubleshooting

### "Supabase credentials not found"
- Check `.env.local` has correct values
- Restart dev server: `npm run dev`

### "Connection refused"
- Check internet connection
- Verify Supabase project is active
- Check credentials are correct

### "Table does not exist"
- Run SQL queries again
- Check table names match exactly
- Verify RLS is enabled

### "Permission denied"
- Check RLS policies are created
- Verify user role is set correctly
- Check auth token is valid

---

## Next Steps

1. ✅ Create Supabase project
2. ✅ Create database tables
3. ✅ Get credentials
4. ✅ Setup environment
5. ✅ Seed sample data
6. 🔄 Test authentication
7. 🔄 Test enrollment
8. 🔄 Test payment
9. 🔄 Deploy to production

---

## Useful Links

- Supabase Dashboard: https://app.supabase.com
- Supabase Docs: https://supabase.com/docs
- Supabase Auth: https://supabase.com/docs/guides/auth
- Supabase Database: https://supabase.com/docs/guides/database

---

## Support

If you encounter issues:
1. Check Supabase status: https://status.supabase.com
2. Check browser console for errors
3. Check Supabase logs in dashboard
4. Review SUPABASE_MIGRATION_GUIDE.md

---

**Status:** Ready to setup  
**Estimated Time:** 5-10 minutes  
**Benefit:** Fully managed backend, no server maintenance

