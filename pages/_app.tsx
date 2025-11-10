/**
 * Next.js App component - wraps all pages with global providers
 * Replaces the Vite App.tsx router setup
 */
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastProvider } from '@/components/ui/Toast';
import { analytics } from '@/utils/analytics';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Track page views
    const handleRouteChange = (url: string) => {
      analytics.page(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AuthProvider>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </AuthProvider>
  );
}

