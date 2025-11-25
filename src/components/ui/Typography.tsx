'use client'

import { H1, H2, H3, Paragraph, SizableText, styled } from 'tamagui'

// Page title - Main hero headline
export const PageTitle = styled(H1, {
  name: 'PageTitle',
  size: '$11',              // 64px mobile
  fontFamily: '$heading',
  fontWeight: '300',
  letterSpacing: -2,
  color: '$color',
  lineHeight: 72,
  
  $gtSm: {
    size: '$12',            // 72px desktop
    lineHeight: 80,
  },
  
  variants: {
    centered: {
      true: {
        textAlign: 'center',
      },
    },
  },
})

// Section heading - Major section titles
export const SectionHeading = styled(H2, {
  name: 'SectionHeading',
  size: '$9',               // 48px mobile
  fontFamily: '$heading',
  fontWeight: '600',
  color: '$color',
  lineHeight: 56,
  
  $gtSm: {
    size: '$10',            // 56px desktop
    lineHeight: 64,
  },
  
  variants: {
    centered: {
      true: {
        textAlign: 'center',
      },
    },
  },
})

// Large section heading variant
export const SectionHeadingLarge = styled(H2, {
  name: 'SectionHeadingLarge',
  size: '$10',              // 56px mobile
  fontFamily: '$heading',
  fontWeight: '300',
  color: '$color',
  letterSpacing: -1,
  lineHeight: 64,
  
  $gtSm: {
    size: '$11',            // 64px desktop
    lineHeight: 72,
  },
})

// Card title - For cards and bento grids
export const CardTitle = styled(H3, {
  name: 'CardTitle',
  size: '$6',               // 28px
  fontFamily: '$heading',
  fontWeight: '500',
  color: '$color',
  lineHeight: 36,
})

// Sub-section heading
export const SubHeading = styled(H3, {
  name: 'SubHeading',
  size: '$7',               // 32px mobile
  fontFamily: '$heading',
  fontWeight: '600',
  color: '$color',
  lineHeight: 40,
  
  $gtSm: {
    size: '$8',             // 40px desktop
    lineHeight: 48,
  },
})

// Section label - Small uppercase labels
export const SectionLabel = styled(SizableText, {
  name: 'SectionLabel',
  size: '$2',               // 14px
  fontFamily: '$body',
  textTransform: 'uppercase',
  letterSpacing: 2,
  color: '$primary',
  opacity: 0.9,
  fontWeight: '500',
})

// Body text - Default paragraph text
export const BodyText = styled(Paragraph, {
  name: 'BodyText',
  size: '$3',               // 16px
  fontFamily: '$body',
  lineHeight: 28,
  color: '$color',
  opacity: 0.85,
})

// Large body text
export const BodyTextLarge = styled(Paragraph, {
  name: 'BodyTextLarge',
  size: '$4',               // 18px
  fontFamily: '$body',
  lineHeight: 30,
  color: '$color',
  opacity: 0.85,
})

// Small text - Captions, metadata
export const SmallText = styled(SizableText, {
  name: 'SmallText',
  size: '$2',               // 14px
  fontFamily: '$body',
  lineHeight: 24,
  color: '$color',
  opacity: 0.7,
})

// Metric text - Big numbers, statistics
export const MetricText = styled(SizableText, {
  name: 'MetricText',
  size: '$8',               // 40px mobile
  fontFamily: '$heading',
  fontWeight: '700',
  color: '$primary',
  lineHeight: 48,
  
  $gtSm: {
    size: '$9',             // 48px desktop
    lineHeight: 56,
  },
})

// Code text - Inline code snippets
export const CodeText = styled(SizableText, {
  name: 'CodeText',
  size: '$3',               // 13px
  fontFamily: '$mono',
  backgroundColor: 'rgba(16, 185, 129, 0.15)',
  color: '$primary',
  paddingHorizontal: 6,
  paddingVertical: 2,
  borderRadius: 4,
})
