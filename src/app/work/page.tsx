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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB]">
              Full portfolio
            </p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-zinc-900 md:text-6xl">
              Our work
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-zinc-600 md:text-lg">
              Explore our portfolio of cutting-edge projects. From conversion-optimized platforms
              to brand-forward experiences, each project showcases innovation and measurable
              results.
            </p>
          </Reveal>

          <WorkGrid />

          <Reveal className="mt-20">
            <div className="glass-panel rounded-3xl p-8 text-center md:p-12">
              <h2 className="font-heading text-2xl font-bold text-zinc-900 md:text-3xl">
                Ready to create something amazing?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-zinc-600">
                From concept to launch, we&apos;ll make your next project extraordinary.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2563EB] px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1d4ed8] sm:w-auto cursor-pointer"
                >
                  Start your project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/#services"
                  className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-white/80 px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-colors duration-200 hover:bg-white sm:w-auto cursor-pointer"
                >
                  View services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <footer className="relative z-10 border-t border-zinc-200/80 py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} QAXP. All rights reserved.
      </footer>
    </SmoothScroll>
  );
}
