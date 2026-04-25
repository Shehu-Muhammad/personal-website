// components/testimonials/TestimonialsGrid.tsx
import Container from '@/components/layout/Container';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Coming Soon',
    project: 'Verified Client Feedback',
    quote:
      'Client testimonials will be added here as projects are completed and feedback is collected through private review links.',
  },
  {
    name: 'Coming Soon',
    project: 'Project-Based Reviews',
    quote:
      'This section is reserved for real feedback from clients and collaborators to help future visitors understand what it is like to work with me.',
  },
];

export default function TestimonialsGrid() {
  return (
    <section className='bg-slate-900 py-20 text-white'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Verified Feedback
          </p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Testimonials from real work
          </h2>

          <p className='mt-6 text-base leading-7 text-slate-300'>
            Testimonials shown here are meant to come from real clients and
            collaborators through a controlled review process.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`${testimonial.name}-${index}`}
              name={testimonial.name}
              project={testimonial.project}
              quote={testimonial.quote}
            />
          ))}
        </div>

        <p className='mt-8 text-sm text-slate-400'>
          Reviews will be collected through private links to help keep this
          section trustworthy and free from fake submissions.
        </p>
      </Container>
    </section>
  );
}
