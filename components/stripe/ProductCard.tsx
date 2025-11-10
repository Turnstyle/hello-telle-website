/**
 * Product card component for Stripe products
 */
import React, { useState } from 'react';
import { StripeProduct, formatPrice } from '@/lib/stripe-config';
import { createCheckoutSession } from '@/lib/stripe';
import { useAuth } from '@/hooks/useAuth';
import { Loader2, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: StripeProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const { user } = useAuth();

  const handlePurchase = async () => {
    if (!user) {
      setMessage({ type: 'error', text: 'Please log in to make a purchase' });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const { url, error } = await createCheckoutSession({
        priceId: product.priceId,
        mode: product.mode,
        successUrl: `${window.location.origin}/success`,
        cancelUrl: window.location.href,
      });

      if (error) {
        setMessage({ type: 'error', text: error });
      } else if (url) {
        window.location.href = url;
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to create checkout session' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="text-3xl font-bold text-blue-600">
          {formatPrice(product.price, product.currencySymbol)}
        </div>
      </div>

      {message && (
        <div className={`mb-4 p-3 rounded-lg text-sm ${
          message.type === 'error' 
            ? 'bg-red-50 text-red-700 border border-red-200' 
            : 'bg-green-50 text-green-700 border border-green-200'
        }`}>
          {message.text}
        </div>
      )}

      <button
        onClick={handlePurchase}
        disabled={loading || !user}
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <ShoppingCart className="w-4 h-4" />
            {product.mode === 'subscription' ? 'Subscribe' : 'Purchase'}
          </>
        )}
      </button>

      {!user && (
        <p className="text-sm text-gray-500 text-center mt-2">
          Please log in to make a purchase
        </p>
      )}
    </div>
  );
}

