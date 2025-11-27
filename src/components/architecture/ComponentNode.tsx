'use client'

import { motion } from 'framer-motion'
import { YStack, Text } from 'tamagui'
import { ComponentNodeProps } from './types'
import { forwardRef } from 'react'

export const ComponentNode = forwardRef<HTMLDivElement, ComponentNodeProps>(
  function ComponentNode(
    {
      id,
      type,
      label,
      icon,
      isActive = false,
      onClick,
      size = 'normal',
    },
    ref
  ) {
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
    const isLarge = size === 'large'

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        style={{
          cursor: onClick ? 'pointer' : 'default',
        }}
        onClick={onClick}
      >
        <YStack
          paddingHorizontal={isLarge ? '$6' : '$4'}
          paddingVertical={isLarge ? '$5' : '$3'}
          backgroundColor={isActive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255,255,255,0.03)'}
          borderRadius="$6"
          borderWidth={isLarge ? 2 : 1}
          borderColor={isActive ? color : 'rgba(255,255,255,0.1)'}
          gap="$2"
          alignItems="center"
          minWidth={isLarge ? 180 : 120}
          style={{
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            boxShadow: isActive || isLarge
              ? `0 0 30px ${color}40`
              : '0 4px 12px rgba(0,0,0,0.3)',
          }}
        >
          <motion.div
            animate={{
              scale: isActive || isLarge ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: isLarge ? 2 : 1.5,
              repeat: (isActive || isLarge) ? Infinity : 0,
              ease: 'easeInOut',
            }}
            style={{ color }}
          >
            {icon}
          </motion.div>
          <Text
            fontSize={isLarge ? 16 : 12}
            fontWeight="600"
            color={isActive || isLarge ? color : '#fff'}
            textAlign="center"
          >
            {label}
          </Text>
        </YStack>
      </motion.div>
    )
  }
)
