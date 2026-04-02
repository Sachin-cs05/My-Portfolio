"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    color: "cyan",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend",
    color: "emerald",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 80 },
      { name: "Java (Basics)", level: 70 },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "amber",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 75 },
      { name: "Linux Basics", level: 70 },
      { name: "Docker (Basic)", level: 60 },
    ],
  },
  {
    title: "CS Core",
    color: "rose",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Object-Oriented Programming", level: 85 },
      { name: "DBMS", level: 80 },
      { name: "Operating Systems", level: 75 },
      { name: "Computer Networks", level: 70 },
    ],
  },
]

const colorClasses = {
  cyan: {
    bg: "bg-cyan-500",
    text: "text-cyan-400",
    border: "border-cyan-400/30",
    glow: "shadow-cyan-500/20",
  },
  emerald: {
    bg: "bg-emerald-500",
    text: "text-emerald-400",
    border: "border-emerald-400/30",
    glow: "shadow-emerald-500/20",
  },
  amber: {
    bg: "bg-amber-500",
    text: "text-amber-400",
    border: "border-amber-400/30",
    glow: "shadow-amber-500/20",
  },
  rose: {
    bg: "bg-rose-500",
    text: "text-rose-400",
    border: "border-rose-400/30",
    glow: "shadow-rose-500/20",
  },
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-mono mb-2">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses]
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                className={`p-8 rounded-2xl border ${colors.border} bg-card/30 backdrop-blur-sm hover:shadow-xl ${colors.glow} transition-shadow`}
              >
                <h3 className={`text-xl font-semibold ${colors.text} mb-6`}>
                  {category.title}
                </h3>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-muted-foreground text-sm">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.15 + skillIndex * 0.1,
                            ease: "easeOut",
                          }}
                          className={`h-full ${colors.bg} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
