-- ============================================================================
-- COMMUNITY & FORUMS DATABASE SCHEMA
-- ============================================================================
-- This schema adds community features including forums, discussions, groups, and user interactions

-- Community Groups Table
CREATE TABLE IF NOT EXISTS community_groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  icon VARCHAR(10), -- emoji or icon identifier
  background_color VARCHAR(20) DEFAULT '#EBF2E3',
  category VARCHAR(100), -- wellness, ayurveda, mental-health, etc
  is_active BOOLEAN DEFAULT true,
  member_count INTEGER DEFAULT 0,
  created_by UUID REFERENCES user_profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Group Memberships Table
CREATE TABLE IF NOT EXISTS group_memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  group_id UUID NOT NULL REFERENCES community_groups(id) ON DELETE CASCADE,
  role VARCHAR(50) DEFAULT 'member', -- member, moderator, admin
  joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, group_id)
);

-- Forum Categories Table
CREATE TABLE IF NOT EXISTS forum_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  icon VARCHAR(10), -- emoji or icon identifier
  color VARCHAR(20) DEFAULT '#EBF2E3',
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Forum Posts Table
CREATE TABLE IF NOT EXISTS forum_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  category_id UUID REFERENCES forum_categories(id) ON DELETE SET NULL,
  group_id UUID REFERENCES community_groups(id) ON DELETE SET NULL,
  status VARCHAR(50) DEFAULT 'published', -- draft, published, archived, deleted
  is_pinned BOOLEAN DEFAULT false,
  is_locked BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  reply_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  last_activity_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Forum Replies Table
CREATE TABLE IF NOT EXISTS forum_replies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  post_id UUID NOT NULL REFERENCES forum_posts(id) ON DELETE CASCADE,
  parent_reply_id UUID REFERENCES forum_replies(id) ON DELETE CASCADE, -- for nested replies
  status VARCHAR(50) DEFAULT 'published', -- published, deleted, moderated
  like_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Post Likes Table
CREATE TABLE IF NOT EXISTS post_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  post_id UUID REFERENCES forum_posts(id) ON DELETE CASCADE,
  reply_id UUID REFERENCES forum_replies(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT check_like_target CHECK (
    (post_id IS NOT NULL AND reply_id IS NULL) OR 
    (post_id IS NULL AND reply_id IS NOT NULL)
  ),
  UNIQUE(user_id, post_id),
  UNIQUE(user_id, reply_id)
);

