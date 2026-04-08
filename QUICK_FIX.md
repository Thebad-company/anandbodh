# Quick Fix: User Profiles Not Storing

## The Problem
Users sign up successfully but their profiles don't appear in the database.

## The Fix (2 minutes)

### Go to Supabase Dashboard

1. Open https://app.supabase.com
2. Select your project
3. Go to **SQL Editor**
4. Click **New Query**
5. Copy and paste this SQL:

```sql
-- Drop old policies
DROP POLICY IF EXISTS "Users can view their own profile" ON user_profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON user_profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON user_profiles;

-- Create new policies with INSERT permission
CREATE POLICY "Users can create their own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view their own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON user_profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can manage all profiles" ON user_profiles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

6. Click **Run**
7. Done! ✅

## Test It

1. Sign up at `/signin`
2. Go to Supabase → Database → user_profiles
3. You should see your new profile
4. Login at `/login` should work

## What Was Wrong

The RLS policy was missing the INSERT permission. Users couldn't create their profiles because the database blocked them.

## What's Fixed

Added the missing policy:
```sql
CREATE POLICY "Users can create their own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);
```

Now users can insert their own profiles when they sign up.

## Done!

Your user profiles should now be stored in the database. 🎉
