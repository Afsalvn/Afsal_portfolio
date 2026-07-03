import { type ReactNode, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function TiltCard({
  children,
  className = '',
  maxTilt = 8,
}: {
  children: ReactNode
  className?: string
  maxTilt?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 220,
    damping: 22,
  })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 220,
    damping: 22,
  })
  const glareX = useTransform(x, [-0.5, 0.5], ['20%', '80%'])
  const glareY = useTransform(y, [-0.5, 0.5], ['20%', '80%'])
  const glare = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(79,157,255,0.10) 0%, transparent 60%)`
  )

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 900 }}
      onPointerMove={(e) => {
        // skip tilt for touch input — keeps mobile interactions simple
        if (e.pointerType === 'touch') return
        const rect = ref.current!.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
      }}
      onPointerLeave={reset}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{ background: glare }}
      />
      {children}
    </motion.div>
  )
}
