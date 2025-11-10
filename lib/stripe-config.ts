/**
 * Stripe product configuration
 */
export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: number;
  currency: string;
  currencySymbol: string;
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_1SRfmfLF14MFaukJ5KbJo5j2',
    name: 'Hello Telle Waitlist Deposit',
    description: 'Secure your spot on the Hello Telle waitlist with a refundable deposit.',
    mode: 'payment',
    price: 5.00,
    currency: 'usd',
    currencySymbol: '$',
  },
];

export function getProductByPriceId(priceId: string): StripeProduct | undefined {
  return stripeProducts.find(product => product.priceId === priceId);
}

export function formatPrice(price: number, currencySymbol: string): string {
  return `${currencySymbol}${price.toFixed(2)}`;
}

