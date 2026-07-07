import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Collection from '@/components/sections/Collection';
import HartmannFeature from '@/components/sections/HartmannFeature';
import Availability from '@/components/sections/Availability';
import Services from '@/components/sections/Services';
import Inspiration from '@/components/sections/Inspiration';
import Materials from '@/components/sections/Materials';
import Timeline from '@/components/sections/Timeline';
import Sustainability from '@/components/sections/Sustainability';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Collection />
      <HartmannFeature />
      <Availability />
      <Services />
      <Inspiration />
      <Materials />
      <Timeline />
      <Sustainability />
      <Testimonials />
      <Contact />
    </>
  );
}
