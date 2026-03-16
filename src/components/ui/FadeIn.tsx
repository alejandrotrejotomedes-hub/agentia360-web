"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

const dirMap = {
  up:    { y: 36, x: 0 },
  down:  { y: -36, x: 0 },
  left:  { y: 0,  x: 36 },
  right: { y: 0,  x: -36 },
  none:  { y: 0,  x: 0 },
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, ...dirMap[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
