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
      question: 'How does HelloTelle work for my senior loved one?',
      answer:
        "HelloTelle calls your loved one&rsquo;s phone at scheduled times (or spontaneously, if you prefer). They answer like any normal phone call—no apps, no passwords, no technology to learn. HelloTelle engages in warm, natural conversation for 10–15 minutes, asking about their day, listening to stories, and discussing their interests. After the call, you receive a beautiful summary with key topics, mood insights, and any concerns.",
    },
    {
      question: 'What makes HelloTelle feel so natural?',
      answer:
        'We hear this often! HelloTelle introduces itself warmly as "your friend who likes to check in." In our beta testing, 95% of seniors found the conversations warm and engaging, with many saying they look forward to the calls. It listens, learns, and remembers what matters most.',
    },
    {
      question: 'Can I customize what HelloTelle talks about?',
      answer:
        "Absolutely! In your dashboard, you can set topics of interest, conversational preferences, and even things to avoid. For example, you might want HelloTelle to ask about gardening, grandchildren, or recent doctor visits. HelloTelle learns over time what your loved one enjoys discussing and naturally adapts.",
    },
    {
      question: 'What if HelloTelle notices something concerning?',
      answer:
        "HelloTelle is trained to detect potential health concerns, mood changes, mentions of pain, falls, medication issues, or signs of depression. If something noteworthy comes up, you&rsquo;ll receive an immediate alert via text or email, in addition to the regular summary. This gives you a head start on addressing issues before they escalate.",
    },
    {
      question: 'Can multiple family members get the summaries?',
      answer:
        'Yes! On Standard and Premium plans, you can add multiple family members to receive summaries. This is perfect for siblings who all want to stay informed about their parent.',
    },
    {
      question: 'What happens if my loved one doesn&rsquo;t answer the call?',
      answer:
        "HelloTelle will try again later that day or the next day, depending on your settings. You&rsquo;ll receive a notification if multiple calls go unanswered, which could indicate a potential concern. You can also pause or adjust the schedule anytime from your dashboard.",
    },
    {
      question: 'Do you have to be a senior to use HelloTelle?',
      answer:
        'Not at all. While many members are older adults, HelloTelle is for anyone who benefits from consistent connection or gentle check-ins. Many people sign themselves up — adults living alone, those working from home, or anyone who simply enjoys regular conversation.',
    },
    {
      question: 'Why is connection so important for wellbeing?',
      answer:
        'Loneliness and social isolation have real health impacts — increasing the risk of cognitive decline, depression, and diminished overall wellbeing. Regular, meaningful conversation helps people stay emotionally grounded, mentally stimulated, and more connected to the world around them. HelloTelle provides simple, reliable communication that genuinely supports day-to-day wellness.',
    },
    {
      question: 'How is this different from a medical alert system?',
      answer:
        "Medical alert systems respond to emergencies. HelloTelle focuses on companionship, conversation, early awareness of changes, and consistent emotional support — a different kind of care, designed for connection rather than crisis.",
    },
    {
      question: 'Can workplaces offer HelloTelle as an employee benefit?',
      answer:
        'Yes. Caring for aging parents is one of the biggest stressors for modern employees, especially those in the sandwich generation. HelloTelle provides reassurance and support that can reduce stress, improve focus, and ease emotional load. We offer enterprise pricing and workplace programs — please reach out for details.',
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
              Everything you need to know about HelloTelle
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
                We&rsquo;re here to help. Chat with our team or send us an email.
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
