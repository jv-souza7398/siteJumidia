import React from "react"
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Studio Ju | Produção Publicitária',
  description: 'Transformamos ideias em experiências visuais impactantes. Somos uma agência de publicidade pioneira, criativa e inovadora.',
  generator: 'v0.app',
  keywords: ['publicidade', 'marketing', 'design', 'branding', 'criativo', 'agência'],
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#53161D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/futura-pt"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
