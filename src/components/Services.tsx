"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Smartphone,
  Figma,
  Search,
  Rocket,
  Code,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building fast, responsive websites using Next.js, React, and modern web technologies.",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect, mobile-first designs that look stunning on every device and screen size.",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: Figma,
    title: "UI/UX Design",
    description:
      "Translating Figma designs into clean, interactive, and accessible web interfaces.",
    gradient: "from-orange-500 to-red-400",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Implementing best practices for search engine visibility and web performance.",
    gradient: "from-green-500 to-emerald-400",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing load times, Core Web Vitals, and overall application performance.",
    gradient: "from-accent to-accent-secondary",
  },
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable, well-documented code following industry best practices.",
    gradient: "from-rose-500 to-violet-400",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            What I Do
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto">
            Comprehensive web development services to bring your vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 group cursor-default relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${gradient} p-[1px] mb-5`}
                >
                  <div className="w-full h-full rounded-xl bg-dark-100 flex items-center justify-center">
                    <Icon
                      size={24}
                      className="text-white group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
