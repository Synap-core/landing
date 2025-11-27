'use client'

import React from 'react'
import { YStack, XStack, Text, Button as TButton } from 'tamagui'
import { Button } from '@/components/ui/Button'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Terminal, Star, Github } from 'lucide-react'
import { PageTitle, SectionLabel, BodyTextLarge } from '@/components/ui/Typography'
import Link from 'next/link'

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
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any}
        >
            <XStack 
                gap="$2" 
                alignItems="center" 
                justifyContent="center" 
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
                marginBottom="$6"
            >
              {/* <Github size={16} color="#10B981" /> */}
                <SectionLabel size="$1" opacity={0.8}>
                    Open Source
                </SectionLabel>
                {/* todo: put when we really have stars, connected to github */}
                {/* <YStack width={1} height={12} backgroundColor="rgba(255, 255, 255, 0.2)" />
                <Star size={14} color="#F59E0B" fill="#F59E0B" />
                <SectionLabel size="$1" fontWeight="600" opacity={0.8}>
                    2.3k
                </SectionLabel> */}
            </XStack>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
            <PageTitle centered marginBottom="$3">
              Your code is open source.
              <br />
              <Text color="$primary">Your data should be too.</Text>
            </PageTitle>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
            <BodyTextLarge 
                opacity={0.7}
                maxWidth={600}
                textAlign="center"
                marginBottom="$2"
            >
              Self-host your digital life. Build apps on user-owned infrastructure.
            </BodyTextLarge>
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
                fontSize="$1" 
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
