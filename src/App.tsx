import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';
import { StickyWhatsApp } from './components/StickyWhatsApp';

export default function App() {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGetStarted = () => {
    const el = document.getElementById('get-started');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-purple-200 selection:text-purple-950">
      {/* Dark Navy Header without logo icon */}
      <Navbar />

      {/* Main Flow: Top WhatsApp button removed per request; bottom CTA has the primary WhatsApp button */}
      <main className="flex-1">
        {/* 1. HOME / HERO (Top WhatsApp Button removed; Get Started & Explore Services buttons smoothly scroll) */}
        <Hero 
          onExploreServices={scrollToServices} 
          onGetStarted={scrollToGetStarted}
        />

        {/* 2. OUR SERVICES (Clean cards with icon, title, and short text only) */}
        <ServicesSection />

        {/* 3. ABOUT US (Points + Manager Aarthi card without contact buttons) */}
        <AboutSection />

        {/* 4. WHY CHOOSE US (4 clean cards) */}
        <WhyChooseUs />

        {/* 5. HOW IT WORKS (4 simple steps) */}
        <HowItWorks />

        {/* 6. GET STARTED / FINAL CTA (Bottom WhatsApp Button is here) */}
        <GetStarted onExploreServices={scrollToServices} />
      </main>

      {/* 7. FOOTER (No phone, no email, no address) */}
      <Footer />

      {/* 8. FLOATING STICKY SIDE BUTTON (Enlarged and positioned higher up per instruction) */}
      <StickyWhatsApp />
    </div>
  );
}
