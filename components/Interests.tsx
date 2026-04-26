"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { interests } from "@/lib/data";

const interestColors = [
  "bg-[#e85d2f] text-white",
  "bg-[#3b82d4] text-white",
  "bg-[#f0c040] text-[#1a1208]",
  "bg-[#2ab8a0] text-white",
  "bg-[#9b5fc0] text-white",
];

export default function Interests() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <motion.h2
        className="section-heading mb-6"
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        Interesses
      </motion.h2>

      <div className="flex flex-wrap gap-2.5">
        {interests.map((item, i) => (
          <motion.div
            key={item.label}
            className={`pill text-sm px-4 py-1.5 flex items-center gap-1.5 border-2 border-[#1a1208] shadow-[3px_3px_0px_#1a1208] ${interestColors[i % interestColors.length]}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 18 }}
            whileHover={{ scale: 1.08, rotate: [-2, 2, 0] }}
          >
            <span>{item.emoji}</span>
            <span className="font-semibold">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
