import {
    IGetRefreshTokenRequest,
    IGetRefreshTokenResponse,
    ISignInRequest,
    ISignInResponse,
    ISignOutRequest,
    ISignOutResponse,
    ISignUpRequest,
    ISignUpResponse,
} from '@/types/authentication'
import { IHTTPResponse } from '@/types/common'
import { env } from '@/utils/env'

import { BaseApiService } from '../base'
import { HttpException } from '../exception'
import interceptor from '../interceptor'

abstract class IAuthService {
    abstract signIn(data: ISignInRequest): Promise<ISignInResponse>
    abstract signOut(data: ISignOutRequest): Promise<ISignOutResponse>
    abstract signUp(
        data: ISignUpRequest
    ): Promise<IHTTPResponse<ISignUpResponse>>
    abstract refreshToken(
        refreshToken: IGetRefreshTokenRequest
    ): Promise<IHTTPResponse<IGetRefreshTokenResponse>>
}

export class AuthService extends BaseApiService implements IAuthService {
    constructor() {
        super({
            baseURL: env.NEXT_PUBLIC_API_URL + '/inventory/v1/',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        // this.setRequestInterceptor(
        //     interceptor.requestPromise,
        //     interceptor.requestReject
        // )
        this.setResponseInterceptor(
            interceptor.responsePromiseHandler,
            interceptor.responseRejectHandler
        )
    }

    async signIn(data: ISignInRequest): Promise<ISignInResponse> {
        try {
            const res = await this.post<IHTTPResponse<ISignInResponse>>(
                '/signin',
                data
            )

            return res.data
        } catch (error: any) {
            throw new HttpException(error)
        }
    }

    async signOut(data: ISignOutRequest): Promise<ISignOutResponse> {
        try {
            const res = await this.post<IHTTPResponse<ISignOutResponse>>(
                '/signout',
                { ...data }
            )

            return res.data
        } catch (error: any) {
            throw new HttpException(error)
        }
    }

    async signUp(
        data: ISignUpRequest
    ): Promise<IHTTPResponse<ISignUpResponse>> {
        try {
            const res = await this.post<IHTTPResponse<ISignUpResponse>>(
                '/signup',
                { ...data }
            )

            return res
        } catch (error: any) {
            throw new HttpException(error)
        }
    }

    async refreshToken(
        data: IGetRefreshTokenRequest
    ): Promise<IHTTPResponse<IGetRefreshTokenResponse>> {
        try {
            const res = await this.post<
                IHTTPResponse<IGetRefreshTokenResponse>
            >('/refresh-token', { ...data })

            return res
        } catch (error: any) {
            throw new HttpException(error)
        }
    }
}
