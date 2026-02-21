'use client'

import { Hero } from '@/components/sections/Hero'
import { Tools } from '@/components/sections/Tools'
import { Metrics } from '@/components/sections/Metrics'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { SystemsThinking } from '@/components/sections/SystemsThinking'
import { MVPPhilosophy } from '@/components/sections/MVPPhilosophy'
import { TechStack } from '@/components/sections/TechStack'
import { Contact } from '@/components/sections/Contact'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'

/**
 * Main portfolio page.
 * Single-page application with smooth scroll sections.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-primary">
      <Hero />
      <Tools />
      <Metrics />
      <CaseStudies />
      <SystemsThinking />
      <MVPPhilosophy />
      <TechStack />
      <Contact />
      <CTA />
      <Footer />
    </main>
  )
}
