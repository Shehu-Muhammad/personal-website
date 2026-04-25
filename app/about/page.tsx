import AboutCTA from '@/components/about/AboutCTA';
import AboutHero from '@/components/about/AboutHero';
import BioSection from '@/components/about/BioSection';
import HobbiesSection from '@/components/about/HobbiesSection';
import SkillsSection from '@/components/about/SkillsSection';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BioSection />
      <SkillsSection />
      <HobbiesSection />
      <AboutCTA />
    </>
  );
}
