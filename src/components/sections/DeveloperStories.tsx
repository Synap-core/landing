'use client'

import { YStack, XStack, H2, H3, Paragraph, Text, Theme } from 'tamagui'
import { motion } from 'framer-motion'
import { Code, Shield, Users } from 'lucide-react'

const stories = [
  {
    id: 'saas',
    icon: Code,
    persona: 'SaaS Builder',
    name: 'Alex',
    problem: '"I spend 60% of my time on user data management, auth, and infrastructure. I just want to build features."',
    solution: 'With Synap Core: Users bring their own data pods. Alex builds the interface and intelligence layer. No database management, no auth headaches, no scaling nightmares.',
    outcome: 'Shipped 3x faster. Users own their data. Zero migration friction when they churn.',
    color: '#10B981'
  },
  {
    id: 'privacy',
    icon: Shield,
    persona: 'Privacy Engineer',
    name: 'Maria',
    problem: '"GDPR compliance is a nightmare. Every feature needs audit trails, encryption, and deletion workflows. Our legal bills are insane."',
    solution: 'With Synap Core: Event sourcing gives complete audit trails by default. Users control their own pods—no central data to secure. Deletion is instant (their pod, their rules).',
    outcome: 'GDPR compliance built-in. Legal costs down 80%. Users trust us because we literally can\'t access their data.',
    color: '#3B82F6'
  },
  {
    id: 'opensource',
    icon: Users,
    persona: 'Open Source Maintainer',
    name: 'Jordan',
    problem: '"I built an amazing tool but can\'t monetize it. Hosting user data costs a fortune. Freemium kills my margins."',
    solution: 'With Synap Core: Users self-host their data. Jordan sells the app as a one-time purchase. No ongoing infrastructure costs. Sustainable open source business model.',
    outcome: 'Profitable from day one. Users pay once, own forever. Community grows because data isn\'t locked in.',
    color: '#8B5CF6'
  }
]

export function DeveloperStories() {
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
                For Builders
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
                Build Features, Not Infrastructure
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
                Real developers building on sovereign infrastructure. Same problems you face. Different architecture.
              </Paragraph>
            </motion.div>
          </YStack>

          <YStack gap="$8">
            {stories.map((story, i) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <YStack
                  padding="$8"
                  backgroundColor="rgba(255, 255, 255, 0.03)"
                  borderColor="$borderColor"
                  borderWidth={1}
                  borderRadius="$10"
                  gap="$6"
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <XStack gap="$4" alignItems="center">
                    <YStack 
                      padding="$3" 
                      backgroundColor={`${story.color}20`} 
                      borderRadius="$8"
                    >
                      <story.icon color={story.color} size={28} />
                    </YStack>
                    
                    <YStack gap="$1">
                      <H3 fontSize={24} color="$color" fontWeight="500">
                        {story.name}
                      </H3>
                      <Text fontSize={14} color={story.color} opacity={0.9} fontFamily="$mono">
                        {story.persona}
                      </Text>
                    </YStack>
                  </XStack>

                  <YStack gap="$4">
                    <YStack gap="$2">
                      <Text fontSize={12} color="$color" opacity={0.5} fontFamily="$mono" textTransform="uppercase" letterSpacing={1}>
                        The Problem
                      </Text>
                      <Paragraph fontSize={16} color="$color" opacity={0.8} lineHeight={26} fontStyle="italic">
                        {story.problem}
                      </Paragraph>
                    </YStack>

                    <YStack gap="$2">
                      <Text fontSize={12} color="$color" opacity={0.5} fontFamily="$mono" textTransform="uppercase" letterSpacing={1}>
                        The Solution
                      </Text>
                      <Paragraph fontSize={16} color="$color" opacity={0.9} lineHeight={26}>
                        {story.solution}
                      </Paragraph>
                    </YStack>

                    <YStack 
                      padding="$4" 
                      backgroundColor={`${story.color}15`}
                      borderRadius="$6"
                      borderLeftWidth={3}
                      borderLeftColor={story.color}
                    >
                      <Text fontSize={16} color={story.color} fontWeight="600" lineHeight={24}>
                        {story.outcome}
                      </Text>
                    </YStack>
                  </YStack>
                </YStack>
              </motion.div>
            ))}
          </YStack>
        </YStack>
      </YStack>
    </Theme>
  )
}
