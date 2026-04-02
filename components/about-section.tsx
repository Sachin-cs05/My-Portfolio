"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const timelineItems = [
  {
    year: "2023",
    title: "Started Programming",
    description: "Began learning programming fundamentals and exploring how software works.",
  },
  {
    year: "2024",
    title: "Core CS & DSA Focus",
    description: "Learned Data Structures, Algorithms, OOP, DBMS, and practiced problem solving.",
  },
  {
    year: "2025",
    title: "Web Development",
    description: "Started building web applications using HTML, CSS, JavaScript, and backend technologies.",
  },
  {
    year: "2026",
    title: "Backend & Full Stack Projects",
    description: "Built full stack projects using Node.js, Express, MongoDB, and modern frameworks.",
  },
  {
    year: "2027",
    title: "Placement Preparation",
    description: "Improving DSA, system fundamentals, and preparing for software engineering roles.",
  },
]

const values = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I focus on writing clean, readable code while continuously improving my skills.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I enjoy solving algorithmic and real-world problems using logical thinking.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt and eager to learn new technologies and concepts.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Enjoy collaborating on projects and learning from peers and mentors.",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-mono mb-2">Get to know me</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">About Me</h2>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Computer Science student passionate about backend & full-stack development
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a B.Tech Computer Science student with a strong foundation in core
                computer science subjects and problem solving. I enjoy understanding how
                systems work internally and applying that knowledge to build real-world
                applications.
              </p>

              <p>
                I primarily focus on backend and full-stack web development using
                JavaScript, Node.js, Express, MongoDB, and modern frontend frameworks.
                Alongside development, I actively practice Data Structures and Algorithms
                and have solved 300+ problems across platforms like LeetCode and GFG.
              </p>

              <p>
                Currently, I am focused on strengthening my development skills, building
                impactful projects, and preparing for software engineering roles where I
                can learn, grow, and contribute to meaningful products.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-cyan-400/50 transition-colors group"
              >
                <value.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
            My Journey
          </h3>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
                  }`}
                >
                  <div className="md:w-1/2">
                    <div
                      className={`p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-cyan-400/50 transition-colors ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <span className="text-cyan-400 font-mono text-sm">{item.year}</span>
                      <h4 className="font-semibold text-foreground mt-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
