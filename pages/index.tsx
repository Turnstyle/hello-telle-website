/**
 * Home page - main landing page
 */
import Head from 'next/head';
import Link from 'next/link';
import { Heart, MessageCircle, Lightbulb, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Navigation } from '@/components/Navigation';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hello Telle - Your Intelligent Companion Who Brings You Closer</title>
        <meta name="description" content="Hello Telle listens, learns, and connects you with your loved ones through warm, magical conversations that feel genuinely human." />
      </Head>
      <Navigation />
      <div className="min-h-screen">
        <section className="gradient-bg py-20 md:py-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-md">
                <Sparkles className="w-4 h-4 text-butter-500" />
                <span className="text-sm font-semibold text-slate-700">Only 25 Alpha Spots Remaining</span>
              </div>

              <h1 className="mb-6 animate-slide-up">
                Your Intelligent Companion Who <span className="gradient-text">Brings You Closer</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
                Hello Telle listens, learns, and connects you with your loved ones through warm, magical conversations that feel genuinely human.
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
              <h2 className="mb-4">How Hello Telle Works</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A simple, almost magical way to stay connected with the people who matter most
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-cornflower-100 to-butter-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <MessageCircle className="w-10 h-10 text-cornflower-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">1. Hello Telle Calls</h3>
                <p className="text-slate-600 leading-relaxed">
                  At scheduled times or spontaneously, Hello Telle calls your loved one for a warm, natural conversation. No apps or tech needed--just a phone call.
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-butter-200 to-butter-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Heart className="w-10 h-10 text-butter-800" fill="currentColor" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">2. Listens & Learns</h3>
                <p className="text-slate-600 leading-relaxed">
                  Hello Telle asks about their day, listens to stories, remembers what matters, and notices mood changes--providing genuine companionship that feels magical.
                </p>
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 bg-gradient-to-br from-cornflower-100 to-cornflower-200 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Lightbulb className="w-10 h-10 text-cornflower-700" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">3. Brings You Closer</h3>
                <p className="text-slate-600 leading-relaxed">
                  After each call, you receive a beautiful summary with conversation highlights, mood insights, and meaningful moments--keeping you connected and informed.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="py-20 px-4 gradient-bg">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">Why Families Love Hello Telle</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-cornflower-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">No Tech Required for Seniors</h4>
                      <p className="text-slate-600">Just a simple phone call--no apps, passwords, or complicated devices to learn.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-cornflower-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Reduce Caregiver Guilt</h4>
                      <p className="text-slate-600">Know your loved one is checked on regularly, even when life gets busy.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-cornflower-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Early Warning System</h4>
                      <p className="text-slate-600">Hello Telle notices changes in mood, health, or routine and alerts you to potential concerns.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-cornflower-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Better Conversations</h4>
                      <p className="text-slate-600">Use Hello Telle\'s insights to have more meaningful conversations when you do call.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-hover p-8 md:p-10">
                <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
                  "My mom lives 800 miles away, and I used to call once a week. Now Hello Telle calls her three times a week, and I actually look forward to reading the summaries. It\'s like having a window into her daily life that I never had before."
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
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="card text-center p-12 md:p-16 bg-gradient-to-br from-cornflower-50 to-cornflower-50">
              <h2 className="mb-4">Ready to Stay Connected?</h2>
              <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                Join 200+ families already on the waitlist. Reserve your spot with just $5 and be among the first to experience Hello Telle.
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

