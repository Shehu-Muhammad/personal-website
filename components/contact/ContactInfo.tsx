// components/contact/ContactInfo.tsx
import Container from '@/components/layout/Container';

export default function ContactInfo() {
  return (
    <section className='bg-slate-950 py-20 text-white'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Direct Contact
          </p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Other ways to reach me
          </h2>

          <p className='mt-6 text-base leading-7 text-slate-300'>
            You can also reach out directly through email or connect with me
            through my professional profiles.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-3'>
          <article className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'>
            <h3 className='text-xl font-semibold text-white'>Email</h3>
            <p className='mt-4 text-sm leading-7 text-slate-300'>
              shehuaamuhammad@gmail.com
            </p>
          </article>

          <article className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'>
            <h3 className='text-xl font-semibold text-white'>GitHub</h3>
            <p className='mt-4 text-sm leading-7 text-slate-300'>
              github.com/shehu-muhammad
            </p>
          </article>

          <article className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'>
            <h3 className='text-xl font-semibold text-white'>LinkedIn</h3>
            <p className='mt-4 text-sm leading-7 text-slate-300'>
              linkedin.com/in/shehu-muhammad
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
