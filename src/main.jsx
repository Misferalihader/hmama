import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global.css'
import App from './App.jsx' // ✅ هذا فقط

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
