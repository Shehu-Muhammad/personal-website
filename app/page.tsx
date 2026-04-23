import FeaturedProjects from '@/components/home/FeaturedProjects';
import Hero from '@/components/home/Hero';
import IntroStrip from '@/components/home/IntroStrip';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <FeaturedProjects />
    </>
  );
}
