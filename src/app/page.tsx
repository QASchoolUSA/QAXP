'use client'

import { useEffect, useRef } from 'react'

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
    
    // Particle system
    const createParticles = () => {
      const particles = []
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color: Math.random() > 0.5 ? '#7a00ff' : '#00e5ff',
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
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.globalAlpha = shape.opacity
      ctx.strokeStyle = shape.color
      ctx.lineWidth = 2
      ctx.shadowColor = shape.color
      ctx.shadowBlur = 15
      
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

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="neon-grid opacity-70" />

      <header className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#00e5ff] via-[#7a00ff] to-[#ff00ff] blur-[0.5px]" />
          <span className="font-semibold tracking-widest text-sm text-white/80">NEONSTUDIO</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <a href="#contact" className="rounded-xl px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition">Get Proposal</a>
      </header>

      {/* Animated Background */}
      <AnimatedBackground />

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
               <a href="#work" className="rounded-2xl px-6 py-3 bg-white/10 hover:bg-white/15 transition font-semibold">See Our Work</a>
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
        © {new Date().getFullYear()} NeonStudio. All rights reserved.
      </footer>
    </div>
  )
}
