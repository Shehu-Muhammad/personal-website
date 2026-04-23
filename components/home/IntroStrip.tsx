// components/home/IntroStrip.tsx
import Container from '@/components/layout/Container';

const introItems = [
  {
    title: 'Developer',
    description:
      'I build modern websites and web applications with responsive design and practical functionality.',
  },
  {
    title: 'Problem Solver',
    description:
      'I enjoy turning ideas into polished, user-friendly digital experiences that solve real needs.',
  },
  {
    title: 'Beyond Code',
    description:
      'Outside of development, I enjoy the gym, movies, video games, and books.',
  },
];

export default function IntroStrip() {
  return (
    <section className='border-t border-white/10 bg-slate-900 py-16 text-white'>
      <Container>
        <div className='grid gap-6 md:grid-cols-3'>
          {introItems.map((item) => (
            <div
              key={item.title}
              className='rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur'
            >
              <h2 className='text-lg font-semibold text-white'>{item.title}</h2>
              <p className='mt-3 text-sm leading-7 text-slate-300'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
