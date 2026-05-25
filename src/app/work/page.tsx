import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AmbientBackground from '../components/AmbientBackground';
import Navbar from '../components/Navbar';
import SmoothScroll from '../components/SmoothScroll';
import WorkGrid from '../components/WorkGrid';
import Reveal from '../components/Reveal';

export default function WorkPage() {
  return (
    <SmoothScroll>
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10 px-5 pb-24 pt-28 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-14 text-center md:mb-20">
            <p className="section-label text-xs font-semibold uppercase tracking-[0.2em]">
              Full portfolio
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">
              Our <span className="text-liquid">work</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-600 md:text-lg">
              Explore our portfolio of cutting-edge projects. From conversion-optimized platforms
              to brand-forward experiences, each project showcases innovation and measurable
              results.
            </p>
          </Reveal>

          <WorkGrid />

          <Reveal className="mt-20">
            <div className="liquid-glass liquid-glass-panel relative rounded-3xl p-8 text-center md:p-12">
              <h2 className="font-heading text-2xl font-bold text-zinc-900 md:text-3xl">
                Ready to create something amazing?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-600">
                From concept to launch, we&apos;ll make your next project extraordinary.
              </p>
              <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="liquid-cta inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white sm:w-auto cursor-pointer"
                >
                  Start your project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#services"
                  className="liquid-cta-secondary inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-zinc-900 sm:w-auto cursor-pointer"
                >
                  View services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/60 py-10 text-center text-sm text-zinc-500 backdrop-blur-sm">
        © {new Date().getFullYear()} QAXP. All rights reserved.
      </footer>
    </SmoothScroll>
  );
}
