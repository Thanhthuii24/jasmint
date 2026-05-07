import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPosts } from '@/lib/content';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) notFound();

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      <div style={{ animation: 'fadeUp 0.4s ease forwards', opacity: 0, transform: 'translateY(16px)' }}>
        <Link
          href="/blog"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}
        >
          <ArrowLeft size={14} /> Back to Blog
        </Link>

        {/* Header */}
        <header style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
            {post.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            {post.title}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={12} />{post.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={12} />{post.readTime}</span>
          </div>
        </header>

        {/* Content */}
        <article className="prose" style={{ maxWidth: '100%' }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Footer */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
          <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500 }}>
            <ArrowLeft size={14} /> All posts
          </Link>
        </div>
      </div>
    </div>
  );
}
