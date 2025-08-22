import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import RouteProvider from './Routing/Main.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <RouteProvider>

    </RouteProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
