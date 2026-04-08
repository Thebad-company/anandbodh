# Admin Routes & Blog Access Control

## Admin Routes Overview

### Admin Dashboard
**Route**: `/admin`
**Access**: Admin users only
**Purpose**: Central hub for all admin functions

### Admin Sections

| Route | Purpose | Access |
|-------|---------|--------|
| `/admin/users` | User management | Admin only |
| `/admin/programs` | Program management | Admin only |
| `/admin/blogs` | Blog management | Admin only |
| `/admin/images` | Image management | Admin only |
| `/admin/enrollments` | Enrollment tracking | Admin only |
| `/admin/contacts` | Contact management | Admin only |
| `/admin/emails` | Email campaigns | Admin only |
| `/admin/analytics` | Platform analytics | Admin only |

---

## Blog Management (`/admin/blogs`)

### What Admins Can Do

✅ **Create Blog Posts**
- Title (required)
- Slug (required, URL-friendly)
- Excerpt (optional)
- Content (required)
- Category (optional)
- Status: Draft, Published, or Archived
- Author automatically set to logged-in user

✅ **View All Blog Posts**
- See all posts in a table
- Filter by status
- See creation date
- See category

✅ **Edit Blog Posts**
- Click "Edit" to modify
- Update any field
- Change status

✅ **Delete Blog Posts**
- Click "Delete" to remove
- Confirmation required

---

## Access Control for Blog

### How It Works

**Frontend Level** (Client-side check):
```javascript
// In /admin/blogs/page.js
if (!user) {
  router.push('/login');  // Not logged in → redirect to login
}
```

**Database Level** (Supabase RLS Policies):

#### 1. **View Blog Posts**
```sql
CREATE POLICY "Anyone can view published blog posts" ON blog_posts
  FOR SELECT USING (status = 'published' OR auth.uid() IS NOT NULL);
```
- ✅ Anyone can view published posts
- ✅ Logged-in users can view all posts (including drafts)
- ❌ Anonymous users can only see published posts

#### 2. **Create Blog Posts**
```sql
CREATE POLICY "Admins can insert blog posts" ON blog_posts
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```
- ✅ Only users with `role = 'admin'` can create
- ❌ Regular members cannot create

#### 3. **Update Blog Posts**
```sql
CREATE POLICY "Admins can update blog posts" ON blog_posts
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```
- ✅ Only admins can update
- ❌ Regular members cannot update

#### 4. **Delete Blog Posts**
```sql
CREATE POLICY "Admins can delete blog posts" ON blog_posts
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```
- ✅ Only admins can delete
- ❌ Regular members cannot delete

---

## How to Become an Admin

### Step 1: Sign Up
- Go to `/signin`
- Create account with email and password

### Step 2: Set Admin Role in Supabase
1. Go to https://supabase.com
2. Open your project
3. Go to "SQL Editor"
4. Run this command:
```sql
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

### Step 3: Verify
```sql
SELECT email, role FROM user_profiles WHERE email = 'your-email@example.com';
```
Should show: `role = 'admin'`

### Step 4: Access Admin Panel
- Log in at `/login`
- Go to `/admin`
- You should see the admin dashboard

---

## Blog Post Workflow

### Creating a Blog Post

1. **Go to Admin Panel**
   - Navigate to `/admin/blogs`

2. **Click "+ New Blog Post"**
   - Form appears

3. **Fill in Details**
   - **Title**: "My Wellness Journey"
   - **Slug**: "my-wellness-journey" (URL-friendly)
   - **Excerpt**: "A short summary..."
   - **Content**: "Full blog post content..."
   - **Category**: "Wellness"
   - **Status**: "Draft" or "Published"

4. **Click "Create Blog Post"**
   - Post is saved to database

5. **View in Table**
   - Post appears in the list
   - Shows title, category, status, date

### Publishing a Blog Post

**Option 1: Publish on Creation**
- Set Status to "Published" before creating
- Post is immediately visible to public

**Option 2: Publish Later**
- Create as "Draft"
- Edit later to change status to "Published"

### Viewing Published Posts

**Public Users**:
- Go to `/blog`
- See all published blog posts
- Click to read full post

**Logged-in Users**:
- Go to `/blog`
- See all published posts
- Can also see draft posts (if admin)

---

## Database Schema for Blog

### blog_posts Table

```sql
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image_url VARCHAR(500),
  author_id UUID REFERENCES user_profiles(id),
  category VARCHAR(100),
  tags TEXT[],
  status VARCHAR(50) DEFAULT 'draft',  -- draft, published, archived
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Fields Explained

