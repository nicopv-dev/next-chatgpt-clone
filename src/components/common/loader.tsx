"use client";

import { motion } from "framer-motion";

export default function Loader() {
  const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const dotVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.8,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      style={container}
      className="py-6"
      variants={containerVariants}
      animate="animate"
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-zinc-400 mx-1"
        variants={dotVariants}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-zinc-400 mx-1"
        variants={dotVariants}
      />
      <motion.div
        className="w-2 h-2 rounded-full bg-zinc-400 mx-1"
        variants={dotVariants}
      />
    </motion.div>
  );
}
