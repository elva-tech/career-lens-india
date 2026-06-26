import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const concepts = [
  {
    id: 'a',
    name: 'Concept A',
    tagline: 'Corporate Premium',
    description: 'Stripe-inspired elegance. Structured grids, serif accents, and deep navy authority.',
    gradient: 'from-primary to-primary-light',
    accent: 'bg-secondary/10 text-secondary',
    href: '/',
  },
  {
    id: 'b',
    name: 'Concept B',
    tagline: 'Modern Startup',
    description: 'Vercel × Linear energy. Bold typography, bento grids, and gradient mesh backgrounds.',
    gradient: 'from-gray-900 to-primary',
    accent: 'bg-accent/10 text-accent',
    href: '/concept-b',
  },
  {
    id: 'c',
    name: 'Concept C',
    tagline: 'Student Friendly',
    description: 'Warm, approachable, and visual. Rounded bubbles, friendly colors, and playful motion.',
    gradient: 'from-secondary to-primary',
    accent: 'bg-primary/10 text-primary',
    href: '/concept-c',
  },
]

export function ConceptPicker() {
  return (
    <div className="min-h-screen gradient-mesh">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-1.5 text-sm text-primary shadow-sm">
            <Sparkles className="h-4 w-4 text-accent" />
            CareerLens India — Design Concepts
          </div>
          <h1 className="font-serif text-4xl tracking-tight text-primary md:text-5xl lg:text-6xl">
            Three homepage concepts
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-500">
            High-fidelity mockups ready for React + Tailwind implementation. Same branding, three unique layouts.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {concepts.map((concept, i) => (
            <motion.div
              key={concept.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
            >
              <Link
                to={concept.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`h-32 bg-gradient-to-br ${concept.gradient} p-6`}>
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    {concept.name}
                  </span>
                  <h2 className="mt-2 text-xl font-bold text-white">{concept.tagline}</h2>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-gray-500">{concept.description}</p>
                  <span className={`mt-4 inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${concept.accent}`}>
                    View mockup
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-400">
          Replace <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">public/careerlens-logo.svg</code> with your official logo.
        </p>
      </div>
    </div>
  )
}
