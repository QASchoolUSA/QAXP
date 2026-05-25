'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { services } from '@/lib/data';
import Reveal, { StaggerItem, StaggerReveal } from './Reveal';

export default function Services() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative scroll-mt-28 px-5 py-24 md:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 md:mb-16">
          <p className="section-label text-xs font-semibold uppercase tracking-[0.2em]">
            What we do
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
            Services built for momentum
          </h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 md:text-lg">
            Strategy, design, development, and growth — unified under one studio that ships fast
            and scales with your business.
          </p>
          <motion.div
            className="liquid-divider mt-6 w-24 origin-left"
            style={{ scaleX: reduceMotion ? 1 : lineScale }}
          />
        </Reveal>

        {/* Mobile & tablet: vertical stack */}
        <StaggerReveal className="grid gap-4 md:grid-cols-2 lg:hidden">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <article className="liquid-glass liquid-glass-card group relative flex h-full flex-col justify-between rounded-2xl p-6 cursor-default">
                <div className="relative z-10">
                  <service.icon
                    className="mb-5 h-8 w-8 text-indigo-600"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="font-heading text-xl font-semibold text-zinc-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 md:text-base">
                    {service.desc}
                  </p>
                </div>
                <div className="relative z-10 mt-6 liquid-divider h-px w-full opacity-60" />
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* Desktop: subtle horizontal scroll */}
        <div className="relative mt-4 hidden lg:block">
          <ServicesCarousel reduceMotion={!!reduceMotion} />
        </div>
      </div>
    </section>
  );
}

function ServicesCarousel({ reduceMotion }: { reduceMotion: boolean }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0.15, 0.85], ['2%', '-48%']);

  if (reduceMotion) {
    return (
      <div className="grid grid-cols-4 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    );
  }

  return (
    <div ref={targetRef} className="h-[70vh]">
      <div className="sticky top-28 overflow-hidden">
        <motion.div style={{ x }} className="flex w-max gap-5 pr-12">
          {services.map((service) => (
            <div key={service.title} className="w-[min(28vw,360px)] shrink-0">
              <ServiceCard service={service} tall />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  tall,
}: {
  service: (typeof services)[number];
  tall?: boolean;
}) {
  return (
    <article
      className={`liquid-glass liquid-glass-card group relative flex flex-col justify-between rounded-2xl p-8 ${
        tall ? 'min-h-[320px]' : ''
      }`}
    >
      <div className="relative z-10">
        <service.icon className="mb-5 h-9 w-9 text-indigo-600" strokeWidth={1.5} aria-hidden />
        <h3 className="font-heading text-2xl font-semibold text-zinc-900">{service.title}</h3>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">{service.desc}</p>
      </div>
      <div className="relative z-10 mt-8 liquid-divider h-px w-full opacity-50" />
    </article>
  );
}
