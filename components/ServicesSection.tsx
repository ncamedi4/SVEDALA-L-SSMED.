import React from 'react';
import { ServiceCard } from './ServiceCard';
import { ServiceItem } from '../types';
import { ViewState } from '../App';

const services: ServiceItem[] = [
  {
    id: 'service-1',
    title: 'Glasmästeri',
    description: 'Reparationsglasningar, byte av isolerglaspaket och omkittning. Vi säljer även plastglas och ornamentglas.',
    imageUrl: 'https://i.postimg.cc/rmmzddmy/Header-Image.png',
    imageAlt: 'Glasmästeri arbete'
  },
  {
    id: 'service-2',
    title: 'Renovering',
    description: 'Behåll dina äldre fönster. Vi utför allt från målning till helrenovering av bågar från 950:-.',
    imageUrl: 'https://i.postimg.cc/cJTr47s1/Fo-nsterrenovering.jpg',
    imageAlt: 'Fönsterrenovering process'
  },
  {
    id: 'service-3',
    title: 'Beslag & Lås',
    description: 'Stort lager av beslag – från kulturbeslag till moderna säkerhetslösningar. Reservdelar till Fix, Roto m.m.',
    imageUrl: 'https://i.postimg.cc/855sFF5Q/La-s(Sa-kerhet.jpg',
    imageAlt: 'Fönsterbeslag och lås'
  }
];

interface ServicesSectionProps {
  onNavigate: (view: ViewState) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-zinc-50" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-16">
          <span className="text-[11px] font-semibold text-frisab-blue uppercase tracking-[0.5em] block mb-4">Vår expertis</span>
          <h2 className="text-3xl md:text-5xl font-semibold text-frisab-dark mb-6 tracking-tighter uppercase leading-none">TJÄNSTER<span className="text-frisab-blue">.</span></h2>
          <p className="text-zinc-500 font-normal text-lg border-l-4 border-zinc-200 pl-6 leading-relaxed">
            Gediget glasmästeri och fönsterhantverk. Vi kombinerar traditionella metoder med moderna krav på isolering och säkerhet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map(service => (
            <ServiceCard 
              key={service.id} 
              item={service} 
              onReadMore={() => onNavigate(service.id as ViewState)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};