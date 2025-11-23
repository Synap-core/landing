'use client'

import { Hero } from '@/components/sections/Hero'
import { TheShift } from '@/components/sections/TheShift'
import { WhyNow } from '@/components/sections/WhyNow'
import { Architecture } from '@/components/sections/Architecture'
import { DeveloperStories } from '@/components/sections/DeveloperStories'
import { Philosophy } from '@/components/sections/Philosophy'
import { Community } from '@/components/sections/Community'
import { Specs } from '@/components/sections/Specs'
import { YStack } from 'tamagui'

export function LandingPage() {
  return (
    <YStack backgroundColor="$background" minHeight="100vh">
      <Hero />
      <TheShift />
      <WhyNow />
      <Architecture />
      <DeveloperStories />
      <Philosophy />
      <Community />
      <Specs />
    </YStack>
  )
}

