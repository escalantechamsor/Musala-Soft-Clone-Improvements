import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Services | Software Quality Assuance',
  description: 'Services of Software Quality Assuance in Musala Soft',
}


export default function SoftwareQualityAssuranceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}