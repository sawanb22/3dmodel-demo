import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Interactive 3D Showcase',
  description: 'Next-Gen Web Experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans min-h-screen bg-background text-foreground overflow-x-hidden relative flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
