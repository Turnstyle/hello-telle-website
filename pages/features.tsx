/**
 * Features page
 */
import Link from 'next/link';
import { MessageCircle, Heart, Calendar, BarChart, Bell, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { CallSummaryShowcase } from '@/components/CallSummaryShowcase';
import { Navigation } from '@/components/Navigation';

export default function FeaturesPage() {
  const features = [
    {
      icon: MessageCircle,
      title: 'Natural Conversations',
      description: 'Hello Telle engages in warm, flowing conversations that feel genuinely human. Topics adapt to your loved one\'s interests and memories.',
      color: 'from-cornflower-100 to-butter-100',
      iconColor: 'text-cornflower-700',
    },
    {
      icon: Heart,
      title: 'Emotional Intelligence',
      description: 'Advanced mood detection notices subtle changes in tone, energy, and sentiment--alerting you to potential concerns with care and empathy.',
      color: 'from-butter-200 to-butter-300',
      iconColor: 'text-butter-800',
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Schedule daily, weekly, or custom call patterns. Hello Telle can also make spontaneous check-ins based on your preferences.',
      color: 'from-cornflower-100 to-cornflower-200',
      iconColor: 'text-cornflower-700',
    },
    {
      icon: BarChart,
      title: 'Beautiful Summaries',
      description: 'After each call, receive elegant summaries with key topics, mood insights, and memorable quotes--designed for quick scanning or deep reading.',
      color: 'from-butter-100 to-butter-200',
      iconColor: 'text-butter-800',
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Get notified when Hello Telle detects health concerns, changes in routine, or when your loved one mentions needing help.',
      color: 'from-cornflower-50 to-cornflower-100',
      iconColor: 'text-cornflower-700',
    },
    {
      icon: Sparkles,
      title: 'Almost Magical',
      description: 'Hello Telle listens, learns, and remembers what matters. Every conversation feels personal, warm, and genuinely caring.',
      color: 'from-butter-100 to-cornflower-100',
      iconColor: 'text-cornflower-600',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="gradient-bg py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Features Built with Love</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Every feature designed to strengthen connection between generations and provide peace of mind for caregivers.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="card-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 gradient-bg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">What You'll Receive After Each Call</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Beautiful, actionable summaries that keep you connected and informed about your loved one's well-being.
              </p>
            </div>

            <CallSummaryShowcase />

            <div className="text-center mt-12">
              <Link href="/waitlist">
                <Button size="lg" className="animate-pulse-soft">
                  Join the Waitlist
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-600 mb-8">
              Join our waitlist to be among the first families to experience Hello Telle.
            </p>
            <Link href="/waitlist">
              <Button size="lg" className="animate-pulse-soft">
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

