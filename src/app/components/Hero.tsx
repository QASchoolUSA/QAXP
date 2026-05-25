'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Reveal from './Reveal';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], [0, reduceMotion ? 0 : 48]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, reduceMotion ? 1 : 0.4]);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center px-5 pb-16 pt-28 md:px-10 md:pt-32 lg:px-12">
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="liquid-glass mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
            Web · Marketing · SEO
          </p>
        </Reveal>

        <div className="space-y-1 md:space-y-2">
          <div className="overflow-hidden">
            <motion.h1
              initial={reduceMotion ? false : { y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-heading text-[clamp(2.75rem,12vw,6.5rem)] font-bold leading-[0.92] tracking-tight text-zinc-900"
            >
              Design that
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={reduceMotion ? false : { y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="font-heading text-[clamp(2.75rem,12vw,6.5rem)] font-bold leading-[0.92] tracking-tight text-liquid"
            >
              drives growth
            </motion.h1>
          </div>
        </div>

        <Reveal delay={0.35} className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-zinc-600 md:text-lg">
            We engineer digital experiences that merge art with engineering. Born for
            brands that want clarity, speed, and measurable results.
          </p>
        </Reveal>

        <Reveal delay={0.45} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            href="/#contact"
            className="liquid-cta group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white cursor-pointer"
          >
            Start a project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/#work"
            className="liquid-cta-secondary inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-zinc-800 cursor-pointer"
          >
            View selected work
          </Link>
        </Reveal>

        <Reveal delay={0.55} className="mt-14 grid grid-cols-3 gap-3 md:max-w-lg md:gap-4">
          {[
            { value: '12+', label: 'Live projects' },
            { value: '4', label: 'Core services' },
            { value: '100%', label: 'Client-first' },
          ].map((stat) => (
            <div key={stat.label} className="liquid-stat rounded-2xl px-3 py-4 md:px-4">
              <p className="font-heading text-xl font-bold text-zinc-900 md:text-2xl">{stat.value}</p>
              <p className="mt-1 text-[10px] text-zinc-500 md:text-xs">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </motion.div>
    </section>
  );
}
