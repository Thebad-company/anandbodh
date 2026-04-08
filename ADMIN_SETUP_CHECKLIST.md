# Admin Setup Checklist

## ✅ Quick Setup (5 minutes)

### Step 1: Create Admin Tables
- [ ] Go to Supabase Dashboard → SQL Editor
- [ ] Run SQL from `SUPABASE_ADMIN_SCHEMA.sql`
- [ ] Verify tables created: `blog_posts`, `images`

### Step 2: Create Storage Bucket
- [ ] Go to Supabase Dashboard → Storage
- [ ] Create new bucket: `blog-images`
- [ ] Make it **Public**

### Step 3: Set Admin Role
- [ ] Go to Supabase Dashboard → SQL Editor
- [ ] Run:
```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```
- [ ] Replace with your actual email

### Step 4: Verify Admin Access
- [ ] Login to your account
- [ ] Go to `http://localhost:3000/admin`
- [ ] You should see Admin Dashboard

## ✅ Admin Features

### Blog Management
- [ ] Go to `/admin/blogs`
- [ ] Create a test blog post
- [ ] Verify it appears in the list
- [ ] Try editing and deleting

### Image Management
- [ ] Go to `/admin/images`
- [ ] Upload a test image
- [ ] Verify it appears in the gallery
- [ ] Try deleting it

### Other Admin Pages
- [ ] `/admin/users` - User management
- [ ] `/admin/programs` - Program management
- [ ] `/admin/enrollments` - Enrollment tracking
- [ ] `/admin/contacts` - Contact management
- [ ] `/admin/emails` - Email campaigns
- [ ] `/admin/analytics` - Analytics dashboard

## ✅ Verification

### Check Admin Role
```sql
SELECT email, role, status FROM user_profiles WHERE email = 'your-email@example.com';
```
Should show: `role = 'admin'`

### Check Tables Exist
```sql
SELECT tablename FROM pg_tables WHERE tablename IN ('blog_posts', 'images');
```
Should show both tables

### Check Storage Bucket
- Go to Supabase → Storage
- Should see `blog-images` bucket

## ✅ Ready to Use

Once all checks pass:
- ✅ Admin panel is fully functional
- ✅ Blog management ready
- ✅ Image management ready
- ✅ All features accessible

## Quick Links

| Feature | URL |
|---------|-----|
| Admin Dashboard | `/admin` |
| Blog Posts | `/admin/blogs` |
| Images | `/admin/images` |
| Users | `/admin/users` |
| Programs | `/admin/programs` |

## Troubleshooting

### Can't Access Admin
- [ ] Verify you're logged in
- [ ] Check your role is 'admin'
- [ ] Try refreshing the page

### Tables Not Created
- [ ] Check SQL ran without errors
- [ ] Verify in Supabase → Database → Tables

### Storage Bucket Missing
- [ ] Go to Supabase → Storage
- [ ] Create `blog-images` bucket
- [ ] Make it public

## Done! 🎉

Your admin panel is ready to use!
