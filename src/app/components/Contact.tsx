'use client';

import { ArrowRight, Mail, MapPin } from 'lucide-react';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 px-5 py-24 md:px-10 md:pb-32 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <Reveal>
            <p className="section-label text-xs font-semibold uppercase tracking-[0.2em]">
              Contact
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              Let&apos;s build something remarkable
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-600 md:text-lg">
              Ready to launch your next site, campaign, or product? Tell us about your goals and
              we&apos;ll respond with a tailored proposal.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-zinc-600">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-indigo-600" aria-hidden />
                hello@qaxp.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-indigo-600" aria-hidden />
                Florida · Remote worldwide
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="liquid-glass liquid-glass-panel relative rounded-3xl p-6 md:p-10">
              <form className="relative z-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-700">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className="liquid-input w-full rounded-xl px-4 py-3 text-zinc-900"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      className="liquid-input w-full rounded-xl px-4 py-3 text-zinc-900"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="liquid-input w-full resize-y rounded-xl px-4 py-3 text-zinc-900"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="liquid-cta group inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white sm:w-auto cursor-pointer"
                >
                  Send message
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
