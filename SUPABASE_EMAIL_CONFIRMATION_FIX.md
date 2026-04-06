# Fix: Email Confirmation Required for Login

## Problem
After signing up, the same email/password doesn't work for login because Supabase requires email confirmation by default.

## Solution: Disable Email Confirmation (Development)

### Step 1: Go to Supabase Dashboard
1. Open https://app.supabase.com
2. Select your project
3. Go to **Authentication → Providers**

### Step 2: Disable Email Confirmation
1. Click on **Email** provider
2. Find "Confirm email" toggle
3. **Turn it OFF** (disable email confirmation)
4. Save changes

### Step 3: Update Sign Up to Auto-Confirm
In your code, the sign up will now auto-confirm users.

## Alternative: Keep Email Confirmation (Production)

If you want to keep email confirmation:

1. Update `.env.local` with email service credentials
2. Users will receive confirmation email
3. They must click link to confirm before login works
4. Update sign up page to show: "Check your email to confirm your account"

## For Now (Development)
Just disable email confirmation in Supabase dashboard settings, then:
1. Sign up with new account
2. Login with same email/password should work immediately

## After Disabling Email Confirmation
- Test sign up again
- Try login with same credentials
- Should work without email confirmation
