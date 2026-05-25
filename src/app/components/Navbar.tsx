'use client';

import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const backdropOpacity = useTransform(scrollY, [0, 80], [0.55, 0.72]);
  const backgroundColor = useMotionTemplate`rgba(255, 255, 255, ${backdropOpacity})`;
  const shadow = useTransform(
    scrollY,
    [0, 80],
    [
      '0 0 0 rgba(0,0,0,0)',
      '0 8px 32px rgba(99,102,241,0.12), 0 1px 0 rgba(255,255,255,0.9) inset',
    ]
  );

  return (
    <>
      <motion.header
        className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl"
        style={reduceMotion ? undefined : { boxShadow: shadow }}
      >
        <motion.div
          className="liquid-glass flex items-center justify-between rounded-2xl px-4 py-3 md:px-6"
          style={
            reduceMotion
              ? undefined
              : {
                  backgroundColor,
                  backdropFilter: 'blur(24px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                }
          }
        >
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-tight text-zinc-900 cursor-pointer"
          >
            <span className="text-liquid">QA</span>
            <span className="text-zinc-900">XP</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors duration-300 hover:text-zinc-900 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="liquid-cta inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-white cursor-pointer"
            >
              Get Proposal
            </Link>
          </div>

          <button
            type="button"
            className="liquid-glass flex h-10 w-10 items-center justify-center rounded-xl text-zinc-900 md:hidden cursor-pointer"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-indigo-950/15 backdrop-blur-md cursor-pointer"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="liquid-glass liquid-glass-panel absolute right-4 top-4 left-4 rounded-2xl p-6"
              initial={reduceMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            >
              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-heading text-lg font-bold text-zinc-900">Menu</span>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="liquid-glass flex h-10 w-10 items-center justify-center rounded-xl cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-900 transition-colors duration-300 hover:bg-white/50 cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition-colors duration-300 hover:bg-white/50 cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/work"
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition-colors duration-300 hover:bg-white/50 cursor-pointer"
                    >
                      Full Portfolio
                    </Link>
                  </li>
                </ul>
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="liquid-cta mt-6 flex w-full items-center justify-center rounded-full px-5 py-3.5 text-base font-semibold text-white cursor-pointer"
                >
                  Get Proposal
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
