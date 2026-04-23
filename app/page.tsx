import FeaturedProjects from '@/components/home/FeaturedProjects';
import Hero from '@/components/home/Hero';
import IntroStrip from '@/components/home/IntroStrip';
import ServicesPreview from '@/components/home/ServicesPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <FeaturedProjects />
      <ServicesPreview />
    </>
  );
}
