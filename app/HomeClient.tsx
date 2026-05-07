'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, BookOpen, StickyNote } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';
import type { BlogPost, Note } from '@/lib/content';

const interests = [
  'Computer Vision',
  'AI Agents',
  'LLMs',
  'TinyML',
  'IoT',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function HomeClient({ recentPosts, recentNotes }: { recentPosts: BlogPost[], recentNotes: Note[] }) {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>

      {/* ── Hero ── */}
      <section style={{ paddingTop: '3rem', paddingBottom: '4rem', borderBottom: '1px solid var(--border-light)' }}>
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
          <p style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Hi, I&apos;m
          </p>
        </motion.div>

        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.15, marginBottom: '1.25rem' }}
        >
          Jasmine · Thanh Thuy
        </motion.h1>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '55ch', lineHeight: 1.7, marginBottom: '1.75rem' }}
        >
          I&apos;m a curious student exploring the world one idea at a time.
          My interests lie at the intersection of AI and hardware —
          especially Computer Vision, AI Agents, LLMs, TinyML, and IoT.
          This space is where I document projects, research, and everything I learn along the journey.
        </motion.p>

        {/* Interest Tags */}
        <motion.div
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}
        >
          {interests.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
          style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
        >
          {[
            { href: 'https://github.com/Thanhthuii24', icon: <GithubIcon size={15} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/thanh-thuy-luyen-838b57314/', icon: <LinkedinIcon size={15} />, label: 'LinkedIn' },
            { href: 'mailto:thui.thanhluyen@gmail.com', icon: <Mail size={15} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.45rem 0.9rem',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                transition: 'all 0.2s',
                fontWeight: 500,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.background = 'var(--accent-light)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {icon}{label}
            </a>
          ))}
        </motion.div>
      </section>

      {/* ── Recent Blog Posts ── */}
      <section style={{ paddingTop: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border-light)' }}>
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="visible"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <BookOpen size={18} style={{ color: 'var(--accent)' }} />
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Recent Posts</h2>
          </div>
          <Link
            href="/blog"
            style={{ fontSize: '0.85rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}
          >
            All posts <ArrowRight size={13} />
          </Link>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {recentPosts.map((post, i) => (
            <motion.div key={post.slug} custom={6 + i} variants={fadeUp} initial="hidden" animate="visible">
              <Link href={`/blog/${post.slug}`}>
                <div
                  style={{
                    padding: '1rem 1.25rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.background = 'var(--accent-light)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div>
                    <p style={{ fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.35rem' }}>{post.title}</p>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {post.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.72rem' }}>{t}</span>)}
                    </div>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{post.date}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Recent Notes ── */}
      <section style={{ paddingTop: '3rem' }}>
        <motion.div
          custom={9} variants={fadeUp} initial="hidden" animate="visible"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <StickyNote size={18} style={{ color: 'var(--accent)' }} />
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Recent Notes</h2>
          </div>
          <Link
            href="/notes"
            style={{ fontSize: '0.85rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}
          >
            All notes <ArrowRight size={13} />
          </Link>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {recentNotes.map((note, i) => (
            <motion.div key={note.slug} custom={10 + i} variants={fadeUp} initial="hidden" animate="visible">
              <Link href={`/notes/${note.slug}`}>
                <div
                  style={{
                    padding: '0.85rem 1.25rem',
                    border: '1px solid var(--border-light)',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.background = 'var(--accent-light)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-light)';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.9rem' }}>📝</span>
                    <p style={{ fontWeight: 500, fontSize: '0.9rem' }}>{note.title}</p>
                    {note.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.7rem' }}>{t}</span>)}
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{note.date}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
