import '@/styles/globals.css'
import '@/libs/configs/fontawesome.config'

import React from 'react'

import type { Metadata, Viewport } from 'next'
import { Sarabun, Kanit } from 'next/font/google'
import Head from 'next/head'

import { resourceService } from '@/services/implements'
import { env } from '@/utils/env'
import { getRGBColor } from '@/utils/parseColor'

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

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const data = await resourceService.getResource({
        id: env.NEXT_PUBLIC_RESOURCE_ID,
    })

    return (
        <html lang="en">
            <Head>
                <link
                    rel="shortcut icon"
                    href={data.favicon.url}
                    sizes="16x16"
                />
                <link
                    rel="apple-touch-icon"
                    href={data.favicon.url}
                    sizes="16x16"
                />
                <link rel="icon" href={data.favicon.url} sizes="16x16" />

                <style>
                    :root
                    {`{${getRGBColor(data.primaryColor.hex, 'primary')} ${getRGBColor(data.secondaryColor.hex, 'secondary')}} `}
                </style>
            </Head>

            <body className={`${sarabun.variable} ${kanit.variable}`}>
                {children}
            </body>
        </html>
    )
}

export async function generateMetadata(): Promise<Metadata> {
    const data = await resourceService.getResource({
        id: env.NEXT_PUBLIC_RESOURCE_ID,
    })

    const { metaDescription, favicon } = data

    return {
        icons: {
            icon: favicon.url,
            shortcut: favicon.url,
            apple: favicon.url,
        },
        robots: {
            index: metaDescription.isIndex,
            follow: metaDescription.isFollow,
            nocache: true,
            googleBot: {
                index: metaDescription.isIndex,
                follow: metaDescription.isFollow,
                noimageindex: false,
            },
        },
        title: metaDescription.metaTitle,
        description: metaDescription.metaDescription,
        keywords: metaDescription.keywords,
        openGraph: {
            title: metaDescription.metaTitle,
            description: metaDescription.metaDescription,
            images: [metaDescription.ogImage.imageUrl],
        },
        twitter: {
            title: metaDescription.metaTitle,
            description: metaDescription.metaDescription,
            images: [metaDescription.ogImage.imageUrl],
        },
    }
}
