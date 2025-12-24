import React from 'react';
import { ArrowLeft, CheckCircle, ShieldCheck, Key, Hammer, GlassWater, AlertCircle } from 'lucide-react';
import { ViewState } from '../App';

interface Props {
  serviceId: ViewState;
  onBack: () => void;
}

interface ServiceDetailInfo {
  title: string;
  heroImage: string;
  description: string;
  points: string[];
  detailedText: string;
  extraNote?: string;
  icon: React.ReactNode;
}

const serviceData: Record<string, ServiceDetailInfo> = {
  'service-1': {
    title: 'Glasmästeri',
    heroImage: 'https://i.postimg.cc/rmmzddmy/Header-Image.png',
    description: 'Vi utför professionella reparationsglasningar, byte av isolerglaspaket och omkittning. Vi är din expert på allt som rör glas i hemmet eller på företaget.',
    points: [
      'Reparationsglasningar & omkittning.',
      'Byte av isolerglaspaket (även Velux).',
      'Special- & ornamentglas (råglas, frostat m.m.).',
      'Plastglas: Akrylplast (Plexiglas) & Polykarbonat.',
      'Spillbitar på lager från 100:-.'
    ],
    detailedText: 'Vid storm- och inbrottsskador utför vi även träarbete och målning, samt reparerar eller byter skadade fönsterbeslag. Vi utför även arbete med lås och säkerhetsbeslag i samband med glasskador för att säkerställa din trygghet.',
    extraNote: 'Jour kvällar och helger för akut täckning vid krossade rutor eller inbrottsskador.',
    icon: <GlassWater size={48} />
  },
  'service-2': {
    title: 'Fönsterrenovering',
    heroImage: 'https://i.postimg.cc/cJTr47s1/Fo-nsterrenovering.jpg',
    description: 'Behåll om möjligt dina äldre fönster. Oftast är träet av hög kvalitet och de bevarar husets unika karaktär. Dessutom slipper du stöket med ett fullständigt fönsterbyte.',
    points: [
      'Helrenovering från 950:- per båge.',
      'Spara pengar: Lämna/hämta själv på verkstaden.',
      'Lagning av rötskador & träskador.',
      'Nya persienner & fönbleck.',
      'Snickeri- & murningsarbete runt fönster.'
    ],
    detailedText: 'Vi erbjuder allt från enkel målning och omkittning till totalrenovering inklusive lagning av rötskador. Vi kan även fördela arbetet mellan oss och dig som kund. I samband med renovering fixar eller byter vi även beslag (även kulturbeslag).',
    extraNote: 'Välj det alternativ som passar dig bäst – från uppfräschning till totalrenovering.',
    icon: <Hammer size={48} />
  },
  'service-3': {
    title: 'Fönsterbeslag',
    heroImage: 'https://i.postimg.cc/855sFF5Q/La-s(Sa-kerhet.jpg',
    description: 'Hos oss hittar du ett av marknadens bredaste sortiment av beslag till både fönster och dörrar. Vi hjälper dig att hitta rätt del till rätt funktion.',
    points: [
      'Renoverade & nya kulturbeslag.',
      'Drei-kipp & spanjolettlåsningar.',
      'Säkerhetslösningar & inbrottsskydd.',
      'Reservdelar till de flesta märken.',
      'Installation & justering.'
    ],
    detailedText: 'Vi har delar till allt från gamla klassiska fönster till moderna konstruktioner. Om en spanjolett har gått sönder eller om du vill uppgradera säkerheten med godkända låsanordningar har vi expertisen och lagret för att hjälpa dig direkt.',
    icon: <Key size={48} />
  },
  'service-4': {
    title: 'Svedala Lås',
    heroImage: 'https://i.postimg.cc/855sFF5Q/La-s(Sa-kerhet.jpg',
    description: 'Svedala Lås är specialisten på dörrsäkerhet. Vi är din lokala låssmed som ser till att du sover gott om natten med godkända låssystem.',
    points: [
      'Installation av godkända låsklasser.',
      'Låsservice & cylinderbyten.',
      'Lika låsning (en nyckel till allt).',
      'Inbrottssäkring & säkerhetsbeslag.',
      'Akut jour dygnet runt.'
    ],
    detailedText: 'Vi arbetar med ledande fabrikat som ASSA, Dorma m.fl. och erbjuder helhetslösningar för både villan, lägenheten och kontoret. Kontakta oss för en kostnadsfri säkerhetsgenomgång.',
    icon: <ShieldCheck size={48} />
  }
};

