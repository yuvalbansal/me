import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import ConstellationBackground from '../components/ConstellationBackground';
import { useEffect } from 'react';

export default function MainLayout({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <ConstellationBackground />

      <ScrollProgress />

      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}
