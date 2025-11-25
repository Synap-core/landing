import { createTamagui, styled, Text } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'

const headingFont = createInterFont({
  size: {
    1: 12,   // Rarely used
    2: 14,   // Labels  
    3: 16,   // Small headings
    4: 20,   // H6
    5: 24,   // H5
    6: 28,   // H4 / H3 mobile
    7: 32,   // H3 desktop small
    8: 40,   // H3 desktop / H2 mobile
    9: 48,   // H2 desktop medium
    10: 56,  // H2 desktop large
    11: 64,  // H1 mobile
    12: 72,  // H1 desktop
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    4: '300',
    5: '400',
    6: '500',
    7: '600',
    8: '700',
  },
  face: {
    300: { normal: 'Inter' },
    400: { normal: 'Inter' },
    500: { normal: 'Inter' },
    600: { normal: 'Inter' },
    700: { normal: 'InterBold' },
  },
  letterSpacing: {
    4: 0,
    5: -0.5,
    6: -0.5,
    7: -1,
    8: -1,
    9: -1.5,
    10: -1.5,
    11: -2,
    12: -2,
  },
})

const bodyFont = createInterFont(
  {
    size: {
      1: 12,   // Caption / small text
      2: 14,   // Small body
      3: 16,   // Body default
      4: 18,   // Large body
      5: 20,   // XL body
      6: 24,   // Display text
    },
    face: {
      300: { normal: 'Inter' },
      400: { normal: 'Inter' },
      500: { normal: 'Inter' },
      600: { normal: 'Inter' },
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

// Monospace font for code/technical text
const monoFont = createInterFont(
  {
    family: "'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Courier New', monospace",
    size: {
      1: 11,   // Very small code
      2: 12,   // Small code
      3: 13,   // Code default
      4: 14,   // Medium code
      5: 15,   // Large code  
      6: 16,   // XL code
    },
    face: {
      400: { normal: "'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Courier New', monospace" },
      700: { normal: "'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Courier New', monospace" },
    },
  },
  {
    sizeSize: (size) => Math.round(size),
    sizeLineHeight: (size) => Math.round(size * 1.5),
  }
)


import { createAnimations } from '@tamagui/animations-react-native'

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})

export const config = createTamagui({
  animations,
  defaultTheme: 'dark',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
    mono: monoFont,  // ✅ ADD THIS
  },
  themes: {
    ...themes,
    dark: {
        ...themes.dark,
        background: '#121212',
        backgroundStrong: '#0A0A0A',
        backgroundTransparent: 'rgba(5, 5, 5, 0.8)',
        primary: '#10B981',
        secondary: '#3B82F6',
        color: '#F3F4F6',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        outlineColor: 'rgba(16, 185, 129, 0.5)',
    },
    light: {
        ...themes.light,
        background: '#FFFFFF',
        primary: '#10B981',
        secondary: '#3B82F6',
        color: '#050505',
    }
  },
  tokens,
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
})

export type AppConfig = typeof config

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config
