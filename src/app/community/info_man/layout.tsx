import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Community | Info Man',
  description: 'Available information about many topics in Musala Soft archives',
}


export default function InfoManLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}