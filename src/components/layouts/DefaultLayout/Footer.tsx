'use client'

import React from 'react'

import { NextPage } from 'next'
import { useShallow } from 'zustand/react/shallow'

import { useGlobalStore } from '@/stores/useGlobalStore'
import { Link } from '@/utils/i18n/navigation'

interface Props {}

export const Footer: NextPage<Props> = () => {
    const { name, isShowSidebar } = useGlobalStore(
        useShallow((state) => ({
            isShowSidebar: state.isShowSidebar,
            name: state.name,
        }))
    )

    return (
        <footer
            className={`bg-white py-5 ${
                isShowSidebar ? 'pl-[260px]' : 'pl-[78px]'
            } transition-all duration-500 ease-in-out`}
        >
            <div className="flex flex-row justify-between px-5">
                <div>
                    <p className="cursor-pointer text-sm text-[#74788d]">
                        2022 © {name}
                    </p>
                </div>
                <div>
                    <ul className="space-x-5">
                        <li className="inline-block">
                            <Link href="/">
                                <p className="text-sm text-[#74788d]">
                                    Privacy Policy
                                </p>
                            </Link>
                        </li>
                        <li className="inline-block">
                            <Link href="/">
                                <p className="cursor-pointer text-sm text-[#74788d]">
                                    Term &#38; Condition
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
