'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail, BookOpen, StickyNote, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon, ScholarIcon } from '@/components/SocialIcons';
import type { BlogPost, Note } from '@/lib/content';

import Image from 'next/image';
import avatarImg from '@/public/avatar.jpg';

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
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function HomeClient({ recentPosts, recentNotes }: { recentPosts: BlogPost[], recentNotes: Note[] }) {
  return (
    <div>

      {/* ── Hero ── */}
      <section style={{ background: 'var(--bg)', paddingTop: '5rem', paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <p style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Hi, I&apos;m
            </p>
          </motion.div>

          <motion.div
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}
          >
            <div style={{ flexShrink: 0, width: '64px', height: '64px', position: 'relative' }}>
              <Image 
                src={avatarImg} 
                alt="Jasmine Flower" 
                fill
                style={{ objectFit: 'cover', borderRadius: '50%' }}
                priority
              />
            </div>
            <h1 style={{ fontFamily: 'var(--font-cormorant), serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1.15 }}>
              Jasmine · Thanh Thuy
            </h1>
          </motion.div>

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
            style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}
          >
            {[
              { href: 'https://github.com/Thanhthuii24', icon: <GithubIcon size={18} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/thanh-thuy-luyen-838b57314/', icon: <LinkedinIcon size={18} />, label: 'LinkedIn' },
              { href: 'https://scholar.google.com/scholar?q=Thanhthuy+Luyen', icon: <ScholarIcon size={18} />, label: 'Google Scholar' },
              { href: 'mailto:thui.thanhluyen@gmail.com', icon: <Mail size={18} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                title={label}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  width: '40px', height: '40px',
                  border: '1px solid var(--border)',
                  borderRadius: '50%',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.background = 'var(--accent-light)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Recent Blog Posts ── */}
      <section style={{ background: '#edf1f5', paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <BookOpen size={18} style={{ color: 'var(--accent)' }} />
              <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Recent Blog</h2>
            </div>
            <Link
              href="/blog"
              style={{ fontSize: '0.85rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 500 }}
            >
              All posts <ArrowRight size={13} />
            </Link>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentPosts.map((post, i) => (
              <motion.div key={post.slug} custom={6 + i} variants={fadeUp} initial="hidden" animate="visible">
                <Link href={`/blog/${post.slug}`}>
                  <div
                    style={{
                      padding: '1.25rem 1.5rem',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      background: 'var(--bg-card)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{post.title}</p>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {post.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.72rem' }}>{t}</span>)}
                      </div>
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{post.date}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Notes ── */}
      <section style={{ background: 'var(--bg)', paddingTop: '4rem', paddingBottom: '4rem', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {recentNotes.map((note, i) => (
              <motion.div key={note.slug} custom={10 + i} variants={fadeUp} initial="hidden" animate="visible">
                <Link href={`/notes/${note.slug}`}>
                  <div
                    style={{
                      padding: '1.1rem 1.5rem',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem',
                      background: 'var(--bg-card)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span style={{ fontSize: '1rem' }}>📝</span>
                      <p style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{note.title}</p>
                      {note.tags.map(t => <span key={t} className="tag" style={{ fontSize: '0.7rem' }}>{t}</span>)}
                    </div>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{note.date}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Publications & Awards ── */}
      <section style={{ background: '#edf1f5', paddingTop: '4rem', paddingBottom: '5rem', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <motion.div
            custom={13} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}
          >
            <GraduationCap size={18} style={{ color: 'var(--accent)' }} />
            <h2 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Publications & Awards</h2>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                title: 'Research on Generative Model for Pulsed Eddy Current Testing',
                venue: 'Scientific Research, Phenikaa University',
                status: '4th Prize',
                year: '2026',
                type: 'award'
              },
              {
                title: 'Hardware-Algorithm Co-design for Tiny AI on UAVs',
                venue: 'Conference Paper',
                status: 'Under Review',
                year: '2026',
                type: 'paper'
              }
            ].map((pub, i) => (
              <motion.div key={pub.title} custom={14 + i} variants={fadeUp} initial="hidden" animate="visible">
                <div
                  style={{
                    padding: '1.25rem 1.5rem',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    transition: 'all 0.2s ease',
                    background: 'var(--bg-card)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.04)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div>
                    <h3 style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.4rem', lineHeight: 1.4, color: 'var(--text-primary)' }}>
                      {pub.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{pub.venue}</span>
                      <span style={{ color: 'var(--border-light)', fontSize: '0.75rem' }}>·</span>
                      <span style={{ 
                        fontSize: '0.7rem', 
                        padding: '0.15rem 0.5rem', 
                        borderRadius: '4px',
                        background: pub.type === 'award' ? 'rgba(180, 154, 122, 0.15)' : 'rgba(127, 146, 167, 0.15)',
                        color: pub.type === 'award' ? 'var(--accent-gold)' : 'var(--accent)',
                        fontWeight: 600
                      }}>
                        {pub.status}
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{pub.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
