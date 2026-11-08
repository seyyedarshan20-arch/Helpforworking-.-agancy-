import React from 'react';
import { ArrowRight, CheckCircle2, Award, Sparkles, Building2, ShieldCheck, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onGetStarted }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-14 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-[#f8f9fd] via-white to-white">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 -z-10 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Hero Left Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Manager pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-purple-100 text-slate-800 text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-slate-900">Manager: Aarthi</span>
              <span className="text-slate-300">|</span>
              <span className="text-purple-700 font-medium">Smart Financial Solutions</span>
            </div>

            {/* Main Brand Title & Subtitle */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0b1a30] font-display tracking-tight leading-[1.05]">
                HELP FOR WORK
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 bg-clip-text text-transparent font-display tracking-tight leading-snug">
                Smart Financial Solutions &amp; Professional Support
              </p>
            </div>

            {/* Short text strictly per brief */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Helping customers with financial-service processes, banking solutions, telecalling and customer support.
            </p>

            {/* Hero Action Buttons - Top WhatsApp button REMOVED per user instruction */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onGetStarted}
                className="px-8 py-4 rounded-2xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-base shadow-xl shadow-purple-700/25 hover:shadow-purple-700/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 group active:scale-[0.99]"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-8 py-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-purple-300 text-slate-800 font-bold text-base shadow-xs transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                <span>Explore Services</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Key trust indicators */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-200/90 text-slate-700 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>
                <span>Process Guidance</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-purple-50 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-purple-700 shrink-0" />
                </div>
                <span>Manager: Aarthi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-indigo-600 shrink-0" />
                </div>
                <span>Dedicated Support</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative gradient border */}
              <div className="relative rounded-[32px] bg-gradient-to-br from-purple-700/10 via-slate-100 to-indigo-700/10 p-2 shadow-2xl shadow-purple-950/5">
                <div className="rounded-[26px] bg-white p-6 sm:p-8 border border-slate-200/80 space-y-6">
                  
                  {/* Card Header with Manager callout */}
                  <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-3.5">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#0b1a30] via-purple-900 to-indigo-900 text-white flex items-center justify-center font-bold text-xl shadow-md shadow-purple-950/15">
                        A
                      </div>
                      <div>
                        <h4 className="font-extrabold text-slate-900 text-lg leading-tight font-display">Aarthi</h4>
                        <p className="text-xs font-bold text-purple-700">Manager — Help for Work</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Available
                    </span>
                  </div>

                  {/* Core Services Snapshot */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <span>Core Services</span>
                      <span className="text-purple-700">6 Categories</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-[#f8f9fd] border border-slate-100 hover:border-purple-200 hover:bg-purple-50/40 transition-all">
                        <span className="text-2xl">📈</span>
                        <div className="font-bold text-slate-900 text-xs mt-1.5">Mutual Funds</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Information &amp; assistance</div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#f8f9fd] border border-slate-100 hover:border-purple-200 hover:bg-purple-50/40 transition-all">
                        <span className="text-2xl">💰</span>
                        <div className="font-bold text-slate-900 text-xs mt-1.5">Loan Services</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Process guidance</div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#f8f9fd] border border-slate-100 hover:border-purple-200 hover:bg-purple-50/40 transition-all">
                        <span className="text-2xl">🏦</span>
                        <div className="font-bold text-slate-900 text-xs mt-1.5">Banking Process</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Support &amp; applications</div>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-[#f8f9fd] border border-slate-100 hover:border-purple-200 hover:bg-purple-50/40 transition-all">
                        <span className="text-2xl">📞</span>
                        <div className="font-bold text-slate-900 text-xs mt-1.5">Customer Support</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Professional outbound</div>
                      </div>
                    </div>
                  </div>

                  {/* Reassuring Corporate Card */}
                  <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-indigo-50/50 p-4 border border-purple-100 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
                    <Award className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                    <span>
                      Our aim is to make the customer journey simple through clear communication, proper guidance and responsive support.
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
