import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export function Counter({
  value,
  suffix = '',
  decimals = 0,
  duration = 1.6,
  className,
}: {
  value: number
  suffix?: string
  decimals?: number
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(decimals) + suffix
      }
    })
  }, [spring, decimals, suffix])

  return (
    <motion.span ref={ref} className={className}>
      0{suffix}
    </motion.span>
  )
}
