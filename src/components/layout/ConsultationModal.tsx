import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MessageCircle, Mail, ArrowRight } from 'lucide-react'
import {
  CONSULTATION_TOPICS,
  CONTACT,
  consultationWhatsAppLink,
  type ConsultationTopic,
} from '../../data/contact'
import { useConsultation } from '../../context/ConsultationContext'

export function ConsultationModal() {
  const { isOpen, close } = useConsultation()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="consultation-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
            aria-label="Close consultation dialog"
            onClick={close}
          />
          <motion.div
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="border-b border-gray-100 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-secondary uppercase">
                    Free Consultation
                  </p>
                  <h2 id="consultation-modal-title" className="mt-1 font-serif text-2xl text-primary">
                    Book a Free Career Consultation
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Choose what you need help with — we&apos;ll connect with you personally.
                  </p>
                </div>
                <button
                  onClick={close}
                  className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="p-4">
              <p className="px-2 pb-3 text-xs font-medium text-gray-400 uppercase tracking-wide">
                What do you need help with?
              </p>
              <div className="space-y-2">
                {CONSULTATION_TOPICS.map((topic) => (
                  <TopicButton key={topic} topic={topic} onSelect={close} />
                ))}
              </div>
            </div>

            <div className="border-t border-gray-100 bg-surface p-6">
              <p className="mb-3 text-xs font-medium text-gray-400">Or reach us directly</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call
                </a>
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-secondary/30 hover:text-secondary"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function TopicButton({ topic, onSelect }: { topic: ConsultationTopic; onSelect: () => void }) {
  return (
    <a
      href={consultationWhatsAppLink(topic)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onSelect}
      className="group flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-3.5 text-left transition-all hover:border-secondary/40 hover:bg-secondary/5"
    >
      <span className="text-sm font-medium text-gray-800 group-hover:text-primary">{topic}</span>
      <ArrowRight className="h-4 w-4 text-gray-300 transition-all group-hover:translate-x-0.5 group-hover:text-secondary" />
    </a>
  )
}
