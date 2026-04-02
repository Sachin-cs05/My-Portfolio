"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    shortDesc: "Full-stack shopping experience with modern UI",
    problem: "Traditional e-commerce sites often have poor UX and slow performance, leading to cart abandonment.",
    solution:
      "Built a lightning-fast e-commerce platform with optimized images, smart caching, and intuitive checkout flow.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    outcome: "50% faster load times, 30% increase in conversion rate",
    image: "/modern-ecommerce-dashboard-dark-theme.png",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    shortDesc: "Collaborative project management tool",
    problem: "Teams struggle with task visibility and real-time collaboration across different time zones.",
    solution: "Created a real-time collaborative workspace with drag-and-drop functionality and instant updates.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
    outcome: "Used by 500+ teams, 4.8 star rating",
    image: "/task-management-kanban-board-dark-theme.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 3,
    title: "AI Content Generator",
    shortDesc: "GPT-powered writing assistant",
    problem: "Content creators spend hours writing and editing, reducing their productivity.",
    solution: "Developed an AI assistant that helps generate, edit, and optimize content with a single click.",
    tech: ["Next.js", "OpenAI API", "Vercel AI SDK", "Prisma", "PostgreSQL"],
    outcome: "10,000+ pieces of content generated, 70% time savings",
    image: "/ai-writing-assistant-interface-dark-theme.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 4,
    title: "Fitness Tracker",
    shortDesc: "Personal health monitoring dashboard",
    problem: "Fitness enthusiasts need a centralized place to track progress across multiple metrics.",
    solution: "Built a comprehensive dashboard with data visualization, goal tracking, and progress insights.",
    tech: ["React", "D3.js", "Express", "MongoDB", "Chart.js"],
    outcome: "5,000+ active users, featured in ProductHunt",
    image: "/fitness-tracking-dashboard-charts-dark-theme.jpg",
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 font-mono mb-2">What I&apos;ve built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Featured Projects</h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative rounded-2xl border border-border bg-card/30 backdrop-blur-sm overflow-hidden hover:border-cyan-400/50 transition-all cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                {project.featured && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-mono bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-400/30">
                    Featured
                  </span>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.shortDesc}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* View Details */}
                <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:translate-x-2 transition-transform">
                  View Details <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-48 md:h-64 object-cover rounded-xl mb-6"
              />

              <h3 className="text-2xl font-bold text-foreground mb-2">{selectedProject.title}</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-cyan-400 font-mono text-sm mb-2">The Problem</h4>
                  <p className="text-muted-foreground">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-mono text-sm mb-2">The Solution</h4>
                  <p className="text-muted-foreground">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-mono text-sm mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-sm font-mono bg-muted rounded-full text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-mono text-sm mb-2">Outcome</h4>
                  <p className="text-muted-foreground">{selectedProject.outcome}</p>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-background">
                    <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
