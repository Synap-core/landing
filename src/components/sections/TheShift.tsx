'use client'

import { YStack, H2, Paragraph, Text, Theme, XStack } from 'tamagui'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { Lock, Unlock, DollarSign, Zap, Database, Shield, Globe, Server, Sun, Sprout } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import * as React from 'react'

// --- Text Scramble Component (Inline for tight integration) ---
const CHARS = 'abcdefghijklmnopqrstuvwxyz'
function ScrambleText({ text, active }: { text: string, active: boolean }) {
  const [display, setDisplay] = useState(text)
  
  useEffect(() => {
    if (!active) {
        setDisplay(text)
        return
    }

    let iteration = 0
    const interval = setInterval(() => {
      setDisplay(prev => 
        text.split('')
          .map((char, index) => {
            if (index < iteration) return text[index]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )
      
      if (iteration >= text.length) {
        clearInterval(interval)
      }
      
      iteration += 1 / 3
    }, 30)
    
    return () => clearInterval(interval)
  }, [active, text])

  return <Text fontFamily="$mono">{display}</Text>
}

// --- Data ---
const feudalPoints = [
  { icon: Lock, text: 'Data Silos', sub: 'Your history is trapped' },
  { icon: Database, text: 'Proprietary Formats', sub: 'Vendor lock-in is the feature' },
  { icon: DollarSign, text: 'Rent Seeking', sub: 'Paying for your own data' },
  { icon: Server, text: 'Platform Risk', sub: 'One ban deletes your digital life' }
]

const sovereignPoints = [
  { icon: Unlock, text: 'Universal State', sub: 'You hold the keys' },
  { icon: Globe, text: 'Interoperable', sub: 'Apps compete on interface, not data' },
  { icon: Zap, text: 'Asset Ownership', sub: 'Pay once, own forever' },
  { icon: Sprout, text: 'Digital Gardens', sub: 'Grow your knowledge over decades' }
]

export function TheShift() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // The "Light Wave" progress
  const scanProgress = useTransform(scrollYProgress, [0.2, 0.8], [0, 100])
  
  // Reveal from top
  const maskImage = useTransform(scanProgress, (v) => `inset(0 0 ${100 - v}% 0)`)
  const barTop = useTransform(scanProgress, (v) => `${v}%`)
  
  // Opacity of the scanner line: fade in at start, fade out at end
  const scannerOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.8, 0.85], [0, 1, 1, 0])

  return (
    <Theme name="dark">
      <YStack 
        ref={containerRef}
        height="300vh" 
        position="relative"
        backgroundColor="$background"
      >
        <YStack 
          position="sticky" 
          top={0} 
          height="100vh" 
          justifyContent="center" 
          alignItems="center"
          overflow="hidden"
        >
          <YStack maxWidth={1200} width="100%" padding="$4" gap="$8">
            
            {/* Header */}
            <YStack gap="$4" alignItems="center" marginBottom="$8">
               <Text fontFamily="$mono" fontSize={12} color="$primary" letterSpacing={2} textTransform="uppercase">
                  Evolution
               </Text>
               <H2 textAlign="center" fontSize={64} fontFamily="$heading" color="$color" fontWeight="300" letterSpacing={-1} lineHeight={72}>
                  The Reality Rewrite
               </H2>
            </YStack>

            {/* THE COMPONENT */}
            <YStack position="relative" width="100%" height={600} justifyContent="center" alignItems="center">
              
              {/* LAYER 1: THE CONCRETE BLOCK (Feudal Past) */}
              <YStack 
                position="absolute" 
                top={0}
                left={0}
                right={0}
                marginHorizontal="auto"
                width="100%" 
                maxWidth={900}
                height="100%"
                backgroundColor="#050505" // Deepest Black
                borderRadius={20}
                borderWidth={1}
                borderColor="rgba(255,255,255,0.15)" // Sharp, thin border
                padding={32}
                justifyContent="space-between"
                style={{
                    boxShadow: '0 20px 50px rgba(0,0,0,0.8)' // Heavy shadow
                }}
              >
                <XStack justifyContent="space-between" alignItems="center">
                  <H2 fontSize={40} fontFamily="$heading" color="white" fontWeight="500" letterSpacing={-1}>Feudal Web</H2>
                  <Lock size={32} color="#525252" />
                </XStack>
                
                <YStack gap="$6">
                  {feudalPoints.map((pt, i) => (
                    <XStack key={i} gap="$6" alignItems="center">
                      <YStack padding="$3" backgroundColor="#171717" borderRadius="$8" borderWidth={1} borderColor="#262626">
                        <pt.icon size={24} color="#a3a3a3" />
                      </YStack>
                      <YStack>
                        <Text fontSize={20} fontFamily="$body" color="#e5e5e5" fontWeight="500">{pt.text}</Text>
                        <Text fontSize={14} color="#a3a3a3">{pt.sub}</Text>
                      </YStack>
                    </XStack>
                  ))}
                </YStack>
                
                <Text fontFamily="$mono" color="#525252" fontSize={12}>STATUS: RESTRICTED</Text>
              </YStack>

              {/* LAYER 2: THE LIVING PRISM (Sovereign Future) */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  width: '100%',
                  maxWidth: 900,
                  height: '100%',
                  // High Contrast Obsidian Glass
                  background: 'rgba(5, 5, 5, 0.95)', // Almost opaque to hide the layer below
                  borderRadius: 20,
                  padding: 32,
                  boxSizing: 'border-box', // CRITICAL: Match YStack's border-box sizing
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  clipPath: maskImage,
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 40px rgba(16, 185, 129, 0.1)'
                }}
                animate={{
                    boxShadow: [
                        '0 0 40px rgba(16, 185, 129, 0.1)',
                        '0 0 60px rgba(16, 185, 129, 0.2)',
                        '0 0 40px rgba(16, 185, 129, 0.1)'
                    ]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
              >
                 {/* Gradient Border Overlay */}
                 <div style={{ 
                     position: 'absolute', 
                     inset: 0, 
                     borderRadius: 20, 
                     padding: 1, 
                     background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.5), rgba(59, 130, 246, 0.5), rgba(245, 158, 11, 0.3))', 
                     mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', 
                     maskComposite: 'exclude', 
                     pointerEvents: 'none',
                     opacity: 0.5
                 }} />

                 <XStack justifyContent="space-between" alignItems="center">
                  <H2 fontSize={40} fontFamily="$heading" color="#fff" fontWeight="400" style={{ textShadow: '0 0 30px rgba(16,185,129,0.4)' }}>Sovereign Web</H2>
                  {/* <Sun size={32} color="#FCD34D" style={{ filter: 'drop-shadow(0 0 10px rgba(252, 211, 77, 0.5))' }} /> */}
                </XStack>
                
                <YStack gap="$6">
                  {sovereignPoints.map((pt, i) => (
                    <XStack key={i} gap="$6" alignItems="center">
                      <YStack padding="$3" backgroundColor="rgba(16, 185, 129, 0.1)" borderRadius="$8" style={{ boxShadow: '0 0 20px rgba(16, 185, 129, 0.1)' }}>
                        <pt.icon size={24} color="#6EE7B7" />
                      </YStack>
                      <YStack>
                        <Text fontSize={20} fontFamily="$body" color="#fff" fontWeight="500">{pt.text}</Text>
                        <Text fontSize={14} color="#D1FAE5" opacity={0.8}>{pt.sub}</Text>
                      </YStack>
                    </XStack>
                  ))}
                </YStack>

                <XStack alignItems="center" gap="$2">
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 10px #10B981' }} />
                    <Text fontFamily="$mono" color="#10B981" fontSize={12} style={{ textShadow: '0 0 10px rgba(16, 185, 129, 0.5)' }}>STATUS: ONLINE</Text>
                </XStack>
              </motion.div>

              {/* LIGHT WAVE (Scanner) */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: barTop,
                  left: '50%',
                  x: '-50%',
                  width: '100%',
                  maxWidth: 940,
                  height: 80, // Taller, softer beam
                  background: 'linear-gradient(180deg, rgba(16, 185, 129, 0) 0%, rgba(16, 185, 129, 0.4) 50%, rgba(16, 185, 129, 0) 100%)',
                  filter: 'blur(20px)',
                  zIndex: 10,
                  pointerEvents: 'none',
                  opacity: scannerOpacity
                }}
              />
              {/* Sharp center line for definition */}
               <motion.div
                style={{
                  position: 'absolute',
                  top: barTop,
                  left: '50%',
                  x: '-50%',
                  width: '100%',
                  maxWidth: 900,
                  height: 1,
                  background: 'rgba(255,255,255,0.5)',
                  boxShadow: '0 0 15px rgba(16, 185, 129, 0.8)',
                  zIndex: 11,
                  pointerEvents: 'none',
                  opacity: scannerOpacity
                }}
              />

            </YStack>

          </YStack>
        </YStack>
      </YStack>
    </Theme>
  )
}
