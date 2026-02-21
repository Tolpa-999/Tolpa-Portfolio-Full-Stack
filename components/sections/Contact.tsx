'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

/**
 * Contact section with form for lead generation.
 * Features smooth animations and clear validation feedback.
 */
export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission (replace with actual email service)
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Create mailto link for email client
    const mailtoLink = `mailto:mahmudtolpa666@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`

    // Open email client
    window.location.href = mailtoLink

    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-primary relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-surface/20 to-primary" />

      {/* Accent glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-center mb-4">
            Let's Build Your Digital Vision
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Whether you need a new website, a web platform, an admin dashboard, or want to improve an existing system — let's discuss how I can help transform your idea into a professional digital reality.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-text mb-4 font-sans">
                  Get in Touch
                </h3>
                <p className="text-muted leading-relaxed">
                  With nearly two years of experience in full-stack development, I'm ready to help you build modern, fast, and user-friendly websites and web platforms — from concept to deployment.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-surface border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Email</p>
                    <a href="mailto:mahmudtolpa666@gmail.com" className="text-text hover:text-accent transition-colors duration-300">
                      mahmudtolpa666@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-text mb-4 font-sans">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Tolpa-999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-surface border border-surface-700/50 flex items-center justify-center hover:border-cta/30 hover:scale-110 transition-all duration-300 group"
                    aria-label="GitHub"
                  >
                    <SiGithub size={20} className="text-muted group-hover:text-cta transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mahmud-tolpa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-surface border border-surface-700/50 flex items-center justify-center hover:border-cta/30 hover:scale-110 transition-all duration-300 group"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} className="text-muted group-hover:text-cta transition-colors duration-300" />
                  </a>
                </div>
              </div>

              {/*               <div className="bg-accent/5 rounded-lg border border-accent/20 p-6">
                <p className="text-sm text-muted leading-relaxed mb-2">
                  <span className="text-accent font-medium">Response Time:</span> I typically respond within 24-48 hours.
                </p>
                <p className="text-xs text-muted">
                  The contact form will open your email client to send me a message directly.
                </p>
              </div> */}
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <Card glow="cyan">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-surface border border-surface-700/50 rounded-lg text-text placeholder-muted/50 focus:outline-none focus:border-accent/50 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-700/50 rounded-lg text-text placeholder-muted/50 focus:outline-none focus:border-cta/50 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-surface border border-surface-700/50 rounded-lg text-text placeholder-muted/50 focus:outline-none focus:border-cta/50 transition-colors duration-300"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-surface border border-surface-700/50 rounded-lg text-text placeholder-muted/50 focus:outline-none focus:border-cta/50 transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-cta text-primary font-medium rounded-lg hover:bg-cta/90 hover:shadow-[0_0_24px_rgba(251,191,36,0.25)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaEnvelope size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-accent text-sm"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="fill-current">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                    Message sent successfully! Opening your email client...
                  </motion.div>
                )}
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
