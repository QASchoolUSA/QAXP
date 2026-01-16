'use client';

import { motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Contact() {
    return (
        <section className="relative min-h-screen flex items-center justify-center py-24 px-6">
            <div className="absolute inset-0 z-0">
                <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#7d5fff]/20 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-4xl">
                <div className="glass-panel p-8 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00f3ff]/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#7d5fff]/10 rounded-full blur-[100px]" />

                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-bold mb-6">Let&apos;s Talk</h2>
                        <p className="text-xl text-white/60">Ready to build the future?</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1 text-white/50">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:bg-white/10 focus:border-[#7d5fff] transition-all outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium ml-1 text-white/50">Email</label>
                                <input
                                    type="email"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:bg-white/10 focus:border-[#7d5fff] transition-all outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium ml-1 text-white/50">Message</label>
                            <textarea
                                rows={4}
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:bg-white/10 focus:border-[#7d5fff] transition-all outline-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>

                        <div className="pt-4 flex justify-center">
                            <Magnetic>
                                <button className="px-12 py-4 bg-[#7d5fff] text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(125,95,255,0.5)] transition-shadow">
                                    Send Message
                                </button>
                            </Magnetic>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
