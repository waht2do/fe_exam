// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Router from '@/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
)
