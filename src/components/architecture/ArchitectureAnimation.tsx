'use client'

import { useState, useEffect, useRef } from 'react'
import { YStack } from 'tamagui'
import { Database, Cpu, HardDrive, Bot, Globe } from 'lucide-react'
import { ComponentNode } from './ComponentNode'
import { ComponentPosition } from './types'
import { motion } from 'framer-motion'

// DESKTOP LAYOUT: Left to Right
const DESKTOP_POSITIONS: Record<string, ComponentPosition> = {
  // LEFT: Inputs (Symmetric spacing)
  ui: { x: 15, y: 30 },
  agent: { x: 15, y: 70 },
  
  // CENTER: Event Store (Perfect Center)
  eventStore: { x: 50, y: 50 },
  
  // CENTER-RIGHT: Processing
  workers: { x: 70, y: 50 },
  
  // RIGHT: Storage Layer (Symmetric spacing)
  database: { x: 85, y: 30 },
  storage: { x: 85, y: 70 },
}

// MOBILE LAYOUT: Vertical Flow
const MOBILE_POSITIONS: Record<string, ComponentPosition> = {
  // TOP: Inputs (Side by side)
  ui: { x: 25, y: 15 },
  agent: { x: 75, y: 15 },
  
  // CENTER-TOP: Event Store
  eventStore: { x: 50, y: 45 },
  
  // CENTER-BOTTOM: Processing
  workers: { x: 50, y: 70 },
  
  // BOTTOM: Storage (Side by side)
  database: { x: 25, y: 90 },
  storage: { x: 75, y: 90 },
}

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

export function ArchitectureAnimation() {
  // Refs for each node
  const uiRef = useRef<HTMLDivElement>(null)
  const agentRef = useRef<HTMLDivElement>(null)
  const eventStoreRef = useRef<HTMLDivElement>(null)
  const workersRef = useRef<HTMLDivElement>(null)
  const databaseRef = useRef<HTMLDivElement>(null)
  const storageRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // State
  const [nodePositions, setNodePositions] = useState<Record<string, { x: number; y: number }>>({})
  const [isMobile, setIsMobile] = useState(false)

  // Determine active positions based on layout
  const activePositions = isMobile ? MOBILE_POSITIONS : DESKTOP_POSITIONS

  // Calculate positions after mount and on resize
  useEffect(() => {
    const calculatePositions = () => {
      const container = containerRef.current
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      
      // Update mobile state based on container width
      // Using 768px as breakpoint
      const mobile = containerRect.width < 768
      setIsMobile(mobile)

      const refs = {
        ui: uiRef,
        agent: agentRef,
        eventStore: eventStoreRef,
        workers: workersRef,
        database: databaseRef,
        storage: storageRef,
      }

      const newPositions: Record<string, { x: number; y: number }> = {}

      Object.entries(refs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect()
          // Calculate center relative to container
          newPositions[key] = {
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top + rect.height / 2 - containerRect.top,
          }
        }
      })

      setNodePositions(newPositions)
    }

    // Calculate on mount
    calculatePositions()

    // Recalculate on resize
    window.addEventListener('resize', calculatePositions)
    
    // Small delay to ensure nodes are rendered and settled
    const timeout = setTimeout(calculatePositions, 100)

    return () => {
      window.removeEventListener('resize', calculatePositions)
      clearTimeout(timeout)
    }
  }, [isMobile]) // Re-run when layout changes

  return (
    <YStack gap="$6" alignItems="center" width="100%">
      {/* Animation Canvas */}
      <YStack
        ref={containerRef}
        position="relative"
        width="100%"
        maxWidth={1100}
        height={500}
        backgroundColor="rgba(0,0,0,0.3)"
        borderRadius="$8"
        borderWidth={1}
        borderColor="rgba(255,255,255,0.1)"
        overflow="hidden"
        $sm={{ height: 600, maxWidth: '100%' }} // Taller on mobile for vertical stack
      >
        {/* SVG Layer for connection lines */}
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            overflow: 'visible',
          }}
        >
          <defs>
            {CONNECTIONS.map(({ from, to, color }) => (
              <linearGradient
                key={`gradient-${from}-${to}`}
                id={`gradient-${from}-${to}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={color} stopOpacity={0.7} />
                <stop offset="100%" stopColor={color} stopOpacity={0.3} />
              </linearGradient>
            ))}
          </defs>

          {/* Connection Lines - NOW USING ACTUAL NODE POSITIONS */}
          {CONNECTIONS.map(({ from, to, color }) => {
            const fromPos = nodePositions[from]
            const toPos = nodePositions[to]

            if (!fromPos || !toPos) return null

            return (
              <line
                key={`line-${from}-${to}`}
                x1={fromPos.x}
                y1={fromPos.y}
                x2={toPos.x}
                y2={toPos.y}
                stroke={`url(#gradient-${from}-${to})`}
                strokeWidth={2}
                opacity={0.6}
              />
            )
          })}
        </svg>

        {/* Flowing Particles - NOW USING ACTUAL NODE POSITIONS */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {CONNECTIONS.map(({ from, to, color }) => {
            const fromPos = nodePositions[from]
            const toPos = nodePositions[to]

            if (!fromPos || !toPos) return null

            return (
              <div key={`particles-${from}-${to}`}>
                <FlowingParticle
                  fromX={fromPos.x}
                  fromY={fromPos.y}
                  toX={toPos.x}
                  toY={toPos.y}
                  color={color}
                  delay={0}
                />
                <FlowingParticle
                  fromX={fromPos.x}
                  fromY={fromPos.y}
                  toX={toPos.x}
                  toY={toPos.y}
                  color={color}
                  delay={1}
                />
                <FlowingParticle
                  fromX={fromPos.x}
                  fromY={fromPos.y}
                  toX={toPos.x}
                  toY={toPos.y}
                  color={color}
                  delay={2}
                />
              </div>
            )
          })}
        </div>

        {/* Component Nodes - WITH REFS & DYNAMIC POSITIONS */}
        <ComponentNode
          ref={uiRef}
          id="ui"
          type="client"
          label="UI/Client"
          icon={<Globe size={20} />}
          position={activePositions.ui}
        />

        <ComponentNode
          ref={agentRef}
          id="agent"
          type="automation"
          label="Agent"
          icon={<Bot size={20} />}
          position={activePositions.agent}
        />

        {/* Event Store - LARGER */}
        <ComponentNode
          ref={eventStoreRef}
          id="eventStore"
          type="database"
          label="Event Store"
          icon={<Database size={28} />}
          position={activePositions.eventStore}
          size="large"
        />

        <ComponentNode
          ref={workersRef}
          id="workers"
          type="service"
          label="Workers"
          icon={<Cpu size={20} />}
          position={activePositions.workers}
        />

        <ComponentNode
          ref={databaseRef}
          id="database"
          type="database"
          label="PostgreSQL"
          icon={<Database size={20} />}
          position={activePositions.database}
        />

        <ComponentNode
          ref={storageRef}
          id="storage"
          type="storage"
          label="R2/MinIO"
          icon={<HardDrive size={20} />}
          position={activePositions.storage}
        />
      </YStack>
    </YStack>
  )
}
