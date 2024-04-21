import '@/styles/globals.css'
import '@/libs/configs/fontawesome.config'

import React from 'react'

import type { Viewport } from 'next'
import { Sarabun, Kanit } from 'next/font/google'
import { useMessages, NextIntlClientProvider } from 'next-intl'

import { SnackBarProvider } from '@/contexts/snackbar/snackbarContext'
import { ApolloWrapper } from '@/libs/ApolloWrapper'
import StoreProvider from '@/libs/ReduxProvider'

const sarabun = Sarabun({
    subsets: ['thai'],
    variable: '--font-sarabun',
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const kanit = Kanit({
    subsets: ['thai'],
    variable: '--font-kanit',
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const viewport: Viewport = {
    initialScale: 1,
    width: 'device-width',
    maximumScale: 3,
    minimumScale: 1,
}

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
            <body className={`${sarabun.variable} ${kanit.variable}`}>
                <StoreProvider>
                    <NextIntlClientProvider locale={locale} messages={messages}>
                        <ApolloWrapper>
                            <SnackBarProvider>{children}</SnackBarProvider>
                        </ApolloWrapper>
                    </NextIntlClientProvider>
                </StoreProvider>
            </body>
        </html>
    )
}

// export async function generateMetadata(): Promise<Metadata> {
// const data = await resourceService.getResource({
//     id: env.NEXT_PUBLIC_RESOURCE_ID,
// })
// const { metaDescription, favicon } = data
// return {
//     icons: {
//         icon: favicon,
//         shortcut: favicon,
//         apple: favicon,
//     },
//     robots: {
//         index: metaDescription.isIndex,
//         follow: metaDescription.isFollow,
//         nocache: true,
//         googleBot: {
//             index: metaDescription.isIndex,
//             follow: metaDescription.isFollow,
//             noimageindex: false,
//         },
//     },
//     title: metaDescription.metaTitle,
//     description: metaDescription.metaDescription,
//     keywords: metaDescription.keywords,
//     openGraph: {
//         title: metaDescription.metaTitle,
//         description: metaDescription.metaDescription,
//         images: [metaDescription.ogImage.imageUrl],
//     },
//     twitter: {
//         title: metaDescription.metaTitle,
//         description: metaDescription.metaDescription,
//         images: [metaDescription.ogImage.imageUrl],
//     },
//     alternates: {
//         canonical: metaDescription.canonical,
//     },
// }
// }
