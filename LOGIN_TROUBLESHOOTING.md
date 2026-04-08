# Login Troubleshooting Guide

## Common Login Issues & Solutions

### Issue 1: "Login failed" Error

**Possible Causes:**
1. Wrong email or password
2. User account doesn't exist
3. Supabase not connected
4. Email confirmation required

**Solutions:**

**Step 1: Check if Account Exists**
- Go to Supabase dashboard
- Click "Table Editor"
- Click "user_profiles" table
- Search for your email
- If not found, you need to sign up first

**Step 2: Try Signing Up First**
- Go to `/signin` (not `/login`)
- Create a new account
- Then try logging in at `/login`

**Step 3: Check Email Confirmation**
- In Supabase, go to "Authentication" → "Settings"
- Look for "Email Confirmations"
- If enabled, you need to confirm email first
- Check your email for confirmation link

**Step 4: Check Browser Console**
- Press F12 (or Cmd+Option+I on Mac)
- Go to "Console" tab
- Look for error messages
- Share the error message

---

### Issue 2: Page Doesn't Load

**Possible Causes:**
1. Supabase credentials missing
2. Network error
3. Browser cache issue

**Solutions:**

**Step 1: Clear Browser Cache**
- Press Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
- Select "All time"
- Check "Cookies and other site data"
- Click "Clear data"
- Refresh page

**Step 2: Check Supabase Credentials**
- Go to `frontend/.env.local`
- Verify `NEXT_PUBLIC_SUPABASE_URL` is set
- Verify `NEXT_PUBLIC_SUPABASE_ANON_KEY` is set
- If missing, add them from Supabase dashboard

**Step 3: Restart Development Server**
- Stop the dev server (Ctrl+C)
- Run `npm run dev` again
- Try logging in again

---

### Issue 3: "Supabase not initialized" Error

**Cause:** Environment variables not loaded

**Solution:**

**Step 1: Check .env.local File**
```
frontend/.env.local should contain:
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

**Step 2: Get Credentials from Supabase**
1. Go to https://supabase.com
2. Open your project
3. Click "Settings" → "API"
4. Copy "Project URL" → `NEXT_PUBLIC_SUPABASE_URL`
5. Copy "anon public key" → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**Step 3: Update .env.local**
```
NEXT_PUBLIC_SUPABASE_URL=https://qasiwqxwklsclfhpsouo.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_urz7pfzTbjpq5EnuD9HdEw_3jGHwEaY
```

**Step 4: Restart Dev Server**
```bash
npm run dev
```

---

### Issue 4: Redirects to Wrong Page

**Problem:** After login, redirects to `/user-dashboard` instead of `/dashboard`

**Solution:**
- This is correct behavior
- `/user-dashboard` is the user dashboard
- `/dashboard` is the old dashboard
- Both should work

---

### Issue 5: Can't See Admin Panel After Login

**Problem:** Logged in but can't access `/admin`

**Cause:** User role is not set to 'admin'

**Solution:**

**Step 1: Set Admin Role**
- Go to Supabase dashboard
- SQL Editor → New Query
- Run:
```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

**Step 2: Log Out and Back In**
- Log out from app
- Log back in
- Try accessing `/admin`

---

## Step-by-Step Login Workflow

### 1. Sign Up (First Time)
```
Go to /signin
Enter email: john@example.com
Enter password: SecurePass123!
Click "Sign Up"
Wait for success message
```

### 2. Check Supabase
```
Go to Supabase dashboard
Table Editor → user_profiles
Search for john@example.com
Should see your profile created
```

### 3. Log In
```
Go to /login
Enter email: john@example.com
Enter password: SecurePass123!
Click "Login"
Should redirect to /user-dashboard
```

### 4. Set Admin Role (Optional)
```
Go to Supabase dashboard
SQL Editor → New Query
UPDATE user_profiles SET role = 'admin' WHERE email = 'john@example.com';
Click Run
```

### 5. Access Admin Panel
```
Log out and log back in
Go to /admin
Should see admin dashboard
```

---

## Debugging Steps

### Step 1: Open Browser Console
- Press F12 (Windows/Linux) or Cmd+Option+I (Mac)
- Go to "Console" tab
- Look for any red error messages

### Step 2: Check Network Tab
- Go to "Network" tab
- Try logging in
- Look for failed requests
- Check the response

### Step 3: Check Application Tab
- Go to "Application" tab
- Look for "Local Storage"
- Check if auth token is stored
- Check if user data is stored

### Step 4: Check Supabase Logs
- Go to Supabase dashboard
- Click "Logs" (if available)
- Look for authentication errors
- Check for failed queries

---

## Common Error Messages

### "Invalid login credentials"
- ❌ Wrong email or password
- ✅ Check spelling
- ✅ Try signing up again

### "User not found"
- ❌ Account doesn't exist
- ✅ Go to `/signin` to sign up first

### "Email not confirmed"
- ❌ Email confirmation required
- ✅ Check email for confirmation link
- ✅ Or disable email confirmation in Supabase

### "Supabase not initialized"
- ❌ Environment variables missing
- ✅ Check `.env.local` file
- ✅ Restart dev server

### "Network error"
- ❌ Can't reach Supabase
- ✅ Check internet connection
- ✅ Check Supabase status
- ✅ Try again later

---

## Quick Checklist

- [ ] Account created at `/signin`
- [ ] Email and password correct
- [ ] User profile exists in Supabase
- [ ] Supabase credentials in `.env.local`
- [ ] Dev server restarted
- [ ] Browser cache cleared
- [ ] No error in browser console
- [ ] Supabase project is active

---

## Still Not Working?

### Collect Information
1. What error message do you see?
2. What's in the browser console?
3. Does the account exist in Supabase?
4. Are the credentials in `.env.local`?
5. Did you restart the dev server?

### Try These Steps
1. Clear browser cache
2. Restart dev server
3. Sign up again at `/signin`
4. Try logging in at `/login`
5. Check browser console for errors

### If Still Stuck
- Check Supabase project is active
- Verify credentials are correct
- Try in incognito window
- Try in different browser
- Check Supabase status page

---

## Email Confirmation Issue

### If Email Confirmation is Enabled

**Problem:** Can't log in because email not confirmed

**Solution 1: Disable Email Confirmation**
1. Go to Supabase dashboard
2. Click "Authentication" → "Settings"
3. Find "Email Confirmations"
4. Toggle OFF
5. Try logging in again

**Solution 2: Confirm Email**
1. Check your email for confirmation link
2. Click the link
3. You should be confirmed
4. Try logging in

---

## Testing Login Locally

### Test 1: Sign Up
```
1. Go to http://localhost:3000/signin
2. Enter test email: test@example.com
3. Enter password: TestPass123!
4. Click "Sign Up"
5. Should see success message
```

### Test 2: Check Database
```
1. Go to Supabase dashboard
2. Table Editor → user_profiles
3. Search for test@example.com
4. Should see your profile
```

### Test 3: Log In
```
1. Go to http://localhost:3000/login
2. Enter email: test@example.com
3. Enter password: TestPass123!
4. Click "Login"
5. Should redirect to /user-dashboard
```

---

**Last Updated**: April 8, 2026
**Status**: ✅ Troubleshooting guide complete
