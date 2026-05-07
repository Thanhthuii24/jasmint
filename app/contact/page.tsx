'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
};

const contacts = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'thui.thanhluyen@gmail.com',
    href: 'mailto:thui.thanhluyen@gmail.com',
    desc: 'Best for research inquiries or collaborations.',
  },
  {
    icon: <GithubIcon size={20} />,
    label: 'GitHub',
    value: 'Thanhthuii24',
    href: 'https://github.com/Thanhthuii24',
    desc: 'See what I\'m building.',
  },
  {
    icon: <LinkedinIcon size={20} />,
    label: 'LinkedIn',
    value: 'thanh-thuy-luyen',
    href: 'https://www.linkedin.com/in/thanh-thuy-luyen-838b57314/',
    desc: 'Professional updates and connections.',
  },
];

export default function ContactPage() {
  return (
    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          <ArrowLeft size={14} /> Back
        </Link>
      </motion.div>

      <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible" style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>Get in touch</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '50ch', lineHeight: 1.7 }}>
          I&apos;m always open to interesting conversations about AI research, collaborations, or just a good idea.
          Feel free to reach out through any of the channels below.
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px' }}>
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            custom={2 + i}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              padding: '1.25rem 1.5rem',
              border: '1px solid var(--border-light)',
              borderRadius: '12px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--accent)';
              e.currentTarget.style.background = 'var(--accent-light)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(99,102,241,0.1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border-light)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div style={{
              width: '40px', height: '40px',
              background: 'var(--accent-light)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--accent)',
              flexShrink: 0,
            }}>
              {c.icon}
            </div>
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.2rem' }}>{c.label}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '0.25rem' }}>{c.value}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{c.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.p
        custom={6} variants={fadeUp} initial="hidden" animate="visible"
        style={{ marginTop: '2.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}
      >
        I&apos;ll typically respond within a few days. ✉️
      </motion.p>
    </div>
  );
}
