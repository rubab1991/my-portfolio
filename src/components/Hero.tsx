"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const floatingShapes = [
  { className: "w-72 h-72 bg-accent/20 top-20 -left-20", delay: 0 },
  { className: "w-96 h-96 bg-accent-secondary/15 -top-10 right-0", delay: 2 },
  { className: "w-64 h-64 bg-purple-500/15 bottom-20 left-1/3", delay: 4 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Blobs */}
      {floatingShapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl animate-blob ${shape.className}`}
          style={{ animationDelay: `${shape.delay}s` }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent font-medium tracking-widest uppercase text-sm mb-4"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Rubab Bukhari</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-400 font-medium mb-8"
            >
              Frontend Developer{" "}
              <span className="text-accent">|</span> Next.js Specialist
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-zinc-500 max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              I craft modern, responsive web experiences with clean code and
              pixel-perfect design. Turning ideas into elegant digital solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="#projects"
                className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-accent to-accent-secondary text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                <span className="relative z-10">View Projects</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full border border-zinc-700 text-white font-medium hover:border-accent hover:text-accent transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/rubab1991" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/rubab-bukhari-1b7113128/" },
                { icon: Mail, href: "mailto:rubab.bukhari66@gmail.com" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent/50 transition-colors duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glowing ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent to-accent-secondary opacity-20 blur-2xl animate-pulse-slow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gradient-border">
                <Image
                  src="/images/profile.png"
                  alt="Rubab Bukhari"
                  fill
                  className="object-cover rounded-full p-1"
                  priority
                />
              </div>
              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-12 h-12 rounded-xl glass flex items-center justify-center text-accent text-xl font-bold rotate-12"
              >
                &lt;/&gt;
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-6 w-14 h-14 rounded-xl glass flex items-center justify-center text-accent-secondary text-sm font-mono"
              >
                JS
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-accent transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>

      {/* SVG Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 md:h-24"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="rgba(18, 18, 26, 0.8)"
          />
        </svg>
      </div>
    </section>
  );
}
