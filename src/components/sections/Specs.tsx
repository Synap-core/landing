'use client'

import { YStack, XStack, H2, H3, Paragraph, Text, Theme } from 'tamagui'
import { motion } from 'framer-motion'
import { Terminal, Server, Cpu, Code } from 'lucide-react'

const specs = [
  {
    id: 'system',
    title: 'System Requirements',
    icon: Server,
    content: [
        'Node.js 18+ or Bun 1.0+',
        'Docker 24+ (optional)',
        '2GB RAM minimum',
        '10GB Storage (SSD)'
    ]
  },
  {
    id: 'api',
    title: 'API Endpoints',
    icon: Terminal,
    content: [
        'POST /events',
        'GET /projections/:id',
        'WS /stream/live',
        'GraphQL Interface'
    ]
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: Cpu,
    content: [
        'Docker Compose',
        'Kubernetes Helm',
        'Systemd Service',
        'Edge Runtime'
    ]
  },
  {
    id: 'plugins',
    title: 'Extensibility',
    icon: Code,
    content: [
        'TypeScript SDK',
        'WASM Modules',
        'Custom Projections',
        'Event Interceptors'
    ]
  }
]

export function Specs() {
  return (
    <Theme name="dark">
      <YStack 
        paddingVertical="$20" 
        minHeight="80vh" 
        justifyContent="center" 
        alignItems="center"
        backgroundColor="$background"
      >
        <YStack maxWidth={1000} width="100%" padding="$4" gap="$12">
          <YStack gap="$4" alignItems="center">
            <H2 
                textAlign="center" 
                fontSize={40} 
                fontFamily="$heading"
                color="$color"
                fontWeight="300"
                letterSpacing={-1}
            >
              Technical Specifications
            </H2>
            <Paragraph 
                textAlign="center" 
                fontSize={18} 
                color="$color" 
                opacity={0.6} 
                maxWidth={600}
            >
                Production-ready, scalable, and built for performance.
            </Paragraph>
          </YStack>

          <XStack 
            flexWrap="wrap" 
            justifyContent="center" 
            gap="$6"
          >
            {specs.map((spec, i) => (
                <motion.div
                    key={spec.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ flex: '1 1 300px', maxWidth: 400 }}
                >
                    <YStack
                        padding="$6"
                        backgroundColor="rgba(255, 255, 255, 0.02)"
                        borderColor="$borderColor"
                        borderWidth={1}
                        borderRadius="$8"
                        gap="$6"
                        height="100%"
                    >
                        <XStack gap="$4" alignItems="center">
                            <spec.icon size={24} color="#10B981" />
                            <H3 fontSize={20} color="$color" fontWeight="400">{spec.title}</H3>
                        </XStack>

                        <YStack gap="$3">
                            {spec.content.map((item, j) => (
                                <XStack key={j} gap="$3" alignItems="center">
                                    <YStack width={4} height={4} borderRadius={2} backgroundColor="$primary" opacity={0.5} />
                                    <Text fontFamily="$mono" fontSize={14} color="$color" opacity={0.8}>
                                        {item}
                                    </Text>
                                </XStack>
                            ))}
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
