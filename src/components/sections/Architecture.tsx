'use client'

import { YStack, XStack, H2, H3, Paragraph, Text, Theme } from 'tamagui'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Database, Layers, Puzzle, Globe } from 'lucide-react'
import { useRef } from 'react'

// --- Components ---

function FlowLine({ delay = 0, duration = 2, vertical = false }: { delay?: number, duration?: number, vertical?: boolean }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        [vertical ? 'left' : 'top']: '50%',
        [vertical ? 'top' : 'left']: 0,
        [vertical ? 'width' : 'height']: 1,
        [vertical ? 'height' : 'width']: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
        opacity: 0.3,
        zIndex: 0
      }}
    >
      <motion.div
        animate={{
          [vertical ? 'y' : 'x']: ['-100%', '100%'],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          delay
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: vertical ? 2 : 40,
          height: vertical ? 40 : 2,
          background: '#fff',
          boxShadow: '0 0 10px rgba(255,255,255,0.5)'
        }}
      />
    </motion.div>
  )
}

function BentoCard({ children, colSpan = 1, rowSpan = 1, title, icon: Icon, delay = 0, zIndex = 0, color = '#fff' }: {
  children: React.ReactNode
  colSpan?: number
  rowSpan?: number
  title: string
  icon: any  // Accept any icon component type
  delay?: number
  zIndex?: number
  color?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        position: 'relative',
        zIndex
      }}
    >
      <YStack
        flex={1}
        height="100%"
        backgroundColor="rgba(255, 255, 255, 0.03)"
        borderColor="rgba(255, 255, 255, 0.08)"
        borderWidth={1}
        borderRadius="$6"
        overflow="hidden"
        position="relative"
        padding="$5"
        justifyContent="space-between"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 4px 24px -1px rgba(0, 0, 0, 0.2)'
        }}
        hoverStyle={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderColor: 'rgba(255, 255, 255, 0.15)'
        }}
      >
        <XStack justifyContent="space-between" alignItems="flex-start" zIndex={1}>
          <YStack padding="$2.5" backgroundColor="rgba(255, 255, 255, 0.05)" borderRadius="$4">
            <Icon size={20} color={color} />
          </YStack>
        </XStack>

        <YStack gap="$2" zIndex={1} marginTop="$4">
          <H3 fontSize={18} fontWeight="500" color="$color">{title}</H3>
          {children}
        </YStack>
      </YStack>
    </motion.div>
  )
}

export function Architecture() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Subtle Parallax
  const yBack = useTransform(scrollYProgress, [0, 1], [0, 50])
  const yMid = useTransform(scrollYProgress, [0, 1], [0, -30])
  const yFront = useTransform(scrollYProgress, [0, 1], [0, -80])
  
  return (
    <Theme name="dark">
      <YStack 
        ref={containerRef}
        paddingVertical="$24" 
        minHeight="120vh"
        justifyContent="center" 
        alignItems="center"
        backgroundColor="$background"
        overflow="hidden"
        position="relative"
      >
        {/* Background Grid - Subtle */}
        <motion.div style={{ y: yBack, position: 'absolute', inset: 0, zIndex: 0, opacity: 0.15 }}>
           <div style={{ width: '100%', height: '100%', backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </motion.div>

        <YStack maxWidth={1200} width="100%" padding="$4" gap="$12" zIndex={1} position="relative">
          
          {/* Header */}
          <motion.div style={{ y: yMid }}>
            <YStack gap="$4" alignItems="center">
              <Text  fontSize={12} color="$primary" letterSpacing={2} textTransform="uppercase">
                System Architecture
              </Text>
              <H2 textAlign="center" fontSize={48} fontFamily="$heading" color="$color" fontWeight="300" letterSpacing={-1}>
                Built for Longevity
              </H2>
              <Paragraph textAlign="center" fontSize={16} color="$color" opacity={0.6} maxWidth={600}>
                A system built on immutable facts, not mutable state.
              </Paragraph>
            </YStack>
          </motion.div>

          {/* Bento Grid - Restored Content */}
          <YStack position="relative">
            {/* Flow Lines */}
            <motion.div style={{ position: 'absolute', inset: -20, zIndex: 0, y: yBack }}>
               <div style={{ position: 'absolute', top: '40%', left: '10%', right: '10%', height: 1, background: 'rgba(255, 255, 255, 0.05)' }} />
               <FlowLine delay={0} duration={4} />
            </motion.div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gridTemplateRows: 'repeat(2, 280px)', 
              gap: 24,
              perspective: 1000 
            }}>
              
              {/* Event Store (Core) */}
              <motion.div style={{ gridColumn: 'span 2', gridRow: 'span 2', y: yFront, zIndex: 10 }}>
                <BentoCard title="Event Store" icon={Database} colSpan={2} rowSpan={2} color="#10B981">
                  <Paragraph fontSize={14} opacity={0.7} lineHeight={24}>
                    Immutable append-only log. Every action preserved forever.
                    Event sourcing pattern with complete audit trail and temporal queries.
                  </Paragraph>
                  <YStack marginTop="auto" gap="$3">
                     <XStack gap="$2" alignItems="center">
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
                        <Text fontSize={12}  opacity={0.8}>Source of Truth</Text>
                     </XStack>
                     <XStack gap="$2" alignItems="center">
                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981' }} />
                        <Text fontSize={12}  opacity={0.8}>Time Travel</Text>
                     </XStack>
                  </YStack>
                </BentoCard>
              </motion.div>

              {/* Universal API */}
              <motion.div style={{ gridColumn: 'span 1', gridRow: 'span 2', y: yMid }}>
                <BentoCard title="Universal API" icon={Globe} rowSpan={2} color="#3B82F6">
                  <Paragraph fontSize={13} opacity={0.7}>
                    GraphQL + REST. Access from any device, app, or agent.
                    Real-time subscriptions via WebSocket.
                  </Paragraph>
                </BentoCard>
              </motion.div>

              {/* Projectors (Stacked) */}
              <motion.div style={{ gridColumn: 'span 1', gridRow: 'span 1', y: yMid }}>
                <BentoCard title="Projectors" icon={Layers} delay={0.1} color="#8B5CF6">
                  <Paragraph fontSize={13} opacity={0.7}>
                    Real-time view materialization. Notes, Calendar, Tasks.
                  </Paragraph>
                </BentoCard>
              </motion.div>

              {/* Plugin System */}
              <motion.div style={{ gridColumn: 'span 1', gridRow: 'span 1', y: yBack }}>
                <BentoCard title="Plugin System" icon={Puzzle} delay={0.2} color="#F59E0B">
                  <Paragraph fontSize={13} opacity={0.7}>
                    WASM-based sandboxed plugins. Extend without breaking core.
                  </Paragraph>
                </BentoCard>
              </motion.div>

            </div>
          </YStack>

        </YStack>
      </YStack>
    </Theme>
  )
}
