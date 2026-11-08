import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { openWhatsApp } from '../constants';

export const StickyWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Service Information');

  const topics = [
    'Service Information',
    'Loan Services',
    'Mutual Funds',
    'Banking Process',
    'Credit Card Services',
    'Telecalling Support',
    'Work Opportunity'
  ];

  const handleStartChat = () => {
    openWhatsApp(`Hello Manager Aarthi, I would like assistance regarding: ${selectedTopic}.`);
    setIsOpen(false);
  };

  return (
    <aside 
      aria-label="WhatsApp quick contact" 
      className="fixed bottom-8 sm:bottom-12 right-5 sm:right-9 z-50 flex flex-col items-end pointer-events-auto"
    >
      {/* Floating Chat Modal Panel */}
      {isOpen && (
        <div 
          className="mb-4 w-[calc(100vw-2.5rem)] sm:w-96 max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-purple-100 animate-in slide-in-from-bottom-5 fade-in duration-200"
          style={{ boxShadow: '0 24px 50px -10px rgba(11, 26, 48, 0.28), 0 0 1px 1px rgba(109, 40, 217, 0.1)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3.5">
              <div className="relative">
                <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#0b1a30] via-purple-900 to-indigo-900 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-purple-950/20">
                  A
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base leading-tight flex items-center gap-2">
                  <span>Manager Aarthi</span>
                  <span className="inline-flex items-center text-[11px] bg-purple-50 text-purple-700 font-bold px-2 py-0.5 rounded-full border border-purple-100">
                    Official Support
                  </span>
                </h4>
                <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available on WhatsApp
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close message window"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="py-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Select your inquiry:
              </p>
              <span className="text-xs text-purple-700 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Quick Connect
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTopic(t)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left truncate transition-all duration-150 flex items-center justify-between gap-1.5 ${
                    selectedTopic === t
                      ? 'bg-purple-700 text-white shadow-md shadow-purple-700/25 ring-2 ring-purple-600/30'
                      : 'bg-slate-50 text-slate-700 hover:bg-purple-50 hover:text-purple-900 border border-slate-100'
                  }`}
                >
                  <span className="truncate">{t}</span>
                  {selectedTopic === t && <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={handleStartChat}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-2.5 transition-all active:scale-[0.99]"
            >
              <Send className="w-4 h-4" />
              <span>Start WhatsApp Chat with Aarthi</span>
              <ChevronRight className="w-4 h-4 opacity-80" />
            </button>
            <p className="text-[11px] text-center text-slate-400 font-medium">
              Direct connection • Instant response on WhatsApp
            </p>
          </div>
        </div>
      )}

      {/* Floating Side Button & Label - Enlarged and Higher Up */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0b1a30] text-white text-sm font-bold shadow-2xl hover:bg-slate-900 hover:scale-102 transition-all duration-200 border border-slate-700/80 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-wide text-slate-100">Chat with Manager Aarthi</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-xs font-extrabold uppercase tracking-wider">
              WhatsApp
            </span>
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white flex items-center justify-center shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 hover:scale-108 active:scale-95 transition-all duration-200"
          aria-label={isOpen ? "Close WhatsApp window" : "Open WhatsApp chat"}
        >
          {/* Subtle pulsating outer aura */}
          <span className="absolute -inset-1.5 rounded-full bg-emerald-500/30 animate-ping -z-10" />

          {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
          ) : (
            <MessageSquare className="w-7 h-7 sm:w-9 sm:h-9 stroke-[2.4]" />
          )}
        </button>
      </div>
    </aside>
  );
};
