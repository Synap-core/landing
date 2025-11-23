'use client'

import { YStack, XStack, H2, Paragraph, Text, Theme } from 'tamagui'
import { motion } from 'framer-motion'
import { Building2, Network } from 'lucide-react'

const models = [
  {
    id: 'corporate',
    icon: Building2,
    title: 'Rent Intelligence',
    color: '#6B7280',
    points: [
      'Your thoughts become training data',
      'Monthly fees for your own context',
      'Lock-in to proprietary systems',
      'Data vanishes with platform changes'
    ]
  },
  {
    id: 'synap',
    icon: Network,
    title: 'Own Intelligence',
    color: '#10B981',
    points: [
      'Private, local-first by default',
      'One install, lifetime ownership',
      'Open protocols, zero lock-in',
      'Immutable knowledge graph'
    ]
  }
]

export function Problem() {
  return (
    <Theme name="dark">
      <YStack 
        paddingVertical="$20" 
        minHeight="80vh" 
        justifyContent="center" 
        alignItems="center"
        backgroundColor="$background"
      >
        <YStack maxWidth={1200} width="100%" padding="$4" gap="$12">
          <YStack gap="$4" alignItems="center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Text 
                fontFamily="$mono" 
                fontSize={12} 
                color="$primary" 
                letterSpacing={2}
                textTransform="uppercase"
              >
                The Choice
              </Text>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <H2 
                textAlign="center" 
                fontSize={48} 
                fontFamily="$heading"
                color="$color"
                fontWeight="300"
                letterSpacing={-1}
              >
                A Fundamental Decision
              </H2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paragraph 
                textAlign="center" 
                fontSize={18} 
                color="$color" 
                opacity={0.6}
                maxWidth={600}
              >
                How you interact with intelligence defines your digital sovereignty.
              </Paragraph>
            </motion.div>
          </YStack>

          <XStack 
            flexWrap="wrap" 
            justifyContent="center" 
            gap="$6"
          >
            {models.map((model, i) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -5 }}
                style={{ flex: '1 1 400px', maxWidth: 550 }}
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
                  <YStack gap="$4">
                    <YStack 
                      padding="$3" 
                      backgroundColor={`${model.color}20`} 
                      borderRadius="$8"
                      alignSelf="flex-start"
                    >
                      <model.icon color={model.color} size={32} />
                    </YStack>
                    
                    <H2 fontSize={28} color="$color" fontWeight="400">
                      {model.title}
                    </H2>
                  </YStack>

                  <YStack gap="$3">
                    {model.points.map((point, j) => (
                      <XStack key={j} gap="$3" alignItems="center">
                        <YStack 
                          width={4} 
                          height={4} 
                          borderRadius={2} 
                          backgroundColor={model.color}
                          opacity={0.6} 
                        />
                        <Text fontSize={16} color="$color" opacity={0.8} lineHeight={24}>
                          {point}
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
