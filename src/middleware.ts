import { i18nMiddleware } from './middlewares/i18n'
import { loggerMiddlware } from './middlewares/logger'
import { stackMiddlewares } from './middlewares/stackMiddleware'

const middlewares = [loggerMiddlware, i18nMiddleware]

export default stackMiddlewares(middlewares)

export const config = {
    //       // Match only internationalized pathnames
    //   matcher: ['/', '/(de|en)/:path*']
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
