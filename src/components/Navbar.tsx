import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b1a30]/95 backdrop-blur-md border-b border-slate-800/80 text-white shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Brand Text without any logo badge/icon */}
        <a 
          href="#home" 
          className="text-2xl font-black tracking-tight text-white flex items-center group font-display"
        >
          <span className="tracking-tight">Help for</span>
          <span className="text-amber-400 ml-1.5 transition-colors group-hover:text-amber-300">Work</span>
        </a>

        {/* Clean Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#home" className="hover:text-amber-400 transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-amber-400 transition-colors">
            Our Services
          </a>
          <a href="#about" className="hover:text-amber-400 transition-colors">
            About Us
          </a>
          <a href="#why-choose-us" className="hover:text-amber-400 transition-colors">
            Why Choose Us
          </a>
          <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
            How It Works
          </a>
        </nav>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c1f3b] border-t border-slate-800/90 px-5 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-200">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Our Services
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              About Us
            </a>
            <a 
              href="#why-choose-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              Why Choose Us
            </a>
            <a 
              href="#how-it-works" 
              onClick={() => setMobileMenuOpen(false)}
              className="px-3.5 py-2.5 rounded-xl hover:bg-slate-800 hover:text-amber-400 transition-colors"
            >
              How It Works
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
