'use client';

import Link from 'next/link';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: '1px solid var(--border-light)',
      padding: '2.5rem 0',
      marginTop: '4rem',
      background: 'var(--bg-secondary)',
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        {/* Social Links */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <a
            href="https://github.com/Thanhthuii24"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <GithubIcon size={16} />
            GitHub
          </a>
          <span style={{ color: 'var(--border)', fontSize: '0.75rem' }}>·</span>
          <a
            href="https://www.linkedin.com/in/thanh-thuy-luyen-838b57314/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <span style={{ color: 'var(--border)', fontSize: '0.75rem' }}>·</span>
          <a
            href="mailto:thui.thanhluyen@gmail.com"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <Mail size={16} />
            Email
          </a>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          © {year} Jasmine · Thanh Thuy. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}
