'use client'

import { YStack, XStack, H2, H3, Paragraph, Text, Theme } from 'tamagui'
import { motion } from 'framer-motion'
import { Building2, Network, Lock, Unlock, DollarSign, Zap } from 'lucide-react'

const models = [
  {
    id: 'feudal',
    title: 'The Feudal Web',
    subtitle: 'Renting Access to Your Own Life',
    icon: Building2,
    color: '#6B7280',
    points: [
      { icon: Lock, text: 'Google owns your calendar' },
      { icon: Lock, text: 'Notion owns your notes' },
      { icon: Lock, text: 'Slack owns your conversations' },
      { icon: DollarSign, text: '$200/month for access to your own data' },
      { icon: Lock, text: 'Migration is 10x the cost of setup' },
      { icon: Lock, text: 'Build on rented land' }
    ]
  },
  {
    id: 'sovereign',
    title: 'The Sovereign Web',
    subtitle: 'Infrastructure You Control',
    icon: Network,
    color: '#10B981',
    points: [
      { icon: Unlock, text: 'You own the data core' },
      { icon: Unlock, text: 'Apps compete for your users' },
      { icon: Zap, text: 'Best interfaces win' },
      { icon: Unlock, text: 'One-time payment, lifetime ownership' },
      { icon: Zap, text: 'Export anywhere, instantly' },
      { icon: Unlock, text: 'Build on solid foundation' }
    ]
  }
]

export function TheShift() {
  return (
    <Theme name="dark">
      <YStack 
        paddingVertical="$20" 
        minHeight="90vh" 
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
                The Shift
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
                A Fundamental Architecture Change
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
                maxWidth={700}
              >
                We've been building on the wrong foundation. It's time to invert the stack—put users and developers in control, platforms in service.
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
                style={{ flex: '1 1 450px', maxWidth: 580 }}
              >
                <YStack
                  padding="$8"
                  backgroundColor="rgba(255, 255, 255, 0.03)"
                  borderColor={model.id === 'sovereign' ? '$primary' : '$borderColor'}
                  borderWidth={model.id === 'sovereign' ? 2 : 1}
                  borderRadius="$10"
                  gap="$6"
                  height="100%"
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <YStack gap="$3">
                    <YStack 
                      padding="$3" 
                      backgroundColor={`${model.color}20`} 
                      borderRadius="$8"
                      alignSelf="flex-start"
                    >
                      <model.icon color={model.color} size={32} />
                    </YStack>
                    
                    <H3 fontSize={32} color="$color" fontWeight="400">
                      {model.title}
                    </H3>
                    
                    <Text fontSize={14} color={model.color} opacity={0.8} fontFamily="$mono">
                      {model.subtitle}
                    </Text>
                  </YStack>

                  <YStack gap="$4">
                    {model.points.map((point, j) => (
                      <XStack key={j} gap="$3" alignItems="flex-start">
                        <YStack paddingTop="$1">
                          <point.icon 
                            color={model.color} 
                            size={18} 
                            style={{ opacity: 0.6 }} 
                          />
                        </YStack>
                        <Text fontSize={16} color="$color" opacity={0.8} lineHeight={24} flex={1}>
                          {point.text}
                        </Text>
                      </XStack>
                    ))}
                  </YStack>
                </YStack>
              </motion.div>
            ))}
          </XStack>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Paragraph 
              textAlign="center" 
              fontSize={20} 
              color="$primary"
              fontWeight="500"
              marginTop="$6"
            >
              The infrastructure exists. The timing is perfect. Let's build it.
            </Paragraph>
          </motion.div>
        </YStack>
      </YStack>
    </Theme>
  )
}
