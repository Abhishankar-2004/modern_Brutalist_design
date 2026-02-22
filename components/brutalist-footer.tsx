"use client"

import { motion } from "framer-motion"

interface FooterProps {
  name: string
  social: { name: string; url: string }[]
}

export function BrutalistFooter({ name, social }: FooterProps) {
  return (
    <footer className="border-t border-raw-border px-6 pb-8 pt-16 md:px-10 md:pb-12 md:pt-20">
      {/* Footer columns */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="font-display text-[18px] font-bold uppercase tracking-display">
            {name}
          </h3>
          <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
            Aspiring Software Engineer building innovative solutions with data-driven approaches.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-[14px] font-bold uppercase tracking-display">
            Navigation
          </h4>
          <nav className="mt-4 flex flex-col gap-3">
            {["About", "Skills", "Projects", "Education", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="brutalist-link w-fit font-mono text-[12px] uppercase tracking-widest text-muted-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-display text-[14px] font-bold uppercase tracking-display">
            Connect
          </h4>
          <nav className="mt-4 flex flex-col gap-3">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-link w-fit font-mono text-[12px] uppercase tracking-widest text-muted-foreground"
              >
                {s.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-display text-[14px] font-bold uppercase tracking-display">
            Stay Updated
          </h4>
          <div className="mt-4 bg-raw-dark p-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border-b border-raw-beige/30 bg-transparent px-0 py-2 font-mono text-[13px] text-raw-beige outline-none transition-colors focus:border-raw-neon"
            />
            <button className="mt-3 bg-raw-neon px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-raw-dark transition-all duration-300 hover:bg-raw-red hover:text-raw-beige">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 border-t border-raw-border pt-6 md:mt-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            Bengaluru, India
          </p>
        </div>
      </div>

      {/* Ghost brand name */}
      <motion.div
        className="mt-12 overflow-hidden md:mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p
          className="font-display font-bold uppercase leading-[0.85] tracking-display text-raw-border select-none"
          style={{ fontSize: "clamp(4rem, 8vw, 10rem)" }}
        >
          {name}
        </p>
      </motion.div>
    </footer>
  )
}
