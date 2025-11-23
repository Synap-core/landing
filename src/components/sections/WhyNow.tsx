'use client'

import { YStack, XStack, H2, H3, Paragraph, Text, Theme } from 'tamagui'
import { motion } from 'framer-motion'
import { Brain, Scale, TrendingUp, Zap } from 'lucide-react'

const reasons = [
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Maturity',
    description: 'LLMs can interpret natural language into structured actions',
    details: 'What seemed impossible 3 years ago—AI understanding user intent and creating structured data—is now table stakes. Universal interfaces are finally practical.',
    color: '#10B981'
  },
  {
    id: 'regulation',
    icon: Scale,
    title: 'Regulatory Pressure',
    description: 'EU Data Act 2025 mandates data portability',
    details: 'Vendor lock-in isn\'t just anti-competitive anymore—it\'s illegal. The law is forcing the shift we\'ve been advocating for.',
    color: '#3B82F6'
  },
  {
    id: 'blockchain',
    icon: TrendingUp,
    title: 'Blockchain\'s Lesson',
    description: 'Market validated demand for ownership, rejected execution',
    details: 'Billions of dollars proved people want data sovereignty. Crypto showed us what NOT to do. We learned: ownership without complexity.',
    color: '#8B5CF6'
  },
  {
    id: 'tech',
    icon: Zap,
    title: 'Technical Readiness',
    description: 'Event sourcing + containers = deployable sovereignty',
    details: 'Docker, event-driven architectures, and modern databases make self-hosted infrastructure as easy as SaaS deployment. The stack is ready.',
    color: '#F59E0B'
  }
]

export function WhyNow() {
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
                Timing
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
                Why Now?
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
                Four forces converge to make sovereign infrastructure not just possible, but inevitable.
              </Paragraph>
            </motion.div>
          </YStack>

          <YStack gap="$6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <YStack
                  padding="$6"
                  backgroundColor="rgba(255, 255, 255, 0.03)"
                  borderColor="$borderColor"
                  borderWidth={1}
                  borderRadius="$8"
                  gap="$4"
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <XStack gap="$4" alignItems="flex-start">
                    <YStack 
                      padding="$3" 
                      backgroundColor={`${reason.color}20`} 
                      borderRadius="$6"
                    >
                      <reason.icon color={reason.color} size={24} />
                    </YStack>
                    
                    <YStack flex={1} gap="$2">
                      <H3 fontSize={24} color="$color" fontWeight="400">
                        {reason.title}
                      </H3>
                      
                      <Text fontSize={16} color={reason.color} opacity={0.9} fontWeight="500">
                        {reason.description}
                      </Text>
                      
                      <Paragraph fontSize={15} color="$color" opacity={0.7} lineHeight={24} marginTop="$2">
                        {reason.details}
                      </Paragraph>
                    </YStack>
                  </XStack>
                </YStack>
              </motion.div>
            ))}
          </YStack>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <YStack 
              padding="$6" 
              backgroundColor="rgba(16, 185, 129, 0.1)"
              borderColor="$primary"
              borderWidth={1}
              borderRadius="$8"
              alignItems="center"
              gap="$3"
            >
              <Text fontSize={18} color="$primary" fontWeight="600">
                The window is open.
              </Text>
              <Paragraph textAlign="center" color="$color" opacity={0.8} maxWidth={600}>
                Build the sovereign web infrastructure before big tech closes it. The regulatory moment, technical readiness, and market demand align right now.
              </Paragraph>
            </YStack>
          </motion.div>
        </YStack>
      </YStack>
    </Theme>
  )
}
