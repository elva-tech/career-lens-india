import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { CampusEventImage } from '../../data/campusImpact'

interface EventImageCarouselProps {
  images: CampusEventImage[]
  className?: string
  priority?: boolean
}

const SWIPE_THRESHOLD = 40

export function EventImageCarousel({ images, className = '', priority = false }: EventImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const startX = useRef<number | null>(null)
  const hasMultiple = images.length > 1

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])

  const onPointerDown = (event: React.PointerEvent) => {
    if (!hasMultiple) return
    startX.current = event.clientX
  }

  const onPointerUp = (event: React.PointerEvent) => {
    if (startX.current == null) return
    const delta = event.clientX - startX.current
    startX.current = null
    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    if (delta < 0) next()
    else prev()
  }

  const onPointerCancel = () => {
    startX.current = null
  }

  if (images.length === 0) return null

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gray-100 touch-manipulation ${className}`}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          draggable={false}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
        />
      </AnimatePresence>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              prev()
            }}
            onPointerDown={(event) => event.stopPropagation()}
            aria-label="Previous image"
            className="absolute top-1/2 left-2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md sm:left-3"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              next()
            }}
            onPointerDown={(event) => event.stopPropagation()}
            aria-label="Next image"
            className="absolute top-1/2 right-2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-md sm:right-3"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute top-3 right-3 z-20 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white">
            {index + 1} / {images.length}
          </div>

          <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 items-center gap-0.5 rounded-full bg-black/35 px-1.5 py-1">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  setIndex(i)
                }}
                onPointerDown={(event) => event.stopPropagation()}
                aria-label={`Go to image ${i + 1}`}
                className="flex h-8 w-8 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    i === index ? 'w-5 bg-white' : 'w-2 bg-white/55'
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
