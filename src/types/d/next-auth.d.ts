/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { extend } from 'lodash'
import NextAuth, { DefaultSession, DefaultJWT, DefaultUser } from 'next-auth'
import { JWT } from 'next-auth/jwt'

type UserProfile = { id: string } & DefaultSession['user']
declare module 'next-auth' {
    interface Session extends DefaultSession {
        userId?: string
        user?: UserProfile
        accessToken?: string
        refreshToken?: string
        expiredIn?: number
        error?: string
    }

    interface User extends DefaultUser {
        userId: string
        accessToken: string
        refreshToken: string
        expiredIn: number
        role: string
    }
}
declare module 'next-auth/jwt' {
    interface JWT extends DefaultJWT {
        userId?: string
        user?: UserProfile
        refreshToken?: string
        accessToken?: string
        expiredIn?: number
        error?: string
    }
}
