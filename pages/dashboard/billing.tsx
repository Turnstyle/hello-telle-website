/**
 * Billing page - subscription management
 */
import Link from 'next/link';
import { CreditCard } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navigation } from '@/components/Navigation';

function BillingPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen gradient-bg py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Billing & Subscription</h1>

          <div className="card mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Current Plan</h3>
                <Badge variant="success">Free Tier</Badge>
              </div>
              <CreditCard className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-slate-600 mb-4">
              You\'re currently on the free plan with 1 summary per month.
            </p>
            <Link href="/pricing" className="btn-primary inline-flex">
              Upgrade Plan
            </Link>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4">Usage This Month</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Summaries Used</span>
                <span className="font-semibold">0 of 1</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div className="bg-cornflower-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function BillingPageWrapper() {
  return (
    <ProtectedRoute>
      <BillingPage />
    </ProtectedRoute>
  );
}

