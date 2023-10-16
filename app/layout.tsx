import './globals.css'
import './ebr3dqq.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Camban',
    description: 'The easier way to do.',
}

export default function RootLayout({
    children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
