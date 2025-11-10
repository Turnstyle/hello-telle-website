/**
 * Support page - help and contact
 */
import { useState } from 'react';
import Link from 'next/link';
import { MessageCircle, Mail } from 'lucide-react';
import { ChatModal } from '@/components/ChatModal';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Navigation } from '@/components/Navigation';

function SupportPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Navigation />
      <div className="min-h-screen gradient-bg py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">How Can We Help?</h1>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card text-center p-8">
              <MessageCircle className="w-12 h-12 text-cornflower-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-slate-600 mb-4">
                Chat with our support team in real-time
              </p>
              <button className="btn-primary" onClick={() => setIsChatOpen(true)}>Start Chat</button>
            </div>

            <div className="card text-center p-8">
              <Mail className="w-12 h-12 text-cornflower-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">
                Send us an email and we\'ll respond within 24 hours
              </p>
              <a href="mailto:support@hellotelle.com" className="btn-secondary inline-flex">
                Send Email
              </a>
            </div>
          </div>

          <div className="card mt-8 p-8">
            <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
            <p className="text-slate-600 mb-4">
              Check out our FAQ page for quick answers to common questions.
            </p>
            <Link href="/faq" className="text-cornflower-700 hover:text-cornflower-800 font-medium">
              View FAQ →
            </Link>
          </div>
        </div>
      </div>

      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}

export default function SupportPageWrapper() {
  return (
    <ProtectedRoute>
      <SupportPage />
    </ProtectedRoute>
  );
}

