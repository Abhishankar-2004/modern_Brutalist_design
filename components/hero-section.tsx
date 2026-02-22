"use client"

import { motion } from "framer-motion"

interface HeroSectionProps {
  name: string
  title: string
  tagline: string
}

export function HeroSection({ name, title, tagline }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen flex-col justify-end bg-raw-dark overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/profile.jpg"
          alt=""
          className="h-full w-full object-cover object-top opacity-40 grayscale"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-12 pt-32 md:px-10 md:pb-16">
        <div className="border-t border-raw-beige/30 pt-8">
          {/* Metadata row */}
          <motion.div
            className="mb-8 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-raw-beige/60 md:gap-8 md:text-[12px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span>Portfolio / 2026</span>
            <span>Bengaluru, IN</span>
            <span>Software Engineer</span>
          </motion.div>

          {/* Massive headline */}
          <motion.h1
            className="font-display font-bold uppercase leading-display tracking-display text-raw-beige"
            style={{ fontSize: "clamp(3rem, 13.5vw, 14rem)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {name.split(" ")[0]}
            <br />
            <span className="ml-[15vw] md:ml-[20vw]">{name.split(" ").slice(1).join(" ") || "S"}</span>
          </motion.h1>

          {/* Subtitle & CTA */}
          <motion.div
            className="mt-8 flex flex-col items-start gap-6 md:mt-12 md:flex-row md:items-end md:justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="max-w-md">
              <p className="font-mono text-[12px] uppercase tracking-[0.15em] text-raw-beige/70 md:text-[13px]">
                {title}
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-raw-beige/50">
                {tagline}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-raw-red px-8 py-4 font-display text-[14px] font-bold uppercase tracking-widest text-raw-beige transition-all duration-300 hover:bg-raw-neon hover:text-raw-dark"
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="rotate-[-45deg]">
                <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
