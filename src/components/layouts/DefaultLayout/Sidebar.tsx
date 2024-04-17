import React from 'react'

import { faPiedPiper, faSlideshare } from '@fortawesome/free-brands-svg-icons'
import {
    faBox,
    faCaravan,
    faCartPlus,
    faCodeBranch,
    faHandshake,
    faScroll,
    faSignOut,
    faUser,
    faUserFriends,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import { useShallow } from 'zustand/react/shallow'

import { LocaleSwitcher } from '@/components/ui/I18n/LocaleSwitching'
import { ImageLoader } from '@/libs/ImageLoader'
import { useGlobalStore } from '@/stores/useGlobalStore'
import { cn } from '@/utils/cn'
import { env } from '@/utils/env'
import { Link } from '@/utils/i18n/navigation'

import ListMenuDropdown from './components/MenuDropDown'
import ListMenuDropdownChild from './components/MenuDropdownList'
import { ListMenuDropHeader } from './components/MenuHeader'
import ListMenu from './components/MenuList'

export const Sidebar: NextPage = () => {
    const { isShowSidebar, icon } = useGlobalStore(
        useShallow((state) => ({
            isShowSidebar: state.isShowSidebar,
            icon: state.icon,
            version: state.version,
        }))
    )

    const handleSignout = () => {
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('accessToken')
    }

    return (
        <aside
            className={cn(
                `fixed inset-0 h-full z-[100] pt-5 motion-reduce:transition-none transition-all ease-in-out delay-150 bg-white ${
                    isShowSidebar ? 'w-[260px]' : 'w-[78px]'
                }`
            )}
        >
            <div
                className={cn(
                    'overflow-y-auto overflow-x-hidden h-full flex flex-col justify-between',
                    'scrollbar-thin scrollbar-thumb-info scrollbar-thumb-rounded-full'
                )}
            >
                {/* Header Company */}
                <div className="flex min-h-[78px] flex-row items-center justify-between px-[25px]">
                    {isShowSidebar ? (
                        <div className="w-full">
                            <div className="flex  w-full cursor-pointer justify-center text-white">
                                <Link href="/">
                                    <ImageLoader
                                        alt="logo"
                                        src={icon || '/images/logo.webp'}
                                        style={{ objectFit: 'contain' }}
                                        width={100}
                                        height={100}
                                    />
                                </Link>
                            </div>
                        </div>
                    ) : null}
                </div>

                {/* List */}
                <div className="mb-auto">
                    <ul>
                        <ListMenuDropHeader
                            isShowSidebar={isShowSidebar}
                            headerName={'Home'}
                        />
                        {/* <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faCalendar}
                                    className="h-4 w-4"
                                />
                            }
                            name={'Dashboard'}
                            status={isShowSidebar}
                            src={'/'}
                        /> */}
                        {/* Supplier */}
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faCaravan}
                                    className="size-4"
                                />
                            }
                            name={'ซับพลายเออร์'}
                            status={isShowSidebar}
                            src={'/suppliers'}
                        />
                        {/* Product */}
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faPiedPiper}
                                    className="size-4"
                                />
                            }
                            name={'สินค้า'}
                            status={isShowSidebar}
                            src={'/products'}
                        />

                        {/* Intensive */}
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faHandshake}
                                    className="size-4"
                                />
                            }
                            name={'ส่วนแบ่งการขาย'}
                            status={isShowSidebar}
                            src={'/settings/incentive'}
                        />
                        {/* Employee */}
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faSlideshare}
                                    className="size-4"
                                />
                            }
                            name={'พนักงาน'}
                            status={isShowSidebar}
                            src={'/settings/employee'}
                        />
                        {/* Role */}
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faUserFriends}
                                    className="size-4"
                                />
                            }
                            name={'ตำแหน่งพนักงาน'}
                            status={isShowSidebar}
                            src={'/settings/employee-role'}
                        />
                        {/* Operation */}
                        <ListMenuDropHeader
                            isShowSidebar={isShowSidebar}
                            headerName="Operations"
                        />
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faCartPlus}
                                    className="size-4"
                                />
                            }
                            name={'ขายหน้าลาน'}
                            status={isShowSidebar}
                            src={'/sale?type=PF'}
                        />
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faCartPlus}
                                    className="size-4"
                                />
                            }
                            name={'ขายหลุม'}
                            status={isShowSidebar}
                            src={'/sale?type=PB'}
                        />
                        <ListMenuDropdown
                            icons={
                                <FontAwesomeIcon
                                    icon={faBox}
                                    className="size-4"
                                />
                            }
                            name={'สต๊อก'}
                            status={isShowSidebar}
                        >
                            <ListMenuDropdownChild
                                name="สต๊อกสินค้า"
                                src="/inventory/stock"
                            />
                            <ListMenuDropdownChild
                                name="ประวัติสต๊อก"
                                src="/inventory/history"
                            />
                            <ListMenuDropdownChild
                                name="สั่งสินค้า & โอนย้าย"
                                src="/inventory/purchases"
                            />
                            <ListMenuDropdownChild
                                name="รับสินค้า"
                                src="/inventory/fullfillment"
                            />
                        </ListMenuDropdown>

                        {/* Reports */}
                        <ListMenuDropHeader
                            isShowSidebar={isShowSidebar}
                            headerName="Reports"
                        />
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faScroll}
                                    className="size-4"
                                />
                            }
                            name={'รายงานส่วนแบ่งการขาย'}
                            status={isShowSidebar}
                            src={'/reports/incentive'}
                        />
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faScroll}
                                    className="size-4"
                                />
                            }
                            name={'รายงานการขาย'}
                            status={isShowSidebar}
                            src={'/reports/sale'}
                        />

                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faScroll}
                                    className="size-4"
                                />
                            }
                            name={'รายงานสต๊อก'}
                            status={isShowSidebar}
                            src={'/reports/inventory'}
                        />

                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faScroll}
                                    className="size-4"
                                />
                            }
                            name={'รายงานคำสั่งซื้อ & โอนย้าย'}
                            status={isShowSidebar}
                            src={'/reports/purchase-order'}
                        />

                        {/* Settings */}
                        <ListMenuDropHeader
                            isShowSidebar={isShowSidebar}
                            headerName="Settings"
                        />
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faUser}
                                    className="size-4"
                                />
                            }
                            name={'Users'}
                            status={isShowSidebar}
                            src={'/settings/users'}
                        />
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faUserFriends}
                                    className="size-4"
                                />
                            }
                            name={'Role'}
                            status={isShowSidebar}
                            src={'/settings/role'}
                        />
                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faCodeBranch}
                                    className="size-4"
                                />
                            }
                            name={'Branch'}
                            status={isShowSidebar}
                            src={'/settings/branch'}
                        />

                        <ListMenu
                            icons={
                                <FontAwesomeIcon
                                    icon={faSignOut}
                                    className="size-4"
                                />
                            }
                            name="ลงชื่ออก"
                            status={isShowSidebar}
                            src="/login"
                            onClick={handleSignout}
                        />
                    </ul>
                </div>

                <LocaleSwitcher />
                <div className="flex items-center justify-center py-5">
                    <p className="text-center text-sm text-[#bcc8ff]">
                        Version {env.NEXT_PUBLIC_APP_VERSION}
                    </p>
                </div>
            </div>
        </aside>
    )
}
