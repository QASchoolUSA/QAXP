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

export default function AnimatedBackground() {
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
    
    // Performance tracking
    let frameCount = 0
    
    // Animation loop with performance optimizations
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frameCount++
      
      // Optimized gradient background - update less frequently
      if (frameCount % 3 === 0) {
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
      }
      
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
      
      // Optimized connection lines - only calculate every 4th frame and limit connections
      if (frameCount % 4 === 0) {
        const maxConnections = 15 // Limit total connections for performance
        let connectionCount = 0
        
        for (let i = 0; i < particlesRef.current.length && connectionCount < maxConnections; i++) {
          const particle = particlesRef.current[i]
          for (let j = i + 1; j < particlesRef.current.length && connectionCount < maxConnections; j++) {
            const otherParticle = particlesRef.current[j]
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            
            if (distance < 80) { // Reduced connection distance
              ctx.save()
              ctx.globalAlpha = (80 - distance) / 80 * 0.15
              ctx.strokeStyle = '#7a00ff'
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
              ctx.restore()
              connectionCount++
            }
          }
        }
      }
      
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