// components/home/ServicesPreview.tsx
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { services } from '@/data/services';

export default function ServicesPreview() {
  return (
    <section className='bg-slate-900 py-16 text-white'>
      <Container>
        <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-2xl'>
            <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
              Services
            </p>
            <h2 className='mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Ways I can help
            </h2>
            <p className='mt-4 text-base leading-7 text-slate-300'>
              I build modern, responsive websites for individuals, creators, and
              small businesses looking for a strong online presence.
            </p>
          </div>

          <Link
            href='/services'
            className='inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
          >
            View Services
          </Link>
        </div>

        <div className='grid gap-6 md:grid-cols-3'>
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
      </Container>
    </section>
  );
}
