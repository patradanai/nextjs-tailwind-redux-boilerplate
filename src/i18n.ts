import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

import { locales, timeZone } from './libs/configs/i18n.config'

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!locales.includes(locale as any)) notFound()

    return {
        messages: (await import(`./dictionaries/${locale}.json`)).default,
        timeZone: timeZone,
    }
})
