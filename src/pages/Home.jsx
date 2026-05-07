import HeroSection from '../components/home/HeroSection';
import FeaturedDishes from '../components/home/FeaturedDishes';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import LocationsPreview from '../components/home/LocationsPreview';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedDishes />
      <WhyChooseUs />
      <Testimonials />
      <LocationsPreview />
      <CTABanner />
    </div>
  );
}