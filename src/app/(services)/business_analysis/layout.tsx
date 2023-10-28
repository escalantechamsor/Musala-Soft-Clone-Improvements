
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Services | Business Analysis',
  description: 'Services of Business Analysis in Musala Soft',
}


export default function BusinessAnalysisLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}