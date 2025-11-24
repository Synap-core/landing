'use client'

import { Hero } from '@/components/sections/Hero'
import { TheShift } from '@/components/sections/TheShift'
import { WhyNow } from '@/components/sections/WhyNow'
import { DeveloperStories } from '@/components/sections/DeveloperStories'
import { Architecture } from '@/components/sections/Architecture'
import { Philosophy } from '@/components/sections/Philosophy'
import { Community } from '@/components/sections/Community'
import { Specs } from '@/components/sections/Specs'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { SectionIndicator } from '@/components/ui/SectionIndicator'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'
import { YStack } from 'tamagui'

export function LandingPage() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <SectionIndicator />
      <YStack backgroundColor="$background" minHeight="100vh" paddingTop={60 /* Account for fixed nav */}>
        <Hero />
        <TheShift />
        <WhyNow />
        <DeveloperStories />
        <Architecture />
        <Philosophy />
        <Community />
        {/* <Specs /> - Moved to /developers page */}
      </YStack>
      <Footer />
    </>
  )
}

