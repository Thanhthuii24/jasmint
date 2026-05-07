'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import type { BlogPost } from '@/lib/content';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45 } }),
};

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: '0.5rem' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <ArrowLeft size={14} /> Back
        </Link>
      </motion.div>

      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>Blog</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Longer-form writing on AI, research, and things I find interesting.</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {posts.map((post, i) => (
          <motion.div key={post.slug} custom={2 + i} variants={fadeUp} initial="hidden" animate="visible">
            <Link href={`/blog/${post.slug}`}>
              <article
                style={{
                  padding: '1.5rem',
                  border: '1px solid var(--border-light)',
                  borderRadius: '12px',
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.08)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  {post.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                </div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>{post.title}</h2>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>{post.excerpt}</p>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Calendar size={12} />{post.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}><Clock size={12} />{post.readTime}</span>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
