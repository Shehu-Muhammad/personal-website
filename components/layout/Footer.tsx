// components/layout/Footer.tsx
import Link from 'next/link';
import Container from './Container';
import { navLinks } from '@/data/navLinks';

export default function Footer() {
  return (
    <footer className='border-t border-white/10 bg-slate-950 text-slate-300'>
      <Container>
        <div className='flex flex-col gap-10 py-10 md:flex-row md:items-start md:justify-between'>
          <div className='max-w-md'>
            <Link
              href='/'
              className='text-lg font-semibold tracking-tight text-white transition hover:text-slate-300'
            >
              Shehu Muhammad
            </Link>

            <p className='mt-3 text-sm leading-6 text-slate-400'>
              Full Stack Developer building responsive websites and web
              applications with clean design and practical functionality.
            </p>
          </div>

          <div>
            <h2 className='text-sm font-semibold uppercase tracking-wide text-white'>
              Quick Links
            </h2>

            <ul className='mt-3 space-y-2'>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className='text-sm text-slate-400 transition hover:text-white'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className='text-sm font-semibold uppercase tracking-wide text-white'>
              Connect
            </h2>

            <ul className='mt-3 space-y-2 text-sm'>
              <li>
                <a
                  href='https://github.com/Shehu-Muhammad'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 transition hover:text-white'
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/shehu-muhammad'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 transition hover:text-white'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='mailto:shehuaamuhammad@gmail.com'
                  className='text-slate-400 transition hover:text-white'
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-white/10 py-4'>
          <p className='text-center text-xs text-slate-400'>
            © {new Date().getFullYear()} Shehu Muhammad. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
