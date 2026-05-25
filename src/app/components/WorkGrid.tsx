'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { StaggerItem, StaggerReveal } from './Reveal';

export default function WorkGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <StaggerItem key={project.url}>
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group liquid-glass liquid-glass-card flex h-full flex-col overflow-hidden rounded-2xl cursor-pointer"
            whileHover={reduceMotion ? undefined : { y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          >
            <div
              className="relative aspect-[16/10] overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${project.accent}33 0%, rgba(255,255,255,0.4) 45%, ${project.accent}18 100%)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  background: `radial-gradient(circle at 70% 30%, ${project.accent}55, transparent 55%)`,
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.tags?.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="liquid-glass rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {project.category} · {project.year}
              </span>
              <h3 className="mt-2 font-heading text-lg font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-indigo-600">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 line-clamp-3">
                {project.description ??
                  'Custom web experience tailored to brand goals and conversion.'}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-zinc-200/80 pt-4">
                <span className="text-sm font-medium text-zinc-500 group-hover:text-zinc-900 transition-colors">
                  View live
                </span>
                <span className="liquid-cta flex h-9 w-9 items-center justify-center rounded-full text-white transition-all duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </motion.a>
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}
