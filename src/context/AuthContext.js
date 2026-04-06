'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (!supabase) {
      console.error('Supabase not initialized');
      setLoading(false);
      return;
    }

    // Check current session
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser(session.user);
          setToken(session.access_token);
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setUser(session.user);
          setToken(session.access_token);
        } else {
          setUser(null);
          setToken(null);
        }
      }
    );

    return () => subscription?.unsubscribe();
  }, [mounted]);

  const register = async (email, password, firstName, lastName, phone = '') => {
    if (!supabase) throw new Error('Supabase not initialized');

    try {
      // Sign up user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName,
            phone,
          },
        },
      });

      if (error) throw error;

      // Create user profile in database
      if (data.user) {
        try {
          const { error: profileError } = await supabase
            .from('user_profiles')
            .insert([
              {
                id: data.user.id,
                email: data.user.email,
                first_name: firstName,
                last_name: lastName,
                phone,
                role: 'member',
                status: 'active',
              },
            ]);

          if (profileError) {
            console.warn('Profile creation warning:', profileError);
            // Don't throw - user is created even if profile fails
          }
        } catch (profileErr) {
          console.warn('Profile creation exception:', profileErr);
          // Don't throw - user is created even if profile fails
        }
      }

      return data;
    } catch (error) {
      throw new Error(error.message || 'Registration failed');
    }
  };

  const login = async (email, password) => {
    if (!supabase) throw new Error('Supabase not initialized');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.session) {
        setUser(data.user);
        setToken(data.session.access_token);
      }

      return data;
    } catch (error) {
      throw new Error(error.message || 'Login failed');
    }
  };

  const logout = async () => {
    if (!supabase) return;

    try {
      await supabase.auth.signOut();
      setUser(null);
      setToken(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateProfile = async (updates) => {
    if (!supabase) throw new Error('Supabase not initialized');
    if (!user) throw new Error('No user logged in');

    try {
      const { error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('id', user.id);

      if (error) throw error;

      // Update local user state
      setUser({
        ...user,
        user_metadata: {
          ...user.user_metadata,
          ...updates,
        },
      });

      return { success: true };
    } catch (error) {
      throw new Error(error.message || 'Profile update failed');
    }
  };

  const resetPassword = async (email) => {
    if (!supabase) throw new Error('Supabase not initialized');

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${typeof window !== 'undefined' ? window.location.origin : ''}/reset-password`,
      });

      if (error) throw error;
      return { success: true };
    } catch (error) {
      throw new Error(error.message || 'Password reset failed');
    }
  };

  const updatePassword = async (newPassword) => {
    if (!supabase) throw new Error('Supabase not initialized');

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;
      return { success: true };
    } catch (error) {
      throw new Error(error.message || 'Password update failed');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        token,
        register,
        login,
        logout,
        updateProfile,
        resetPassword,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
