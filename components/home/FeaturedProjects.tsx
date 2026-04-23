// components/home/FeaturedProjects.tsx
import Link from 'next/link';
import Container from '@/components/layout/Container';
import { projects } from '@/data/projects';

const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3);

export default function FeaturedProjects() {
  return (
    <section className='bg-slate-950 py-16 text-white'>
      <Container>
        <div className='mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div className='max-w-2xl'>
            <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
              Featured Projects
            </p>
            <h2 className='mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              A few projects I’ve built
            </h2>
            <p className='mt-4 text-base leading-7 text-slate-300'>
              Here are some of the projects I’ve worked on to sharpen my skills,
              solve problems, and build real-world experience.
            </p>
          </div>

          <Link
            href='/projects'
            className='inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10'
          >
            View All Projects
          </Link>
        </div>

        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className='overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur'
            >
              <div className='flex h-48 items-center justify-center bg-slate-900 text-slate-400'>
                <span className='text-sm'>Project Image</span>
              </div>

              <div className='p-6'>
                <h3 className='text-xl font-semibold text-white'>
                  {project.title}
                </h3>

                <p className='mt-3 text-sm leading-7 text-slate-300'>
                  {project.description}
                </p>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className='rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300'
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className='mt-6 flex gap-3'>
                  <a
                    href={project.githubUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200'
                  >
                    GitHub
                  </a>

                  <a
                    href={project.liveUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10'
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
