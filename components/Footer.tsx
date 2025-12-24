import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-white font-black text-2xl mb-2 tracking-tighter uppercase">SVEDALA LÅSSMED</h3>
            <p className="text-zinc-500 text-sm font-normal">
              Smedgatan 1, 233 51 Svedala<br />
              Drivs av Fönsterrenovering i Skåne AB.
            </p>
          </div>
          <div className="text-center md:text-right">
             <div className="flex justify-center md:justify-end gap-6 mb-4">
               <span className="text-frisab-blue font-bold text-xs uppercase tracking-[0.2em]">ASSA</span>
               <span className="text-frisab-blue font-bold text-xs uppercase tracking-[0.2em]">DORMA</span>
               <span className="text-frisab-blue font-bold text-xs uppercase tracking-[0.2em]">FAS</span>
             </div>
             <p className="text-zinc-700 text-[10px] uppercase tracking-[0.3em] font-semibold">
               Allt material på denna webbplats är skyddat enligt lag om upphovsrätt.<br />
               © 2016 - {new Date().getFullYear()} Fönsterrenovering i Skåne AB.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};