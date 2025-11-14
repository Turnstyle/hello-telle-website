/**
 * About page
 */
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Users, Sparkles, Lightbulb } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="gradient-bg pt-20 pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-0">About HelloTelle</h1>
          </div>
        </section>

        <section className="gradient-bg pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center">
              <div className="card-hover p-6 max-w-xs">
                <div className="aspect-square bg-gradient-to-br from-cornflower-100 to-butter-200 rounded-2xl flex items-center justify-center">
                <Image
                  src="/57772_hellotelle_DP+RM-01.png"
                  alt="HelloTelle Logo"
                  width={240}
                  height={240}
                  className="w-3/4 h-auto"
                />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h2 className="mb-8 text-center">Our Story</h2>
              <div className="max-w-4xl mx-auto space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  HelloTelle began long before it had a name — with a little girl who dreamed of owning a French telephone.
                  Not because she cared about the phone itself, but because she imagined all the conversations it could hold.
                  She begged her parents for one, even if it didn&rsquo;t connect to a real phone line. To her, it symbolized closeness,
                  friendship, and the magic of being able to check in on the people you love.
                </p>
                <p>
                  Flash forward many years, and that same girl grew up balancing work, family, and caring for her aging mother.
                  She still loved connection just as much — but life was louder, fuller, and more complicated. Calls she meant to
                  make were squeezed between deadlines, errands, and school drop-offs. Her mother, not wanting to be a burden,
                  rarely mentioned when things weren&rsquo;t going well. And like so many families, their good intentions were often
                  swallowed by the day.
                </p>
                <p>
                  Working in retail and restaurants, she noticed that older customers often came in for something much deeper
                  than a purchase. They lingered to talk, turned simple questions into heartfelt conversations, and lit up at
                  the chance to share a story. It was connection — small, human moments that mattered more than anyone realized.
                </p>
                <p>
                  HelloTelle was created from these pieces:<br />
                  A childhood love of conversation.<br />
                  The real-world challenges of the sandwich generation.<br />
                  And the quiet truth that so many older adults simply want to feel remembered, included, and heard.
                </p>
                <p>
                  Today, HelloTelle blends human warmth with thoughtful technology to ensure no loved one goes unheard, no
                  small change goes unnoticed, and no family has to carry the weight of caregiving alone.
                </p>
                <p className="font-semibold text-slate-900 pt-2">
                  Because connection shouldn&rsquo;t be a luxury.<br />
                  It should be part of everyday life — just like that little French phone once promised.
                </p>
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-center mb-12">Our Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cornflower-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-cornflower-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Compassionate Connection</h3>
                  <p className="text-slate-600">
                    We create genuine conversations that help people feel seen, heard, and valued.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-butter-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-butter-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Dignity for Every Generation</h3>
                  <p className="text-slate-600">
                    We support older adults and their families with respect, care, and independence.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-cornflower-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="w-8 h-8 text-cornflower-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Reassurance Without Burden</h3>
                  <p className="text-slate-600">
                    We bring families peace of mind without adding stress or responsibility.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-butter-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-butter-800" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Thoughtful Awareness</h3>
                  <p className="text-slate-600">
                    We listen closely, notice gently, and share meaningful insights that keep families connected.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-8 md:p-12 bg-gradient-to-br from-butter-50 to-white text-center">
              <h2 className="mb-4">Join Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
                We&rsquo;re looking for passionate people to help us build the future of senior care and family connection.
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
