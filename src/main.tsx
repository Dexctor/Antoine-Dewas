import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import App from './App'
import './index.css'
import emailjs from '@emailjs/browser'
import { Toaster } from '@/components/ui/toaster'

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_PUBLIC_EMAILJS_PUBLIC_KEY)

// Loading fallback component
// eslint-disable-next-line react-refresh/only-export-components
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-emerald-500"></div>
  </div>
)

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<LoadingFallback />}>
    <App />
    <Toaster />
  </Suspense>
)
