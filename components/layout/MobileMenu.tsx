// components/layout/MobileMenu.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navLinks';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className='md:hidden'>
      <div
        className='fixed inset-0 z-40 bg-black/60'
        onClick={onClose}
        aria-hidden='true'
      />

      <div className='absolute left-0 top-full z-50 w-full border-b border-white/10 bg-slate-950 px-4 py-4 shadow-lg'>
        <div className='flex flex-col gap-2'>
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href='/contact'
            onClick={onClose}
            className='mt-2 rounded-full bg-white px-4 py-2 text-center text-sm font-medium text-slate-950 transition hover:bg-slate-200'
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
