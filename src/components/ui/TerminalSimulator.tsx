'use client'

import { useState, useEffect } from 'react'
import { YStack, Text } from 'tamagui'
import { motion, AnimatePresence } from 'framer-motion'

interface TerminalLine {
  type: 'command' | 'output' | 'success' | 'info'
  content: string
  delay: number
}

const installScript: TerminalLine[] = [
  { type: 'command', content: '$ npm install -g @synap/core', delay: 0 },
  { type: 'output', content: '⠋ Installing Synap Core...', delay: 800 },
  { type: 'success', content: '✓ Installed @synap/core@1.0.0', delay: 1400 },
  { type: 'command', content: '$ synap init my-pod', delay: 2200 },
  { type: 'output', content: '⚡ Initializing your data pod...', delay: 2800 },
  { type: 'success', content: '✓ Event store initialized', delay: 3400 },
  { type: 'success', content: '✓ Projectors configured', delay: 3800 },
  { type: 'success', content: '✓ API running on localhost:3000', delay: 4200 },
  { type: 'info', content: '', delay: 4600 },
  { type: 'info', content: 'Your sovereign data pod is live.', delay: 4800 },
]

export function TerminalSimulator() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [currentTyping, setCurrentTyping] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (visibleLines >= installScript.length) return

    const currentLine = installScript[visibleLines]
    const timer = setTimeout(() => {
      if (currentLine.type === 'command') {
        // Typing animation for commands
        setIsTyping(true)
        let charIndex = 0
        const typingInterval = setInterval(() => {
          if (charIndex <= currentLine.content.length) {
            setCurrentTyping(currentLine.content.slice(0, charIndex))
            charIndex++
          } else {
            clearInterval(typingInterval)
            setIsTyping(false)
            setCurrentTyping('')
            setVisibleLines(v => v + 1)
          }
        }, 40)
      } else {
        setVisibleLines(v => v + 1)
      }
    }, currentLine.delay)

    return () => clearTimeout(timer)
  }, [visibleLines])

  return (
    <YStack
      backgroundColor="rgba(0, 0, 0, 0.8)"
      borderRadius="$4"
      padding="$4"
      paddingVertical="$3"
      maxWidth={600}
      width="100%"
      style={{
        fontFamily: 'Monaco, Menlo, "Courier New", monospace',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(16, 185, 129, 0.2)',
      }}
      gap="$2"
    >
      {/* Terminal Header */}
      <YStack flexDirection="row" gap="$2" marginBottom="$2">
        <YStack width={12} height={12} borderRadius={12} backgroundColor="#FF5F56" />
        <YStack width={12} height={12} borderRadius={12} backgroundColor="#FFBD2E" />
        <YStack width={12} height={12} borderRadius={12} backgroundColor="#27C93F" />
      </YStack>

      {/* Terminal Content */}
      <YStack gap="$1">
        <AnimatePresence>
          {installScript.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Text
                fontSize={13}
                color={
                  line.type === 'command' ? '#10B981' :
                  line.type === 'success' ? '#10B981' :
                  line.type === 'info' ? '#3B82F6' :
                  '#6B7280'
                }
                lineHeight={20}
                
              >
                {line.content}
              </Text>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Text fontSize={13} color="#10B981" lineHeight={20} >
                {currentTyping}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  style={{ display: 'inline-block' }}
                >
                  _
                </motion.span>
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
      </YStack>
    </YStack>
  )
}
