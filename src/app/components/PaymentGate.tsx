'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard } from 'lucide-react';

interface PaymentGateProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export default function PaymentGate({ isOpen, onClose, onSuccess }: PaymentGateProps) {
    const [coupon, setCoupon] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCoupon = () => {
        setLoading(true);
        setError('');

        setTimeout(() => {
            if (coupon.toUpperCase() === 'FRIEND') {
                onSuccess();
                onClose();
            } else {
                setError('Invalid coupon code. Try "FRIEND" if you know the owner.');
            }
            setLoading(false);
        }, 1500);
    };

    const handleStripe = () => {
        // Simulate Stripe Redirect
        setLoading(true);
        setTimeout(() => {
            alert("Stripe Integration requires live keys. Unlocking for demo purposes.");
            onSuccess();
            onClose();
            setLoading(false);
        }, 2000);
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7d5fff] to-[#00f3ff]" />

                        <button onClick={onClose} className="absolute top-4 right-4 text-white/40 hover:text-white">
                            <X className="w-6 h-6" />
                        </button>

                        <div className="text-center mb-8">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                <LockIcon />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Unlock Premium Features</h3>
                            <p className="text-white/60 text-sm">Get high-resolution, transparent downloads forever.</p>
                        </div>

                        <div className="space-y-4">
                            <button
                                onClick={handleStripe}
                                disabled={loading}
                                className="w-full py-4 bg-[#7d5fff] hover:bg-[#6c4ef0] text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-colors"
                            >
                                {loading ? 'Processing...' : <><CreditCard className="w-5 h-5" /> Pay $5.00 via Stripe</>}
                            </button>

                            <div className="relative flex py-2 items-center">
                                <div className="flex-grow border-t border-white/10"></div>
                                <span className="flex-shrink mx-4 text-white/30 text-xs uppercase">Or use coupon</span>
                                <div className="flex-grow border-t border-white/10"></div>
                            </div>

                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    placeholder="Enter Coupon Code"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-[#00f3ff] transition-colors"
                                />
                                <button
                                    onClick={handleCoupon}
                                    disabled={loading || !coupon}
                                    className="px-6 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors disabled:opacity-50"
                                >
                                    Apply
                                </button>
                            </div>
                            {error && <p className="text-red-400 text-xs text-center">{error}</p>}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function LockIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock text-[#00f3ff]"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
    )
}
