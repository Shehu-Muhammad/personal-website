// components/projects/ProjectGrid.tsx
import Container from '@/components/layout/Container';
import ProjectCard from './ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectGrid() {
  return (
    <section className='bg-slate-900 py-20 text-white'>
      <Container>
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              tech={project.tech}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
