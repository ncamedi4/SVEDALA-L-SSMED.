import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';
import { ContactPerson } from '../types';

const contacts: ContactPerson[] = [
  { name: 'Tommy', phone: '0708955030', displayPhone: '0708-95 50 30' },
  { name: 'Jonny', phone: '0708955025', displayPhone: '0708-95 50 25' },
];

interface HeaderProps {
  onHomeClick: () => void;
  onNavigate: (view: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ onHomeClick, onNavigate }) => {
  return (
    <header 
      className="fixed left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b top-[54px] md:top-[60px] py-3 md:py-4 border-zinc-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={onHomeClick}
            className="flex flex-col items-start group"
          >
            <span className="text-lg md:text-3xl font-bold text-frisab-dark tracking-tighter leading-none group-hover:text-frisab-blue transition-colors uppercase">
              SVEDALA LÅSSMED<span className="text-frisab-blue">.</span>
            </span>
            <span className="text-[8px] md:text-[9px] font-bold text-frisab-blue tracking-[0.3em] md:tracking-[0.4em] uppercase mt-0.5 md:mt-1">
              Lås & Säkerhetsbeslag
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-10">
            <button 
              onClick={() => onNavigate('service-4')}
              className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 hover:text-frisab-blue transition-colors border-r border-zinc-200 pr-8"
            >
              <ShieldCheck size={16} />
              Din Lokala Låssmed
            </button>
            
            {contacts.map((contact) => (
              <a
                key={contact.name}
                href={`tel:${contact.phone}`}
                className="group flex flex-col items-end"
              >
                <span className="text-[9px] font-semibold text-zinc-400 uppercase tracking-widest mb-0.5 group-hover:text-frisab-blue transition-colors">
                  {contact.name}
                </span>
                <span className="text-frisab-dark font-bold text-[14px] tracking-tight border-b-2 border-transparent group-hover:border-frisab-blue transition-all tabular-nums">
                  {contact.displayPhone}
                </span>
              </a>
            ))}
          </div>

          <div className="lg:hidden flex gap-2">
             {contacts.map((c) => (
               <a 
                 key={c.name}
                 href={`tel:${c.phone}`}
                 className="flex flex-col items-center justify-center"
                 title={`Ring ${c.name}`}
               >
                 <div className="bg-zinc-50 text-frisab-blue w-9 h-9 rounded-full flex items-center justify-center border border-zinc-200 shadow-sm">
                   <Phone size={14} fill="currentColor"/>
                 </div>
                 <span className="text-[7px] font-bold text-zinc-400 uppercase mt-1 tracking-tighter">{c.name}</span>
               </a>
             ))}
          </div>
        </div>
      </div>
    </header>
  );
};