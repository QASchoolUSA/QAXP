'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
  pulse: number
}

interface Shape {
  x: number
  y: number
  size: number
  rotation: number
  rotationSpeed: number
  speedX: number
  speedY: number
  opacity: number
  type: number
  color: string
}

function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')!

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Floating particles
    const createParticles = () => {
      const particles = []
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color: ['#ff00ff', '#00e5ff', '#7a00ff'][Math.floor(Math.random() * 3)],
          pulse: Math.random() * Math.PI * 2
        })
      }
      return particles
    }

    // Floating geometric shapes
    const createShapes = () => {
      const shapes = []
      for (let i = 0; i < 20; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 60 + 20,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.3 + 0.1,
          type: Math.floor(Math.random() * 3), // 0: triangle, 1: square, 2: hexagon
          color: ['#ff00ff', '#00e5ff', '#7a00ff'][Math.floor(Math.random() * 3)]
        })
      }
      return shapes
    }

    particlesRef.current = createParticles()
    const shapes = createShapes()
    
    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)
    
    // Draw functions
    const drawParticle = (particle: Particle) => {
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color
      ctx.shadowColor = particle.color
      ctx.shadowBlur = 10
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const drawShape = (shape: Shape) => {
      ctx.save()
      ctx.globalAlpha = shape.opacity
      ctx.strokeStyle = shape.color
      ctx.lineWidth = 2
      ctx.shadowColor = shape.color
      ctx.shadowBlur = 15
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      
      ctx.beginPath()
      if (shape.type === 0) { // Triangle
        ctx.moveTo(0, -shape.size / 2)
        ctx.lineTo(-shape.size / 2, shape.size / 2)
        ctx.lineTo(shape.size / 2, shape.size / 2)
        ctx.closePath()
      } else if (shape.type === 1) { // Square
        ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
      } else { // Hexagon
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3
          const x = Math.cos(angle) * shape.size / 2
          const y = Math.sin(angle) * shape.size / 2
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
      }
      ctx.stroke()
      ctx.restore()
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Dynamic gradient background
      const time = Date.now() * 0.001
      const gradient = ctx.createRadialGradient(
        mouseRef.current.x, mouseRef.current.y, 0,
        mouseRef.current.x, mouseRef.current.y, 800
      )
      gradient.addColorStop(0, `rgba(122, 0, 255, ${0.1 + Math.sin(time) * 0.05})`)
      gradient.addColorStop(0.5, `rgba(0, 229, 255, ${0.05 + Math.cos(time * 1.5) * 0.03})`)
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          particle.x += dx * 0.001
          particle.y += dy * 0.001
        }
        
        particle.x += particle.speedX
        particle.y += particle.speedY
        particle.pulse += 0.02
        particle.opacity = 0.3 + Math.sin(particle.pulse) * 0.3
        
        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        drawParticle(particle)
      })
      
      // Update and draw shapes
      shapes.forEach(shape => {
        shape.x += shape.speedX
        shape.y += shape.speedY
        shape.rotation += shape.rotationSpeed
        
        // Wrap around screen
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size
        
        drawShape(shape)
      })
      
      // Connection lines between nearby particles
      particlesRef.current.forEach((particle, i) => {
        particlesRef.current.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 100) {
            ctx.save()
            ctx.globalAlpha = (100 - distance) / 100 * 0.2
            ctx.strokeStyle = '#7a00ff'
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })
      
      rafRef.current = requestAnimationFrame(animate)
    }

    animate()
    
    window.addEventListener('resize', resizeCanvas)
    
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0" 
      style={{ background: 'transparent' }}
    />
  )
}

