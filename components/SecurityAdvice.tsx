import React from 'react';
import { ShieldAlert, CheckCircle, Info } from 'lucide-react';

export const SecurityAdvice: React.FC = () => {
  const points = [
    'Ha aldrig ett vanligt vred innanför en glasruta.',
    'Vi säljer och monterar fönsterlås till alla fönstertyper.',
    'Låsbara handtag rekommenderas starkt till fönster och glasdörrar.',
    'Godkända lås kan sänka din försäkringspremie markant.'
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-frisab-yellow"></span>
              <span className="text-frisab-yellow text-xs font-bold uppercase tracking-[0.4em]">Säkerhetstips</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter uppercase mb-10 leading-none">
              TÄNK SÄKERT<span className="text-frisab-yellow">!</span>
            </h2>
            <p className="text-zinc-400 text-xl font-normal leading-relaxed mb-12">
              Fönster och altandörrar är ofta de svagaste punkterna i ett hem. Genom enkla åtgärder kan du höja säkerheten markant.
            </p>
            
            <div className="space-y-6">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-1 bg-zinc-800 p-1.5 rounded-full group-hover:bg-frisab-yellow group-hover:text-black transition-colors">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-lg text-zinc-200 font-normal">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-2xl">
              <div className="flex gap-6 items-start mb-8">
                <Info className="text-frisab-yellow shrink-0" size={32} />
                <p className="text-lg font-medium text-white italic">
                  "Även fönsterlås krävs numera av de flesta försäkringsbolag för att försäkringen ska gälla fullt ut."
                </p>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-10"></div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Kontakta oss för en genomgång av dina lås. Vi hjälper dig att uppfylla kraven och öka din trygghet.
              </p>
              <a 
                href="tel:0708955030" 
                className="block w-full text-center bg-white text-black py-5 font-bold uppercase text-xs tracking-widest hover:bg-frisab-yellow transition-all"
              >
                Rådgivning: 0708-95 50 30
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};