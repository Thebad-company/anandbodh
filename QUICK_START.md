# Quick Start Guide - Anandbodh Admin Panel

## 🎯 What You Need to Do RIGHT NOW

### 1. Fix Blog Management (5 minutes)

**Go to**: Supabase Dashboard → SQL Editor

**Copy & Paste this SQL**:

```sql
-- Drop old broken policies
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins can manage all blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Anyone can view images" ON images;
DROP POLICY IF EXISTS "Admins can manage images" ON images;

-- Create new fixed policies
CREATE POLICY "Anyone can view published blog posts" ON blog_posts
  FOR SELECT USING (status = 'published' OR auth.uid() IS NOT NULL);

CREATE POLICY "Admins can insert blog posts" ON blog_posts
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can update blog posts" ON blog_posts
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can delete blog posts" ON blog_posts
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Anyone can view images" ON images
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert images" ON images
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Admins can delete images" ON images
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

**Click**: Run

---

### 2. Make Sure You're Admin

**Go to**: Supabase Dashboard → SQL Editor

**Run this**:

```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

Replace `your-email@example.com` with your actual email.

---

### 3. Test It

1. Go to: `http://localhost:3000/admin/blogs`
2. Click **+ New Blog Post**
3. Fill in the form
4. Click **Create Blog Post**
5. ✅ Done!

---

## 📍 Admin Panel URLs

| Page | URL |
|------|-----|
| Dashboard | `http://localhost:3000/admin` |
| Blog Management | `http://localhost:3000/admin/blogs` |
| Image Management | `http://localhost:3000/admin/images` |
| User Management | `http://localhost:3000/admin/users` |
| Programs | `http://localhost:3000/admin/programs` |
| Enrollments | `http://localhost:3000/admin/enrollments` |
| Contacts | `http://localhost:3000/admin/contacts` |
| Emails | `http://localhost:3000/admin/emails` |
| Analytics | `http://localhost:3000/admin/analytics` |

---

## 🎨 Create Your First Blog Post

1. Go to `/admin/blogs`
2. Click **+ New Blog Post**
3. Fill in:
   - **Title**: "My First Blog Post"
   - **Slug**: "my-first-blog-post"
   - **Excerpt**: "A short summary"
   - **Content**: "Your blog content here"
   - **Category**: "Wellness"
   - **Status**: "Published"
4. Click **Create Blog Post**
5. ✅ Your blog post is live!

---

## 🖼️ Upload Your First Image

1. Go to `/admin/images`
2. Click **Upload New Image**
3. Select an image file
4. Fill in:
   - **Title**: "My Image"
   - **Description**: "What this image shows"
   - **Alt Text**: "For accessibility"
   - **Category**: "Blog"
5. Click **Upload Image**
6. ✅ Your image is uploaded!

---

## ❌ If Something Goes Wrong

### Error: "Access Denied"
- Make sure your user role is 'admin'
- Run: `UPDATE user_profiles SET role = 'admin' WHERE email = 'your-email@example.com';`

### Error: "Failed to fetch blogs"
- Apply the RLS policy fix (Step 1 above)

### Images Not Uploading
- Check that `blog-images` bucket exists in Supabase Storage
- Make sure it's set to Public

---

## ✅ Checklist

- [ ] Applied RLS policy fix
- [ ] Set user role to 'admin'
- [ ] Tested `/admin/blogs`
- [ ] Created first blog post
- [ ] Tested `/admin/images`
- [ ] Uploaded first image
- [ ] All working!

---

## 📞 Need Help?

See these files:
- `CURRENT_STATUS.md` - Full project status
- `FIX_BLOG_ERROR.md` - Detailed blog error fix
- `ADMIN_ACCESS.md` - Admin panel setup
- `README.md` - Project overview

