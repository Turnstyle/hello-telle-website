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
      title: 'Warm, Natural Conversations',
      description:
        "HelloTelle blends human connection with intelligent support, creating conversations that feel personal, flowing, and centered on your loved one&rsquo;s life, interests, and routines.",
      color: 'from-cornflower-100 to-butter-100',
      iconColor: 'text-cornflower-700',
    },
    {
      icon: Heart,
      title: 'Gentle Emotional & Behavioral Awareness',
      description:
        'Behind each friendly call, advanced listening tools help us notice subtle shifts in mood, tone, or routine — offering early insights while always respecting dignity and privacy.',
      color: 'from-butter-200 to-butter-300',
      iconColor: 'text-butter-800',
    },
    {
      icon: Calendar,
      title: 'Flexible, Intelligent Scheduling',
      description:
        "Choose daily, weekly, or custom call patterns that fit your loved one&rsquo;s rhythm. Our system can also suggest or trigger spontaneous check-ins when additional reassurance might help.",
      color: 'from-cornflower-100 to-cornflower-200',
      iconColor: 'text-cornflower-700',
    },
    {
      icon: BarChart,
      title: 'Clear, Meaningful Summaries',
      description:
        'Each conversation generates a simple, beautifully formatted summary powered by smart analysis — giving families high-level emotional cues, helpful observations, and memorable moments at a glance.',
      color: 'from-butter-100 to-butter-200',
      iconColor: 'text-butter-800',
    },
    {
      icon: Bell,
      title: 'Thoughtful, Insight-Driven Alerts',
      description:
        'When we detect meaningful changes — like skipped medication, unusual mood patterns, or disruptions in routine — HelloTelle sends you a gentle, timely alert so you can stay ahead of potential concerns.',
      color: 'from-cornflower-50 to-cornflower-100',
      iconColor: 'text-cornflower-700',
    },
    {
      icon: Sparkles,
      title: 'Smart Personalization That Feels Human',
      description:
        "With every call, HelloTelle learns what matters: favorite topics, daily habits, milestones, and preferences. The technology works quietly in the background — making each conversation warmer, richer, and truly personal.",
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
            <h1 className="mb-6">Features Designed with Care</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Thoughtfully built to strengthen connection across generations — powered by smart technology, delivered with human warmth.
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
              <h2 className="mb-4">What You&rsquo;ll Receive After Each Call</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Each conversation generates a simple, high-level update designed to keep you informed and reassured — without being intrusive.
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
              Join our waitlist to be among the first families to experience HelloTelle.
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
