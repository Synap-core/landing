'use client'

import { Stack, styled, GetProps } from 'tamagui'

// Create Button from Stack to avoid Tamagui Button's conflicting variant types
export const Button = styled(Stack, {
  name: 'CustomButton',
  tag: 'button',
  
  // Base styles
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  fontWeight: '600',
  paddingHorizontal: 24,
  paddingVertical: 12,
  cursor: 'pointer',
  borderWidth: 0,
  fontFamily: '$body',
  fontSize: 16,
  textDecoration: 'none',
  
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
    size: {
      '$5': {
        paddingHorizontal: 32,
        paddingVertical: 16,
        fontSize: 18,
      }
    }
  } as const,

  defaultVariants: {
    variant: 'primary',
  },
} as const)

export type ButtonProps = GetProps<typeof Button>
