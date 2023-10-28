
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Join Us',
  description: 'Join Us section',
}


export default function JoinUsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}