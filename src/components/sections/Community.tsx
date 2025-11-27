'use client'

import { YStack, XStack, H2, Paragraph, Text, Theme } from 'tamagui'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Github, MessageSquare, Download } from 'lucide-react'
import { useGitHubStats } from '@/hooks/useGitHubStats'

export function Community() {
  const { stars, contributors, isLoading } = useGitHubStats({ mockStars: 0 })
  
  // Progressive disclosure: Show "Building Community" when stars < 10
  const showBuildingMessage = stars < 10

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
                fontSize="$1" 
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
                fontSize="$9" 
                $sm={{ fontSize: "$7" }}
                fontFamily="$heading"
                color="$color"
                fontWeight="600"
                letterSpacing={-1}
              >
                {showBuildingMessage ? 'Building the Sovereign Web Together' : 'Join the Movement'}
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
                fontSize="$4" 
                $sm={{ fontSize: "$3" }}
                color="$color" 
                opacity={0.6}
                maxWidth={600}
              >
                {showBuildingMessage 
                  ? "We're just getting started. Join us on GitHub to build the future of user-owned infrastructure."
                  : "A growing community building the infrastructure for digital sovereignty."}
              </Paragraph>
            </motion.div>
          </YStack>

          {/* Conditional Content */}
          {!showBuildingMessage && (
            <XStack 
              gap="$8" 
              justifyContent="center"
              flexWrap="wrap"
            >
              {[
                { value: `${stars}`, label: 'GitHub Stars' },
                { value: `${contributors}+`, label: 'Contributors' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <YStack 
                    alignItems="center" 
                    gap="$2"
                    padding="$4"
                  >
                    <Text 
                      fontSize="$9" 
                      $sm={{ fontSize: "$7" }}
                      fontWeight="700" 
                      color="$primary"
                      fontFamily="$heading"
                    >
                      {stat.value}
                    </Text>
                    <Text 
                      fontSize="$2" 
                      color="$color" 
                      opacity={0.6}
                      textTransform="uppercase"
                      letterSpacing={1}
                      
                    >
                      {stat.label}
                    </Text>
                  </YStack>
                </motion.div>
              ))}
            </XStack>
          )}

          {/* CTAs */}
          <XStack 
            gap="$4" 
            justifyContent="center"
            flexWrap="wrap"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="primary" 
                size="$5"
                borderRadius="$10"
                href="https://github.com/synap/core"
              >
                <XStack gap="$2" alignItems="center">
                  <Github size={20} />
                  <Text>Star on GitHub</Text>
                </XStack>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="$5"
                borderRadius="$10"
                borderColor="$borderColor"
                href="https://discord.gg/synap"
              >
                <XStack gap="$2" alignItems="center">
                  <MessageSquare size={20} />
                  <Text>Join Discord</Text>
                </XStack>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                variant="outline" 
                size="$5"
                borderRadius="$10"
                borderColor="$borderColor"
              >
                <XStack gap="$2" alignItems="center">
                  <Download size={20} />
                  <Text>Self-Host</Text>
                </XStack>
              </Button>
            </motion.div>
          </XStack>
        </YStack>
      </YStack>
    </Theme>
  )
}
