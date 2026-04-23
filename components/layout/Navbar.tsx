// components/layout/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navLinks';
import Container from './Container';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur'>
      <Container>
        <nav className='flex h-16 items-center justify-between'>
          <Link
            href='/'
            className='text-lg font-semibold tracking-tight text-white transition hover:text-slate-300'
          >
            Shehu Muhammad
          </Link>

          <div className='hidden items-center gap-8 md:flex'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className='hidden md:block'>
            <Link
              href='/contact'
              className='rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-slate-200'
            >
              Contact Me
            </Link>
          </div>

          <button
            type='button'
            className='inline-flex items-center justify-center rounded-md p-2 text-white transition hover:bg-white/10 md:hidden'
            aria-label='Open menu'
          >
            <span className='block h-0.5 w-6 bg-white'></span>
          </button>
        </nav>
      </Container>
    </header>
  );
}
