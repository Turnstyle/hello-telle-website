/**
 * Blog page listing articles
 */
import Link from 'next/link';
import { Clock, User } from 'lucide-react';
import { Navigation } from '@/components/Navigation';

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: '5 Signs Your Senior Parent Needs More Social Connection',
      excerpt: 'Learn to recognize the subtle signs of loneliness and isolation in elderly loved ones, and what you can do about it.',
      author: 'Dr. Sarah Chen',
      date: 'Nov 5, 2024',
      readTime: '6 min read',
      category: 'Caregiving Tips',
    },
    {
      id: 2,
      title: 'How AI is Revolutionizing Senior Care (Without Losing the Human Touch)',
      excerpt: 'Exploring the balance between technology and empathy in modern eldercare solutions.',
      author: 'Michael Torres',
      date: 'Nov 1, 2024',
      readTime: '8 min read',
      category: 'Technology',
    },
    {
      id: 3,
      title: 'The Caregiver Guilt Trap: Why Feeling Bad Doesn\'t Help Anyone',
      excerpt: 'A frank conversation about the emotional burden of long-distance caregiving and how to find peace.',
      author: 'Jennifer Martinez',
      date: 'Oct 28, 2024',
      readTime: '7 min read',
      category: 'Mental Health',
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="gradient-bg py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">The Hello Telle Blog</h1>
            <p className="text-xl text-slate-600">
              Insights on caregiving, senior wellness, and staying connected across generations
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="card-hover group">
                  <div className="aspect-video bg-gradient-to-br from-cornflower-100 to-cornflower-200 rounded-xl mb-4"></div>
                  <div className="inline-block px-3 py-1 bg-cornflower-100 text-cornflower-800 text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cornflower-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2">{post.date}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

