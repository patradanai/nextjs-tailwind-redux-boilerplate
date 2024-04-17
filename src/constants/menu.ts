import { faPiedPiper, faSlideshare } from '@fortawesome/free-brands-svg-icons'
import {
    faBox,
    faCaravan,
    faCartPlus,
    faHandshake,
    faScroll,
    faUserFriends,
} from '@fortawesome/free-solid-svg-icons'

export const menu = [
    {
        groupName: 'MAIN',
        groupRoutes: [
            {
                name: 'ซับพลายเออร์',
                roles: [],
                permissions: [],
                route: '/suppliers',
                icon: faCaravan,
                sub_menu: [
                    {
                        name: '',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
            {
                name: 'สินค้า',
                roles: [],
                permissions: [],
                route: '/products',
                icon: faPiedPiper,
                sub_menu: [
                    {
                        name: '',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
            {
                name: 'ส่วนแบ่งการขาย',
                roles: [],
                permissions: [],
                route: '/settings/incentive',
                icon: faHandshake,
                sub_menu: [
                    {
                        name: '',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
            {
                name: 'พนักงาน',
                roles: [],
                permissions: [],
                route: '/settings/employee',
                icon: faSlideshare,
                sub_menu: [
                    {
                        name: '',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
            {
                name: 'ตำแหน่งพนักงาน',
                roles: [],
                permissions: [],
                route: '/settings/employee-role',
                icon: faUserFriends,
                sub_menu: [
                    {
                        name: '',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
        ],
    },

    // Operations
    {
        groupName: 'OPERATIONS',
        groupRoutes: [
            {
                name: 'ขายหน้าลาน',
                roles: [],
                permissions: [],
                route: '/sale?type=PF',
                icon: faCartPlus,
                sub_menu: [
                    {
                        name: '',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
            {
                name: 'ขายหลุม',
                roles: [],
                permissions: [],
                route: '/sale?type=PB',
                icon: faCartPlus,
                sub_menu: [
                    {
                        name: '',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
            {
                name: 'สต๊อก',
                roles: [],
                permissions: [],
                route: '/settings/incentive',
                icon: faBox,
                sub_menu: [
                    {
                        name: 'สต๊อกสินค้า',
                        roles: [],
                        permissions: [],
                        route: '/inventory/stock',
                    },
                    {
                        name: 'ประวัติสต๊อก',
                        roles: [],
                        permissions: [],
                        route: '/inventory/history',
                    },
                    {
                        name: 'สั่งสินค้า & โอนย้าย',
                        roles: [],
                        permissions: [],
                        route: '/inventory/purchases',
                    },
                    {
                        name: 'รับสินค้า',
                        roles: [],
                        permissions: [],
                        route: '/inventory/fullfillment',
                    },
                ],
            },
        ],
    },

    // Reports
    {
        groupName: 'รายงาน',
        groupRoutes: [
            {
                name: 'รายงานส่วนแบ่งการขาย',
                roles: [],
                permissions: [],
                route: '/reports/incentive',
                icon: faScroll,
                sub_menu: [
                    {
                        name: '',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
            {
                name: 'ขายหลุม',
                roles: [],
                permissions: [],
                route: '/sale?type=PB',
                icon: faCartPlus,
                sub_menu: [
                    {
                        name: '',
                        roles: [],
                        permissions: [],
                        route: '',
                    },
                ],
            },
            {
                name: 'สต๊อก',
                roles: [],
                permissions: [],
                route: '/settings/incentive',
                icon: faBox,
                sub_menu: [
                    {
                        name: 'สต๊อกสินค้า',
                        roles: [],
                        permissions: [],
                        route: '/inventory/stock',
                    },
                    {
                        name: 'ประวัติสต๊อก',
                        roles: [],
                        permissions: [],
                        route: '/inventory/history',
                    },
                    {
                        name: 'สั่งสินค้า & โอนย้าย',
                        roles: [],
                        permissions: [],
                        route: '/inventory/purchases',
                    },
                    {
                        name: 'รับสินค้า',
                        roles: [],
                        permissions: [],
                        route: '/inventory/fullfillment',
                    },
                ],
            },
        ],
    },
]
