'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function WorkNavigation() {
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
        <div 
          className="md:hidden fixed inset-0 z-50"
          style={{
            backgroundColor: '#000000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          {/* Close Button */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              backgroundColor: '#ffffff',
              color: '#000000',
              border: 'none',
              borderRadius: '25px',
              fontSize: '24px',
              fontWeight: 'bold',
              cursor: 'pointer',
              touchAction: 'manipulation',
              userSelect: 'none'
            }}
          >
            ×
          </button>
          
          {/* Menu Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '300px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '/#services';
              }}
              style={{
                width: '100%',
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '20px',
                fontWeight: '600',
                padding: '20px',
                cursor: 'pointer',
                touchAction: 'manipulation',
                userSelect: 'none'
              }}
            >
              Services
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '/';
              }}
              style={{
                width: '100%',
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '20px',
                fontWeight: '600',
                padding: '20px',
                cursor: 'pointer',
                touchAction: 'manipulation',
                userSelect: 'none'
              }}
            >
              Home
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '/#contact';
              }}
              style={{
                width: '100%',
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                borderRadius: '8px',
                fontSize: '20px',
                fontWeight: '600',
                padding: '20px',
                cursor: 'pointer',
                touchAction: 'manipulation',
                userSelect: 'none'
              }}
            >
              Contact
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '/#contact';
              }}
              style={{
                width: '100%',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '20px',
                fontWeight: '600',
                padding: '20px',
                cursor: 'pointer',
                touchAction: 'manipulation',
                userSelect: 'none'
              }}
            >
              Get Proposal
            </button>
          </div>
        </div>
      )}
    </>
  )
}