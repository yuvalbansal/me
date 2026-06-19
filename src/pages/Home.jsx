import MainLayout from '../layouts/MainLayout';

import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import TimelineSection from '../sections/TimelineSection';
import CurrentFocusSection from '../sections/CurrentFocusSection';
import QuoteSection from '../sections/QuoteSection';
import ContactSection from '../sections/ContactSection';

export default function Home() {
  return (
    <MainLayout title="About | Yuval">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <CurrentFocusSection />
      <QuoteSection />
      <ContactSection />
    </MainLayout>
  );
}
