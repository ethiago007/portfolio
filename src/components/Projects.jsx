import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "SchoolMS",
    subtitle: "School Management System",
    desc: "A full-stack, role-based school management platform serving Admin, Teacher, and Student portals. Real-time notifications, PDF report cards, automated emails, and a 9-collection Firestore database — built end-to-end.",
    tags: ["React 18", "Node.js", "Firebase", "Tailwind", "Framer Motion", "PDFKit", "Nodemailer"],
    link: "https://myschlmgtsys.netlify.app/",
    category: "Full Stack",
    featured: true,
    stat1: { label: "Components", value: "60+" },
    stat2: { label: "API Endpoints", value: "10+" },
    stat3: { label: "User Roles", value: "3" },
  },
  {
    id: "02",
    title: "PDF Summarizer",
    subtitle: "AI-Powered Document Tool",
    desc: "Upload any PDF and get an instant AI summary. Ask follow-up questions based on the document content.",
    tags: ["React", "Python", "Firebase", "TailwindCSS"],
    link: "https://sparrow-five.vercel.app/",
    category: "AI Tool",
    featured: false,
  },
  {
    id: "03",
    title: "Weather OTG",
    subtitle: "Real-Time Weather App",
    desc: "Detects your current location and shows live weather. Search any city worldwide with a clean, minimal UI.",
    tags: ["React", "Weather API", "Material UI"],
    link: "https://weatherotg.netlify.app/",
    category: "Web App",
    featured: false,
  },
  {
    id: "04",
    title: "Image Fetcher",
    subtitle: "Unsplash-Powered Search",
    desc: "Search and fetch high-quality images on demand using the Unsplash API. Fast, clean, and responsive.",
    tags: ["React", "Unsplash API", "Firebase", "Material UI"],
    link: "https://fun-to-sign.netlify.app/",
    category: "Web App",
    featured: false,
  },
];

function FeaturedProject({ project }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border border-[#1f1f1d] bg-[#0f0f0e] p-8 md:p-12 mb-4 overflow-hidden hover:border-[#e8ff47] transition-colors duration-500"
    >
      {/* Background number */}
      <span
        className="absolute bottom-4 right-6 text-[10rem] md:text-[16rem] font-black leading-none select-none pointer-events-none text-[#111110]"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {project.id}
      </span>

      {/* Top row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-[0.6rem] tracking-widest uppercase px-2 py-1 border border-[#e8ff47] text-[#e8ff47]"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              Featured
            </span>
            <span
              className="text-[0.6rem] tracking-widest uppercase text-[#4a4a48]"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {project.category}
            </span>
          </div>
          <h3
            className="text-5xl md:text-7xl text-[#f0ede6] leading-none tracking-wide mb-1"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            {project.title}
          </h3>
          <p
            className="text-[#4a4a48] text-sm"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {project.subtitle}
          </p>
        </div>

        
         <a href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-2 px-6 py-3 border border-[#2a2a28] text-[#f0ede6] hover:border-[#e8ff47] hover:text-[#e8ff47] transition-all duration-300 self-start"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          View Live ↗
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8 relative z-10 max-w-sm">
        {[project.stat1, project.stat2, project.stat3].map((stat) => (
          <div key={stat.label} className="border border-[#1f1f1d] p-3">
            <div
              className="text-2xl text-[#e8ff47] leading-none mb-1"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {stat.value}
            </div>
            <div
              className="text-[0.6rem] text-[#4a4a48] tracking-widest uppercase"
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Desc */}
      <p
        className="text-[#6a6a68] text-sm leading-relaxed font-light max-w-2xl mb-8 relative z-10"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {project.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {project.tags.map((tag) => (
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

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      id="projects"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative border border-[#1f1f1d] bg-[#0f0f0e] p-7 overflow-hidden hover:border-[#ff6b35] transition-colors duration-400 flex flex-col"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-[#ff6b35]" />

      {/* Number */}
      <span
        className="absolute top-4 right-5 text-5xl font-black leading-none select-none pointer-events-none text-[#1a1a18]"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {project.id}
      </span>

      {/* Category */}
      <span
        className="text-[0.6rem] tracking-widest uppercase text-[#ff6b35] mb-4 block"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        {project.category}
      </span>

      {/* Title */}
      <h3
        className="text-3xl text-[#f0ede6] leading-tight tracking-wide mb-1"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {project.title}
      </h3>
      <p
        className="text-[#4a4a48] text-xs mb-4"
        style={{ fontFamily: "'Space Mono', monospace" }}
      >
        {project.subtitle}
      </p>

      {/* Desc */}
      <p
        className="text-[#6a6a68] text-sm leading-relaxed font-light flex-1 mb-6"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {project.desc}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[0.6rem] tracking-widest uppercase px-2 py-1 border border-[#2a2a28] text-[#4a4a48]"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="flex items-center gap-2 text-[#ff6b35] group-hover:gap-3 transition-all duration-300">
        <span
          className="text-[0.65rem] tracking-widest uppercase"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          View Project
        </span>
        <span className="text-sm">↗</span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-[#0c0c0b] px-8 md:px-16 py-28">
      {/* Header */}
      <div ref={ref} className="flex items-center gap-6 mb-16">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[#e8ff47] text-xs tracking-widest"
          style={{ fontFamily: "'Space Mono', monospace" }}
        >
          03
        </motion.span>
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl text-[#f0ede6] uppercase leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Projects
          </motion.h2>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 h-0.5 bg-[#1f1f1d] origin-left"
        />
      </div>

      {/* Featured */}
      <FeaturedProject project={featured} />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {rest.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}