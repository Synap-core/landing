'use client'

import { TamaguiProvider, TamaguiProviderProps } from 'tamagui'
import { config } from '../tamagui.config'

export function Providers({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider config={config} defaultTheme="dark" {...rest}>
      {children}
    </TamaguiProvider>
  )
}
