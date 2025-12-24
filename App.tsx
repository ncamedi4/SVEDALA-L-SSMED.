import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AlertBanner } from './components/AlertBanner';
import { HardwareGallery } from './components/HardwareGallery';
import { ContactSection } from './components/ContactSection';
import { SecurityAdvice } from './components/SecurityAdvice';
import { AreaSection } from './components/AreaSection';
import { Footer } from './components/Footer';
import { ServiceDetail } from './components/ServiceDetail';

export type ViewState = 'home' | 'service-1' | 'service-2' | 'service-3' | 'service-4';

function App() {
  const [view, setView] = useState<ViewState>('home');

  const navigateTo = (newView: ViewState) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-frisab-blue selection:text-white overflow-x-hidden">
      <AlertBanner />
      <Header onHomeClick={() => navigateTo('home')} onNavigate={navigateTo} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            
            {/* Områdes-info & Butiksnotis */}
            <section className="py-16 bg-zinc-50 border-b border-zinc-100">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-block bg-frisab-yellow/20 text-frisab-dark px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8 border border-frisab-yellow/30">
                    Viktig information
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-frisab-dark uppercase tracking-tight mb-6">
                    OBS! Vi har inte någon öppen butik, ring innan besök.
                  </h2>
                  <p className="text-zinc-500 text-lg leading-relaxed font-normal">
                    Vi åtager oss uppdrag i bland annat <span className="text-frisab-dark font-semibold">Malmö, Lund, Ystad, Simrishamn, Trelleborg, Bara och Klågerup</span>. 
                    Ibland har vi varit ända bort i Växjö. Frågan är fri...
                  </p>
                </div>
              </div>
            </section>

            <HardwareGallery />
            <SecurityAdvice />
            <AreaSection />
            <ContactSection />
          </>
        ) : (
          <div className="pt-32 md:pt-48">
            <ServiceDetail serviceId={view} onBack={() => navigateTo('home')} />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;