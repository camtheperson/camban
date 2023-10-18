import './globals.css'
import './ebr3dqq.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Camban',
    description: 'The easier way to do.',
    openGraph: {
        url: "https://www.camban.io",
        title: "Camban",
        description: "Camban is an agile project management tool for the masses.",
        siteName: "Camban",
        images: [{
            url: "/camban-meta-bg.jpg",
        }],
    }
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
