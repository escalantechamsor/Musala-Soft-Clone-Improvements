import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Community | Code It',
  description: 'Programming event developed in Musala Soft Company',
}


export default function CodeItLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}