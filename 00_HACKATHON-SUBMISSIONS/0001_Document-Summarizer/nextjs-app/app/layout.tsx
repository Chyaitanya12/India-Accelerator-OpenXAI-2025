import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Document Summarizer',
  description: 'Summarize your documents using AI powered by Ollama',
  keywords: ['document summarization', 'AI', 'Ollama', 'Next.js', 'OpenxAI'],
  authors: [{ name: 'Your Name or Team Name' }],
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Document Summarizer',
    description: 'Summarize your documents using AI powered by Ollama',
    url: 'https://yourdomain.com',
    siteName: 'Document Summarizer',
    images: [
      {
        url: 'https://yourdomain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Document Summarizer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#667eea" />
      </head>
      <body>{children}</body>
    </html>
  )
}
