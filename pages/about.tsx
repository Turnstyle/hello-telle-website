/**
 * About page
 */
import Link from 'next/link';
import { Heart, Users, Sparkles, Lightbulb } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="gradient-bg py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About Hello Telle</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We believe no senior should feel alone, and no caregiver should feel guilty. Hello Telle bridges the distance with technology that feels almost magical.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                  <p>
                    Hello Telle was born from a simple question: What if we could create more human connection, not less?
                  </p>
                  <p>
                    Our founder watched her grandmother decline rapidly after moving to assisted living. Despite the family\'s best efforts to call regularly, the isolation took its toll. After her grandmother passed, she realized that what seniors need isn\'t just check-ins--they need meaningful conversations that make them feel heard, valued, and connected.
                  </p>
                  <p>
                    Today, Hello Telle combines the warmth of human conversation with intelligent technology that truly listens and learns. We\'re building a future where every senior has a companion who calls regularly, remembers their stories, and helps their family stay deeply connected to their daily lives.
                  </p>
                </div>
              </div>
              <div className="card-hover p-8">
                <div className="aspect-square bg-gradient-to-br from-cornflower-100 to-butter-200 rounded-2xl flex items-center justify-center">
                  <Heart className="w-32 h-32 text-cornflower-700" fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cornflower-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-cornflower-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Empathy First</h3>
                  <p className="text-slate-600">Every feature designed with compassion for seniors and caregivers.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-butter-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-butter-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Almost Magical</h3>
                  <p className="text-slate-600">Technology that listens, learns, and brings people closer together.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-cornflower-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-cornflower-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Simplicity</h3>
                  <p className="text-slate-600">Technology should be invisible. Connection should be effortless.</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-butter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-butter-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Family Centered</h3>
                  <p className="text-slate-600">We strengthen bonds between generations, never replace them.</p>
                </div>
              </div>
            </div>

            <div className="card p-8 md:p-12 bg-gradient-to-br from-butter-50 to-white text-center">
              <h2 className="mb-4">Join Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                We\'re looking for passionate people to help us build the future of senior care and family connection.
              </p>
              <Link href="/careers" className="btn-primary inline-flex items-center gap-2">
                View Open Positions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

