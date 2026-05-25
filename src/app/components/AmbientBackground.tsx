'use client';

import { motion, useReducedMotion } from 'framer-motion';

const blobs = [
  {
    className: 'left-[-15%] top-[5%] h-[50vh] w-[50vw]',
    gradient:
      'radial-gradient(circle, rgba(99,102,241,0.45) 0%, rgba(139,92,246,0.2) 40%, transparent 70%)',
    duration: 16,
    x: [0, 50, 0],
    y: [0, 30, 0],
  },
  {
    className: 'right-[-10%] top-[25%] h-[45vh] w-[48vw]',
    gradient:
      'radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(99,102,241,0.15) 45%, transparent 70%)',
    duration: 20,
    x: [0, -40, 0],
    y: [0, 25, 0],
  },
  {
    className: 'bottom-[0%] left-[20%] h-[42vh] w-[45vw]',
    gradient:
      'radial-gradient(circle, rgba(236,72,153,0.38) 0%, rgba(168,85,247,0.18) 50%, transparent 72%)',
    duration: 18,
    x: [0, 30, 0],
    y: [0, -20, 0],
  },
  {
    className: 'bottom-[20%] right-[15%] h-[35vh] w-[38vw]',
    gradient:
      'radial-gradient(circle, rgba(245,158,11,0.25) 0%, rgba(236,72,153,0.12) 50%, transparent 70%)',
    duration: 22,
    x: [0, -25, 0],
    y: [0, 15, 0],
  },
];

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, #f8f6ff 0%, #eef2ff 35%, #fdf4ff 65%, #f0fdfa 100%)',
        }}
      />

      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`liquid-morph-blob absolute ${blob.className}`}
          style={{ background: blob.gradient }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: blob.x,
                  y: blob.y,
                  scale: [1, 1.05, 1],
                }
          }
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Chromatic shimmer layer */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          background:
            'linear-gradient(125deg, transparent 30%, rgba(99,102,241,0.04) 45%, rgba(6,182,212,0.05) 55%, rgba(236,72,153,0.04) 70%, transparent 85%)',
          mixBlendMode: 'screen',
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.07) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}
