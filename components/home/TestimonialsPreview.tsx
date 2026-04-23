// components/home/TestimonialsPreview.tsx
import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function TestimonialsPreview() {
  return (
    <section className='bg-slate-950 py-16 text-white'>
      <Container>
        <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-2xl'>
            <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
              Testimonials
            </p>
            <h2 className='mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              What clients will say
            </h2>
            <p className='mt-4 text-base leading-7 text-slate-300'>
              Verified client feedback will be shared here as I complete more
              freelance and development work.
            </p>
          </div>

          <Link
            href='/testimonials'
            className='inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
          >
            View Testimonials
          </Link>
        </div>

        <div className='grid gap-6 md:grid-cols-2'>
          <article className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'>
            <p className='text-sm leading-7 text-slate-300'>
              Client testimonials will be added here as projects are completed
              and feedback is collected through verified review links.
            </p>
            <div className='mt-6'>
              <p className='text-sm font-semibold text-white'>Coming Soon</p>
              <p className='text-xs text-slate-400'>Verified Client Feedback</p>
            </div>
          </article>

          <article className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'>
            <p className='text-sm leading-7 text-slate-300'>
              This section is reserved for real feedback from clients and
              collaborators to help future visitors understand what it is like
              to work with me.
            </p>
            <div className='mt-6'>
              <p className='text-sm font-semibold text-white'>Coming Soon</p>
              <p className='text-xs text-slate-400'>Project-Based Reviews</p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
