import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { useEffect } from '../src/useEffect.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <useEffect />
  </StrictMode>
)
