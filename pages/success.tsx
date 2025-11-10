/**
 * Success page after payment
 */
import Link from 'next/link';
import { CheckCircle, Home, Receipt } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function SuccessPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Payment Successful!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase. Your payment has been processed successfully.
              </p>
              
              <div className="space-y-3">
                <Link
                  href="/"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center justify-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Return Home
                </Link>
                
                <div className="text-sm text-gray-500">
                  You should receive a confirmation email shortly.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

