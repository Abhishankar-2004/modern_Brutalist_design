"use client"

import { motion } from "framer-motion"

interface Education {
  institution: string
  degree: string
  period: string
  description: string
}

interface Certification {
  name: string
  provider: string
  date: string
}

interface EducationSectionProps {
  education: Education[]
  certifications: Certification[]
}

export function EducationSection({ education, certifications }: EducationSectionProps) {
  return (
    <section id="education" className="px-6 py-20 md:px-10 md:py-32">
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
          EDUCATION
        </motion.h2>
      </div>

      {/* Education entries */}
      <div className="mt-12 md:mt-16">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="group grid grid-cols-1 gap-4 border-b border-raw-border py-8 md:grid-cols-12 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="md:col-span-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {edu.period}
              </span>
            </div>
            <div className="md:col-span-5">
              <h3 className="font-display text-[18px] font-bold uppercase tracking-display md:text-[22px]">
                {edu.degree}
              </h3>
              <p className="mt-1 text-[14px] text-muted-foreground">
                {edu.institution}
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <span className="inline-block border border-raw-red px-3 py-1 font-mono text-[12px] font-bold uppercase tracking-widest text-raw-red">
                {edu.description}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="mt-16">
        <div className="border-t border-raw-dark pt-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Certifications
          </span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="group border border-raw-border p-6 transition-all duration-300 hover:border-raw-dark hover:bg-raw-dark"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-raw-beige/60">
                {cert.date}
              </span>
              <h3 className="mt-3 font-display text-[18px] font-bold uppercase tracking-display transition-colors group-hover:text-raw-beige">
                {cert.name}
              </h3>
              <p className="mt-1 font-mono text-[12px] uppercase tracking-widest text-raw-red transition-colors group-hover:text-raw-neon">
                {cert.provider}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
