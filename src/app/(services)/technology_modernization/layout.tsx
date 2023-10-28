import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Services | Technology Modernization',
  description: 'Services of Technology Modernization in Musala Soft',
}


export default function TechnologyModernizationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}