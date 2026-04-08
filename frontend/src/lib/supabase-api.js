import { supabase } from './supabase';

// User Profiles
export const userProfilesApi = {
  getProfile: async (userId) => {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) throw error;
    return data;
  },

  updateProfile: async (userId, updates) => {
    const { data, error } = await supabase
      .from('user_profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

// Programs
export const programsApi = {
  getAll: async () => {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('status', 'active');
    if (error) throw error;
    return data;
  },

  getById: async (id) => {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('id', id)
      .single();
    if (error) throw error;
    return data;
  },

  getBySlug: async (slug) => {
    const { data, error } = await supabase
      .from('programs')
      .select('*')
      .eq('slug', slug)
      .single();
    if (error) throw error;
    return data;
  },
};

// Enrollments
export const enrollmentsApi = {
  create: async (userId, programId) => {
    const { data, error } = await supabase
      .from('enrollments')
      .insert([
        {
          user_id: userId,
          program_id: programId,
          status: 'active',
        },
      ])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  getUserEnrollments: async (userId) => {
    const { data, error } = await supabase
      .from('enrollments')
      .select('*, programs(*)')
      .eq('user_id', userId);
    if (error) throw error;
    return data;
  },

  updateProgress: async (enrollmentId, progress) => {
    const { data, error } = await supabase
      .from('enrollments')
      .update({ progress_percentage: progress })
      .eq('id', enrollmentId)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  cancel: async (enrollmentId) => {
    const { data, error } = await supabase
      .from('enrollments')
      .update({ status: 'cancelled' })
      .eq('id', enrollmentId)
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

// Contacts
export const contactsApi = {
  create: async (contactData) => {
    const { data, error } = await supabase
      .from('contacts')
      .insert([contactData])
      .select()
      .single();
    if (error) throw error;
    return data;
  },
};

// Analytics
export const analyticsApi = {
  trackEvent: async (userId, eventType, eventData) => {
    const { data, error } = await supabase
      .from('analytics_events')
      .insert([
        {
          user_id: userId,
          event_type: eventType,
          event_data: eventData,
        },
      ]);
    if (error) throw error;
    return data;
  },
};
