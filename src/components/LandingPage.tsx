'use client'

import { Hero } from '@/components/sections/Hero'
import { TheShift } from '@/components/sections/TheShift'
import { Philosophy } from '@/components/sections/Philosophy'
import { Ecosystem } from '@/components/sections/Ecosystem'
import { WhyNow } from '@/components/sections/WhyNow'
import { DeveloperStories } from '@/components/sections/DeveloperStories'
import { Architecture } from '@/components/sections/Architecture'
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
        <Philosophy />  {/* Moved up - reinforces vision early */}
        <Ecosystem />   {/* New - answers "what can I do?" */}
        <WhyNow />
        <DeveloperStories />
        <Architecture />
        <Community />
        {/* <Specs /> - Moved to /developers page */}
      </YStack>
      <Footer />
    </>
  )
}

