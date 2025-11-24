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
import { YStack } from 'tamagui'

export function LandingPage() {
  return (
    <>
      <ScrollProgress />
      <SectionIndicator />
      <YStack backgroundColor="$background" minHeight="100vh">
        <Hero />
        <TheShift />
        <WhyNow />
        <DeveloperStories />
        <Architecture />
        <Philosophy />
        <Community />
        <Specs />
      </YStack>
    </>
  )
}

