"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const footerLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/rubab1991" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rubab-bukhari-1b7113128/" },
  { icon: Twitter, href: "https://x.com/bu96965951" },
  { icon: Mail, href: "mailto:rubab.bukhari66@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800/50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold gradient-text">RB.</span>
            <p className="text-zinc-500 text-sm mt-2 max-w-xs">
              Frontend developer crafting modern web experiences with passion and precision.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex gap-3 justify-center md:justify-end">
            {socialLinks.map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-zinc-500 hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800/50 mt-8 pt-8 text-center">
          <p className="text-zinc-600 text-sm flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} Rubab Bukhari. Made with
            <Heart size={14} className="text-red-500 fill-red-500" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
