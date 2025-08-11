import Link from 'next/link'
import WorkNavigation from '../components/WorkNavigation'

export default function Work() {
  
  return (
    <div className="relative min-h-screen">
      <div className="neon-grid opacity-70" />

      <header className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="logo-animated h-12 w-12 rounded-lg bg-black/60 flex flex-col items-center justify-center shadow-lg shadow-purple-500/50" style={{ boxShadow: '0 8px 25px rgba(122, 0, 255, 0.4), 0 4px 15px rgba(0, 229, 255, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)' }}>
             <span className="text-white font-bold text-xl leading-none" style={{ fontFamily: 'var(--font-impact)' }}>QA</span>
                <span className="text-white font-bold text-xl leading-none" style={{ fontFamily: 'var(--font-impact)' }}>XP</span>
           </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/#services" className="hover:text-white">Services</Link>
          <Link href="/work" className="text-white">Work</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
        </nav>
        
        {/* Desktop CTA */}
        <Link href="/#contact" className="hidden md:block rounded-xl px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15">Get Proposal</Link>
        
        {/* Mobile Navigation */}
        <WorkNavigation />
      </header>



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
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm">Case Study →</a>
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
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm">Case Study →</a>
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
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm">Case Study →</a>
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
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm">Case Study →</a>
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
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm">Case Study →</a>
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
                <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
                <a href="#" className="text-purple-400 hover:text-purple-300 text-sm">Case Study →</a>
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
                <Link href="/#contact" className="rounded-2xl px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 font-semibold text-lg">Start Your Project</Link>
                <Link href="/#services" className="rounded-2xl px-8 py-4 bg-white/10 hover:bg-white/15 font-semibold text-lg">View Services</Link>
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