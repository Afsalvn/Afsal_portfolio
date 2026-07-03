import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'

const offset: Record<Direction, { x?: number; y?: number; scale?: number }> = {
  up: { y: 32 },
  down: { y: -32 },
  left: { x: 32 },
  right: { x: -32 },
  scale: { scale: 0.92 },
  none: {},
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  amount?: number
}) {
  const variants: Variants = {
    hidden: { opacity: 0, ...offset[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({
  children,
  className,
  stagger = 0.09,
  amount = 0.2,
  once = true,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  amount?: number
  once?: boolean
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  direction = 'up',
  duration = 0.55,
}: {
  children: ReactNode
  className?: string
  direction?: Direction
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: { duration, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
