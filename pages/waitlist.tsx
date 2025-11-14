/**
 * Waitlist page with email and payment flow
 */
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { CheckCircle, ArrowRight, Heart } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { createPublicCheckoutSession } from '@/lib/stripe';
import { useToast } from '@/components/ui/Toast';
import { analytics } from '@/utils/analytics';
import { Navigation } from '@/components/Navigation';

type Step = 'email' | 'payment' | 'success';

export default function WaitlistPage() {
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState<number | null>(null);
  const { showToast } = useToast();
  const router = useRouter();

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!isSupabaseConfigured()) {
      showToast('Service is not configured. Please contact support.', 'error');
      return;
    }

    setLoading(true);

    analytics.track('Waitlist Email Submitted', { email });

    try {
      const { data: existing, error } = await supabase
        .from('waitlist')
        .select('id')
        .eq('email', email)
        .maybeSingle();

      if (error) {
        console.error('Error checking waitlist:', error);
        showToast('Error checking waitlist. Please try again.', 'error');
        setLoading(false);
        return;
      }

      if (existing) {
        showToast('You&rsquo;re already on the waitlist!', 'info');
        setLoading(false);
        return;
      }

      setStep('payment');
      setLoading(false);
    } catch (error) {
      console.error('Unexpected error:', error);
      showToast('An unexpected error occurred. Please try again.', 'error');
      setLoading(false);
    }
  };

  const handlePayment = async () => {
    if (!isSupabaseConfigured()) {
      showToast('Service is not configured. Please contact support.', 'error');
      return;
    }

    setLoading(true);

    analytics.track('Waitlist Deposit Initiated', { email });

    try {
      const { data: waitlistEntry, error: insertError } = await supabase
        .from('waitlist')
        .insert({ email, deposit_paid: false })
        .select()
        .single();

      if (insertError) {
        console.error('Error inserting into waitlist:', insertError);
        console.error('Error details:', { code: insertError.code, message: insertError.message, details: insertError.details, hint: insertError.hint });
        showToast(`Error joining waitlist: ${insertError.message || 'Please try again.'}`, 'error');
        setLoading(false);
        return;
      }

    const { url, error: stripeError } = await createPublicCheckoutSession({
      priceId: 'price_1SRfmfLF14MFaukJ5KbJo5j2',
      mode: 'payment',
      successUrl: `${window.location.origin}/waitlist/success?email=${encodeURIComponent(email)}`,
      cancelUrl: window.location.href,
      customerEmail: email,
      metadata: {
        type: 'waitlist_deposit',
        waitlist_id: waitlistEntry.id.toString(),
      },
    });

      if (stripeError || !url) {
        showToast('Error creating checkout session. Please try again.', 'error');
        setLoading(false);
        return;
      }

      window.location.href = url;
    } catch (error) {
      console.error('Unexpected error:', error);
      showToast('An unexpected error occurred. Please try again.', 'error');
      setLoading(false);
    }
  };

  const handleSkipDeposit = () => {
    analytics.track('Waitlist Skip Deposit', { email });
    router.push('/');
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen gradient-bg py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-cornflower-600 mx-auto mb-6" fill="currentColor" />
            <h1 className="mb-4">Join the Waitlist</h1>
            <p className="text-lg text-slate-600">
              Be among the first families to experience HelloTelle. Only 25 alpha spots available.
            </p>
          </div>

          <div className="card p-8 md:p-10">
            {step === 'email' && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-cornflower-600 text-white font-bold text-sm`}>
                    1
                  </div>
                  <div className="w-16 h-1 bg-slate-200"></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-200 text-slate-400 font-bold text-sm`}>
                    2
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-center">Enter Your Email</h3>
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <Input
                    type="email"
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                  />
                  <Button type="submit" loading={loading} className="w-full" size="lg">
                    Continue
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>

                <p className="text-sm text-slate-500 mt-6 text-center">
                  We&rsquo;ll never spam you. Unsubscribe anytime.
                </p>
              </div>
            )}

            {step === 'payment' && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-cornflower-600 text-white font-bold text-sm`}>
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div className="w-16 h-1 bg-cornflower-600"></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-cornflower-600 text-white font-bold text-sm`}>
                    2
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-center">Reserve Your Spot</h3>
                <p className="text-slate-600 mb-8 text-center">
                  Secure your place in line with a $5 refundable deposit. Get priority access when we launch.
                </p>

                <div className="bg-cornflower-50 rounded-lg p-6 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">Waitlist Deposit</span>
                    <span className="text-2xl font-bold text-cornflower-700">$5.00</span>
                  </div>
                  <p className="text-sm text-slate-600">
                    100% refundable • Applied as credit when you activate
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={handlePayment}
                    loading={loading}
                    className="w-full"
                    size="lg"
                  >
                    Pay $5 & Secure Spot
                  </Button>

                  <button
                    onClick={handleSkipDeposit}
                    disabled={loading}
                    className="w-full text-center text-sm text-slate-600 hover:text-slate-900 transition-colors py-2"
                  >
                    Skip deposit, join for free
                  </button>
                </div>

                <div className="mt-6 space-y-2 text-xs text-slate-500">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cornflower-600 flex-shrink-0 mt-0.5" />
                    <span>Priority access to alpha launch</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cornflower-600 flex-shrink-0 mt-0.5" />
                    <span>Exclusive founder pricing for first year</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cornflower-600 flex-shrink-0 mt-0.5" />
                    <span>Direct feedback line to our team</span>
                  </div>
                </div>
              </div>
            )}

            {step === 'success' && (
              <div className="animate-fade-in text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cornflower-400 to-cornflower-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl font-bold mb-4">You&rsquo;re In!</h3>
                <p className="text-lg text-slate-600 mb-6">
                  Welcome to the HelloTelle family. We&rsquo;re thrilled to have you.
                </p>

                {position && (
                  <div className="bg-cornflower-50 rounded-lg p-6 mb-6">
                    <p className="text-sm text-slate-600 mb-2">Your position in line:</p>
                    <p className="text-5xl font-bold text-cornflower-700">#{position}</p>
                  </div>
                )}

                <div className="space-y-4 text-left bg-slate-50 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-slate-900">What happens next?</h4>
                  <ol className="space-y-3 text-slate-600 text-sm">
                    <li className="flex gap-3">
                      <span className="font-bold text-cornflower-600">1.</span>
                      <span>You&rsquo;ll receive a confirmation email shortly</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-cornflower-600">2.</span>
                      <span>We&rsquo;ll send you alpha updates and sneak peeks as we build</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-cornflower-600">3.</span>
                      <span>When we launch (Spring 2025), you&rsquo;ll get first access</span>
                    </li>
                  </ol>
                </div>

                <p className="text-sm text-slate-500">
                  Check your email at <strong>{email}</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

