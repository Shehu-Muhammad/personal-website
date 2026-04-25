import ServicesHero from '@/components/services/ServicesHero';
import PricingCards from '@/components/services/PricingCards';
import ProcessSection from '@/components/services/ProcessSection';
import FAQSection from '@/components/services/FAQSection';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <PricingCards />
      <ProcessSection />
      <FAQSection />
      <ServicesCTA />
    </>
  );
}
