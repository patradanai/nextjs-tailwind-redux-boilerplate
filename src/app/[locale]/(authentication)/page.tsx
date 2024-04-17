import React from 'react'

import { NextPage } from 'next'
import { WithContext, WebPage } from 'schema-dts'

import { resourceService } from '@/services/implements'
import { env } from '@/utils/env'
import { StructureData } from '@/utils/structureData'

const HomePage: NextPage = async () => {
    const data = await resourceService.getResource({
        id: env.NEXT_PUBLIC_RESOURCE_ID,
    })

    const jsonLd: WithContext<WebPage> = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: data.metaDescription.metaTitle,
        image: data.metaDescription.ogImage.imageUrl,
        description: data.metaDescription.metaDescription,
    }

    return (
        <>
            <StructureData data={jsonLd} />
        </>
    )
}

export default HomePage
