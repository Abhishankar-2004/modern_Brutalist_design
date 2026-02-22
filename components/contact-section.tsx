"use client"

import { motion } from "framer-motion"

interface ContactSectionProps {
  contact: {
    email: string
    phone: string
    location: string
  }
  social: {
    name: string
    url: string
  }[]
}

export function ContactSection({ contact, social }: ContactSectionProps) {
  return (
    <section id="contact" className="px-6 py-20 md:px-10 md:py-32">
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
          CONTACT
        </motion.h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2">
        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="border-t border-raw-dark pt-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Get in Touch
            </span>
          </div>

          <div className="mt-8 space-y-6">
            <div className="group">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Email
              </span>
              <a
                href={`mailto:${contact.email}`}
                className="brutalist-link mt-1 block font-display text-[20px] font-bold uppercase tracking-display md:text-[24px]"
              >
                {contact.email}
              </a>
            </div>

            <div className="group">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Phone
              </span>
              <p className="mt-1 font-mono text-[16px] tracking-wider">
                {contact.phone}
              </p>
            </div>

            <div className="group">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Location
              </span>
              <p className="mt-1 font-display text-[18px] font-bold uppercase tracking-display">
                {contact.location}
              </p>
            </div>
          </div>

          {/* Social links */}
          <div className="mt-10 flex gap-4">
            {social.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-raw-dark px-4 py-2 font-mono text-[12px] uppercase tracking-widest text-foreground transition-all duration-300 hover:bg-raw-neon hover:border-raw-neon hover:text-raw-dark"
              >
                {s.name}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="bg-raw-dark p-8 md:p-10">
            <h3 className="font-display text-[20px] font-bold uppercase tracking-display text-raw-beige md:text-[24px]">
              Send a Message
            </h3>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-raw-beige/60">
                    Name
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full border-b border-raw-beige/30 bg-transparent px-0 py-2 text-[15px] text-raw-beige outline-none transition-colors focus:border-raw-neon"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-raw-beige/60">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full border-b border-raw-beige/30 bg-transparent px-0 py-2 text-[15px] text-raw-beige outline-none transition-colors focus:border-raw-neon"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-raw-beige/60">
                  Subject
                </label>
                <input
                  type="text"
                  className="mt-2 w-full border-b border-raw-beige/30 bg-transparent px-0 py-2 text-[15px] text-raw-beige outline-none transition-colors focus:border-raw-neon"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-raw-beige/60">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full resize-none border-b border-raw-beige/30 bg-transparent px-0 py-2 text-[15px] text-raw-beige outline-none transition-colors focus:border-raw-neon"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-raw-neon px-8 py-3 font-display text-[13px] font-bold uppercase tracking-widest text-raw-dark transition-all duration-300 hover:bg-raw-red hover:text-raw-beige"
              >
                Send
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
