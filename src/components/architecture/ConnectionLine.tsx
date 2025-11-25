'use client'

import { motion } from 'framer-motion'
import { ConnectionLineProps } from './types'

export function ConnectionLine({
  from,
  to,
  isActive = false,
  color = '#10B981',
  fromPosition = { x: 0, y: 0 },
  toPosition = { x: 0, y: 0 },
}: ConnectionLineProps) {
  // Calculate SVG path for smooth curve
  const x1 = fromPosition.x
  const y1 = fromPosition.y
  const x2 = toPosition.x
  const y2 = toPosition.y

  // Control point for bezier curve (makes it curved instead of straight)
  const midX = (x1 + x2) / 2
  const midY = (y1 + y2) / 2
  const controlY = midY + (Math.abs(x2 - x1) * 0.3)

  const pathData = `M ${x1} ${y1} Q ${midX} ${controlY} ${x2} ${y2}`

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <defs>
        <linearGradient id={`gradient-${from}-${to}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity={0.8} />
          <stop offset="100%" stopColor={color} stopOpacity={0.3} />
        </linearGradient>
      </defs>
      
      <motion.path
        d={pathData}
        stroke={`url(#gradient-${from}-${to})`}
        strokeWidth={2}
        fill="none"
        initial={{ pathLength: 0, opacity: 0.3 }}
        animate={{
          pathLength: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0.3,
        }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      />
    </svg>
  )
}
