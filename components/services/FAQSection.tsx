// components/services/FAQSection.tsx
import Container from '@/components/layout/Container';

const faqs = [
  {
    question: 'How long does a project usually take?',
    answer:
      'Timelines depend on the size and complexity of the project. A simple site may take less time than a larger custom build with more pages or features.',
  },
  {
    question: 'Do you help with hosting and deployment?',
    answer:
      'Yes. I can help prepare the site for deployment and guide the process of getting it live.',
  },
  {
    question: 'Can you redesign an existing website?',
    answer:
      'Yes. If you already have a website, I can help improve the design, structure, and overall user experience depending on your goals.',
  },
  {
    question: 'Do you build custom features?',
    answer:
      'Yes. Custom functionality can be discussed based on the project scope, goals, and technical requirements.',
  },
  {
    question: 'Is the listed pricing fixed?',
    answer:
      'No. The listed pricing is a starting point. Final pricing depends on the scope, number of pages, features, revisions, and overall project needs.',
  },
];

export default function FAQSection() {
  return (
    <section className='bg-slate-900 py-20 text-white'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            FAQ
          </p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Common questions
          </h2>

          <p className='mt-6 text-base leading-7 text-slate-300'>
            Here are a few common questions about my services, process, and how
            projects are handled.
          </p>
        </div>

        <div className='mt-12 space-y-4'>
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'
            >
              <h3 className='text-lg font-semibold text-white'>
                {faq.question}
              </h3>

              <p className='mt-3 text-sm leading-7 text-slate-300'>
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
