'use client'

import { motion } from 'framer-motion'
import { ParticleFlowProps } from './types'

export function ParticleFlow({
  path,
  color,
  isActive = true,
  delay = 0,
}: ParticleFlowProps) {
  if (!isActive) return null

  const colorMap = {
    emerald: '#10B981',
    amber: '#F59E0B',
    blue: '#3B82F6',
  }

  const particleColor = colorMap[color]

  return (
    <>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`particle-${path}-${i}`}
          initial={{ offsetDistance: '0%', opacity: 0 }}
          animate={{
            offsetDistance: '100%',
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: delay + i * 0.7,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            width: 6,
            height: 6,
            borderRadius: '50%',
            backgroundColor: particleColor,
            boxShadow: `0 0 10px ${particleColor}`,
            offsetPath: `path('${path}')`,
            offsetRotate: '0deg',
          }}
        />
      ))}
    </>
  )
}
