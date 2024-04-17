export interface IResourceRequest {
    id: string
}

export interface IResourceResponse {
    resource: {
        favicon: {
            id: string
            url: string
        }
        logo: {
            id: string
            url: string
        }
        mainTitle: string
        mainContent: {
            html: string
        }
        metaDescription: {
            canonical: string
            isFollow: boolean
            isIndex: boolean
            keywords: string
            metaDescription: string
            metaTitle: string
            ogType: string
            ogImage: {
                id: string
                url: string
            }
        }
        banner: {
            id: string
            url: string
        }
        mobileBanner: {
            id: string
            url: string
        }
        primaryColor: {
            hex: string
        }
        secondaryColor: {
            hex: string
        }
        loginUrl: string
        registerUrl: string
        socialFacebook: string
        socialLine: string
        socialTwitter: string
        socialYoutube: string
        publishedAt: string
        createdAt: string
    }
}

export interface IResourceData {
    favicon: string
    logo: string
    mainTitle: string
    mainContent: {
        html: string
    }
    metaDescription: {
        canonical: string
        isFollow: boolean
        isIndex: boolean
        keywords: string
        metaDescription: string
        metaTitle: string
        ogType: string
        ogImage: {
            imageUrl: string
            imageAlt: string
            id: string
        }
    }
    banner: {
        imageUrl: string
        imageAlt: string
        id: string
    }
    mobileBanner: {
        imageUrl: string
        imageAlt: string
        id: string
    }
    primaryColor: {
        hex: string
    }
    secondaryColor: {
        hex: string
    }
    loginUrl: string
    registerUrl: string
    socialFacebook: string
    socialLine: string
    socialTwitter: string
    socialYoutube: string
    publishedAt: string
    createdAt: string
}