export const ServiceDetail: React.FC<Props> = ({ serviceId, onBack }) => {
  const data = serviceData[serviceId];

  if (!data) return null;

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[250px] md:h-[450px] overflow-hidden">
        <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover grayscale-[0.2]" />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-white uppercase tracking-tighter mb-4">{data.title}</h1>
            <div className="w-16 md:w-20 h-1.5 md:h-2 bg-frisab-blue mx-auto"></div>
          </div>
        </div>
        <button 
          onClick={onBack}
          className="absolute top-6 left-4 md:top-10 md:left-12 bg-white/10 hover:bg-white/20 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-sm backdrop-blur-md flex items-center gap-2 transition-all font-bold text-[10px] md:text-xs uppercase tracking-widest border border-white/20"
        >
          <ArrowLeft size={16} /> Tillbaka
        </button>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            <div className="flex items-center gap-4 md:gap-6 text-frisab-blue">
               {React.cloneElement(data.icon as React.ReactElement, { size: 36 })}
            </div>
            <p className="text-lg md:text-2xl text-zinc-600 leading-relaxed font-medium italic">{data.description}</p>
            
            <div className="bg-zinc-50 p-6 md:p-10 border border-zinc-100 rounded-sm">
              <h3 className="text-[10px] font-bold text-frisab-dark uppercase mb-6 md:mb-8 border-b-2 border-frisab-blue/20 pb-2 tracking-[0.2em]">Våra tjänster inkluderar:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {data.points.map((point, i) => (
                  <li key={i} className="flex gap-3 md:gap-4 items-start">
                    <CheckCircle className="text-frisab-blue mt-1 shrink-0" size={18} />
                    <span className="text-zinc-700 font-normal text-sm md:text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-zinc max-w-none">
              <p className="text-zinc-600 text-base md:text-xl leading-relaxed whitespace-pre-line font-normal">{data.detailedText}</p>
            </div>

            {data.extraNote && (
              <div className="bg-frisab-yellow/10 border-l-4 md:border-l-8 border-frisab-yellow p-6 md:p-8 flex gap-4 md:gap-6 items-center rounded-r-sm">
                <AlertCircle className="text-frisab-dark shrink-0" size={20} md:size={24} />
                <p className="text-[10px] md:text-xs font-bold uppercase text-frisab-dark tracking-widest leading-snug">{data.extraNote}</p>
              </div>
            )}
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-zinc-900 text-white p-8 md:p-10 border-l-4 md:border-l-8 border-frisab-yellow shadow-2xl lg:sticky lg:top-48 rounded-r-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 uppercase leading-none italic text-frisab-yellow">Boka service</h3>
              <p className="mb-6 md:mb-8 text-zinc-400 text-sm md:text-base font-normal leading-relaxed">Vi ger dig rådgivning och kostnadsförslag anpassat efter dina fönster och din fastighet.</p>
              <div className="space-y-3 md:space-y-4">
                <a href="tel:0708955030" className="flex flex-col items-center justify-center bg-frisab-blue text-white py-4 md:py-5 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-blue-700 transition-colors rounded-sm">
                  <span className="opacity-50 text-[9px] mb-0.5 font-normal">Tommy</span>
                  0708-95 50 30
                </a>
                <a href="tel:0708955025" className="flex flex-col items-center justify-center bg-white text-black py-4 md:py-5 font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-zinc-100 transition-colors border-2 border-transparent rounded-sm">
                  <span className="opacity-50 text-[9px] mb-0.5 font-normal">Jonny (Jour)</span>
                  0708-95 50 25
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};