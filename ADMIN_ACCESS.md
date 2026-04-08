# How to Access Admin Panel

## Step 1: Create Admin Tables in Supabase

Go to **Supabase Dashboard → SQL Editor** and run:

```sql
-- Copy entire content from SUPABASE_ADMIN_SCHEMA.sql
```

Or run this directly:

```sql
-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image_url VARCHAR(500),
  author_id UUID REFERENCES user_profiles(id) ON DELETE SET NULL,
  category VARCHAR(100),
  tags TEXT[],
  status VARCHAR(50) DEFAULT 'draft',
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Images Table
CREATE TABLE IF NOT EXISTS images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(500) NOT NULL,
  storage_path VARCHAR(500),
  file_size INTEGER,
  mime_type VARCHAR(50),
  width INTEGER,
  height INTEGER,
  alt_text VARCHAR(255),
  category VARCHAR(100),
  tags TEXT[],
  uploaded_by UUID REFERENCES user_profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author_id ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_images_category ON images(category);
CREATE INDEX IF NOT EXISTS idx_images_uploaded_by ON images(uploaded_by);

-- Enable RLS
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE images ENABLE ROW LEVEL SECURITY;

-- Blog Posts RLS Policies
CREATE POLICY "Anyone can view published blog posts" ON blog_posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Admins can manage all blog posts" ON blog_posts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Images RLS Policies
CREATE POLICY "Anyone can view images" ON images
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage images" ON images
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

## Step 2: Create Storage Bucket for Images

In **Supabase Dashboard → Storage**:

1. Click **Create a new bucket**
2. Name: `blog-images`
3. Make it **Public**
4. Click **Create bucket**

## Step 3: Set Your User as Admin

Go to **Supabase Dashboard → SQL Editor** and run:

```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

Replace `your-email@example.com` with your actual email.

## Step 4: Access Admin Panel

1. Make sure you're logged in
2. Go to: `http://localhost:3000/admin`
3. You should see the Admin Dashboard

## Admin Features Available

### 1. Blog Management (`/admin/blogs`)
- ✅ Create new blog posts
- ✅ Edit existing posts
- ✅ Delete posts
- ✅ Set status (Draft/Published/Archived)
- ✅ Add categories

### 2. Image Management (`/admin/images`)
- ✅ Upload images to Supabase Storage
- ✅ Organize by category
- ✅ Add alt text for accessibility
- ✅ View all uploaded images
- ✅ Delete images

### 3. Other Admin Features
- User Management
- Program Management
- Enrollment Tracking
- Contact Management
- Email Campaigns
- Analytics

## Quick Access Links

| Feature | URL |
|---------|-----|
| Admin Dashboard | `/admin` |
| Blog Management | `/admin/blogs` |
| Image Management | `/admin/images` |
| User Management | `/admin/users` |
| Programs | `/admin/programs` |
| Enrollments | `/admin/enrollments` |
| Contacts | `/admin/contacts` |
| Emails | `/admin/emails` |
| Analytics | `/admin/analytics` |

## Create Your First Blog Post

1. Go to `/admin/blogs`
2. Click **+ New Blog Post**
3. Fill in:
   - **Title**: Your blog title
   - **Slug**: URL-friendly version (e.g., `my-first-post`)
   - **Excerpt**: Short summary
   - **Content**: Full blog content
   - **Category**: e.g., "Wellness", "Meditation"
   - **Status**: Draft or Published
4. Click **Create Blog Post**

## Upload Your First Image

1. Go to `/admin/images`
2. Click **Upload New Image**
3. Select image file
4. Fill in:
   - **Title**: Image name
   - **Description**: What the image shows
   - **Alt Text**: For accessibility
   - **Category**: e.g., "Blog", "Hero"
5. Click **Upload Image**

## Troubleshooting

### "Access Denied" Error
- Check that your user role is 'admin' in Supabase
- Run: `SELECT email, role FROM user_profiles WHERE email = 'your-email@example.com';`
- If role is not 'admin', update it with the SQL above

### Images Not Uploading
- Verify `blog-images` bucket exists and is public
- Check file size (< 10MB)
- Check browser console for errors

### Blog Posts Not Showing
- Verify `blog_posts` table exists
- Check that status is 'published' for public view
- Verify RLS policies are correct

## Admin Dashboard Overview

The admin dashboard shows:
- Total Users
- Active Enrollments
- Total Contacts
- Revenue

And provides quick access to:
- User Management
- Programs
- Blog Posts
- Images
- Enrollments
- Contacts
- Email Campaigns
- Analytics

## Next Steps

1. ✅ Create admin tables
2. ✅ Create storage bucket
3. ✅ Set your user as admin
4. ✅ Access `/admin`
5. Create your first blog post
6. Upload your first image
7. Customize content

## Summary

✅ Admin panel is fully functional
✅ Blog and image management ready
✅ All features accessible at `/admin`
✅ Ready to manage your content!
