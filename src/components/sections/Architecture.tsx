'use client'

import { YStack, XStack, Text } from 'tamagui'
import { SectionLabel, SectionHeading, BodyText } from '@/components/ui/Typography'
import { ArchitectureAnimation } from '@/components/architecture/ArchitectureAnimation'

export function Architecture() {
  return (
    <YStack
      padding="$12"
      paddingVertical="$16"
      backgroundColor="$background"
      minHeight="100vh"
      $sm={{ padding: '$6', paddingVertical: '$12' }}
    >
      <YStack maxWidth={1200} marginHorizontal="auto" width="100%" gap="$12">
        
        {/* Header */}
        <YStack gap="$4" alignItems="center">
          <SectionLabel>
            System Architecture
          </SectionLabel>
          <SectionHeading textAlign="center">
            Data Sovereignty in Motion
          </SectionHeading>
          <BodyText textAlign="center" maxWidth={600} opacity={0.85}>
            Watch how your data flows through a truly sovereign system.
            UI or Agent—same architecture, your control.
          </BodyText>
        </YStack>

        {/* Interactive Animation */}
        <ArchitectureAnimation />

        {/* Legend */}
        <XStack gap="$6" justifyContent="center" flexWrap="wrap">
          <XStack gap="$2" alignItems="center">
            <YStack width={12} height={12} borderRadius="$10" backgroundColor="#10B981" />
            <Text fontSize={14} color="rgba(255,255,255,0.7)">UI Flow</Text>
          </XStack>
          <XStack gap="$2" alignItems="center">
            <YStack width={12} height={12} borderRadius="$10" backgroundColor="#F59E0B" />
            <Text fontSize={14} color="rgba(255,255,255,0.7)">Agent Flow</Text>
          </XStack>
          <XStack gap="$2" alignItems="center">
            <YStack width={12} height={12} borderRadius="$10" backgroundColor="#3B82F6" />
            <Text fontSize={14} color="rgba(255,255,255,0.7)">External Service</Text>
          </XStack>
        </XStack>

      </YStack>
    </YStack>
  )
}
