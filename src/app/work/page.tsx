import Link from 'next/link'
import WorkNavigation from '../components/WorkNavigation'
import Iridescence from '../components/Iridescence'

export default function Work() {
  
  return (
    <div className="relative min-h-screen">
      <Iridescence color={[0.3, 0.05, 0.4]} speed={0.5} amplitude={0.05} mouseReact={false} />
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
          {/* Project 1 - Palace Pizza Bartow */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-orange-900/50 to-red-900/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 225" className="w-full h-full">
                  <rect width="400" height="225" fill="#1a0f0a"/>
                  <circle cx="200" cy="112" r="60" fill="#dc2626" opacity="0.8"/>
                  <rect x="170" y="82" width="60" height="60" fill="#f59e0b" opacity="0.6" rx="8"/>
                  <text x="200" y="120" textAnchor="middle" fill="#fbbf24" fontSize="16" fontWeight="bold">PIZZA</text>
                  <circle cx="180" cy="100" r="4" fill="#ef4444"/>
                  <circle cx="220" cy="105" r="3" fill="#ef4444"/>
                  <circle cx="190" cy="130" r="3" fill="#ef4444"/>
                  <circle cx="210" cy="125" r="4" fill="#ef4444"/>
                </svg>
              </div>
              <h3 className="glow text-xl font-bold mb-2">Palace Pizza Bartow</h3>
              <p className="text-white/70 mb-4 text-sm">Modern restaurant website with online ordering system and location-based delivery tracking.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Tailwind</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">Stripe</span>
              </div>
              <div className="flex gap-3">
                <a href="https://palacepizzabartow.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
              </div>
            </div>
          </div>

          {/* Project 2 - Sanford Cleaning */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 225" className="w-full h-full">
                  <rect width="400" height="225" fill="#0a1628"/>
                  <circle cx="200" cy="112" r="50" fill="#0ea5e9" opacity="0.3"/>
                  <rect x="180" y="92" width="40" height="40" fill="#38bdf8" opacity="0.6" rx="20"/>
                  <path d="M190 102 L210 102 M190 107 L210 107 M190 112 L210 112 M190 117 L210 117 M190 122 L210 122" stroke="#0ea5e9" strokeWidth="2"/>
                  <circle cx="160" cy="80" r="8" fill="#7dd3fc" opacity="0.8"/>
                  <circle cx="240" cy="90" r="6" fill="#7dd3fc" opacity="0.6"/>
                  <circle cx="170" cy="140" r="5" fill="#7dd3fc" opacity="0.7"/>
                  <circle cx="230" cy="135" r="7" fill="#7dd3fc" opacity="0.5"/>
                </svg>
              </div>
              <h3 className="glow text-xl font-bold mb-2">Sanford Cleaning</h3>
              <p className="text-white/70 mb-4 text-sm">Professional cleaning service website with booking system and service area management.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Vite</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">Calendar API</span>
              </div>
              <div className="flex gap-3">
                <a href="https://sanfordcleaning.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
              </div>
            </div>
          </div>

          {/* Project 3 - Lynx&Parts */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 225" className="w-full h-full">
                  <rect width="400" height="225" fill="#1a0a1a"/>
                  <rect x="150" y="80" width="100" height="65" fill="#7c3aed" opacity="0.4" rx="8"/>
                  <rect x="160" y="90" width="80" height="15" fill="#a855f7" opacity="0.8" rx="4"/>
                  <rect x="160" y="110" width="60" height="10" fill="#c084fc" opacity="0.6" rx="2"/>
                  <rect x="160" y="125" width="70" height="10" fill="#c084fc" opacity="0.6" rx="2"/>
                  <circle cx="180" cy="160" r="8" fill="#ec4899" opacity="0.7"/>
                  <circle cx="200" cy="160" r="8" fill="#ec4899" opacity="0.7"/>
                  <circle cx="220" cy="160" r="8" fill="#ec4899" opacity="0.7"/>
                </svg>
              </div>
              <h3 className="glow text-xl font-bold mb-2">Lynx&Parts</h3>
              <p className="text-white/70 mb-4 text-sm">E-commerce platform for automotive parts with advanced search and inventory management.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">WordPress</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">WooCommerce</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">PHP</span>
              </div>
              <div className="flex gap-3">
                <a href="https://lynxandparts.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
              </div>
            </div>
          </div>

          {/* Project 4 - PathToSoul */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 225" className="w-full h-full">
                  <rect width="400" height="225" fill="#0f0a1a"/>
                  <circle cx="200" cy="112" r="40" fill="none" stroke="#6366f1" strokeWidth="3" opacity="0.8"/>
                  <circle cx="200" cy="112" r="25" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.6"/>
                  <circle cx="200" cy="112" r="10" fill="#a855f7" opacity="0.9"/>
                  <path d="M200 72 Q220 92 200 112 Q180 92 200 72" fill="#6366f1" opacity="0.5"/>
                  <path d="M200 152 Q180 132 200 112 Q220 132 200 152" fill="#8b5cf6" opacity="0.4"/>
                  <circle cx="170" cy="85" r="3" fill="#c084fc" opacity="0.8"/>
                  <circle cx="230" cy="85" r="3" fill="#c084fc" opacity="0.8"/>
                  <circle cx="170" cy="139" r="3" fill="#c084fc" opacity="0.8"/>
                  <circle cx="230" cy="139" r="3" fill="#c084fc" opacity="0.8"/>
                </svg>
              </div>
              <h3 className="glow text-xl font-bold mb-2">PathToSoul</h3>
              <p className="text-white/70 mb-4 text-sm">Spiritual wellness platform with meditation guides, courses, and community features.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Tailwind</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">Stripe</span>
              </div>
              <div className="flex gap-3">
                <a href="https://pathtosoul.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
              </div>
            </div>
          </div>

          {/* Project 5 - Trucking Jobs */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-green-900/50 to-blue-900/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 225" className="w-full h-full">
                  <rect width="400" height="225" fill="#0a1a0a"/>
                  <rect x="120" y="90" width="80" height="40" fill="#059669" opacity="0.6" rx="4"/>
                  <rect x="200" y="100" width="60" height="30" fill="#10b981" opacity="0.8" rx="4"/>
                  <circle cx="140" cy="140" r="12" fill="#374151" opacity="0.9"/>
                  <circle cx="180" cy="140" r="12" fill="#374151" opacity="0.9"/>
                  <circle cx="220" cy="140" r="12" fill="#374151" opacity="0.9"/>
                  <circle cx="250" cy="140" r="12" fill="#374151" opacity="0.9"/>
                  <rect x="130" y="95" width="15" height="8" fill="#34d399" opacity="0.7" rx="2"/>
                  <rect x="150" y="95" width="15" height="8" fill="#34d399" opacity="0.7" rx="2"/>
                  <rect x="170" y="95" width="15" height="8" fill="#34d399" opacity="0.7" rx="2"/>
                </svg>
              </div>
              <h3 className="glow text-xl font-bold mb-2">Trucking Jobs</h3>
              <p className="text-white/70 mb-4 text-sm">Job board platform connecting truck drivers with employers, featuring advanced filtering and applications.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Vite</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">Node.js</span>
              </div>
              <div className="flex gap-3">
                <a href="https://trucking-jobs.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
              </div>
            </div>
          </div>

          {/* Project 6 - DOTSemi */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-gray-900/50 to-blue-900/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 225" className="w-full h-full">
                  <rect width="400" height="225" fill="#0f172a"/>
                  <rect x="100" y="80" width="200" height="80" fill="#1e40af" opacity="0.4" rx="8"/>
                  <rect x="110" y="90" width="180" height="20" fill="#3b82f6" opacity="0.8" rx="4"/>
                  <rect x="110" y="115" width="80" height="15" fill="#60a5fa" opacity="0.6" rx="2"/>
                  <rect x="110" y="135" width="120" height="15" fill="#60a5fa" opacity="0.6" rx="2"/>
                  <circle cx="320" cy="120" r="15" fill="#ef4444" opacity="0.8"/>
                  <text x="320" y="125" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">DOT</text>
                  <rect x="250" y="110" width="30" height="20" fill="#fbbf24" opacity="0.7" rx="4"/>
                </svg>
              </div>
              <h3 className="glow text-xl font-bold mb-2">DOTSemi</h3>
              <p className="text-white/70 mb-4 text-sm">DOT compliance and fleet management platform for commercial trucking companies.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Vite</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">MongoDB</span>
              </div>
              <div className="flex gap-3">
                <a href="https://dotsemi.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
              </div>
            </div>
          </div>

          {/* Project 7 - Locksmith Davenport */}
          <div className="neon-border rounded-2xl p-[1px] group">
            <div className="card-hover rounded-2xl bg-black/60 p-6 h-full">
              <div className="aspect-video bg-gradient-to-br from-yellow-900/50 to-orange-900/50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 225" className="w-full h-full">
                  <rect width="400" height="225" fill="#1a1a0a"/>
                  <rect x="180" y="80" width="40" height="60" fill="#d97706" opacity="0.6" rx="8"/>
                  <circle cx="200" cy="100" r="15" fill="none" stroke="#f59e0b" strokeWidth="3" opacity="0.8"/>
                  <circle cx="200" cy="100" r="8" fill="#fbbf24" opacity="0.9"/>
                  <rect x="195" y="110" width="10" height="20" fill="#f59e0b" opacity="0.8" rx="2"/>
                  <path d="M210 115 L225 115 L225 120 L220 120 L220 125 L225 125 L225 130 L210 130" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                  <circle cx="160" cy="90" r="3" fill="#fcd34d" opacity="0.7"/>
                  <circle cx="240" cy="95" r="3" fill="#fcd34d" opacity="0.7"/>
                  <circle cx="170" cy="130" r="3" fill="#fcd34d" opacity="0.7"/>
                  <circle cx="230" cy="135" r="3" fill="#fcd34d" opacity="0.7"/>
                </svg>
              </div>
              <h3 className="glow text-xl font-bold mb-2">Locksmith Davenport</h3>
              <p className="text-white/70 mb-4 text-sm">Local locksmith service website with emergency booking and service area coverage.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">Vite</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-300 text-xs rounded">Maps API</span>
              </div>
              <div className="flex gap-3">
                 <a href="https://locksmithdavenport.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 text-sm">View Live →</a>
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