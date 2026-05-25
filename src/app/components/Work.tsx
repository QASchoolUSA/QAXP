'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/lib/data';
import Reveal, { StaggerItem, StaggerReveal } from './Reveal';

export default function Work() {
  const reduceMotion = useReducedMotion();
  const featured = projects.slice(0, 6);

  return (
    <section id="work" className="scroll-mt-28 px-5 py-24 md:px-10 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-label text-xs font-semibold uppercase tracking-[0.2em]">
              Portfolio
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              Selected work
            </h2>
          </div>
          <p className="max-w-sm text-sm text-zinc-600 md:text-base">
            Defining the visual language of brands across food, logistics, wellness, and SaaS.
          </p>
        </Reveal>

        <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.url}>
              <ProjectCard project={project} reduceMotion={!!reduceMotion} />
            </StaggerItem>
          ))}
        </StaggerReveal>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="liquid-cta-secondary inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-zinc-900 cursor-pointer"
          >
            View all {projects.length} projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  reduceMotion,
}: {
  project: (typeof projects)[number];
  reduceMotion: boolean;
}) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group liquid-glass liquid-glass-card relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl p-5 cursor-pointer"
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-35"
        style={{ backgroundColor: project.accent }}
      />
      <div>
        <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          {project.category} · {project.year}
        </span>
        <h3 className="mt-3 font-heading text-xl font-semibold leading-snug text-zinc-900 transition-colors duration-300 group-hover:text-indigo-600 md:text-2xl">
          {project.title}
        </h3>
        {project.description && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-600">
            {project.description}
          </p>
        )}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-500 transition-colors duration-200 group-hover:text-zinc-900">
          Visit site
        </span>
        <span className="liquid-cta flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </motion.a>
  );
}
