import Hero from './components/Hero';
import ServiceGallery from './components/ServiceGallery';
import AboutServices from './components/AboutServices';
import FeatureSection from './components/FeatureSection';
import Doctors from './components/Doctors';
import Testimonials from './components/Testimonials';
import Marquee from './components/Marquee';
import WellBeing from './components/WellBeing';
import MapSection from './components/MapSection';
import Contact from './components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceGallery />
      <AboutServices />
      <FeatureSection />
      <Doctors />
      <Testimonials />
      <Marquee />
      <WellBeing />
      <MapSection />
      <Contact />
    </>
  );
}
