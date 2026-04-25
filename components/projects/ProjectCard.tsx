// components/projects/ProjectCard.tsx
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
  tech: string[];
};

export default function ProjectCard({
  title,
  description,
  image,
  githubUrl,
  liveUrl,
  tech,
}: ProjectCardProps) {
  return (
    <article className='overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur'>
      <div className='flex h-52 items-center justify-center bg-slate-900 text-slate-400'>
        <span className='text-sm'>Project Image</span>
      </div>

      <div className='p-6'>
        <h3 className='text-xl font-semibold text-white'>{title}</h3>

        <p className='mt-3 text-sm leading-7 text-slate-300'>{description}</p>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tech.map((item) => (
            <span
              key={item}
              className='rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300'
            >
              {item}
            </span>
          ))}
        </div>

        <div className='mt-6 flex flex-wrap gap-3'>
          <Link
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200'
          >
            GitHub
          </Link>

          <Link
            href={liveUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10'
          >
            Live Demo
          </Link>
        </div>
      </div>
    </article>
  );
}
