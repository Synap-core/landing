'use client'

import { useEffect, useRef } from 'react'

export function CSSGradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let frame = 0
    let animationId: number

    const animate = () => {
      if (!containerRef.current) return
      
      frame += 0.005
      const scale = 1 + Math.sin(frame) * 0.1
      const opacity = 0.3 + Math.sin(frame) * 0.1

      containerRef.current.style.transform = `scale(${scale})`
      containerRef.current.style.opacity = `${opacity}`

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: 0 }}>
      <div 
        ref={containerRef}
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 40%)
          `,
          filter: 'blur(80px)',
          opacity: 0.3,
          willChange: 'transform, opacity'
        }}
      />
    </div>
  )
}

