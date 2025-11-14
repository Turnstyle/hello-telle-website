/**
 * Blog page listing articles
 */
import Link from 'next/link';
import Image from 'next/image';
import { Clock, User } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="gradient-bg py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">The HelloTelle Blog</h1>
            <p className="text-xl text-slate-600">
              Insights on caregiving, senior wellness, and staying connected across generations
            </p>
          </div>
        </section>

        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="card-hover group">
                  <div className="relative aspect-video rounded-xl mb-4 overflow-hidden bg-slate-100">
                    <Image
                      src={post.cardImage}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
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
