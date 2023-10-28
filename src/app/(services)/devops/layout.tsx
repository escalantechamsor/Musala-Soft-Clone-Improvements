
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Services | DevOps',
  description: 'Services of DevOps in Musala Soft',
}


export default function DevOpsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}