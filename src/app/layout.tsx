import NavBar from '@/components/navbar/navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft Clone Improvements',
  description: 'Clone with new features in design and style of the entire original page of Musala Sof',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <NavBar />
        <main className='z-40'>
          {children}
        </main>
      </body>
    </html>
  )
}
