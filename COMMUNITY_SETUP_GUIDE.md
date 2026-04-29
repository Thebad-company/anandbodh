# Community Setup Guide

## Issue: "Discussions Not Found"

When you click on forum discussions, you see "discussions not found" because:

1. **Database tables don't exist** - Community schema not applied
2. **No real forum posts** - Only static demo data exists
3. **Supabase connection issues** - Invalid anon key

## Solution: 3-Step Setup

### Step 1: Fix Supabase Connection (5 minutes)

1. **Get correct anon key from Supabase Dashboard**:
   - Go to: https://app.supabase.com
   - Select your project: `qasiwqxwklsclfhpsouo`
   - Go to **Settings** → **API**
   - Copy the **anon/public** key

2. **Update `.env.local`**:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://qasiwqxwklsclfhpsouo.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_correct_anon_key_here
   ```

### Step 2: Create Community Database (10 minutes)

1. **Go to Supabase SQL Editor**:
   - https://app.supabase.com → Your Project → SQL Editor

2. **Run the community schema**:
   - Copy content from `COMMUNITY_DATABASE_SCHEMA.sql`
   - Paste in SQL Editor
   - Click **Run**

3. **Verify tables created**:
   ```sql
   SELECT table_name FROM information_schema.tables 
   WHERE table_schema = 'public' 
   AND table_name LIKE '%forum%';
   ```

### Step 3: Add Sample Data (5 minutes)

Run this SQL to create sample forum posts:

```sql
-- Insert sample forum posts
INSERT INTO forum_posts (title, content, author_id, category_id, status) VALUES
(
  'What is your opinion on ayurveda?',
  'I''ve been exploring Ayurvedic practices and would love to hear your experiences. What has worked for you?',
  (SELECT id FROM user_profiles LIMIT 1),
  (SELECT id FROM forum_categories WHERE slug = 'ayurveda'),
  'published'
),
(
  'How to start Soleus Activation as a beginner?',
  'I''m new to Soleus Activation and looking for beginner-friendly tips. Any advice?',
  (SELECT id FROM user_profiles LIMIT 1),
  (SELECT id FROM forum_categories WHERE slug = 'wellness'),
  'published'
),
(
  'Meditation techniques for anxiety relief',
  'Sharing some meditation techniques that have helped me with anxiety. What works for you?',
  (SELECT id FROM user_profiles LIMIT 1),
  (SELECT id FROM forum_categories WHERE slug = 'mental-health'),
  'published'
),
(
  'Success story: Reversed my pre-diabetes!',
  'After 6 months of following the program, my HbA1c went from 6.2 to 5.4! Here''s what I did...',
  (SELECT id FROM user_profiles LIMIT 1),
  (SELECT id FROM forum_categories WHERE slug = 'success-stories'),
  'published'
);
```

## How Community Discussions Work

### 1. **Forum Categories**
- **Wellness** 💪 - General wellness discussions
- **Ayurveda** 🌿 - Traditional practices
- **Mental Health** 🧠 - Meditation, mindfulness
- **Success Stories** 🎉 - Transformation journeys
- **Nutrition** 🥗 - Diet and nutrition
- **Exercise & Movement** 🏃 - Physical activity

### 2. **User Journey**
1. **Browse Forums** (`/forums`) - See all discussions
2. **Filter by Category** - Click category buttons
3. **Read Discussion** (`/forums/{id}`) - Full post + replies
4. **Join Discussion** - Add replies, likes
5. **Create New** - Start new discussions

### 3. **Features**
- ✅ **Categories & Filtering**
- ✅ **Create Discussions**
- ✅ **Reply to Posts**
- ✅ **Like System**
- ✅ **User Profiles**
- ✅ **Activity Tracking**
- ✅ **Moderation (Admin)**

### 4. **Database Structure**
```
forum_categories
├── id, name, slug, icon, color
├── wellness, ayurveda, mental-health, etc.

forum_posts
├── id, title, content, author_id
├── category_id, status, reply_count, like_count
├── created_at, last_activity_at

forum_replies
├── id, content, author_id, post_id
├── status, like_count, created_at

post_likes
├── user_id, post_id OR reply_id
├── created_at

user_activity
├── user_id, activity_type, target_type
├── target_id, metadata, created_at
```

## Testing the Setup

### 1. **Test Database Connection**
```bash
cd frontend
node -e "
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
supabase.from('forum_categories').select('*').then(console.log);
"
```

### 2. **Test Forums Page**
- Go to: `http://localhost:3000/forums`
- Should see categories and sample posts
- Click on a post → should open individual discussion

### 3. **Test Creating Discussion**
- Click "+ New Discussion"
- Fill form and submit
- Should appear in forums list

### 4. **Test Replies**
- Open a discussion
- Add a reply (need to be signed in)
- Should appear in replies section

## Troubleshooting

### "Invalid API Key"
- Get correct anon key from Supabase Dashboard
- Update `.env.local` and restart dev server

### "Table doesn't exist"
- Run community schema in Supabase SQL Editor
- Check tables created in Database → Tables

### "No discussions found"
- Add sample data using SQL above
- Or create discussions via the UI

### "User not authenticated"
- Sign up/sign in at `/signup` or `/signin`
- Check user created in `auth.users` table

## Next Steps

1. **Apply the setup** (20 minutes total)
2. **Test all features** work correctly
3. **Create real content** or import existing discussions
4. **Set up moderation** for admin users
5. **Customize styling** to match your brand

---

**Status**: ⚠️ Setup Required
**Time**: 20 minutes
**Difficulty**: Easy (copy-paste SQL)
**Result**: Fully functional community forums