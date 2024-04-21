import '@/styles/globals.css'
import '@/libs/configs/fontawesome.config'

import React from 'react'

export default function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    return (
        <html lang={locale}>
            <body>{children}</body>
        </html>
    )
}
