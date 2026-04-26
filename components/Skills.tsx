"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";

const pillColors: Record<string, string> = {
  Languages:       "bg-[#e85d2f] text-white",
  Frontend:        "bg-[#3b82d4] text-white",
  Backend:         "bg-[#2ab8a0] text-white",
  "Tools & Infra": "bg-[#9b5fc0] text-white",
  Craft:           "bg-[#1a1208] text-[#f5f0e8]",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref}>
      <motion.h2
        className="section-heading mb-8"
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        Habilidades
      </motion.h2>

      <div className="space-y-7">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: gi * 0.08, type: "spring", stiffness: 200, damping: 22 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#8a7a5a] mb-2.5">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  className={`pill ${pillColors[group.category] ?? "bg-[#e8e0d0] text-[#1a1208]"}`}
                  whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0] }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 500, damping: 14 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