-- User Activity Tracking
CREATE TABLE IF NOT EXISTS user_activity (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  activity_type VARCHAR(100) NOT NULL, -- post_created, reply_created, like_given, group_joined, etc
  target_type VARCHAR(50), -- post, reply, group, user
  target_id UUID,
  metadata JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Indexes for Performance
CREATE INDEX IF NOT EXISTS idx_community_groups_slug ON community_groups(slug);
CREATE INDEX IF NOT EXISTS idx_community_groups_active ON community_groups(is_active);
CREATE INDEX IF NOT EXISTS idx_group_memberships_user_id ON group_memberships(user_id);
CREATE INDEX IF NOT EXISTS idx_group_memberships_group_id ON group_memberships(group_id);
CREATE INDEX IF NOT EXISTS idx_forum_categories_slug ON forum_categories(slug);
CREATE INDEX IF NOT EXISTS idx_forum_categories_active ON forum_categories(is_active);
CREATE INDEX IF NOT EXISTS idx_forum_posts_author_id ON forum_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_forum_posts_category_id ON forum_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_forum_posts_group_id ON forum_posts(group_id);
CREATE INDEX IF NOT EXISTS idx_forum_posts_status ON forum_posts(status);
CREATE INDEX IF NOT EXISTS idx_forum_posts_last_activity ON forum_posts(last_activity_at DESC);
CREATE INDEX IF NOT EXISTS idx_forum_replies_post_id ON forum_replies(post_id);
CREATE INDEX IF NOT EXISTS idx_forum_replies_author_id ON forum_replies(author_id);
CREATE INDEX IF NOT EXISTS idx_post_likes_user_id ON post_likes(user_id);
CREATE INDEX IF NOT EXISTS idx_post_likes_post_id ON post_likes(post_id);
CREATE INDEX IF NOT EXISTS idx_post_likes_reply_id ON post_likes(reply_id);
CREATE INDEX IF NOT EXISTS idx_user_activity_user_id ON user_activity(user_id);
CREATE INDEX IF NOT EXISTS idx_user_activity_type ON user_activity(activity_type);
CREATE INDEX IF NOT EXISTS idx_user_activity_created_at ON user_activity(created_at DESC);

-- Enable Row Level Security
ALTER TABLE community_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE group_memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_replies ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_activity ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================================================

-- Community Groups Policies
CREATE POLICY "Anyone can view active groups" ON community_groups
  FOR SELECT USING (is_active = true);

CREATE POLICY "Authenticated users can create groups" ON community_groups
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Group creators and admins can update groups" ON community_groups
  FOR UPDATE USING (
    created_by = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM user_profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Group Memberships Policies
CREATE POLICY "Users can view group memberships" ON group_memberships
  FOR SELECT USING (true);

CREATE POLICY "Users can join groups" ON group_memberships
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can leave groups" ON group_memberships
  FOR DELETE USING (auth.uid() = user_id);

-- Forum Categories Policies
CREATE POLICY "Anyone can view active categories" ON forum_categories
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage categories" ON forum_categories
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM user_profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Forum Posts Policies
CREATE POLICY "Anyone can view published posts" ON forum_posts
  FOR SELECT USING (status = 'published');

CREATE POLICY "Authenticated users can create posts" ON forum_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update their own posts" ON forum_posts
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Authors and admins can delete posts" ON forum_posts
  FOR DELETE USING (
    auth.uid() = author_id OR 
    EXISTS (
      SELECT 1 FROM user_profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Forum Replies Policies
CREATE POLICY "Anyone can view published replies" ON forum_replies
  FOR SELECT USING (status = 'published');

CREATE POLICY "Authenticated users can create replies" ON forum_replies
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update their own replies" ON forum_replies
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Authors and admins can delete replies" ON forum_replies
  FOR DELETE USING (
    auth.uid() = author_id OR 
    EXISTS (
      SELECT 1 FROM user_profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Post Likes Policies
CREATE POLICY "Users can view all likes" ON post_likes
  FOR SELECT USING (true);

CREATE POLICY "Users can like posts/replies" ON post_likes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unlike their own likes" ON post_likes
  FOR DELETE USING (auth.uid() = user_id);

-- User Activity Policies
CREATE POLICY "Users can view their own activity" ON user_activity
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "System can create activity records" ON user_activity
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all activity" ON user_activity
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM user_profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ============================================================================
-- FUNCTIONS AND TRIGGERS
-- ============================================================================

-- Function to update group member count
CREATE OR REPLACE FUNCTION update_group_member_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE community_groups 
    SET member_count = member_count + 1 
    WHERE id = NEW.group_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE community_groups 
    SET member_count = member_count - 1 
    WHERE id = OLD.group_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger for group member count
CREATE TRIGGER trigger_update_group_member_count
  AFTER INSERT OR DELETE ON group_memberships
  FOR EACH ROW EXECUTE FUNCTION update_group_member_count();

-- Function to update post reply count
CREATE OR REPLACE FUNCTION update_post_reply_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE forum_posts 
    SET reply_count = reply_count + 1,
        last_activity_at = CURRENT_TIMESTAMP
    WHERE id = NEW.post_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE forum_posts 
    SET reply_count = reply_count - 1 
    WHERE id = OLD.post_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger for post reply count
CREATE TRIGGER trigger_update_post_reply_count
  AFTER INSERT OR DELETE ON forum_replies
  FOR EACH ROW EXECUTE FUNCTION update_post_reply_count();

-- Function to update like counts
CREATE OR REPLACE FUNCTION update_like_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW.post_id IS NOT NULL THEN
      UPDATE forum_posts SET like_count = like_count + 1 WHERE id = NEW.post_id;
    ELSIF NEW.reply_id IS NOT NULL THEN
      UPDATE forum_replies SET like_count = like_count + 1 WHERE id = NEW.reply_id;
    END IF;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    IF OLD.post_id IS NOT NULL THEN
      UPDATE forum_posts SET like_count = like_count - 1 WHERE id = OLD.post_id;
    ELSIF OLD.reply_id IS NOT NULL THEN
      UPDATE forum_replies SET like_count = like_count - 1 WHERE id = OLD.reply_id;
    END IF;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger for like counts
CREATE TRIGGER trigger_update_like_count
  AFTER INSERT OR DELETE ON post_likes
  FOR EACH ROW EXECUTE FUNCTION update_like_count();

-- ============================================================================
-- SEED DATA
-- ============================================================================

-- Insert default forum categories
INSERT INTO forum_categories (name, slug, description, icon, color, sort_order) VALUES
('Wellness', 'wellness', 'General wellness discussions and tips', '💪', '#EBF2E3', 1),
('Ayurveda', 'ayurveda', 'Traditional Ayurvedic wisdom and practices', '🌿', '#FDF0EB', 2),
('Mental Health', 'mental-health', 'Mental wellness, meditation, and mindfulness', '🧠', '#F0EEF9', 3),
('Success Stories', 'success-stories', 'Share your transformation journey', '🎉', '#D5F5E3', 4),
('Nutrition', 'nutrition', 'Healthy eating and dietary guidance', '🥗', '#FFF8E1', 5),
('Exercise & Movement', 'exercise-movement', 'Physical activity and movement practices', '🏃', '#E3F2FD', 6)
ON CONFLICT (slug) DO NOTHING;

-- Insert default community groups
INSERT INTO community_groups (name, slug, description, icon, background_color, category, created_by) VALUES
('जागृति – Wake Up Life', 'jagriti-wake-up-life', 'General wellness & awareness community', '🌅', '#EBF2E3', 'wellness', NULL),
('उत्कर्ष – Thrive@Work', 'utkarsh-thrive-work', 'Professional wellbeing community', '💼', '#F0EEF9', 'wellness', NULL),
('आयुर्वेद – Āyurveda Longevity Knowledge', 'ayurveda-longevity', 'Traditional wisdom & longevity practices', '🌿', '#FBF4E6', 'ayurveda', NULL),
('ध्यानम् – Dhyan Meditation', 'dhyan-meditation', 'Mental peace & mindfulness practices', '🧘', '#EBF2E3', 'mental-health', NULL),
('कायाकल्पम् – Lifestyle Disorders Reversal', 'kayakalpam-reversal', 'Metabolic health focus community', '🔄', '#FDF0EB', 'wellness', NULL)
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- VIEWS FOR EASY DATA ACCESS
-- ============================================================================

-- View for forum posts with author and category info
CREATE OR REPLACE VIEW forum_posts_with_details AS
SELECT 
  fp.*,
  up.first_name || ' ' || COALESCE(up.last_name, '') as author_name,
  up.first_name as author_first_name,
  fc.name as category_name,
  fc.icon as category_icon,
  fc.color as category_color,
  cg.name as group_name
FROM forum_posts fp
LEFT JOIN user_profiles up ON fp.author_id = up.id
LEFT JOIN forum_categories fc ON fp.category_id = fc.id
LEFT JOIN community_groups cg ON fp.group_id = cg.id
WHERE fp.status = 'published'
ORDER BY fp.last_activity_at DESC;

-- View for active community groups with member counts
CREATE OR REPLACE VIEW active_community_groups AS
SELECT 
  cg.*,
  COALESCE(cg.member_count, 0) as current_member_count
FROM community_groups cg
WHERE cg.is_active = true
ORDER BY cg.member_count DESC, cg.name;