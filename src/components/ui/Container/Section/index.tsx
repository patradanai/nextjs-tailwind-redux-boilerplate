import React from 'react'

import { NextPage } from 'next'

import { cn } from '@/utils/cn'

interface Props {
    children: React.ReactNode
    className?: string
    bgImage?: string
}

const Section: NextPage<Props> = ({ children, className, bgImage }) => {
    return (
        <section
            className={cn('container mx-auto py-5')}
            style={{
                backgroundImage: bgImage,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
            }}
        >
            <div className={cn(className)}>{children}</div>
        </section>
    )
}

export default Section
