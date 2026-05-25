import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    icon: "⌨",
    title: "Web Development",
    desc: "Building responsive, fast-loading websites and landing pages that look great and convert.",
    tags: ["HTML/CSS", "JavaScript", "React", "WordPress"],
    accent: "#e8ff47",
  },
  {
    icon: "⚡",
    title: "Meta Ads",
    desc: "Running high-ROI paid campaigns on Facebook and Instagram — from strategy to creative to optimization.",
    tags: ["Facebook Ads", "Instagram Ads", "Retargeting", "Analytics"],
    accent: "#ff6b35",
  },
  {
    icon: "🎯",
    title: "Lead Generation",
    desc: "Generating qualified leads through strategic outreach, funnels, and automation that fill pipelines.",
    tags: ["Cold Outreach", "Funnels", "CRM", "Email Sequences"],
    accent: "#e8ff47",
  },
  {
    icon: "💼",
    title: "Sales",
    desc: "Closing deals and nurturing relationships — turning cold prospects into loyal paying clients.",
    tags: ["Cold Calling", "Negotiation", "CRM", "Pipeline Management"],
    accent: "#ff6b35",
  },
  {
    icon: "📊",
    title: "Data Entry",
    desc: "Accurate, fast, and organised data management — spreadsheets, databases, and reporting.",
    tags: ["Excel", "Google Sheets", "Data Cleaning", "Reporting"],
    accent: "#e8ff47",
  },
  {
    icon: "🛠",
    title: "Virtual Assistant",
    desc: "Handling the backend of businesses — scheduling, emails, research, and operations.",
    tags: ["Admin", "Scheduling", "Research", "Email Management"],
    accent: "#ff6b35",
  },
  {
    icon: "📱",
    title: "Social Media",
    desc: "Growing audiences and building brand presence across platforms with content that actually engages.",
    tags: ["Content Strategy", "Copywriting", "Scheduling", "Analytics"],
    accent: "#e8ff47",
  },
  {
    icon: "👥",
    title: "Community Management",
    desc: "Building tight-knit communities, moderating spaces, and keeping members engaged and coming back.",
    tags: ["Discord", "Slack", "Engagement", "Moderation"],
    accent: "#ff6b35",
  },
  {
    icon: "🧪",
    title: "App Tester",
    desc: "Testing apps for bugs, usability, and performance — ensuring a smooth user experience.",
    tags: ["Bug Reporting", "Usability Testing", "Performance Testing", "Feedback Collection"],
    accent: "#e8ff47",
  }
];

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: (index % 4) * 0.1,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative border border-[#1f1f1d] bg-[#0f0f0e] p-8 overflow-hidden cursor-default transition-colors duration-300 hover:bg-[#141413]"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ background: skill.accent }}
      />

      {/* Card number */}
      <span
        className="absolute top-4 right-5 text-5xl font-black select-none pointer-events-none leading-none"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          color: "#1a1a18",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <span className="text-3xl mb-5 block">{skill.icon}</span>

      {/* Title */}
      <h3
        className="text-2xl text-[#f0ede6] mb-3 tracking-wide"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {skill.title}
      </h3>

      {/* Desc */}
      <p
        className="text-[#6a6a68] text-sm leading-relaxed font-light mb-6"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {skill.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.6rem] tracking-widest uppercase px-2 py-1 border border-[#2a2a28] text-[#4a4a48]"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="bg-[#0c0c0b] px-8 md:px-16 py-28"
    >
      {/* Section header */}
      <div ref={ref} className="flex items-center gap-6 mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#e8ff47] text-xs tracking-widest"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          01
        </motion.span>

        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl text-[#f0ede6] uppercase leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Skills
          </motion.h2>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 h-[px] bg-[#1f1f1d] origin-left"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[px] bg-[#1f1f1d]">
        {skills.map((skill, i) => (
          <SkillCard key={skill.title} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}