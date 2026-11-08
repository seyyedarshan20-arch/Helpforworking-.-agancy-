import React from 'react';
import { MessageSquare, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { openWhatsApp } from '../constants';

interface GetStartedProps {
  onExploreServices: () => void;
}

export const GetStarted: React.FC<GetStartedProps> = ({ onExploreServices }) => {
  return (
    <section id="get-started" className="py-20 md:py-32 bg-[#f8f9fd] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Luxury Container */}
        <div className="relative overflow-hidden rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#060f1c] via-[#0b1a30] to-[#14122e] text-white p-8 sm:p-16 lg:p-20 text-center space-y-8 shadow-2xl border border-slate-800">
          
          {/* Subtle Ambient Light Gradients */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-7 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Ready to Get Started?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
              Let's Work Together
            </h2>

            <p className="text-xl sm:text-2xl font-bold text-purple-200 tracking-tight text-balance">
              Professional Support. Simple Process. Better Experience.
            </p>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
              Whether you need information about our services or want to discuss a work opportunity, Manager Aarthi and our team are available to assist you.
            </p>

            {/* Bottom Primary Contact Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openWhatsApp("Hello Manager Aarthi, I am ready to get started with Help for Work.")}
                className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-extrabold text-base shadow-2xl shadow-purple-900/50 hover:shadow-purple-900/70 hover:scale-102 active:scale-98 transition-all duration-200 flex items-center justify-center gap-3"
              >
                <MessageSquare className="w-5 h-5 text-purple-200" />
                <span>WhatsApp Us</span>
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-white/10 hover:bg-white/15 text-slate-100 border border-white/20 font-bold text-base backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Direct WhatsApp Contact
              </span>
              <span>•</span>
              <span>Manager: Aarthi</span>
              <span>•</span>
              <span>Zero Hidden Charges</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
