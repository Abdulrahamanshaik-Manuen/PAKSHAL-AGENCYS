import React from 'react';
import ebcoLogo from '../assets/ebco-logo.png';
import hettichLogo from '../assets/hettich-logo.png';
import godrejLogo from '../assets/godrej-logo.png';
import dorsetLogo from '../assets/dorset-logo.png';
import hafeleLogo from '../assets/hafele-logo.png';

export const Brands = () => {
  const brandLogos = [
    { name: 'Ebco', src: ebcoLogo, url: 'https://www.ebco.in' },
    { name: 'Hettich', src: hettichLogo, url: 'https://www.hettich.com' },
    { name: 'Godrej', src: godrejLogo, url: 'https://www.godrej.com' },
    { name: 'Dorset', src: dorsetLogo, url: 'https://www.dorsetindia.com' },
    { name: 'Häfele', src: hafeleLogo, url: 'https://www.hafeleindia.com' }
  ];

  // Duplicate the brand list to create a seamless looping marquee
  const marqueeLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section id="brands" className="py-10 bg-[#fbfbfb] border-y border-slate-100 select-none overflow-hidden w-full text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8">

        {/* Header Title */}
        <div className="flex items-center justify-center gap-3 w-full max-w-lg">
          <div className="hidden sm:block h-[1.5px] w-12 bg-slate-200 rounded-full" />
          <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-slate-800 text-center px-4">
            AUTHORIZED BRAND PARTNERS
          </h3>
          <div className="hidden sm:block h-[1.5px] w-12 bg-slate-200 rounded-full" />
        </div>

        {/* Marquee Container */}
        <div className="w-full overflow-hidden relative py-2">
          {/* Fading Gradients at the edges for premium look */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[#fbfbfb] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[#fbfbfb] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="animate-marquee flex gap-6 w-max">
            {marqueeLogos.map((brand, idx) => (
              <a
                key={idx}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[180px] sm:w-[200px] h-24 bg-white flex items-center justify-center rounded-2xl border border-slate-200/80 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.015)] hover:border-[#38a12c]/40 hover:-translate-y-0.5 transition-all duration-300 block"
              >
                <img
                  src={brand.src}
                  alt={`${brand.name} Logo`}
                  className="max-h-12 max-w-[85%] object-contain select-none mix-blend-multiply"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
