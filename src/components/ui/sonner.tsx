import { useEffect, useState } from 'react'
import { Toaster as Sonner } from 'sonner'

interface ToasterProps {
  className?: string
  theme?: 'light' | 'dark'
}

const Toaster = ({ theme = 'dark', className }: ToasterProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Sonner
      theme={theme}
      className={className}
      toastOptions={{
        classNames: {
          toast: 'group toast group-[.toaster]:bg-neutral-900/95 group-[.toaster]:text-neutral-50 group-[.toaster]:border-neutral-800/50 group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-neutral-400',
          actionButton: 'group-[.toast]:bg-emerald-500 group-[.toast]:text-emerald-50',
          cancelButton: 'group-[.toast]:bg-neutral-800 group-[.toast]:text-neutral-50',
          closeButton: 'group-[.toast]:hover:bg-neutral-800',
        },
      }}
    />
  )
}

export { Toaster }
