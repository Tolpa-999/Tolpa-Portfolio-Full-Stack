'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiNodedotjs, SiPostgresql } from 'react-icons/si'

/**
 * Hero section - full viewport height with grid pattern background.
 * Features main headline, subheadline, CTAs, and system flow diagram.
 */
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated grid pattern background */}
      <div className="absolute inset-0 grid-pattern animate-slow-grid" />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/50 to-primary" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <ScrollReveal>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/20 bg-accent/5 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm text-accent font-medium">
                  2+ Years Experience
                </span>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-sans tracking-tighter leading-tight">
                Software Engineer &{' '}
                <span className="text-accent">Full-Stack Developer</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg text-muted font-body leading-relaxed">
                I transform ideas into real digital products — from business websites and platforms to admin dashboards and fully integrated systems — with clean code, exceptional user experience, and high performance.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="primary" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contact Me
                </Button>
                <a
                  href="/TolpaCV.pdf"
                  download
                  className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 px-8 py-4 text-lg bg-transparent border border-cta/50 text-cta hover:bg-cta/10 hover:border-cta"
                >
                  Download CV
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - System Flow Diagram with Icons */}
          <ScrollReveal delay={0.4} className="hidden lg:block">
            <div className="relative">
              {/* Minimalist system flow diagram with icons */}
              <div className="grid grid-cols-3 gap-8 p-8 relative">
                {/* Subtle connecting background lines */}
                <div className="absolute inset-8 grid grid-rows-3 gap-[88px]">
                  <div className="flex items-center justify-center border-b border-accent/10"></div>
                  <div className="flex items-center justify-center border-b border-accent/10"></div>
                  <div className="flex items-center justify-center"></div>
                </div>

                {/* Top row */}
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-surface border border-accent/30 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <SiReact size={32} className="text-accent" />
                  </motion.div>
                  <span className="text-xs text-muted font-mono">Frontend</span>
                </div>

                <div className="flex flex-col items-center gap-3 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-surface border border-accent/30 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <SiNodedotjs size={32} className="text-accent" />
                  </motion.div>
                  <span className="text-xs text-muted font-mono">API Layer</span>
                </div>

                <div className="flex flex-col items-center gap-3 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-surface border border-accent/30 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.83 6-3.83s5.97 1.84 6 3.83c-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                  <span className="text-xs text-muted font-mono">Auth</span>
                </div>

                {/* Middle row */}
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-surface border border-accent/30 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm3 3h2v2H9V9zm3 0h2v2h-2V9zm-3 3h2v2H9v-2zm3 0h2v2h-2v-2z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                  <span className="text-xs text-muted font-mono">Cache</span>
                </div>

                <div className="flex flex-col items-center gap-3 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-surface border border-accent/30 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    <SiPostgresql size={32} className="text-accent" />
                  </motion.div>
                  <span className="text-xs text-muted font-mono">Database</span>
                </div>

                <div className="flex flex-col items-center gap-3 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-surface border border-accent/30 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.8, duration: 0.5 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                  <span className="text-xs text-muted font-mono">Queue</span>
                </div>

                {/* Bottom row */}
                <div className="flex flex-col items-center gap-3 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-surface border border-accent/30 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                  <span className="text-xs text-muted font-mono">VPS</span>
                </div>

                <div className="flex flex-col items-center gap-3 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-surface border border-accent/30 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5s-2.24-5-5-5z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                  <span className="text-xs text-muted font-mono">Deploy</span>
                </div>

                <div className="flex flex-col items-center gap-3 relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-surface border border-accent/30 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.4, duration: 0.5 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                  <span className="text-xs text-muted font-mono">Monitor</span>
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-accent/5 blur-3xl -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <ScrollReveal delay={0.8} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          className="flex flex-col items-center gap-2 text-muted"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="#9CA3AF"
              strokeWidth="1"
              strokeOpacity="0.3"
            />
            <motion.circle
              cx="8"
              cy="6"
              r="2"
              fill="#22D3EE"
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </ScrollReveal>
    </section>
  )
}
