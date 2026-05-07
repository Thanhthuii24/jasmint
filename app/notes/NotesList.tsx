'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { Note } from '@/lib/content';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.4 } }),
};

export default function NotesList({ notes }: { notes: Note[] }) {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <ArrowLeft size={14} /> Back
        </Link>
      </motion.div>

      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>Notes</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Quick notes, TILs, and atomic ideas — things I want to remember.</p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {notes.map((note, i) => (
          <motion.div key={note.slug} custom={2 + i} variants={fadeUp} initial="hidden" animate="visible">
            <article
              style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--border-light)',
                borderRadius: '12px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.background = '#fafafa';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-light)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <h2 style={{ fontSize: '0.975rem', fontWeight: 600, marginBottom: '0.35rem' }}>{note.title}</h2>
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
                    {note.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.7rem' }}>{t}</span>)}
                  </div>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{note.date}</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{note.content}</p>
            </article>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
