'use client'

import { YStack, XStack, H2, H3, Paragraph, Text, Theme } from 'tamagui'
import { motion, useScroll, useTransform, MotionValue, useSpring } from 'framer-motion'
import { Code, Shield, Users, CheckCircle2 } from 'lucide-react'
import { useRef } from 'react'

const stories = [
  {
    id: 'saas',
    icon: Code,
    persona: 'Freelancer Managing 5 Clients',
    name: 'Scenario',
    before: {
      title: 'Without Synap',
      problem: '5 separate Notion workspaces ($250/month)',
      pain: 'Manual data export/import when switching tools. GDPR liability for all client data.'
    },
    after: {
      title: 'With Synap',
      outcome: 'One self-hosted pod ($5/month)',
      detail: 'Clients bring their own data pods. Zero storage cost. GDPR handled at pod level.'
    },
    color: '#10B981',
    metric: '50x'
  },
  {
    id: 'privacy',
    icon: Shield,
    persona: 'SaaS Startup',
    name: 'Scenario',
    before: {
      title: 'Without Synap',
      problem: 'Building auth, database scaling, GDPR compliance from scratch',
      pain: 'Legal reviews, audit trails, encryption, data deletion workflows. 60% time on infrastructure.'
    },
    after: {
      title: 'With Synap',
      outcome: 'Ship features 3x faster',
      detail: 'Event sourcing gives audit by default. Users control their pods. Focus on features, not plumbing.'
    },
    color: '#3B82F6',
    metric: '3x'
  },
  {
    id: 'opensource',
    icon: Users,
    persona: 'Open Source Maintainer',
    name: 'Scenario',
    before: {
      title: 'Without Synap',
      problem: 'Hosting costs kill margins. Freemium unsustainable.',
      pain: 'Can\'t monetize without vendor lock-in. Server costs grow with users.'
    },
    after: {
      title: 'With Synap',
      outcome: 'Sustainable business model',
      detail: 'Users self-host pods. One-time purchase or subscription. Zero infrastructure costs.'
    },
    color: '#8B5CF6',
    metric: '$$$'
  }
]

function StoryCard({ story, index, progress, ranges, total }: { story: typeof stories[0], index: number, progress: MotionValue<number>, ranges: number[], total: number }) {
  // Ranges: [entryStart, entryEnd, exitStart, exitEnd]
  // entryStart/End might be -1 if it's the first card (no entry animation)
  
  const [entryStart, entryEnd, exitStart, exitEnd] = ranges
  
  // Physics
  const smoothProgress = useSpring(progress, { damping: 20, stiffness: 100 })

  // --- Transforms ---
  
  // Scale: 
  // 1. Entry: 0.9 -> 1
  // 2. Active: 1
  // 3. Exit: 1 -> 0.9
  const scale = useTransform(smoothProgress, 
    [entryStart, entryEnd, exitStart, exitEnd], 
    [0.9, 1, 1, 0.9]
  )

  // Y Position:
  // 1. Entry: 50 -> 0 (Slides up into place)
  // 2. Active: 0
  // 3. Exit: 0 -> -150 (Slides up and away)
  const y = useTransform(smoothProgress,
    [entryStart, entryEnd, exitStart, exitEnd],
    [50, 0, 0, -150]
  )

  // Rotation (Exit only):
  const rotateX = useTransform(smoothProgress,
    [exitStart, exitEnd],
    [0, -15]
  )

  // Opacity:
  // 1. Entry: 0 -> 1
  // 2. Active: 1
  // 3. Exit: 1 -> 0
  const opacity = useTransform(smoothProgress,
    [entryStart, entryEnd, exitStart, exitEnd],
    [0, 1, 1, 0]
  )

  // Brightness/Filter (Optional depth cue)
  const brightness = useTransform(smoothProgress,
    [entryStart, entryEnd],
    [0.5, 1]
  )

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: total - index, 
        rotateX,
        y,
        scale,
        opacity,
        filter: useTransform(brightness, v => `brightness(${v})`),
        transformOrigin: 'top center',
        transformStyle: 'preserve-3d'
      }}
    >
      <YStack 
        maxWidth={900} 
        width="100%" 
        padding="$4"
        backgroundColor="rgba(10, 10, 10, 0.95)" 
        borderColor="rgba(255,255,255,0.15)"
        borderWidth={1}
        borderRadius="$10"
        style={{
          backdropFilter: 'blur(40px)',
          boxShadow: `0 20px 50px -10px rgba(0,0,0,0.8)`
        }}
      >
        <YStack padding="$8" gap="$6">
          {/* Header */}
          <XStack gap="$4" alignItems="center">
            <YStack padding="$3" backgroundColor={`${story.color}20`} borderRadius="$8">
              <story.icon color={story.color} size={32} />
            </YStack>
            <YStack>
              <H3 fontSize={28} color="$color" fontWeight="500">{story.name}</H3>
              <Text fontSize={16} color={story.color} fontFamily="$mono">{story.persona}</Text>
            </YStack>
            <YStack marginLeft="auto" padding="$3" paddingHorizontal="$4" backgroundColor={`${story.color}15`} borderRadius="$6" borderWidth={1} borderColor={story.color}>
              <Text fontSize={24} color={story.color} fontWeight="700">{story.metric}</Text>
            </YStack>
          </XStack>

          {/* Content Grid */}
          <XStack gap="$8" $sm={{ flexDirection: 'column' }}>
            {/* OLD WAY */}
            <YStack flex={1} gap="$2" opacity={0.6}>
              <Text fontSize={12} color="$color" fontFamily="$mono" textTransform="uppercase" opacity={0.7}>The Old Way</Text>
              <Paragraph fontSize={18} color="$color" fontStyle="italic">"{story.before.problem}"</Paragraph>
            </YStack>

            {/* DIVIDER */}
            <YStack width={1} backgroundColor="$borderColor" $sm={{ width: '100%', height: 1 }} />

            {/* NEW WAY */}
            <YStack flex={1} gap="$4">
              <Text fontSize={12} color={story.color} fontFamily="$mono" textTransform="uppercase">With Synap Core</Text>
              <YStack padding="$4" backgroundColor={`${story.color}10`} borderRadius="$6" borderLeftWidth={3} borderLeftColor={story.color}>
                <XStack gap="$2" alignItems="center">
                    <CheckCircle2 size={20} color={story.color} />
                    <Text fontSize={22} color={story.color} fontWeight="600">{story.after.outcome}</Text>
                </XStack>
              </YStack>
              <Paragraph fontSize={18} color="$color">{story.after.detail}</Paragraph>
            </YStack>
          </XStack>
        </YStack>
      </YStack>
    </motion.div>
  )
}

