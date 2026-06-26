import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PageLoader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (done) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
      onAnimationComplete={() => setDone(true)}
    >
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="h-12 w-12 rounded-full border-2 border-primary/20 border-t-secondary"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        <motion.img
          src="/careerlens-logo.png"
          alt="CareerLens India"
          width={190}
          height={48}
          className="h-auto w-[165px]"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        />
      </div>
    </motion.div>
  )
}
