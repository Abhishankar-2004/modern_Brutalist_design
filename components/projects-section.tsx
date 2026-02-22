"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface Project {
  title: string
  period: string
  description: string
  technologies: string[]
  github: string
  image: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="px-6 py-20 md:px-10 md:py-32">
      {/* Section divider */}
      <div className="border-b border-t border-raw-border py-6 md:py-8">
        <motion.h2
          className="font-display font-bold uppercase leading-display tracking-display text-raw-brown"
          style={{ fontSize: "clamp(3rem, 12vw, 12rem)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          PROJECTS
        </motion.h2>
      </div>

      {/* Asymmetric grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-12 md:gap-6">
        {projects.map((project, index) => {
          const isWide = index % 3 === 0
          const hasOffset = index % 3 === 1

          return (
            <motion.div
              key={index}
              className={`group ${isWide ? "md:col-span-7" : "md:col-span-5"} ${hasOffset ? "md:mt-24" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: isWide ? "4/3" : "3/4" }}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                {/* Quick view badge */}
                <motion.div
                  className="absolute right-4 top-4 bg-raw-neon px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-raw-dark"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0, scale: hoveredIndex === index ? 1 : 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  View
                </motion.div>
              </div>

              {/* Details */}
              <div className="mt-4 border-b border-raw-border pb-4 transition-colors duration-300 group-hover:border-raw-red">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-[16px] font-bold uppercase tracking-display md:text-[20px]">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    {project.period}
                  </span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="border border-raw-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutalist-link mt-3 inline-block font-mono text-[12px] uppercase tracking-widest text-foreground"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
