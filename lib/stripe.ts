/**
 * Stripe checkout session creation functions
 * Updated to call Next.js API routes instead of Supabase Edge Functions
 */
import { supabase } from './supabase';

interface CreateCheckoutSessionParams {
  priceId: string;
  mode: 'payment' | 'subscription';
  successUrl: string;
  cancelUrl: string;
  customerEmail?: string;
  metadata?: Record<string, string>;
}

interface CheckoutSessionResponse {
  sessionId?: string;
  url?: string;
  error?: string;
}

export async function createCheckoutSession({
  priceId,
  mode,
  successUrl,
  cancelUrl,
  customerEmail,
  metadata,
}: CreateCheckoutSessionParams): Promise<CheckoutSessionResponse> {
  try {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session?.access_token) {
      return { error: 'Authentication required' };
    }

    const apiUrl = '/api/stripe/checkout';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price_id: priceId,
        mode,
        success_url: successUrl,
        cancel_url: cancelUrl,
        customer_email: customerEmail,
        metadata,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.error || 'Failed to create checkout session' };
    }

    return {
      sessionId: data.sessionId,
      url: data.url,
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return { error: 'Network error occurred' };
  }
}

export async function createPublicCheckoutSession({
  priceId,
  mode,
  successUrl,
  cancelUrl,
  customerEmail,
  metadata,
}: CreateCheckoutSessionParams): Promise<CheckoutSessionResponse> {
  try {
    const apiUrl = '/api/stripe/checkout-public';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price_id: priceId,
        mode,
        success_url: successUrl,
        cancel_url: cancelUrl,
        customer_email: customerEmail,
        metadata,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.error || 'Failed to create checkout session' };
    }

    return {
      sessionId: data.sessionId,
      url: data.url,
    };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return { error: 'Network error occurred' };
  }
}

