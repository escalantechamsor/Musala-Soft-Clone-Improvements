import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Community | CSR Impact',
  description: 'Impact of technologies',
}


export default function CSRImpactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}