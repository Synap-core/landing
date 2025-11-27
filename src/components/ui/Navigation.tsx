'use client'

import { useState } from 'react'
import { XStack, YStack, Text } from 'tamagui'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Menu, X } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(5, 5, 5, 0.98)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <XStack
        maxWidth={1200}
        marginHorizontal="auto"
        paddingHorizontal="$4"
        paddingVertical="$4"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo/Brand */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <XStack gap="$2" alignItems="center" hoverStyle={{ opacity: 0.8 }}>
            <Image
              src="/logo.png"
              alt="Synap Core Logo"
              width={32}
              height={32}
              style={{ borderRadius: '6px' }}
            />
            <Text
              fontSize="$4"
              fontWeight="700"
              color="#10B981"
              style={{ fontFamily: 'Oughter, sans-serif' }}
            >
              Synap Core
            </Text>
          </XStack>
        </Link>

        {/* Desktop Nav Links */}
        <XStack 
          gap="$6" 
          alignItems="center"
          display="flex"
          $sm={{ display: 'none' }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Text
              fontSize="$2"
              color="rgba(255,255,255,0.8)"
              hoverStyle={{ color: '#10B981' }}
              cursor="pointer"
            >
              Home
            </Text>
          </Link>
          
          <Link href="/developers" style={{ textDecoration: 'none' }}>
            <Text
              fontSize="$2"
              color="rgba(255,255,255,0.8)"
              hoverStyle={{ color: '#10B981' }}
              cursor="pointer"
            >
              For Developers
            </Text>
          </Link>
          
          <Link href="/whitepaper" style={{ textDecoration: 'none' }}>
            <Text
              fontSize="$2"
              color="rgba(255,255,255,0.8)"
              hoverStyle={{ color: '#10B981' }}
              cursor="pointer"
            >
              Whitepaper
            </Text>
          </Link>
          
          <Link href="https://github.com/synap/core" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <XStack gap="$2" alignItems="center" hoverStyle={{ opacity: 0.8 }}>
              <Github size={18} color="#fff" />
              <Text fontSize="$2" color="rgba(255,255,255,0.8)">
                GitHub
              </Text>
            </XStack>
          </Link>
        </XStack>

        {/* Mobile Menu Button */}
        <div
          style={{
            display: 'none',
            cursor: 'pointer',
          }}
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} color="#fff" />
          ) : (
            <Menu size={24} color="#fff" />
          )}
        </div>
      </XStack>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <YStack
          backgroundColor="rgba(5, 5, 5, 0.98)"
          borderTopWidth={1}
          borderTopColor="rgba(255, 255, 255, 0.1)"
          padding="$4"
          gap="$4"
          display="none"
          className="mobile-menu"
        >
          <Link href="/" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
            <Text fontSize="$3" color="rgba(255,255,255,0.8)" padding="$2">
              Home
            </Text>
          </Link>
          
          <Link href="/developers" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
            <Text fontSize="$3" color="rgba(255,255,255,0.8)" padding="$2">
              For Developers
            </Text>
          </Link>
          
          <Link href="/whitepaper" style={{ textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>
            <Text fontSize="$3" color="rgba(255,255,255,0.8)" padding="$2">
              Whitepaper
            </Text>
          </Link>
          
          <Link href="https://github.com/synap/core" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <XStack gap="$2" alignItems="center" padding="$2">
              <Github size={18} color="#fff" />
              <Text fontSize="$3" color="rgba(255,255,255,0.8)">
                GitHub
              </Text>
            </XStack>
          </Link>
        </YStack>
      )}

      {/* Mobile-specific CSS */}
      <style jsx>{`
        @media (max-width: 800px) {
          .mobile-menu-button {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  )
}
