import '@/styles/globals.css'
import '@/libs/configs/fontawesome.config'

import React from 'react'

import { NextIntlClientProvider, useMessages } from 'next-intl'

import { SnackBarProvider } from '@/contexts/snackbar/snackbarContext'
import { ApolloWrapper } from '@/libs/ApolloWrapper'

export default function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    const messages = useMessages()
    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ApolloWrapper>
                        <SnackBarProvider>{children}</SnackBarProvider>
                    </ApolloWrapper>
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
