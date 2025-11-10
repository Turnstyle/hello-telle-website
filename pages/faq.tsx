/**
 * FAQ page with expandable questions
 */
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ChatModal } from '@/components/ChatModal';
import { Navigation } from '@/components/Navigation';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const faqs = [
    {
      question: 'How does Hello Telle work for my senior loved one?',
      answer: 'Hello Telle calls your loved one\'s phone at scheduled times (or spontaneously, if you prefer). They answer like any normal phone call--no apps, no passwords, no technology to learn. Hello Telle engages in warm, natural conversation for 10-15 minutes, asking about their day, listening to stories, and discussing their interests. After the call, you receive a beautiful summary with key topics, mood insights, and any concerns.',
    },
    {
      question: 'What makes Hello Telle feel so natural?',
      answer: 'We hear this often! The beautiful thing is, Hello Telle introduces itself warmly as "your friend who likes to check in." In our beta testing, 95% of seniors found the conversations warm and engaging, with many saying they look forward to the calls. It listens, learns, and remembers what matters most.',
    },
    {
      question: 'Can I customize what Hello Telle talks about?',
      answer: 'Absolutely! In your dashboard, you can set topics of interest, conversational preferences, and even things to avoid. For example, you might want Hello Telle to ask about gardening, grandchildren, or recent doctor visits. Hello Telle learns over time what your loved one enjoys discussing and naturally adapts.',
    },
    {
      question: 'What if Hello Telle notices something concerning?',
      answer: 'Hello Telle is trained to detect potential health concerns, mood changes, mentions of pain, falls, medication issues, or signs of depression. If something noteworthy comes up, you\'ll receive an immediate alert via text or email, in addition to the regular summary. This gives you a head start on addressing issues before they escalate.',
    },
    {
      question: 'Can multiple family members get the summaries?',
      answer: 'Yes! On Standard and Premium plans, you can add multiple family members to receive summaries. This is perfect for siblings who all want to stay informed about their parent.',
    },
    {
      question: 'What happens if my loved one doesn\'t answer the call?',
      answer: 'Hello Telle will try again later that day or the next day, depending on your settings. You\'ll receive a notification if multiple calls go unanswered, which could indicate a potential concern. You can also pause or adjust the schedule anytime from your dashboard.',
    },
    {
      question: 'How is this different from a medical alert system?',
      answer: 'Great question! Medical alert systems are reactive--they help after a fall or emergency. Hello Telle is proactive--it provides regular companionship, detects gradual changes in mood or health, and gives you ongoing insight into your loved one\'s daily life. Many families use Hello Telle alongside medical alerts for comprehensive peace of mind.',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="gradient-bg py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-600">
              Everything you need to know about Hello Telle
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-start text-left gap-4"
                  >
                    <h3 className="text-lg font-bold text-slate-900 flex-1">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="mt-4 text-slate-600 leading-relaxed animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 card text-center p-8 bg-gradient-to-br from-butter-50 to-white">
              <h3 className="text-xl font-bold mb-3">Still have questions?</h3>
              <p className="text-slate-600 mb-4">
                We\'re here to help. Chat with our team or send us an email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Chat with Us
                </button>
                <a href="mailto:hello@hellotelle.com" className="btn-secondary inline-flex items-center justify-center">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </>
  );
}

