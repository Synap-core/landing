'use client'

import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Architecture } from '@/components/sections/Architecture'
import { Philosophy } from '@/components/sections/Philosophy'
import { Community } from '@/components/sections/Community'
import { Specs } from '@/components/sections/Specs'
import { YStack } from 'tamagui'

export function LandingPage() {
  return (
    <YStack backgroundColor="$background" minHeight="100vh">
      <Hero />
      <Problem />
      <Architecture />
      <Philosophy />
      <Community />
      <Specs />
    </YStack>
  )
}
