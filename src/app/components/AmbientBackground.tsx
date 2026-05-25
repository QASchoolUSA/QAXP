'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#FAFAFA]" />
      <motion.div
        className="absolute -left-[20%] top-[8%] h-[55vh] w-[55vw] rounded-full bg-[#2563EB]/12 blur-[100px]"
        animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, 24, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-[15%] top-[35%] h-[45vh] w-[50vw] rounded-full bg-[#18181B]/6 blur-[90px]"
        animate={reduceMotion ? undefined : { x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[25%] h-[40vh] w-[40vw] rounded-full bg-[#3B82F6]/8 blur-[80px]"
        animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(24,24,27,0.06) 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
    </div>
  );
}
