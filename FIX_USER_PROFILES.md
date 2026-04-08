# Fix: User Profiles Not Being Stored in Database

## Problem
When users sign up, they are created in Supabase Auth but their profiles are not being stored in the `user_profiles` table.

## Root Cause
The RLS (Row Level Security) policy for `user_profiles` table was missing the INSERT permission. Users couldn't insert their own profiles because there was no policy allowing it.

## Solution

### Step 1: Update RLS Policies in Supabase

Go to your Supabase Dashboard and run this SQL in the SQL Editor:

```sql
-- Drop old policies (if they exist)
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

### Step 2: Test the Fix

1. Sign up with a new account at `/signin`
2. Go to Supabase Dashboard → Database → user_profiles
3. You should see your new user profile with:
   - id (UUID from auth)
   - email
   - first_name
   - last_name
   - phone
   - role: 'member'
   - status: 'active'

### Step 3: Verify Login Works

1. Go to `/login`
2. Login with your new account
3. You should be redirected to `/user-dashboard`

## What Changed

### Before (Broken)
```sql
-- Missing INSERT policy - users couldn't create profiles
CREATE POLICY "Users can view their own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);
```

### After (Fixed)
```sql
-- Added INSERT policy - users can now create profiles
CREATE POLICY "Users can create their own profile" ON user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view their own profile" ON user_profiles
  FOR SELECT USING (auth.uid() = id);
```

## Files Updated

- `SUPABASE_SCHEMA.sql` - Updated with correct RLS policies

## How It Works Now

1. User signs up with email/password
2. Supabase Auth creates user in `auth.users` table
3. AuthContext calls `register()` function
4. `register()` inserts profile into `user_profiles` table
5. RLS policy allows insert because `auth.uid() = id`
6. User profile is now stored in database

## Verification

Check that user profiles are being created:

```sql
-- View all user profiles
SELECT id, email, first_name, last_name, role, status, created_at 
FROM user_profiles 
ORDER BY created_at DESC;
```

## Troubleshooting

### Still Not Working?

1. **Check RLS is enabled:**
   ```sql
   SELECT tablename, rowsecurity 
   FROM pg_tables 
   WHERE tablename = 'user_profiles';
   ```
   Should show `rowsecurity = true`

2. **Check policies exist:**
   ```sql
   SELECT policyname, permissive, roles, qual, with_check 
   FROM pg_policies 
   WHERE tablename = 'user_profiles';
   ```

3. **Check table structure:**
   ```sql
   SELECT column_name, data_type, is_nullable 
   FROM information_schema.columns 
   WHERE table_name = 'user_profiles';
   ```

4. **Check auth.users:**
   ```sql
   SELECT id, email, created_at 
   FROM auth.users 
   ORDER BY created_at DESC;
   ```

## Summary

✅ Added INSERT policy to user_profiles RLS
✅ Users can now create their own profiles
✅ Profiles are stored in database on signup
✅ Login works with stored profiles

## Next Steps

1. Run the SQL fix in Supabase
2. Sign up with a new account
3. Verify profile appears in user_profiles table
4. Test login functionality
