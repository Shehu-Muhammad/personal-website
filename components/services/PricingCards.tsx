// components/services/PricingCards.tsx
import Container from '@/components/layout/Container';
import { services } from '@/data/services';

export default function PricingCards() {
  return (
    <section className='bg-slate-900 py-20 text-white'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Packages
          </p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Services tailored to different needs
          </h2>

          <p className='mt-6 text-base leading-7 text-slate-300'>
            Whether you need a simple landing page, a multi-page business site,
            or a more custom web experience, I offer flexible options depending
            on your goals and scope.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          {services.map((service) => (
            <article
              key={service.title}
              className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'
            >
              <p className='text-sm font-medium uppercase tracking-[0.15em] text-slate-400'>
                {service.price}
              </p>

              <h3 className='mt-3 text-xl font-semibold text-white'>
                {service.title}
              </h3>

              <p className='mt-4 text-sm leading-7 text-slate-300'>
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <p className='mt-8 text-sm text-slate-400'>
          Final pricing may vary depending on project scope, features, content,
          and revisions.
        </p>
      </Container>
    </section>
  );
}
