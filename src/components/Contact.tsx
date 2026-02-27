"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rubab.bukhari66@gmail.com",
    href: "mailto:rubab.bukhari66@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92-347-1299115",
    href: "tel:+923471299115",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/rubab1991", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rubab-bukhari-1b7113128/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/bu96965951", label: "Twitter" },
  { icon: Mail, href: "mailto:rubab.bukhari66@gmail.com", label: "Email" },
];

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  textarea,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  const inputClasses =
    "w-full bg-transparent border border-zinc-800 rounded-xl px-4 pt-6 pb-2 text-white outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_20px_rgba(108,99,255,0.15)]";

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isActive
            ? "top-2 text-xs text-accent"
            : "top-1/2 -translate-y-1/2 text-sm text-zinc-500"
        } ${textarea && !isActive ? "top-4 translate-y-0" : ""}`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${inputClasses} resize-none h-32`}
          required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClasses}
          required={required}
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent! Thank you for reaching out.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl" />

      <div ref={sectionRef} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto">
            Have a project in mind? Let&apos;s work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:border-accent/50 transition-colors duration-300">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-zinc-300 font-medium group-hover:text-accent transition-colors duration-300">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-sm text-zinc-500 mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent/30 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 md:p-8 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <FloatingInput
                  id="name"
                  label="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FloatingInput
                  id="email"
                  label="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <FloatingInput
                id="message"
                label="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                textarea
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent to-accent-secondary text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-accent/25 transition-shadow duration-300"
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
