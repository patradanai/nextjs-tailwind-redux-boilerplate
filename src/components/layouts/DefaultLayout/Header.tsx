'use client'
import React from 'react'

import { NextPage } from 'next'

import { ImageLoader } from '@/libs/ImageLoader'

interface IHeader {}

export const Header: NextPage<IHeader> = () => {
    return (
        <nav className={'sticky top-0 z-50 w-full'}>
            <div className="flex h-[60px] w-full flex-row items-center justify-center border-b-DEFAULT  border-b-secondary bg-[#272727]">
                <div className="relative h-full w-32">
                    <ImageLoader
                        src="https://angelaforindiana.com/img/logo.webp"
                        alt="userinfo"
                        style={{ objectFit: 'contain' }}
                        fill
                    />
                </div>
            </div>
        </nav>
    )
}
