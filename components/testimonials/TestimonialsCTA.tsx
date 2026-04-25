// components/testimonials/TestimonialsCTA.tsx
import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function TestimonialsCTA() {
  return (
    <section className='bg-slate-950 py-20 text-white'>
      <Container>
        <div className='rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur sm:px-10'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Ready to Connect?
          </p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Let’s talk about your project or opportunity
          </h2>

          <p className='mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300'>
            If you’re interested in working together, need a website, or want to
            reach out about an opportunity, I’d be happy to connect.
          </p>

          <div className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link
              href='/contact'
              className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200'
            >
              Contact Me
            </Link>

            <Link
              href='/services'
              className='inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
            >
              View Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
