-- ============================================================================
-- COMMUNITY SYSTEM SETUP - RUN IN SUPABASE SQL EDITOR
-- ============================================================================
-- This script sets up the complete community system for Anandbodh

-- Step 1: Run the main community schema
-- Copy and paste the entire COMMUNITY_DATABASE_SCHEMA.sql file here
-- OR run it separately in the SQL editor

-- Step 2: Verify tables were created
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN (
  'community_groups',
  'group_memberships', 
  'forum_categories',
  'forum_posts',
  'forum_replies',
  'post_likes',
  'user_activity'
);

-- Step 3: Check if seed data was inserted
SELECT 'Categories' as type, count(*) as count FROM forum_categories
UNION ALL
SELECT 'Groups' as type, count(*) as count FROM community_groups;

-- Step 4: Create a test admin user (replace with your actual user ID)
-- First, get your user ID from auth.users or user_profiles
SELECT id, email FROM auth.users LIMIT 5;

-- Then update your role to admin (replace 'your-user-id-here' with actual ID)
-- UPDATE user_profiles SET role = 'admin' WHERE id = 'your-user-id-here';

-- Step 5: Test the views
SELECT * FROM forum_posts_with_details LIMIT 3;
SELECT * FROM active_community_groups LIMIT 5;

-- Step 6: Verify RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('forum_posts', 'forum_replies', 'community_groups')
ORDER BY tablename, policyname;

-- ============================================================================
-- SAMPLE DATA FOR TESTING (OPTIONAL)
-- ============================================================================

-- Create a sample forum post (replace user_id with actual user ID)
/*
INSERT INTO forum_posts (title, content, author_id, category_id, status) VALUES
(
  'Welcome to the Anandbodh Community!',
  'This is our first community post. Feel free to introduce yourself and share your wellness journey with us. We''re excited to have you here!',
  'your-user-id-here',  -- Replace with actual user ID
  (SELECT id FROM forum_categories WHERE slug = 'wellness' LIMIT 1),
  'published'
);
*/

-- Create a sample reply (replace user_id and post_id)
/*
INSERT INTO forum_replies (content, author_id, post_id, status) VALUES
(
  'Thank you for creating this welcoming space! I''m excited to be part of this community and learn from everyone.',
  'your-user-id-here',  -- Replace with actual user ID
  (SELECT id FROM forum_posts WHERE title LIKE 'Welcome%' LIMIT 1),
  'published'
);
*/

-- ============================================================================
-- VERIFICATION QUERIES
-- ============================================================================

-- Check community stats
SELECT 
  (SELECT COUNT(*) FROM user_profiles WHERE status = 'active') as total_members,
  (SELECT COUNT(*) FROM community_groups WHERE is_active = true) as total_groups,
  (SELECT COUNT(*) FROM forum_posts WHERE status = 'published') as total_posts,
  (SELECT COUNT(*) FROM forum_posts WHERE status = 'published' AND last_activity_at > NOW() - INTERVAL '7 days') as active_discussions;

-- Check recent forum activity
SELECT 
  fp.title,
  up.first_name || ' ' || COALESCE(up.last_name, '') as author,
  fc.name as category,
  fp.reply_count,
  fp.like_count,
  fp.created_at
FROM forum_posts fp
LEFT JOIN user_profiles up ON fp.author_id = up.id
LEFT JOIN forum_categories fc ON fp.category_id = fc.id
WHERE fp.status = 'published'
ORDER BY fp.created_at DESC
LIMIT 10;

-- ============================================================================
-- SUCCESS MESSAGE
-- ============================================================================

SELECT 'Community system setup complete! 🎉' as message,
       'Visit /forums to see the community in action' as next_step,
       'Access /admin/community for management tools' as admin_access;