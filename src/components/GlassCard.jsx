import React from 'react';

export const GlassCard = ({ title, children, className = '', headerAction, showGlow = true }) => {
  return (
    <div className={`group bg-slate-900/60 border border-white/5 backdrop-blur-md rounded-xl p-6 shadow-2xl transition-all duration-300 relative overflow-hidden z-10 hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-[0_12px_40px_rgba(139,92,246,0.15)] ${className}`}>
      {showGlow && (
        <div className="absolute -top-[50px] -right-[50px] w-[100px] h-[100px] rounded-full bg-brand-primary blur-[40px] opacity-15 pointer-events-none -z-10 transition-opacity duration-300 group-hover:opacity-30" />
      )}
      {(title || headerAction) && (
        <div className="mb-4 flex justify-between items-center">
          {title && <h3 className="text-lg font-semibold text-gray-100">{title}</h3>}
          {headerAction && <div className="text-sm">{headerAction}</div>}
        </div>
      )}
      <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
};
