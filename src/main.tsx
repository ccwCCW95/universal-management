/*
 * @Author: Changwei Cao
 * @Date: 2024-10-23 20:17:15
 * @LastEditors: Changwei Cao
 * @LastEditTime: 2024-10-24 18:57:45
 * @Description: 
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
