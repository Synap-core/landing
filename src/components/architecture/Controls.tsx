'use client'

import { XStack, YStack, Text } from 'tamagui'
import { Play, Pause, RotateCcw } from 'lucide-react'
import { Button } from '../ui/Button'

interface ControlsProps {
  isPlaying: boolean
  onPlayPause: () => void
  onReset: () => void
  currentFlow: 'simple' | 'complex'
  onFlowChange: (flow: 'simple' | 'complex') => void
}

export function Controls({
  isPlaying,
  onPlayPause,
  onReset,
  currentFlow,
  onFlowChange,
}: ControlsProps) {
  return (
    <YStack gap="$4" alignItems="center" marginTop="$8">
      {/* Primary Controls */}
      <XStack gap="$3" alignItems="center">
        <Button
          size="$3"
          backgroundColor={isPlaying ? '$primary' : 'rgba(255,255,255,0.1)'}
          onPress={onPlayPause}
          icon={isPlaying ? <Pause size={16} /> : <Play size={16} />}
          aria-label={isPlaying ? 'Pause animation' : 'Play animation'}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </Button>

        <Button
          size="$3"
          backgroundColor="rgba(255,255,255,0.1)"
          onPress={onReset}
          icon={<RotateCcw size={16} />}
          aria-label="Reset animation"
        >
          Reset
        </Button>
      </XStack>

      {/* Flow Selector */}
      <XStack gap="$2" alignItems="center">
        <Text fontSize={12} color="rgba(255,255,255,0.6)" textTransform="uppercase">
          Flow:
        </Text>
        <XStack gap="$2">
          <Button
            size="$2"
            fontSize={12}
            backgroundColor={currentFlow === 'simple' ? '$primary' : 'rgba(255,255,255,0.05)'}
            borderColor={currentFlow === 'simple' ? '$primary' : 'rgba(255,255,255,0.1)'}
            onPress={() => onFlowChange('simple')}
          >
            Simple
          </Button>
          <Button
            size="$2"
            fontSize={12}
            backgroundColor={currentFlow === 'complex' ? '$primary' : 'rgba(255,255,255,0.05)'}
            borderColor={currentFlow === 'complex' ? '$primary' : 'rgba(255,255,255,0.1)'}
            onPress={() => onFlowChange('complex')}
            opacity={0.5}
            disabled
          >
            Complex (Soon)
          </Button>
        </XStack>
      </XStack>
    </YStack>
  )
}
