import React from 'react';

const partners = [
  { 
    name: "FIX", 
    url: "https://i.postimg.cc/8PKG5yv7/fix-logo-3.jpg",
    website: null 
  },
  { 
    name: "SIEGENIA", 
    url: "https://i.postimg.cc/0yhqGbcd/siegenia-logo.jpg",
    website: "https://www.siegenia.com/en" 
  },
  { 
    name: "ROTO", 
    url: "https://i.postimg.cc/MpSLzVPT/1200px-Roto-Frank-svg.png",
    website: "https://www.roto-frank.com/en/?lang=se"
  },
  { 
    name: "WINKHAUS", 
    url: "https://i.postimg.cc/0ys49DWz/1280px-Winkhaus-svg.png",
    website: "https://www.winkhaus.com/"
  },
  { 
    name: "HOPPE", 
    url: "https://i.postimg.cc/8zSYTMKs/Hoppe-AG-logo.png",
    website: "https://www.hoppe.com/se-sv/"
  }
];

export const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-zinc-400 font-semibold uppercase text-xs tracking-[0.3em] mb-2">Våra samarbetspartners</p>
          <h2 className="text-2xl font-semibold text-zinc-800 uppercase tracking-tighter">VI ANVÄNDER ENDAST ORIGINALDELAR</h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, index) => (
            <div key={index} className="group transition-all duration-300 hover:scale-110">
              {partner.website ? (
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block cursor-pointer"
                  title={`Besök ${partner.name}`}
                >
                  <img 
                    src={partner.url} 
                    alt={partner.name} 
                    className="h-10 md:h-14 w-auto object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply" 
                  />
                </a>
              ) : (
                <img 
                  src={partner.url} 
                  alt={partner.name} 
                  className="h-10 md:h-14 w-auto object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply" 
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};