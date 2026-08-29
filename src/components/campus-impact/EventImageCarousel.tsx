import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { CampusEventImage } from '../../data/campusImpact'

interface EventImageCarouselProps {
  images: CampusEventImage[]
  className?: string
  priority?: boolean
}

export function EventImageCarousel({ images, className = '', priority = false }: EventImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const hasMultiple = images.length > 1

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])

  if (images.length === 0) return null

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gray-100 ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary opacity-90 shadow-md backdrop-blur-sm transition-all md:opacity-0 md:group-hover:opacity-100 hover:bg-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary opacity-90 shadow-md backdrop-blur-sm transition-all md:opacity-0 md:group-hover:opacity-100 hover:bg-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
