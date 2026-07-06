import Hero from '@/components/sections/Hero';
import Heritage from '@/components/sections/Heritage';
import Collections from '@/components/sections/Collections';
import WhyDesigners from '@/components/sections/WhyDesigners';
import Projects from '@/components/sections/Projects';
import Sustainability from '@/components/sections/Sustainability';
import Testimonials from '@/components/sections/Testimonials';
import TradeCTA from '@/components/sections/TradeCTA';
import StripeRule from '@/components/ui/StripeRule';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Heritage />
      <div className="section-pad py-0">
        <StripeRule />
      </div>
      <Collections />
      <WhyDesigners />
      <Projects />
      <Sustainability />
      <Testimonials />
      <TradeCTA />
    </>
  );
}
