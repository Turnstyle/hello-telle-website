/**
 * Subscription status component displaying user's Stripe subscription
 */
import React, { useEffect, useState } from 'react';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { useAuth } from '@/hooks/useAuth';
import { getProductByPriceId } from '@/lib/stripe-config';
import { CheckCircle, Clock, XCircle, AlertCircle } from 'lucide-react';

interface SubscriptionData {
  subscription_status: string;
  price_id: string | null;
  current_period_end: number | null;
  cancel_at_period_end: boolean;
}

export function SubscriptionStatus() {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchSubscription();
    }
  }, [user]);

  const fetchSubscription = async () => {
    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('stripe_user_subscriptions')
        .select('subscription_status, price_id, current_period_end, cancel_at_period_end')
        .maybeSingle();

      if (error) {
        console.error('Error fetching subscription:', error);
      } else {
        setSubscription(data);
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!user || loading) {
    return null;
  }

  if (!subscription || subscription.subscription_status === 'not_started') {
    return null;
  }

  const product = subscription.price_id ? getProductByPriceId(subscription.price_id) : null;
  const statusConfig = getStatusConfig(subscription.subscription_status);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <div className="flex items-center gap-3 mb-4">
        <statusConfig.icon className={`w-6 h-6 ${statusConfig.color}`} />
        <h3 className="text-lg font-semibold text-gray-900">Subscription Status</h3>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Plan:</span>
          <span className="font-medium">{product?.name || 'Unknown Plan'}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Status:</span>
          <span className={`font-medium capitalize ${statusConfig.color}`}>
            {subscription.subscription_status.replace('_', ' ')}
          </span>
        </div>

        {subscription.current_period_end && (
          <div className="flex justify-between items-center">
            <span className="text-gray-600">
              {subscription.cancel_at_period_end ? 'Expires:' : 'Renews:'}
            </span>
            <span className="font-medium">
              {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
            </span>
          </div>
        )}

        {subscription.cancel_at_period_end && (
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              Your subscription will not renew and will end on the expiration date.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function getStatusConfig(status: string) {
  switch (status) {
    case 'active':
      return { icon: CheckCircle, color: 'text-green-600' };
    case 'trialing':
      return { icon: Clock, color: 'text-blue-600' };
    case 'past_due':
      return { icon: AlertCircle, color: 'text-yellow-600' };
    case 'canceled':
    case 'unpaid':
      return { icon: XCircle, color: 'text-red-600' };
    default:
      return { icon: Clock, color: 'text-gray-600' };
  }
}

