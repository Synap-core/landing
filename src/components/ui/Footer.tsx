'use client'

import { YStack, XStack, Text, Paragraph } from 'tamagui'
import Link from 'next/link'
import { Github, MessageCircle } from 'lucide-react'

export function Footer() {
  return (
    <YStack
      backgroundColor="rgba(5, 5, 5, 0.98)"
      borderTopWidth={1}
      borderTopColor="rgba(255, 255, 255, 0.1)"
      paddingVertical="$12"
      paddingHorizontal="$6"
    >
      <YStack maxWidth={1200} marginHorizontal="auto" width="100%" gap="$8">
        
        {/* Main Footer Content */}
        <XStack
          gap="$12"
          flexWrap="wrap"
          justifyContent="space-between"
          $sm={{ flexDirection: 'column', gap: '$8' }}
        >
          
          {/* Brand Column */}
          <YStack flex={1} gap="$4" minWidth={200}>
            <Text fontSize={20} fontWeight="700" color="#10B981" fontFamily="$heading">
              Synap Core
            </Text>
            <Paragraph color="rgba(255,255,255,0.6)" fontSize={14} lineHeight={22}>
              Building the sovereign web. Your data, your infrastructure, your choice.
            </Paragraph>
          </YStack>

          {/* Product Links */}
          <YStack gap="$3" minWidth={150}>
            <Text fontSize={14} fontWeight="600" color="#fff" marginBottom="$2">
              Product
            </Text>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Text fontSize={14} color="rgba(255,255,255,0.6)" hoverStyle={{ color: '#10B981' }}>
                Home
              </Text>
            </Link>
            <Link href="/developers" style={{ textDecoration: 'none' }}>
              <Text fontSize={14} color="rgba(255,255,255,0.6)" hoverStyle={{ color: '#10B981' }}>
                For Developers
              </Text>
            </Link>
            <Link href="/whitepaper" style={{ textDecoration: 'none' }}>
              <Text fontSize={14} color="rgba(255,255,255,0.6)" hoverStyle={{ color: '#10B981' }}>
                Whitepaper
              </Text>
            </Link>
          </YStack>

          {/* Community Links */}
          <YStack gap="$3" minWidth={150}>
            <Text fontSize={14} fontWeight="600" color="#fff" marginBottom="$2">
              Community
            </Text>
            <Link href="https://github.com/Synap-core/backend" target="_blank" style={{ textDecoration: 'none' }}>
              <XStack gap="$2" alignItems="center" hoverStyle={{ opacity: 0.8 }}>
                <Github size={16} color="rgba(255,255,255,0.6)" />
                <Text fontSize={14} color="rgba(255,255,255,0.6)" hoverStyle={{ color: '#10B981' }}>
                  GitHub
                </Text>
              </XStack>
            </Link>
            <Link href="https://discord.gg/synap" target="_blank" style={{ textDecoration: 'none' }}>
              <XStack gap="$2" alignItems="center" hoverStyle={{ opacity: 0.8 }}>
                <MessageCircle size={16} color="rgba(255,255,255,0.6)" />
                <Text fontSize={14} color="rgba(255,255,255,0.6)" hoverStyle={{ color: '#10B981' }}>
                  Discord
                </Text>
              </XStack>
            </Link>
          </YStack>

          {/* Resources */}
          <YStack gap="$3" minWidth={150}>
            <Text fontSize={14} fontWeight="600" color="#fff" marginBottom="$2">
              Resources
            </Text>
            <Link href="https://doc.synap.live" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Text fontSize={14} color="rgba(255,255,255,0.6)" hoverStyle={{ color: '#10B981' }}>
                Documentation
              </Text>
            </Link>
            <Link href="https://github.com/Synap-core/backend/blob/main/LICENSE" target="_blank" style={{ textDecoration: 'none' }}>
              <Text fontSize={14} color="rgba(255,255,255,0.6)" hoverStyle={{ color: '#10B981' }}>
                License (MIT)
              </Text>
            </Link>
          </YStack>
        </XStack>

        {/* Bottom Bar */}
        <XStack
          paddingTop="$6"
          borderTopWidth={1}
          borderTopColor="rgba(255, 255, 255, 0.05)"
          justifyContent="space-between"
          alignItems="center"
          $sm={{ flexDirection: 'column', gap: '$4' }}
        >
          <Text fontSize={13} color="rgba(255,255,255,0.4)">
            © 2024 Synap Core. Open source under MIT license.
          </Text>
          <Text fontSize={13} color="rgba(255,255,255,0.4)">
            Built with ❤️ for the sovereign web
          </Text>
        </XStack>

      </YStack>
    </YStack>
  )
}
