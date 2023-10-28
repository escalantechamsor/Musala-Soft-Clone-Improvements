import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Services | Software Design Development',
  description: 'Services of Software Design Development in Musala Soft',
}


export default function SoftwareDesignDevelopmentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}