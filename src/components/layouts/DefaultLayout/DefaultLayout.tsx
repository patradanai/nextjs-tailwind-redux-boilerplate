'use client'
import React from 'react'

import { NextPage } from 'next'

import MenuFloating from './components/MenuFloating'
import { Header } from './Header'

/**
 *
 * DefaultLayout
 *
 */

interface Props {
    children: React.ReactNode
}

const DefaultLayout: NextPage<Props> = ({ children }) => {
    return (
        <div className="box-border flex min-h-screen w-full flex-col justify-between overflow-auto">
            <Header />
            <div className="mb-auto flex size-full flex-row">
                <div className={'size-full'}>
                    <div className="relative">
                        <div className="size-full overflow-y-auto">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            {/* Floating Menu */}
            <MenuFloating />
        </div>
    )
}

export default DefaultLayout