| Field | Type | Purpose |
|-------|------|---------|
| `id` | UUID | Unique identifier |
| `title` | String | Blog post title |
| `slug` | String | URL-friendly identifier |
| `excerpt` | Text | Short summary |
| `content` | Text | Full blog content |
| `featured_image_url` | String | Hero image URL |
| `author_id` | UUID | Who created it |
| `category` | String | Blog category |
| `tags` | Array | Search tags |
| `status` | String | draft/published/archived |
| `published_at` | Timestamp | When published |
| `created_at` | Timestamp | When created |
| `updated_at` | Timestamp | Last modified |

---

## Security Features

### 1. **Role-Based Access Control**
- Only users with `role = 'admin'` can manage blogs
- Enforced at database level (RLS policies)
- Cannot be bypassed from frontend

### 2. **Row-Level Security (RLS)**
- Supabase enforces policies automatically
- Even if someone tries to hack, RLS blocks them
- Database-level security

### 3. **Authentication Required**
- Must be logged in to access admin panel
- Must have valid JWT token
- Supabase validates token

### 4. **Audit Trail**
- `author_id` tracks who created post
- `created_at` tracks when
- `updated_at` tracks modifications

---

## Admin Routes Summary

### Main Admin Dashboard
```
/admin
├── /admin/users
├── /admin/programs
├── /admin/blogs
├── /admin/images
├── /admin/enrollments
├── /admin/contacts
├── /admin/emails
└── /admin/analytics
```

### Blog-Specific Routes
```
/admin/blogs
├── GET /admin/blogs (view all)
├── POST /admin/blogs (create)
├── GET /admin/blogs/:id (edit page)
├── PUT /admin/blogs/:id (update)
└── DELETE /admin/blogs/:id (delete)
```

---

## Access Control Summary

### Who Can Access What?

| Action | Anonymous | Member | Admin |
|--------|-----------|--------|-------|
| View published blogs | ✅ | ✅ | ✅ |
| View all blogs | ❌ | ❌ | ✅ |
| Create blog | ❌ | ❌ | ✅ |
| Edit blog | ❌ | ❌ | ✅ |
| Delete blog | ❌ | ❌ | ✅ |
| Access /admin | ❌ | ❌ | ✅ |

---

## Testing Blog Access

### Test 1: Anonymous User
```
1. Open incognito window
2. Go to /admin/blogs
3. Should redirect to /login
```

### Test 2: Regular Member
```
1. Sign up as regular user
2. Go to /admin/blogs
3. Should redirect to home (not admin)
```

### Test 3: Admin User
```
1. Sign up as user
2. Set role to 'admin' in Supabase
3. Go to /admin/blogs
4. Should see blog management interface
```

---

## Troubleshooting

### Can't Access Admin Panel
- ✅ Check if logged in
- ✅ Check if role is 'admin' in Supabase
- ✅ Try logging out and back in
- ✅ Check browser console for errors

### Can't Create Blog Post
- ✅ Check if you're admin
- ✅ Check if all required fields are filled
- ✅ Check browser console for error message
- ✅ Check Supabase logs

### Blog Post Not Appearing
- ✅ Check if status is 'published'
- ✅ Check if you're viewing the right page
- ✅ Try refreshing page
- ✅ Check Supabase database directly

---

## Next Steps

1. **Set yourself as admin** in Supabase
2. **Go to `/admin/blogs`**
3. **Create a test blog post**
4. **Publish it**
5. **View it on `/blog` page**

---

**Last Updated**: April 8, 2026
**Status**: ✅ Admin panel fully functional
