// Community API functions for Supabase integration
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ============================================================================
// COMMUNITY GROUPS
// ============================================================================

export async function getCommunityGroups() {
  try {
    const { data, error } = await supabase
      .from('active_community_groups')
      .select('*')
      .order('current_member_count', { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching community groups:', error);
    return { data: null, error: error.message };
  }
}

export async function joinCommunityGroup(groupId, userId) {
  try {
    const { data, error } = await supabase
      .from('group_memberships')
      .insert([
        {
          user_id: userId,
          group_id: groupId,
          role: 'member'
        }
      ]);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error joining community group:', error);
    return { data: null, error: error.message };
  }
}

export async function leaveCommunityGroup(groupId, userId) {
  try {
    const { data, error } = await supabase
      .from('group_memberships')
      .delete()
      .eq('user_id', userId)
      .eq('group_id', groupId);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error leaving community group:', error);
    return { data: null, error: error.message };
  }
}

export async function getUserGroupMemberships(userId) {
  try {
    const { data, error } = await supabase
      .from('group_memberships')
      .select(`
        *,
        community_groups (
          id,
          name,
          slug,
          description,
          icon,
          background_color
        )
      `)
      .eq('user_id', userId);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching user group memberships:', error);
    return { data: null, error: error.message };
  }
}

// ============================================================================
// FORUM CATEGORIES
// ============================================================================

export async function getForumCategories() {
  try {
    const { data, error } = await supabase
      .from('forum_categories')
      .select('*')
      .eq('is_active', true)
      .order('sort_order');

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching forum categories:', error);
    return { data: null, error: error.message };
  }
}

// ============================================================================
// FORUM POSTS
// ============================================================================

export async function getForumPosts(limit = 10, offset = 0, categoryId = null, groupId = null) {
  try {
    // First try the view, if it fails, fall back to base tables
    let query = supabase
      .from('forum_posts_with_details')
      .select('*');

    if (categoryId) {
      query = query.eq('category_id', categoryId);
    }

    if (groupId) {
      query = query.eq('group_id', groupId);
    }

    const { data, error } = await query
      .range(offset, offset + limit - 1)
      .order('last_activity_at', { ascending: false });

    if (error) {
      // If view doesn't exist, try base tables
      console.log('View not found, trying base tables');
      
      try {
        let fallbackQuery = supabase
          .from('forum_posts')
          .select('*')
          .eq('status', 'published');

        if (categoryId) {
          fallbackQuery = fallbackQuery.eq('category_id', categoryId);
        }

        if (groupId) {
          fallbackQuery = fallbackQuery.eq('group_id', groupId);
        }

        const { data: fallbackData, error: fallbackError } = await fallbackQuery
          .range(offset, offset + limit - 1)
          .order('last_activity_at', { ascending: false });

        if (fallbackError) {
          // If even base tables don't exist, return empty array
          console.log('Base tables not found, returning empty array');
          return { data: [], error: null };
        }

        // Transform the data to match the expected format with minimal data
        const transformedData = fallbackData?.map(post => ({
          ...post,
          author_name: 'Anonymous',
          author_first_name: 'A',
          category_name: 'General',
          category_icon: '💬',
          category_color: '#EBF2E3',
          group_name: null
        })) || [];

        return { data: transformedData, error: null };
      } catch (fallbackError) {
        console.log('Fallback failed, returning empty array');
        return { data: [], error: null };
      }
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error fetching forum posts:', error);
    return { data: [], error: null }; // Return empty array instead of null
  }
}

export async function getForumPost(postId) {
  try {
    // First try the view, if it fails, fall back to base tables
    const { data, error } = await supabase
      .from('forum_posts_with_details')
      .select('*')
      .eq('id', postId)
      .single();

    if (error) {
      // If view doesn't exist, try base tables
      console.log('View not found, trying base tables');
      
      try {
        const { data: fallbackData, error: fallbackError } = await supabase
          .from('forum_posts')
          .select('*')
          .eq('id', postId)
          .eq('status', 'published')
          .single();

        if (fallbackError) {
          return { data: null, error: fallbackError.message };
        }

        // Transform the data to match the expected format with minimal data
        const transformedData = {
          ...fallbackData,
          author_name: 'Anonymous',
          author_first_name: 'A',
          category_name: 'General',
          category_icon: '💬',
          category_color: '#EBF2E3',
          group_name: null
        };

        return { data: transformedData, error: null };
      } catch (fallbackError) {
        return { data: null, error: fallbackError.message };
      }
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error fetching forum post:', error);
    return { data: null, error: error.message };
  }
}

export async function createForumPost(postData) {
  try {
    const { data, error } = await supabase
      .from('forum_posts')
      .insert([postData])
      .select()
      .single();

    if (error) throw error;

    // Log user activity
    await logUserActivity(postData.author_id, 'post_created', 'post', data.id);

    return { data, error: null };
  } catch (error) {
    console.error('Error creating forum post:', error);
    return { data: null, error: error.message };
  }
}

export async function updateForumPost(postId, updates) {
  try {
    const { data, error } = await supabase
      .from('forum_posts')
      .update(updates)
      .eq('id', postId)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error updating forum post:', error);
    return { data: null, error: error.message };
  }
}

export async function deleteForumPost(postId) {
  try {
    const { data, error } = await supabase
      .from('forum_posts')
      .delete()
      .eq('id', postId);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error deleting forum post:', error);
    return { data: null, error: error.message };
  }
}

// ============================================================================
// FORUM REPLIES
// ============================================================================

export async function getForumReplies(postId) {
  try {
    const { data, error } = await supabase
      .from('forum_replies')
      .select(`
        *,
        user_profiles (
          id,
          first_name,
          last_name
        )
      `)
      .eq('post_id', postId)
      .eq('status', 'published')
      .order('created_at', { ascending: true });

    if (error) {
      console.log('Forum replies table not found or accessible, returning empty array');
      return { data: [], error: null };
    }
    
    return { data: data || [], error: null };
  } catch (error) {
    console.error('Error fetching forum replies:', error);
    return { data: [], error: null }; // Return empty array instead of null
  }
}

export async function createForumReply(replyData) {
  try {
    const { data, error } = await supabase
      .from('forum_replies')
      .insert([replyData])
      .select()
      .single();

    if (error) throw error;

    // Log user activity
    await logUserActivity(replyData.author_id, 'reply_created', 'reply', data.id);

    return { data, error: null };
  } catch (error) {
    console.error('Error creating forum reply:', error);
    return { data: null, error: error.message };
  }
}

export async function updateForumReply(replyId, updates) {
  try {
    const { data, error } = await supabase
      .from('forum_replies')
      .update(updates)
      .eq('id', replyId)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error updating forum reply:', error);
    return { data: null, error: error.message };
  }
}

export async function deleteForumReply(replyId) {
  try {
    const { data, error } = await supabase
      .from('forum_replies')
      .delete()
      .eq('id', replyId);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error deleting forum reply:', error);
    return { data: null, error: error.message };
  }
}

// ============================================================================
// LIKES SYSTEM
// ============================================================================

export async function likePost(userId, postId) {
  try {
    const { data, error } = await supabase
      .from('post_likes')
      .insert([
        {
          user_id: userId,
          post_id: postId
        }
      ]);

    if (error) throw error;

    // Log user activity
    await logUserActivity(userId, 'like_given', 'post', postId);

    return { data, error: null };
  } catch (error) {
    console.error('Error liking post:', error);
    return { data: null, error: error.message };
  }
}

export async function unlikePost(userId, postId) {
  try {
    const { data, error } = await supabase
      .from('post_likes')
      .delete()
      .eq('user_id', userId)
      .eq('post_id', postId);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error unliking post:', error);
    return { data: null, error: error.message };
  }
}

export async function likeReply(userId, replyId) {
  try {
    const { data, error } = await supabase
      .from('post_likes')
      .insert([
        {
          user_id: userId,
          reply_id: replyId
        }
      ]);

    if (error) throw error;

    // Log user activity
    await logUserActivity(userId, 'like_given', 'reply', replyId);

    return { data, error: null };
  } catch (error) {
    console.error('Error liking reply:', error);
    return { data: null, error: error.message };
  }
}

export async function unlikeReply(userId, replyId) {
  try {
    const { data, error } = await supabase
      .from('post_likes')
      .delete()
      .eq('user_id', userId)
      .eq('reply_id', replyId);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error unliking reply:', error);
    return { data: null, error: error.message };
  }
}

export async function getUserLikes(userId, postIds = [], replyIds = []) {
  try {
    let query = supabase
      .from('post_likes')
      .select('post_id, reply_id')
      .eq('user_id', userId);

    if (postIds.length > 0) {
      query = query.in('post_id', postIds);
    }

    if (replyIds.length > 0) {
      query = query.in('reply_id', replyIds);
    }

    const { data, error } = await query;

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching user likes:', error);
    return { data: null, error: error.message };
  }
}

// ============================================================================
// USER ACTIVITY
// ============================================================================

export async function logUserActivity(userId, activityType, targetType, targetId, metadata = {}) {
  try {
    const { data, error } = await supabase
      .from('user_activity')
      .insert([
        {
          user_id: userId,
          activity_type: activityType,
          target_type: targetType,
          target_id: targetId,
          metadata: metadata
        }
      ]);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error logging user activity:', error);
    return { data: null, error: error.message };
  }
}

export async function getUserActivity(userId, limit = 20) {
  try {
    const { data, error } = await supabase
      .from('user_activity')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Error fetching user activity:', error);
    return { data: null, error: error.message };
  }
}

// ============================================================================
// STATISTICS
// ============================================================================

export async function getCommunityStats() {
  try {
    // Get total members (users with profiles)
    const { count: totalMembers } = await supabase
      .from('user_profiles')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active');

    // Get total groups
    const { count: totalGroups } = await supabase
      .from('community_groups')
      .select('*', { count: 'exact', head: true })
      .eq('is_active', true);

    // Get total posts
    const { count: totalPosts } = await supabase
      .from('forum_posts')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'published');

    // Get active discussions (posts with recent activity)
    const { count: activeDiscussions } = await supabase
      .from('forum_posts')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'published')
      .gte('last_activity_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

    return {
      data: {
        totalMembers: totalMembers || 0,
        totalGroups: totalGroups || 0,
        totalPosts: totalPosts || 0,
        activeDiscussions: activeDiscussions || 0
      },
      error: null
    };
  } catch (error) {
    console.error('Error fetching community stats:', error);
    return { data: null, error: error.message };
  }
}

// ============================================================================
// SEARCH
// ============================================================================

export async function searchForumPosts(query, limit = 10) {
  try {
    // First try the view, if it fails, fall back to base tables
    const { data, error } = await supabase
      .from('forum_posts_with_details')
      .select('*')
      .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
      .limit(limit);

    if (error) {
      // If view doesn't exist, try base tables
      console.log('View not found, trying base tables');
      
      try {
        const { data: fallbackData, error: fallbackError } = await supabase
          .from('forum_posts')
          .select('*')
          .eq('status', 'published')
          .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
          .limit(limit);

        if (fallbackError) {
          return { data: [], error: null };
        }

        // Transform the data to match the expected format with minimal data
        const transformedData = fallbackData?.map(post => ({
          ...post,
          author_name: 'Anonymous',
          author_first_name: 'A',
          category_name: 'General',
          category_icon: '💬',
          category_color: '#EBF2E3',
          group_name: null
        })) || [];

        return { data: transformedData, error: null };
      } catch (fallbackError) {
        return { data: [], error: null };
      }
    }

    return { data, error: null };
  } catch (error) {
    console.error('Error searching forum posts:', error);
    return { data: [], error: null };
  }
}