/**
 * Main navigation component with responsive menu
 * Updated for Next.js routing
 */
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/AuthContext';
import { LogOut, User, Menu, X } from 'lucide-react';

export function Navigation() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const publicLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
  ];

  const dashboardLinks = [
    { href: '/dashboard', label: 'Overview' },
    { href: '/dashboard/conversations', label: 'Conversations' },
    { href: '/dashboard/schedule', label: 'Schedule' },
    { href: '/dashboard/billing', label: 'Billing' },
    { href: '/dashboard/support', label: 'Support' },
  ];

  const links = router.pathname.startsWith('/dashboard') ? dashboardLinks : publicLinks;

  const isActive = (href: string) => {
    if (href === '/' || href === '/dashboard') {
      return router.pathname === href;
    }
    return router.pathname.startsWith(href);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/57772_hellotelle_DP+RM-01.png"
                  alt="Hello Telle"
                  className="h-10 w-auto transition-transform group-hover:scale-105"
                />
              </div>
              <span className="text-xl font-bold gradient-text">Hello Telle</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-cornflower-700 border-b-2 border-cornflower-500'
                    : 'text-slate-600 hover:text-cornflower-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <User className="w-4 h-4" />
                  {user.email?.split('@')[0]}
                </div>
                {!router.pathname.startsWith('/dashboard') && (
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium text-cornflower-700 hover:text-cornflower-800 transition-colors"
                  >
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={signOut}
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-slate-600 hover:text-cornflower-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/waitlist"
                  className="btn-primary text-sm"
                >
                  Join Waitlist
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-cornflower-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-cornflower-700'
                    : 'text-slate-600 hover:text-cornflower-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 space-y-3">
              {user ? (
                <>
                  <div className="flex items-center gap-2 text-sm text-slate-600 py-2">
                    <User className="w-4 h-4" />
                    {user.email}
                  </div>
                  {!router.pathname.startsWith('/dashboard') && (
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-base font-medium text-cornflower-700"
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 py-2 text-base font-medium text-slate-600"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-base font-medium text-slate-600"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/waitlist"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block btn-primary w-full text-center"
                  >
                    Join Waitlist
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

