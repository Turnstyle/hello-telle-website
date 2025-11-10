/**
 * Public Stripe checkout session creation API route (for waitlist)
 * Converts Supabase Edge Function to Next.js API route
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY;

if (!stripeSecret) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}

const stripe = new Stripe(stripeSecret, {
  apiVersion: '2025-02-24.acacia',
  appInfo: {
    name: 'Hello Telle',
    version: '1.0.0',
  },
});

type ExpectedType = 'string' | { values: string[] };
type Expectations<T> = { [K in keyof T]: ExpectedType };

function validateParameters<T extends Record<string, any>>(
  values: T,
  expected: Expectations<T>
): string | undefined {
  for (const parameter in values) {
    const expectation = expected[parameter];
    const value = values[parameter];

    if (expectation === 'string') {
      if (value == null) {
        return `Missing required parameter ${parameter}`;
      }
      if (typeof value !== 'string') {
        return `Expected parameter ${parameter} to be a string got ${JSON.stringify(value)}`;
      }
    } else {
      if (!expectation.values.includes(value)) {
        return `Expected parameter ${parameter} to be one of ${expectation.values.join(', ')}`;
      }
    }
  }

  return undefined;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Client-Info, Apikey');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { price_id, success_url, cancel_url, mode, customer_email, metadata } = req.body;

    const error = validateParameters(
      { price_id, success_url, cancel_url, mode },
      {
        cancel_url: 'string',
        price_id: 'string',
        success_url: 'string',
        mode: { values: ['payment', 'subscription'] },
      }
    );

    if (error) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(400).json({ error });
    }

    if (!customer_email || typeof customer_email !== 'string') {
      res.setHeader('Access-Control-Allow-Origin', '*');
      return res.status(400).json({ error: 'customer_email is required' });
    }

    const customer = await stripe.customers.create({
      email: customer_email,
      metadata: metadata || {},
    });

    console.log(`Created new Stripe customer ${customer.id} for email ${customer_email}`);

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      mode,
      success_url,
      cancel_url,
      metadata: metadata || {},
    });

    console.log(`Created checkout session ${session.id} for customer ${customer.id}`);

    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(200).json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error(`Checkout error: ${error.message}`);
    res.setHeader('Access-Control-Allow-Origin', '*');
    return res.status(500).json({ error: error.message });
  }
}

