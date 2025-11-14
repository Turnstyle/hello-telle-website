/**
 * Conversations page - conversation history
 */
import { Search } from 'lucide-react';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navigation } from '@/components/Navigation';

function ConversationsPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen gradient-bg py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Conversation History</h1>
          <div className="card p-12 text-center">
            <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-700 mb-2">Coming Soon</h3>
            <p className="text-slate-600">
              Your conversation archive will appear here once you start using HelloTelle.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ConversationsPageWrapper() {
  return (
    <ProtectedRoute>
      <ConversationsPage />
    </ProtectedRoute>
  );
}

