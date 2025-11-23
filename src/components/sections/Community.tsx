'use client'

import { YStack, XStack, H2, Paragraph, Text, Theme } from 'tamagui'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Github, MessageSquare, Download } from 'lucide-react'

const stats = [
  { value: '2.4k', label: 'GitHub Stars' },
  { value: '150+', label: 'Contributors' },
  { value: '12k', label: 'Self-Hosted' }
]

export function Community() {
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
                Open Source
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
                Built by Humans, for Humans
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
                A growing community building the infrastructure for personal intelligence.
              </Paragraph>
            </motion.div>
          </YStack>

          {/* Stats */}
          <XStack 
            flexWrap="wrap" 
            justifyContent="center" 
            gap="$8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <YStack
                  padding="$6"
                  backgroundColor="rgba(255, 255, 255, 0.03)"
                  borderColor="$borderColor"
                  borderWidth={1}
                  borderRadius="$8"
                  alignItems="center"
                  gap="$2"
                  minWidth={150}
                  style={{
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                >
                  <Text fontSize={40} color="$primary" fontWeight="600">
                    {stat.value}
                  </Text>
                  <Text fontSize={14} color="$color" opacity={0.6}>
                    {stat.label}
                  </Text>
                </YStack>
              </motion.div>
            ))}
          </XStack>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <XStack gap="$4" flexWrap="wrap" justifyContent="center">
              <Button 
                variant="primary" 
                size="$5" 
                borderRadius="$10"
                iconAfter={Github}
              >
                Star on GitHub
              </Button>
              <Button 
                variant="outline" 
                size="$5" 
                borderRadius="$10"
                borderColor="$borderColor"
                iconAfter={MessageSquare}
              >
                Join Discord
              </Button>
              <Button 
                variant="outline" 
                size="$5" 
                borderRadius="$10"
                borderColor="$borderColor"
                iconAfter={Download}
              >
                Self-Host Now
              </Button>
            </XStack>
          </motion.div>
        </YStack>
      </YStack>
    </Theme>
  )
}
