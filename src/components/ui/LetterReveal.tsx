import { motion } from 'framer-motion'

export function LetterReveal({
  text,
  className = '',
  delay = 0,
  stagger = 0.028,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
}) {
  const words = text.split(' ')

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split('').map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              initial={{ opacity: 0, y: '0.6em', rotateX: -60 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.55,
                delay: delay + (wi * 6 + ci) * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformOrigin: 'bottom' }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  )
}
