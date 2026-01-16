'use client';

import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { motion } from 'framer-motion';
import { Download, Check, Lock } from 'lucide-react';
import Magnetic from './Magnetic';

interface QRGeneratorProps {
    onUnlock: () => void;
    isUnlocked: boolean;
}

export default function QRGenerator({ onUnlock, isUnlocked }: QRGeneratorProps) {
    const [url, setUrl] = useState('https://qaxp.com');
    const [fgColor, setFgColor] = useState('#ffffff');
    const [bgColor, setBgColor] = useState('transparent');
    const [size, setSize] = useState(300);
    const qrRef = useRef<HTMLDivElement>(null);

    const handleDownload = () => {
        if (!isUnlocked) {
            onUnlock();
            return;
        }

        const canvas = qrRef.current?.querySelector('canvas');
        if (canvas) {
            const link = document.createElement('a');
            link.download = 'qaxp-qr-code.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    };

    return (
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
            {/* Controls */}
            <div className="space-y-8 glass-panel p-8 rounded-3xl border border-white/10">
                <div>
                    <label className="block text-sm font-medium mb-3 text-white/70">Target URL</label>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:bg-white/10 focus:border-[#7d5fff] transition-all outline-none"
                        placeholder="https://example.com"
                    />
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-3 text-white/70">Foreground</label>
                        <div className="flex items-center gap-3">
                            <input
                                type="color"
                                value={fgColor}
                                onChange={(e) => setFgColor(e.target.value)}
                                className="w-12 h-12 rounded-lg cursor-pointer bg-transparent border-none"
                            />
                            <span className="text-sm font-mono text-white/50">{fgColor}</span>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-3 text-white/70">Background</label>
                        <div className="flex items-center gap-3">
                            <div
                                className={`w-12 h-12 rounded-lg cursor-pointer border border-white/20 flex items-center justify-center ${bgColor === 'transparent' ? 'bg-white/5' : ''}`}
                                onClick={() => setBgColor(bgColor === 'transparent' ? '#000000' : 'transparent')}
                            >
                                {bgColor === 'transparent' ? <div className="w-full h-[1px] bg-red-500 rotate-45" /> : <div style={{ backgroundColor: bgColor }} className="w-full h-full rounded-lg" />}
                            </div>
                            <span className="text-sm font-mono text-white/50">{bgColor === 'transparent' ? 'Transparent' : 'Solid'}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-3 text-white/70">Size ({size}px)</label>
                    <input
                        type="range"
                        min="200"
                        max="1000"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}
                        className="w-full accent-[#7d5fff]"
                    />
                </div>
            </div>

            {/* Preview */}
            <div className="flex flex-col items-center justify-center space-y-8">
                <div className="relative group">
                    <div className="absolute inset-0 bg-[#7d5fff]/20 blur-3xl rounded-full" />
                    <div
                        ref={qrRef}
                        className="relative bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
                    >
                        <QRCodeCanvas
                            value={url}
                            size={300} // Display size fixed, download size variable logic handled in download
                            fgColor={fgColor}
                            bgColor={bgColor}
                            level="H"
                            includeMargin={true}
                        />
                    </div>
                </div>

                <Magnetic>
                    <button
                        onClick={handleDownload}
                        className={`px-10 py-4 rounded-full font-bold flex items-center gap-3 transition-all ${isUnlocked ? 'bg-[#00f3ff] text-black hover:shadow-[0_0_30px_rgba(0,243,255,0.4)]' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    >
                        {isUnlocked ? (
                            <>Download High Res <Download className="w-5 h-5" /></>
                        ) : (
                            <>Unlock Download <Lock className="w-5 h-5" /></>
                        )}
                    </button>
                </Magnetic>
            </div>
        </div>
    );
}
