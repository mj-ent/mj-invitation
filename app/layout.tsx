import type { Metadata } from 'next'

import './globals.css'
import { nanum_gothic } from './fonts'

export const metadata: Metadata = {
  title: '사무엘 🤎 다정 결혼합니다',
  description: '2024년 10월 5일',
  robots: { index: false, follow: false, nocache: true },
  openGraph: {
    title: '사무엘 🤎 다정 결혼합니다',
    description: '2024년 10월 5일',
    url: 'https://mj-invitation.vercel.app',
    images: [
      {
        url: 'https://mj-invitation.vercel.app/images/main.jpg',
        width: 800,
        height: 600,
      },
    ]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nanum_gothic.variable}>
      <body>{children}</body>
    </html>
  )
}
