import React from 'react';
import { Map } from 'lucide-react';

export const AreaSection: React.FC = () => {
  return (
    <section className="py-12 bg-zinc-100 border-y border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-4 text-frisab-blue">
          <Map size={24} />
          <h2 className="text-xl font-semibold uppercase tracking-tight">Vi hjälper kunder i hela Skåne</h2>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto font-normal">
          Vi tar uppdrag i bland annat <span className="text-frisab-dark font-semibold">Svedala, Bara, Klågerup, Malmö, Lund, Trelleborg, Ystad och Simrishamn</span>. Vid behov utför vi även arbeten längre bort.
        </p>
      </div>
    </section>
  );
};