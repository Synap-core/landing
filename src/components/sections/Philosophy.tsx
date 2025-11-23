'use client'

import { YStack, H2, Paragraph, Theme } from 'tamagui'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'

export function Philosophy() {
  return (
    <Theme name="dark">
      <YStack 
        paddingVertical="$20" 
        minHeight="80vh" 
        justifyContent="center" 
        alignItems="center"
        backgroundColor="$background"
        overflow="hidden"
      >
        <YStack 
            maxWidth={900} 
            width="100%" 
            padding="$4" 
            alignItems="center" 
            gap="$12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
              <H2 
                textAlign="center" 
                fontSize={14} 
                fontFamily="$mono"
                color="$primary"
                letterSpacing={2}
                textTransform="uppercase"
                marginBottom="$4"
              >
                Our Philosophy
              </H2>
          </motion.div>

          <YStack gap="$10">
            {[
                "Intelligence is a fundamental human right, not a subscription service.",
                "Your data is an extension of your mind. It must be sovereign.",
                "Open source is the only path to trust in the age of AI."
            ].map((text, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                >
                    <Paragraph 
                        fontSize={32} 
                        lineHeight={48} 
                        textAlign="center"
                        color="$color"
                        fontFamily="$heading"
                        fontWeight="300"
                        letterSpacing={-0.5}
                        $gtSm={{ fontSize: 48, lineHeight: 64 }}
                    >
                        {text}
                    </Paragraph>
                </motion.div>
            ))}
          </YStack>

          <motion.div
            style={{ marginTop: 48 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
          >
              <Button 
                variant="outline" 
                size="$5" 
                borderRadius="$10"
                borderColor="$borderColor"
              >
                Read the Manifesto
              </Button>
          </motion.div>
        </YStack>
      </YStack>
    </Theme>
  )
}
