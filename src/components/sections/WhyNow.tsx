'use client'

import { YStack, XStack, H2, H3, Paragraph, Text, Theme } from 'tamagui'
import { motion } from 'framer-motion'
import { Brain, Scale, TrendingUp, Zap } from 'lucide-react'

const reasons = [
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Maturity',
    description: 'LLMs turn natural language into structured data. Universal interfaces are finally practical.',
    color: '#10B981'
  },
  {
    id: 'regulation',
    icon: Scale,
    title: 'Regulatory Pressure',
    description: 'EU Data Act 2025 makes vendor lock-in illegal. The law is forcing the shift.',
    color: '#3B82F6'
  },
  {
    id: 'blockchain',
    icon: TrendingUp,
    title: 'Blockchain\'s Lesson',
    description: 'People want data sovereignty. Crypto showed what NOT to do. Ownership without complexity.',
    color: '#8B5CF6'
  },
  {
    id: 'tech',
    icon: Zap,
    title: 'Technical Readiness',
    description: 'Event sourcing + containers make self-hosting as easy as SaaS deployment. The stack is ready.',
    color: '#F59E0B'
  }
]

export function WhyNow() {
  return (
    <Theme name="dark">
      <YStack 
        paddingVertical="$16" 
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

          <YStack gap="$6" $gtMd={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ flex: '1 1 45%', minWidth: 300, maxWidth: 500 }}
              >
                <YStack
                  height="100%"
                  padding="$6"
                  backgroundColor="#050505"
                  borderColor="rgba(255,255,255,0.1)"
                  borderWidth={1}
                  borderRadius="$10"
                  gap="$4"
                  style={{
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                  }}
                  hoverStyle={{
                    borderColor: '#10B981',
                    transform: 'translateY(-2px)'
                  }}
                >
                  <XStack gap="$4" alignItems="flex-start">
                    <YStack 
                      padding="$3" 
                      backgroundColor="rgba(16, 185, 129, 0.1)" 
                      borderRadius="$6"
                      borderWidth={1}
                      borderColor="rgba(16, 185, 129, 0.2)"
                    >
                      <reason.icon color="#10B981" size={24} />
                    </YStack>
                    
                    <YStack flex={1} gap="$2">
                      <H3 fontSize={24} color="white" fontWeight="500">
                        {reason.title}
                      </H3>
                      
                      <Text fontSize={15} color="#a3a3a3" lineHeight={24}>
                        {reason.description}
                      </Text>
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
