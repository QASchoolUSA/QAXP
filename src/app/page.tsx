'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function NeonBackground() {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const mount = mountRef.current

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x02030a, 25, 90)

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 200)
    camera.position.set(0, 1.5, 8)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    // Lights
    const ambient = new THREE.AmbientLight(0x404040, 1.2)
    scene.add(ambient)

    const dir = new THREE.DirectionalLight(0x00e5ff, 2.2)
    dir.position.set(5, 10, 7)
    scene.add(dir)

    const group = new THREE.Group()
    scene.add(group)

    // Neon wireframe torus knot
    const torusGeo = new THREE.TorusKnotGeometry(1.5, 0.45, 220, 22)
    const torusMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff, wireframe: true })
    const torus = new THREE.Mesh(torusGeo, torusMat)
    group.add(torus)

    // Neon sphere wireframe behind
    const sphereGeo = new THREE.IcosahedronGeometry(3.2, 2)
    const sphereMat = new THREE.MeshBasicMaterial({ color: 0xff00ff, wireframe: true, transparent: true, opacity: 0.35 })
    const sphere = new THREE.Mesh(sphereGeo, sphereMat)
    group.add(sphere)

    // Starfield particles
    const starGeo = new THREE.BufferGeometry()
    const starCount = 1200
    const positions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 90
      positions[i * 3 + 1] = (Math.random() - 0.2) * 70
      positions[i * 3 + 2] = -Math.random() * 120 - 10
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMat = new THREE.PointsMaterial({ color: 0x7a00ff, size: 0.04, transparent: true, opacity: 0.7 })
    const stars = new THREE.Points(starGeo, starMat)
    scene.add(stars)

    // Resize handling
    const onResize = () => {
      const { clientWidth, clientHeight } = mount
      renderer.setSize(clientWidth, clientHeight)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }
    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(mount)

    // Mouse parallax
    const pointer = new THREE.Vector2(0, 0)
    const onPointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      pointer.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      pointer.y = ((e.clientY - rect.top) / rect.height - 0.5) * -2
    }
    mount.addEventListener('pointermove', onPointerMove)

    // Animate
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      group.rotation.x = Math.sin(t * 0.4) * 0.2 + pointer.y * 0.15
      group.rotation.y = t * 0.25 + pointer.x * 0.25
      stars.rotation.y = t * 0.02
      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      mount.removeEventListener('pointermove', onPointerMove)
      resizeObserver.disconnect()
      torusGeo.dispose()
      sphereGeo.dispose()
      starGeo.dispose()
      renderer.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="pointer-events-none fixed inset-0 -z-10" />
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <NeonBackground />

      <div className="absolute inset-0 opacity-70">
        <div className="neon-grid" />
      </div>

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
        <a href="#contact" className="neon-border rounded-xl px-4 py-2 text-sm font-medium bg-black/50 backdrop-blur-md">Get Proposal</a>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 md:pt-24">
        <section className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <h1 className="glow text-4xl md:text-6xl font-extrabold leading-tight">
              Futuristic Web Design, Marketing & SEO
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl">
              We craft hyper-visual, conversion-obsessed experiences. Neon aesthetics. Cyberpunk energy. Search engines can&apos;t ignore it. Neither will your customers.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="neon-border rounded-2xl px-6 py-3 bg-black/50 backdrop-blur-md font-semibold">Start a Project</a>
              <a href="#work" className="rounded-2xl px-6 py-3 bg-white/10 hover:bg-white/15 transition font-semibold">See Our Work</a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-white/60 text-sm">
              <span>Web Design</span>
              <span>Brand & Growth</span>
              <span>Technical SEO</span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="neon-border rounded-3xl p-1">
              <div className="rounded-3xl bg-black/60 p-8 backdrop-blur-md">
                <div className="aspect-[4/3] w-full rounded-2xl flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#00e5ff" />
                        <stop offset="100%" stopColor="#ff00ff" />
                      </linearGradient>
                    </defs>
                    <rect x="10" y="10" width="380" height="280" rx="22" stroke="url(#g1)" strokeWidth="2"/>
                    <g filter="url(#f0)">
                      <path d="M60,220 C120,160 180,240 240,200 C300,160 320,80 360,120" stroke="#00e5ff" strokeWidth="2" />
                      <path d="M40,200 C110,140 190,210 250,170 C300,140 330,70 360,95" stroke="#ff00ff" strokeWidth="2" />
                    </g>
                    <defs>
                      <filter id="f0">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="0.6"/>
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="mt-6 text-sm text-white/70">
                  Concept render of your brand&apos;s future UI. Real builds ship in weeks, not months.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="neon-border rounded-2xl p-[1px]">
            <div className="rounded-2xl bg-black/60 p-6 h-full">
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
            <div className="rounded-2xl bg-black/60 p-6 h-full">
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
            <div className="rounded-2xl bg-black/60 p-6 h-full">
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
            <div className="rounded-2xl bg-black/60 p-8">
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
