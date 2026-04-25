// components/services/ServicesHero.tsx
import Container from '@/components/layout/Container';

export default function ServicesHero() {
  return (
    <section className='bg-slate-950 py-20 text-white sm:py-24'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Services
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            Web development services for modern online presence
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8'>
            I build responsive websites and web experiences for individuals,
            creators, and small businesses looking for clean design, practical
            functionality, and a professional online presence.
          </p>
        </div>
      </Container>
    </section>
  );
}
