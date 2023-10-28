
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Services | IT Consulting',
  description: 'Services of IT Consulting in Musala Soft',
}


export default function ITConsultingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}