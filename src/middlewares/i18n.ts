import createMiddleware from 'next-intl/middleware'

import {
    defaultLocale,
    localePrefix,
    locales,
} from '@/libs/configs/i18n.config'

import { MiddlewareFactory } from './stackMiddleware'

export const i18nMiddleware: MiddlewareFactory = () => {
    const i18nMiddleware = createMiddleware({
        // A list of all locales that are supported
        locales,
        // Used when no locale matches
        defaultLocale,
        localePrefix, // This is the default
    })

    return i18nMiddleware
}
