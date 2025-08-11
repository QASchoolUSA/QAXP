'use client'

import { useState } from 'react'
import Link from 'next/link'
import HybridBackground from './components/HybridBackground'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="relative min-h-screen">
      <div className="neon-grid opacity-70" />

      <header className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="logo-animated h-12 w-12 rounded-lg bg-black/60 flex flex-col items-center justify-center shadow-lg shadow-purple-500/50 transform hover:scale-105 transition-transform duration-300" style={{ boxShadow: '0 8px 25px rgba(122, 0, 255, 0.4), 0 4px 15px rgba(0, 229, 255, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)' }}>
             <span className="text-white font-bold text-xl leading-none" style={{ fontFamily: 'var(--font-impact)' }}>QA</span>
                <span className="text-white font-bold text-xl leading-none" style={{ fontFamily: 'var(--font-impact)' }}>XP</span>
           </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#services" className="hover:text-white transition">Services</a>
          <Link href="/work" className="hover:text-white transition">Work</Link>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        
        {/* Desktop CTA */}
        <a href="#contact" className="hidden md:block rounded-xl px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition">Get Proposal</a>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 group"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 flex flex-col items-center justify-center w-8 h-8 space-y-1"
            >
              <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-2"></span>
              <span className="block w-6 h-0.5 bg-white opacity-0"></span>
              <span className="block w-6 h-0.5 bg-white -rotate-45 -translate-y-2"></span>
            </button>
            
            <nav className="flex flex-col items-center space-y-6 text-xl">
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white transition glow">Services</a>
              <Link href="/work" onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white transition glow">Work</Link>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white transition glow">Contact</a>
            </nav>
            
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-6 py-3 text-lg font-medium bg-white/10 hover:bg-white/15 transition glow">Get Proposal</a>
          </div>
        </div>
      )}

      {/* Animated Background */}
      <HybridBackground />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 md:pt-24">
        <section className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-12 space-y-6">
             <h1 className="glow text-4xl md:text-6xl font-extrabold leading-tight">
               Futuristic Web Design, Marketing & SEO
             </h1>
             <p className="text-white/70 text-lg md:text-xl max-w-2xl">
               We craft hyper-visual, conversion-obsessed experiences. Neon aesthetics. Cyberpunk energy. Search engines can&apos;t ignore it. Neither will your customers.
             </p>
             <div className="flex flex-wrap gap-4">
               <a href="#contact" className="rounded-2xl px-6 py-3 bg-white/10 hover:bg-white/15 transition font-semibold">Start a Project</a>
               <Link href="/work" className="rounded-2xl px-6 py-3 bg-white/10 hover:bg-white/15 transition font-semibold">See Our Work</Link>
             </div>
             <div className="flex items-center gap-6 pt-2 text-white/60 text-sm">
               <span>Web Design</span>
               <span>Brand & Growth</span>
               <span>Technical SEO</span>
             </div>
           </div>

         </section>

        <section id="services" className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="neon-border rounded-2xl p-[1px]">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <h3 className="glow text-xl font-bold mb-2">Web Design</h3>
              <p className="text-white/70 mb-4">Immersive, high-performance sites with obsessive detail and motion.</p>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>Interactive 3D & micro-animations</li>
                <li>Responsive, accessible, blazing-fast</li>
                <li>CMS & eCommerce integrations</li>
              </ul>
            </div>
          </div>
          <div className="neon-border rounded-2xl p-[1px]">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <h3 className="glow text-xl font-bold mb-2">Marketing</h3>
              <p className="text-white/70 mb-4">Full-funnel strategies engineered for compounding ROI.</p>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>Conversion-focused landing systems</li>
                <li>Lifecycle & email automation</li>
                <li>Ads that actually convert</li>
              </ul>
            </div>
          </div>
          <div className="neon-border rounded-2xl p-[1px]">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <h3 className="glow text-xl font-bold mb-2">SEO</h3>
              <p className="text-white/70 mb-4">Technical SEO that makes algorithms and humans happy.</p>
              <ul className="text-white/70 space-y-2 text-sm">
                <li>Site architecture & Core Web Vitals</li>
                <li>Programmatic & schema automation</li>
                <li>Content engines that scale</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-20">
          <div className="neon-border rounded-2xl p-[1px] max-w-3xl">
            <div className="card-hover rounded-2xl bg-black/60 p-8">
              <h4 className="glow text-2xl font-bold mb-2">Let&apos;s build something iconic.</h4>
              <p className="text-white/70 mb-6">Tell us about your goals. We&apos;ll reply within 24 hours with a plan.</p>
              <form className="grid md:grid-cols-3 gap-4">
                <input className="rounded-xl bg-white/5 px-4 py-3 outline-none focus:bg-white/10 transition" placeholder="Your Name" />
                <input className="rounded-xl bg-white/5 px-4 py-3 outline-none focus:bg-white/10 transition" placeholder="Email" type="email" />
                <input className="rounded-xl bg-white/5 px-4 py-3 outline-none focus:bg-white/10 transition md:col-span-1" placeholder="Budget" />
                <textarea className="rounded-xl bg-white/5 px-4 py-3 outline-none focus:bg-white/10 transition md:col-span-3" placeholder="What are we building together?" rows={4} />
                <button className="neon-border rounded-xl px-6 py-3 bg-black/60 font-semibold md:col-span-3">Request Proposal</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 max-w-7xl mx-auto px-6 pb-10 text-white/50 text-sm">
        © {new Date().getFullYear()} QAXP. All rights reserved.
      </footer>
    </div>
  )
}
