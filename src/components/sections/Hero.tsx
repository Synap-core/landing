'use client'

import { YStack, XStack, H1, Paragraph, Text } from 'tamagui'
import { Button } from '../ui/Button'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Github, Star } from 'lucide-react'

const RiveBackground = dynamic(() => import('../animations/RiveBackground').then(mod => ({ default: mod.RiveBackground })), { ssr: false })
const TerminalSimulator = dynamic(() => import('../ui/TerminalSimulator').then(mod => ({ default: mod.TerminalSimulator })), { ssr: false })

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
        {/* GitHub Badge */}
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <XStack
                gap="$2"
                alignItems="center"
                paddingHorizontal="$3"
                paddingVertical="$2"
                backgroundColor="rgba(255, 255, 255, 0.05)"
                borderRadius="$10"
                borderWidth={1}
                borderColor="rgba(255, 255, 255, 0.1)"
                style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                }}
            >
                <Github size={16} color="#10B981" />
                <Text fontSize={12} color="$color" opacity={0.8} >
                    Open Source
                </Text>
                <YStack width={1} height={12} backgroundColor="rgba(255, 255, 255, 0.2)" />
                <Star size={14} color="#F59E0B" fill="#F59E0B" />
                <Text fontSize={12} color="$color" opacity={0.8} fontWeight="600">
                    2.3k
                </Text>
            </XStack>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
            <H1 
                textAlign="center" 
                color="$color" 
                fontSize={36}
                lineHeight={44}
                $gtSm={{ fontSize: 72, lineHeight: 80 }}
                fontFamily="$heading"
                fontWeight="300"
                letterSpacing={-2}
                marginBottom="$3"
            >
              Your code is open source.
              <br />
              <Text color="$primary">Your data should be too.</Text>
            </H1>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            <Paragraph 
                color="$color" 
                opacity={0.7} 
                fontSize={18}
                lineHeight={28}
                maxWidth={600}
                textAlign="center"
                fontFamily="$body"
                fontWeight="300"
                marginBottom="$2"
            >
              Self-host your digital life. Build apps on user-owned infrastructure.
            </Paragraph>
        </motion.div>

        {/* Terminal Simulator */}
        {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
            <TerminalSimulator />
        </motion.div> */}

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{ 
              display: 'flex', 
              gap: 16, 
              flexDirection: 'row',
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              marginTop: 16,
              width: '100%'
            }}
        >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="primary" 
                  size="$5" 
                  borderRadius="$10"
                  href="https://github.com/synap/core#quick-start"
                  tag="a"
                  target="_blank"
                  style={{
                    textDecoration: 'none',
                    
                  }}
                >
                    Deploy in 5 Minutes
                </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="$5" 
                  borderRadius="$10" 
                  borderColor="$borderColor"
                  href="/whitepaper"
                  tag="a"
                >
                    Read the Whitepaper
                </Button>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline" 
                  size="$5" 
                  borderRadius="$10" 
                  borderColor="$borderColor" 
                  href="/developers"
                  tag="a"
                >
                    For Developers →
                </Button>
            </motion.div> */}
        </motion.div>

        {/* Technical credibility tagline */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
        >
            <Text 
                 
                fontSize={11} 
                color="$color" 
                opacity={0.4}
                letterSpacing={1}
                textTransform="uppercase"
                textAlign="center"
            >
              Event Sourcing • Self-Hosted • API-First
            </Text>
        </motion.div>
      </YStack>
    </YStack>
  )
}

