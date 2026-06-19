import MainLayout from '../layouts/MainLayout';

import ThoughtsHero from '../components/ThoughtsHero';
import ThoughtsSection from '../sections/ThoughtsSection';

export default function Thoughts() {
  return (
    <MainLayout title="Thoughts | Yuval">
      <ThoughtsHero />

      <ThoughtsSection />
    </MainLayout>
  );
}
