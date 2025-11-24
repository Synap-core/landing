'use client'

import { YStack, XStack, H1, Paragraph, Text } from 'tamagui'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { WhitepaperContent } from '@/components/whitepaper/WhitepaperContent'
import { useEffect, useState } from 'react'

export default function WhitepaperPage() {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)

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

  return (
    <>
      <Navigation />
      <YStack backgroundColor="#050505" minHeight="100vh" paddingTop={100 /* Account for fixed nav */}>
        <YStack maxWidth={1200} marginHorizontal="auto" width="100%" paddingVertical="$12" paddingHorizontal="$6">
          
          {loading ? (
            <YStack gap="$6" alignItems="center" paddingTop="$12">
              <Text color="rgba(255,255,255,0.6)" fontSize={18}>
                Loading whitepaper...
              </Text>
            </YStack>
          ) : content ? (
            <WhitepaperContent content={content} />
          ) : (
            <YStack gap="$6" paddingTop="$12">
              <H1 color="#fff" fontSize={56} fontWeight="800">
                Synap Core: Building the Sovereign Web
              </H1>
              <Paragraph color="rgba(255,255,255,0.7)" fontSize={18}>
                The whitepaper content could not be loaded. 
                Please check the <Link href="/developers" style={{ color: '#10B981' }}>developer documentation</Link> for technical details.
              </Paragraph>
            </YStack>
          )}

        </YStack>
      </YStack>
      <Footer />
    </>
  )
}
