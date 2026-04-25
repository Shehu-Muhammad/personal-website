// components/contact/ContactHero.tsx
import Container from '@/components/layout/Container';

export default function ContactHero() {
  return (
    <section className='bg-slate-950 py-20 text-white sm:py-24'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Contact
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            Let&apos;s connect
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8'>
            Have a project idea, freelance opportunity, collaboration, or job
            opportunity? Reach out and let&apos;s start a conversation.
          </p>
        </div>
      </Container>
    </section>
  );
}
