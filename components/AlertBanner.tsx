import React from 'react';
import { ShieldAlert } from 'lucide-react';

export const AlertBanner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-frisab-yellow h-[54px] md:h-[60px] flex items-center px-2 md:px-4 z-[70] border-b border-black/5 shadow-sm">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between md:justify-center gap-2 md:gap-8">
          <div className="flex items-center gap-2">
            <ShieldAlert size={14} className="text-black/80 animate-pulse shrink-0 block" />
            <span className="font-bold uppercase tracking-tight md:tracking-widest text-[9px] md:text-[13px] text-black/90 leading-tight">
              JOUR DYGNET RUNT <span className="hidden sm:inline">– KVÄLLAR & HELGER</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a 
              href="tel:0708955025" 
              className="group flex items-center gap-2 md:gap-3 text-black font-bold text-[10px] md:text-[13px] uppercase tracking-widest hover:opacity-80 transition-opacity"
            >
              <span className="bg-black text-frisab-yellow px-1.5 py-0.5 rounded-sm text-[8px] md:text-[11px]">RING</span>
              <span className="tabular-nums whitespace-nowrap">0708-95 50 25</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};