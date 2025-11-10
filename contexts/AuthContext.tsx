/**
 * Authentication context provider for Supabase auth
 */
import { createContext, useContext, ReactNode } from 'react';
import { User } from '@supabase/supabase-js';
import { useAuth as useAuthHook } from '@/hooks/useAuth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuthHook();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

