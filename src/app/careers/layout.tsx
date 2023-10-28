
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Careers',
  description: 'Careers in Musala Soft',
}


export default function CareersLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}