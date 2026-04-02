"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Trophy, Code, GitBranch, Star } from "lucide-react"

const codingProfiles = [
  {
    platform: "LeetCode",
    username: "leetcode.com/sachin",
    stats: [
      { label: "Problems Solved", value: "300+" },
      { label: "Strong Areas", value: "Arrays, DP, Trees" },
      { label: "Focus", value: "Interview Preparation" },
    ],
    color: "amber",
    icon: Code,
  },
  {
    platform: "GeeksforGeeks",
    username: "geeksforgeeks.org/sachin",
    stats: [
      { label: "Problems Solved", value: "100+" },
      { label: "Practice Type", value: "DSA & Core CS" },
      { label: "Consistency", value: "Regular Practice" },
    ],
    color: "emerald",
    icon: Code,
  },
  {
    platform: "GitHub",
    username: "github.com/your-username",
    stats: [
      { label: "Projects", value: "Academic & Personal" },
      { label: "Focus", value: "Clean Code & Learning" },
      { label: "Usage", value: "Daily Development" },
    ],
    color: "cyan",
    icon: GitBranch,
  },
]

const achievements = [
  {
    title: "300+ DSA Problems Solved",
    description: "Solved problems across LeetCode and GeeksforGeeks",
    icon: Trophy,
  },
  {
    title: "Strong CS Fundamentals",
    description: "Good understanding of DSA, OOP, DBMS, OS, and CN",
    icon: Star,
  },
  {
    title: "Backend & Full Stack Projects",
    description: "Built projects using Node.js, Express, MongoDB, and React",
    icon: Code,
  },
  {
    title: "Placement Focused Learning",
    description: "Actively preparing for software engineering interviews",
    icon: GitBranch,
  },
]

const colorClasses = {
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-400/30",
    text: "text-amber-400",
    hover: "hover:border-amber-400/60",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-400/30",
    text: "text-emerald-400",
    hover: "hover:border-emerald-400/60",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-400/30",
    text: "text-cyan-400",
    hover: "hover:border-cyan-400/60",
  },
}

export function AchievementsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="achievements" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-mono mb-2">My accomplishments</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Achievements & Profiles
          </h2>
        </motion.div>

        {/* Coding Profiles */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {codingProfiles.map((profile, index) => {
            const colors = colorClasses[profile.color as keyof typeof colorClasses]
            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`p-6 rounded-2xl border ${colors.border} ${colors.bg} backdrop-blur-sm ${colors.hover} transition-colors`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <profile.icon className={`w-6 h-6 ${colors.text}`} />
                  <div>
                    <h3 className="font-semibold text-foreground">{profile.platform}</h3>
                    <p className="text-sm text-muted-foreground">{profile.username}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className={`font-mono font-semibold ${colors.text}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Key Highlights
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-cyan-400/50 transition-colors text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <achievement.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
