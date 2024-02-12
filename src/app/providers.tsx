'use client'
import { theme } from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>
      {children}
      <ProgressBar
        height="4px"
        color="#FFD1DC"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </ChakraProvider>
}