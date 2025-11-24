'use client'

import { useEffect, useState } from 'react'
import { Text, TextProps } from 'tamagui'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'

interface TextScrambleProps extends TextProps {
  children: string
  progress: number // 0 to 1
  triggerThreshold?: number
}

export function TextScramble({ children, progress, triggerThreshold = 0.5, ...props }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(children)
  
  useEffect(() => {
    // If we haven't reached the threshold, show scrambled or original based on logic
    // Actually, for the "rewrite" effect, we want:
    // progress < threshold: Original (or previous state, but here we just handle one string)
    // progress crossing threshold: Scramble animation
    // progress > threshold: Final string
    
    // But wait, the "rewrite" effect in The Shift is:
    // Feudal Text -> Scramble -> Sovereign Text.
    // This component might just be for the "Sovereign" side, scrambling AS it is revealed.
    
    if (progress < 0.05) {
      // Reset
      setDisplayText(children.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(''))
      return
    }

    if (progress >= 1) {
      setDisplayText(children)
      return
    }

    // Scramble logic based on progress
    // As progress goes 0 -> 1, more characters become fixed
    const length = children.length
    const fixedChars = Math.floor(progress * length)
    
    let result = ''
    for (let i = 0; i < length; i++) {
      if (i < fixedChars) {
        result += children[i]
      } else {
        result += CHARS[Math.floor(Math.random() * CHARS.length)]
      }
    }
    setDisplayText(result)

  }, [children, progress])

  return (
    <Text {...props}>
      {displayText}
    </Text>
  )
}
