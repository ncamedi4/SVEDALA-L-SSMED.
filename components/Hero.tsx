import React from 'react';
import { Mail, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center bg-white overflow-hidden">
      {/* Background Image / Side Image - Reverted to the previous photo */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-7/12 z-0">
        <img 
          src="https://i.postimg.cc/855sFF5Q/La-s(Sa-kerhet.jpg" 
          alt="Svedala Låssmed" 
          className="w-full h-full object-cover opacity-90 grayscale-[0.3]"
        />
        {/* Gradient Overlay for seamless blend with white background */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 lg:via-white/20 to-transparent md:via-white/60"></div>
        {/* Mobile specific overlay for better contrast */}
        <div className="absolute inset-0 bg-white/40 lg:hidden"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-40 pb-20 md:pt-48 md:pb-24">
        <div className="max-w-2xl">
          {/* Top Tagline with blue dash */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 md:w-10 h-[2px] bg-frisab-blue"></span>
            <span className="text-[9px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-frisab-blue">Din lokala låssmed</span>
          </div>

          {/* Main Title - Responsive sizing */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-frisab-dark tracking-tighter leading-[0.9] uppercase mb-8 md:mb-10">
            SVEDALA<br />
            <span className="text-frisab-blue">LÅSSMED.</span>
          </h1>

          {/* Service Box with blue vertical line */}
          <div className="relative mb-10 md:mb-12 max-w-lg">
            <div className="border-l-[4px] border-frisab-blue pl-4 md:pl-6 py-1">
              <h2 className="text-frisab-blue text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-3 leading-none italic">
                Lås & Säkerhetsbeslag
              </h2>
              <p className="text-zinc-600 md:text-zinc-500 font-medium text-sm md:text-lg leading-relaxed tracking-tight">
                Vi erbjuder ett brett utbud av godkända lås och säkerhetsbeslag till dörrar och fönster från kända tillverkare som ASSA, FAS och Dorma.
              </p>
            </div>
          </div>

          {/* Buttons matching the original style */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a 
              href="tel:0708955030" 
              className="group flex items-center justify-center gap-3 bg-frisab-blue text-white px-6 md:px-8 py-3.5 md:py-4 font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-zinc-900 shadow-xl shadow-frisab-blue/20"
            >
              <span>RING TOMMY</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="#contact" 
              className="group flex items-center justify-center gap-3 bg-white text-frisab-dark px-6 md:px-8 py-3.5 md:py-4 font-bold text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-all hover:bg-zinc-50 border border-zinc-200 shadow-sm"
            >
              <Mail size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
              <span>SKICKA E-POST</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};