export default function Work() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="relative min-h-screen">
      <div className="neon-grid opacity-70" />

      <header className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="logo-animated h-12 w-12 rounded-lg bg-black/60 flex flex-col items-center justify-center shadow-lg shadow-purple-500/50 transform hover:scale-105 transition-transform duration-300" style={{ boxShadow: '0 8px 25px rgba(122, 0, 255, 0.4), 0 4px 15px rgba(0, 229, 255, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)' }}>
             <span className="text-white font-bold text-xl leading-none" style={{ fontFamily: 'var(--font-impact)' }}>QA</span>
                <span className="text-white font-bold text-xl leading-none" style={{ fontFamily: 'var(--font-impact)' }}>XP</span>
           </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/#services" className="hover:text-white transition">Services</Link>
          <Link href="/work" className="text-white">Work</Link>
          <Link href="/#contact" className="hover:text-white transition">Contact</Link>
        </nav>
        
        {/* Desktop CTA */}
        <Link href="/#contact" className="hidden md:block rounded-xl px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition">Get Proposal</Link>
        
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
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white transition glow">Home</Link>
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white transition glow">Services</Link>
              <Link href="/work" onClick={() => setMobileMenuOpen(false)} className="text-white glow">Work</Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-white/70 hover:text-white transition glow">Contact</Link>
            </nav>
            
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="rounded-xl px-6 py-3 text-lg font-medium bg-white/10 hover:bg-white/15 transition glow">Get Proposal</Link>
          </div>
        </div>
      )}

      {/* Animated Background */}
      <AnimatedBackground />

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 md:pt-24">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="glow text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Our Work
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto">
            Explore our portfolio of cutting-edge projects. From futuristic web experiences to conversion-optimized platforms, each project showcases our commitment to innovation and results.
          </p>
        </section>

        {/* Portfolio Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-white/50 text-sm">Project Preview</div>
              </div>
              <h3 className="glow text-xl font-bold mb-2">CyberTech Solutions</h3>
              <p className="text-white/70 mb-4 text-sm">A futuristic SaaS platform with 3D animations and real-time data visualization. Increased user engagement by 340%.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Three.js</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">WebGL</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm transition">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm transition">Case Study →</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-pink-900/50 to-purple-900/50 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-white/50 text-sm">Project Preview</div>
              </div>
              <h3 className="glow text-xl font-bold mb-2">NeonCommerce</h3>
              <p className="text-white/70 mb-4 text-sm">High-converting e-commerce platform with AR product visualization. Boosted sales by 280% in 6 months.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">AR.js</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">Stripe</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm transition">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm transition">Case Study →</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-cyan-900/50 to-blue-900/50 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-white/50 text-sm">Project Preview</div>
              </div>
              <h3 className="glow text-xl font-bold mb-2">QuantumFinance</h3>
              <p className="text-white/70 mb-4 text-sm">AI-powered financial dashboard with real-time market data and predictive analytics. 95% user retention rate.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Vue.js</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">D3.js</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">Python</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm transition">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm transition">Case Study →</a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-green-900/50 to-cyan-900/50 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-white/50 text-sm">Project Preview</div>
              </div>
              <h3 className="glow text-xl font-bold mb-2">MetaVerse Hub</h3>
              <p className="text-white/70 mb-4 text-sm">Virtual reality social platform with blockchain integration. 50K+ active users in first month.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Unity</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">WebXR</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">Solidity</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm transition">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm transition">Case Study →</a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-white/50 text-sm">Project Preview</div>
              </div>
              <h3 className="glow text-xl font-bold mb-2">AI Creative Studio</h3>
              <p className="text-white/70 mb-4 text-sm">Machine learning-powered design tool with generative AI capabilities. 10M+ designs created.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">TensorFlow</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Canvas API</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">Node.js</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm transition">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm transition">Case Study →</a>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl mb-4 flex items-center justify-center">
                <div className="text-white/50 text-sm">Project Preview</div>
              </div>
              <h3 className="glow text-xl font-bold mb-2">HyperSpeed Analytics</h3>
              <p className="text-white/70 mb-4 text-sm">Real-time data processing platform with interactive visualizations. Processes 1B+ events daily.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Apache Kafka</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">Redis</span>
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm transition">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm transition">Case Study →</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="neon-border rounded-2xl p-[1px] max-w-4xl mx-auto">
            <div className="card-hover rounded-2xl bg-black/60 p-8">
              <h2 className="glow text-3xl font-bold mb-4">Ready to Create Something Amazing?</h2>
              <p className="text-white/70 mb-6 text-lg">Let&apos;s build your next groundbreaking project together. From concept to launch, we&apos;ll make it extraordinary.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/#contact" className="rounded-2xl px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition font-semibold text-lg">Start Your Project</Link>
                <Link href="/#services" className="rounded-2xl px-8 py-4 bg-white/10 hover:bg-white/15 transition font-semibold text-lg">View Services</Link>
              </div>
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