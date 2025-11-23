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
        maxWidth={1000} 
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
                fontSize={64} 
                lineHeight={72}
                $gtSm={{ fontSize: 96, lineHeight: 100 }}
                fontFamily="$heading"
                fontWeight="300"
                letterSpacing={-2}
            >
              Synap Core
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
                maxWidth={600}
                textAlign="center"
                fontFamily="$body"
                fontWeight="300"
            >
              The biological substrate for personal intelligence. <br/>
              <Text color="$primary" opacity={1}>Self-host your mind.</Text>
            </Paragraph>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: 'flex', gap: 16 }}
        >
            <Button variant="primary" size="$5" borderRadius="$10">
                Initialize Core
            </Button>
            <Button variant="outline" size="$5" borderRadius="$10" borderColor="$borderColor">
                Read the Whitepaper
            </Button>
        </motion.div>
      </YStack>
    </YStack>
  )
}

