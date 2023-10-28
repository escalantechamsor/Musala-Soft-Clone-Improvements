
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Company',
  description: 'Company presentation',
}






export default function CompanyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}