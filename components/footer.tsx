"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

const socialLinks = [
  { icon: Github, href: "https://github.com/Sachin-cs05", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sachinsainicse", label: "LinkedIn" },
  { icon: Mail, href: "mailto:sachinss23cs@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo / Name */}
          <motion.a
            href="#"
            className="text-xl font-bold text-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-cyan-400">&lt;</span>
            Sachin&nbsp;
            <span className="text-cyan-400">/&gt;</span>
          </motion.a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-rose-400 fill-rose-400" /> by Sachin 
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sachin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
