import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musala Soft | Services | UI-UX',
  description: 'Services of UI-UX in Musala Soft',
}


export default function UserInterfaceExperienceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}