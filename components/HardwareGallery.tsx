import React from 'react';

const products = [
  {
    title: "Låscylindrar & Tillhållarlås",
    description: "Cylindrar i olika utföranden, även med lika låsning för hela hemmet.",
    imageUrl: "https://i.postimg.cc/xjw4PDDz/sakerhet2.png"
  },
  {
    title: "Säkerhetshandtag",
    description: "Låsbara handtag till fönster och glasdörrar för ökad inbrottssäkerhet.",
    imageUrl: "https://i.postimg.cc/FFMBx55J/sakerhet9.png"
  },
  {
    title: "Låskistor & Beslag",
    description: "Säkerhetsslutbleck, täckplåtar och kistor för både ytter- och innerdörrar.",
    imageUrl: "https://i.postimg.cc/855sFF5Q/La-s(Sa-kerhet.jpg"
  },
  {
    title: "Kulturbeslag",
    description: "Stort utbud av fönsterbeslag i äldre modell för bevarande av karaktär.",
    imageUrl: "https://i.postimg.cc/cJTr47s1/Fo-nsterrenovering.jpg"
  }
];

export const HardwareGallery: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="text-[10px] md:text-[11px] font-semibold text-frisab-blue uppercase tracking-[0.4em] md:tracking-[0.5em] block mb-3 md:mb-4">Vårt utbud</span>
          <h2 className="text-2xl md:text-5xl font-bold text-frisab-dark mb-4 md:mb-6 tracking-tighter uppercase leading-none italic">GODKÄNDA LÅSSYSTEM<span className="text-frisab-blue">.</span></h2>
          <p className="text-zinc-500 font-normal text-base md:text-lg border-l-4 border-zinc-200 pl-4 md:pl-6 leading-relaxed">
            Vi tillhandahåller allt från 9-tillhållarlås till moderna spanjolettlåsningar. Endast material från kända tillverkare.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {products.map((product, idx) => (
            <div key={idx} className="group flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="w-full aspect-square bg-zinc-50 border border-zinc-100 overflow-hidden mb-4 md:mb-6 transition-all group-hover:shadow-xl group-hover:border-frisab-blue/20 rounded-sm">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-base md:text-lg font-bold uppercase tracking-tight text-frisab-dark mb-2">{product.title}</h3>
              <p className="text-sm text-zinc-500 font-normal leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};