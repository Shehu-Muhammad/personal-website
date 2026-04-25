// components/about/SkillsSection.tsx
import Container from '@/components/layout/Container';

const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Docker', 'Figma', 'Jira'],
  },
];

export default function SkillsSection() {
  return (
    <section className='bg-slate-950 py-20 text-white'>
      <Container>
        <div className='max-w-3xl'>
          <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
            Skills & Tech Stack
          </p>

          <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Technologies I use to build
          </h2>

          <p className='mt-6 text-base leading-7 text-slate-300'>
            These are the main languages, frameworks, and tools I use across
            frontend and backend development as I continue growing as a full
            stack developer.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'
            >
              <h3 className='text-xl font-semibold text-white'>
                {group.title}
              </h3>

              <div className='mt-4 flex flex-wrap gap-2'>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className='rounded-full border border-white/10 px-3 py-1 text-sm text-slate-300'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
