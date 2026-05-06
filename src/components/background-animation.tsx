'use client';

import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Primary Blob */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[80px] md:blur-[120px]"
      />
      
      {/* Accent Blob */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[80px] md:blur-[120px]"
      />
      
      {/* Third Blob for depth */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -70, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[10%] left-[20%] w-[35%] h-[35%] bg-chart-3/10 rounded-full blur-[80px] md:blur-[120px]"
      />

      {/* Subtle overlay to soften everything */}
      <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px]"></div>
    </div>
  );
};

export default BackgroundAnimation;
