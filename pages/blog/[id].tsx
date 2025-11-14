import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { getBlogPostById } from '@/data/blogPosts';

export default function BlogPostPage() {
  const router = useRouter();
  if (!router.isReady) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-slate-500">Loading article…</p>
        </div>
      </>
    );
  }

  const postId = Number(router.query.id);
  const post = Number.isFinite(postId) ? getBlogPostById(postId) : undefined;

  if (!post) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Article not found</h1>
          <p className="text-slate-600 mb-6">The blog post you are looking for no longer exists.</p>
          <Link href="/blog" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Return to Blog
          </Link>
        </div>
      </>
    );
  }

  const categoryColors: Record<string, string> = {
    'Caregiving Tips': 'bg-emerald-100 text-emerald-800',
    Technology: 'bg-sky-100 text-sky-800',
    'Mental Health': 'bg-amber-100 text-amber-800',
  };

  const categoryClass = categoryColors[post.category] || 'bg-cornflower-100 text-cornflower-800';

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cornflower-600 hover:text-cornflower-700 transition-colors mb-6 sm:mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Blog</span>
          </Link>

          <div className="mb-6 sm:mb-8">
            <div className={`inline-block px-3 py-1 ${categoryClass} text-xs font-semibold rounded-full mb-4`}>
              {post.category}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-slate-900">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-600 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <div>
                  <div className="font-medium text-slate-900">{post.author}</div>
                  <div className="text-xs text-slate-500">{post.authorTitle}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="relative aspect-[21/9] rounded-2xl mb-8 sm:mb-12 shadow-sm overflow-hidden bg-slate-100">
              <Image
                src={post.heroImage}
                alt={post.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <div className="text-lg sm:text-xl leading-relaxed text-slate-700 mb-8 sm:mb-12 border-l-4 border-cornflower-200 pl-6 italic">
              {post.content.introduction}
            </div>

            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-900">{section.heading}</h2>
                <p className="text-base sm:text-lg leading-relaxed text-slate-700 whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-br from-cornflower-50 to-sky-50 rounded-2xl border border-cornflower-100">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-900">Final Thoughts</h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-700 whitespace-pre-line">
                {post.content.conclusion}
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-slate-200">
            <div className="bg-gradient-to-br from-cornflower-50 to-sky-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900">About the Author</h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cornflower-200 to-sky-200 flex-shrink-0"></div>
                <div>
                  <div className="font-bold text-lg text-slate-900 mb-1">{post.author}</div>
                  <div className="text-sm text-slate-600 mb-3">{post.authorTitle}</div>
                  <div className="text-sm text-slate-700 leading-relaxed">
                    {post.author === 'Dr. Sarah Chen' &&
                      'Dr. Chen specializes in gerontology and has over 15 years of experience working with seniors and their families. She is passionate about improving quality of life for older adults through evidence-based care practices.'}
                    {post.author === 'Michael Torres' &&
                      'Michael writes about the intersection of healthcare and technology, with a focus on innovations that improve patient care. He has covered digital health for numerous publications and speaks regularly at healthcare technology conferences.'}
                    {post.author === 'Jennifer Martinez' &&
                      'Jennifer is a licensed family therapist who specializes in caregiver support and family dynamics. She has helped hundreds of families navigate the challenges of caring for aging loved ones while maintaining their own wellbeing.'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cornflower-600 text-white rounded-lg hover:bg-cornflower-700 transition-all hover:shadow-lg font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Read More Articles
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
