import { useState, type FormEvent } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { CONTACT, AUDIENCE_TYPES } from '../../data/contact'
import { FadeIn } from '../shared/FadeIn'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function SimpleContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [audience, setAudience] = useState<string>('Student')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          audience: data.get('audience'),
          message: data.get('message'),
          _subject: `CareerLens Inquiry from ${data.get('name')}`,
          _template: 'table',
        }),
      })

      if (!res.ok) throw new Error('Failed to send')
      setStatus('success')
      form.reset()
      setAudience('Student')
    } catch {
      setStatus('error')
    }
  }

  return (
    <FadeIn>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
        <h3 className="font-serif text-xl text-primary">Prefer to write?</h3>
        <p className="mt-2 text-sm text-gray-500">
          A quick message — we&apos;ll get back to you personally.
        </p>

        {status === 'success' ? (
          <div className="mt-6 flex items-start gap-3 rounded-xl bg-secondary/10 p-5">
            <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
            <div>
              <p className="font-medium text-primary">Message sent!</p>
              <p className="mt-1 text-sm text-gray-500">
                We&apos;ll reach out soon. For faster help,{' '}
                <a href={CONTACT.whatsappHref} className="font-medium text-secondary hover:underline">
                  chat on WhatsApp
                </a>
                .
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-gray-600">
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-gray-600">
                  Phone *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-gray-600">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20"
              />
            </div>

            <fieldset>
              <legend className="mb-2 text-xs font-medium text-gray-600">I am *</legend>
              <div className="flex flex-wrap gap-3">
                {AUDIENCE_TYPES.map((type) => (
                  <label
                    key={type}
                    className={`cursor-pointer rounded-full border px-4 py-1.5 text-sm transition-all ${
                      audience === type
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="audience"
                      value={type}
                      checked={audience === type}
                      onChange={() => setAudience(type)}
                      className="sr-only"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-gray-600">
                How can we help? *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder="Tell us briefly what you're looking for..."
                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-secondary focus:ring-2 focus:ring-secondary/20"
              />
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-red-600">
                <AlertCircle className="h-4 w-4" />
                Something went wrong. Please try WhatsApp or call us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-light disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </FadeIn>
  )
}
