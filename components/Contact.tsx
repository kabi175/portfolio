"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personal } from "@/lib/data";

const contacts = [
  { label: "GitHub", value: "@kabi175", href: personal.github, icon: "🐙" },
  { label: "LinkedIn", value: "kabilan-muthusamy", href: personal.linkedin, icon: "💼" },
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: "✉️" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative py-12 px-8 md:px-20 bg-[#ede8dc] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          ref={ref}
          className="section-heading mb-8"
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
        >
          Contato
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[#f5f0e8] border-2 border-[#1a1208] shadow-[4px_4px_0px_#1a1208] hover:shadow-[6px_6px_0px_#1a1208] transition-shadow group"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 220, damping: 20 }}
              whileHover={{ y: -2 }}
            >
              <span className="text-2xl">{c.icon}</span>
              <div className="overflow-hidden">
                <p className="text-[11px] text-[#8a7a5a] font-bold uppercase tracking-wider">{c.label}</p>
                <p className="text-sm text-[#1a1208] font-medium group-hover:text-[#e85d2f] transition-colors truncate">
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="text-center text-xs text-[#8a7a5a] font-medium"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Built with Next.js · Tailwind CSS · Framer Motion ✦
        </motion.p>
      </div>
    </section>
  );
}
