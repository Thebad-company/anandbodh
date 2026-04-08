# How to Set Admin Role - Complete Guide

## Quick Summary

You need to change your user's `role` from `'member'` to `'admin'` in the Supabase database.

---

## Method 1: SQL Editor (Recommended)

### Step 1: Open Supabase
- Go to https://supabase.com
- Log in with your account
- Click on your project

### Step 2: Open SQL Editor
- Look at the left sidebar
- Click **"SQL Editor"**
- Click **"New Query"** button

### Step 3: Write the SQL Command
Copy and paste this:
```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

### Step 4: Replace Your Email
Change `your-email@example.com` to your actual email address.

**Example**:
```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'john@example.com';
```

### Step 5: Run the Query
- Click the **"Run"** button (or press Ctrl+Enter)
- You should see: "1 row affected"

### Step 6: Verify
Run this query to confirm:
```sql
SELECT email, role FROM user_profiles WHERE email = 'your-email@example.com';
```

You should see:
```
email                  | role
-----------------------|------
your-email@example.com | admin
```

---

## Method 2: Table Editor (Visual)

### Step 1: Open Supabase
- Go to https://supabase.com
- Log in
- Click your project

### Step 2: Open Table Editor
- Left sidebar
- Click **"Table Editor"**

### Step 3: Select user_profiles Table
- Click **"user_profiles"** in the table list

### Step 4: Find Your Row
- Look for your email in the table
- Or use the search box to find it

### Step 5: Edit the Role
- Click on the **"role"** cell in your row
- A dropdown appears
- Select **"admin"**
- Press Enter

### Step 6: Verify
- The role should now show "admin"
- You're done!

---

## Method 3: Using Supabase CLI (Advanced)

If you have Supabase CLI installed:

```bash
# Connect to your project
supabase link --project-ref your-project-ref

# Run the update
supabase db push

# Or run SQL directly
supabase sql --file update-admin.sql
```

---

## After Setting Admin Role

### Step 1: Log Out
- Go to your app
- Click "Logout"

### Step 2: Log Back In
- Go to `/login`
- Enter your email and password
- Click "Login"

### Step 3: Access Admin Panel
- Go to `/admin`
- You should see the admin dashboard
- If not, try refreshing the page

### Step 4: Go to Blog Management
- Click **"Blog Posts"** card
- Or go directly to `/admin/blogs`
- You should see the blog management interface

---

## Troubleshooting

### Problem: Still Can't Access Admin Panel

**Solution 1: Clear Browser Cache**
- Press Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)
- Clear cookies and cache
- Log out and log back in

**Solution 2: Check Role in Database**
Run this query:
```sql
SELECT * FROM user_profiles WHERE email = 'your-email@example.com';
```

Make sure `role` column shows `'admin'`

**Solution 3: Check if User Exists**
If the query returns no results, the user profile wasn't created. Try:
1. Log out
2. Sign up again at `/signin`
3. Then set admin role

### Problem: SQL Query Fails

**Error: "user_profiles" table not found**
- Make sure you ran the Supabase schema setup
- Check that the table exists in Table Editor

**Error: "No rows affected"**
- Check the email address is correct
- Make sure it matches exactly (case-sensitive)
- Try searching in Table Editor first

---

## Complete Workflow

### 1. Sign Up
```
Go to /signin
Enter email: john@example.com
Enter password: secure_password
Click "Sign Up"
```

### 2. Set Admin Role
```
Go to Supabase dashboard
SQL Editor → New Query
UPDATE user_profiles SET role = 'admin' WHERE email = 'john@example.com';
Click Run
```

### 3. Log In
```
Go to /login
Enter email: john@example.com
Enter password: secure_password
Click "Login"
```

### 4. Access Admin Panel
```
Go to /admin
You should see admin dashboard
Click "Blog Posts"
Start creating blog posts!
```

---

## What Each Role Can Do

### Member (Default)
- ✅ View published blog posts
- ✅ View programs
- ✅ Enroll in programs
- ✅ View dashboard
- ❌ Cannot access admin panel
- ❌ Cannot create blog posts

### Admin
- ✅ Everything member can do
- ✅ Access admin panel
- ✅ Create blog posts
- ✅ Edit blog posts
- ✅ Delete blog posts
- ✅ Manage users
- ✅ Manage programs
- ✅ Manage images
- ✅ View analytics

---

## Database Schema

### user_profiles Table

```
id          | email              | role    | status
------------|-------------------|---------|--------
uuid-123    | john@example.com   | admin   | active
uuid-456    | jane@example.com   | member  | active
uuid-789    | bob@example.com    | member  | active
```

The `role` column can be:
- `'member'` - Regular user
- `'admin'` - Administrator
- `'staff'` - Staff member (optional)

---

## SQL Commands Reference

### Set Single User as Admin
```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'john@example.com';
```

### Set Multiple Users as Admin
```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email IN ('john@example.com', 'jane@example.com');
```

### Change Admin Back to Member
```sql
UPDATE user_profiles 
SET role = 'member' 
WHERE email = 'john@example.com';
```

### View All Admins
```sql
SELECT email, role FROM user_profiles WHERE role = 'admin';
```

### View All Users
```sql
SELECT email, role, status FROM user_profiles;
```

---

## Security Notes

⚠️ **Important**:
- Only set admin role for trusted users
- Admin can create/edit/delete blog posts
- Admin can manage all users
- Admin can view analytics
- Be careful who you make admin!

---

## Next Steps

1. ✅ Set yourself as admin
2. ✅ Log out and log back in
3. ✅ Go to `/admin/blogs`
4. ✅ Create your first blog post
5. ✅ Publish it
6. ✅ View it on `/blog` page

---

## Still Having Issues?

### Check These:
1. Email address is correct (case-sensitive)
2. User profile exists in database
3. Role column shows 'admin'
4. Logged out and logged back in
5. Browser cache cleared
6. No typos in SQL query

### Common Mistakes:
- ❌ Wrong email address
- ❌ Forgot to log out/in
- ❌ Didn't clear browser cache
- ❌ Typo in SQL query
- ❌ User profile doesn't exist

---

**Last Updated**: April 8, 2026
**Status**: ✅ Complete guide ready
