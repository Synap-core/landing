'use client'

import { YStack, H2, Paragraph, Text, Theme } from 'tamagui'
import { motion } from 'framer-motion'

const principles = [
  {
    statement: 'This is infrastructure for digital sovereignty',
    elaboration: 'Not a product. Not a platform. A foundation that developers build on and users own.'
  },
  {
    statement: 'Built by developers, for users, owned by the community',
    elaboration: 'Open source from day one. The protocol will outlive any company, including ours.'
  },
  {
    statement: 'Interoperability without compromise',
    elaboration: 'Your data works everywhere. Apps compete on experience, not on lock-in.'
  },
  {
    statement: 'The right to fork is sacred',
    elaboration: 'If we fail you, take the code. Build it better. This is how we stay honest.'
  }
]

export function Philosophy() {
  return (
    <Theme name="dark">
      <YStack 
        paddingVertical="$20" 
        minHeight="80vh" 
        justifyContent="center" 
        alignItems="center"
        backgroundColor="$background"
      >
        <YStack maxWidth={900} width="100%" padding="$4" gap="$16">
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
                The Movement
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
                Bigger Than Software
              </H2>
            </motion.div>
          </YStack>

          {principles.map((principle, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              <YStack gap="$4" alignItems="center">
                <H2 
                  textAlign="center" 
                  fontSize={32}
                  lineHeight={44}
                  $gtSm={{ fontSize: 40, lineHeight: 52 }}
                  color="$color"
                  fontWeight="300"
                  letterSpacing={-1}
                  maxWidth={800}
                >
                  {principle.statement}
                </H2>
                <Paragraph 
                  textAlign="center" 
                  fontSize={18} 
                  lineHeight={30}
                  color="$color" 
                  opacity={0.6}
                  maxWidth={700}
                >
                  {principle.elaboration}
                </Paragraph>
              </YStack>
            </motion.div>
          ))}

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <YStack 
              marginTop="$8"
              padding="$8" 
              backgroundColor="rgba(16, 185, 129, 0.1)"
              borderColor="$primary"
              borderWidth={1}
              borderRadius="$10"
              alignItems="center"
              gap="$4"
            >
              <H2 fontSize={28} color="$primary" fontWeight="500" textAlign="center">
                The sovereign web starts here
              </H2>
              <Paragraph textAlign="center" fontSize={18} color="$color" opacity={0.8} maxWidth={600} lineHeight={28}>
                Deploy your first data pod. Build an app. Join the community. The infrastructure is ready. The timing is perfect.
              </Paragraph>
              <Text 
                fontFamily="$mono" 
                fontSize={13} 
                color="$primary" 
                opacity={0.7}
                marginTop="$2"
              >
                This is not just software. This is a movement.
              </Text>
            </YStack>
          </motion.div>
        </YStack>
      </YStack>
    </Theme>
  )
}
