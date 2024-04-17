import React from 'react'

import { NextPage } from 'next'

import { cn } from '@/utils/cn'

interface Props {
    children: React.ReactNode
    className?: string
    backdrop?: string
    isBackdrop?: boolean
    bgImage?: string
}

const Container: NextPage<Props> = ({
    children,
    className,
    backdrop,
    bgImage,
    isBackdrop,
}) => {
    return (
        <main
            className={cn(
                'flex flex-col w-full h-full min-h-screen',
                className
            )}
            style={{ backgroundImage: bgImage }}
        >
            {isBackdrop && (
                <div
                    className={cn(
                        'absolute z-0 top-0 left-0 bg-white/20 w-full h-full',
                        backdrop
                    )}
                />
            )}
            <div className={cn('w-full min-h-screen')}>{children}</div>
        </main>
    )
}

export default Container
