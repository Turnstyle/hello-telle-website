/**
 * Waitlist success page after payment
 */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CheckCircle, Heart, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Navigation } from '@/components/Navigation';

export default function WaitlistSuccessPage() {
  const router = useRouter();
  const [position, setPosition] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const email = router.query.email as string | undefined;

  useEffect(() => {
    const fetchPosition = async () => {
      if (!email) {
        setLoading(false);
        return;
      }

      if (!isSupabaseConfigured()) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('waitlist')
          .select('position')
          .eq('email', email)
          .maybeSingle();

        if (!error && data) {
          setPosition(data.position);
        }
      } catch (error) {
        console.warn('Error fetching waitlist position:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosition();
  }, [email]);

  return (
    <>
      <Navigation />
      <div className="min-h-screen gradient-bg py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="card p-8 md:p-12 text-center animate-fade-in">
            <div className="w-20 h-20 bg-gradient-to-br from-cornflower-400 to-cornflower-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-xl text-slate-600 mb-8">
              Welcome to the Hello Telle family. We're thrilled to have you on the waitlist.
            </p>

            {loading ? (
              <div className="bg-cornflower-50 rounded-lg p-6 mb-8">
                <div className="animate-pulse">
                  <div className="h-4 bg-slate-200 rounded w-3/4 mx-auto mb-4"></div>
                  <div className="h-12 bg-slate-200 rounded w-24 mx-auto"></div>
                </div>
              </div>
            ) : position ? (
              <div className="bg-cornflower-50 rounded-lg p-6 mb-8">
                <p className="text-sm text-slate-600 mb-2">Your position in line:</p>
                <p className="text-5xl font-bold text-cornflower-700">#{position}</p>
              </div>
            ) : null}

            {email && (
              <div className="bg-gradient-to-br from-cornflower-50 to-cornflower-50 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-butter-500" fill="currentColor" />
                  What happens next?
                </h3>
                <ol className="space-y-3 text-slate-600">
                  <li className="flex gap-3">
                    <span className="font-bold text-cornflower-600 flex-shrink-0">1.</span>
                    <span>You'll receive a confirmation email at <strong className="text-slate-900">{email}</strong></span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-cornflower-600 flex-shrink-0">2.</span>
                    <span>We'll send you alpha updates and sneak peeks as we build</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-cornflower-600 flex-shrink-0">3.</span>
                    <span>When we launch (Spring 2025), you'll get first access with exclusive founder pricing</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-cornflower-600 flex-shrink-0">4.</span>
                    <span>Your $5 deposit will be applied as credit when you activate</span>
                  </li>
                </ol>
              </div>
            )}

            <div className="space-y-4">
              <div className="bg-butter-50 rounded-lg p-4 text-sm text-slate-700">
                <p className="font-semibold mb-1">Want a full refund?</p>
                <p>No problem! Just email us at <a href="mailto:hello@hellotelle.com" className="text-cornflower-700 hover:text-cornflower-800 font-medium">hello@hellotelle.com</a> anytime before launch.</p>
              </div>

              <Link href="/">
                <Button variant="secondary" className="w-full md:w-auto">
                  <Home className="w-5 h-5" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 mb-4">
              Have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/faq">
                <Button variant="secondary" size="sm">
                  View FAQ
                </Button>
              </Link>
              <Link href="/dashboard/support">
                <Button variant="secondary" size="sm">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

