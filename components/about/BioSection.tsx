// components/about/BioSection.tsx
import Container from '@/components/layout/Container';

export default function BioSection() {
  return (
    <section className='bg-slate-900 py-20 text-white'>
      <Container>
        <div className='grid items-center gap-10 md:grid-cols-2 md:gap-14'>
          <div className='flex justify-center md:justify-start'>
            <div className='flex h-[320px] w-full max-w-sm items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-2xl backdrop-blur'>
              <div>
                <p className='text-sm uppercase tracking-[0.2em] text-slate-400'>
                  Profile Photo
                </p>
                <p className='mt-3 text-lg font-semibold text-white'>
                  Add your photo here
                </p>
              </div>
            </div>
          </div>

          <div className='max-w-2xl'>
            <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
              My Journey
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Building my path in software development
            </h2>

            <div className='mt-6 space-y-5 text-base leading-7 text-slate-300'>
              <p>
                My journey into software development started with a growing
                interest in building things for the web and turning ideas into
                experiences people can actually use. Over time, that interest
                grew into a deeper focus on creating responsive, user-friendly
                websites and applications that balance design, functionality,
                and performance.
              </p>

              <p>
                As I’ve continued learning and building, I’ve worked with
                technologies across both the frontend and backend, expanding my
                skills in JavaScript, React, Node.js, databases, and modern web
                development tools. I enjoy the process of solving problems,
                improving user experience, and constantly growing as a developer
                through hands-on projects.
              </p>

              <p>
                I’m focused on continuing to grow as a full stack developer,
                taking on meaningful work, and building digital products that
                are both useful and well-crafted.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
