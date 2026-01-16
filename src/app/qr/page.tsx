'use client';

import { useState } from 'react';
import SmoothScroll from '../components/SmoothScroll';
import Iridescence from '../components/Iridescence';
import QRGenerator from '../components/QRGenerator';
import PaymentGate from '../components/PaymentGate';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function QRPage() {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [showPayment, setShowPayment] = useState(false);

    return (
        <SmoothScroll>
            <div className="relative min-h-screen flex flex-col items-center py-24 px-6">
                <Iridescence
                    color={[0.0, 0.2, 0.2]}
                    speed={0.3}
                    amplitude={0.1}
                    mouseReact={true}
                />

                <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-white/50 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>

                <div className="relative z-10 text-center mb-16 space-y-4">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
                        AI QR GENERATOR
                    </h1>
                    <p className="text-xl text-[#00f3ff]/80 font-mono">
                        [ TRANSPARENCY_MODE: ENABLED ]
                    </p>
                </div>

                <QRGenerator
                    isUnlocked={isUnlocked}
                    onUnlock={() => setShowPayment(true)}
                />

                <PaymentGate
                    isOpen={showPayment}
                    onClose={() => setShowPayment(false)}
                    onSuccess={() => setIsUnlocked(true)}
                />

                <footer className="relative z-10 py-12 text-center text-white/30 text-sm uppercase tracking-widest mt-auto">
                    © {new Date().getFullYear()} QAXP Studio. All rights reserved.
                </footer>
            </div>
        </SmoothScroll>
    );
}
