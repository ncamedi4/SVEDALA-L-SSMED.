import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare, MapPin, Clock, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'lås',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tack ${formData.name}! Vi återkommer till dig gällande ditt ärende.`);
  };

  return (
    <section className="py-16 md:py-28 bg-white text-zinc-900" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
          
          <div className="lg:sticky lg:top-48">
            <span className="text-[10px] md:text-[11px] font-semibold text-frisab-blue uppercase tracking-[0.4em] md:tracking-[0.5em] block mb-3 md:mb-4">Kontaktuppgifter</span>
            <h2 className="text-3xl md:text-6xl font-bold text-frisab-dark mb-8 md:mb-12 uppercase tracking-tighter leading-none italic">KONTAKTA OSS<span className="text-frisab-blue">.</span></h2>
            
            <div className="space-y-6 md:space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                <div className="bg-zinc-50 p-6 md:p-8 border border-zinc-100 group transition-all hover:bg-white hover:shadow-lg rounded-sm">
                  <h3 className="font-bold uppercase tracking-widest text-[9px] text-zinc-400 mb-2 md:mb-3 flex items-center gap-2">
                    <MapPin size={12} className="text-frisab-blue" /> Adress
                  </h3>
                  <p className="text-base md:text-lg font-medium leading-tight text-zinc-800">
                    Smedgatan 1<br />
                    233 51 Svedala<br />
                    <span className="text-[10px] md:text-xs text-zinc-400 mt-1 block uppercase font-bold tracking-tighter">(Östra industriområdet)</span>
                  </p>
                </div>

                <div className="bg-zinc-50 p-6 md:p-8 border border-zinc-100 group transition-all hover:bg-white hover:shadow-lg rounded-sm">
                  <h3 className="font-bold uppercase tracking-widest text-[9px] text-zinc-400 mb-2 md:mb-3 flex items-center gap-2">
                    <Clock size={12} className="text-frisab-yellow" /> Notis
                  </h3>
                  <p className="text-xs md:text-sm font-bold leading-tight text-zinc-800 uppercase italic">
                    Vi har ingen öppen butik – Ring innan besök.
                  </p>
                </div>
              </div>

              <div className="bg-frisab-blue/5 p-6 md:p-8 border-l-4 border-frisab-blue rounded-r-sm">
                <h3 className="font-bold uppercase tracking-widest text-[9px] text-frisab-blue mb-3 md:mb-4 flex items-center gap-2">
                  <Mail size={12} /> Förfrågningar via e-post
                </h3>
                <a href="mailto:frisab2@gmail.com" className="text-lg md:text-xl font-bold text-frisab-dark hover:text-frisab-blue transition-colors break-words">
                  frisab2@gmail.com
                </a>
                <p className="text-[10px] text-zinc-400 mt-2 font-bold uppercase tracking-tighter">Glöm ej ange ert telefonnummer.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a href="tel:0708955030" className="flex-1 bg-zinc-900 text-white p-5 md:p-6 transition-all hover:bg-frisab-blue group rounded-sm shadow-lg">
                     <p className="text-zinc-500 font-bold uppercase text-[9px] mb-1 tracking-widest group-hover:text-white/70 transition-colors">Tommy</p>
                     <p className="text-lg md:text-xl font-bold tracking-tighter tabular-nums">0708-95 50 30</p>
                  </a>
                  <a href="tel:0708955025" className="flex-1 bg-zinc-900 text-white p-5 md:p-6 transition-all hover:bg-frisab-blue group rounded-sm shadow-lg">
                     <p className="text-zinc-500 font-bold uppercase text-[9px] mb-1 tracking-widest group-hover:text-white/70 transition-colors">Jonny (Jour)</p>
                     <p className="text-lg md:text-xl font-bold tracking-tighter tabular-nums">0708-95 50 25</p>
                  </a>
              </div>
            </div>
          </div>

          <div className="bg-white border border-zinc-100 p-6 md:p-12 shadow-2xl relative lg:mt-6 rounded-sm">
            <div className="absolute top-0 right-8 md:right-14 w-12 md:w-20 h-1 md:h-1.5 bg-frisab-blue"></div>
            <div className="mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-frisab-dark leading-none italic">OFFERTFÖRFRÅGAN</h3>
              <p className="text-zinc-400 text-[10px] md:text-sm mt-2 md:mt-3 font-bold uppercase tracking-[0.2em]">Vi återkommer så snart vi kan</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase text-zinc-400 tracking-widest flex items-center gap-2">
                    <User size={10} /> Namn
                  </label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-zinc-50 border border-zinc-100 p-3 md:p-4 text-sm md:text-base focus:bg-white focus:border-frisab-blue outline-none transition-all rounded-sm"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-1 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-bold uppercase text-zinc-400 tracking-widest flex items-center gap-2">
                    <Phone size={10} /> Telefon (Obligatoriskt)
                  </label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-zinc-50 border border-zinc-100 p-3 md:p-4 text-sm md:text-base focus:bg-white focus:border-frisab-blue outline-none transition-all rounded-sm"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Ärende</label>
                <div className="relative">
                  <select 
                    className="w-full bg-zinc-50 border border-zinc-100 p-3 md:p-4 text-sm md:text-base focus:bg-white outline-none appearance-none cursor-pointer rounded-sm"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="lås">Lås & Säkerhet</option>
                    <option value="cylinder">Låscylinder / Cylinderbyte</option>
                    <option value="beslag">Fönsterbeslag</option>
                    <option value="jour">Akut Låsöppning / Jour</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                    <Send size={14} className="rotate-45" />
                  </div>
                </div>
              </div>

              <div className="space-y-1 md:space-y-2">
                <label className="text-[9px] md:text-[10px] font-bold uppercase text-zinc-400 tracking-widest flex items-center gap-2">
                  <MessageSquare size={10} /> Meddelande
                </label>
                <textarea 
                  rows={4}
                  className="w-full bg-zinc-50 border border-zinc-100 p-3 md:p-4 text-sm md:text-base focus:bg-white focus:border-frisab-blue outline-none transition-all resize-none rounded-sm"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-frisab-blue hover:bg-zinc-900 text-white py-4 md:py-5 font-bold uppercase text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] transition-all flex items-center justify-center gap-2 md:gap-3 shadow-lg rounded-sm"
              >
                SKICKA MEDDELANDE <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};