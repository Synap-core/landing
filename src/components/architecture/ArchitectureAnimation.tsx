'use client'

import { useState, useEffect, useMemo } from 'react'
import { YStack } from 'tamagui'
import { Database, Cpu, Cloud, HardDrive, Zap, Server, Bot, Globe } from 'lucide-react'
import { ComponentNode } from './ComponentNode'
import { Controls } from './Controls'
import { ComponentPosition } from './types'

// Component positions (percentage-based for responsiveness)
const POSITIONS: Record<string, ComponentPosition> = {
  ui: { x: 20, y: 15 },
  agent: { x: 70, y: 15 },
  api: { x: 45, y: 30 },
  eventStore: { x: 45, y: 50 },
  inngest: { x: 65, y: 50 },
  workers: { x: 45, y: 70 },
  database: { x: 25, y: 85 },
  storage: { x: 65, y: 85 },
}

// Animation sequence timing (in seconds)
const ANIMATION_STEPS = [
  { time: 0, activeNodes: ['ui'], description: 'User types in UI' },
  { time: 0.5, activeNodes: ['ui', 'api'], description: 'API call' },
  { time: 1, activeNodes: ['api'], description: 'Event created' },
  { time: 1.5, activeNodes: ['api', 'eventStore'], description: 'Event stored' },
  { time: 2, activeNodes: ['eventStore', 'inngest'], description: 'Inngest triggered' },
  { time: 2.5, activeNodes: ['inngest', 'workers'], description: 'Worker dispatched' },
  { time: 3, activeNodes: ['workers'], description: 'Processing' },
  { time: 3.5, activeNodes: ['workers', 'storage'], description: 'Upload to storage' },
  { time: 4, activeNodes: ['workers', 'database'], description: 'Save to database' },
  { time: 4.5, activeNodes: ['eventStore'], description: 'Completion event' },
  { time: 5, activeNodes: ['ui'], description: 'Real-time notification' },
]

const TOTAL_DURATION = 6000 // 6 seconds (5s animation + 1s pause)

export function ArchitectureAnimation() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [currentFlow, setCurrentFlow] = useState<'simple' | 'complex'>('simple')
  const [activeNodes, setActiveNodes] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)

  // Animation loop
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 100) % TOTAL_DURATION
        const currentTime = nextStep / 1000

        // Find which nodes should be active at this time
        const activeStep = ANIMATION_STEPS.reduce((acc, step, index) => {
          if (currentTime >= step.time) {
            return index
          }
          return acc
        }, 0)

        setActiveNodes(ANIMATION_STEPS[activeStep]?.activeNodes || [])
        return nextStep
      })
    }, 100)

    return () => clearInterval(interval)
  }, [isPlaying])

  const handleReset = () => {
    setCurrentStep(0)
    setActiveNodes([])
    setIsPlaying(true)
  }

  return (
    <YStack gap="$6" alignItems="center" width="100%">
      {/* Animation Canvas */}
      <YStack
        position="relative"
        width="100%"
        height={600}
        backgroundColor="rgba(0,0,0,0.3)"
        borderRadius="$8"
        borderWidth={1}
        borderColor="rgba(255,255,255,0.1)"
        overflow="hidden"
        $sm={{ height: 500 }}
      >
        {/* Component Nodes */}
        <ComponentNode
          id="ui"
          type="client"
          label="UI/Client"
          icon={<Globe size={24} />}
          position={POSITIONS.ui}
          isActive={activeNodes.includes('ui')}
        />

        <ComponentNode
          id="agent"
          type="automation"
          label="Agent"
          icon={<Bot size={24} />}
          position={POSITIONS.agent}
          isActive={activeNodes.includes('agent')}
        />

        <ComponentNode
          id="api"
          type="server"
          label="tRPC API"
          icon={<Server size={24} />}
          position={POSITIONS.api}
          isActive={activeNodes.includes('api')}
        />

        <ComponentNode
          id="eventStore"
          type="database"
          label="Event Store"
          icon={<Database size={24} />}
          position={POSITIONS.eventStore}
          isActive={activeNodes.includes('eventStore')}
        />

        <ComponentNode
          id="inngest"
          type="service"
          label="Inngest"
          icon={<Zap size={24} />}
          position={POSITIONS.inngest}
          isActive={activeNodes.includes('inngest')}
        />

        <ComponentNode
          id="workers"
          type="service"
          label="Workers"
          icon={<Cpu size={24} />}
          position={POSITIONS.workers}
          isActive={activeNodes.includes('workers')}
        />

        <ComponentNode
          id="database"
          type="database"
          label="PostgreSQL"
          icon={<Database size={24} />}
          position={POSITIONS.database}
          isActive={activeNodes.includes('database')}
        />

        <ComponentNode
          id="storage"
          type="storage"
          label="R2/MinIO"
          icon={<HardDrive size={24} />}
          position={POSITIONS.storage}
          isActive={activeNodes.includes('storage')}
        />

        {/* Connection lines will be added in next iteration */}
      </YStack>

      {/* Controls */}
      <Controls
        isPlaying={isPlaying}
        onPlayPause={() => setIsPlaying(!isPlaying)}
        onReset={handleReset}
        currentFlow={currentFlow}
        onFlowChange={setCurrentFlow}
      />
    </YStack>
  )
}
