import MainLayout from '../layouts/MainLayout';

import LibraryHero from '../components/LibraryHero';
import BooksSection from '../sections/BooksSection';

export default function Books() {
  return (
    <MainLayout title="Library | Yuval">
      <LibraryHero />
      <BooksSection />
    </MainLayout>
  );
}
