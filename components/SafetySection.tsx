import React from 'react';
import { ShieldAlert, CheckCircle } from 'lucide-react';

export const SafetySection: React.FC = () => {
  const tips = [
    'Ha aldrig ett vanligt vred innanför en glasruta.',
    'Satsa på godkända lås till dörrar, fönster och altandörrar.',
    'Låsbara handtag ökar säkerheten markant.',
    'Många försäkringsbolag kräver numera fönsterlås.'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-frisab-blue/5 rounded-xl p-8 border border-frisab-blue/10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-frisab-blue text-white p-5 rounded-full shrink-0">
              <ShieldAlert size={36} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-frisab-dark mb-3 uppercase tracking-tight">
                Tänk säkert – minska risken för inbrott
              </h2>
              <p className="text-gray-600 mb-5 font-normal text-sm">
                Små åtgärder kan göra stor skillnad för din trygghet och försäkringspremie.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <CheckCircle className="text-frisab-blue mt-1 shrink-0" size={14} />
                    <span className="text-gray-700 text-[11px] md:text-xs font-medium">{tip}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-white rounded border border-frisab-blue/10 text-center">
                 <p className="text-frisab-dark font-semibold text-xs">
                   Osäker på vad som gäller? <a href="tel:0708955030" className="text-frisab-blue underline font-normal">Ring oss för rådgivning.</a>
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};