/**
 * Custom hook for authentication state management
 * Handles missing Supabase configuration gracefully
 */
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If Supabase is not configured, skip auth initialization
    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session }, error }) => {
      if (error) {
        console.warn('Failed to get Supabase session:', error);
      }
      setUser(session?.user ?? null);
      setLoading(false);
    }).catch((error) => {
      console.warn('Error initializing Supabase auth:', error);
      setLoading(false);
    });

    // Listen for auth changes
    try {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      });

      return () => subscription.unsubscribe();
    } catch (error) {
      console.warn('Error setting up auth state listener:', error);
      setLoading(false);
    }
  }, []);

  const signOut = async () => {
    if (!isSupabaseConfigured()) {
      console.warn('Cannot sign out: Supabase not configured');
      return;
    }
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.warn('Error signing out:', error);
    }
  };

  return {
    user,
    loading,
    signOut,
  };
}

