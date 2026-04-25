// components/services/ProcessSection.tsx
import Container from '@/components/layout/Container';

const steps = [
  {
    title: 'Discovery',
    description:
      'We discuss your goals, audience, and what you need the website or web experience to accomplish.',
  },
  {
    title: 'Planning',
    description:
      'I organize the structure, content direction, and overall approach before development begins.',
  },
  {
    title: 'Development',
    description:
      'I build the site with responsive design, clean layout, and practical functionality based on the agreed scope.',
  },
  {
    title: 'Review & Revisions',
    description:
      'You review the work, share feedback, and I make agreed revisions to refine the final result.',
  },
  {
    title: 'Launch',
    description:
      'Once everything is ready, I help prepare the project for deployment and final delivery.',
  },
];

export default function ProcessSection() {
  return (
    <section className='bg-slate-950 py-20 text-white'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Process
          </p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            What working together looks like
          </h2>

          <p className='mt-6 text-base leading-7 text-slate-300'>
            A simple process helps keep each project organized, collaborative,
            and focused on delivering a polished final result.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5'>
          {steps.map((step, index) => (
            <article
              key={step.title}
              className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'
            >
              <p className='text-sm font-medium uppercase tracking-[0.15em] text-slate-400'>
                Step {index + 1}
              </p>

              <h3 className='mt-3 text-xl font-semibold text-white'>
                {step.title}
              </h3>

              <p className='mt-4 text-sm leading-7 text-slate-300'>
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
