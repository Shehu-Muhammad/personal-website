// components/testimonials/TestimonialsHero.tsx
import Container from '@/components/layout/Container';

export default function TestimonialsHero() {
  return (
    <section className='bg-slate-950 py-20 text-white sm:py-24'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Testimonials
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            Feedback from clients and collaborators
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8'>
            This page is dedicated to verified feedback from people I’ve worked
            with, giving future clients and collaborators a better sense of what
            it’s like to work with me.
          </p>
        </div>
      </Container>
    </section>
  );
}
