// components/projects/ProjectsHero.tsx
import Container from '@/components/layout/Container';

export default function ProjectsHero() {
  return (
    <section className='bg-slate-950 py-20 text-white sm:py-24'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Projects
          </p>

          <h1 className='mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
            Work I’ve built and continue to grow from
          </h1>

          <p className='mt-6 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8'>
            A collection of websites and web applications I’ve built to sharpen
            my skills, solve problems, and gain hands-on experience across
            frontend and full stack development.
          </p>
        </div>
      </Container>
    </section>
  );
}
