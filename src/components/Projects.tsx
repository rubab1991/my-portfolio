"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Star } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Luxury Furniture E-Commerce Platform",
    description:
      "A production-grade e-commerce storefront for a premium furniture brand, featuring elegant product showcases, clean luxury UI, and a seamless shopping experience built for conversion.",
    image: "/images/avion-furniture.png.PNG",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://hackathone-templete2-i4ro.vercel.app/",
    github: "https://github.com/rubab1991",
    featured: true,
  },
  {
    title: "AI-Powered Physical Textbook with Chatbot",
    description:
      "An intelligent educational platform that reimagines learning through AI. Features a conversational chatbot interface where users can explore concepts, get real-time explanations, and navigate topics interactively — blending traditional textbook content with modern AI capabilities.",
    image: "/images/ai-textbook.png",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI Chatbot"],
    live: "https://physical-ai-textbook-with-chatbot.vercel.app/",
    github: "https://github.com/rubab1991/physical-ai-textbook-with-chatbot",
    featured: true,
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "A sleek, data-driven SaaS dashboard with real-time analytics, interactive charts, and a clean management interface — built for modern business intelligence and team productivity.",
    image: "/images/saas project.PNG",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://saas-dashboard-one-eta.vercel.app/dashboard",
    github: "https://github.com/rubab1991",
    featured: true,
  },
  {
    title: "Birthday Wish App",
    description:
      "An interactive birthday wish application with animations and personalized messages.",
    image: "/images/project3.PNG",
    tech: ["Next.js", "React", "CSS"],
    live: "https://birthday-wish-app-ivnf.vercel.app/",
    github: "https://github.com/rubab1991",
  },
  {
    title: "Governor Sindh Website",
    description:
      "A professional government website clone with modern design and responsive layout.",
    image: "/images/project4.PNG",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    live: "https://governor-website-with-next-js.vercel.app/",
    github: "https://github.com/rubab1991",
  },
  {
    title: "To Do List App",
    description:
      "A feature-rich task management app with add, edit, and delete functionality.",
    image: "/images/project6.PNG",
    tech: ["React", "TypeScript", "CSS"],
    live: "https://to-do-list-app-eight-wine.vercel.app/",
    github: "https://github.com/rubab1991",
  },
  {
    title: "Number Guessing Game",
    description:
      "An interactive game where users guess a randomly generated number with hints.",
    image: "/images/project5.PNG",
    tech: ["TypeScript", "Node.js", "CLI"],
    live: "https://number-guessing-game-lrzc.vercel.app/",
    github: "https://github.com/rubab1991",
  },
  {
    title: "Shareable Resume Builder",
    description:
      "Generate and share professional resumes with a unique URL for each user.",
    image: "/images/project11.PNG",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://hackathon-milestone-5-nine-chi.vercel.app/",
    github: "https://github.com/rubab1991",
  },
  {
    title: "Weather Widget",
    description:
      "A sleek weather widget displaying real-time weather data for any location.",
    image: "/images/project2.PNG",
    tech: ["React", "API", "CSS"],
    live: "https://weather-widget-hb9lnihoe-rubab-bukharis-projects.vercel.app/",
    github: "https://github.com/rubab1991",
  },
];

/* ── Featured Project Card (full-width hero style) ── */
function FeaturedCard({ project, index = 0 }: { project: Project; index?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const isReversed = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="mb-12"
    >
      <motion.div
        className="relative glass rounded-2xl overflow-hidden group"
      >
        {/* Gradient glow border */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-accent via-accent-secondary to-accent opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500 -z-10" />

        <div className={`grid lg:grid-cols-2 gap-0 ${isReversed ? "lg:[direction:rtl]" : ""}`}>
          {/* Image Side */}
          <div className="relative h-64 lg:h-[400px] overflow-hidden lg:[direction:ltr]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className={`absolute inset-0 lg:block hidden ${isReversed ? "bg-gradient-to-l from-transparent to-dark/80" : "bg-gradient-to-r from-transparent to-dark/80"}`} />
            <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent lg:hidden" />
          </div>

          {/* Content Side */}
          <div className="p-8 lg:p-12 flex flex-col justify-center lg:[direction:ltr]">
            <div className="flex items-center gap-2 mb-4">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                Featured Project
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-zinc-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-accent-secondary text-white font-medium hover:shadow-lg hover:shadow-accent/25 transition-shadow"
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 text-white font-medium hover:border-accent hover:text-accent transition-all"
              >
                <Github size={16} />
                GitHub
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Regular Project Card (with 3D tilt) ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePos({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePos({ x: 0, y: 0 });
        }}
        animate={{
          rotateX: isHovered ? -mousePos.y : 0,
          rotateY: isHovered ? mousePos.x : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
        className="glass rounded-2xl overflow-hidden group cursor-pointer h-full"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

          {/* Action buttons on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-4 right-4 flex gap-3"
          >
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-accent to-accent-secondary text-white text-sm font-medium hover:shadow-lg hover:shadow-accent/25 transition-shadow"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg glass-strong flex items-center justify-center text-white hover:text-accent transition-colors"
            >
              <Github size={16} />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-zinc-500 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Projects Section ── */
export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            My Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto">
            A selection of projects that showcase my skills in frontend
            development
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.map((project, i) => (
          <FeaturedCard key={project.title} project={project} index={i} />
        ))}

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* SVG Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="rgba(18, 18, 26, 0.6)"
          />
        </svg>
      </div>
    </section>
  );
}
