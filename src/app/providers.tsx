'use client'
import { theme } from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Suspense } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
export function Providers({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<>loading...</>}>
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          {children}
          <ProgressBar
            height="4px"
            color="#FFD1DC"
            options={{ showSpinner: false }}
            shallowRouting
          />
        </ChakraProvider>
      </QueryClientProvider>
    </SessionProvider>
  </Suspense>
}