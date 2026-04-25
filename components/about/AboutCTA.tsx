// components/about/AboutCTA.tsx
import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function AboutCTA() {
  return (
    <section className='bg-slate-950 py-20 text-white'>
      <Container>
        <div className='rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur sm:px-10'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Next Step
          </p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Want to see more of what I build?
          </h2>

          <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300'>
            Explore my projects to see the work I’ve been building, or get in
            touch if you’d like to connect about an opportunity or project.
          </p>

          <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link
              href='/projects'
              className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200'
            >
              View Projects
            </Link>

            <Link
              href='/contact'
              className='inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
            >
              Contact Me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
