export default function Footer() {
  return (
    <footer className="bg-[#090908] border-t border-[#1f1f1d] px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span
        className="text-[#e8ff47] text-lg tracking-wide"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        kamal.dev
      </span>
      <span
        className="text-[#2a2a28] text-[0.65rem] tracking-widest uppercase"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        © {new Date().getFullYear()} Kamaldeen Mohammed. 
      </span>
      <a
        href="#hero"
        className="text-[0.65rem] tracking-widest uppercase text-[#4a4a48] hover:text-[#e8ff47] transition-colors duration-300"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        Back to top ↑
      </a>
    </footer>
  );
}