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
  const backdropOpacity = useTransform(scrollY, [0, 80], [0.78, 0.94]);
  const backgroundColor = useMotionTemplate`rgba(255, 255, 255, ${backdropOpacity})`;
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ['0 0 0 rgba(0,0,0,0)', '0 12px 40px rgba(24,24,27,0.08)']
  );

  return (
    <>
      <motion.header
        className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-6xl"
        style={reduceMotion ? undefined : { boxShadow: shadow }}
      >
        <motion.div
          className="flex items-center justify-between rounded-2xl border border-zinc-200/80 px-4 py-3 md:px-6 backdrop-blur-xl"
          style={
            reduceMotion
              ? { background: 'rgba(255,255,255,0.9)' }
              : { backgroundColor, backdropFilter: 'blur(16px)' }
          }
        >
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-tight text-zinc-900 cursor-pointer"
          >
            QAXP
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-zinc-900 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#1d4ed8] cursor-pointer"
            >
              Get Proposal
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white/80 text-zinc-900 md:hidden cursor-pointer"
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
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-zinc-900/20 backdrop-blur-sm cursor-pointer"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute right-4 top-4 left-4 rounded-2xl border border-zinc-200 bg-white/95 p-6 shadow-2xl backdrop-blur-xl"
              initial={reduceMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-zinc-900">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 cursor-pointer"
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
                    className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/work"
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
                  >
                    Full Portfolio
                  </Link>
                </li>
              </ul>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-6 flex w-full items-center justify-center rounded-full bg-[#2563EB] px-5 py-3.5 text-base font-semibold text-white cursor-pointer"
              >
                Get Proposal
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
