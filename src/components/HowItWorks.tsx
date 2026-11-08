import React from 'react';
import { Search, Info, MessageSquare, CheckCircle } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

const stepIcons = [
  <Search key="1" className="w-6 h-6 text-purple-700" />,
  <Info key="2" className="w-6 h-6 text-purple-700" />,
  <MessageSquare key="3" className="w-6 h-6 text-purple-700" />,
  <CheckCircle key="4" className="w-6 h-6 text-purple-700" />,
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            Step by Step
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0b1a30] font-display tracking-tight">
            Simple Process
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Follow these 4 simple steps to connect and get guided assistance.
          </p>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#f8f9fd] rounded-3xl p-8 border border-slate-200/80 hover:border-purple-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(109,40,217,0.07)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step badge and icon */}
                <div className="flex items-center justify-between mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 flex items-center justify-center shadow-xs">
                    {stepIcons[idx]}
                  </div>
                  <span className="text-3xl font-black font-display text-slate-300">
                    {step.step}
                  </span>
                </div>

                {/* Step title */}
                <h3 className="text-xl font-bold text-[#0b1a30] font-display mb-3">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70 text-xs text-slate-400 font-bold flex items-center justify-between">
                <span>Step {step.step} of 04</span>
                <span className="text-purple-700">Active Flow</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
