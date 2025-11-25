'use client'

import { useEffect, useState } from 'react'
import { YStack, Text } from 'tamagui'
import { motion, AnimatePresence } from 'framer-motion'

const sections = [
  'Hero',
  'The Shift',
  'Why Now',
  'Stories',
  'Architecture',
  'Movement',
  'Community',
  'Specs'
]

export function SectionIndicator() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2
      const windowHeight = document.documentElement.scrollHeight
      const sectionHeight = windowHeight / sections.length

      const newSection = Math.min(
        Math.floor(scrollPosition / sectionHeight),
        sections.length - 1
      )

      setCurrentSection(newSection)
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 100
          }}
        >
          <YStack
            paddingHorizontal="$4"
            paddingVertical="$3"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            borderRadius="$6"
            borderWidth={1}
            borderColor="rgba(16, 185, 129, 0.3)"
            style={{
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)'
            }}
          >
            <Text  fontSize={11} color="$primary" opacity={0.9}>
              [{currentSection + 1}/{sections.length}] {sections[currentSection]}
            </Text>
          </YStack>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
