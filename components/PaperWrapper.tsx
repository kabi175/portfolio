"use client";

import { useEffect, useRef } from "react";

/* Organic torn-paper path.
   Cream fills the BOTTOM (y=base→height), spikes project UP into dark (low y).
   Dark rect behind shows through the gaps between spikes. */
function tornPath(width: number, height: number): string {
  const r = () => Math.random();
  // Start: bottom-left corner, trace up to base tear line on left edge
  const baseY = height * (0.55 + r() * 0.1);
  let d = `M0,${height} L0,${baseY.toFixed(1)}`;

  let x = 0;
  while (x < width) {
    const isFiber = r() < 0.38; // thin spike vs broad rip
    const segW = isFiber ? 3 + r() * 9 : 12 + r() * 30;
    const nx = Math.min(x + segW, width);

    // Spike tip — fibers reach nearly to top (small y), rips stay mid-height
    const spikeY = isFiber
      ? height * (0.03 + r() * 0.22)   // thin fiber, deep into dark
      : height * (0.15 + r() * 0.38);  // broader rip, shallower

    // Landing y: back down toward base after spike
    const landY = height * (0.45 + r() * 0.22);
    const cpX = x + (nx - x) * (0.25 + r() * 0.5);

    d += ` Q${cpX.toFixed(1)},${spikeY.toFixed(1)} ${nx.toFixed(1)},${landY.toFixed(1)}`;
    x = nx;
    if (x >= width) break;
  }

  // Close: right edge down to bottom-right corner
  d += ` L${width},${height} Z`;
  return d;
}

export default function PaperWrapper({ children }: { children: React.ReactNode }) {
  const svgRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const w = Math.min(window.innerWidth, 1200);
    svgRef.current.setAttribute("d", tornPath(w, 60));
  }, []);

  return (
    <>
      {/* SVG defs — torn edge shadow only (texture moved to CSS) */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="torn-shadow" x="-5%" y="-30%" width="110%" height="160%">
            <feDropShadow dx="0" dy="5" stdDeviation="3" floodColor="#00000070" />
            <feDropShadow dx="0" dy="2" stdDeviation="1" floodColor="#00000040" />
          </filter>
        </defs>
      </svg>

      {/* Dark stage */}
      <div className="min-h-screen bg-[#111008] pb-16" style={{ overflow: "hidden" }}>

        {/* ── TORN EDGE — full viewport width, z-index above paper ── */}
        <div
          aria-hidden="true"
          style={{
            position: "relative",
            zIndex: 10,
            height: 60,
            width: "100%",
            overflow: "hidden",
            marginBottom: -2,
          }}
        >
          <svg
            width="100%"
            height="60"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            {/* Dark fill — the void showing through torn gaps */}
            <rect width="1200" height="60" fill="#111008" />
            {/* Cream paper — spikes project UP into dark, base fills bottom */}
            <path
              ref={svgRef}
              d="M0,60 L0,34 Q6,8 14,30 Q18,4 26,28 Q32,18 40,36 Q44,6 54,24 Q60,14 68,32 Q74,3 84,22 Q90,16 100,34 Q106,8 116,28 Q122,12 134,30 Q140,20 150,38 Q156,5 166,24 Q174,10 186,28 Q192,18 202,34 Q208,4 220,22 Q228,14 238,32 Q244,6 256,26 Q262,16 274,34 Q280,8 290,28 Q298,12 310,30 Q316,20 326,36 Q332,4 342,22 Q350,14 362,30 Q368,6 380,24 Q388,18 398,36 Q404,3 416,22 Q422,12 434,28 Q440,18 450,32 Q458,6 468,24 Q476,14 488,30 Q494,4 504,22 Q512,16 522,34 Q528,8 538,28 Q546,12 558,30 Q564,20 576,38 Q582,5 592,24 Q600,10 612,28 Q618,16 630,34 Q636,4 648,22 Q656,14 666,30 Q672,6 684,26 Q690,16 702,32 Q708,4 720,22 Q728,14 738,30 Q746,8 756,28 Q762,18 772,34 Q778,4 790,22 Q798,12 810,28 Q816,20 826,36 Q832,6 842,24 Q850,14 860,32 Q866,4 878,22 Q886,16 896,34 Q902,8 914,26 Q920,18 930,34 Q936,4 948,22 Q956,12 966,28 Q974,18 984,36 Q990,5 1002,24 Q1008,10 1020,28 Q1026,16 1038,32 Q1044,4 1056,22 Q1064,14 1074,30 Q1080,6 1092,24 Q1098,18 1108,34 Q1116,4 1126,22 Q1134,12 1146,28 Q1152,20 1162,36 Q1168,4 1180,22 Q1186,12 1196,28 L1200,60 Z"
              fill="#f8f4ee"
              filter="url(#torn-shadow)"
            />
          </svg>
        </div>

        {/* ── PAPER SHEET ── */}
        <div
          className="paper relative"
          style={{
            zIndex: 1,
            boxShadow: "0 12px 80px rgba(0,0,0,0.75), 0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          {/* Fold mark 1 */}
          <div className="fold-mark" aria-hidden="true" style={{ top: "36%" }} />
          {/* Fold mark 2 */}
          <div className="fold-mark" aria-hidden="true" style={{ top: "68%" }} />

          {children}
        </div>
      </div>
    </>
  );
}
