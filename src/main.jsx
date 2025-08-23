import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import RouteProvider from './Routing/Main.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient=new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>

    <AuthProvider>
      <RouteProvider/>
      <Toaster position='top-center' reverseOrder={false}/>
    </AuthProvider>
    </BrowserRouter>

    </QueryClientProvider>
   
  </StrictMode>,
)
