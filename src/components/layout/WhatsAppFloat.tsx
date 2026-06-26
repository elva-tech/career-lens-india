import { MessageCircle } from 'lucide-react'
import { CONTACT } from '../../data/contact'

export function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-all hover:scale-105 hover:shadow-xl"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
