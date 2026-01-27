import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DirectorSection } from './components/DirectorSection';
import { Specialties } from './components/Specialties';
import { BeforeAfter } from './components/BeforeAfter';
import { SafetySystem } from './components/SafetySystem';
import { InteriorGallery } from './components/InteriorGallery';
import { Footer } from './components/Footer';
import { FloatingSocialBar } from './components/FloatingSocialBar';
import { ArrowUp } from 'lucide-react';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        {/* Increased scroll margin to compensate for larger header */}
        <section id="director" className="scroll-mt-32">
          <DirectorSection />
        </section>

        <section id="specialties" className="scroll-mt-32">
          <Specialties />
        </section>

        <section id="cases" className="scroll-mt-32">
          <BeforeAfter />
        </section>

        <section id="safety" className="scroll-mt-32">
          <SafetySystem />
        </section>

        <section id="interior" className="scroll-mt-32">
          <InteriorGallery />
        </section>
      </main>

      <Footer />

      {/* Floating Social Media Bar */}
      <FloatingSocialBar />

      {/* Floating Action Button - Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-garnet text-white p-3 rounded-full shadow-xl transition-all duration-300 z-50 hover:bg-garnet-light ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;