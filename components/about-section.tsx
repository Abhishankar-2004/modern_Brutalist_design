"use client"

import { motion } from "framer-motion"

interface AboutSectionProps {
  about: string
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="px-6 py-20 md:px-10 md:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Label column */}
        <motion.div
          className="md:col-span-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-t border-raw-dark pt-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Manifesto
            </span>
          </div>
        </motion.div>

        {/* Content column */}
        <motion.div
          className="md:col-span-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-[24px] font-medium uppercase leading-[1.3] text-foreground md:text-[36px] md:leading-[1.25] lg:text-[42px]">
            <span className="inline-block pl-12 md:pl-[3rem]">Passionate</span> and motivated
            university student dedicated to pursuing a career in{" "}
            <span className="text-raw-brown">data engineering</span>. Committed to{" "}
            <span className="text-raw-brown">problem-solving</span> and leveraging data-driven
            solutions to tackle{" "}
            <span className="text-raw-brown">real-world challenges</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
