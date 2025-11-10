/**
 * Pricing page with plan selection
 */
import { useState, useEffect } from 'react';
import { Check, ThumbsUp, ThumbsDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useToast } from '@/components/ui/Toast';
import { ChatModal } from '@/components/ChatModal';
import { Navigation } from '@/components/Navigation';

type BillingCycle = 'monthly' | 'annual';
type Tier = 'free' | 'standard' | 'premium';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [votes, setVotes] = useState<Record<Tier, { upvotes: number; downvotes: number }>>({
    free: { upvotes: 0, downvotes: 0 },
    standard: { upvotes: 0, downvotes: 0 },
    premium: { upvotes: 0, downvotes: 0 },
  });
  const [userVotes, setUserVotes] = useState<Record<Tier, 'upvote' | 'downvote' | null>>({
    free: null,
    standard: null,
    premium: null,
  });
  const [isChatOpen, setIsChatOpen] = useState(false);

  const { showToast } = useToast();

  useEffect(() => {
    fetchVotes();
    loadUserVotes();
  }, []);

  const fetchVotes = async () => {
    if (!isSupabaseConfigured()) {
      return;
    }

    try {
      const { data, error } = await supabase
        .from('pricing_feedback')
        .select('plan_tier, vote_type');

      if (!error && data) {
        const aggregated = data.reduce((acc, vote) => {
          if (!acc[vote.plan_tier]) {
            acc[vote.plan_tier] = { upvotes: 0, downvotes: 0 };
          }
          if (vote.vote_type === 'upvote') {
            acc[vote.plan_tier].upvotes++;
          } else {
            acc[vote.plan_tier].downvotes++;
          }
          return acc;
        }, {} as Record<Tier, { upvotes: number; downvotes: number }>);

        setVotes({
          free: aggregated.free || { upvotes: 0, downvotes: 0 },
          standard: aggregated.standard || { upvotes: 0, downvotes: 0 },
          premium: aggregated.premium || { upvotes: 0, downvotes: 0 },
        });
      }
    } catch (error) {
      console.warn('Error fetching votes:', error);
    }
  };

  const loadUserVotes = () => {
    if (typeof window !== 'undefined') {
      const savedVotes = localStorage.getItem('pricing_votes');
      if (savedVotes) {
        setUserVotes(JSON.parse(savedVotes));
      }
    }
  };

  const handleVote = async (tier: Tier, voteType: 'upvote' | 'downvote') => {
    if (typeof window === 'undefined') return;
    
    if (!isSupabaseConfigured()) {
      showToast('Service is not configured. Vote saved locally.', 'info');
      const newUserVotes = { ...userVotes, [tier]: voteType };
      setUserVotes(newUserVotes);
      localStorage.setItem('pricing_votes', JSON.stringify(newUserVotes));
      return;
    }

    const sessionId = localStorage.getItem('session_id') || Math.random().toString(36).substr(2, 9);
    localStorage.setItem('session_id', sessionId);

    const currentVote = userVotes[tier];
    if (currentVote === voteType) {
      showToast('You already voted on this plan', 'info');
      return;
    }

    try {
      const { error } = await supabase
        .from('pricing_feedback')
        .insert({
          session_id: sessionId,
          plan_tier: tier,
          vote_type: voteType,
        });

      if (!error) {
        const newUserVotes = { ...userVotes, [tier]: voteType };
        setUserVotes(newUserVotes);
        localStorage.setItem('pricing_votes', JSON.stringify(newUserVotes));
        fetchVotes();
        showToast('Thank you for your feedback!', 'success');
      } else {
        showToast('Error submitting vote. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error submitting vote:', error);
      showToast('Error submitting vote. Please try again.', 'error');
    }
  };

  const tiers = [
    {
      name: 'Free',
      tier: 'free' as Tier,
      monthlyPrice: 0,
      annualPrice: 0,
      summaries: '1 summary per month',
      description: 'Perfect for testing if your senior would enjoy Telle',
      features: [
        '1 conversation summary per month',
        'Basic mood insights',
        'Email summaries',
        'Secure & private',
        'Cancel anytime',
      ],
      cta: 'Start Free',
      highlighted: false,
      badge: null,
    },
    {
      name: 'Standard',
      tier: 'standard' as Tier,
      monthlyPrice: 20,
      annualPrice: 100,
      summaries: '1 summary per week',
      description: 'Stay regularly connected with weekly check-ins',
      features: [
        'Weekly conversation summaries',
        'Advanced mood tracking',
        'Priority email summaries',
        'Conversation history (90 days)',
        'Custom topics & interests',
        'Alert notifications',
      ],
      cta: 'Get Started',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Premium',
      tier: 'premium' as Tier,
      monthlyPrice: 60,
      annualPrice: 500,
      summaries: 'Unlimited summaries',
      description: 'Maximum connection with daily or on-demand calls',
      features: [
        'Unlimited conversation summaries',
        'Daily or custom schedules',
        'Advanced health alerts',
        'Full conversation history',
        'Priority support',
        'Family dashboard access',
        'Detailed analytics',
      ],
      cta: 'Get Started',
      highlighted: false,
      badge: 'Best Value',
    },
  ];

  const getPrice = (tier: typeof tiers[0]) => {
    if (tier.monthlyPrice === 0) return 'Free';
    const price = billingCycle === 'monthly' ? tier.monthlyPrice : tier.annualPrice / 12;
    return `$${price}/mo`;
  };

  const getSavings = (tier: typeof tiers[0]) => {
    if (tier.monthlyPrice === 0) return null;
    const annualTotal = tier.monthlyPrice * 12;
    const savings = annualTotal - tier.annualPrice;
    const percentage = Math.round((savings / annualTotal) * 100);
    return { amount: savings, percentage };
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="gradient-bg py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Start free, upgrade when you\'re ready. No hidden fees, cancel anytime.
            </p>

            <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-cornflower-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-6 py-2 rounded-md font-medium transition-all flex items-center gap-2 ${
                  billingCycle === 'annual'
                    ? 'bg-cornflower-600 text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Annual
                <Badge variant="success" className="text-xs">Save up to 58%</Badge>
              </button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier) => {
                const savings = getSavings(tier);
                return (
                  <div
                    key={tier.tier}
                    className={`card ${tier.highlighted ? 'ring-2 ring-cornflower-500 shadow-xl' : ''} relative`}
                  >
                    {tier.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge variant="success" className="shadow-md">
                          <Sparkles className="w-3 h-3 mr-1" />
                          {tier.badge}
                        </Badge>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="mb-2">
                        <span className="text-4xl font-bold text-slate-900">{getPrice(tier)}</span>
                      </div>
                      {billingCycle === 'annual' && savings && (
                        <Badge variant="success" className="mb-2">
                          Save ${savings.amount}/year ({savings.percentage}%)
                        </Badge>
                      )}
                      <p className="text-sm text-slate-600">{tier.summaries}</p>
                      <p className="text-sm text-slate-500 mt-2">{tier.description}</p>
                    </div>

                    <Link href="/waitlist" className="block mb-6">
                      <Button
                        variant={tier.highlighted ? 'primary' : 'secondary'}
                        className="w-full"
                      >
                        {tier.cta}
                      </Button>
                    </Link>

                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-cornflower-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-6 border-t border-slate-200">
                      <p className="text-xs text-slate-500 mb-3 text-center">Help us improve pricing:</p>
                      <div className="flex justify-center gap-4">
                        <button
                          onClick={() => handleVote(tier.tier, 'upvote')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                            userVotes[tier.tier] === 'upvote'
                              ? 'bg-cornflower-100 text-cornflower-700'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm font-medium">{votes[tier.tier].upvotes}</span>
                        </button>
                        <button
                          onClick={() => handleVote(tier.tier, 'downvote')}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                            userVotes[tier.tier] === 'downvote'
                              ? 'bg-butter-100 text-butter-700'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          <ThumbsDown className="w-4 h-4" />
                          <span className="text-sm font-medium">{votes[tier.tier].downvotes}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <p className="text-slate-600 mb-4">
                Have questions about which plan is right for you?
              </p>
              <button
                onClick={() => setIsChatOpen(true)}
                className="text-cornflower-700 hover:text-cornflower-800 font-medium cursor-pointer"
              >
                Chat with us →
              </button>
            </div>
          </div>
        </section>

        <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </>
  );
}

