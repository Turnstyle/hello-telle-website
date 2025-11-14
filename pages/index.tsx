/**
 * Home page - main landing page
 */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, MessageCircle, Lightbulb, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Navigation } from '@/components/Navigation';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>HelloTelle - Support for Your Loved One. Reassurance for You.</title>
        <meta
          name="description"
          content="HelloTelle connects your loved one with meaningful conversations and keeps you gently informed with thoughtful summaries."
        />
      </Head>
      <Navigation />
      <div className="min-h-screen">
        <section className="gradient-bg py-20 md:py-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="flex justify-center mb-8 animate-slide-up">
                <div className="relative h-24 w-40 sm:h-28 sm:w-48 md:h-32 md:w-56 lg:h-36 lg:w-64">
                  <Image
                    src="/57772_hellotelle_DP+RM-01.png"
                    alt="HelloTelle Logo"
                    fill
                    priority
                    className="object-contain transition-transform hover:scale-105"
                    sizes="(min-width: 1024px) 16rem, (min-width: 768px) 12rem, 10rem"
                  />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-md">
                <Sparkles className="w-4 h-4 text-butter-500" />
                <span className="text-sm font-semibold text-slate-700">Only 25 Alpha Spots Remaining</span>
              </div>

              <h1 className="mb-6 animate-slide-up">
                Support for Your Loved One. <span className="gradient-text">Reassurance for You.</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
                HelloTelle connects with your loved one through meaningful chats and thoughtful wellness check-ins that brighten
                their day — and give you peace of mind when life is full.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
                <Link href="/waitlist">
                  <Button size="lg" className="animate-pulse-soft min-w-[200px]">
                    Join the Waitlist
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/features">
                  <Button variant="secondary" size="lg" className="min-w-[200px]">
                    See How It Works
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-slate-500 mt-6">
                Reserve your spot with just $5 • Full refund if you change your mind
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">How HelloTelle Works</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A simple, reassuring way to stay connected with the people who matter most.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-cornflower-100 to-butter-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MessageCircle className="w-10 h-10 text-cornflower-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">1. Friendly Calls That Fit Their Routine</h3>
                <p className="text-slate-600 leading-relaxed">
                  HelloTelle reaches out at scheduled times for warm, easy conversations. No apps, no devices — just a familiar
                  phone call that feels natural and enjoyable.
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-butter-200 to-butter-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-butter-800" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">2. Genuine Connection With Gentle Check-Ins</h3>
                <p className="text-slate-600 leading-relaxed">
                  We chat about their day, their interests, and what&rsquo;s on their mind. Along the way, we offer light wellness
                  check-ins — mood, safety, cognitive cues, and reminders — always woven in organically, never clinical.
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-cornflower-100 to-cornflower-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Lightbulb className="w-10 h-10 text-cornflower-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">3. Thoughtful Summaries That Keep You Reassured</h3>
                <p className="text-slate-600 leading-relaxed">
                  After each call, you receive a simple, high-level update with conversation highlights and any notable wellness
                  observations — just enough to keep you connected and reassured, without feeling intrusive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 gradient-bg">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Why Families Love HelloTelle</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Because caring for the people you love shouldn&rsquo;t feel this hard — and you shouldn&rsquo;t have to do it alone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {[
                {
                  title: 'Made for the Sandwich Generation',
                  body:
                    "When you&rsquo;re balancing aging parents, growing children, and a full life, even the most loving intentions can collide with real-world limits. HelloTelle steps in gently — not to replace your calls, but to support them — giving your family more connection without adding more to your plate.",
                },
                {
                  title: 'A Safe, Comfortable Connection for Older Adults',
                  body:
                    'Many older adults don&rsquo;t want to &ldquo;be a burden,&rdquo; so they downplay how they&rsquo;re really doing. HelloTelle offers a friendly, pressure-free space where they can talk openly with someone who listens, cares, and checks in with compassion.',
                },
                {
                  title: 'Helpful Updates That Strengthen Your Own Conversations',
                  body:
                    "You receive light, meaningful summaries that highlight mood, routine, and any notable changes. Instead of guessing what to ask or worrying what you&rsquo;re missing, you can enter each call informed, present, and connected.",
                },
                {
                  title: 'Noticing What Others May Miss',
                  body:
                    "Changes in mood, skipped medication, unusual routines — these small signals can be easy to overlook when everyone is trying to protect each other. HelloTelle notices patterns and flags concerns early, so you can step in thoughtfully and with confidence.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-cornflower-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h4>
                      <p className="text-slate-600">{item.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-hover p-8 md:p-10 max-w-4xl mx-auto">
              <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                &ldquo;Knowing someone is checking in on my father with warmth and care has given me peace of mind I didn&rsquo;t realize I
                was missing.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cornflower-400 to-cornflower-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  S
                </div>
                <div>
                  <p className="font-bold text-slate-900">Sarah M.</p>
                  <p className="text-sm text-slate-600">Daughter & Caregiver, Chicago</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="card text-center p-12 md:p-16 bg-gradient-to-br from-cornflower-50 to-cornflower-50">
              <h2 className="mb-4">Ready to Stay Connected?</h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Join 200+ families already on the waitlist. Reserve your spot with just $5 and be among the first to experience
                HelloTelle.
              </p>
              <Link href="/waitlist">
                <Button size="lg" className="animate-pulse-soft">
                  Secure Your Spot Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <p className="text-sm text-slate-500 mt-6">
                Only 25 alpha spots remaining • Launch: Spring 2025
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
