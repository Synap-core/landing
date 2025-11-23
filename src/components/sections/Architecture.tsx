'use client'

import { useState } from 'react'
import { YStack, XStack, H2, H3, Paragraph, Text, Theme } from 'tamagui'
import { motion } from 'framer-motion'
import { Database, Layers, Puzzle, Globe } from 'lucide-react'

const components = [
  {
    id: 'event-store',
    name: 'Event Store',
    description: 'Immutable source of truth. Every thought, every change, preserved forever in a tamper-proof log.',
    details: 'Append-only event log using event sourcing pattern. Enables complete audit trail and temporal queries.',
    icon: Database,
    color: '#10B981'
  },
  {
    id: 'projectors',
    name: 'Projectors',
    description: 'Real-time transformations. Turn raw event streams into queryable, optimized data models.',
    details: 'Materialized views auto-updated from event stream. Multiple projections from single source of truth.',
    icon: Layers,
    color: '#3B82F6'
  },
  {
    id: 'plugins',
    name: 'Plugin System',
    description: 'Extendable intelligence. Add new capabilities, integrations, and AI models without touching core code.',
    details: 'WASM-based plugin architecture. Sandboxed execution with defined event/projection hooks.',
    icon: Puzzle,
    color: '#8B5CF6'
  },
  {
    id: 'api',
    name: 'Universal API',
    description: 'Data liquidity. Access your personal knowledge graph from any device, app, or agent.',
    details: 'GraphQL + REST endpoints. Real-time subscriptions via WebSocket. OAuth2 for secure delegation.',
    icon: Globe,
    color: '#F59E0B'
  }
]

export function Architecture() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <Theme name="dark">
      <YStack 
        paddingVertical="$20" 
        minHeight="100vh" 
        justifyContent="center" 
        alignItems="center"
        backgroundColor="$background"
        overflow="hidden"
      >
        <YStack maxWidth={1200} width="100%" padding="$4" gap="$12">
          <YStack gap="$4" alignItems="center">
            <H2 
                textAlign="center" 
                fontSize={48} 
                fontFamily="$heading"
                color="$color"
                fontWeight="300"
                letterSpacing={-1}
            >
              System Architecture
            </H2>
            <Paragraph 
                textAlign="center" 
                fontSize={20} 
                color="$color" 
                opacity={0.6} 
                maxWidth={600}
                fontFamily="$body"
                fontWeight="300"
            >
                Built on first principles for longevity, privacy, and extensibility.
            </Paragraph>
          </YStack>

          <XStack 
            flexWrap="wrap" 
            justifyContent="center" 
            gap="$6"
          >
            {components.map((comp) => (
                <motion.div
                    key={comp.id}
                    onHoverStart={() => setHoveredId(comp.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    whileHover={{ y: -5 }}
                    style={{ flex: '1 1 300px', maxWidth: 500 }}
                >
                    <YStack
                        padding="$8"
                        backgroundColor="rgba(255, 255, 255, 0.03)"
                        borderColor="$borderColor"
                        borderWidth={1}
                        borderRadius="$10"
                        gap="$6"
                        height="100%"
                        style={{
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                        }}
                    >
                        <XStack justifyContent="space-between" alignItems="flex-start">
                            <YStack 
                                padding="$3" 
                                backgroundColor={`${comp.color}20`} 
                                borderRadius="$8"
                            >
                                <comp.icon color={comp.color} size={24} />
                            </YStack>
                            <motion.div
                                animate={{ opacity: hoveredId === comp.id ? 1 : 0 }}
                            >
                                <Text color={comp.color} fontSize={12} fontFamily="$mono" opacity={0.8}>
                                    0{components.indexOf(comp) + 1}
                                </Text>
                            </motion.div>
                        </XStack>

                        <YStack gap="$2">
                            <H3 fontSize={24} color="$color" fontWeight="400">{comp.name}</H3>
                            <Paragraph fontSize={16} lineHeight={26} color="$color" opacity={0.7}>
                                {comp.description}
                            </Paragraph>
                            
                            {/* Technical Details - Shows on Hover */}
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ 
                                    height: hoveredId === comp.id ? 'auto' : 0,
                                    opacity: hoveredId === comp.id ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                style={{ overflow: 'hidden' }}
                            >
                                <YStack 
                                    marginTop="$3" 
                                    paddingTop="$3" 
                                    borderTopWidth={1} 
                                    borderColor="$borderColor"
                                >
                                    <Text 
                                        fontFamily="$mono" 
                                        fontSize={13} 
                                        color={comp.color} 
                                        opacity={0.9}
                                        lineHeight={20}
                                    >
                                        {comp.details}
                                    </Text>
                                </YStack>
                            </motion.div>
                        </YStack>
                    </YStack>
                </motion.div>
            ))}
          </XStack>
        </YStack>
      </YStack>
    </Theme>
  )
}
