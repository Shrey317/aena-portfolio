"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Override default fadeUp to use a different entrance */
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: 24 },
    left: { x: -24 },
    right: { x: 24 },
    none: {},
  };

  const offset = offsets[direction];

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, ...offset }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
