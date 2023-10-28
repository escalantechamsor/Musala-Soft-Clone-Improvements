
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Clients',
  description: 'Clients of Musala Soft Company',
}


export default function ClientsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}