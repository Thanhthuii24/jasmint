import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { notFound } from 'next/navigation';
import { getNoteBySlug, getNotes } from '@/lib/content';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const notes = getNotes();
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const note = getNoteBySlug(resolvedParams.slug);
  if (!note) notFound();

  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      <div style={{ animation: 'fadeUp 0.4s ease forwards', opacity: 0, transform: 'translateY(16px)' }}>
        <Link
          href="/notes"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}
        >
          <ArrowLeft size={14} /> Back to Notes
        </Link>

        {/* Header */}
        <header style={{ marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
            {note.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
            {note.title}
          </h1>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={12} />{note.date}</span>
          </div>
        </header>

        {/* Content */}
        <article className="prose" style={{ maxWidth: '100%' }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {note.content}
          </ReactMarkdown>
        </article>

        {/* Footer */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
          <Link href="/notes" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500 }}>
            <ArrowLeft size={14} /> All notes
          </Link>
        </div>
      </div>
    </div>
  );
}
