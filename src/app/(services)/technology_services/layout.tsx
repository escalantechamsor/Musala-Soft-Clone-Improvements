import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Services | Technology Services',
  description: 'Services of Technology Services in Musala Soft',
}


export default function TechnologyModernizationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}