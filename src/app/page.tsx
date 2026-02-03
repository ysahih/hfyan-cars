import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CarGallery } from '@/components/CarGallery';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Header />
      <main>
        <Hero />
        <CarGallery />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
