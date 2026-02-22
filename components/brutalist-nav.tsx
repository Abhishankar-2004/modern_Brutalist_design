"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function BrutalistNav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full mix-blend-difference">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <motion.a
          href="#"
          className="font-display text-[20px] font-bold uppercase tracking-display text-raw-beige md:text-[24px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          ABHI S
        </motion.a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="brutalist-link text-[14px] font-medium uppercase tracking-widest text-raw-beige"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-[6px] md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-6 bg-raw-beige transition-transform duration-300 ${mobileOpen ? "translate-y-[8px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 bg-raw-beige transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-raw-beige transition-transform duration-300 ${mobileOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <motion.nav
          className="flex flex-col gap-6 bg-raw-dark px-6 pb-8 pt-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="brutalist-link text-[16px] font-medium uppercase tracking-widest text-raw-beige"
            >
              {link.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  )
}
