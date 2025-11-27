'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface AnimatedArrowProps {
  color?: string
  split?: boolean
}

export function AnimatedArrow({ color = '#10B981', split = false }: AnimatedArrowProps) {
  if (split) {
    return (
      <div style={{ position: 'relative', height: 80, width: '100%' }}>
        {/* Left arrow */}
        <motion.div
          style={{
            position: 'absolute',
            left: '25%',
            top: 0,
            height: 60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <motion.div
            style={{
              width: 2,
              height: 40,
              background: `linear-gradient(to bottom, ${color}, transparent)`,
            }}
            animate={{
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <ChevronDown color={color} size={20} />
        </motion.div>

        {/* Right arrow */}
        <motion.div
          style={{
            position: 'absolute',
            right: '25%',
            top: 0,
            height: 60,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <motion.div
            style={{
              width: 2,
              height: 40,
              background: `linear-gradient(to bottom, ${color}, transparent)`,
            }}
            animate={{
              scaleY: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          />
          <ChevronDown color={color} size={20} />
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      style={{
        height: 60,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <motion.div
        style={{
          width: 2,
          height: 40,
          background: `linear-gradient(to bottom, ${color}, transparent)`,
        }}
        animate={{
          scaleY: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <ChevronDown color={color} size={20} />
    </motion.div>
  )
}
