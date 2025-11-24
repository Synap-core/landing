'use client'

import { motion } from 'framer-motion'
import { YStack, XStack, H2, H3, Paragraph, Text, Button } from 'tamagui'
import { FileText, Briefcase, Code2, Bot, Search, Mail, Clock, Brain, CheckSquare } from 'lucide-react'
import Link from 'next/link'

const categories = [
  {
    icon: FileText,
    title: 'Personal Productivity',
    items: ['Notes & Documents', 'Tasks & To-dos', 'Calendar & Events', 'File Management']
  },
  {
    icon: Briefcase,
    title: 'Business Tools',
    items: ['CRM & Contacts', 'Invoicing & Billing', 'Time Tracking', 'Project Management']
  },
  {
    icon: Code2,
    title: 'Developer Tools',
    items: ['API Access', 'Custom Plugins', 'Automation Scripts', 'Integrations']
  }
]

const plugins = [
  { icon: Bot, name: 'AI Assistant', color: '#10B981' },
  { icon: Search, name: 'Vector Search', color: '#3B82F6' },
  { icon: Mail, name: 'Email Integration', color: '#F59E0B' },
  { icon: Clock, name: 'Time Tracking', color: '#8B5CF6' },
  { icon: Brain, name: 'Mind Mapping', color: '#EC4899' },
  { icon: CheckSquare, name: 'Habit Tracker', color: '#14B8A6' }
]

export function Ecosystem() {
  return (
    <YStack
      padding="$12"
      paddingVertical="$16"
      backgroundColor="$background"
      $sm={{ padding: '$6', paddingVertical: '$12' }}
    >
      <YStack maxWidth={1200} marginHorizontal="auto" width="100%" gap="$12">
        
        {/* Header */}
        <YStack gap="$4" alignItems="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Text
              fontFamily="$mono"
              fontSize={12}
              color="$primary"
              letterSpacing={2}
              textTransform="uppercase"
            >
              Ecosystem
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <H2
              textAlign="center"
              fontSize={56}
              fontFamily="$heading"
              color="$color"
              fontWeight="300"
              letterSpacing={-2}
              lineHeight={64}
              $sm={{ fontSize: 36, lineHeight: 44 }}
            >
              What You Can Do With Synap Core
            </H2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Paragraph
              textAlign="center"
              fontSize={18}
              color="rgba(255,255,255,0.7)"
              maxWidth={600}
            >
              Build apps, add capabilities, and extend your pod—all while keeping full ownership of your data.
            </Paragraph>
          </motion.div>
        </YStack>

        {/* Categories Grid */}
        <XStack
          gap="$6"
          flexWrap="wrap"
          justifyContent="center"
          $sm={{ flexDirection: 'column' }}
        >
          {categories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              style={{ flex: 1, minWidth: 280, maxWidth: 360 }}
            >
              <YStack
                padding="$6"
                backgroundColor="rgba(255,255,255,0.02)"
                borderRadius="$6"
                borderWidth={1}
                borderColor="rgba(255,255,255,0.1)"
                gap="$4"
                height="100%"
                hoverStyle={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(16, 185, 129, 0.3)'
                }}
              >
                <YStack
                  padding="$3"
                  backgroundColor="rgba(16, 185, 129, 0.1)"
                  borderRadius="$4"
                  alignSelf="flex-start"
                >
                  <category.icon size={28} color="#10B981" />
                </YStack>

                <H3 fontSize={22} fontWeight="600" color="#fff">
                  {category.title}
                </H3>

                <YStack gap="$2">
                  {category.items.map((item) => (
                    <XStack key={item} gap="$2" alignItems="center">
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          backgroundColor: '#10B981'
                        }}
                      />
                      <Text fontSize={15} color="rgba(255,255,255,0.7)">
                        {item}
                      </Text>
                    </XStack>
                  ))}
                </YStack>
              </YStack>
            </motion.div>
          ))}
        </XStack>

        {/* Plugins Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <YStack gap="$6">
            <YStack gap="$2" alignItems="center">
              <H3 fontSize={32} fontWeight="500" color="#fff" textAlign="center">
                Extend with Plugins
              </H3>
              <Paragraph fontSize={16} color="rgba(255,255,255,0.6)" textAlign="center">
                Add capabilities on demand—all sandboxed and secure
              </Paragraph>
            </YStack>

            <XStack
              gap="$4"
              flexWrap="wrap"
              justifyContent="center"
            >
              {plugins.map((plugin, i) => (
                <motion.div
                  key={plugin.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                  whileHover={{ scale: 1.05 }}
                >
                  <YStack
                    padding="$4"
                    paddingHorizontal="$6"
                    backgroundColor="rgba(255,255,255,0.03)"
                    borderRadius="$10"
                    borderWidth={1}
                    borderColor="rgba(255,255,255,0.08)"
                    gap="$3"
                    alignItems="center"
                    minWidth={160}
                    cursor="pointer"
                    hoverStyle={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      borderColor: plugin.color
                    }}
                  >
                    <plugin.icon size={32} color={plugin.color} />
                    <Text fontSize={14} fontWeight="500" color="#fff">
                      {plugin.name}
                    </Text>
                  </YStack>
                </motion.div>
              ))}
            </XStack>
          </YStack>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <XStack gap="$4" justifyContent="center" flexWrap="wrap">
            <Link href="/developers" style={{ textDecoration: 'none' }}>
              <Button
                size="$5"
                backgroundColor="$primary"
                color="#000"
                borderRadius="$10"
                fontWeight="600"
                hoverStyle={{ backgroundColor: '#0ea373', scale: 1.02 }}
                pressStyle={{ scale: 0.98 }}
              >
                Build Your Own →
              </Button>
            </Link>

            <Link href="/developers#plugins" style={{ textDecoration: 'none' }}>
              <Button
                size="$5"
                backgroundColor="transparent"
                borderWidth={2}
                borderColor="rgba(255,255,255,0.2)"
                color="#fff"
                borderRadius="$10"
                fontWeight="600"
                hoverStyle={{
                  borderColor: '$primary',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)'
                }}
                pressStyle={{ scale: 0.98 }}
              >
                Learn About Plugins
              </Button>
            </Link>
          </XStack>
        </motion.div>

      </YStack>
    </YStack>
  )
}
