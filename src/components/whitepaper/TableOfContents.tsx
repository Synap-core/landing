'use client'

import { useEffect, useState, useMemo } from 'react'
import { YStack, XStack, Text } from 'tamagui'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface TOCItem {
  id: string
  title: string
  level: number
  children?: TOCItem[]
}

interface TableOfContentsProps {
  content: string
}

export function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
  const [scrollProgress, setScrollProgress] = useState(0)

  // Parse markdown headings into TOC structure
  const tocItems = useMemo(() => {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm
    const items: TOCItem[] = []
    const stack: TOCItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const title = match[2]
        .replace(/\[ICON:\w+\]/g, '') // Remove icon markers
        .replace(/\*\*/g, '') // Remove bold
        .trim()
      
      const id = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')

      const item: TOCItem = { id, title, level }

      // Build hierarchy
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop()
      }

      if (stack.length === 0) {
        items.push(item)
      } else {
        const parent = stack[stack.length - 1]
        if (!parent.children) parent.children = []
        parent.children.push(item)
      }

      stack.push(item)
    }

    return items
  }, [content])

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100
      setScrollProgress(Math.min(progress, 100))

      // Find active section
      const headings = document.querySelectorAll('h1, h2, h3')
      let currentActive = ''

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        if (rect.top <= 150) {
          currentActive = heading.id
        }
      })

      setActiveId(currentActive)

      // Auto-expand parent section of active heading
      const expandSection = (items: TOCItem[]): boolean => {
        for (const item of items) {
          if (item.id === currentActive) return true
          if (item.children && expandSection(item.children)) {
            setExpandedSections(prev => new Set(prev).add(item.id))
            return true
          }
        }
        return false
      }
      expandSection(tocItems)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [tocItems])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for fixed nav
      const top = element.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const toggleSection = (id: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const renderTOCItem = (item: TOCItem, depth = 0) => {
    const isActive = activeId === item.id
    const isExpanded = expandedSections.has(item.id)
    const hasChildren = item.children && item.children.length > 0

    return (
      <YStack key={item.id}>
        <XStack
          paddingLeft={depth * 16 + 12}
          paddingVertical="$2"
          paddingRight="$3"
          alignItems="center"
          gap="$2"
          cursor="pointer"
          hoverStyle={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
          backgroundColor={isActive ? 'rgba(16, 185, 129, 0.15)' : 'transparent'}
          borderRadius="$2"
          onPress={() => {
            scrollToSection(item.id)
            if (hasChildren) toggleSection(item.id)
          }}
        >
          {hasChildren && (
            <YStack width={16} height={16} alignItems="center" justifyContent="center">
              {isExpanded ? (
                <ChevronDown size={14} color={isActive ? '#10B981' : 'rgba(255,255,255,0.5)'} />
              ) : (
                <ChevronRight size={14} color={isActive ? '#10B981' : 'rgba(255,255,255,0.5)'} />
              )}
            </YStack>
          )}
          
          <YStack
            width={3}
            height={20}
            backgroundColor={isActive ? '#10B981' : 'transparent'}
            borderRadius="$2"
          />
          
          <Text
            fontSize={13}
            color={isActive ? '#10B981' : 'rgba(255,255,255,0.7)'}
            fontWeight={isActive ? '600' : '400'}
            hoverStyle={{ color: '#10B981' }}
            flex={1}
          >
            {item.title}
          </Text>
        </XStack>

        <AnimatePresence>
          {hasChildren && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ overflow: 'hidden' }}
            >
              {item.children!.map(child => renderTOCItem(child, depth + 1))}
            </motion.div>
          )}
        </AnimatePresence>
      </YStack>
    )
  }

  return (
    <YStack
      width={280}
      height="100vh"
      position="sticky"
      top={0}
      paddingTop={100}
      paddingBottom="$6"
      borderRightWidth={1}
      borderRightColor="rgba(255,255,255,0.1)"
      backgroundColor="rgba(5, 5, 5, 0.98)"
      style={{
        backdropFilter: 'blur(10px)',
      }}
      display="none"
      $gtSm={{ display: 'flex' }}
    >
      <YStack paddingHorizontal="$4" gap="$3" flex={1} overflow="auto">
        <Text
          fontSize={11}
          color="rgba(255,255,255,0.5)"
          textTransform="uppercase"
          letterSpacing={1.5}
          marginBottom="$2"
          paddingLeft="$3"
        >
          Contents
        </Text>

        {tocItems.map(item => renderTOCItem(item))}
      </YStack>

      {/* Progress Indicator */}
      <YStack paddingHorizontal="$4" paddingTop="$4" borderTopWidth={1} borderTopColor="rgba(255,255,255,0.1)">
        <YStack gap="$2">
          <XStack justifyContent="space-between" alignItems="center">
            <Text fontSize={11} color="rgba(255,255,255,0.5)">
              Progress
            </Text>
            <Text fontSize={11} color="#10B981" fontWeight="600">
              {Math.round(scrollProgress)}%
            </Text>
          </XStack>
          <YStack height={4} backgroundColor="rgba(255,255,255,0.1)" borderRadius="$2" overflow="hidden">
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #10B981, #059669)',
                width: `${scrollProgress}%`,
              }}
              initial={{ width: 0 }}
              animate={{ width: `${scrollProgress}%` }}
              transition={{ duration: 0.1 }}
            />
          </YStack>
        </YStack>
      </YStack>
    </YStack>
  )
}
