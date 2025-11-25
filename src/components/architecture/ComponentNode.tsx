'use client'

import { motion } from 'framer-motion'
import { YStack, Text } from 'tamagui'
import { ComponentNodeProps } from './types'

export function ComponentNode({
  id,
  type,
  label,
  icon,
  position,
  isActive = false,
  isHighlighted = false,
  onClick,
}: ComponentNodeProps) {
  const colorMap = {
    client: '#10B981',      // Emerald
    automation: '#F59E0B',  // Amber
    server: '#10B981',      // Emerald
    database: '#10B981',    // Emerald
    service: '#10B981',     // Emerald
    storage: '#10B981',     // Emerald
    external: '#3B82F6',    // Blue
  }

  const color = colorMap[type]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        cursor: onClick ? 'pointer' : 'default',
      }}
      onClick={onClick}
    >
      <YStack
        paddingHorizontal="$4"
        paddingVertical="$3"
        backgroundColor={isActive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.03)'}
        borderRadius="$6"
        borderWidth={1}
        borderColor={isActive ? color : 'rgba(255,255,255,0.1)'}
        gap="$2"
        alignItems="center"
        minWidth={120}
        style={{
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          boxShadow: isActive 
            ? `0 0 20px ${color}40` 
            : '0 4px 12px rgba(0,0,0,0.3)',
        }}
      >
        <motion.div
          animate={{
            scale: isActive ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 1.5,
            repeat: isActive ? Infinity : 0,
            ease: 'easeInOut',
          }}
          style={{ color }}
        >
          {icon}
        </motion.div>
        <Text
          fontSize={12}
          fontWeight="600"
          color={isActive ? color : '#fff'}
          textAlign="center"
        >
          {label}
        </Text>
      </YStack>
    </motion.div>
  )
}
