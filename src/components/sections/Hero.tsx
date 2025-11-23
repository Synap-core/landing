'use client'

import { YStack, XStack, H1, Paragraph, Text } from 'tamagui'
import { Button } from '../ui/Button'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const RiveBackground = dynamic(() => import('../animations/RiveBackground').then(mod => ({ default: mod.RiveBackground })), { ssr: false })

export function Hero() {
  return (
    <YStack 
        height="100vh" 
        width="100%" 
        position="relative" 
        justifyContent="center" 
        alignItems="center"
        overflow="hidden"
        backgroundColor="$background"
    >
      {/* Rive Background Animation */}
      <RiveBackground />

      {/* Content Overlay */}
      <YStack 
        zIndex={10} 
        maxWidth={900} 
        padding="$4" 
        gap="$8" 
        alignItems="center" 
      >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
            <H1 
                textAlign="center" 
                color="$color" 
                fontSize={56} 
                lineHeight={64}
                $gtSm={{ fontSize: 80, lineHeight: 88 }}
                fontFamily="$heading"
                fontWeight="300"
                letterSpacing={-2}
                marginBottom="$4"
            >
              Your code is open source.
              <br />
              <Text color="$primary">Why isn't your data?</Text>
            </H1>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
            <Paragraph 
                color="$color" 
                opacity={0.7} 
                fontSize={20}
                lineHeight={32}
                maxWidth={700}
                textAlign="center"
                fontFamily="$body"
                fontWeight="300"
            >
              Event-sourced personal data infrastructure. Build apps on user-owned data pods.
              <br/>
              The end of digital feudalism starts with developers.
            </Paragraph>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}
        >
            <Button variant="primary" size="$5" borderRadius="$10">
                Deploy in 5 Minutes
            </Button>
            <Button variant="outline" size="$5" borderRadius="$10" borderColor="$borderColor">
                Read the Architecture
            </Button>
        </motion.div>

        {/* Technical credibility tagline */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            <Text 
                fontFamily="$mono" 
                fontSize={12} 
                color="$color" 
                opacity={0.4}
                letterSpacing={1}
                textTransform="uppercase"
            >
              Event Sourcing • Self-Hosted • API-First • Open Source
            </Text>
        </motion.div>
      </YStack>
    </YStack>
  )
}