export function DeveloperStories() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <Theme name="dark">
      <YStack 
        ref={containerRef}
        height="350vh" 
        position="relative"
        backgroundColor="$background"
      >
        <YStack 
          position="sticky" 
          top={0} 
          height="100vh" 
          overflow="hidden"
          perspective={1000}
        >
          <YStack maxWidth={900} width="100%" marginHorizontal="auto" height="100%" justifyContent="center">
            
            {/* Header */}
            <YStack gap="$3" alignItems="center" position="absolute" top="8%" left={0} right={0} zIndex={50}>
               <Text fontFamily="$mono" fontSize={12} color="$primary" letterSpacing={2} textTransform="uppercase" opacity={0.6}>
                  Hypothetical Scenarios
               </Text>
               <H2 textAlign="center" fontSize={56} fontFamily="$heading" color="$color" fontWeight="300" letterSpacing={-1}>
                  Use Cases: The Sovereign Stack in Practice
               </H2>
            </YStack>

            {/* 3D Card Stack */}
            <YStack position="relative" height={500} width="100%" marginTop={80} style={{ transformStyle: 'preserve-3d' }}>
              {stories.map((story, i) => {
                // Ranges Logic:
                // Card 0: Entry [-1, -1] (Always visible), Exit [0.1, 0.35]
                // Card 1: Entry [0.1, 0.35] (Enters as 0 exits), Exit [0.35, 0.6]
                // Card 2: Entry [0.35, 0.6], Exit [0.6, 0.85]
                
                const step = 0.25
                const startOffset = 0.1
                
                const exitStart = startOffset + (i * step)
                const exitEnd = exitStart + step
                
                // Entry matches previous card's exit
                const entryStart = i === 0 ? -1 : exitStart - step
                const entryEnd = i === 0 ? 0 : exitStart
                
                return (
                  <StoryCard 
                    key={story.id} 
                    story={story} 
                    index={i} 
                    progress={scrollYProgress}
                    ranges={[entryStart, entryEnd, exitStart, exitEnd]}
                    total={stories.length}
                  />
                )
              })}
            </YStack>

          </YStack>
        </YStack>
      </YStack>
    </Theme>
  )
}
