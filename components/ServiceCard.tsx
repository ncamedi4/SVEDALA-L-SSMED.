import React from 'react';
import { ServiceItem } from '../types';
import { Plus } from 'lucide-react';

interface Props {
  item: ServiceItem;
  onReadMore: () => void;
}

export const ServiceCard: React.FC<Props> = ({ item, onReadMore }) => {
  return (
    <div className="group cursor-pointer" onClick={onReadMore}>
      <div className="bg-white p-4 pb-12 shadow-sm border border-zinc-100 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
        
        {/* Modern Image Container */}
        <div className="relative overflow-hidden aspect-[4/5] bg-zinc-100">
           <img 
             src={item.imageUrl} 
             alt={item.imageAlt}
             className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
           />
           <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Plus className="text-frisab-blue" size={20} />
           </div>
        </div>

        <div className="mt-8 px-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-1 bg-frisab-blue"></span>
            <h3 className="text-xl font-semibold text-frisab-dark uppercase tracking-tighter leading-none">
              {item.title}
            </h3>
          </div>
          
          <p className="text-zinc-500 font-normal text-sm leading-relaxed line-clamp-2">
            {item.description}
          </p>
          
          <div className="mt-6 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-300">Detaljer</span>
            <span className="w-8 h-px bg-zinc-100 group-hover:w-full group-hover:bg-frisab-blue transition-all duration-500"></span>
          </div>
        </div>
      </div>
    </div>
  );
};