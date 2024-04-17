'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { NextPage } from 'next'

interface Props {
    children: React.ReactNode
}

const queryClient = new QueryClient()

export const QueryWrapper: NextPage<Props> = (props) => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}

                {props.children}
            </QueryClientProvider>
        </>
    )
}
