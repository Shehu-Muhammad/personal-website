// components/home/Hero.tsx
import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-slate-950 text-white'>
      <div className='absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950' />

      <Container className='relative'>
        <div className='grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 md:grid-cols-2 md:py-24'>
          <div className='max-w-2xl'>
            <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-300'>
              Full Stack Developer
            </p>

            <h1 className='mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl'>
              Shehu Muhammad
            </h1>

            <p className='mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8'>
              I build responsive websites and web applications with clean
              design, practical functionality, and user-focused experiences.
            </p>

            <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
              <Link
                href='/projects'
                className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200'
              >
                View Projects
              </Link>

              <Link
                href='/about'
                className='inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
              >
                About Me
              </Link>
            </div>
          </div>

          <div className='flex justify-center md:justify-end'>
            <div className='flex h-[320px] w-full max-w-md items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur'>
              <div className='text-center'>
                <p className='text-sm uppercase tracking-[0.2em] text-slate-400'>
                  Hero Visual
                </p>
                <p className='mt-3 text-lg font-semibold text-white'>
                  Add your photo, rotating images, or background media here
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
