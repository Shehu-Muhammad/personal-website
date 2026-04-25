// components/about/HobbiesSection.tsx
import Container from '@/components/layout/Container';

const hobbies = [
  {
    title: 'Gym',
    description:
      'Training helps me stay disciplined, consistent, and focused both in and out of work.',
  },
  {
    title: 'Movies',
    description:
      'I enjoy strong storytelling, memorable visuals, and the creativity behind great films.',
  },
  {
    title: 'Video Games',
    description:
      'Gaming is one of my favorite ways to relax, have fun, and appreciate interactive design.',
  },
  {
    title: 'Books',
    description:
      'Books give me a way to learn new ideas, explore different perspectives, and keep growing.',
  },
];

export default function HobbiesSection() {
  return (
    <section className='bg-slate-900 py-20 text-white'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Outside of Work
          </p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            The interests that keep me inspired
          </h2>

          <p className='mt-6 text-base leading-7 text-slate-300'>
            Outside of software development, these are a few of the things I
            enjoy that help me stay balanced, motivated, and creative.
          </p>
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {hobbies.map((hobby) => (
            <article
              key={hobby.title}
              className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'
            >
              <h3 className='text-xl font-semibold text-white'>
                {hobby.title}
              </h3>

              <p className='mt-4 text-sm leading-7 text-slate-300'>
                {hobby.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
