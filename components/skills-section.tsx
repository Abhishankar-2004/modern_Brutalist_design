"use client"

import { motion } from "framer-motion"

interface Skill {
  name: string
  level: number
}

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="px-6 py-20 md:px-10 md:py-32">
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
          SKILLS
        </motion.h2>
      </div>

      {/* Skills grid */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="group border-b border-raw-border pb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-[18px] font-bold uppercase tracking-display md:text-[22px]">
                {skill.name}
              </h3>
              <span className="font-mono text-[12px] tracking-widest text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="mt-4 h-[3px] w-full bg-raw-border">
              <motion.div
                className="h-full bg-raw-red transition-colors duration-300 group-hover:bg-raw-neon"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
