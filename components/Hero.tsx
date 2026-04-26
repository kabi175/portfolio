"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

function Sticker({
  emoji, style, delay = 0, rotate = 0,
}: { emoji: string; style: React.CSSProperties; delay?: number; rotate?: number }) {
  return (
    <motion.div
      className="absolute text-3xl select-none z-10 cursor-default"
      style={{ ...style, rotate }}
      initial={{ opacity: 0, scale: 0, rotate: rotate - 20 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ type: "spring", stiffness: 260, damping: 16, delay }}
      whileHover={{ scale: 1.25, rotate: rotate + 12 }}
    >
      {emoji}
    </motion.div>
  );
}

function OrangeSplat({ style }: { style?: React.CSSProperties }) {
  return (
    <svg className="splat absolute pointer-events-none" style={style} viewBox="0 0 80 80" fill="none">
      <path d="M40 5 C42 18,55 12,58 20 C65 15,70 28,62 32 C72 38,68 52,58 50 C62 62,50 70,44 62 C42 74,28 72,28 62 C18 70,10 58,18 50 C8 46,10 32,20 32 C12 24,18 12,26 18 C26 8,38 -2,40 5Z" fill="#e85d2f" />
    </svg>
  );
}

function PurpleSplat({ style }: { style?: React.CSSProperties }) {
  return (
    <svg className="splat absolute pointer-events-none" style={{ animationDelay: "2s", ...style }} viewBox="0 0 80 80" fill="none">
      <path d="M40 8 C44 22,58 14,60 24 C70 18,74 34,64 38 C76 46,70 60,58 56 C64 70,50 78,44 68 C40 80,26 76,28 66 C16 74,8 60,18 52 C6 46,10 30,22 32 C14 22,22 10,30 18 C28 6,38 -4,40 8Z" fill="#9b5fc0" />
    </svg>
  );
}

function Star4({ style, color = "#1a1208" }: { style?: React.CSSProperties; color?: string }) {
  return (
    <svg className="absolute pointer-events-none" style={style} viewBox="0 0 24 24" fill="none">
      <path d="M12 0 L13.5 10.5 L24 12 L13.5 13.5 L12 24 L10.5 13.5 L0 12 L10.5 10.5Z" fill={color} />
    </svg>
  );
}

export default function Hero() {
  const letters = "Hey!".split("");

  return (
    <section className="relative bg-[#f5f0e8] px-8 md:px-20 pt-4 pb-10">
      {/* Decorative elements */}
      <OrangeSplat style={{ width: 56, height: 56, top: "14%", left: "42%", opacity: 0.9 }} />
      <PurpleSplat style={{ width: 52, height: 52, top: "6%", right: "7%", opacity: 0.75 }} />
      <Star4 style={{ width: 28, height: 28, top: "8%", left: "28%" }} />
      <Star4 style={{ width: 16, height: 16, bottom: "12%", left: "52%", opacity: 0.5 }} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT */}
        <div>
          {/* Giant heading */}
          <div className="flex flex-wrap items-end gap-0 mb-5 leading-none">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", lineHeight: 1 }}
                className="text-[7rem] md:text-[9rem] font-black text-[#1a1208] select-none"
                initial={{ opacity: 0, y: 60, rotate: -10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 280, damping: 18, delay: i * 0.08 }}
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              className="text-[4rem] md:text-[5rem] mb-2 ml-2 select-none"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", delay: 0.5 }}
            >
              ✦
            </motion.span>
          </div>

          <motion.p
            className="text-base md:text-lg leading-relaxed text-[#2a2010] max-w-lg mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            I&apos;m <strong>Kabilan</strong> — a full-stack developer who builds scalable SaaS
            products, developer tools, and robotics systems. I care about performance, clean
            architecture, and solving real problems with elegant code.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            {[
              { label: "GitHub", href: personal.github, bg: "bg-[#1a1208] text-[#f5f0e8] hover:bg-[#e85d2f]" },
              { label: "LinkedIn", href: personal.linkedin, bg: "bg-[#3b82d4] text-white hover:bg-[#2563b8]" },
              { label: "Email", href: `mailto:${personal.email}`, bg: "border-2 border-[#1a1208] text-[#1a1208] hover:bg-[#1a1208] hover:text-[#f5f0e8]" },
            ].map((btn) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target={btn.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className={`pill px-5 py-2 text-sm font-semibold transition-colors ${btn.bg}`}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — avatar card */}
        <div className="relative flex justify-center md:justify-end items-start pt-6">
          <Sticker emoji="😊" style={{ top: -24, left: "10%" }} delay={0.6} rotate={-8} />
          <Sticker emoji="⚡" style={{ top: -14, left: "32%" }} delay={0.7} rotate={14} />
          <Sticker emoji="🌈" style={{ top: -18, right: "8%" }} delay={0.8} rotate={-6} />
          <Sticker emoji="🤖" style={{ bottom: 20, left: "0%" }} delay={0.9} rotate={7} />
          <Sticker emoji="🌐" style={{ bottom: 50, right: "3%" }} delay={1.0} rotate={-12} />
          <Sticker emoji="✌️" style={{ top: "38%", left: "-6%" }} delay={1.1} rotate={5} />

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Yellow tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 tape w-24" />

            <div
              className="w-60 h-72 md:w-64 md:h-72 bg-[#e8e0d0] border-[3px] border-[#1a1208] rounded-sm flex flex-col items-center justify-center gap-4 shadow-[6px_6px_0px_#1a1208]"
              style={{ transform: "rotate(2deg)" }}
            >
              <div className="w-28 h-28 rounded-full bg-[#1a1208] flex items-center justify-center">
                <span className="text-5xl font-black text-[#f5f0e8]" style={{ fontFamily: "var(--font-playfair)" }}>K</span>
              </div>
              <div className="text-center">
                <p className="font-bold text-xl text-[#1a1208]" style={{ fontFamily: "var(--font-playfair)" }}>Kabilan</p>
                <p className="text-xs text-[#5a4a2a] mt-1 font-medium">Full-Stack Dev</p>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 -right-6 bg-[#e85d2f] text-white text-xs font-bold px-4 py-1.5 shadow-[3px_3px_0px_#1a1208] border border-[#1a1208]"
              style={{ transform: "rotate(3deg)", fontFamily: "var(--font-space)", letterSpacing: "0.05em" }}
              animate={{ rotate: [3, -2, 3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              HELLO :)
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
