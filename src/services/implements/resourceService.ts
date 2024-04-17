import { ApolloError } from '@apollo/client'

import GET_RESOURCE from '@/graphql/queries/resource'
import {
    IResourceData,
    IResourceRequest,
    IResourceResponse,
} from '@/types/resource'
import { logger } from '@/utils/logger'

import { BaseApolloServer } from '../base-apollo'
import { HttpApolloException } from '../exception-apollo'

abstract class IResourceService {
    abstract getResource(req: IResourceRequest): Promise<IResourceData>
}

export class ResourceService
    extends BaseApolloServer
    implements IResourceService
{
    async getResource(req: IResourceRequest): Promise<IResourceData> {
        try {
            const { data, error } = await this.client.query<IResourceResponse>({
                query: GET_RESOURCE,
                variables: { id: req.id },
                context: {
                    fetchOptions: {
                        next: { revalidate: 60 },
                    },
                },
                fetchPolicy: 'network-only',
            })

            if (error) {
                throw error
            }

            const {
                favicon,
                logo,
                primaryColor,
                secondaryColor,
                metaDescription,
                socialFacebook,
                socialLine,
                socialTwitter,
                socialYoutube,
                loginUrl,
                registerUrl,
                createdAt,
                mainContent,
                mobileBanner,
                publishedAt,
                banner,
                mainTitle,
            } = data.resource

            return {
                favicon: favicon.url,
                logo: logo.url,
                primaryColor: primaryColor,
                secondaryColor: secondaryColor,
                socialFacebook: socialFacebook,
                socialLine: socialLine,
                socialTwitter: socialTwitter,
                socialYoutube: socialYoutube,
                loginUrl: loginUrl,
                registerUrl: registerUrl,
                metaDescription: {
                    isFollow: metaDescription?.isFollow,
                    isIndex: metaDescription?.isIndex,
                    keywords: metaDescription?.keywords,
                    metaDescription: metaDescription?.metaDescription,
                    metaTitle: metaDescription?.metaTitle,
                    ogImage: {
                        id: metaDescription?.ogImage?.id,
                        imageUrl: metaDescription?.ogImage?.url,
                        imageAlt: 'jet178',
                    },
                    ogType: metaDescription?.ogType,
                    canonical: metaDescription?.canonical,
                },
                createdAt: createdAt,
                mainTitle: mainTitle,
                mainContent: mainContent,
                banner: {
                    id: banner?.id,
                    imageUrl: banner?.url,
                    imageAlt: 'jet178',
                },
                mobileBanner: {
                    id: mobileBanner?.id,
                    imageUrl: mobileBanner?.url,
                    imageAlt: 'jet178',
                },
                publishedAt: publishedAt,
            }
        } catch (error) {
            if (error instanceof ApolloError) {
                logger(error?.networkError?.message, 'Error Fetching Resource')
                throw new HttpApolloException(error)
            }

            throw error
        }
    }
}
