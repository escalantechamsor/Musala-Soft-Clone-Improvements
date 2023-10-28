
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Legal',
  description: 'Legal agreements in Musala Soft',
}


export default function LegalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}