'use client';

import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col justify-center px-6 md:px-12 max-w-8xl mx-auto z-10 perspective-1000">
            <div className="space-y-2">
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                        className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter mix-blend-difference"
                    >
                        FUTURE
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
                        className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600"
                    >
                        AHEAD
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
                        className="text-[12vw] md:text-[8vw] font-black leading-[0.85] tracking-tighter text-[#7d5fff] mix-blend-screen"
                        style={{ textShadow: "0 0 40px rgba(125, 95, 255, 0.4)" }}
                    >
                        OF TIME
                    </motion.h1>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-12 md:mt-16 flex flex-col md:flex-row items-center gap-8"
            >
                <p className="max-w-md text-lg text-white/60 font-medium leading-relaxed">
                    We engineer digital experiences that defy convention.
                    Born in the void, designed for the future.
                    <span className="block mt-4 text-[#00f3ff]">Web · Mobile · Growth</span>
                </p>

                <div className="flex items-center gap-6">
                    <Magnetic>
                        <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Project <ArrowRight className="w-5 h-5 transition-transform group-hover:-rotate-45" />
                            </span>
                            <div className="absolute inset-0 bg-[#7d5fff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                            <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Start Project <ArrowRight className="w-5 h-5 -rotate-45" />
                            </span>
                        </button>
                    </Magnetic>

                    <Magnetic>
                        <button className="px-8 py-4 border border-white/20 rounded-full font-medium text-white hover:bg-white/5 transition-colors">
                            View Work
                        </button>
                    </Magnetic>
                </div>
            </motion.div>
        </section>
    );
}
