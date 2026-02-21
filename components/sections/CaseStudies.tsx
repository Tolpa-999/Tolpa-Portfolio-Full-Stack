'use client'

import { Card } from '@/components/ui/Card'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SiGoogleads, SiCoursera, SiGoogleanalytics, SiGraphql, SiShopify, SiYcombinator } from 'react-icons/si'

interface CaseStudy {
  name: string
  descriptor: string
  problem: string
  solution: string
  highlights: string[]
  results: string
  icon: any
  image?: string
  link?: string
}

/**
 * Case Studies section featuring selected work.
 * Each case follows a structured teardown format.
 * Supports optional full-width project images.
 */
export function CaseStudies() {
  const cases: CaseStudy[] = [
    {
      name: 'Eyzle',
      descriptor: 'Multi-Tenant Lead Generation SaaS',
      icon: SiGoogleads,
      image: '/images/eyzle.webp',
      link: 'https://eyzle.net/',
      problem:
        'B2B companies needed a scalable platform to automate lead generation campaigns across multiple client subdomains with real-time tracking.',
      solution:
        'Built a complete multi-tenant SaaS from scratch with Next.js 16, Express, and PostgreSQL. Implemented subdomain-based tenant resolution, role-based access control, and conversion tracking.',
      highlights: [
        '50+ RESTful APIs with Prisma ORM',
        'Dynamic subdomain routing & SSL ',
        'Role-based access control (RBAC)',
        'Pixel & Conversion API integration',
        'Real-time dashboard & analytics',
        '<200ms average response time',
      ],
      results: '99.9% uptime • Multi-tenant architecture shipped • Production-ready',
    },
    {
      name: 'UR DOC',
      descriptor: 'EdTech Platform',
      icon: SiCoursera,
      image: '/images/ur_doc.webp',
      link: 'https://hazem-hamdy.com',
      problem:
        'Students needed a secure, scalable platform for structured learning with protected video content, controlled access, and real-time engagement features.',
      solution:
        'Architected and built a complete EdTech platform from scratch using Next.js, Node.js, PostgreSQL, and Redis. Implemented secure single-device authentication, protected video streaming, and a full admin system for content and user management.',
      highlights: [
        'Node.js + Express backend architecture',
        'PostgreSQL + Redis session control',
        'Single-device JWT authentication',
        'Bunny.net protected video streaming',
        'Admin dashboard for course & user control',
        'SEO-optimized Next.js frontend',
        'Production VPS deployment with Nginx & SSL',
      ],
      results:
        'Production-ready deployment • Secure content delivery • High-performance architecture',
    },
    {
      name: 'Co Clinic',
      descriptor: 'Telehealth Platform',
      icon: SiGoogleanalytics,
      image: '/images/co_clinic.webp',
      link: 'https://co-clinic-co.vercel.app',
      problem:
        'Healthcare providers needed a secure, HIPAA-compliant system to store and manage patient documents with role-based access.',
      solution:
        'Developed a secure document management platform with encrypted storage, audit logging, and granular permission controls.',
      highlights: [
        'Secure file upload & storage',
        'Role-based document access',
        'Audit trail & logging',
        'Responsive document viewer',
        'Search & filtering system',
      ],
      results: 'Secure deployment • HIPAA-compliant architecture',
    },
    {
      name: 'Admin Dashboard',
      descriptor: 'Real-Time Analytics & Management System',
      icon: SiGraphql,
      image: '/images/admin_dashboard.webp',
      link: 'https://admin-dashboard-react-vercil.netlify.app',
      problem:
        'Operations teams needed a customizable, data-driven dashboard to monitor key metrics in real time and improve decision-making efficiency.',
      solution:
        'Developed a scalable front-end architecture using React, Refine, and GraphQL with TypeScript, enabling real-time analytics, draggable widget customization, and high-performance data visualization.',
      highlights: [
        'Real-time GraphQL data integration',
        'TypeScript-based scalable architecture',
        'Draggable widget dashboard system',
        'Interactive charts & KPI visualization',
        'Refine-powered modular structure',
        'Ant Design + Tailwind responsive UI',
        'Reduced redundant API calls via optimized queries',
      ],
      results:
        'Improved metric visibility for 100+ users • Faster decision workflows • Production-ready analytics interface',
    },
    {
      name: 'Perfumeni',
      descriptor: 'E-commerce Platform',
      icon: SiShopify,
      image: '/images/perfumeni.webp',
      link: '#',
      problem:
        'A boutique fragrance brand needed a modern, conversion-focused e-commerce experience with inventory management.',
      solution:
        'Built a full-stack e-commerce platform with product catalog, cart/checkout, and inventory tracking integration.',
      highlights: [
        'Product catalog with filters',
        'Shopping cart & checkout flow',
        'Inventory management system',
        'Responsive mobile-first design',
      ],
      results: 'Successful launch • Conversion-optimized UI',
    },
    {
      name: 'YC Directory',
      descriptor: 'Startup Discovery Platform',
      icon: SiYcombinator,
      image: '/images/yc_directory.webp',
      link: 'https://yc-directory.vercel.app',
      problem:
        'Investors and founders needed an organized, searchable database of Y Combinator startups.',
      solution:
        'Created a searchable directory with filtering, company profiles, and batch data processing for startup information.',
      highlights: [
        'Advanced search & filtering',
        'Company profile pages',
        'Batch data import system',
        'Scalable data architecture',
      ],
      results: 'Fast search queries • Clean data structure',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-primary relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-center mb-4">
            Selected Work
          </h2>
          <p className="text-muted text-center max-w-2xl mx-auto mb-16">
            Real projects. Real results. Production-ready systems.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          {cases.map((caseStudy, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card glow="cyan" hover={true} className="group">
                <div className="space-y-6">
                  {/* Project header with icon and optional image */}
                  <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-shrink-0">
                      <div className="w-14 h-14 rounded-lg bg-surface border border-accent/20 flex items-center justify-center flex-shrink-0">
                        <caseStudy.icon size={24} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-text mb-1 font-sans">
                          {caseStudy.name}
                        </h3>
                        <p className="text-accent text-sm font-mono">
                          {caseStudy.descriptor}
                        </p>
                      </div>
                    </div>
                    {caseStudy.link && caseStudy.link !== '#' && (
                      <a
                        href={caseStudy.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all duration-300 rounded-lg text-sm font-medium self-start"
                      >
                        <span>View Project</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="fill-current">
                          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Optional full-width project image */}
                  {caseStudy.image && (
                    <div className="w-full rounded-xl overflow-hidden bg-surface border border-surface-700/50 -mt-4">
                      <img
                        src={caseStudy.image}
                        alt={`${caseStudy.name} project screenshot`}
                        className="w-full h-64 md:h-80 object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Problem & Solution */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-muted mb-2">
                        Problem
                      </h4>
                      <p className="text-text">{caseStudy.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-muted mb-2">
                        Solution
                      </h4>
                      <p className="text-text">{caseStudy.solution}</p>
                    </div>
                  </div>

                  {/* Key highlights */}
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-muted mb-3">
                      Technical Highlights
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-muted"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="font-mono text-xs">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="pt-4 border-t border-surface-700/30">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-accent text-sm font-mono">
                        {caseStudy.results}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
