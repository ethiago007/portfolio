import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const roles = [
  "Web Developer",
  "Meta Ads Expert",
  "Lead Generation",
  "Social Media Manager",
  "Virtual Assistant",
  "Community Manager",
  "Sales Associate",
  "Team Lead",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 px-8 md:px-16 overflow-hidden bg-[#090908]"
    >
      {/* Grain overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Giant background word */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 select-none pointer-events-none leading-none"
        aria-hidden
      >
        <span
          className="text-[22vw] font-black uppercase tracking-tight"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            WebkitTextStroke: "1px #1f1f1d",
            color: "transparent",
          }}
        >
          
        </span>
      </motion.div>

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center gap-3 mb-8 relative z-10"
      >
        <span className="w-2 h-2 rounded-full bg-[#e8ff47] animate-pulse" />
        <span
          className="text-[#e8ff47] tracking-[0.2em] uppercase text-xs"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Available for work &mdash; Lagos, Nigeria
        </span>
      </motion.div>

      {/* Name */}
      <motion.div
        style={{ opacity }}
        className="relative z-10"
      >
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17vw] md:text-[14vw] leading-[0.88] tracking-tight text-[#f0ede6] uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Kamaldeen
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[17vw] md:text-[14vw] leading-[0.88] tracking-tight text-[#e8ff47] uppercase"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Mohammed
          </motion.h1>
        </div>
      </motion.div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-8"
      >
        {/* Role cycler */}
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-px bg-[#e8ff47]"
          />
          <div className="h-7 overflow-hidden relative w-64">
            <motion.span
              key={roleIndex}
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -28, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute text-[#7a7870] text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {roles[roleIndex]}
            </motion.span>
          </div>
        </div>

        {/* Short bio */}
        <p
          className="text-[#7a7870] text-sm leading-relaxed font-light max-w-sm"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          I wear many hats — and wear them well. From pixels to pipelines,
          campaigns to communities, I build things that{" "}
          <span className="text-[#f0ede6]">actually work.</span>
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4">
          
          <a  href="#projects" 
            className="px-7 py-3 text-xs tracking-widest uppercase font-mono bg-[#e8ff47] text-[#090908] hover:bg-transparent hover:text-[#e8ff47] border border-[#e8ff47] transition-all duration-300"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            View Work →
          </a>
          
          <a  href="#contact"
            className="px-7 py-3 text-xs tracking-widest uppercase border border-[#2a2a28] text-[#f0ede6] hover:border-[#e8ff47] hover:text-[#e8ff47] transition-all duration-300"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Hire Me
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute right-8 md:right-16 bottom-20 flex flex-col items-center gap-3 select-none"
        aria-hidden
      >
        <span
          className="text-[#4a4a48] text-[0.6rem] tracking-[0.2em] uppercase [writing-mode:vertical-rl]"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[px] h-16 bg-[#4a4a48] origin-top"
        />
      </motion.div>
    </section>
  );
}