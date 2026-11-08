import React from 'react';
import { Check, ShieldCheck, Award, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const points = [
    'Customer-focused service',
    'Clear communication',
    'Professional telecalling support',
    'Process guidance'
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* About Main Section */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            Who We Are
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0b1a30] font-display tracking-tight text-balance">
            About Help for Work
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-3xl">
            We aim to make financial processes easier to understand while providing dependable telecalling and customer-support services.
          </p>

          {/* Checklist with clean green checkmarks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {points.map((point, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#f8f9fd] border border-slate-200/80 hover:bg-purple-50/50 hover:border-purple-200 transition-colors shadow-xs"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-xs">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-bold text-slate-800 text-base">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Manager Card exactly matching Screenshot 1 but with high-end executive finish */}
        <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#f8f9fd] to-purple-50/40 rounded-[32px] p-8 sm:p-12 border border-slate-200 shadow-xl shadow-purple-950/5 space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-5">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-purple-700 tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Leadership &amp; Coordination</span>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Verified Manager
            </span>
          </div>
          
          <div className="space-y-1.5">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Manager
            </p>
            <h3 className="text-3xl sm:text-5xl font-black text-[#0b1a30] font-display tracking-tight">
              Aarthi
            </h3>
          </div>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal pt-1 max-w-2xl">
            Leading Help for Work with a focus on professional customer service, financial-process assistance and telecalling support.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              Personalized Attention
            </span>
            <span>•</span>
            <span>Direct Guidance</span>
            <span>•</span>
            <span>Responsive Resolution</span>
          </div>
        </div>

      </div>
    </section>
  );
};
