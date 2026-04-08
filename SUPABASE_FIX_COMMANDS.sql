-- ============================================================================
-- ANANDBODH - SUPABASE RLS POLICY FIX
-- ============================================================================
-- 
-- This file contains the exact SQL commands to fix the blog management error.
-- 
-- ERROR: "Failed to fetch blogs: Infinite recursion detected in policy for 
--         relation 'user_profiles'"
--
-- CAUSE: RLS policies using FOR ALL causing circular reference
--
-- SOLUTION: Split FOR ALL into separate INSERT, UPDATE, DELETE policies
--
-- ============================================================================

-- STEP 1: DROP OLD BROKEN POLICIES
-- ============================================================================

DROP POLICY IF EXISTS "Anyone can view published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Admins can manage all blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Anyone can view images" ON images;
DROP POLICY IF EXISTS "Admins can manage images" ON images;

-- ============================================================================
-- STEP 2: CREATE NEW FIXED POLICIES FOR BLOG_POSTS
-- ============================================================================

-- Allow anyone to view published blog posts (or authenticated users to view all)
CREATE POLICY "Anyone can view published blog posts" ON blog_posts
  FOR SELECT USING (status = 'published' OR auth.uid() IS NOT NULL);

-- Allow admins to insert blog posts
CREATE POLICY "Admins can insert blog posts" ON blog_posts
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Allow admins to update blog posts
CREATE POLICY "Admins can update blog posts" ON blog_posts
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Allow admins to delete blog posts
CREATE POLICY "Admins can delete blog posts" ON blog_posts
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- STEP 3: CREATE NEW FIXED POLICIES FOR IMAGES
-- ============================================================================

-- Allow anyone to view images
CREATE POLICY "Anyone can view images" ON images
  FOR SELECT USING (true);

-- Allow admins to insert images
CREATE POLICY "Admins can insert images" ON images
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Allow admins to delete images
CREATE POLICY "Admins can delete images" ON images
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- STEP 4: VERIFY POLICIES WERE CREATED
-- ============================================================================

-- Run this to verify all policies are correct:
-- SELECT policyname, permissive, roles, qual, with_check 
-- FROM pg_policies 
-- WHERE tablename IN ('blog_posts', 'images')
-- ORDER BY tablename, policyname;

-- ============================================================================
-- STEP 5: MAKE SURE YOUR USER IS ADMIN
-- ============================================================================

-- Replace 'your-email@example.com' with your actual email
UPDATE user_profiles 
SET role = 'admin' 
WHERE email = 'your-email@example.com';

-- Verify:
-- SELECT email, role FROM user_profiles WHERE email = 'your-email@example.com';

-- ============================================================================
-- DONE!
-- ============================================================================
--
-- Now:
-- 1. Refresh http://localhost:3000/admin/blogs
-- 2. Click "+ New Blog Post"
-- 3. Create a blog post
-- 4. Verify it appears in the list
--
-- If you see any errors, check:
-- - Your user role is 'admin'
-- - All policies were created successfully
-- - RLS is enabled on blog_posts and images tables
--
-- ============================================================================

