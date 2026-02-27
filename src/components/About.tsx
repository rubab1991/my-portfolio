"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Smartphone, Bot, Server } from "lucide-react";

const skills = [
  { name: "Next.js (App Router)", level: 92 },
  { name: "TypeScript", level: 88 },
  { name: "React.js", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "REST API Integration", level: 85 },
  { name: "AI / OpenAI API", level: 80 },
];

const highlights = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    desc: "Next.js, React, TypeScript with clean component architecture and reusability",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Mobile-first, pixel-perfect interfaces that look stunning on every device",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    desc: "Next.js API Routes, REST integration, secure environment management",
  },
  {
    icon: Bot,
    title: "AI Integration",
    desc: "OpenAI API, AI-powered apps, prompt structuring and response handling",
  },
];

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-zinc-300 font-medium">{name}</span>
        <span className="text-accent">{level}%</span>
      </div>
      <div className="h-2 bg-dark-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2 * index, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
        />
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - About Text & Highlights */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-lg leading-relaxed mb-6"
            >
              With 2+ years of hands-on experience in frontend and full-stack
              web development, I specialize in building modern, scalable, and
              high-performance web applications using cutting-edge technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-500 leading-relaxed mb-10"
            >
              I focus on clean architecture, responsive UI systems, and
              AI-powered integrations while maintaining production-ready
              standards. I develop intelligent interfaces that combine modern UI
              with AI-driven functionality for seamless user experiences.
            </motion.p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl p-4 group cursor-default"
                >
                  <Icon
                    size={24}
                    className="text-accent mb-2 group-hover:text-accent-secondary transition-colors duration-300"
                  />
                  <h3 className="text-white font-semibold text-sm mb-1">{title}</h3>
                  <p className="text-zinc-500 text-xs">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-bold text-white mb-8"
            >
              My Skills
            </motion.h3>
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 mt-10"
            >
              {[
                { num: "10+", label: "Projects" },
                { num: "2+", label: "Years Exp." },
                { num: "100%", label: "Dedication" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-bold gradient-text">{num}</p>
                  <p className="text-zinc-500 text-xs mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
