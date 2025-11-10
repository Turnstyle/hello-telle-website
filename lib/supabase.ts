/**
 * Supabase client configuration for Next.js
 * Handles missing environment variables gracefully
 */
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Helper to validate URL format
const isValidUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
};

// Create Supabase client if env vars are available and valid, otherwise create a mock client
let supabase: SupabaseClient;

if (!supabaseUrl || !supabaseAnonKey || !isValidUrl(supabaseUrl) || supabaseUrl.includes('your_supabase_url')) {
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
  return !!(supabaseUrl && supabaseAnonKey && isValidUrl(supabaseUrl) && !supabaseUrl.includes('your_supabase_url'));
};

