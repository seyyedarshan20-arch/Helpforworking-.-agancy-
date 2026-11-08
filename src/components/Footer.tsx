import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b1a30] text-white border-t border-slate-800/90 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Brand */}
        <div className="space-y-2">
          <h3 className="text-2xl font-black font-display tracking-tight text-white">
            HELP FOR WORK
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-medium tracking-wide">
            Financial Services • Banking • Telecalling • Customer Support
          </p>
        </div>

        {/* Links: Home | Services | About | Get Started */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-300">
          <a href="#home" className="hover:text-amber-400 transition-colors">
            Home
          </a>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <a href="#services" className="hover:text-amber-400 transition-colors">
            Services
          </a>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <a href="#about" className="hover:text-amber-400 transition-colors">
            About
          </a>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <a href="#get-started" className="hover:text-amber-400 transition-colors">
            Get Started
          </a>
        </nav>

        {/* Copyright notice - no phone, email, or address */}
        <p className="text-xs text-slate-500 font-normal pt-4 border-t border-slate-800/80">
          © 2026 Help for Work. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};
