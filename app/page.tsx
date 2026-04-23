import FeaturedProjects from '@/components/home/FeaturedProjects';
import Hero from '@/components/home/Hero';
import HomeCTA from '@/components/home/HomeCTA';
import IntroStrip from '@/components/home/IntroStrip';
import ServicesPreview from '@/components/home/ServicesPreview';
import TestimonialsPreview from '@/components/home/TestimonialsPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <FeaturedProjects />
      <ServicesPreview />
      <TestimonialsPreview />
      <HomeCTA />
    </>
  );
}
