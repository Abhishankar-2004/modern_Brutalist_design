"use client"

import { motion } from "framer-motion"

interface Experience {
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
}

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="px-6 py-20 md:px-10 md:py-32">
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
          EXPERIENCE
        </motion.h2>
      </div>

      <div className="mt-12 md:mt-16">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            className="group grid grid-cols-1 gap-6 border-b border-raw-border py-10 md:grid-cols-12 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Left: metadata */}
            <div className="md:col-span-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {exp.period}
              </span>
              <h3 className="mt-2 font-display text-[20px] font-bold uppercase tracking-display md:text-[24px]">
                {exp.position}
              </h3>
              <p className="mt-1 font-mono text-[13px] tracking-wider text-raw-red">
                {exp.company}
              </p>
            </div>

            {/* Right: description */}
            <div className="md:col-span-8">
              <p className="text-[15px] leading-relaxed text-muted-foreground md:text-[16px]">
                {exp.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="border border-raw-dark px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-foreground transition-colors duration-300 hover:bg-raw-dark hover:text-raw-beige"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
