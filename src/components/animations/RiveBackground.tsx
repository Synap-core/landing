'use client'

import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas'
import { useEffect } from 'react'

export function RiveBackground() {
  const { rive, RiveComponent } = useRive({
    src: '/animations/hero-bg.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  })

  // Optional: Control animation based on mouse movement
  useEffect(() => {
    if (!rive) return

    const handleMouseMove = (e: MouseEvent) => {
      // This will work if the Rive file has mouse inputs
      // If not, it won't break anything
      try {
        const inputs = rive.stateMachineInputs('State Machine 1')
        const mouseX = inputs?.find((i) => i.name === 'mouseX')
        const mouseY = inputs?.find((i) => i.name === 'mouseY')
        
        if (mouseX) mouseX.value = (e.clientX / window.innerWidth) * 100
        if (mouseY) mouseY.value = (e.clientY / window.innerHeight) * 100
      } catch (e) {
        // Silently fail if inputs don't exist
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [rive])

  return (
    <div className="absolute inset-0 w-full h-full">
      <RiveComponent />
    </div>
  )
}
