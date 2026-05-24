import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "02/2026 — Present",
    company: "AIESEC in Akure",
    role: "Lead Generation Specialist",
    desc: "Driving outreach strategies to recruit participants for AIESEC's exchange programs. Qualifying prospects and nurturing leads through to conversion.",
    tags: ["Lead Generation", "Outreach", "CRM"],
    accent: "#e8ff47",
    current: true,
  },
  {
    period: "11/2025 — Present",
    company: "Google Developers Groups on Campus, FUTA",
    role: "Lead Organizer",
    desc: "Overseeing strategy and operations of GDGoC FUTA, coordinating teams and managing external partnerships.",
    tags: ["Leadership", "Community", "Strategy"],
    accent: "#e8ff47",
    current: true,
  },
  {
    period: "12/2024 — Present",
    company: "Freelance & E-commerce (Perfume Brand)",
    role: "Meta Ads Specialist",
    desc: "Planning, creating, and managing Facebook and Instagram ad campaigns. Drove direct sales and multiple product inquiries for an e-commerce perfume brand through targeted Instagram campaigns.",
    tags: ["Meta Ads", "Facebook", "Instagram", "E-commerce"],
    accent: "#ff6b35",
    current: true,
  },
  {
    period: "09/2024 — 09/2025",
    company: "Google Developers Groups on Campus, FUTA",
    role: "Event Lead & Community Manager",
    desc: "Led planning and execution of multiple tech events including a major collaboration between GDGoC FUTA and SUIonCampus. Managed logistics, team coordination, and all community activities.",
    tags: ["Event Management", "Team Lead", "Community"],
    accent: "#ff6b35",
  },
  {
    period: "08/2025",
    company: "The Compass by AIESEC",
    role: "Community Manager & Outreach Specialist",
    desc: "Ran outreach campaigns that drove audience acquisition for the event. Maintained community engagement to build anticipation and boost attendance.",
    tags: ["Community", "Outreach", "Engagement"],
    accent: "#e8ff47",
  },
  {
    period: "03/2023 — 04/2024",
    company: "Your Dream Crew, India",
    role: "Administrative Assistant",
    desc: "Managed documentation, executive communications, travel bookings, and scheduling across time zones. Provided end-to-end virtual assistance across multiple ongoing projects.",
    tags: ["Virtual Assistant", "Admin", "Operations"],
    accent: "#ff6b35",
  },
  {
    period: "09/2022 — 08/2024",
    company: "9ja Shonen (Anime Channel)",
    role: "Social Media Manager & Community Manager",
    desc: "Managed and grew audiences across Twitter, TikTok, Instagram, and WhatsApp over 2 years. Developed a consistent content strategy and analysed performance to refine it continuously.",
    tags: ["Social Media", "Content Strategy", "Community"],
    accent: "#e8ff47",
  },
  {
    period: "2022 — 2025",
    company: "Freelance",
    role: "Lead Generation & Data Entry Specialist",
    desc: "Delivered lead generation campaigns that converted prospects into clients. Performed accurate data analysis and entry, and provided virtual assistance across multiple projects.",
    tags: ["Lead Gen", "Data Entry", "VA"],
    accent: "#ff6b35",
  },
  {
    period: "07/2022 — 12/2022",
    company: "Guilty Bunnies NFT",
    role: "Content Creator & Social Media Strategist",
    desc: "Created and curated engaging content for social media outreach, contributing to audience growth and increased community interaction.",
    tags: ["Content Creation", "Social Media"],
    accent: "#e8ff47",
  },
  {
    period: "01/2022 — Present",
    company: "Freelance (Remote)",
    role: "Frontend Web Developer",
    desc: "Building responsive, scalable websites and web apps for clients using React, Tailwind CSS, and JavaScript. Handling projects end-to-end from design to deployment.",
    tags: ["React", "Tailwind", "JavaScript", "Node.js"],
    accent: "#ff6b35",
    current: true,
  },
];

function ExpItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        delay: index * 0.06,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b border-[#1f1f1d] relative"
    >
      {/* Hover accent line */}
      <div
        className="absolute left-0 -top-px w-0 h-px group-hover:w-full transition-all duration-700 hidden md:block"
        style={{ background: item.accent }}
      />

      {/* Left: meta */}
      <div className="md:pt-1">
        <div
          className="flex items-center gap-2 mb-2"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          {item.current && (
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
              style={{ background: item.accent }}
            />
          )}
          <span
            className="text-[0.65rem] tracking-widest uppercase leading-relaxed"
            style={{ color: item.accent }}
          >
            {item.period}
          </span>
        </div>
        <p
          className="text-[#4a4a48] text-xs font-light leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {item.company}
        </p>
      </div>

      {/* Right: content */}
      <div>
        <h3
          className="text-3xl md:text-4xl text-[#f0ede6] mb-3 leading-tight tracking-wide"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {item.role}
        </h3>
        <p
          className="text-[#6a6a68] text-sm leading-relaxed font-light mb-5 max-w-xl"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {item.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.6rem] tracking-widest uppercase px-2 py-1 border"
              style={{
                fontFamily: "'Space Mono', monospace",
                color: item.accent,
                borderColor: `${item.accent}22`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="bg-[#090908] px-8 md:px-16 py-28">
      <div ref={ref} className="flex items-center gap-6 mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#e8ff47] text-xs tracking-widest"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          02
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl text-[#f0ede6] uppercase leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Experience
          </motion.h2>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 h-px bg-[#1f1f1d] origin-left"
        />
      </div>

      <div>
        {experiences.map((item, i) => (
          <ExpItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}