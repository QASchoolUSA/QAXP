'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const projects = [
    {
        title: "Palace Pizza Bartow",
        category: "Food & Beverage",
        year: "2024",
        url: "https://palacepizzabartow.com"
    },
    {
        title: "Sanford Cleaning",
        category: "Service",
        year: "2024",
        url: "https://sanfordcleaning.com"
    },
    {
        title: "Haines City Cleaning",
        category: "Service",
        year: "2024",
        url: "https://hainescitycleaning.com"
    },
    {
        title: "Path To Soul",
        category: "Wellness",
        year: "2024",
        url: "https://pathtosoul.com"
    },
    {
        title: "Sumer Plus",
        category: "E-Commerce",
        year: "2025",
        url: "https://sumerplus.com"
    },
    {
        title: "Precise Accounting",
        category: "Finance",
        year: "2024",
        url: "https://proaccountingusa.com"
    },
    {
        title: "DOT Semi",
        category: "Logistics",
        year: "2024",
        url: "https://dotsemi.com"
    },
    {
        title: "Locksmith Davenport",
        category: "Service",
        year: "2024",
        url: "https://locksmithdavenport.com"
    },
    {
        title: "PTI Plus",
        category: "Logistics",
        year: "2025",
        url: "https://ptiplus.com"
    },
    {
        title: "Trucking Jobs",
        category: "Recruitment",
        year: "2024",
        url: "https://trucking-jobs.com"
    },
    {
        title: "My Own Booking",
        category: "SaaS",
        year: "2025",
        url: "https://book.qaxp.com"
    },
    {
        title: "Free Malyarevsky",
        category: "Non-Profit",
        year: "2024",
        url: "https://freemalyarevsky.com/en"
    }
];

export default function Work() {
    return (
        <section className="py-32 px-6 md:px-12 max-w-8xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                <h2 className="text-[12vw] md:text-[6vw] font-black leading-[0.85] tracking-tighter">
                    SELECTED<br />WORK
                </h2>
                <div className="mb-4 text-right">
                    <p className="text-white/60 mb-2">Defining the visual language of tomorrow.</p>
                    <span className="text-[#00f3ff] text-sm font-mono">[ 04 - 12 ]</span>
                </div>
            </div>

            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block border-t border-white/10 py-16 transition-colors hover:bg-white/5"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 px-4">
                            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                                {project.title}
                            </h3>

                            <div className="flex items-center gap-12 mt-4 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity">
                                <span className="text-lg">{project.category}</span>
                                <span className="text-lg font-mono">{project.year}</span>
                            </div>
                        </div>

                        <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                            <Magnetic>
                                <div className="w-24 h-24 rounded-full bg-[#7d5fff] flex items-center justify-center">
                                    <ArrowUpRight className="w-10 h-10 text-black" />
                                </div>
                            </Magnetic>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                    </a>
                ))}
                <div className="border-t border-white/10" />
            </div>

            <div className="mt-24 flex justify-center">
                <Magnetic>
                    <button className="px-10 py-5 rounded-full border border-white/20 text-lg hover:bg-white text-white hover:text-black transition-all">
                        View All Projects
                    </button>
                </Magnetic>
            </div>
        </section>
    );
}
