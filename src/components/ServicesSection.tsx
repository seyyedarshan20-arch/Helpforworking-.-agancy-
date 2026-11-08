import React from 'react';
import { SERVICES } from '../constants';

const serviceIcons: Record<string, string> = {
  'mutual-funds': '📈',
  'loan-services': '💰',
  'banking-process': '🏦',
  'credit-card-services': '💳',
  'telecalling-customer-support': '📞',
  'financial-services': '✨',
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#f8f9fd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header exactly matching reference */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0b1a30] font-display tracking-tight">
            Our Services
          </h2>
          <p className="text-base sm:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            Professional assistance for customers and businesses.
          </p>
        </div>

        {/* 6 Rounded Service Cards Grid - clean, exactly like the screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const icon = serviceIcons[service.id] || '💼';
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl p-8 sm:p-9 border border-slate-200/90 hover:border-purple-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(109,40,217,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-start"
              >
                {/* Top Icon Pill */}
                <div className="w-16 h-16 rounded-2xl bg-purple-50 group-hover:bg-purple-100/90 border border-purple-100/80 flex items-center justify-center text-3xl mb-6 transition-all shadow-xs group-hover:scale-105">
                  <span aria-hidden="true">{icon}</span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#0b1a30] group-hover:text-purple-900 font-display mb-3 transition-colors">
                  {service.title}
                </h3>

                {/* Card Short Description - exactly as seen in screenshots */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {service.shortDesc}
                </p>

                {/* Bottom subtle accent line */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-purple-700 transition-colors">
                  <span>Help for Work</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-purple-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
