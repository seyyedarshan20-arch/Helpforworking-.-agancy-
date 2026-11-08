import React from 'react';
import { ShieldCheck, Layers, HeartHandshake, MessageCircle } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../constants';

const whyIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-purple-700" />,
  Layers: <Layers className="w-7 h-7 text-purple-700" />,
  HeartHandshake: <HeartHandshake className="w-7 h-7 text-purple-700" />,
  MessageCircle: <MessageCircle className="w-7 h-7 text-purple-700" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-[#f8f9fd] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider">
            Our Advantage
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0b1a30] font-display tracking-tight">
            Why Help for Work?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Professional Support, Multiple Services, Customer Focused and Easy Communication.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {WHY_CHOOSE_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 hover:border-purple-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_34px_rgba(109,40,217,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Index & Icon */}
                <div className="flex items-center justify-between mb-7">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 border border-purple-100/90 flex items-center justify-center shadow-xs">
                    {whyIconMap[item.icon]}
                  </div>
                  <span className="text-sm font-black text-slate-300 font-mono tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0b1a30] font-display mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-purple-700 font-bold">
                <span>Verified Standard</span>
                <span className="w-2 h-2 rounded-full bg-purple-600" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
