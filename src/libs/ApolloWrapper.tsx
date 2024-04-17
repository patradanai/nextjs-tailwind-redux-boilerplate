'use client'
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr'
import { NextPage } from 'next'

import { makeClient } from '@/libs/configs/apolloClient.config'

interface Props {
    children: React.ReactNode
}

export const ApolloWrapper: NextPage<Props> = ({ children }) => {
    return (
        <>
            <ApolloNextAppProvider makeClient={makeClient}>
                {children}
            </ApolloNextAppProvider>
        </>
    )
}
