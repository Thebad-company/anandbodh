# Supabase Usage in Anandbodh

## ✅ Supabase is ACTIVE and USED

Supabase is the primary database and authentication system for the **frontend**.

---

## 📍 Where Supabase is Used

### 1. **Frontend Authentication** ✅
**File**: `frontend/src/context/AuthContext.js`

```javascript
// Sign up
const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: { data: { first_name, last_name, phone } }
});

// Login
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
});

// Logout
await supabase.auth.signOut();

// Password reset
await supabase.auth.resetPasswordForEmail(email);

// Update password
await supabase.auth.updateUser({ password: newPassword });
```

### 2. **User Profiles** ✅
**File**: `frontend/src/context/AuthContext.js`

```javascript
// Create profile
await supabase.from('user_profiles').insert([{
  id: user.id,
  email: user.email,
  first_name: firstName,
  last_name: lastName,
  phone,
  role: 'member',
  status: 'active'
}]);

// Update profile
await supabase.from('user_profiles').update(updates).eq('id', user.id);
```

### 3. **Blog Management** ✅
**File**: `frontend/src/app/admin/blogs/page.js`

```javascript
// Fetch blogs
const { data, error } = await supabase
  .from('blog_posts')
  .select('*')
  .order('created_at', { ascending: false });

// Create blog
await supabase.from('blog_posts').insert([{
  title, slug, excerpt, content, category, status, author_id
}]);

// Delete blog
await supabase.from('blog_posts').delete().eq('id', id);
```

### 4. **Image Management** ✅
**File**: `frontend/src/app/admin/images/page.js`

```javascript
// Upload image to storage
const { data, error } = await supabase.storage
  .from('blog-images')
  .upload(`images/${filename}`, file);

// Save image metadata
await supabase.from('images').insert([{
  title, description, image_url, alt_text, category
}]);

// Delete image
await supabase.from('images').delete().eq('id', id);
```

### 5. **Admin Panel** ✅
**File**: `frontend/src/app/admin/` (all pages)

```javascript
// User management
const { data } = await supabase
  .from('user_profiles')
  .select('*')
  .order('created_at', { ascending: false });

// Program management
const { data } = await supabase
  .from('programs')
  .select('*');

// Enrollment tracking
const { data } = await supabase
  .from('enrollments')
  .select('*');

// Contact management
const { data } = await supabase
  .from('contacts')
  .select('*');
```

---

## 🔐 Supabase Configuration

### Frontend Environment Variables
**File**: `frontend/.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### Supabase Client
**File**: `frontend/src/lib/supabase.js`

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
```

---

## 📊 Supabase Tables

### 1. **auth.users** (Supabase Managed)
- Email
- Password (hashed)
- Auth metadata
- Created/Updated timestamps

### 2. **user_profiles**
- id (UUID, FK to auth.users)
- email
- first_name
- last_name
- phone
- role (member, admin)
- status (active, inactive)
- profile_data (JSON)
- created_at
- updated_at

### 3. **blog_posts**
- id (UUID)
- title
- slug
- excerpt
- content
- featured_image_url
- author_id (FK to user_profiles)
- category
- tags (array)
- status (draft, published, archived)
- published_at
- created_at
- updated_at

### 4. **images**
- id (UUID)
- title
- description
- image_url
- storage_path
- file_size
- mime_type
- width
- height
- alt_text
- category
- tags (array)
- uploaded_by (FK to user_profiles)
- created_at
- updated_at

### 5. **programs** (Optional)
- id (UUID)
- name
- slug
- description
- price
- duration
- status
- created_at
- updated_at

### 6. **enrollments** (Optional)
- id (UUID)
- user_id (FK to user_profiles)
- program_id (FK to programs)
- status
- progress
- created_at
- updated_at

### 7. **contacts** (Optional)
- id (UUID)
- name
- email
- phone
- subject
- message
- status
- created_at

---

## 🔐 RLS Policies

### user_profiles
- Users can read all profiles
- Users can create/update own profile
- Admins can manage all profiles

### blog_posts
- Anyone can view published posts
- Authenticated users can view all posts
- Admins can insert/update/delete posts

### images
- Anyone can view images
- Admins can insert/delete images

### programs
- Anyone can view programs
- Admins can manage programs

### enrollments
- Users can view own enrollments
- Admins can manage all enrollments

---

## 💾 Storage Buckets

### blog-images (Public)
- Path: `images/`
- Files: Blog post images, program images, user avatars
- Access: Public read, authenticated write

---

## 🔄 Frontend Pages Using Supabase

### Authentication Pages
- ✅ `/signin` - Sign up with Supabase Auth
- ✅ `/login` - Login with Supabase Auth
- ✅ `/forgot-password` - Password reset
- ✅ `/change-password` - Password update

### Admin Pages
- ✅ `/admin/blogs` - Blog management (Supabase)
- ✅ `/admin/images` - Image management (Supabase Storage)
- ✅ `/admin/users` - User management (Supabase)
- ✅ `/admin/programs` - Program management (Supabase)
- ✅ `/admin/enrollments` - Enrollment tracking (Supabase)
- ✅ `/admin/contacts` - Contact management (Supabase)

### User Pages
- ✅ `/user-dashboard` - User dashboard (Supabase)
- ✅ `/user-profile` - User profile (Supabase)
- ✅ `/user-settings` - User settings (Supabase)

---

## 🧪 Test Supabase Connection

### Check Frontend Supabase
```bash
# In browser console
import { supabase } from '@/lib/supabase';
console.log(supabase);
```

### Test Authentication
```bash
# Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'test@example.com',
  password: 'Test123!'
});

# Login
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'test@example.com',
  password: 'Test123!'
});
```

### Test Database Query
```bash
# Fetch blogs
const { data, error } = await supabase
  .from('blog_posts')
  .select('*');
console.log(data);
```

---

## 📈 Supabase Dashboard

**URL**: https://app.supabase.com

### Access
1. Go to Supabase Dashboard
2. Select your project
3. View:
   - Database tables
   - Authentication users
   - Storage buckets
   - RLS policies
   - Logs and analytics

### Useful Links
- **SQL Editor**: Run custom SQL queries
- **Table Editor**: View/edit table data
- **Auth**: Manage users and settings
- **Storage**: Manage files and buckets
- **Logs**: View database logs

---

## 🔐 Security Features

### Authentication
- ✅ Email/password auth
- ✅ JWT tokens
- ✅ Session management
- ✅ Password hashing
- ✅ Email confirmation (optional)

### Database
- ✅ RLS policies
- ✅ Parameterized queries
- ✅ Encrypted passwords
- ✅ Secure token storage

### Storage
- ✅ Public/private buckets
- ✅ File size limits
- ✅ MIME type validation
- ✅ Access control

---

## 📊 Summary

✅ Supabase is the primary database
✅ Supabase handles authentication
✅ Supabase stores all user data
✅ Supabase manages blog posts
✅ Supabase stores images
✅ Supabase provides RLS security
✅ Frontend directly queries Supabase
✅ Backend can also query Supabase (optional)

---

**Status**: ✅ ACTIVE AND OPERATIONAL
**Last Updated**: April 8, 2026
**Version**: 1.0.0

