import '@/styles/globals.css'
import '@/libs/configs/fontawesome.config'

import React from 'react'

import DefaultLayout from '@/components/layouts/DefaultLayout/DefaultLayout'

export default function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    return (
        <html lang={locale}>
            <body>
                <DefaultLayout>{children}</DefaultLayout>
            </body>
        </html>
    )
}
