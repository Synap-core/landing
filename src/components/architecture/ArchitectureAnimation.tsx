'use client'

import { useRef, useEffect, useState } from 'react'
import { YStack, XStack } from 'tamagui'
import { Database, Cpu, HardDrive, Bot, Globe } from 'lucide-react'
import { ComponentNode } from './ComponentNode'
import { AnimatedArrow } from './AnimatedArrow'
import { motion } from 'framer-motion'

// Connections
const CONNECTIONS = [
  { from: 'ui', to: 'eventStore', color: '#10B981' },
  { from: 'agent', to: 'eventStore', color: '#F59E0B' },
  { from: 'eventStore', to: 'workers', color: '#10B981' },
  { from: 'workers', to: 'database', color: '#10B981' },
  { from: 'workers', to: 'storage', color: '#10B981' },
]

// Flowing particle component
function FlowingParticle({
  fromX,
  fromY,
  toX,
  toY,
  color,
  delay,
}: {
  fromX: number
  fromY: number
  toX: number
  toY: number
  color: string
  delay: number
}) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 12px ${color}`,
        left: 0,
        top: 0,
      }}
      initial={{ x: fromX - 4, y: fromY - 4, opacity: 0 }}
      animate={{
        x: toX - 4,
        y: toY - 4,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

// Desktop Grid View
function DesktopGridView() {
  const uiRef = useRef<HTMLDivElement>(null)
  const agentRef = useRef<HTMLDivElement>(null)
  const eventStoreRef = useRef<HTMLDivElement>(null)
  const workersRef = useRef<HTMLDivElement>(null)
  const databaseRef = useRef<HTMLDivElement>(null)
  const storageRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({})

  useEffect(() => {
    const calculatePositions = () => {
      const refs = {
        ui: uiRef,
        agent: agentRef,
        eventStore: eventStoreRef,
        workers: workersRef,
        database: databaseRef,
        storage: storageRef,
      }

      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const newPositions: Record<string, { x: number; y: number }> = {}

      Object.entries(refs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          newPositions[key] = {
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top,
          }
        }
      })

      setNodePositions(newPositions)
    }

    // Initial calculation with longer delay to ensure grid layout is complete
    const timeout = setTimeout(calculatePositions, 200)
    
    // Recalculate on resize
    window.addEventListener('resize', calculatePositions)
    
    // Observer for layout changes
    const container = containerRef.current
    let observer: MutationObserver | null = null
    
    if (container) {
      observer = new MutationObserver(() => {
        calculatePositions()
      })
      observer.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
      })
    }

    return () => {
      window.removeEventListener('resize', calculatePositions)
      clearTimeout(timeout)
      observer?.disconnect()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr',
        gridTemplateRows: 'auto auto auto auto',  // 4 rows now
        gap: '32px 48px',
        padding: '32px',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.1)',
        minHeight: 480,
      }}
    >
      {/* SVG Connections - REMOVED for cleaner look, particles only */}

      {/* Particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 6 }}>
        {CONNECTIONS.map(({ from, to, color }) => {
          const fromPos = nodePositions[from]
          const toPos = nodePositions[to]
          if (!fromPos || !toPos) return null
          return (
            <div key={`particles-${from}-${to}`}>
              {[0, 1, 2].map((i) => (
                <FlowingParticle
                  key={i}
                  fromX={fromPos.x}
                  fromY={fromPos.y}
                  toX={toPos.x}
                  toY={toPos.y}
                  color={color}
                  delay={i}
                />
              ))}
            </div>
          )
        })}
      </div>

      {/* Input Group Outline - Column 1, Rows 1-4 */}
      <div
        style={{
          gridColumn: '1',
          gridRow: '1 / 5',
          border: '2px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '12px',
          padding: '16px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          zIndex: 1,
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '16px',
          padding: '4px 12px',
          background: 'rgba(0,0,0,0.9)',
          color: '#10B981',
          fontSize: '12px',
          fontWeight: '600',
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>
          Inputs
        </div>
        
        {/* UI */}
        <div style={{ marginTop: '24px' }}>
          <ComponentNode ref={uiRef} id="ui" type="client" label="UI/Client" icon={<Globe size={20} />} />
        </div>
        
        {/* Agent */}
        <div style={{ marginTop: 'auto' }}>
          <ComponentNode ref={agentRef} id="agent" type="automation" label="Agent" icon={<Bot size={20} />} />
        </div>
      </div>

      {/* Row 1, Column 2 - Empty */}
      <div style={{ gridColumn: '2', gridRow: '1' }} />

      {/* Data Storage Group Outline - Column 3, Rows 1-4 */}
      <div
        style={{
          gridColumn: '3',
          gridRow: '1 / 5',
          border: '2px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '12px',
          padding: '16px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          zIndex: 1,
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-12px',
          left: '16px',
          padding: '4px 12px',
          background: 'rgba(0,0,0,0.9)',
          color: '#10B981',
          fontSize: '12px',
          fontWeight: '600',
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>
          Data Storage
        </div>
        
        {/* PostgreSQL */}
        <div style={{ marginTop: '24px' }}>
          <ComponentNode ref={databaseRef} id="database" type="database" label="PostgreSQL" icon={<Database size={20} />} />
        </div>
        
        {/* R2/MinIO */}
        <div style={{ marginTop: 'auto' }}>
          <ComponentNode ref={storageRef} id="storage" type="storage" label="R2/MinIO" icon={<HardDrive size={20} />} />
        </div>
      </div>

      {/* Row 2 - Event Store (Center) */}
      <div style={{ gridColumn: '1', gridRow: '2' }} /> {/* Empty */}
      <div style={{ gridColumn: '2', gridRow: '2', justifySelf: 'center', zIndex: 2 }}>
        <ComponentNode ref={eventStoreRef} id="eventStore" type="database" label="Event Store" icon={<Database size={28} />} size="large" />
      </div>
      <div style={{ gridColumn: '3', gridRow: '2' }} /> {/* Empty */}

      {/* Row 3 - Workers (Center) */}
      <div style={{ gridColumn: '1', gridRow: '3' }} /> {/* Empty */}
      <div style={{ gridColumn: '2', gridRow: '3', justifySelf: 'center', zIndex: 2 }}>
        <ComponentNode ref={workersRef} id="workers" type="service" label="Workers" icon={<Cpu size={20} />} />
      </div>
      <div style={{ gridColumn: '3', gridRow: '3' }} /> {/* Empty */}

      {/* Row 4 - Handled by group outlines */}
      <div style={{ gridColumn: '2', gridRow: '4' }} /> {/* Empty */}
    </div>
  )
}

// Mobile Flow View
function MobileFlowView() {
  return (
    <YStack
      gap="$4"
      padding="$6"
      backgroundColor="rgba(0,0,0,0.3)"
      borderRadius="$8"
      borderWidth={1}
      borderColor="rgba(255,255,255,0.1)"
    >
      {/* Inputs */}
      <XStack gap="$4" justifyContent="space-around">
        <ComponentNode id="ui" type="client" label="UI/Client" icon={<Globe size={20} />} />
        <ComponentNode id="agent" type="automation" label="Agent" icon={<Bot size={20} />} />
      </XStack>

      <AnimatedArrow color="#10B981" />

      {/* Event Store */}
      <XStack justifyContent="center">
        <ComponentNode id="eventStore" type="database" label="Event Store" icon={<Database size={24} />} size="large" />
      </XStack>

      <AnimatedArrow color="#10B981" />

      {/* Workers */}
      <XStack justifyContent="center">
        <ComponentNode id="workers" type="service" label="Workers" icon={<Cpu size={20} />} />
      </XStack>

      <AnimatedArrow color="#10B981" split />

      {/* Outputs */}
      <XStack gap="$4" justifyContent="space-around">
        <ComponentNode id="database" type="database" label="PostgreSQL" icon={<Database size={20} />} />
        <ComponentNode id="storage" type="storage" label="R2/MinIO" icon={<HardDrive size={20} />} />
      </XStack>
    </YStack>
  )
}

export function ArchitectureAnimation() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkSize()
    window.addEventListener('resize', checkSize)
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  return (
    <YStack gap="$6" alignItems="center" width="100%">
      {isMobile ? <MobileFlowView /> : <DesktopGridView />}
    </YStack>
  )
}
