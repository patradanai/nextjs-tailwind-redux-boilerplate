import { gql } from '@apollo/client'

export default gql`
    query Resources($id: ID!) {
        resource(where: { id: $id }) {
            favicon {
                id
                url
            }
            logo {
                id
                url
            }
            mainTitle
            mainContent {
                html
            }
            metaDescription {
                canonical
                isFollow
                isIndex
                keywords
                metaDescription
                metaTitle
                ogType
                ogImage {
                    id
                    url
                }
            }
            banner {
                id
                url
            }
            mobileBanner {
                id
                url
            }
            primaryColor {
                hex
            }
            secondaryColor {
                hex
            }
            loginUrl
            registerUrl
            socialFacebook
            socialLine
            socialTwitter
            socialYoutube
            publishedAt
            createdAt
        }
    }
`
