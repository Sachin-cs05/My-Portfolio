"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background remains SAME */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-cyan-400 font-mono mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
        >
          <span className="text-foreground">Sachin</span>
        </motion.h1>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          <span className="font-mono">
            Full Stack Developer <span className="text-cyan-400">|</span> Backend Focused{" "}
            <span className="text-cyan-400">|</span> DSA Enthusiast
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          B.Tech Computer Science student with strong problem-solving skills (300+ DSA problems solved).
          I build scalable web applications using Node.js, Express, MongoDB, and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-background font-semibold px-8" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:bg-muted text-foreground bg-transparent"
            asChild
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/Sachin-cs05", label: "GitHub" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/sachinsainicse/", label: "LinkedIn" },
            { icon: Mail, href: "sachinss23cs@gmail.com", label: "Email" },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-border hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator remains SAME */}
    </section>
  )
}
