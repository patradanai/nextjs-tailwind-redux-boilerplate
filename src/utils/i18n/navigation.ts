import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { localePrefix, locales } from '@/libs/configs/i18n.config'

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales, localePrefix })
