/**
 * Supabase client configuration for Next.js
 * Handles missing environment variables gracefully
 */
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create Supabase client if env vars are available, otherwise create a mock client
let supabase: SupabaseClient;

if (!supabaseUrl || !supabaseAnonKey) {
  // Create a mock client with dummy values to prevent crashes
  // This allows the app to load even without Supabase configured
  console.warn('Supabase environment variables not configured. Using mock client.');
  supabase = createClient('https://placeholder.supabase.co', 'placeholder-anon-key');
} else {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

// Export a helper to check if Supabase is properly configured
export const isSupabaseConfigured = (): boolean => {
  return !!(supabaseUrl && supabaseAnonKey);
};

