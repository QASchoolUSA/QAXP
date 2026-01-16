'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Layers, Zap, Search, Smartphone } from 'lucide-react';

const services = [
    {
        title: "Web Design",
        desc: "Immersive experiences that merge art with engineering.",
        icon: Layers,
        color: "#ff0080"
    },
    {
        title: "Development",
        desc: "Robust, scalable architectures built for the next decade.",
        icon: Zap,
        color: "#7d5fff"
    },
    {
        title: "SEO & Growth",
        desc: "Data-driven strategies to dominate the algorithmic landscape.",
        icon: Search,
        color: "#00f3ff"
    },
    {
        title: "Mobile Apps",
        desc: "Native performance with fluid, intuitive interfaces.",
        icon: Smartphone,
        color: "#ffaa00"
    }
];

export default function Services() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900 border-t border-white/5">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                <div className="absolute top-12 left-6 md:left-12 z-10">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
                        Our <span className="text-white/40">Services</span>
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 w-max">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative h-[50vh] w-[85vw] md:w-[30vw] bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm transition-colors hover:bg-white/10 flex flex-col justify-between"
                        >
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"
                                style={{
                                    background: `radial-gradient(600px circle at top right, ${service.color}, transparent 40%)`
                                }}
                            />

                            <div>
                                <service.icon className="w-12 h-12 mb-6 text-white/80" strokeWidth={1.5} />
                                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                                <p className="text-white/60 text-lg leading-relaxed">{service.desc}</p>
                            </div>

                            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 will-change-transform" />
                            </div>
                        </div>
                    ))}
                    {/* Spacers */}
                    <div className="w-[10vw]" />
                </motion.div>
            </div>
        </section>
    );
}
