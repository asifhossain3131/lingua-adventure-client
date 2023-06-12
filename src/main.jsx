import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/Routes'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider'
import { ThemeProvider } from "@material-tailwind/react";
import { DarkProvider } from './providers/DarkProvider'


const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <Toaster />
   <QueryClientProvider client={queryClient}>
   <ThemeProvider>
   <DarkProvider>
   <RouterProvider router={router}></RouterProvider>
   </DarkProvider>
   </ThemeProvider>
    </QueryClientProvider>
   </AuthProvider>
  </React.StrictMode>,
)
