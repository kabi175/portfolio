"use client";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import PaperWrapper from "@/components/PaperWrapper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* Decorative cross */
function Cross({ color = "#9b5fc0", size = 40, style }: { color?: string; size?: number; style?: React.CSSProperties }) {
  return (
    <svg className="splat absolute pointer-events-none" style={style} width={size} height={size} viewBox="0 0 40 40" fill="none">
      <rect x="15" y="2" width="10" height="36" rx="5" fill={color} />
      <rect x="2" y="15" width="36" height="10" rx="5" fill={color} />
    </svg>
  );
}

function Sunburst({ size = 60, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg className="splat absolute pointer-events-none" style={style} width={size} height={size} viewBox="0 0 60 60" fill="none">
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x="28" y="4" width="4" height="14" rx="2" fill="#f0c040" transform={`rotate(${i * 30} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="8" fill="#f0c040" />
    </svg>
  );
}

function OrangeSplat({ size = 60, style }: { size?: number; style?: React.CSSProperties }) {
  return (
    <svg className="splat absolute pointer-events-none" style={style} width={size} height={size} viewBox="0 0 80 80" fill="none">
      <path d="M40 5 C42 18,55 12,58 20 C65 15,70 28,62 32 C72 38,68 52,58 50 C62 62,50 70,44 62 C42 74,28 72,28 62 C18 70,10 58,18 50 C8 46,10 32,20 32 C12 24,18 12,26 18 C26 8,38 -2,40 5Z" fill="#e85d2f" />
    </svg>
  );
}

function Star4({ size = 20, color = "#1a1208", style }: { size?: number; color?: string; style?: React.CSSProperties }) {
  return (
    <svg className="absolute pointer-events-none" style={style} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5Z" fill={color} />
    </svg>
  );
}

function Divider() {
  return (
    <div className="border-t-2 border-dashed border-[#c8b898] my-0" />
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.h2
      ref={ref}
      className="section-heading mb-6"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: "spring", stiffness: 200, damping: 22 }}
    >
      {children}
    </motion.h2>
  );
}

export default function Home() {
  return (
    <PaperWrapper>
      <main className="bg-[#f8f4ee] font-[var(--font-space)]">
        <Hero />
        <Divider />

        {/* TWO-COLUMN BODY */}
        <div className="relative max-w-6xl mx-auto px-8 md:px-20 overflow-hidden">
          {/* Scattered decorations */}
          <Star4 size={28} style={{ top: 60, left: -12 }} />
          <OrangeSplat size={44} style={{ top: 120, right: -10, opacity: 0.7, animationDelay: "1s" }} />
          <Cross color="#9b5fc0" size={36} style={{ top: 480, right: -8, animationDelay: "2s" }} />
          <Sunburst size={52} style={{ bottom: 80, left: -14, animationDelay: "0.5s" }} />
          <Cross color="#e85d2f" size={28} style={{ bottom: 200, right: 60, animationDelay: "3s" }} />
          <Star4 size={18} color="#e85d2f" style={{ top: 300, left: 60, opacity: 0.6 }} />
          <Star4 size={14} color="#9b5fc0" style={{ bottom: 300, right: 100, opacity: 0.5 }} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-0 py-12">
            {/* ── LEFT COLUMN ── */}
            <div className="space-y-10">
              <Skills />
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="space-y-10">
              <Projects />
              <Divider />
              <Interests />
            </div>
          </div>
        </div>

        <Divider />
        <Contact />
      </main>
    </PaperWrapper>
  );
}
