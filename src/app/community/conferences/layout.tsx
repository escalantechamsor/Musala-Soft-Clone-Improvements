import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Community | Conferences',
  description: 'Conferences developed in Musala Soft Company',
}


export default function ConferencesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}