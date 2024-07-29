'use client'

import React, { FC, ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
interface ProviderProps {
  children: ReactNode
}

const Providers: FC<ProviderProps> = ({children}) => {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
}

export default Providers