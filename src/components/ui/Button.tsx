'use client'

import { Button as TButton, styled } from 'tamagui'

export const Button = styled(TButton, {
  borderRadius: 8,
  fontWeight: '600',
  paddingHorizontal: 24,
  paddingVertical: 12,
  
  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',
        color: '#111827',
        hoverStyle: {
          backgroundColor: '#10B981',
        },
        pressStyle: {
          backgroundColor: '#059669',
        },
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '$primary',
        color: '$primary',
        hoverStyle: {
          backgroundColor: 'rgba(52, 211, 153, 0.1)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: '$color',
        hoverStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }
      }
    },
  } as const,

  defaultVariants: {
    variant: 'primary',
  },
})
