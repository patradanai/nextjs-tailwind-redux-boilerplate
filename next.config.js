// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-var-requires
const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        minimumCacheTTL: 60,
        domains: ['localhost', '43.229.133.114'],
    },
    output: 'standalone',
}

module.exports = withNextIntl(nextConfig)
