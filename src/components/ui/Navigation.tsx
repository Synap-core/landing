'use client'

import { XStack, Text } from 'tamagui'
import Link from 'next/link'
import { Github } from 'lucide-react'

export function Navigation() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(5, 5, 5, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <XStack
        maxWidth={1200}
        marginHorizontal="auto"
        paddingHorizontal="$6"
        paddingVertical="$4"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo/Brand */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Text
            fontSize={20}
            fontWeight="700"
            color="#10B981"
            fontFamily="$heading"
            hoverStyle={{ opacity: 0.8 }}
          >
            Synap Core
          </Text>
        </Link>

        {/* Nav Links */}
        <XStack gap="$6" alignItems="center">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Text
              fontSize={14}
              color="rgba(255,255,255,0.8)"
              hoverStyle={{ color: '#10B981' }}
              cursor="pointer"
            >
              Home
            </Text>
          </Link>
          
          <Link href="/developers" style={{ textDecoration: 'none' }}>
            <Text
              fontSize={14}
              color="rgba(255,255,255,0.8)"
              hoverStyle={{ color: '#10B981' }}
              cursor="pointer"
            >
              For Developers
            </Text>
          </Link>
          
          <Link href="/whitepaper" style={{ textDecoration: 'none' }}>
            <Text
              fontSize={14}
              color="rgba(255,255,255,0.8)"
              hoverStyle={{ color: '#10B981' }}
              cursor="pointer"
            >
              Whitepaper
            </Text>
          </Link>
          
          <Link href="https://github.com/synap/core" target="_blank" style={{ textDecoration: 'none' }}>
            <XStack gap="$2" alignItems="center" hoverStyle={{ opacity: 0.8 }}>
              <Github size={18} color="#fff" />
              <Text fontSize={14} color="rgba(255,255,255,0.8)">
                GitHub
              </Text>
            </XStack>
          </Link>
        </XStack>
      </XStack>
    </nav>
  )
}
