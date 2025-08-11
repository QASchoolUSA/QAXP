'use client'
import React from 'react'

interface StaticBackgroundProps {
  particleCount?: number
  useServerImage?: boolean
}

// Deterministic random number generator using seed
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// Server-renderable background component
export default function StaticBackground({ 
  particleCount = 50, 
  useServerImage = false 
}: StaticBackgroundProps) {
  if (useServerImage) {
    return (
      <div 
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{
          backgroundImage: `url(/api/background?particles=${particleCount}&width=1920&height=1080)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    )
  }

  // Generate particles for CSS animation using deterministic values
  const particles = Array.from({ length: particleCount }, (_, i) => {
    const seed = i * 1000 // Use index as seed for deterministic results
    const x = seededRandom(seed + 1) * 100
    const y = seededRandom(seed + 2) * 100
    const delay = seededRandom(seed + 3) * 20
    const duration = 15 + seededRandom(seed + 4) * 10
    const size = seededRandom(seed + 5) * 3 + 1
    const color = seededRandom(seed + 6) > 0.5 ? '#7a00ff' : '#00e5ff'
    
    return {
      id: i,
      x,
      y,
      delay,
      duration,
      size,
      color
    }
  })

  return (
    <>
      {/* CSS-based gradient background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-radial from-purple-900/20 via-cyan-900/10 to-transparent" />
      
      {/* Animated particles */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              boxShadow: `0 0 10px ${particle.color}`
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  )
}