import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
// import './index.css'
// import App from './App.tsx'
import Router from '@/routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
    {/* <App /> */}
  </StrictMode>
)
