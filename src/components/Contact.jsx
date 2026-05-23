import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...form,
        }).toString(),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const links = [
    { label: "GitHub", href: "https://github.com/ethiago007" },
    { label: "X (Twitter)", href: "https://twitter.com/kamaltp__" },
    { label: "Email", href: "mailto:kamaldeenmohd13@gmail.com" },
  ];

  return (
    <section id="contact" className="bg-[#090908] px-8 md:px-16 py-28 relative overflow-hidden">
      {/* Background word */}
      <div
        className="absolute -bottom-24 -right-12 text-[28vw] font-black leading-none select-none pointer-events-none opacity-[0.03]"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: "#f0ede6",
        }}
        aria-hidden
      >
        TALK
      </div>

      {/* Header */}
      <div ref={ref} className="flex items-center gap-6 mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#e8ff47] text-xs tracking-widest"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          04
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl text-[#f0ede6] uppercase leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Contact
          </motion.h2>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 h-px bg-[#1f1f1d] origin-left"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3
            className="leading-[0.9] tracking-wide text-[#f0ede6] mb-6"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
            }}
          >
            Let's Build
            <br />
            <span
              style={{
                WebkitTextStroke: "1px #f0ede6",
                color: "transparent",
              }}
            >
              Something
            </span>
            <br />
            Real.
          </h3>

          <p
            className="text-[#6a6a68] text-sm leading-relaxed font-light mb-10 max-w-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Whether you need a website, a Meta Ads campaign, someone to grow
            your community, or a reliable VA — I'm open to work and ready to
            deliver.
          </p>

          {/* Links */}
          <div className="flex flex-col gap-4 border-t border-[#1f1f1d] pt-8">
            {links.map((link) => (
              
              <a  key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group border-b border-[#1f1f1d] pb-4"
              >
                <span
                  className="text-xs tracking-widest uppercase text-[#4a4a48] group-hover:text-[#e8ff47] transition-colors duration-300"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  {link.label}
                </span>
                <span className="text-[#4a4a48] group-hover:text-[#e8ff47] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Hidden Netlify form for detection */}
          <form name="contact" data-netlify="true" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <select name="service" />
            <textarea name="message" />
          </form>

          {status === "success" ? (
            <div className="h-full flex flex-col items-start justify-center gap-4 py-12">
              <span
                className="text-6xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                ✓
              </span>
              <h4
                className="text-4xl text-[#e8ff47]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Message Sent.
              </h4>
              <p
                className="text-[#6a6a68] text-sm"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-[0.65rem] tracking-widest uppercase text-[#4a4a48] hover:text-[#e8ff47] transition-colors border-b border-[#2a2a28]"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                Send Another →
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[0.6rem] tracking-widest uppercase text-[#4a4a48]"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="bg-[#0f0f0e] border border-[#1f1f1d] text-[#f0ede6] px-4 py-3 text-sm outline-none focus:border-[#e8ff47] transition-colors duration-300 placeholder:text-[#2a2a28]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-[0.6rem] tracking-widest uppercase text-[#4a4a48]"
                    style={{ fontFamily: "'Space Mono', monospace" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-[#0f0f0e] border border-[#1f1f1d] text-[#f0ede6] px-4 py-3 text-sm outline-none focus:border-[#e8ff47] transition-colors duration-300 placeholder:text-[#2a2a28]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              </div>

              {/* Service */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[0.6rem] tracking-widest uppercase text-[#4a4a48]"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  What do you need?
                </label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="bg-[#0f0f0e] border border-[#1f1f1d] text-[#f0ede6] px-4 py-3 text-sm outline-none focus:border-[#e8ff47] transition-colors duration-300 appearance-none cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Web Development">Web Development</option>
                  <option value="Meta Ads">Meta Ads</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Community Management">Community Management</option>
                  <option value="Virtual Assistant">Virtual Assistant</option>
                  <option value="Data Entry">Data Entry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  className="text-[0.6rem] tracking-widest uppercase text-[#4a4a48]"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="bg-[#0f0f0e] border border-[#1f1f1d] text-[#f0ede6] px-4 py-3 text-sm outline-none focus:border-[#e8ff47] transition-colors duration-300 resize-none placeholder:text-[#2a2a28]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 px-8 py-4 bg-[#e8ff47] text-[#090908] text-[0.7rem] tracking-widest uppercase hover:bg-transparent hover:text-[#e8ff47] border border-[#e8ff47] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Space Mono', monospace" }}
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </button>

              {status === "error" && (
                <p
                  className="text-red-400 text-xs"
                  style={{ fontFamily: "'Space Mono', monospace" }}
                >
                  Something went wrong. Try emailing me directly.
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}