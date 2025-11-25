// Architecture Animation Types

export type ComponentType = 
  | 'client'      // UI/Client App
  | 'automation'  // Agent/Automation
  | 'server'      // tRPC API
  | 'database'    // Event Store, PostgreSQL
  | 'service'     // Inngest, Workers
  | 'storage'     // R2/MinIO
  | 'external'    // External Service

export type FlowType = 'simple' | 'complex'

export interface ComponentPosition {
  x: number
  y: number
}

export interface ComponentNodeProps {
  id: string
  type: ComponentType
  label: string
  icon: React.ReactNode
  position: ComponentPosition
  isActive?: boolean
  isHighlighted?: boolean
  onClick?: () => void
}

export interface ConnectionLineProps {
  from: string
  to: string
  isActive?: boolean
  color?: string
  fromPosition?: ComponentPosition
  toPosition?: ComponentPosition
}

export interface ParticleFlowProps {
  path: string
  color: 'emerald' | 'amber' | 'blue'
  isActive?: boolean
  delay?: number
}

export interface AnimationState {
  currentStep: number
  activeConnections: string[]
  activeNodes: string[]
  particles: ParticleFlowProps[]
}
