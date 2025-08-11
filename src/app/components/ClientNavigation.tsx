'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClientNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1 group"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

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
    </>
  )
}