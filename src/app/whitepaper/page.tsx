'use client'

import { YStack, XStack } from 'tamagui'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { WhitepaperContent } from '@/components/whitepaper/WhitepaperContent'
import { TableOfContents } from '@/components/whitepaper/TableOfContents'
import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function WhitepaperPage() {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    // Fetch the whitepaper markdown content
    fetch('/whitepaper-v1.md')
      .then(res => res.text())
      .then(text => {
        setContent(text)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load whitepaper:', err)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (loading) {
    return (
      <>
        <Navigation />
        <YStack backgroundColor="#050505" minHeight="100vh" paddingTop={100} alignItems="center" justifyContent="center">
          <YStack gap="$4" alignItems="center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <div style={{ 
                width: 48, 
                height: 48, 
                border: '3px solid rgba(16, 185, 129, 0.2)',
                borderTop: '3px solid #10B981',
                borderRadius: '50%'
              }} />
            </motion.div>
          </YStack>
        </YStack>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <XStack backgroundColor="#050505" minHeight="100vh">
        {/* TOC Sidebar (desktop only) */}
        {content && <TableOfContents content={content} />}

        {/* Main Content */}
        <YStack flex={1} paddingTop={100}>
          {content ? (
            <WhitepaperContent content={content} />
          ) : (
            <YStack gap="$6" paddingTop="$12" paddingHorizontal="$6" maxWidth={800} marginHorizontal="auto">
              <h1 style={{ color: '#fff', fontSize: 56, fontWeight: 800 }}>
                Synap Core: Building the Sovereign Web
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18 }}>
                The whitepaper content could not be loaded.
              </p>
            </YStack>
          )}
        </YStack>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              style={{
                position: 'fixed',
                bottom: 32,
                right: 32,
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #10B981, #059669)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(16, 185, 129, 0.4)',
                zIndex: 100
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp size={24} color="#000" />
            </motion.button>
          )}
        </AnimatePresence>
      </XStack>
      <Footer />
    </>
  )
}
