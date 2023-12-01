'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { NextUIProvider } from '@nextui-org/react'

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    return (
        <NextUIProvider>
            <NextThemesProvider {...props}>
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    )
}
