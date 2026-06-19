import MainLayout from '../layouts/MainLayout';

import MusicHero from '../components/MusicHero';
import ArtistsSection from '../sections/ArtistsSection';

export default function Music() {
  return (
    <MainLayout title="Soundtrack | Yuval">
      <MusicHero />

      <ArtistsSection />
    </MainLayout>
  );
}
