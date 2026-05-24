import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);


  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.floor(Math.random() * 12) + 4;
      if (start >= 100) {
        setCount(100);
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
      } else {
        setCount(start);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    if (done) {
      setTimeout(onComplete, 900);
    }
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-999 bg-[#e8ff47] flex flex-col items-start justify-between px-8 md:px-16 py-12"
        >
          {/* Top row */}
          <div className="flex items-center justify-between w-full">
            <span
              className="text-[#090908] text-2xl tracking-wide"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              kamal.dev
            </span>
            <span
              className="text-[#090908] text-[0.65rem] tracking-widest uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Portfolio 2026
            </span>
          </div>

          {/* Center */}
          <div className="w-full">
            <div className="overflow-hidden mb-2">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#090908] text-[0.7rem] tracking-widest uppercase mb-6"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Loading experience
              </motion.p>
            </div>

            {/* Big counter */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[#090908] leading-none"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(7rem, 22vw, 18rem)",
                }}
              >
                {count}
              </motion.h1>
            </div>

            {/* Progress bar */}
            <div className="w-full h-px bg-[#090908]/20 mt-4 relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-[#090908]"
                style={{ width: `${count}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#090908]/50 text-[0.65rem] tracking-widest uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              kamal.dev — Digital Professional
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}