"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";

const techColors = [
  "bg-[#e85d2f] text-white",
  "bg-[#3b82d4] text-white",
  "bg-[#2ab8a0] text-white",
  "bg-[#9b5fc0] text-white",
  "bg-[#f0c040] text-[#1a1208]",
  "bg-[#e8547a] text-white",
];

export default function Projects() {
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
        Experiência
      </motion.h2>

      <div className="space-y-5">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            className="bg-[#f5f0e8] border-2 border-[#1a1208] rounded-sm p-5 shadow-[4px_4px_0px_#1a1208] hover:shadow-[6px_6px_0px_#1a1208] transition-shadow"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 180, damping: 20 }}
            whileHover={{ y: -2 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-2">
              <div>
                <h3 className="text-lg font-bold text-[#1a1208]" style={{ fontFamily: "var(--font-playfair)" }}>
                  {project.name}
                </h3>
                <span className="text-[11px] font-bold text-[#e85d2f] uppercase tracking-widest">
                  {project.label}
                </span>
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="pill bg-[#1a1208] text-[#f5f0e8] text-xs px-4 py-1.5 hover:bg-[#e85d2f] transition-colors self-start whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {project.linkLabel} ↗
              </motion.a>
            </div>
            <p className="text-sm text-[#3a2e18] leading-relaxed mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, ti) => (
                <span key={t} className={`pill text-xs ${techColors[ti % techColors.length]}`}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
