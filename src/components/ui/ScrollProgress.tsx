import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 inset-x-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]"
      style={{ scaleX }}
    />
  )
}
