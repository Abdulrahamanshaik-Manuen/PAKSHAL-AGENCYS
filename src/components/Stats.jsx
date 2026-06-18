import React from 'react';

export const Stats = () => {
  const statsList = [
    { 
      value: '15+', 
      label: 'Years Experience', 
      icon: (
        <svg className="w-9 h-9 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    { 
      value: '500+', 
      label: 'Business Clients', 
      icon: (
        <svg className="w-9 h-9 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      value: '100+', 
      label: 'Dealer Partners', 
      icon: (
        <svg className="w-9 h-9 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" />
        </svg>
      )
    },
    { 
      value: '10000+', 
      label: 'Products Delivered', 
      icon: (
        <svg className="w-9 h-9 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative z-30 px-4 sm:px-6">
      <section className="max-w-6xl mx-auto -mt-12 bg-[#f3e8c0] border border-[#7A5C12]/20 rounded-2xl shadow-[0_12px_36px_rgba(122,92,18,0.12)] py-6 sm:py-8 px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#7A5C12]/15">
          {statsList.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 px-2 sm:px-6 justify-center md:justify-start py-4 md:py-0">
              <div className="text-[#7A5C12] shrink-0">
                {stat.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl sm:text-2xl font-black text-[#071330] font-sans tracking-tight leading-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] text-slate-700 font-bold tracking-normal mt-1 leading-tight">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
